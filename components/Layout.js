import Navbar from './nav/Navbar';
import Footer from './Footer';
import { useTranslation } from 'next-i18next';

export default function Layout({children}) {
  const {t} = useTranslation('common');

  const menuItems = [
    {text: t('navbar.guardians'), link: '/guardians'},
    {text: t('navbar.account'), link: '/account'}
  ];

  return (
    <>
      <Navbar menuItems={menuItems}/>
      {children}
      <Footer/>
    </>
  );
}
