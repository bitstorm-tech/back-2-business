import Link from 'next/link';

export default function ButtonPrimary({children, href}) {
  return (
    <Link href={href}>
      <div className="rounded hover:bg-green-300 w-max py-1 px-3 bg-green-400 cursor-pointer text-white">
        {children}
      </div>
    </Link>
  )
}
