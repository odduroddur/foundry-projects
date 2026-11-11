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

export default function AiInsuranceClaims() {
  const claimFlow = 'Claimant picks a policy + coverage, describes what happened → Submit claim\n→ Coverage Function: ownership check → policy dates & schedule → GPT-4.1 over the full wording → verify\n→ Confident and verified: "Approved" / "Declined", with quotes from the policy\n→ Anything uncertain: "With an adjuster"\n→ Claimant disputes an AI decision → back to the adjuster queue\n→ Adjuster approves or declines with a reason → Claimant sees the outcome';

  const routing = 'COVERED      + nothing tripped                       → Approved (automatic)\nNOT_COVERED  + nothing tripped                       → Declined (automatic)\nAMBIGUOUS, unknown facts, < HIGH confidence,\nunverified quote, unaddressed exception              → With an adjuster';

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <a href="/" className="inline-block mb-8 text-gray-400 hover:text-primary transition text-sm">
            ← Back to Projects
          </a>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            AI-Assisted Insurance Claims — Coverage Decisions Grounded in the Policy Wording
          </h1>
          <p className="text-gray-700 mb-8 max-w-3xl">
            A claims system where policyholders get a covered / not-covered decision backed by verified quotes 
            from their own policy, and adjusters review every case the AI isn&apos;t sure about.
          </p>

          <div className="bg-surface rounded-md p-6 overflow-hidden flex justify-center">
            <video 
              controls 
              className="max-w-full h-auto rounded"
              style={{ maxHeight: '500px' }}
              src="https://github.com/odduroddur/foundry-projects/raw/refs/heads/main/app/ai-insurance-claims/01%20App%20Video.mp4"
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
              Claims triage is slow and manual: find the policy, read the wording clause by clause, write up a 
              decision. Clear-cut claims wait in the same queue as the hard ones. But an AI that &quot;just 
              decides&quot; can&apos;t be trusted either. Insurance wording is full of exclusions with exceptions, 
              and a model that paraphrases or skips a clause gets it wrong. Every decision has to be explainable 
              against the actual policy wording, and uncertain cases have to reach a human.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-primary">The Solution</h3>
            <p className="text-gray-700 mb-4">Two apps on one shared Ontology, plus an AI Coverage Function:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Claimant portal — Submit a claim, see the decision with quotes from your own policy, and dispute AI decisions</li>
              <li>Adjuster workspace — Review queue, AI assessment with verified quotes, approve or decline with a reason</li>
              <li>Coverage Function — Deterministic checks, then GPT-4.1 over the complete policy wording, then independent verification of every citation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">The Impact</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Every decision cites the exact policy wording — quotes are copied by code and verified, never written by the model</li>
              <li>Uncertain claims always reach a human — unknown facts, low confidence or unverified quotes route to an adjuster</li>
              <li>Clear-cut claims are decided automatically, so adjusters focus on the cases that need judgement</li>
              <li>Claimants only ever see their own data — enforced by Ontology row-level security, not by the app</li>
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
                  Pick one of your policies (pet, auto or home), choose a coverage (only coverages on your schedule 
                  are listed), enter the incident date and describe what happened. Your description is stored word 
                  for word. The AI&apos;s wording is kept separately and never replaces it.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/ai-insurance-claims/02%20Claimant%20Claim%20Form.png"
                  alt="Claimant portal claim form with policy, coverage, incident date and description"
                />
              </div>

              <div>
                <h4 className="text-base font-semibold text-secondary mb-3">Decision With Policy Quotes</h4>
                <p className="text-gray-700 mb-4">
                  For an AI decision, the claimant sees the assessment and a &quot;From your policy&quot; section with 
                  the quoted clauses. Only verified quotes are shown. They can disagree with a reason, which sends 
                  the claim to an adjuster. While an adjuster is involved, the portal shows only a notice, so a 
                  provisional AI assessment can&apos;t raise false hopes.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/ai-insurance-claims/03%20Claimant%20Decision%20With%20Quotes.png"
                  alt="AI-decided claim showing the assessment, verified policy quotes and the Ask for review option"
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
                  Every claim line waiting for review, with disputed lines flagged. Only members of the adjuster 
                  group with an active employee profile can open it.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/ai-insurance-claims/04%20Adjuster%20Queue.png"
                  alt="Adjuster review queue with disputed lines flagged"
                />
              </div>

              <div>
                <h4 className="text-base font-semibold text-secondary mb-3">Review Detail</h4>
                <p className="text-gray-700 mb-4">
                  Everything needed for a decision on one page: what the claimant wrote, why they disagree, the 
                  AI&apos;s decision, confidence and reasoning, and exactly why it was sent to review. Each quote 
                  carries a Verified / Not verified tag. The adjuster approves or declines with a reason the 
                  claimant sees, and the system records when the AI was overturned.
                </p>
                <ClickableImage 
                  src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/ai-insurance-claims/05%20Adjuster%20Review%20Detail.png"
                  alt="Adjuster review detail with AI assessment, review trigger, verified quotes and decision form"
                  maxHeight="700px"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">The AI and Its Safeguards</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>Deterministic checks first — policy dates and schedule coverage are checked in code. If they fail, the claim is declined without calling the model</li>
              <li>Strict JSON schema — GPT-4.1 returns decision, confidence, reasoning, unknown facts, chosen passages and exceptions considered. Only real passage IDs and clause numbers are allowed</li>
              <li>Independent verifier — every citation is re-checked against the clause it&apos;s attributed to</li>
              <li>Exception guardrail — a decline citing a clause that contains an exception, without explaining why the exception doesn&apos;t apply, goes to review</li>
              <li>Atomic save — claim, claim line and citations are written in one edit batch through a single Action</li>
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
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/ai-insurance-claims/06%20Architecture%20Diagram.svg"
              alt="Architecture Diagram"
              maxHeight="600px"
              fullWidth
            />
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Ontology Model</h3>
            <p className="text-gray-700 mb-4">
              Nine object types link policy wording to decisions: Policyholder → Policy → Contract → Contract 
              Section, and Policy → Claim → Claimant → Claim Citation, with Employee for the adjuster. A Claim is 
              the incident. A Claimant is not a person but one adjudicated claim line, and that is where the 
              decision lives.
            </p>
            <ClickableImage 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/ai-insurance-claims/07%20Ontology%20Graph.png"
              alt="Ontology graph of the insurance object types and their links"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Security</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Identity from the platform — every Action gets the user from Foundry&apos;s server-filled current_user_id. No app ever sends a user ID</li>
              <li>Row-level security — object security policies allow a Policy, Claim, Claimant or Claim Citation row only for its owner or the adjuster group. Employee records are adjuster-only</li>
              <li>Owner ID on every private row — stamped by the pipeline and by the Coverage Function on every new claim, line and citation</li>
              <li>Ownership-scoped AI input — the Function starts from the signed-in user&apos;s own policy, so no other customer&apos;s data can reach the prompt</li>
              <li>Backend-enforced rules — claimants can only dispute their own AI-decided lines; deciding requires an active employee profile</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Evaluation & Testing</h3>
            <p className="text-gray-700 mb-4">
              An AIP Evals suite runs five golden scenarios three times each, with seven checks per run and no 
              LLM-as-judge. Result: 15/15 executions and 105/105 checks passing, plus 87 unit tests.
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
                    <td className="px-4 py-3">The model finds a carve-back inside an exclusion</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Pothole damage, no Collision on the schedule</td>
                    <td className="px-4 py-3">Declined, no model call</td>
                    <td className="px-4 py-3">Schedule facts are decided by code, not the model</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Mold, cause of moisture unknown</td>
                    <td className="px-4 py-3">Unclear → adjuster, cites §6.3</td>
                    <td className="px-4 py-3">Unknown facts reach a human instead of becoming a decline</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">Getting to green meant fixing the system. The tests never changed:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>A confident &quot;covered&quot; went to review because the model reformatted a table while quoting. The verifier caught it, and quotes were replaced with passage IDs</li>
              <li>The mold case could be auto-declined despite an unknown cause. That led to the mandatory unknown-facts field and a gate that forces review</li>
              <li>Routine cleaning was sent to review over incomplete exception handling. Instead of switching off the guardrail, exception references were restricted to real clause numbers</li>
            </ul>
            <ClickableImage 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/ai-insurance-claims/08%20Golden%20Evals.png"
              alt="AIP Evals run: five golden scenarios, three repetitions, all checks passing"
            />
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
                    <td className="px-4 py-3">Policy PDFs → Markdown → 95 typed clauses; policy and customer data</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Semantic Layer</td>
                    <td className="px-4 py-3">Foundry Ontology</td>
                    <td className="px-4 py-3">9 linked object types from policy wording to claim citation</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Backend Functions</td>
                    <td className="px-4 py-3">TypeScript v2</td>
                    <td className="px-4 py-3">Deterministic checks, quote selection, verification, guardrails</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">AI/LLM</td>
                    <td className="px-4 py-3">GPT-4.1 via Foundry LLM Proxy, strict JSON schema</td>
                    <td className="px-4 py-3">Coverage assessment over the full policy wording</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Workflow</td>
                    <td className="px-4 py-3">Foundry Action Types (function-backed)</td>
                    <td className="px-4 py-3">Submit claim, Ask for review, Decide claim line</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Frontend</td>
                    <td className="px-4 py-3">React, TypeScript, OSDK (@osdk/react)</td>
                    <td className="px-4 py-3">Claimant portal + adjuster workspace, hosted in Foundry</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Security</td>
                    <td className="px-4 py-3">Ontology object security policies, platform identity, OAuth</td>
                    <td className="px-4 py-3">Owner-or-adjuster row access, backend-enforced rules</td>
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
                <h4 className="text-base font-semibold text-secondary mb-2">1. Passage IDs instead of model-written quotes</h4>
                <p className="text-gray-700">
                  Even when told to quote exactly, models reflow tables and change punctuation. So the model only 
                  picks passage IDs from a list, and code copies the exact source text. A made-up quote isn&apos;t 
                  just caught, it can&apos;t be produced in the first place.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-secondary mb-2">2. The complete wording, not retrieval</h4>
                <p className="text-gray-700">
                  A whole policy wording fits comfortably in the prompt, so every clause is sent in order. There&apos;s 
                  no search step that could miss an exception three sections away. Waiting periods are passed as a 
                  precomputed &quot;days in force&quot; number, so the model never does date arithmetic.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-secondary mb-2">3. Decisions on the claim line, not the claim</h4>
                <p className="text-gray-700">
                  One incident can be covered under one coverage and excluded under another. The Claim holds the 
                  claimant&apos;s own words. Each Claimant line holds a decision and its citations.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-secondary mb-2">4. Split clauses on section numbers, not headings</h4>
                <p className="text-gray-700">
                  Heading levels recovered from a PDF depend on font size and change from page to page. Section 
                  numbers are part of the content and survive extraction intact. The clause type is structural and 
                  only drives the guardrail. It never decides an outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
