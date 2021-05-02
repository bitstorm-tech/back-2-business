import Link from 'next/link';
import { useState } from 'react';
import MenuItem from './MenuItem';

export default function Navbar({menuItems}) {
  const [menuVisible, setMenuVisible] = useState(true);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function renderHamburgerOrClose() {
    if (menuVisible) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    }
  }

  function renderMenu() {
    if (menuVisible) {
      return (
        <div className="flex flex-col md:flex-row md:items-center w-full md:w-min mt-4 md:mt-0">
          {menuItems.map((menuItem, i) => <MenuItem key={i} information={menuItem} />)}
        </div>
      )
    }
  }

  return (
    <nav className="flex flex-col md:flex-row bg-blue-500 justify-between md:h-14 p-2">
      <div className="flex flex-row justify-between items-center">
        <div className="cursor-pointer">
          <Link href="/">LOGO</Link>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          {renderHamburgerOrClose()}
        </div>
      </div>
      {renderMenu()}
    </nav>
  );
}
