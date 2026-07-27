"use client";

import { useState } from "react";

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition"
        onClick={onClose}
      >
        ✕
      </button>
      <img 
        src={src} 
        alt={alt} 
        className="max-w-full max-h-[90vh] object-contain rounded"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function ClickableImage({ src, alt, maxHeight = '500px', fullWidth = false }: { src: string; alt: string; maxHeight?: string; fullWidth?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-800 rounded-lg p-6 overflow-hidden flex justify-center">
        <img 
          src={src}
          alt={alt}
          className={`${fullWidth ? 'w-full' : 'max-w-full h-auto'} rounded object-contain cursor-zoom-in hover:opacity-90 transition`}
          style={fullWidth ? undefined : { maxHeight }}
          onClick={() => setOpen(true)}
        />
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function SpotifyAnalysis() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-900 to-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <a href="/" className="inline-block mb-8 text-green-400 hover:text-green-300 transition">
            ← Back to Portfolio
          </a>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            🎧 Beyond the Algorithm — Personal Spotify Listening Intelligence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            A full-stack data platform that transforms raw Spotify export data into an interactive analytics 
            dashboard with AI-powered genre classification, smart artist recommendations, and a conversational 
            chatbot that knows your listening habits.
          </p>
          
          <div className="bg-slate-800 rounded-lg p-8 overflow-hidden flex justify-center">
            <video 
              controls 
              className="max-w-full h-auto rounded"
              style={{ maxHeight: '500px' }}
              src="https://github.com/odduroddur/foundry-projects/raw/refs/heads/main/app/spotify-analysis/01%20Spotify%20Demo.mp4"
            />
          </div>
        </div>
      </section>

      {/* WHAT & WHY */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">What & Why</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-green-400">The Problem</h3>
            <p className="text-gray-300 leading-relaxed">
              When you request your personal data from Spotify (a GDPR export), you get hundreds of thousands of 
              rows of raw JSON — cryptic field names, no genre information, timestamps in milliseconds, and no way 
              to explore patterns or ask questions about your own listening history. The data is technically yours, 
              but it&apos;s practically unusable without building something yourself.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-green-400">The Solution</h3>
            <p className="text-gray-300 mb-4">An end-to-end analytics platform that:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Ingests raw Spotify streaming history and transforms it into clean, enriched datasets</li>
              <li>Uses an LLM to automatically classify every artist into a genre (since Spotify&apos;s export doesn&apos;t include genre data)</li>
              <li>Calculates behavioral metrics like skip rates and listening streaks</li>
              <li>Surfaces smart artist recommendations — artists you haven&apos;t played recently but historically enjoy</li>
              <li>Provides a fully interactive dashboard with filters, charts, artist deep-dives, and an embedded AI chatbot</li>
              <li>Lets you &quot;hide&quot; artists from analysis with a single click (for removing unwanted or awkward listens from your data)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">The Impact</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Every stream I&apos;ve ever played — filterable, sortable, and visualized in seconds</li>
              <li>Genre insights that Spotify itself doesn&apos;t surface in its export data</li>
              <li>A rediscovery engine that identifies artists you genuinely enjoyed (low skip rate) but haven&apos;t played in 10–90 days — surfacing forgotten favorites based on your actual behavior rather than a black-box recommendation algorithm</li>
              <li>Conversational access — ask &quot;What did I listen to most in March?&quot; and get an instant answer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Dashboard Experience</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">Filter Panel (left sidebar)</h4>
                <p className="text-gray-300 mb-4">
                  Collapsible filter panel with date range picker, artist/song/genre listograms (showing top 5 with 
                  visual bars), and a skipped toggle. One-click reset button clears everything. Every filter immediately 
                  updates all metrics, charts, and tables across the dashboard.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/spotify-analysis/02%20Filter%20Panel.png"
                  alt="Filter panel with artist listograms and date range picker"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">Spotibot — Conversational AI Agent</h4>
                <p className="text-gray-300 mb-4">
                  An embedded conversational AI that has access to your full listening ontology. Toggle it open and 
                  the stream table seamlessly collapses to make room — toggle it closed and the table reappears. Ask 
                  anything: &quot;What genre do I listen to most on Fridays?&quot;, &quot;When did I first discover this artist?&quot;, 
                  or &quot;How many hours did I listen in June?&quot; — and get grounded, data-backed answers.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/spotify-analysis/03%20Spotibot.png"
                  alt="Spotibot chat panel open with stream table collapsed"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">Metrics & Stream History</h4>
                <p className="text-gray-300 mb-4">
                  Three headline cards that update with every filter change — Total Listening Time (hours + &quot;That&apos;s X 
                  days&quot; context), Number of Artists, and Number of Songs — sit above the full stream history table 
                  showing date, song, album, artist, genre, and skip status.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/spotify-analysis/04%20Metric%20Cards%20and%20Table.png"
                  alt="Metrics cards with stream history table"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">Listening Charts</h4>
                <p className="text-gray-300 mb-4">
                  Bar chart showing play counts by artist (clickable — selecting an artist drives the detail panel). 
                  Additional time-series chart for visualizing listening patterns over time.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/spotify-analysis/05%20Charts.png"
                  alt="Bar chart with artist play count distribution"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">Artist Detail Drawer</h4>
                <p className="text-gray-300 mb-4">
                  Click any artist on the chart and a side panel slides in showing: artist genre, first/last listen 
                  dates, skip rate (last 90 days) with conditional color coding, play count evolution segmented by 
                  skipped vs. not-skipped, and a &quot;Show/Hide Artist&quot; action button — to remove unwanted or awkward 
                  artists from your analysis entirely (they get excluded from all metrics, charts, and recommendations).
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/spotify-analysis/06%20Artist%20Drawer.png"
                  alt="Artist detail drawer with metrics and evolution chart"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">AI Recommendations Modal</h4>
                <p className="text-gray-300 mb-4">
                  Click &quot;Recommend Artists ✨&quot; in the header and the LLM (Claude Sonnet 4) receives your recent stream 
                  data and returns 3 artist recommendations with concise reasoning. Runs on-demand each time — always 
                  fresh based on your latest listening.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/spotify-analysis/07%20AI%20Recommendations.png"
                  alt="AI recommendation modal with 3 artist suggestions"
                />
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
            <h3 className="text-2xl font-bold mb-6 text-green-400">Architecture Diagram</h3>
            <ClickableImage 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/32184877dad2fb1fafbe251082c810bf501a363e/app/spotify-analysis/08%20Architecture%20Diagram.svg"
              alt="Architecture Diagram"
              maxHeight="600px"
              fullWidth
            />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Data Pipeline (Pipeline Builder)</h3>
            <p className="text-gray-300 mb-6">A no-code pipeline that handles:</p>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">1. Parse & Clean</h4>
                <p className="text-gray-300">
                  Extracts from raw JSON, drops nulls and irrelevant columns (IP addresses, platform info, 
                  podcast/audiobook data).
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">2. Enrich</h4>
                <p className="text-gray-300">
                  Derives timestamps to dates, weekday names, year-week IDs; converts milliseconds to hours/minutes; 
                  generates unique hash keys.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">3. LLM Genre Classification</h4>
                <p className="text-gray-300">
                  Calls GPT-4o to assign a genre to each artist based on their name alone (since Spotify&apos;s export 
                  contains no genre data).
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">Technology Stack</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="px-4 py-2 font-semibold text-emerald-400">Layer</th>
                    <th className="px-4 py-2 font-semibold text-emerald-400">Technology</th>
                    <th className="px-4 py-2 font-semibold text-emerald-400">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Data Source</td>
                    <td className="px-4 py-3">Spotify GDPR Export (JSON)</td>
                    <td className="px-4 py-3">Raw streaming history</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Data Pipeline</td>
                    <td className="px-4 py-3">Pipeline Builder (no-code)</td>
                    <td className="px-4 py-3">Cleaning, enrichment, feature engineering</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">AI Enrichment</td>
                    <td className="px-4 py-3">GPT-4o via Pipeline Builder LLM node</td>
                    <td className="px-4 py-3">Genre classification per artist</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Storage</td>
                    <td className="px-4 py-3">Foundry Datasets</td>
                    <td className="px-4 py-3">Structured tabular storage with full lineage</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Semantic Layer</td>
                    <td className="px-4 py-3">Foundry Ontology</td>
                    <td className="px-4 py-3">Object types (Stream, Artist) with links</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Backend Function</td>
                    <td className="px-4 py-3">TypeScript (Functions repo)</td>
                    <td className="px-4 py-3">90-day skip rate calculation</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">AI Logic</td>
                    <td className="px-4 py-3">AIP Logic (no-code)</td>
                    <td className="px-4 py-3">LLM-powered artist recommendations</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">AI Agent</td>
                    <td className="px-4 py-3">AIP Agent (Spotibot)</td>
                    <td className="px-4 py-3">Conversational data exploration</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Frontend</td>
                    <td className="px-4 py-3">Foundry Workshop</td>
                    <td className="px-4 py-3">Interactive dashboard with dark mode</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Actions</td>
                    <td className="px-4 py-3">Foundry Action Types</td>
                    <td className="px-4 py-3">Show/Hide artist toggle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
