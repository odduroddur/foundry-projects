'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-secondary text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          📊 Portfolio
        </Link>
        <nav className="flex gap-6">
          <Link href="/#projects" className="hover:text-primary transition">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-primary transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
