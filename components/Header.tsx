'use client';

export default function Header() {
  return (
    <header className="bg-surface border-b border-gray-200 py-7">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <img 
            src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/makeover/components/Foundry%20Logo.png" 
            alt="Foundry" 
            className="h-8 w-auto object-contain" 
          />
          <span className="font-[family-name:var(--font-brutal)] text-xs tracking-wide text-secondary">
            orthancfoundry
          </span>
        </a>
        <nav>
          <a href="#contact" className="text-sm text-gray-500 hover:text-primary transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
