import Link from 'next/link';

export default function NavbarItem({menuEntry}) {
  return (
    <Link href={menuEntry.link}>
      <div className="hover:text-white cursor-pointer">
        {menuEntry.text}
      </div>
    </Link>
  );
}
