import Link from 'next/link';

export default function MenuItem({information}) {
  return(
    <div className="md:hover:bg-gray-400 cursor-pointer">
      <Link href={information.link}>{information.text}</Link>
    </div>
  )
}
