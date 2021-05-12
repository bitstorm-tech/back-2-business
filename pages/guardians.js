import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import { useTranslation } from 'next-i18next';
import GuardianCard from '../components/page/guardians/GuardianCard';
import { useState } from 'react';
import NewGuardianModal from '../components/page/guardians/NewGuardianModal';
import Guardian from '../backend/models/guardians';
import connectToMongoDb from '../backend/mongodb';
import axios from 'axios';

function Guardians({guardiansFromDb}) {
  const {t} = useTranslation('guardians');
  const [guardians, setGuardians] = useState(guardiansFromDb);
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function removeGuardian(name) {
    setGuardians([...guardians.filter(guardian => guardian.name !== name)]);
  }

  function closeModal() {
    setShowModal(false);
  }

  function addGuardian(newGuardian) {
    axios.post('/api/guardians', newGuardian).then(_ => {
      setGuardians([...guardians, newGuardian]);
      closeModal();
    });
  }

  return (
    <div className="m-5">
      <div className="flex flex-row justify-center space-x-4 mb-5">
        <PrimaryButton onClick={openModal}>
          {t('create-new-guardian')}
        </PrimaryButton>
        <PrimaryButton>
          {t('invite-existing-guardian')}
        </PrimaryButton>
      </div>
      <div className="flex flex-row space-x-4 justify-center flex-wrap">
        {guardians.map((guardian, i) =>
          <div key={i} className="m-2">
            <GuardianCard name={guardian.name} onDelete={() => removeGuardian(guardian.name)}/>
          </div>
        )}
      </div>
      <NewGuardianModal visible={showModal} onClose={closeModal} onSave={addGuardian}/>
    </div>
  );
}

export default withPageAuthRequired(Guardians);

export async function getServerSideProps({locale}) {
  await connectToMongoDb();
  const guardians = await Guardian.find();
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'guardians']),
      guardiansFromDb: JSON.parse(JSON.stringify(guardians))
    }
  };
}
