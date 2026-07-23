import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/projects/HeroSection'
import ProjectBreadcrumbs from '@/components/projects/ProjectBreadcrumbs'
import ProjectSection from '@/components/projects/ProjectSection'
import TechStack from '@/components/projects/TechStack'
import { getProjectBySlug, projects } from '@/data/projects'

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Foundry Projects Showcase`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <ProjectBreadcrumbs title={project.title} />
        <HeroSection project={project} />
        <TechStack items={project.techStack} />
        {project.sections.map((section) => (
          <ProjectSection key={section.id} section={section} />
        ))}
      </main>
      <Footer />
    </>
  )
}
