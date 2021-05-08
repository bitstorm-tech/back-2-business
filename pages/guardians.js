import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ButtonPrimary from '../components/ui/ButtonPrimary';
import { useTranslation } from 'next-i18next';
import Guardian from '../components/page/guardians/Guardian';
import { useState } from 'react';

function Guardians() {
  const {t} = useTranslation('guardians');
  const [guardians, setGuardians] = useState([])

  function addGuardian() {
    setGuardians([...guardians, '']);
  }

  function deleteGuardian(index) {
    guardians.splice(index, 1);
    setGuardians([...guardians]);
  }

  return (
    <div className="m-5">
      <div className="flex flex-row justify-center space-x-4">
        <ButtonPrimary onClick={addGuardian}>{t('create-new-guardian')}</ButtonPrimary>
        <ButtonPrimary>{t('invite-existing-guardian')}</ButtonPrimary>
      </div>
      <div className="flex flex-row space-x-4 justify-center flex-wrap mt-2">
        {guardians.map((guardian, i) => <Guardian key={i} name={i} onDelete={deleteGuardian}/>)}
      </div>
    </div>
  )
}

export default withPageAuthRequired(Guardians);

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'guardians'])
    }
  };
}
