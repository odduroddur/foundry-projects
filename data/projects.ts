import type { Project, ProjectSummary } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'spotify-analysis',
    title: 'Spotify Analysis',
    category: 'Data Analysis',
    description:
      'Built with Palantir Foundry - Comprehensive music consumption analytics and listener insights platform.',
    cardImage: '🎵',
    hero: {
      title: '🎵 Spotify Analysis — Listening Patterns and Audience Insights',
      description:
        'An analytics experience for exploring listening behavior, surfacing artist trends, and turning raw streaming activity into Foundry-powered dashboards and decision-ready insights.',
      media: [
        {
          alt: 'Spotify Analysis dashboard mockup',
          caption: 'Replace this placeholder with a hero dashboard screenshot.',
          heightClass: 'h-96',
          label: '[Screenshot: Spotify Analysis dashboard]',
        },
      ],
    },
    techStack: [
      'Palantir Foundry',
      'TypeScript',
      'React',
      'Python',
      'Pipelines',
      'Ontology',
      'Dashboarding',
    ],
    sections: [
      {
        id: 'overview',
        title: 'Project Overview',
        blocks: [
          {
            kind: 'text',
            title: 'What it does',
            paragraphs: [
              'Spotify Analysis centralizes streaming history, listening trends, and artist-level performance into one reusable analytics workflow.',
              'The modular project page structure now makes it easy to expand this case study whenever screenshots, metrics, or architecture details are ready.',
            ],
          },
          {
            kind: 'text',
            title: 'Why it matters',
            bullets: [
              'Turns fragmented listening exports into a structured data model.',
              'Makes trend analysis easier to present in a polished portfolio format.',
              'Can be expanded by editing this single project entry instead of creating a new page file.',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Planned Showcase Content',
        background: 'dark',
        blocks: [
          {
            kind: 'features',
            title: 'Placeholder sections ready for real assets',
            items: [
              {
                title: 'Dashboard walkthrough',
                description:
                  'Show the main dashboard, KPI cards, and filtering experience once product screenshots are available.',
                image: {
                  alt: 'Spotify dashboard walkthrough placeholder',
                  caption: 'Future dashboard walkthrough image goes here.',
                  heightClass: 'h-56',
                  label: '[Screenshot: Dashboard walkthrough]',
                },
              },
              {
                title: 'Data model and transformations',
                description:
                  'Document the ingestion flow, transformations, and analytics model without creating a custom page component.',
                image: {
                  alt: 'Spotify data model placeholder',
                  caption: 'Future data model diagram goes here.',
                  heightClass: 'h-56',
                  label: '[Diagram: Data model]',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'asteroid-watch',
    title: 'Asteroid Watch',
    category: 'Space Tech',
    description:
      'Near-Earth Object Early Warning System - Real-time tracking and trajectory analysis powered by Palantir Foundry.',
    cardImage: '🪨',
    hero: {
      title: '☄️ Asteroid Watch — Near-Earth Object Early Warning System',
      description:
        'A real-time asteroid monitoring dashboard that pulls live data from NASA, detects close approaches, and sends AI-powered alerts when space rocks get too close for comfort.',
      media: [
        {
          alt: 'Asteroid Watch full dashboard view',
          caption: 'Dashboard Placeholder',
          heightClass: 'h-96',
          label: '[Screenshot: Full dashboard view]',
        },
        {
          alt: 'Asteroid Watch interactive demo video',
          caption: 'Video Placeholder',
          heightClass: 'h-64',
          label: '[Video: Interactive demo]',
        },
      ],
    },
    techStack: [
      'Python',
      'TypeScript',
      'React',
      'Polars',
      'REST APIs',
      'Foundry Data Connection',
      'Egress Policies',
      'Ontology Object Types',
      'Conditional Formatting',
      'Incremental Pipelines',
      'Foundry Schedules',
      'Foundry Automate',
      'TypeScript v2 Functions',
      'OSDK React',
      'Recharts',
      'GPT-5.5 (LLM)',
      'Developer Console',
      'Global Branching',
      'CSS Modules',
    ],
    sections: [
      {
        id: 'what-and-why',
        title: 'Section 1: What & Why',
        blocks: [
          {
            kind: 'text',
            title: 'The Problem',
            paragraphs: [
              'NASA tracks over 61,000 near-Earth asteroids, with new close approaches predicted daily. The raw data is scattered across multiple NASA APIs, returned as deeply nested JSON, and lacks any alerting mechanism.',
              'If something noteworthy is heading our way, you need to check manually.',
            ],
          },
          {
            kind: 'text',
            title: 'The Solution',
            description: 'An end-to-end early warning system that:',
            bullets: [
              'Pulls asteroid data daily from 3 NASA APIs and enriches it into a clean, queryable dataset.',
              'Detects threats automatically using configurable distance thresholds with deduplicated alerting.',
              'Delivers AI-powered briefings with a GPT-5.5-generated 7-Day Outlook and per-asteroid threat analysis.',
              'Presents everything in a custom React dashboard with interactive scatter plots and historical data.',
            ],
          },
          {
            kind: 'text',
            title: 'The Impact',
            bullets: [
              'Zero manual monitoring — the system checks NASA every morning and emails you only when something is noteworthy.',
              'Sub-second insights — from raw API data to interactive dashboard with AI analysis.',
              '300 years of history on-demand — click any asteroid to see every past and future Earth pass from 1900-2200.',
            ],
          },
        ],
      },
      {
        id: 'how-it-works',
        title: 'Section 2: How It Works',
        background: 'dark',
        blocks: [
          {
            kind: 'image',
            title: 'User Workflow - Daily Flow',
            image: {
              alt: 'Daily schedule flow diagram',
              caption: 'Daily Flow Diagram Placeholder',
              heightClass: 'h-40',
              label: '[Diagram: Daily schedule flow]',
            },
          },
          {
            kind: 'features',
            title: 'Dashboard Experience',
            items: [
              {
                title: '7-Day Outlook (top)',
                description:
                  'AI-generated summary of the week’s incoming asteroids with color-coded keywords.',
                image: {
                  alt: '7-Day Outlook banner',
                  caption: '7-Day Outlook Placeholder',
                  heightClass: 'h-24',
                  label: '[Screenshot: 7-Day Outlook banner]',
                },
              },
              {
                title: 'Threat Assessment Scatter Plot',
                description:
                  'Every asteroid is plotted by size versus distance. Bigger plus closer equals scarier. Red dots indicate close approach alerts, and yellow borders indicate potentially hazardous objects.',
                image: {
                  alt: 'Threat assessment scatter plot',
                  caption: 'Scatter Plot Placeholder',
                  heightClass: 'h-64',
                  label: '[Screenshot: Scatter plot]',
                },
              },
              {
                title: 'Asteroid Table',
                description:
                  'All incoming asteroids are sorted by date. Clicking any row opens the detail panel and highlights the selected row.',
                image: {
                  alt: 'Asteroid table with badges',
                  caption: 'Table Placeholder',
                  heightClass: 'h-40',
                  label: '[Screenshot: Asteroid table with badges]',
                },
              },
              {
                title: 'Detail Panel',
                description:
                  'The detail panel combines AI threat analysis, orbital data, observation history, and a NASA JPL link.',
                image: {
                  alt: 'Detail panel with AI analysis',
                  caption: 'Detail Panel Placeholder',
                  heightClass: 'h-40',
                  label: '[Screenshot: Detail panel with AI analysis]',
                },
              },
              {
                title: 'Close Approach History',
                description:
                  'An on-demand chart shows every Earth pass from 1900-2200, fetched live from the NASA JPL API. No historical data is stored, so the view stays fresh.',
                image: {
                  alt: 'Close approach history chart',
                  caption: 'History Chart Placeholder',
                  heightClass: 'h-40',
                  label: '[Screenshot: Close approach history chart]',
                },
              },
              {
                title: 'Email Alerts',
                description:
                  'AI-written notifications include human-scale comparisons plus links back to the dashboard and NASA JPL.',
                image: {
                  alt: 'Email notification placeholder',
                  caption: 'Email Placeholder',
                  heightClass: 'h-32',
                  label: '[Screenshot: Email notification]',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'under-the-hood',
        title: 'Section 3: Under the Hood',
        blocks: [
          {
            kind: 'image',
            title: 'Architecture Diagram',
            image: {
              alt: 'Architecture diagram',
              caption: 'Architecture Diagram Placeholder',
              heightClass: 'h-64',
              label: '[Architecture Diagram]',
            },
          },
          {
            kind: 'image',
            title: 'Daily Schedule',
            image: {
              alt: 'Daily schedule diagram',
              caption: 'Daily Schedule Diagram Placeholder',
              heightClass: 'h-40',
              label: '[Daily Schedule Flow: 7:00 AM UTC]',
            },
          },
          {
            kind: 'table',
            title: 'Technology Stack',
            columns: ['Layer', 'Technology', 'Purpose'],
            rows: [
              {
                layer: 'Data Ingestion',
                technology: 'Python (Polars), Lightweight Transforms',
                purpose: 'Pull and flatten NASA API data',
              },
              {
                layer: 'External APIs',
                technology: 'Data Connection Sources, Egress Policies',
                purpose: 'Secure outbound network access',
              },
              {
                layer: 'Storage',
                technology: 'Foundry Datasets',
                purpose: 'Structured tabular storage with full lineage',
              },
              {
                layer: 'Alerting Pipeline',
                technology: 'Incremental Transforms',
                purpose: 'Deduplicated append-only alert tracking',
              },
              {
                layer: 'Semantic Layer',
                technology: 'Foundry Ontology',
                purpose: 'Object types with conditional formatting',
              },
              {
                layer: 'Automation',
                technology: 'Foundry Automate (Object Sentinel)',
                purpose: 'Trigger-based email notifications',
              },
              {
                layer: 'Backend Functions',
                technology: 'TypeScript v2, OSDK Functions',
                purpose: 'Server-side API calls and AI generation',
              },
              {
                layer: 'AI/LLM',
                technology: 'GPT-5.5 via Foundry LLM Proxy',
                purpose: 'Threat summaries, weekly digest, and smart alerts',
              },
              {
                layer: 'Frontend',
                technology: 'React, TypeScript, Recharts, CSS Modules',
                purpose: 'Interactive dashboard with dark space theme',
              },
              {
                layer: 'Client SDK',
                technology: 'OSDK (@osdk/react)',
                purpose: 'Type-safe Ontology access from React',
              },
              {
                layer: 'Scheduling',
                technology: 'Foundry Schedules (cron)',
                purpose: 'Daily automated data refresh',
              },
            ],
          },
          {
            kind: 'decisions',
            title: 'Key Technical Decisions',
            items: [
              {
                title: 'On-demand history vs. stored history',
                description:
                  'Rather than storing every asteroid’s full close approach history, the app fetches it live from NASA’s CAD API when you click an asteroid. That keeps storage costs flat while keeping the data current.',
              },
              {
                title: 'Incremental deduplication with expiry',
                description:
                  'The main dataset rebuilds daily as a snapshot, but the alerts dataset is incremental and append-only. Alerts are deduplicated within an 8-day window so the same asteroid does not trigger repeated notifications during a single approach, but it can re-trigger if it returns months later.',
              },
              {
                title: 'Server-side Functions as API proxy',
                description:
                  'The React app runs in a Foundry development environment with restrictive Content Security Policy rules that block direct external API calls. A TypeScript Function handles NASA API calls on the server and returns structured data through OSDK.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'project-request-app',
    title: 'Project Request App',
    category: 'Web App',
    description:
      'Streamlined application for managing project requests with data integration via Palantir Foundry.',
    cardImage: '📋',
    hero: {
      title: '📋 Project Request App — Intake, Prioritization, and Delivery Tracking',
      description:
        'A workflow application for capturing incoming project requests, standardizing request data, and giving teams a clearer path from intake to delivery inside Foundry.',
      media: [
        {
          alt: 'Project Request App intake view',
          caption: 'Replace this placeholder with an intake workflow screenshot.',
          heightClass: 'h-96',
          label: '[Screenshot: Project Request intake flow]',
        },
      ],
    },
    techStack: [
      'Palantir Foundry',
      'React',
      'TypeScript',
      'Ontology',
      'Workflows',
      'Forms',
      'Automation',
    ],
    sections: [
      {
        id: 'overview',
        title: 'Project Overview',
        blocks: [
          {
            kind: 'text',
            title: 'What it solves',
            paragraphs: [
              'Project Request App gives teams a cleaner way to collect, triage, and route incoming ideas or support requests.',
            ],
            bullets: [
              'Standardizes request intake fields and downstream review steps.',
              'Connects project status updates back to a single source of truth.',
              'Fits the same reusable project page system as every other portfolio entry.',
            ],
          },
        ],
      },
      {
        id: 'showcase-assets',
        title: 'Planned Showcase Content',
        background: 'dark',
        blocks: [
          {
            kind: 'features',
            title: 'Placeholder sections ready for future screenshots',
            items: [
              {
                title: 'Request submission flow',
                description:
                  'Add the initial intake form and validation experience here when final screenshots are available.',
                image: {
                  alt: 'Request submission flow placeholder',
                  caption: 'Future request submission screenshot goes here.',
                  heightClass: 'h-56',
                  label: '[Screenshot: Request submission flow]',
                },
              },
              {
                title: 'Review and prioritization dashboard',
                description:
                  'Use this block for the review queue, prioritization criteria, and Foundry-backed workflow states.',
                image: {
                  alt: 'Review and prioritization dashboard placeholder',
                  caption: 'Future prioritization dashboard screenshot goes here.',
                  heightClass: 'h-56',
                  label: '[Screenshot: Prioritization dashboard]',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]

export const projectSummaries: ProjectSummary[] = projects.map((project) => ({
  title: project.title,
  slug: project.slug,
  category: project.category,
  description: project.description,
  cardImage: project.cardImage,
  href: `/projects/${project.slug}`,
}))

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
