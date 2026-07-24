'use client';

import { useState } from 'react';
import ImagePlaceholder from '../ImagePlaceholder';
import { DashboardFeature } from '@/lib/projects';

interface DashboardFeaturesSectionProps {
  features: DashboardFeature[];
  dailyFlow: string;
}

export default function DashboardFeaturesSection({ features, dailyFlow }: DashboardFeaturesSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-slate-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Section 2: How It Works</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">User Workflow - Daily Flow</h3>
          <div className="bg-slate-800 rounded-lg p-6">
            <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono">{dailyFlow}</pre>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Dashboard Experience</h3>

          <div className="space-y-8">
            {features.map((feature, i) => (
              <div key={i}>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">{feature.title}</h4>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="bg-slate-800 rounded-lg p-6 overflow-hidden flex justify-center cursor-pointer hover:bg-slate-700 transition"
                     onClick={() => feature.imagePlaceholder.startsWith('http') && setSelectedImage(feature.imagePlaceholder)}>
                  {feature.imagePlaceholder.startsWith('http') ? (
                    <img
                      src={feature.imagePlaceholder}
                      alt={feature.title}
                      className="max-w-full h-auto object-contain rounded-lg"
                      style={{ maxHeight: '500px' }}
                    />
                  ) : (
                    <ImagePlaceholder placeholder={feature.imagePlaceholder} height="h-40" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-slate-800 rounded-lg w-[95vw] h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10"
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Expanded view"
              className="flex-1 object-contain p-6"
            />
          </div>
        </div>
      )}
    </section>
  );
}
