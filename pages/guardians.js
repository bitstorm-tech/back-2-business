import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Guardians() {
  return (
    <h1>Guardians of Time</h1>
  )
}

export default withPageAuthRequired(Guardians);

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale)
    }
  };
}
