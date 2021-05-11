import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bottom-0 bg-green-400 min-w-full h-6 flex flex-row items-center space-x-4
    text-xs justify-center">
      <div className="hover:text-white">
        <Link href="/">Impressum</Link>
      </div>
      <div className="hover:text-white">
        <Link href="/">AGB</Link>
      </div>
      <div className="hover:text-white">
        <Link href="/">Datenschutzerklärung</Link>
      </div>
    </footer>
  );
}
