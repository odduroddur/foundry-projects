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
      dailyFlow: string;
    };
    underTheHood: {
      architectureDiagramSvg: string;
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
        problem:
          'NASA tracks over 61,000 near-Earth asteroids, with new close approaches predicted daily. The raw data is scattered across multiple NASA APIs, returned as deeply nested JSON, and lacks any alerting mechanism. If something noteworthy is heading our way, you need to check manually.',
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
            description:
              'Every asteroid plotted by size vs. distance. Bigger + closer = scarier. Red dots = close approach alerts. Yellow borders = potentially hazardous.',
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
            description:
              'On-demand chart showing every Earth pass from 1900-2200, fetched live from NASA JPL API. No data stored — always fresh.',
            imagePlaceholder: '[Screenshot: Bar chart with blue/cyan bars and red threshold line]',
          },
          {
            title: 'Email Alerts',
            description: 'AI-written notifications with human-scale comparisons, links to the dashboard and NASA JPL.',
            imagePlaceholder: '[Screenshot: Email with asteroid name, distance, size, verdict]',
          },
        ],
        dailyFlow:
          '7:00 AM → System pulls next 7 days of asteroid data from NASA\n→ Enriches with orbital parameters + discovery info\n→ Checks for close approaches (< threshold)\n→ If new threat found → AI writes a briefing → Email sent',
      },
      underTheHood: {
        architectureDiagramSvg: '<svg width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="flowchart" viewBox="0 0 1591.75 1561.41259765625" role="graphics-document document" aria-roledescription="flowchart-v2"><defs><style>svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#ccc;}text{fill:#ccc;color:#ccc;}.node rect,.node circle,.node ellipse,.node polygon,.node path{fill:#1f2020;stroke:#ccc;stroke-width:1px;}.label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#ccc;}text{text-anchor:middle;}.arrowheadPath{fill:lightgrey;}.edgePath .path{stroke:lightgrey;stroke-width:2.0px;}.cluster rect{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:rgba(255, 255, 255, 0.25);stroke-width:1px;}.cluster text{fill:#F9FFFE;}.cluster-label span{color:#F9FFFE;}.flowchart-link{stroke:lightgrey;fill:none;}</style></defs><g><marker id="pointEnd" class="marker flowchart-v2" viewBox="0 0 10 10" refX="5" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowMarkerPath"/></marker><g class="root"><g class="clusters"><g class="cluster" id="Alerting"><rect x="42.3515625" y="1118.4126586914062" width="261.296875" height="435"/><text x="144.609375" y="1142.4126586914062" style="fill:#F9FFFE;font-weight:bold;">Alerting</text></g><g class="cluster" id="Application"><rect x="406.97265625" y="1425.4126586914062" width="1091.84375" height="128"/><text x="912.33984375" y="1449.4126586914062" style="fill:#F9FFFE;font-weight:bold;">Application</text></g><g class="cluster" id="Functions"><rect x="472.9375" y="1247.4126586914062" width="1110.8125" height="128"/><text x="994.0859375" y="1271.4126586914062" style="fill:#F9FFFE;font-weight:bold;">Functions</text></g><g class="cluster" id="Ontology"><rect x="8" y="940.4126586914062" width="579.875" height="128"/><text x="266.09375" y="964.4126586914062" style="fill:#F9FFFE;font-weight:bold;">Ontology</text></g><g class="cluster" id="foundryDataLayer"><rect x="15.2421875" y="162" width="1199.35546875" height="728.4126586914062"/><text x="545.193359375" y="186" style="fill:#F9FFFE;font-weight:bold;">Foundry Data Layer</text></g><g class="cluster" id="externalAPIs"><rect x="19.375" y="8" width="1162.875" height="104"/><text x="554.328125" y="32" style="fill:#F9FFFE;font-weight:bold;">External APIs</text></g></g><g class="edgePaths"><path d="M152.688,87 L152.688,162" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M183.145,265 L211.04,292.6 L322.62,323.834" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M403.211,87 L386.426,162.715" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M631.047,87 L649.939,163.029" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M748.258,248.765 L568.447,286.914" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M446.973,393 L446.973,439" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M452.938,577.414 L452.938,973.413" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M339.473,546.395 L173,623.426" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M173,705.426 L173,751.426" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M173,865.413 L173,961.413" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M633.755,265 L560.308,317.39" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M452.938,1031.413 L576.992,1430.753" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M173,1043.413 L173,1139.413" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M173,1197.413 L448.814,1286.281" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M627.148,1350.413 L173,1458.413" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M863.773,87 L863.773,183" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M857.324,265 L857.324,1268.915" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M1066.625,87 L1052.705,162.225" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M979.289,258.228 L1093.172,597.724" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M892.82,1350.413 L1146.558,1466.501" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M1154.148,1350.413 L1194.729,1444.809" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/><path d="M1433.883,1350.413 L1378.51,1449.713" class="edge-thickness-normal edge-pattern-solid flowchart-link" marker-end="url(#pointEnd)"/></g><g class="nodes"><g class="node" transform="translate(152.6875, 60)"><rect x="-98.3125" y="-27" width="196.625" height="54"/><text y="-12" style="fill:#ccc;">NASA NEO Feed API</text></g><g class="node" transform="translate(403.2109375, 60)"><rect x="-102.2109375" y="-27" width="204.421875" height="54"/><text y="-12" style="fill:#ccc;">NASA NEO Detail API</text></g><g class="node" transform="translate(631.046875, 60)"><rect x="-75.625" y="-27" width="151.25" height="54"/><text y="-12" style="fill:#ccc;">JPL SBDB API</text></g><g class="node" transform="translate(863.7734375, 60)"><rect x="-72.2265625" y="-27" width="144.453125" height="54"/><text y="-12" style="fill:#ccc;">JPL CAD API</text></g><g class="node" transform="translate(1066.625, 60)"><rect x="-80.625" y="-27" width="161.25" height="54"/><text y="-12" style="fill:#ccc;">JPL Sentry API</text></g><g class="node" transform="translate(183.14453125, 226)"><rect x="-115.515625" y="-39" width="231.03125" height="78"/><text y="-12" style="fill:#ccc;">Data Connection Source</text><text y="12" style="fill:#ccc;">api.nasa.gov</text></g><g class="node" transform="translate(863.7734375, 226)"><rect x="-115.515625" y="-39" width="231.03125" height="78"/><text y="-12" style="fill:#ccc;">Data Connection Source</text><text y="12" style="fill:#ccc;">ssd-api.jpl.nasa.gov</text></g><g class="node" transform="translate(446.97265625, 354)"><rect x="-92.5703125" y="-39" width="185.140625" height="78"/><text y="-12" style="fill:#ccc;">Python Transform</text><text y="12" style="fill:#ccc;">neo_feed.py</text></g><g class="node" transform="translate(173, 666.4264678955078)"><rect x="-92.5703125" y="-39" width="185.140625" height="78"/><text y="-12" style="fill:#ccc;">Python Transform</text><text y="12" style="fill:#ccc;">neo_alerts.py</text></g><g class="node" transform="translate(446.97265625, 510.2132339477539)"><ellipse cx="0" cy="0" rx="107.5" ry="68.41176470588235"/><text y="-12" style="fill:#ccc;">Dataset</text><text y="12" style="fill:#ccc;">neo_recent_close_approaches</text></g><g class="node" transform="translate(173, 810.419563293457)"><ellipse cx="0" cy="0" rx="104.828125" ry="65.33102997298756"/><text y="-12" style="fill:#ccc;">Dataset</text><text y="12" style="fill:#ccc;">neo_close_approach_alerts</text></g><g class="node" transform="translate(616.0546875, 226)"><rect x="-82.203125" y="-39" width="164.40625" height="78"/><text y="-12" style="fill:#ccc;">Daily Schedule</text><text y="12" style="fill:#ccc;">7:00 AM UTC</text></g><g class="node" transform="translate(452.9375, 1004.4126586914062)"><rect x="-99.9375" y="-27" width="199.875" height="54"/><text y="-12" style="fill:#ccc;">Near Earth Asteroid</text></g><g class="node" transform="translate(173, 1004.4126586914062)"><rect x="-130" y="-39" width="260" height="78"/><text y="-12" style="fill:#ccc;">Asteroid Close Approach</text><text y="12" style="fill:#ccc;">Alert</text></g><g class="node" transform="translate(892.8203125, 1311.4126586914062)"><rect x="-96.4609375" y="-39" width="192.921875" height="78"/><text y="-12" style="fill:#ccc;">getAsteroidHistory</text><text y="12" style="fill:#ccc;">TypeScript v2</text></g><g class="node" transform="translate(1154.1484375, 1311.4126586914062)"><rect x="-114.8671875" y="-39" width="229.734375" height="78"/><text y="-12" style="fill:#ccc;">getAsteroidSummary</text><text y="12" style="fill:#ccc;">TypeScript v2 + GPT-5.5</text></g><g class="node" transform="translate(1433.8828125, 1311.4126586914062)"><rect x="-114.8671875" y="-39" width="229.734375" height="78"/><text y="-12" style="fill:#ccc;">getWeeklyDigest</text><text y="12" style="fill:#ccc;">TypeScript v2 + GPT-5.5</text></g><g class="node" transform="translate(627.1484375, 1311.4126586914062)"><rect x="-119.2109375" y="-39" width="238.421875" height="78"/><text y="-12" style="fill:#ccc;">asteroidAlertNotification</text><text y="12" style="fill:#ccc;">TypeScript v2 + GPT-5.5</text></g><g class="node" transform="translate(1288.05078125, 1489.4126586914062)"><rect x="-86.796875" y="-39" width="173.59375" height="78"/><text y="-12" style="fill:#ccc;">OSDK React App</text><text y="12" style="fill:#ccc;">Asteroid Watch</text></g><g class="node" transform="translate(173, 1170.4126586914062)"><rect x="-95.6484375" y="-27" width="191.296875" height="54"/><text y="-12" style="fill:#ccc;">Foundry Automate</text></g><g class="node" transform="translate(173, 1489.4126586914062)"><rect x="-94.5546875" y="-27" width="189.109375" height="54"/><text y="-12" style="fill:#ccc;">Email Notification</text></g></g></g></svg>',
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