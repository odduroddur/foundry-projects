export interface TechStackItem {
  layer: string;
  technology: string;
  purpose: string;
}

export interface KeyDecision {
  title: string;
  description: string;
}

export interface DashboardFeature {
  title: string;
  description: string;
  imagePlaceholder: string;
}

export interface ProjectContent {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  tagline: string;
  heroImagePlaceholder: string;
  heroVideoPlaceholder: string;
  technologies: string[];
  sections: {
    whatWhy: {
      problem: string;
      solution: string[];
      impact: string[];
    };
    howItWorks: {
      dashboardFeatures: DashboardFeature[];
    };
    underTheHood: {
      techStack: TechStackItem[];
      keyDecisions: KeyDecision[];
    };
  };
}

export const projects: ProjectContent[] = [
  {
    id: 'asteroid-watch',
    slug: 'asteroid-watch',
    title: 'Asteroid Watch — Near-Earth Object Early Warning System',
    emoji: '☄️',
    tagline: 'A real-time asteroid monitoring dashboard that pulls live data from NASA, detects close approaches, and sends AI-powered alerts when space rocks get too close for comfort.',
    heroImagePlaceholder: '[Screenshot: Full dashboard view showing the dark space theme — scatter plot, AI 7-Day Outlook, table with ALERT badge, detail panel with AI analysis and close approach history chart]',
    heroVideoPlaceholder: '[Short video — click a dot on scatter plot → table flashes and scrolls → detail panel opens with AI analysis loading → history chart renders]',
    technologies: [
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
    sections: {
      whatWhy: {
        problem: 'NASA tracks over 61,000 near-Earth asteroids, with new close approaches predicted daily. The raw data is scattered across multiple NASA APIs, returned as deeply nested JSON, and lacks any alerting mechanism. If something noteworthy is heading our way, you need to check manually.',
        solution: [
          'Pulls asteroid data daily from 3 NASA APIs and enriches it into a clean, queryable dataset',
          'Detects threats automatically using configurable distance thresholds with deduplicated alerting',
          'Delivers AI-powered briefings — a GPT-5.5-generated 7-Day Outlook and per-asteroid threat analysis',
          'Presents everything in a custom React dashboard with interactive scatter plots and historical data',
        ],
        impact: [
          'Zero manual monitoring — the system checks NASA every morning and emails you only when noteworthy',
          'Sub-second insights — from raw API data to interactive dashboard with AI analysis',
          '300 years of history on-demand — click any asteroid to see every past and future Earth pass from 1900-2200',
        ],
      },
      howItWorks: {
        dashboardFeatures: [
          {
            title: '7-Day Outlook (top)',
            description: 'AI-generated summary of the weeks incoming asteroids with color-coded keywords',
            imagePlaceholder: '[Screenshot: The cyan "7-Day Outlook" banner with colored text]',
          },
          {
            title: 'Threat Assessment Scatter Plot',
            description: 'Every asteroid plotted by size vs. distance. Bigger + closer = scarier. Red dots = close approach alerts. Yellow borders = potentially hazardous.',
            imagePlaceholder: '[Screenshot: Scatter plot with mixed dots, one red, several with yellow borders]',
          },
          {
            title: 'Asteroid Table',
            description: 'All incoming asteroids sorted by date. Click any row to open detail panel and the row flashes cyan.',
            imagePlaceholder: '[Screenshot: Table with ALERT/PHA/OK badges, one row highlighted]',
          },
          {
            title: 'Detail Panel',
            description: 'Full asteroid profile: AI threat analysis, orbital data, observation history, NASA JPL link.',
            imagePlaceholder: '[Screenshot: Detail panel showing AI Analysis + Close Approach section]',
          },
          {
            title: 'Close Approach History',
            description: 'On-demand chart showing every Earth pass from 1900-2200, fetched live from NASA JPL API. No data stored — always fresh.',
            imagePlaceholder: '[Screenshot: Bar chart with blue/cyan bars and red threshold line]',
          },
          {
            title: 'Email Alerts',
            description: 'AI-written notifications with human-scale comparisons, links to the dashboard and NASA JPL.',
            imagePlaceholder: '[Screenshot: Email with asteroid name, distance, size, verdict]',
          },
        ],
      },
      underTheHood: {
        techStack: [
          { layer: 'Data Ingestion', technology: 'Python (Polars), Lightweight Transforms', purpose: 'Pull & flatten NASA API data' },
          { layer: 'External APIs', technology: 'Data Connection Sources, Egress Policies', purpose: 'Secure outbound network access' },
          { layer: 'Storage', technology: 'Foundry Datasets', purpose: 'Structured tabular storage with full lineage' },
          { layer: 'Alerting Pipeline', technology: 'Incremental Transforms', purpose: 'Deduplicated append-only alert tracking' },
          { layer: 'Semantic Layer', technology: 'Foundry Ontology', purpose: 'Object types with conditional formatting' },
          { layer: 'Automation', technology: 'Foundry Automate (Object Sentinel)', purpose: 'Trigger-based email notifications' },
          { layer: 'Backend Functions', technology: 'TypeScript v2, OSDK Functions', purpose: 'Server-side API calls, AI generation' },
          { layer: 'AI/LLM', technology: 'GPT-5.5 via Foundry LLM Proxy', purpose: 'Threat summaries, weekly digest, smart alerts' },
          { layer: 'Frontend', technology: 'React, TypeScript, Recharts, CSS Modules', purpose: 'Interactive dashboard with dark space theme' },
          { layer: 'Client SDK', technology: 'OSDK (@osdk/react)', purpose: 'Type-safe Ontology access from React' },
          { layer: 'Scheduling', technology: 'Foundry Schedules (cron)', purpose: 'Daily automated data refresh' },
        ],
        keyDecisions: [
          {
            title: '1. On-demand history vs. stored history',
            description: 'Rather than storing every asteroids full close approach history (which would grow endlessly), the app fetches it live from NASAs CAD API when you click an asteroid. Zero storage cost, always current data.',
          },
          {
            title: '2. Incremental deduplication with expiry',
            description: 'The main dataset rebuilds daily (SNAPSHOT), but the alerts dataset is incremental (append-only). Alerts are deduplicated within an 8-day window — the same asteroid wont trigger repeated notifications during a single approach, but can re-trigger if it returns months later.',
          },
          {
            title: '3. Server-side Functions as API proxy',
            description: 'The React app runs in a Foundry dev environment with restrictive Content Security Policy, blocking direct external API calls. A TypeScript Function handles the NASA API calls server-side, returning structured data through OSDK — no CSP issues.',
          },
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string): ProjectContent | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): ProjectContent[] {
  return projects;
}