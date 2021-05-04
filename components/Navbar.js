import Link from 'next/link';
import { useState } from 'react';
import MenuItem from './MenuItem';

export default function Navbar({menuItems}) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuVisible(!mobileMenuVisible);
  }

  function closeMobileMenu() {
    setMobileMenuVisible(false);
  }

  function renderHamburgerOrClose() {
    if (mobileMenuVisible) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      );
    }
  }

  function renderMobileMenu() {
    if (mobileMenuVisible) {
      return (
        <div className="flex flex-col items-center w-full mt-4 md:hidden">
          {menuItems.map((menuItem, i) =>
            <div className="mt-4" key={i} onClick={closeMobileMenu}>
              <MenuItem menuEntry={menuItem}/>
            </div>)
          }
        </div>
      );
    }
  }

  function renderDesktopMenu() {
    return (
      <div className="hidden md:flex flex-row items-center w-min">
        {menuItems.map((menuItem, i) =>
          <div className="mt-4 md:mt-0" key={i}>
            <MenuItem menuEntry={menuItem}/>
          </div>)
        }
      </div>
    );
  }

  return (
    <nav className="flex flex-col md:flex-row bg-blue-500 justify-between md:h-14 p-2">
      <div className="flex flex-row justify-between items-center">
        <div className="cursor-pointer" onClick={closeMobileMenu}>
          <Link href="/">Back 2 Business</Link>
        </div>
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {renderHamburgerOrClose()}
        </div>
      </div>
      {renderDesktopMenu()}
      {renderMobileMenu()}
    </nav>
  );
}
