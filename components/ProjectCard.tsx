'use client';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      {image && (
        <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Image: {image}</span>
        </div>
      )}
      <div className="p-6">
        <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 text-primary font-semibold hover:underline">
          Learn More →
        </button>
      </div>
    </div>
  );
}
