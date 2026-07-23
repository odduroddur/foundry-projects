'use client';

import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  cardImage?: string;
  href: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  cardImage,
  href,
}: ProjectCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      {cardImage && (
        <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Image: {cardImage}</span>
        </div>
      )}
      <div className="p-6">
        <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Link href={href} className="mt-4 inline-block text-primary font-semibold hover:underline">
          Learn More →
        </Link>
      </div>
    </article>
  );
}
