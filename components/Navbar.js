import Link from 'next/link';
import { useState } from 'react';
import MenuItem from './MenuItem';
import { useTranslation } from 'next-i18next';
import HamburgerSymbol from './ui/HamburgerSymbol';
import CloseSymbol from './ui/CloseSymbol';
import { useUser } from '@auth0/nextjs-auth0';
import ButtonLink from './ui/ButtonLink';

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

  function renderSingInSingUpButtons() {
    return user ? (
      <div className="mx-2">
        <ButtonLink href="/api/auth/logout">{t('logout')}</ButtonLink>
      </div>
    ) : (
      <div className="mx-2">
        <ButtonLink href="/api/auth/login">{t('sign-in')}</ButtonLink>
      </div>
    );
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
          <div className="mx-2 w-max" key={i}>
            <MenuItem menuEntry={menuItem}/>
          </div>)
        }
        {renderSingInSingUpButtons()}
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
          {mobileMenuVisible ? <CloseSymbol/> : <HamburgerSymbol/>}
        </div>
      </div>
      {renderDesktopMenu()}
      {renderMobileMenu()}
    </nav>
  );
}
