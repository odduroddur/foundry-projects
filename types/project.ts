export type ProjectImage = {
  alt: string
  caption?: string
  heightClass?: string
  label: string
  src?: string
}

export type ProjectDecision = {
  title: string
  description: string
}

export type ProjectTechnologyRow = {
  layer: string
  technology: string
  purpose: string
}

export type ProjectTextBlock = {
  kind: 'text'
  title: string
  description?: string
  paragraphs?: string[]
  bullets?: string[]
}

export type ProjectImageBlock = {
  kind: 'image'
  title: string
  description?: string
  image: ProjectImage
}

export type ProjectFeatureItem = {
  title: string
  description: string
  image: ProjectImage
}

export type ProjectFeatureListBlock = {
  kind: 'features'
  title: string
  items: ProjectFeatureItem[]
}

export type ProjectTableBlock = {
  kind: 'table'
  title: string
  columns: [string, string, string]
  rows: ProjectTechnologyRow[]
}

export type ProjectDecisionBlock = {
  kind: 'decisions'
  title: string
  items: ProjectDecision[]
}

export type ProjectSectionBlock =
  | ProjectTextBlock
  | ProjectImageBlock
  | ProjectFeatureListBlock
  | ProjectTableBlock
  | ProjectDecisionBlock

export type ProjectSection = {
  id: string
  title: string
  background?: 'dark'
  blocks: ProjectSectionBlock[]
}

export type Project = {
  slug: string
  title: string
  category: string
  description: string
  cardImage: string
  hero: {
    title: string
    description: string
    media: ProjectImage[]
  }
  techStack: string[]
  sections: ProjectSection[]
}

export type ProjectSummary = Pick<
  Project,
  'title' | 'slug' | 'category' | 'description' | 'cardImage'
> & {
  href: string
}
