import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({children}) {
  return (
    <>
      <Navbar menuItems={menuItems}/>
      {children}
      <Footer/>
    </>
  );
}

const menuItems = [
  {text: 'Settings', link: '/settings'},
  {text: 'Test', link: '/'}
];
