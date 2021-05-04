import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Settings() {
  return (
    <>
      <Head>
        <title>Back 2 Business - Settings</title>
      </Head>
      <h1>Settings Page</h1>
    </>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale)
    }
  };
}
