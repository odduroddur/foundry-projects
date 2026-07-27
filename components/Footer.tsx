'use client';

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-300">
              Foundry developer building end-to-end data platforms — from raw ingestion and pipeline 
              design to ontology modeling, AI-powered features, and interactive applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Email: oddur1506@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2026 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
