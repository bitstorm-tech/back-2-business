import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import { useTranslation } from 'next-i18next';
import Guardian from '../components/page/guardians/Guardian';
import { useState } from 'react';

function Guardians() {
  let counter = 1;
  const {t} = useTranslation('guardians');
  const [guardians, setGuardians] = useState([]);

  function createNewGuardian() {
    setGuardians([...guardians, {name: `New Guardian #${counter++}`}]);
  }

  function removeGuardian(name) {
    setGuardians([...guardians.filter(guardian => guardian.name !== name)]);
  }

  return (
    <div className="m-5">
      <div className="flex flex-row justify-center space-x-4 mb-5">
        <PrimaryButton onClick={() => createNewGuardian()}>
          {t('create-new-guardian')}
        </PrimaryButton>
        <PrimaryButton>
          {t('invite-existing-guardian')}
        </PrimaryButton>
      </div>
      <div className="flex flex-row space-x-4 justify-center flex-wrap">
        {guardians.map((guardian, i) =>
          <div key={i} className="m-2">
            <Guardian name={guardian.name} onDelete={() => removeGuardian(guardian.name)}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default withPageAuthRequired(Guardians);

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'guardians'])
    }
  };
}
