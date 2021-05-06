import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Roadmap() {
  return (
    <h1>Roadmap</h1>
  );
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale)
    }
  };
}
