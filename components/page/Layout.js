import Navbar from '../nav/Navbar';
import Footer from './Footer';
import { useTranslation } from 'next-i18next';
import { useUser } from '@auth0/nextjs-auth0';

export default function Layout({children}) {
  const {t} = useTranslation('common');
  const {user} = useUser();

  const menuItems = [
    {text: t('navbar.roadmap'), link: '/roadmap', visible: true},
    {text: t('navbar.guardians'), link: '/guardians', visible: !!user},
    {text: t('navbar.account'), link: '/account', visible: !!user}
  ];

  return (
    <>
      <Navbar menuItems={menuItems}/>
      {children}
      <Footer/>
    </>
  );
}
