'use client';

import ImagePlaceholder from '../../ImagePlaceholder';
import { DashboardFeature } from '@/lib/projects';

interface DashboardFeaturesSectionProps {
  features: DashboardFeature[];
}

export default function DashboardFeaturesSection({ features }: DashboardFeaturesSectionProps) {
  return (
    <section className="bg-slate-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Section 2: How It Works</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Dashboard Experience</h3>

          <div className="space-y-8">
            {features.map((feature, i) => (
              <div key={i}>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">{feature.title}</h4>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="bg-slate-800 rounded-lg p-6">
                  <ImagePlaceholder placeholder={feature.imagePlaceholder} height="h-40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}