'use client';

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-300 max-w-md mx-auto mb-6">
          Foundry developer building end-to-end data platforms — from raw ingestion and pipeline 
          design to ontology modeling, AI-powered features, and interactive applications.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:oddur1506@gmail.com" className="text-gray-300 hover:text-primary transition text-2xl" title="Email">
            ✉️
          </a>
          <a href="https://www.linkedin.com/in/oddur-m%C3%A1r-oddsson-90a1a1265/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition text-2xl" title="LinkedIn">
            💼
          </a>
        </div>
        <div className="border-t border-gray-700 pt-6 text-gray-400 text-sm">
          <p>&copy; 2026 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
