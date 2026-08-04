'use client';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <span className="text-sm font-medium text-secondary tracking-wide">orthancfoundry.dev</span>
        <nav className="flex gap-6">
          <a href="#contact" className="text-sm text-gray-500 hover:text-primary transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
