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
  const isUrl = image && image.startsWith('http');

  return (
    <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
      {image && (
        <div className="w-full h-56 bg-gray-200 flex items-center justify-center overflow-hidden">
          {isUrl ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-6xl">{image}</span>
          )}
        </div>
      )}
      <div className="p-5">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-secondary mt-1 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
