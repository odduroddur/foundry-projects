'use client';

import ImagePlaceholder from '../ImagePlaceholder';

interface HeroSectionProps {
  emoji: string;
  title: string;
  tagline: string;
  heroImagePlaceholder: string;
  heroVideoPlaceholder: string;
}

export default function HeroSection({
  emoji,
  title,
  tagline,
  heroImagePlaceholder,
  heroVideoPlaceholder,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {emoji} {title}
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">{tagline}</p>

        <div className="bg-slate-800 rounded-lg p-8">
          <p className="text-gray-400 mb-4">See It In Action</p>
          {heroVideoPlaceholder.startsWith('http') ? (
            heroVideoPlaceholder.endsWith('.mp4') || heroVideoPlaceholder.endsWith('.webm') ? (
              <video
                src={heroVideoPlaceholder}
                controls
                className="w-full rounded-lg"
              />
            ) : (
              <iframe
                src={heroVideoPlaceholder}
                className="w-full rounded-lg"
                style={{ height: '400px' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )
          ) : (
            <ImagePlaceholder placeholder="Interactive demo video" height="h-64" />
          )}
        </div>
      </div>
    </section>
  );
}
