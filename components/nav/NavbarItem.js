import Link from 'next/link';

export default function NavbarItem({menuEntry}) {
  if (!menuEntry.visible) {
    return '';
  }

  return (
    <Link href={menuEntry.link}>
      <div className="hover:text-green-400 cursor-pointer">
        {menuEntry.text}
      </div>
    </Link>
  );
}
