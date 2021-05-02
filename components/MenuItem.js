import Link from 'next/link';

export default function MenuItem({menuEntry}) {
  return(
    <div className="hover:bg-gray-400 cursor-pointer">
      <Link href={menuEntry.link}>{menuEntry.text}</Link>
    </div>
  )
}
