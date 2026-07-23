'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug } from '@/lib/projects';
import HeroSection from '@/components/ProjectPage/HeroSection';
import TechStackSection from '@/components/ProjectPage/TechStackSection';
import WhatWhySection from '@/components/ProjectPage/WhatWhySection';
import DashboardFeaturesSection from '@/components/ProjectPage/DashboardFeaturesSection';
import UnderTheHoodSection from '@/components/ProjectPage/UnderTheHoodSection';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-slate-950 py-4 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <Link href="/#projects" className="text-blue-400 hover:text-blue-300 transition">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      <HeroSection
        emoji={project.emoji}
        title={project.title}
        tagline={project.tagline}
        heroImagePlaceholder={project.heroImagePlaceholder}
        heroVideoPlaceholder={project.heroVideoPlaceholder}
      />

      <TechStackSection technologies={project.technologies} />

      <WhatWhySection
        problem={project.sections.whatWhy.problem}
        solution={project.sections.whatWhy.solution}
        impact={project.sections.whatWhy.impact}
      />

      <DashboardFeaturesSection features={project.sections.howItWorks.dashboardFeatures} />

      <UnderTheHoodSection
        techStack={project.sections.underTheHood.techStack}
        keyDecisions={project.sections.underTheHood.keyDecisions}
      />
    </main>
  );
}
