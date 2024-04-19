'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/' && (
        <>
          <footer className="bottom-0 left-0 z-50 p-20 font-oldStandardTT">
            <hr className="markdown-hr" />
            <Link
              href="/"
              className="markdown-h4 text-cH4 hover:font-bold hover:underline hover:text-cLinkVisited"
            >
              Home
            </Link>
          </footer>
        </>
      )}
    </>
  );
}