import NavbarItem from '../nav/NavbarItem';

export default function Footer() {
  return (
    <footer
      className="bottom-0 bg-indigo-900 min-w-full h-6 flex flex-row items-center space-x-4 text-xs justify-center">
      <NavbarItem>Impressum</NavbarItem>
      <NavbarItem>AGB</NavbarItem>
      <NavbarItem>Datenschutzerklärung</NavbarItem>
    </footer>
  );
}
