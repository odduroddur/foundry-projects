'use client';

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-300">
              Passionate foundry artisan creating unique metal works and designs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="#projects" className="hover:text-primary transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Email: oddur1506@gmail.com</p>
            <p className="text-gray-300">GitHub: odduroddur</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Foundry Projects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
