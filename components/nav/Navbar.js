import Link from 'next/link';
import { useState } from 'react';
import NavbarItem from './NavbarItem';
import { useTranslation } from 'next-i18next';
import HamburgerSymbol from '../ui/HamburgerSymbol';
import CloseSymbol from '../ui/CloseSymbol';
import { useUser } from '@auth0/nextjs-auth0';
import ButtonPrimary from '../ui/ButtonPrimary'

export default function Navbar({menuItems}) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const {t} = useTranslation('common');
  const {user} = useUser();

  function toggleMobileMenu() {
    setMobileMenuVisible(!mobileMenuVisible);
  }

  function closeMobileMenu() {
    setMobileMenuVisible(false);
  }

  function renderAuthButtons() {
    return user ? (
      <div className="mx-2">
        <ButtonPrimary href="/api/auth/logout">{t('logout')}</ButtonPrimary>
      </div>
    ) : (
      <div className="mx-2">
        <ButtonPrimary href="/api/auth/login">{t('sign-in')}</ButtonPrimary>
      </div>
    );
  }

  function renderMobileMenu() {
    if (mobileMenuVisible) {
      return (
        <div className="flex flex-col items-center w-full mt-4 sm:hidden">
          {menuItems.map((menuItem, i) =>
            <div className="mt-4" key={i} onClick={closeMobileMenu}>
              <NavbarItem menuEntry={menuItem}/>
            </div>)
          }
          <div className="mt-10">
            {renderAuthButtons()}
          </div>
        </div>
      );
    }
  }

  function renderDesktopMenu() {
    return (
      <div className="hidden sm:flex flex-row items-center w-min">
        {menuItems.map((menuItem, i) =>
          <div className="mx-2 w-max" key={i}>
            <NavbarItem visible={!!user} menuEntry={menuItem}/>
          </div>)
        }
        {renderAuthButtons()}
      </div>
    );
  }

  return (
    <nav className="flex flex-col sm:flex-row bg-blue-400 justify-between sm:h-14 p-2 sticky top-0">
      <div className="flex flex-row justify-between items-center">
        <div className="cursor-pointer" onClick={closeMobileMenu}>
          <Link href="/">Back 2 Business</Link>
        </div>
        <div className="sm:hidden" onClick={toggleMobileMenu}>
          {mobileMenuVisible ? <CloseSymbol/> : <HamburgerSymbol/>}
        </div>
      </div>
      {renderDesktopMenu()}
      {renderMobileMenu()}
    </nav>
  );
}
