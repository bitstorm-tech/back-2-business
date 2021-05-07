import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bottom-0 bg-green-400 min-w-full h-6 flex flex-row items-center space-x-4
    text-xs justify-center">
      <Link href="/">Impressum</Link>
      <Link href="/">AGB</Link>
      <Link href="/">Datenschutzerklärung</Link>
    </footer>
  );
}
