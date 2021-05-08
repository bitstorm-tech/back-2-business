import Link from 'next/link';

export default function PrimaryButton({children, href, onClick}) {
  function renderDiv() {
    return (
      <button onClick={onClick}
           className="rounded hover:bg-green-300 bg-green-400 w-max py-1 px-3 cursor-pointer text-white rounded-full focus:outline-none">
        {children}
      </button>
    )
  }

  if (href) {
    return <Link href={href}>{renderDiv()}</Link>;
  }
  return renderDiv();
}
