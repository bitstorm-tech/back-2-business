import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation } from 'next-i18next';

export default function Layout({children}) {
  const {t} = useTranslation('navbar');

  const menuItems = [
    {text: t('settings'), link: '/settings'},
    {text: 'Test', link: '/'},
    {text: 'Test 2', link: '/'}
  ];

  return (
    <>
      <Navbar menuItems={menuItems}/>
      {children}
      <Footer/>
    </>
  );
}
