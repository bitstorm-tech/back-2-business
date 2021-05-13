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

  async function removeGuardian(id) {
    await axios.delete(`/api/guardians/${id}`);
    setGuardians([...guardians.filter(guardian => guardian._id !== id)]);
  }

  function closeModal() {
    setShowModal(false);
  }

  async function addGuardian(newGuardian) {
    const response = await axios.post('/api/guardians', newGuardian);
    setGuardians([...guardians, response.data]);
    closeModal();
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
        {guardians.map(guardian =>
          <div key={guardian._id} className="m-3 lg:w-5/12">
            <GuardianCard name={guardian.name} onDelete={() => removeGuardian(guardian._id)}/>
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
