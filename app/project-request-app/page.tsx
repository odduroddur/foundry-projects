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

function ClickableImage({ src, alt, maxHeight = '500px' }: { src: string; alt: string; maxHeight?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-800 rounded-lg p-6 overflow-hidden flex justify-center">
        <img 
          src={src}
          alt={alt}
          className="max-w-full h-auto rounded object-contain cursor-zoom-in hover:opacity-90 transition"
          style={{ maxHeight }}
          onClick={() => setOpen(true)}
        />
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function ProjectRequestApp() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-slate-900 to-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <a href="/" className="inline-block mb-8 text-cyan-400 hover:text-cyan-300 transition">
            ← Back to Portfolio
          </a>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            📁 Project Request App — Self-Service Project Creation for Foundry
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            A full-stack workflow application that lets employees request new Foundry projects through a clean form, 
            admins review and approve with one click, and the project is automatically created with the correct 
            security groups assigned — no manual work, full audit trail.
          </p>

          <div className="bg-slate-800 rounded-lg p-8 overflow-hidden flex justify-center">
            <video 
              controls 
              className="max-w-full h-auto rounded"
              style={{ maxHeight: '500px' }}
              src="https://github.com/odduroddur/foundry-projects/raw/refs/heads/main/app/project-request-app/01%20App%20Video.mp4"
            />
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
              Creating a Foundry project is a multi-step manual process: an employee sends a Slack message or email 
              to an admin, the admin manually creates the project, then manually adds security groups to Owner/Editor/Viewer 
              roles. There&apos;s no audit trail, no standardization, and it&apos;s slow — especially at scale when dozens of teams 
              need projects weekly.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">The Solution</h3>
            <p className="text-gray-300 mb-4">A self-service web application with two interfaces:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Employee view — A simple Google Forms-style interface where users name their project, pick a location, and search for security groups to assign to each role</li>
              <li>Admin view — A dashboard showing all pending requests with full details, the ability to edit before approving, and one-click approve/reject</li>
              <li>Automatic fulfillment — Upon approval, the project is created via the Foundry API with the correct groups assigned. No manual steps.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">The Impact</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Zero manual project creation — admin clicks Approve and the project exists with correct permissions</li>
              <li>Full audit trail — who requested what, who approved, and when</li>
              <li>Standardized process — every project follows the same creation workflow and permission model</li>
              <li>Self-service at scale — works for 5 users or 5,000</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">User Workflow</h3>
            <div className="bg-slate-800 rounded-lg p-6">
              <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">
{`Employee opens app → Fills form (name, location, groups) → Submits
→ Request stored as "Pending"
→ Admin sees it in dashboard → Reviews → Clicks Approve
→ Project created automatically with groups assigned → Status: Fulfilled`}
              </pre>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">The Request Form</h3>
            <p className="text-gray-300 mb-4">
              Simple, clean interface. Users search for security groups by name with a typeahead dropdown. 
              Multiple groups can be assigned to each role (Owner, Editor, Viewer). Location is selected 
              from a dropdown of available Foundry Spaces.
            </p>
            <p className="text-gray-300 mb-4">
              Below the form, users see a &quot;My Previous Requests&quot; section showing all their past submissions 
              with current status (Pending, Fulfilled, or Rejected with reason), the groups they requested, 
              and the location — so they always know where their request stands without having to ask anyone.
            </p>
            <ClickableImage 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/project-request-app/02%20User%20Front%20End.png"
              alt="User request form with group picker and previous requests"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">The Admin Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Shows all pending requests with project name, requester, date, location, and assigned groups 
              visible at a glance. Admins can approve immediately or click Edit to modify groups/location 
              before approving. A rejection reason is required when rejecting.
            </p>
            <p className="text-gray-300 mb-4">
              Only members of the designated admin group can access this page — non-admins see nothing.
            </p>
            <ClickableImage 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/project-request-app/03%20Admin%20Front%20End.png"
              alt="Admin dashboard with pending requests and approve/reject buttons"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Built-in AI Help</h3>
            <p className="text-gray-300 mb-4">
              The app&apos;s documentation is connected to Foundry&apos;s AIP Assist, meaning any user can open the AI 
              sidebar and ask natural language questions like &quot;How do I request a new project?&quot; or &quot;What&apos;s the 
              difference between Owner and Editor?&quot; — and get instant answers without leaving Foundry.
            </p>
            <ClickableImage 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/project-request-app/04%20AIP%20Assist.png"
              alt="AIP Assist answering a question about the app"
            />
          </div>
        </div>
      </section>

      {/* UNDER THE HOOD */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Under the Hood</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Architecture Diagram</h3>
            <ClickableImage 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/f12396b09e845f53fba96400c1bace207416fced/app/project-request-app/05%20Architecture%20Diagram.svg"
              alt="Architecture Diagram"
              maxHeight="600px"
            />
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
                    <td className="px-4 py-3">Frontend</td>
                    <td className="px-4 py-3">React, TypeScript, CSS Modules</td>
                    <td className="px-4 py-3">Google Forms-style request form + admin dashboard</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Authentication</td>
                    <td className="px-4 py-3">OAuth2 via @osdk/oauth</td>
                    <td className="px-4 py-3">Secure user login with scoped API access</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Semantic Layer</td>
                    <td className="px-4 py-3">Foundry Ontology</td>
                    <td className="px-4 py-3">ProjectRequest object type with edit-backed storage</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Workflow</td>
                    <td className="px-4 py-3">Foundry Action Types</td>
                    <td className="px-4 py-3">Submit, Approve, Reject, Fulfill — with validation rules</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Backend Functions</td>
                    <td className="px-4 py-3">TypeScript v2, External Sources</td>
                    <td className="px-4 py-3">Project creation, group search, space listing via service token</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Access Control</td>
                    <td className="px-4 py-3">Group membership + action permissions + row-level security</td>
                    <td className="px-4 py-3">Multi-layered: UI, API, and data level</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-4 py-3">Security</td>
                    <td className="px-4 py-3">Data Connection secrets, OAuth2 scopes, row-level filtering</td>
                    <td className="px-4 py-3">PAT never exposed, users see only their own data</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">AI Documentation</td>
                    <td className="px-4 py-3">Foundry Notepad → AIP Assist</td>
                    <td className="px-4 py-3">Users ask natural language questions about the app</td>
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
