'use client';

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-16 mb-8">
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-300 mb-3">About</h3>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Foundry developer building end-to-end data platforms — from raw ingestion and pipeline 
              design to ontology modeling, AI-powered features, and interactive applications.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-300 mb-3">Contact</h3>
            <p className="text-sm text-gray-500 mb-1">oddur1506@gmail.com</p>
            <a 
              href="https://www.linkedin.com/in/oddur-m%C3%A1r-oddsson-90a1a1265/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-500 hover:text-primary transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="pt-8 text-center">
          <p className="text-xs text-gray-600">&copy; 2026 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
