import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Account() {
  return (
    <>
      <Head>
        <title>Back 2 Business - Settings</title>
      </Head>
      <h1>Account Settings Page</h1>
    </>
  )
}

export default withPageAuthRequired(Account);

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale)
    }
  };
}
