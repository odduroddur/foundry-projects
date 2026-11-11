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
      <div className="bg-surface rounded-md p-6 overflow-hidden flex justify-center">
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

export default function AutomatedClaimsReview() {
  const claimFlow = 'Claimant describes what happened → Submit\n→ AI checks the claim against their policy contract\n→ Clear case: instant Approved / Declined, quoting the contract\n→ Unclear case, or the claimant disputes: sent to an adjuster\n→ Adjuster decides with a reason → Claimant sees the outcome';

  const routing = 'Covered      + all checks passed        → Approved automatically\nNot covered  + all checks passed        → Declined automatically\nUnclear, missing facts, low confidence,\nunverified quote, ignored exception     → Sent to an adjuster';

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <a href="/" className="inline-block mb-8 text-gray-400 hover:text-primary transition text-sm">
            ← Back to Projects
          </a>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Automated Claims Review — Instant Coverage Decisions, Quoted From Your Policy
          </h1>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Policyholders describe what happened and get an instant answer: covered or not. The AI reads the 
            claim against their actual policy contract and shows the exact clauses the decision is based on, 
            quoted word for word.
          </p>

          <div className="bg-surface rounded-md p-6 overflow-hidden flex justify-center">
            <video 
              controls 
              className="max-w-full h-auto rounded"
              style={{ maxHeight: '500px' }}
              src="https://github.com/odduroddur/foundry-projects/raw/refs/heads/main/app/automated-claims-review/01%20App%20Video.mp4"
            />
          </div>
        </div>
      </section>

      {/* WHAT & WHY */}
      <section className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-12">What & Why</h2>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-primary">The Problem</h3>
            <p className="text-gray-700 leading-relaxed">
              Checking a claim is slow, manual work: find the customer&apos;s policy, read the contract clause by 
              clause, write up a decision. Most claims are clear-cut, yet every claimant waits in the same queue. 
              AI could do the reading, but only if its answers can be trusted, and that means every decision has 
              to point to the actual wording in the contract.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-primary">The Solution</h3>
            <p className="text-gray-700 mb-4">An AI claims reviewer built into two apps:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>AI coverage check — GPT-4.1 compares the claimant&apos;s description with the full policy contract (extracted from the PDF) and decides covered or not covered</li>
              <li>Claimant portal — Submit a claim and see the decision right away, with quotes from your own contract</li>
              <li>Adjuster workspace — Adjusters only handle the cases the AI flags or the claimant disputes, with the AI&apos;s reasoning and quotes ready</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">The Impact</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Instant answers — claimants get a decision as soon as they submit, not after a review queue</li>
              <li>The AI does the reading — clear-cut claims are decided automatically, so adjusters only spend time where judgement is needed</li>
              <li>Every decision quotes the contract — the exact clauses, word for word, with section numbers</li>
              <li>Claimants only ever see their own data — enforced by the platform, not by the app</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-12">How It Works</h2>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Claim Workflow</h3>
            <div className="bg-surface rounded-md p-6">
              <pre className="text-gray-600 whitespace-pre-wrap font-mono text-sm">{claimFlow}</pre>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Claimant Portal</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-base font-semibold text-secondary mb-3">Claim Form</h4>
                <p className="text-gray-700 mb-4">
                  Choose a policy and coverage, enter the incident date, and describe what happened in your own words.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/automated-claims-review/02%20Claimant%20Claim%20Form.png"
                  alt="Claimant portal claim form with policy, coverage, incident date and description"
                />
              </div>

              <div>
                <h4 className="text-base font-semibold text-secondary mb-3">Decision With Policy Quotes</h4>
                <p className="text-gray-700 mb-4">
                  Right after submitting, the claimant sees the decision, a plain-language explanation, and the 
                  exact clauses from their contract it&apos;s based on, with section numbers. If they disagree, they 
                  write a short reason and the claim goes to an adjuster.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/automated-claims-review/03%20Claimant%20Decision%20With%20Quotes.png"
                  alt="AI-decided claim showing the explanation, quotes from the policy contract and the Ask for review option"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Adjuster Workspace</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-base font-semibold text-secondary mb-3">Review Queue</h4>
                <p className="text-gray-700 mb-4">
                  Only the claims that need a person: the ones the AI flagged and the ones a claimant disputed. 
                  Only adjusters can open the workspace.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/automated-claims-review/04%20Adjuster%20Queue.png"
                  alt="Adjuster review queue with disputed claims flagged"
                />
              </div>

              <div>
                <h4 className="text-base font-semibold text-secondary mb-3">Review Detail</h4>
                <p className="text-gray-700 mb-4">
                  Everything on one page: what the claimant wrote, why they disagree, the AI&apos;s decision and 
                  reasoning, the contract quotes it used, and why it was flagged. The adjuster approves or declines 
                  with a short reason, which the claimant sees.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/automated-claims-review/05%20Adjuster%20Review%20Detail.png"
                  alt="Adjuster review detail with the claimant's description, AI assessment, contract quotes and decision form"
                  maxHeight="700px"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">The AI and Its Safeguards</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>Simple facts are checked without AI — if the incident happened outside the policy period, or the coverage isn&apos;t on the policy, the claim is declined right away</li>
              <li>Exceptions can&apos;t be ignored — many exclusions have exceptions (dental work is excluded, unless it&apos;s caused by an accident). If the AI declines without explaining why the exception doesn&apos;t apply, the claim goes to an adjuster</li>
              <li>All or nothing — a claim is saved together with its decision and quotes in one step, so there&apos;s never a claim without a decision</li>
            </ul>
            <div className="bg-surface rounded-md p-6">
              <pre className="text-gray-600 whitespace-pre-wrap font-mono text-sm">{routing}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* UNDER THE HOOD */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-12">Under the Hood</h2>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Architecture Diagram</h3>
            <ClickableImage 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/automated-claims-review/06%20Architecture%20Diagram.svg"
              alt="Architecture Diagram"
              maxHeight="600px"
              fullWidth
            />
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Ontology Model</h3>
            <p className="text-gray-700 mb-4">
              Policy contract PDFs are turned into text and split into 95 individual clauses. Nine linked object 
              types connect those clauses to customers and decisions: Policyholder → Policy → Contract → Contract 
              Section, and Policy → Claim → Claimant → Claim Citation, with Employee for the adjuster.
            </p>
            <ClickableImage 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/automated-claims-review/07%20Ontology%20Graph.png"
              alt="Ontology graph of the insurance object types and their links"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Security</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Identity from the platform — Foundry fills in the signed-in user on every action. The apps never send a user ID, so they can&apos;t claim to be someone else</li>
              <li>Row-level security — every policy, claim and quote is stamped with its owner, and Ontology security policies only show a row to its owner or to adjusters. Because this is enforced by the platform, it applies to every way of reading the data, not just the apps</li>
              <li>The AI only sees your own policy — the coverage check starts from the signed-in user&apos;s own policy, so another customer&apos;s data can never reach the prompt</li>
              <li>Rules enforced on the server — claimants can only dispute their own claims, and only adjusters can make a final decision</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Evaluation & Testing</h3>
            <p className="text-gray-700 mb-4">
              An AIP Evals suite runs five golden scenarios three times each, with seven checks per run. All 15 
              runs and 105 checks pass, along with 87 unit tests.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 font-semibold text-secondary">Scenario</th>
                    <th className="px-4 py-2 font-semibold text-secondary">Expected</th>
                    <th className="px-4 py-2 font-semibold text-secondary">What it proves</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Cat breaks a leg in an accident</td>
                    <td className="px-4 py-3">Approved, cites §3.1</td>
                    <td className="px-4 py-3">Clear claims are decided automatically with correct evidence</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Routine dental cleaning, no Wellness cover</td>
                    <td className="px-4 py-3">Declined, cites §5.2 + §5.7</td>
                    <td className="px-4 py-3">A decline still accounts for every exception</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Tooth fractured in an accident</td>
                    <td className="px-4 py-3">Approved, cites §3.8</td>
                    <td className="px-4 py-3">The AI finds an exception hidden inside an exclusion</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Pothole damage, no Collision on the policy</td>
                    <td className="px-4 py-3">Declined, no AI call</td>
                    <td className="px-4 py-3">Simple facts are decided without AI</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Mold, cause of moisture unknown</td>
                    <td className="px-4 py-3">Sent to an adjuster, cites §6.3</td>
                    <td className="px-4 py-3">Missing facts aren&apos;t guessed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">Getting to green meant fixing the system. The tests never changed:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>The AI reformatted a table while quoting it, so the quote didn&apos;t match the contract. Quotes are now copied from the contract by code</li>
              <li>The mold case could be declined despite the unknown cause. The AI must now list missing facts, and any missing fact sends the claim to an adjuster</li>
              <li>A routine dental claim was flagged because the AI&apos;s exception handling was incomplete. The fix was stricter AI output, not a weaker safeguard</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Technology Stack</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-2 font-semibold text-secondary">Layer</th>
                    <th className="px-4 py-2 font-semibold text-secondary">Technology</th>
                    <th className="px-4 py-2 font-semibold text-secondary">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Document Pipeline</td>
                    <td className="px-4 py-3">Media Sets, Python (Polars), Foundry text extraction</td>
                    <td className="px-4 py-3">Policy PDFs → Markdown → 95 clauses; policy and customer data</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Semantic Layer</td>
                    <td className="px-4 py-3">Foundry Ontology</td>
                    <td className="px-4 py-3">9 linked object types from contract clause to claim decision</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Backend Functions</td>
                    <td className="px-4 py-3">TypeScript v2</td>
                    <td className="px-4 py-3">Policy checks, quote copying and verification, safeguards</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">AI/LLM</td>
                    <td className="px-4 py-3">GPT-4.1 via Foundry LLM Proxy, strict JSON schema</td>
                    <td className="px-4 py-3">Coverage decision over the full policy contract</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Workflow</td>
                    <td className="px-4 py-3">Foundry Action Types (function-backed)</td>
                    <td className="px-4 py-3">Submit claim, Ask for review, Decide claim</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Frontend</td>
                    <td className="px-4 py-3">React, TypeScript, OSDK (@osdk/react)</td>
                    <td className="px-4 py-3">Claimant portal + adjuster workspace, hosted in Foundry</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Security</td>
                    <td className="px-4 py-3">Ontology object security policies, platform identity, OAuth</td>
                    <td className="px-4 py-3">Owner-or-adjuster access, server-enforced rules</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Quality</td>
                    <td className="px-4 py-3">AIP Evals, Vitest</td>
                    <td className="px-4 py-3">5 golden scenarios × 3 runs, 87 unit tests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Key Technical Decisions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-secondary mb-2">1. The AI points, the code quotes</h4>
                <p className="text-gray-700">
                  Even when told to quote exactly, language models reformat tables and change punctuation. So the AI 
                  never writes a quote. It picks numbered passages from the contract, and code copies the exact text 
                  and checks it again. Every quote a claimant sees is the contract&apos;s own wording.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-secondary mb-2">2. The whole contract, not a search result</h4>
                <p className="text-gray-700">
                  A full policy contract fits in the prompt, so the AI reads every clause in order instead of a few 
                  search hits. That way an exception three sections away can&apos;t be missed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
