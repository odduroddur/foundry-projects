'use client';

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  placeholder: string;
  height?: string;
}

export default function ImagePlaceholder({
  src,
  alt = 'Image',
  placeholder,
  height = 'h-64',
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`${height} rounded overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`bg-slate-700 ${height} rounded flex items-center justify-center`}>
      <div className="text-center">
        <p className="text-gray-400 mb-2">{placeholder}</p>
        <p className="text-gray-500 text-sm">Image placeholder - add src prop to replace</p>
      </div>
    </div>
  );
}