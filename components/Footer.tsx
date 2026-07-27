'use client';

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-16 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-300 max-w-sm">
              Foundry developer building end-to-end data platforms — from raw ingestion and pipeline 
              design to ontology modeling, AI-powered features, and interactive applications.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <a 
              href="mailto:oddur1506@gmail.com" 
              className="text-gray-300 hover:text-primary transition block mb-2"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/oddur-m%C3%A1r-oddsson-90a1a1265/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-primary transition block"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2026 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
