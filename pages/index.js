import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Back 2 Business</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    </div>
  );
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale)
    }
  };
}
