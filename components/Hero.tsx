'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-secondary to-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-xl text-gray-300 mb-8">
          Discover my projects in data analysis, space tech, and web development
        </p>
        <a href="#projects" className="inline-block bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
          Explore Projects
        </a>
      </div>
    </section>
  );
}
