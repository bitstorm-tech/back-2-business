import Link from 'next/link';

export default function ButtonPrimary({children, href}) {
  function renderDiv() {
    return (
      <div className="rounded hover:bg-green-300 bg-green-400 w-max py-1 px-3 cursor-pointer text-white rounded-full">
        {children}
      </div>
    )
  }

  if (href) {
    return <Link href={href}>{renderDiv()}</Link>;
  }
  return renderDiv();
}
