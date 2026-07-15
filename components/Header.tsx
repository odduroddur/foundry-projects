'use client';

export default function Header() {
  return (
    <header className="bg-secondary text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🔨 Foundry Projects</h1>
        <nav className="flex gap-6">
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
