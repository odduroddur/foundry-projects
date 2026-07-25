export const revalidate = 0;

export default function AsteroidProject() {
  const dailyFlow = '7:00 AM → System pulls next 7 days of asteroid data from NASA\n→ Enriches with orbital parameters + discovery info\n→ Checks for close approaches (< threshold)\n→ If new threat found → AI writes a briefing → Email sent';

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-900 to-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            ☄️ Asteroid Watch — Near-Earth Object Early Warning System!
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            A real-time asteroid monitoring dashboard that pulls live data from NASA, detects close approaches, 
            and sends AI-powered alerts when space rocks get too close for comfort.
          </p>
          
          {/* HERO SCREENSHOTS */}
          <div className="bg-slate-800 rounded-lg p-8 mb-8">
            <img 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/6596f5ea184a42fd680fd59c692cb789dde44c24/app/asteroid-watch/00%20Dashboard.png"
              alt="Full dashboard view"
              className="w-full h-96 rounded object-cover"
            />
          </div>

          <div className="bg-slate-800 rounded-lg p-8">
            <video 
              width="100%" 
              height="400"
              controls 
              className="rounded"
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/6596f5ea184a42fd680fd59c692cb789dde44c24/app/asteroid-watch/01%20Asteroid%20Video.mp4"
            />
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
          <div className="bg-slate-800 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed">
              Python · TypeScript · React · Polars · REST APIs · Foundry Data Connection · Egress Policies · 
              Ontology Object Types · Conditional Formatting · Incremental Pipelines · Foundry Schedules · 
              Foundry Automate · TypeScript v2 Functions · OSDK React · Recharts · GPT-5.5 (LLM) · Developer 
              Console · Global Branching · CSS Modules
            </p>
          </div>
        </div>
      </section>

      {/* WHAT & WHY */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">What & Why</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">The Problem</h3>
            <p className="text-gray-300 leading-relaxed">
              NASA tracks over 61,000 near-Earth asteroids, with new close approaches predicted daily. The raw data 
              is scattered across multiple NASA APIs, returned as deeply nested JSON, and lacks any alerting mechanism. 
              If something noteworthy is heading our way, you need to check manually.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">The Solution</h3>
            <p className="text-gray-300 mb-4">An end-to-end early warning system that:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Pulls asteroid data daily from 3 NASA APIs and enriches it into a clean, queryable dataset</li>
              <li>Detects threats automatically using configurable distance thresholds with deduplicated alerting</li>
              <li>Delivers AI-powered briefings — a GPT-5.5-generated 7-Day Outlook and per-asteroid threat analysis</li>
              <li>Presents everything in a custom React dashboard with interactive scatter plots and historical data</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">The Impact</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Zero manual monitoring — the system checks NASA every morning and emails you only when noteworthy</li>
              <li>Sub-second insights — from raw API data to interactive dashboard with AI analysis</li>
              <li>300 years of history on-demand — click any asteroid to see every past and future Earth pass from 1900-2200</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">User Workflow - Daily Flow</h3>
            <div className="bg-slate-800 rounded-lg p-6">
              <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">{dailyFlow}</pre>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Dashboard Experience</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">7-Day Outlook (top)</h4>
                <p className="text-gray-300 mb-4">AI-generated summary of the weeks incoming asteroids with color-coded keywords</p>
                <div className="bg-slate-800 rounded-lg p-6">
                  <img 
                    src="https://raw.githubusercontent.com/odduroddur/foundry-projects/6596f5ea184a42fd680fd59c692cb789dde44c24/app/asteroid-watch/02%20Outlook.png"
                    alt="7-Day Outlook banner"
                    className="w-full h-32 rounded object-cover"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Threat Assessment Scatter Plot</h4>
                <p className="text-gray-300 mb-4">Every asteroid plotted by size vs. distance. Bigger + closer = scarier. Red dots = close approach alerts. Yellow borders = potentially hazardous.</p>
                <div className="bg-slate-800 rounded-lg p-6">
                  <img 
                    src="https://raw.githubusercontent.com/odduroddur/foundry-projects/6596f5ea184a42fd680fd59c692cb789dde44c24/app/asteroid-watch/03%20Scatter%20Plot.png"
                    alt="Scatter plot"
                    className="w-full h-64 rounded object-cover"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Asteroid Table</h4>
                <p className="text-gray-300 mb-4">All incoming asteroids sorted by date. Click any row to open detail panel and the row flashes cyan.</p>
                <div className="bg-slate-800 rounded-lg p-6">
                  <img 
                    src="https://raw.githubusercontent.com/odduroddur/foundry-projects/6596f5ea184a42fd680fd59c692cb789dde44c24/app/asteroid-watch/04%20Table.png"
                    alt="Asteroid table with badges"
                    className="w-full h-48 rounded object-cover"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Detail Panel</h4>
                <p className="text-gray-300 mb-4">Full asteroid profile: AI threat analysis, orbital data, observation history, NASA JPL link.</p>
                <div className="bg-slate-800 rounded-lg p-6">
                  <img 
                    src="https://raw.githubusercontent.com/odduroddur/foundry-projects/6596f5ea184a42fd680fd59c692cb789dde44c24/app/asteroid-watch/05%20Detail%20Panel.png"
                    alt="Detail panel with AI analysis"
                    className="w-full h-48 rounded object-cover"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Close Approach History</h4>
                <p className="text-gray-300 mb-4">On-demand chart showing every Earth pass from 1900-2200, fetched live from NASA JPL API. No data stored — always fresh.</p>
                <div className="bg-slate-800 rounded-lg p-6">
                  <img 
                    src="https://raw.githubusercontent.com/odduroddur/foundry-projects/6596f5ea184a42fd680fd59c692cb789dde44c24/app/asteroid-watch/06%20Close%20Approach%20History.png"
                    alt="Close approach history chart"
                    className="w-full h-48 rounded object-cover"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Email Alerts</h4>
                <p className="text-gray-300 mb-4">AI-written notifications with human-scale comparisons, linking directly to the dashboard, the alerted object in Foundry, and its NASA JPL page.</p>
                <div className="bg-slate-800 rounded-lg p-6">
                  <img 
                    src="https://raw.githubusercontent.com/odduroddur/foundry-projects/6596f5ea184a42fd680fd59c692cb789dde44c24/app/asteroid-watch/07%20Email.png"
                    alt="Email notification"
                    className="w-full h-40 rounded object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNDER THE HOOD */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Under the Hood</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Architecture Diagram</h3>
            <div className="bg-slate-800 rounded-lg p-6 overflow-x-auto">
              <img 
                src="https://raw.githubusercontent.com/odduroddur/foundry-projects/6596f5ea184a42fd680fd59c692cb789dde44c24/app/asteroid-watch/08%20Architecture%20Diagram.svg"
                alt="Architecture Diagram"
                className="w-full rounded"
              />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Daily Schedule</h3>
            <div className="bg-slate-800 rounded-lg p-6">
              <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">{dailyFlow}</pre>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Technology Stack</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="px-4 py-2 font-semibold text-cyan-400">Layer</th>
                    <th className="px-4 py-2 font-semibold text-cyan-400">Technology</th>
                    <th className="px-4 py-2 font-semibold text-cyan-400">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Data Ingestion</td>
                    <td className="px-4 py-3">Python (Polars), Lightweight Transforms</td>
                    <td className="px-4 py-3">Pull & flatten NASA API data</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">External APIs</td>
                    <td className="px-4 py-3">Data Connection Sources, Egress Policies</td>
                    <td className="px-4 py-3">Secure outbound network access</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Storage</td>
                    <td className="px-4 py-3">Foundry Datasets</td>
                    <td className="px-4 py-3">Structured tabular storage with full lineage</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Alerting Pipeline</td>
                    <td className="px-4 py-3">Incremental Transforms</td>
                    <td className="px-4 py-3">Deduplicated append-only alert tracking</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Semantic Layer</td>
                    <td className="px-4 py-3">Foundry Ontology</td>
                    <td className="px-4 py-3">Object types with conditional formatting</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Automation</td>
                    <td className="px-4 py-3">Foundry Automate (Object Sentinel)</td>
                    <td className="px-4 py-3">Trigger-based email notifications</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Backend Functions</td>
                    <td className="px-4 py-3">TypeScript v2, OSDK Functions</td>
                    <td className="px-4 py-3">Server-side API calls, AI generation</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">AI/LLM</td>
                    <td className="px-4 py-3">GPT-5.5 via Foundry LLM Proxy</td>
                    <td className="px-4 py-3">Threat summaries, weekly digest, smart alerts</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Frontend</td>
                    <td className="px-4 py-3">React, TypeScript, Recharts, CSS Modules</td>
                    <td className="px-4 py-3">Interactive dashboard with dark space theme</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Client SDK</td>
                    <td className="px-4 py-3">OSDK (@osdk/react)</td>
                    <td className="px-4 py-3">Type-safe Ontology access from React</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Scheduling</td>
                    <td className="px-4 py-3">Foundry Schedules (cron)</td>
                    <td className="px-4 py-3">Daily automated data refresh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Key Technical Decisions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">1. On-demand history vs. stored history</h4>
                <p className="text-gray-300">
                  Rather than storing every asteroids full close approach history (which would grow endlessly), 
                  the app fetches it live from NASAs CAD API when you click an asteroid. Zero storage cost, always current data.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">2. Incremental deduplication with expiry</h4>
                <p className="text-gray-300">
                  The main dataset rebuilds daily (SNAPSHOT), but the alerts dataset is incremental (append-only). 
                  Alerts are deduplicated within an 8-day window — the same asteroid wont trigger repeated notifications 
                  during a single approach, but can re-trigger if it returns months later.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">3. Server-side Functions as API proxy</h4>
                <p className="text-gray-300">
                  The React app runs in a Foundry dev environment with restrictive Content Security Policy, 
                  blocking direct external API calls. A TypeScript Function handles the NASA API calls server-side, 
                  returning structured data through OSDK — no CSP issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
