'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-secondary to-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4">Welcome to My Foundry Showcase</h2>
        <p className="text-xl text-gray-300 mb-8">
          Discover amazing foundry projects built with passion and precision
        </p>
        <button className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
          Explore Projects
        </button>
      </div>
    </section>
  );
}
