'use client';

export default function Header() {
  return (
    <header className="bg-gray-200 border-b border-gray-300 py-5">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <span className="text-sm font-semibold text-secondary tracking-wide">orthancfoundry.dev</span>
        <nav>
          <a href="#contact" className="text-sm text-gray-500 hover:text-primary transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
