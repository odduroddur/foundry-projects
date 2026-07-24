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
        architectureDiagramSvg: '<svg id="mermaid-1784880364509" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="flowchart" style="max-width: 1591.75px;" viewBox="0 0 1591.75 1561.41259765625" role="graphics-document document" aria-roledescription="flowchart-v2"><style>#mermaid-1784880364509{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#ccc;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#mermaid-1784880364509 .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#mermaid-1784880364509 .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#mermaid-1784880364509 .error-icon{fill:#a44141;}#mermaid-1784880364509 .error-text{fill:#ddd;stroke:#ddd;}#mermaid-1784880364509 .edge-thickness-normal{stroke-width:1px;}#mermaid-1784880364509 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1784880364509 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1784880364509 .edge-thickness-invisible{stroke-width:0;fill:none;}#mermaid-1784880364509 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1784880364509 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1784880364509 .marker{fill:lightgrey;stroke:lightgrey;}#mermaid-1784880364509 .marker.cross{stroke:lightgrey;}#mermaid-1784880364509 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-1784880364509 p{margin:0;}#mermaid-1784880364509 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#ccc;}#mermaid-1784880364509 .cluster-label text{fill:#F9FFFE;}#mermaid-1784880364509 .cluster-label span{color:#F9FFFE;}#mermaid-1784880364509 .cluster-label span p{background-color:transparent;}#mermaid-1784880364509 .label text,#mermaid-1784880364509 span{fill:#ccc;color:#ccc;}#mermaid-1784880364509 .node rect,#mermaid-1784880364509 .node circle,#mermaid-1784880364509 .node ellipse,#mermaid-1784880364509 .node polygon,#mermaid-1784880364509 .node path{fill:#1f2020;stroke:#ccc;stroke-width:1px;}#mermaid-1784880364509 .rough-node .label text,#mermaid-1784880364509 .node .label text,#mermaid-1784880364509 .image-shape .label,#mermaid-1784880364509 .icon-shape .label{text-anchor:middle;}#mermaid-1784880364509 .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#mermaid-1784880364509 .rough-node .label,#mermaid-1784880364509 .node .label,#mermaid-1784880364509 .image-shape .label,#mermaid-1784880364509 .icon-shape .label{text-align:center;}#mermaid-1784880364509 .node.clickable{cursor:pointer;}#mermaid-1784880364509 .root .anchor path{fill:lightgrey!important;stroke-width:0;stroke:lightgrey;}#mermaid-1784880364509 .arrowheadPath{fill:lightgrey;}#mermaid-1784880364509 .edgePath .path{stroke:lightgrey;stroke-width:2.0px;}#mermaid-1784880364509 .flowchart-link{stroke:lightgrey;fill:none;}#mermaid-1784880364509 .edgeLabel{background-color:hsl(0, 0%, 34.4117647059%);text-align:center;}#mermaid-1784880364509 .edgeLabel p{background-color:hsl(0, 0%, 34.4117647059%);}#mermaid-1784880364509 .edgeLabel rect{opacity:0.5;background-color:hsl(0, 0%, 34.4117647059%);fill:hsl(0, 0%, 34.4117647059%);}#mermaid-1784880364509 .labelBkg{background-color:rgba(87.75, 87.75, 87.75, 0.5);}#mermaid-1784880364509 .cluster rect{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:rgba(255, 255, 255, 0.25);stroke-width:1px;}#mermaid-1784880364509 .cluster text{fill:#F9FFFE;}#mermaid-1784880364509 .cluster span{color:#F9FFFE;}#mermaid-1784880364509 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(20, 1.5873015873%, 12.3529411765%);border:1px solid rgba(255, 255, 255, 0.25);border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1784880364509 .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#ccc;}#mermaid-1784880364509 rect.text{fill:none;stroke-width:0;}#mermaid-1784880364509 .icon-shape,#mermaid-1784880364509 .image-shape{background-color:hsl(0, 0%, 34.4117647059%);text-align:center;}#mermaid-1784880364509 .icon-shape p,#mermaid-1784880364509 .image-shape p{background-color:hsl(0, 0%, 34.4117647059%);padding:2px;}#mermaid-1784880364509 .icon-shape rect,#mermaid-1784880364509 .image-shape rect{opacity:0.5;background-color:hsl(0, 0%, 34.4117647059%);fill:hsl(0, 0%, 34.4117647059%);}#mermaid-1784880364509 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style><g><marker id="mermaid-1784880364509_flowchart-v2-pointEnd" class="marker flowchart-v2" viewBox="0 0 10 10" refX="5" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"/></marker><marker id="mermaid-1784880364509_flowchart-v2-pointStart" class="marker flowchart-v2" viewBox="0 0 10 10" refX="4.5" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 5 L 10 10 L 10 0 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"/></marker><marker id="mermaid-1784880364509_flowchart-v2-circleEnd" class="marker flowchart-v2" viewBox="0 0 10 10" refX="11" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"/></marker><marker id="mermaid-1784880364509_flowchart-v2-circleStart" class="marker flowchart-v2" viewBox="0 0 10 10" refX="-1" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"/></marker><marker id="mermaid-1784880364509_flowchart-v2-crossEnd" class="marker cross flowchart-v2" viewBox="0 0 11 11" refX="12" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1, 0;"/></marker><marker id="mermaid-1784880364509_flowchart-v2-crossStart" class="marker cross flowchart-v2" viewBox="0 0 11 11" refX="-1" refY="5.2" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1, 0;"/></marker><g class="root"><g class="clusters"><g class="cluster" id="Alerting" data-look="classic"><rect style="" x="42.3515625" y="1118.4126586914062" width="261.296875" height="435"/><g class="cluster-label" transform="translate(144.609375, 1118.4126586914062)"><foreignObject width="56.78125" height="24"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Alerting</p></span></div></foreignObject></g></g><g class="cluster" id="Application" data-look="classic"><rect style="" x="406.97265625" y="1425.4126586914062" width="1091.84375" height="128"/><g class="cluster-label" transform="translate(912.33984375, 1425.4126586914062)"><foreignObject width="81.109375" height="24"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Application</p></span></div></foreignObject></g></g><g class="cluster" id="Functions" data-look="classic"><rect style="" x="472.9375" y="1247.4126586914062" width="1110.8125" height="128"/><g class="cluster-label" transform="translate(994.0859375, 1247.4126586914062)"><foreignObject width="68.515625" height="24"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Functions</p></span></div></foreignObject></g></g><g class="cluster" id="Ontology" data-look="classic"><rect style="" x="8" y="940.4126586914062" width="579.875" height="128"/><g class="cluster-label" transform="translate(266.09375, 940.4126586914062)"><foreignObject width="63.6875" height="24"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Ontology</p></span></div></foreignObject></g></g><g class="cluster" id="subGraph1" data-look="classic"><rect style="" x="15.2421875" y="162" width="1199.35546875" height="728.4126586914062"/><g class="cluster-label" transform="translate(545.193359375, 162)"><foreignObject width="139.453125" height="24"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>Foundry Data Layer</p></span></div></foreignObject></g></g><g class="cluster" id="subGraph0" data-look="classic"><rect style="" x="19.375" y="8" width="1162.875" height="104"/><g class="cluster-label" transform="translate(554.328125, 8)"><foreignObject width="92.96875" height="24"><div xmlns="http://www.w3.org/1999/xhtml" style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;"><span class="nodeLabel"><p>External APIs</p></span></div></foreignObject></g></g></g></g></g></svg>',
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