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

const architectureSvg = `<svg id="arch-diagram" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="flowchart" style="max-width: 1591.75px;" viewBox="0 0 1591.75 1561.41259765625" role="graphics-document document" aria-roledescription="flowchart-v2"><style>#arch-diagram{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#ccc;}#arch-diagram text{fill:#ccc !important;color:#ccc;font-family:"trebuchet ms",verdana,arial,sans-serif;}#arch-diagram .node rect,#arch-diagram .node circle,#arch-diagram .node ellipse,#arch-diagram .node polygon,#arch-diagram .node path{fill:#1f2020;stroke:#ccc;stroke-width:1px;}#arch-diagram .node text{text-anchor:middle;fill:#ccc !important;}#arch-diagram .arrowheadPath{fill:lightgrey;}#arch-diagram .edgePath .path{stroke:lightgrey;stroke-width:2.0px;}#arch-diagram .marker{fill:lightgrey;stroke:lightgrey;}#arch-diagram .cluster rect{fill:hsl(180, 1.5873015873%, 28.3529411765%);stroke:rgba(255, 255, 255, 0.25);stroke-width:1px;}#arch-diagram .cluster text{fill:#F9FFFE !important;font-weight:bold;}#arch-diagram .flowchart-link{stroke:lightgrey;fill:none;}</style><g><marker id="pointEnd" class="marker flowchart-v2" viewBox="0 0 10 10" refX="5" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"/></marker><g class="root"><g class="clusters"><g class="cluster" id="Alerting" data-look="classic"><rect style="" x="42.3515625" y="1118.4126586914062" width="261.296875" height="435"/><g class="cluster-label" transform="translate(144.609375, 1118.4126586914062)"><text>Alerting</text></g></g><g class="cluster" id="Application" data-look="classic"><rect style="" x="406.97265625" y="1425.4126586914062" width="1091.84375" height="128"/><g class="cluster-label" transform="translate(912.33984375, 1425.4126586914062)"><text>Application</text></g></g><g class="cluster" id="Functions" data-look="classic"><rect style="" x="472.9375" y="1247.4126586914062" width="1110.8125" height="128"/><g class="cluster-label" transform="translate(994.0859375, 1247.4126586914062)"><text>Functions</text></g></g><g class="cluster" id="Ontology" data-look="classic"><rect style="" x="8" y="940.4126586914062" width="579.875" height="128"/><g class="cluster-label" transform="translate(266.09375, 940.4126586914062)"><text>Ontology</text></g></g><g class="cluster" id="subGraph1" data-look="classic"><rect style="" x="15.2421875" y="162" width="1199.35546875" height="728.4126586914062"/><g class="cluster-label" transform="translate(545.193359375, 162)"><text>Foundry Data Layer</text></g></g><g class="cluster" id="subGraph0" data-look="classic"><rect style="" x="19.375" y="8" width="1162.875" height="104"/><g class="cluster-label" transform="translate(554.328125, 8)"><text>External APIs</text></g></g></g><g class="edgePaths"><path d="M152.688,87L152.688,91.167C152.688,95.333,152.688,103.667,152.688,112C152.688,120.333,152.688,128.667,152.688,137C152.688,145.333,152.688,153.667,154.384,161.398C156.08,169.129,159.473,176.259,161.17,179.823L162.866,183.388" id="L_NEO_SRC1_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M183.145,265L183.145,269.167C183.145,273.333,183.145,281.667,211.04,292.6C238.935,303.534,294.725,317.067,322.62,323.834L350.515,330.601" id="L_SRC1_TX1_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M403.211,87L403.211,91.167C403.211,95.333,403.211,103.667,403.211,112C403.211,120.333,403.211,128.667,403.211,137C403.211,145.333,403.211,153.667,386.426,162.715C369.641,171.763,336.071,181.526,319.286,186.407L302.501,191.289" id="L_DETAIL_SRC1_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M631.047,87L631.047,91.167C631.047,95.333,631.047,103.667,631.047,112C631.047,120.333,631.047,128.667,631.047,137C631.047,145.333,631.047,153.667,649.939,163.029C668.832,172.391,706.616,182.782,725.509,187.977L744.401,193.172" id="L_SBDB_SRC2_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M748.258,248.765L713.385,255.637C678.512,262.51,608.766,276.255,568.447,286.914C528.129,297.572,517.238,305.144,511.793,308.93L506.348,312.717" id="L_SRC2_TX1_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M446.973,393L446.973,397.167C446.973,401.333,446.973,409.667,446.973,417.333C446.973,425,446.973,432,446.973,435.5L446.973,439" id="L_TX1_DS1_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M451.32,577.414L451.59,581.582C451.859,585.751,452.398,594.089,452.668,608.924C452.938,623.76,452.938,645.093,452.938,666.426C452.938,687.76,452.938,709.093,452.938,733.092C452.938,757.091,452.938,783.755,452.938,810.42C452.938,837.084,452.938,863.748,452.938,881.247C452.938,898.746,452.938,907.079,452.938,915.413C452.938,923.746,452.938,932.079,452.938,941.746C452.938,951.413,452.938,962.413,452.938,967.913L452.938,973.413" id="L_DS1_OT1_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M339.473,546.395L311.727,555.734C283.982,565.072,228.491,583.749,200.745,596.588C173,609.426,173,616.426,173,619.926L173,623.426" id="L_DS1_TX2_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M173,705.426L173,709.593C173,713.76,173,722.093,173,729.76C173,737.426,173,744.426,173,747.926L173,751.426" id="L_TX2_DS2_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M173,865.413L173,869.579C173,873.746,173,882.079,173,890.413C173,898.746,173,907.079,173,915.413C173,923.746,173,932.079,173,939.746C173,947.413,173,954.413,173,957.913L173,961.413" id="L_DS2_OT2_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M633.755,265L635.646,269.167C637.537,273.333,641.319,281.667,626.252,291.311C611.184,300.956,577.267,311.912,560.308,317.39L543.349,322.868" id="L_SCHED_TX1_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M452.938,1031.413L452.938,1037.579C452.938,1043.746,452.938,1056.079,452.938,1066.413C452.938,1076.746,452.938,1085.079,452.938,1093.413C452.938,1101.746,452.938,1110.079,452.938,1122.913C452.938,1135.746,452.938,1153.079,452.938,1170.413C452.938,1187.746,452.938,1205.079,452.938,1217.913C452.938,1230.746,452.938,1239.079,452.938,1253.913C452.938,1268.746,452.938,1290.079,452.938,1311.413C452.938,1332.746,452.938,1354.079,452.938,1368.913C452.938,1383.746,452.938,1392.079,452.938,1400.413C452.938,1408.746,452.938,1417.079,576.992,1430.753C701.047,1444.427,949.156,1463.441,1073.211,1472.948L1197.266,1482.455" id="L_OT1_APP_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M173,1043.413L173,1047.579C173,1051.746,173,1060.079,173,1068.413C173,1076.746,173,1085.079,173,1093.413C173,1101.746,173,1110.079,173,1117.746C173,1125.413,173,1132.413,173,1135.913L173,1139.413" id="L_OT2_AUTO_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M173,1197.413L173,1201.579C173,1205.746,173,1214.079,173,1222.413C173,1230.746,173,1239.079,228.163,1251.02C283.326,1262.96,393.651,1278.507,448.814,1286.281L503.977,1294.055" id="L_AUTO_F4_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M627.148,1350.413L627.148,1354.579C627.148,1358.746,627.148,1367.079,551.457,1375.413C475.766,1383.746,324.383,1392.079,248.691,1400.413C173,1408.746,173,1417.079,173,1426.746C173,1436.413,173,1447.413,173,1452.913L173,1458.413" id="L_F4_EMAIL_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M863.773,87L863.773,91.167C863.773,95.333,863.773,103.667,863.773,112C863.773,120.333,863.773,128.667,863.773,137C863.773,145.333,863.773,153.667,863.773,161.333C863.773,169,863.773,176,863.773,179.5L863.773,183" id="L_CAD_SRC2_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M859.843,265L859.424,269.167C859.004,273.333,858.164,281.667,857.744,296.5C857.324,311.333,857.324,332.667,857.324,354C857.324,375.333,857.324,396.667,857.324,422.702C857.324,448.738,857.324,479.475,857.324,510.213C857.324,540.951,857.324,571.689,857.324,597.724C857.324,623.76,857.324,645.093,857.324,666.426C857.324,687.76,857.324,709.093,857.324,733.092C857.324,757.091,857.324,783.755,857.324,810.42C857.324,837.084,857.324,863.748,857.324,881.247C857.324,898.746,857.324,907.079,857.324,915.413C857.324,923.746,857.324,932.079,857.324,946.913C857.324,961.746,857.324,983.079,857.324,1004.413C857.324,1025.746,857.324,1047.079,857.324,1061.913C857.324,1076.746,857.324,1085.079,857.324,1093.413C857.324,1101.746,857.324,1110.079,857.324,1122.913C857.324,1135.746,857.324,1153.079,857.324,1170.413C857.324,1187.746,857.324,1205.079,857.324,1217.913C857.324,1230.746,857.324,1239.079,859.312,1246.83C861.299,1254.58,865.275,1261.747,867.262,1265.331L869.25,1268.915" id="L_SRC2_F1_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M1066.625,87L1066.625,91.167C1066.625,95.333,1066.625,103.667,1066.625,112C1066.625,120.333,1066.625,128.667,1066.625,137C1066.625,145.333,1066.625,153.667,1052.705,162.225C1038.785,170.784,1010.944,179.567,997.024,183.959L983.104,188.351" id="L_SENTRY_SRC2_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M979.289,258.228L998.27,263.523C1017.25,268.819,1055.211,279.409,1074.191,295.371C1093.172,311.333,1093.172,332.667,1093.172,354C1093.172,375.333,1093.172,396.667,1093.172,422.702C1093.172,448.738,1093.172,479.475,1093.172,510.213C1093.172,540.951,1093.172,571.689,1093.172,597.724C1093.172,623.76,1093.172,645.093,1093.172,666.426C1093.172,687.76,1093.172,709.093,1093.172,733.092C1093.172,757.091,1093.172,783.755,1093.172,810.42C1093.172,837.084,1093.172,863.748,1093.172,881.247C1093.172,898.746,1093.172,907.079,1093.172,915.413C1093.172,923.746,1093.172,932.079,1093.172,946.913C1093.172,961.746,1093.172,983.079,1093.172,1004.413C1093.172,1025.746,1093.172,1047.079,1093.172,1061.913C1093.172,1076.746,1093.172,1085.079,1093.172,1093.413C1093.172,1101.746,1093.172,1110.079,1093.172,1122.913C1093.172,1135.746,1093.172,1153.079,1093.172,1170.413C1093.172,1187.746,1093.172,1205.079,1093.172,1217.913C1093.172,1230.746,1093.172,1239.079,1076.492,1248.574C1059.812,1258.069,1026.452,1268.726,1009.772,1274.054L993.092,1279.382" id="L_SRC2_F1_2" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M892.82,1350.413L892.82,1354.579C892.82,1358.746,892.82,1367.079,892.82,1375.413C892.82,1383.746,892.82,1392.079,892.82,1400.413C892.82,1408.746,892.82,1417.079,943.568,1429.464C994.315,1441.848,1095.81,1458.283,1146.558,1466.501L1197.305,1474.718" id="L_F1_APP_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M1154.148,1350.413L1154.148,1354.579C1154.148,1358.746,1154.148,1367.079,1154.148,1375.413C1154.148,1383.746,1154.148,1392.079,1154.148,1400.413C1154.148,1408.746,1154.148,1417.079,1162.265,1425.125C1170.381,1433.171,1186.613,1440.929,1194.729,1444.809L1202.845,1448.688" id="L_F2_APP_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/><path d="M1433.883,1350.413L1433.883,1354.579C1433.883,1358.746,1433.883,1367.079,1433.883,1375.413C1433.883,1383.746,1433.883,1392.079,1433.883,1400.413C1433.883,1408.746,1433.883,1417.079,1424.654,1425.296C1415.425,1433.513,1396.968,1441.613,1387.739,1445.663L1378.51,1449.713" id="L_F3_APP_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style="" marker-end="url(#pointEnd)"/></g><g class="nodes"><g class="node" id="NEO" transform="translate(152.6875, 60)"><rect x="-98.3125" y="-27" width="196.625" height="54"/><text y="-12">NASA NEO Feed API</text></g><g class="node" id="DETAIL" transform="translate(403.2109375, 60)"><rect x="-102.2109375" y="-27" width="204.421875" height="54"/><text y="-12">NASA NEO Detail API</text></g><g class="node" id="SBDB" transform="translate(631.046875, 60)"><rect x="-75.625" y="-27" width="151.25" height="54"/><text y="-12">JPL SBDB API</text></g><g class="node" id="CAD" transform="translate(863.7734375, 60)"><rect x="-72.2265625" y="-27" width="144.453125" height="54"/><text y="-12">JPL CAD API</text></g><g class="node" id="SENTRY" transform="translate(1066.625, 60)"><rect x="-80.625" y="-27" width="161.25" height="54"/><text y="-12">JPL Sentry API</text></g><g class="node" id="SRC1" transform="translate(183.14453125, 226)"><rect x="-115.515625" y="-39" width="231.03125" height="78"/><text y="-12">Data Connection Source</text><text y="12">api.nasa.gov</text></g><g class="node" id="SRC2" transform="translate(863.7734375, 226)"><rect x="-115.515625" y="-39" width="231.03125" height="78"/><text y="-12">Data Connection Source</text><text y="12">ssd-api.jpl.nasa.gov</text></g><g class="node" id="TX1" transform="translate(446.97265625, 354)"><rect x="-92.5703125" y="-39" width="185.140625" height="78"/><text y="-12">Python Transform</text><text y="12">neo_feed.py</text></g><g class="node" id="TX2" transform="translate(173, 666.4264678955078)"><rect x="-92.5703125" y="-39" width="185.140625" height="78"/><text y="-12">Python Transform</text><text y="12">neo_alerts.py</text></g><g class="node" id="DS1" transform="translate(446.97265625, 510.2132339477539)"><path d="M0,15.808823529411764 a107.5,15.808823529411764 0,0,0 215,0 a107.5,15.808823529411764 0,0,0 -215,0 l0,102.80882352941177 a107.5,15.808823529411764 0,0,0 215,0 l0,-102.80882352941177" transform="translate(-107.5, -67.21323529411765)"/><text y="-12">Dataset</text><text y="12">neo_recent_close_approaches</text></g><g class="node" id="DS2" transform="translate(173, 810.419563293457)"><path d="M0,15.662059949575124 a104.828125,15.662059949575124 0,0,0 209.65625,0 a104.828125,15.662059949575124 0,0,0 -209.65625,0 l0,78.66205994957512 a104.828125,15.662059949575124 0,0,0 209.65625,0 l0,-78.66205994957512" transform="translate(-104.828125, -54.993089924362685)"/><text y="-12">Dataset</text><text y="12">neo_close_approach_alerts</text></g><g class="node" id="SCHED" transform="translate(616.0546875, 226)"><rect x="-82.203125" y="-39" width="164.40625" height="78"/><text y="-12">Daily Schedule</text><text y="12">7:00 AM UTC</text></g><g class="node" id="OT1" transform="translate(452.9375, 1004.4126586914062)"><rect x="-99.9375" y="-27" width="199.875" height="54"/><text y="-12">Near Earth Asteroid</text></g><g class="node" id="OT2" transform="translate(173, 1004.4126586914062)"><rect x="-130" y="-39" width="260" height="78"/><text y="-12">Asteroid Close Approach</text><text y="12">Alert</text></g><g class="node" id="F1" transform="translate(892.8203125, 1311.4126586914062)"><rect x="-96.4609375" y="-39" width="192.921875" height="78"/><text y="-12">getAsteroidHistory</text><text y="12">TypeScript v2</text></g><g class="node" id="F2" transform="translate(1154.1484375, 1311.4126586914062)"><rect x="-114.8671875" y="-39" width="229.734375" height="78"/><text y="-12">getAsteroidSummary</text><text y="12">TypeScript v2 + GPT-5.5</text></g><g class="node" id="F3" transform="translate(1433.8828125, 1311.4126586914062)"><rect x="-114.8671875" y="-39" width="229.734375" height="78"/><text y="-12">getWeeklyDigest</text><text y="12">TypeScript v2 + GPT-5.5</text></g><g class="node" id="F4" transform="translate(627.1484375, 1311.4126586914062)"><rect x="-119.2109375" y="-39" width="238.421875" height="78"/><text y="-12">asteroidAlertNotification</text><text y="12">TypeScript v2 + GPT-5.5</text></g><g class="node" id="APP" transform="translate(1288.05078125, 1489.4126586914062)"><rect x="-86.796875" y="-39" width="173.59375" height="78"/><text y="-12">OSDK React App</text><text y="12">Asteroid Watch</text></g><g class="node" id="AUTO" transform="translate(173, 1170.4126586914062)"><rect x="-95.6484375" y="-27" width="191.296875" height="54"/><text y="-12">Foundry Automate</text></g><g class="node" id="EMAIL" transform="translate(173, 1489.4126586914062)"><rect x="-94.5546875" y="-27" width="189.109375" height="54"/><text y="-12">Email Notification</text></g></g></g></g></svg>`;

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
            imagePlaceholder: 'https://github.com/odduroddur/foundry-projects/blob/26e88924059854de145fc1684e6e51cdb026f551/app/asteroid-watch/02%20Outlook.png',
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
        architectureDiagramSvg: architectureSvg,
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
