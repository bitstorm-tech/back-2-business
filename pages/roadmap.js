import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Card from '../components/ui/Card';
import { useTranslation } from 'next-i18next';

export default function Roadmap() {
  const {t} = useTranslation('roadmap');

  return (
    <div className="h-full">
      <div className="p-10 flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0 justify-center">
        <Card header={t('header-platforms')}>
          <ul>
            <li>Chrome Extension</li>
            <li>Firefox Extension</li>
            <li>Safari Extension</li>
            <li>iOS App</li>
            <li>Android App</li>
          </ul>
        </Card>
        <Card header={t('header-guardian-mechanics')}>
          <ul>
            <li>Light Banner</li>
            <li>Fullscreen Banner</li>
            <li>Fullscreen Banner without close option</li>
            <li>Guardian SMS</li>
            <li>Guardian Phone Call</li>
            <li>Guardian SMS to other People</li>
            <li>Guardian Phone Call to other People</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'roadmap'])
    }
  };
}
