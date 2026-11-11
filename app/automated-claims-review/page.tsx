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
      <div className="bg-surface rounded-md p-6 overflow-hidden flex justify-center">
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

const BASE = "https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/app/ai-insurance-claims";

export default function AiInsuranceClaims() {
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
            A claims system built on Foundry where policyholders submit a claim and get a covered / not-covered 
            decision backed by verified quotes from their own policy, and adjusters review everything the AI 
            isn&apos;t sure about. The AI never writes its own evidence: it points at passages, code copies the 
            exact wording, and an independent verifier checks every citation before anything is decided.
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
            <p className="text-gray-700 leading-relaxed mb-4">
              Claims triage is slow and manual: an adjuster reads the claim, finds the right policy, works through 
              the wording clause by clause, and writes up a decision. Most claims are clear-cut, but they wait in 
              the same queue as the hard ones.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Handing that to an AI that &quot;just decides&quot; doesn&apos;t work either. Insurance wording is 
              full of exclusions that give coverage back and coverages that take it away. A model that paraphrases a 
              clause, quotes the wrong section or ignores an exception can&apos;t be trusted. Every decision has 
              to be explainable against the actual policy wording, and every uncertain case has to reach a human.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-primary">The Solution</h3>
            <p className="text-gray-700 mb-4">Two web apps on one shared Ontology, plus a Coverage Function that does the assessment:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Claimant portal — Policyholders submit a claim against one of their policies, see the decision with quotes from their own policy, and can dispute an AI decision</li>
              <li>Claims review — Adjusters work a review queue, see the AI&apos;s assessment with verified quotes and the reason it was sent to review, and approve or decline with a reason the claimant sees</li>
              <li>Coverage Function — Deterministic checks first, then GPT-4.1 over the complete policy wording with a strict JSON schema, then independent verification. Confident results are decided automatically; anything else goes to an adjuster</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">The Impact</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Every decision cites the exact policy wording — quotes are copied from the source by code and verified, so the model can&apos;t make up a citation</li>
              <li>Uncertain claims always reach a human — low confidence, unknown facts, unverified quotes or skipped exceptions all route to an adjuster</li>
              <li>Clear-cut claims are decided automatically, so adjusters spend their time on the cases that need judgement</li>
              <li>Claimants only ever see their own data — enforced by Ontology row-level security, not by the app</li>
              <li>Disputes have a defined path — a claimant can challenge an AI decision, and it goes straight to an adjuster with the claimant&apos;s reason</li>
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
              <pre className="text-gray-600 whitespace-pre-wrap font-mono text-sm">
{`Claimant picks a policy + coverage, gives the incident date, describes what happened → Submit claim
→ Coverage Function: ownership check → policy dates & schedule → GPT-4.1 over the full wording → verify
→ Confident and verified: "Approved" / "Declined", with quotes from the policy
→ Anything uncertain: "With an adjuster"
→ Claimant disagrees with an AI decision → Ask for review → back to the adjuster queue
→ Adjuster approves or declines with a reason → Claimant sees "Approved / Declined by adjuster" + reason`}
              </pre>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">The Claimant Portal</h3>
            <p className="text-gray-700 mb-4">
              A simple form: choose one of your policies (pet, auto or home), pick a coverage (only coverages 
              actually on your policy schedule are listed), enter the incident date and describe what happened in 
              your own words. Your description is stored word for word as the record of the claim. The AI&apos;s 
              wording is kept separately and never replaces it.
            </p>
            <ClickableImage 
              src={`${BASE}/02%20Claimant%20Claim%20Form.png`}
              alt="Claimant portal claim form with policy, coverage, incident date and description"
            />
          </div>

          <div className="mb-12">
            <p className="text-gray-700 mb-4">
              &quot;Your claims&quot; lists every claim with a plain-language status. On a claim the AI decided, 
              the claimant sees the assessment and a &quot;From your policy&quot; section with the quoted clauses 
              and their section numbers. Only verified quotes are ever shown as evidence. If they disagree, they 
              give a reason and the claim goes to an adjuster.
            </p>
            <p className="text-gray-700 mb-4">
              What the claimant sees depends on who is deciding. While an adjuster is involved, the portal shows 
              only a notice, so a provisional AI assessment can&apos;t raise false hopes. After an adjuster 
              decides, the claimant sees the adjuster&apos;s reason.
            </p>
            <ClickableImage 
              src={`${BASE}/03%20Claimant%20Decision%20With%20Quotes.png`}
              alt="AI-decided claim showing the assessment, verified policy quotes and the Ask for review option"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">The Adjuster Workspace</h3>
            <p className="text-gray-700 mb-4">
              The queue shows every claim line waiting for review, and disputed lines are flagged. The detail 
              view puts everything needed for a decision on one page: what the claimant wrote, why they disagree 
              (if they disputed), the AI&apos;s decision, confidence and reasoning, and exactly why it was sent to 
              review. For example, &quot;Material facts require clarification: whether the injury was caused by 
              an uninsured motor vehicle&quot;.
            </p>
            <p className="text-gray-700 mb-4">
              Every policy quote carries a Verified / Not verified tag. The adjuster approves or declines and must 
              give a reason, which is shown to the claimant. The system also records when an adjuster overturns 
              the AI. Only members of the adjuster group with an active employee profile can open the workspace or 
              run the decision Action.
            </p>
            <ClickableImage 
              src={`${BASE}/04%20Adjuster%20Queue.png`}
              alt="Adjuster review queue with disputed lines flagged"
            />
            <div className="mt-6">
              <ClickableImage 
                src={`${BASE}/05%20Adjuster%20Review%20Detail.png`}
                alt="Adjuster review detail with AI assessment, review trigger, verified quotes and decision form"
                maxHeight="700px"
              />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">The AI and Its Safeguards</h3>
            <p className="text-gray-700 mb-4">
              The model&apos;s judgement is advisory. What makes it trustworthy is the code around it:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>Deterministic checks first — Is the policy in force on the date of loss? Is the claimed coverage on the schedule? If not, the claim is declined without calling the model. A model is never asked to compare two dates; for waiting periods it gets a precomputed &quot;days in force&quot; number</li>
              <li>The complete wording, not a search result — The Function loads every clause of the claimant&apos;s own contract in order. There&apos;s no retrieval or top-N cutoff, so an exception three sections away can&apos;t be missed. If the wording is incomplete, the claim goes to review rather than being assessed on part of the contract</li>
              <li>Strict JSON schema — GPT-4.1 returns a decision, confidence, reasoning, the facts it couldn&apos;t determine, the passages it relies on, and the exceptions it considered. The schema only allows passage IDs and section numbers that actually exist in this contract</li>
              <li>IDs, not quotes — The model picks passage IDs instead of writing quotes. Code copies the exact source text for each ID, so attribution is derived by code and never written by the model</li>
              <li>Independent verifier — Every citation is checked again against the clause it is attributed to. Whitespace is normalised but punctuation isn&apos;t, because a changed comma is a sign of paraphrase</li>
              <li>Exception guardrail — Clauses that both take coverage away and give it back are tagged as &quot;mixed&quot; when the PDF is processed. A decline that cites a mixed clause without explaining why its exception doesn&apos;t apply goes to review. It only applies to declines, because approving while overlooking a carve-back can&apos;t harm the claimant</li>
              <li>Unknown facts force review — If the model reports a material fact it can&apos;t determine, the result becomes &quot;Unclear / Low / With an adjuster&quot;, even if the model also proposed a confident answer</li>
              <li>Atomic save — The claim, its claim line and its citations are written in one edit batch through a single Action, so none of them can be saved without the others</li>
            </ul>
            <div className="bg-surface rounded-md p-6">
              <pre className="text-gray-600 whitespace-pre-wrap font-mono text-sm">
{`COVERED      + nothing tripped                          → Approved (automatic)
NOT_COVERED  + nothing tripped                          → Declined (automatic)
AMBIGUOUS, unknown facts, < HIGH confidence,
unverified quote, unaddressed exception, bad response    → With an adjuster`}
              </pre>
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
              src={`${BASE}/06%20Architecture%20Diagram.svg`}
              alt="Architecture Diagram"
              maxHeight="600px"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Data & Ontology Model</h3>
            <p className="text-gray-700 mb-4">
              Policy wordings for three products (pet, auto, home) arrive as PDFs in a media set. A Python transform 
              reads each PDF&apos;s embedded text layer as Markdown, and a second transform splits it into 95 
              clauses. Clauses are split on section numbers rather than heading levels, because heading depth 
              recovered from a PDF depends on font size and changes from page to page. Each clause gets a 
              structural type. Clauses that mix exclusions with exceptions are tagged so the guardrail knows where 
              to look.
            </p>
            <div className="bg-surface rounded-md p-6 mb-4">
              <pre className="text-gray-600 whitespace-pre-wrap font-mono text-sm">
{`Policyholder → Policy → Contract → Contract Section      (Policy → Policy Type)
                 Policy → Claim → Claimant → Claim Citation
                                    Claimant → Employee (adjuster who decided)`}
              </pre>
            </div>
            <p className="text-gray-700 mb-4">
              A Claim is the incident: one policy, one date of loss, one description, and no decision. A 
              Claimant is not a person. It is one adjudicated line of a claim, and that is where the decision 
              lives. One incident can be covered under one coverage and excluded under another, so decisions 
              belong on the line, not the claim. Each Claim Citation is one verified quote supporting a 
              line&apos;s decision.
            </p>
            <ClickableImage 
              src={`${BASE}/07%20Ontology%20Graph.png`}
              alt="Ontology graph of the insurance object types and their links"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Security</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Identity from the platform — Every Action gets the user from Foundry&apos;s server-filled current_user_id. No app ever sends a user ID, and nothing calls the user directory</li>
              <li>Row-level security in the Ontology — Object security policies on Policy, Claim, Claimant and Claim Citation allow a row only if its owner ID matches the signed-in user or the user is in the adjuster group. Policyholder works the same way, and Employee records are visible to adjusters only. Policy wordings are readable by everyone</li>
              <li>Owner ID on every private row — The pipeline stamps it on existing records, and the Coverage Function stamps it on every new claim, claim line and citation, so new data is protected from the moment it&apos;s written</li>
              <li>Ownership-scoped AI input — The Function starts from the signed-in user&apos;s policyholder record and only then loads the requested policy and its contract. No other customer&apos;s data or unrelated contract can end up in the prompt</li>
              <li>Rules enforced in the backend, not just the UI — Claimants can only dispute their own lines, and only AI decisions. Deciding a line requires an active employee profile linked to the signed-in user</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-primary">Evaluation & Testing</h3>
            <p className="text-gray-700 mb-4">
              An AIP Evals suite runs five golden scenarios against a fixed snapshot of the complete policy 
              wordings, three times each. Seven checks run on every execution: decision, line status, review 
              routing, whether the model was called, required clauses cited, number of citations, and zero 
              unverified citations. No LLM is used as a judge. Final result: 15/15 executions and 105/105 checks 
              passing, plus 87 unit tests.
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
                    <td className="px-4 py-3">A clear claim is decided automatically with correct evidence</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Routine dental cleaning, no Wellness cover</td>
                    <td className="px-4 py-3">Declined, cites §5.2 + §5.7</td>
                    <td className="px-4 py-3">A clear decline still accounts for every exception in mixed clauses</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Tooth fractured in an accident</td>
                    <td className="px-4 py-3">Approved, cites §3.8</td>
                    <td className="px-4 py-3">The model finds the carve-back inside a dental exclusion</td>
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
            <p className="text-gray-700 mb-4">
              Getting to green meant fixing the system, not the tests. Expected outcomes and checks never changed:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>The first preview of the broken-leg case returned a confident &quot;covered&quot;, but went to review because the model had reformatted a table while quoting it. The verifier did its job. Telling the model to quote more carefully wasn&apos;t reliable, so quotes were replaced with passage IDs and code now copies the exact text</li>
              <li>The first full run found the mold case could be auto-declined despite an unknown cause. This led to the mandatory &quot;unknown material facts&quot; field and a code-level gate that forces review</li>
              <li>Putting raw clause text in the schema broke the provider&apos;s strict-schema parser on escaped quotation marks, so the schema now uses plain ASCII passage IDs only</li>
              <li>Rate-limit errors were handled with bounded retries on HTTP 429 only. There are no model fallbacks and no synthesized results</li>
              <li>A later run sent routine cleaning to review because the model&apos;s exception accounting was incomplete. Instead of switching off the guardrail, the schema was tightened so exception references must be real clause numbers and every mixed clause has to be addressed separately</li>
            </ul>
            <ClickableImage 
              src={`${BASE}/08%20Golden%20Evals.png`}
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
                    <td className="px-4 py-3">Media sets, Python transforms, Polars, Foundry text extraction</td>
                    <td className="px-4 py-3">Policy PDFs → page text (Markdown) → 95 clauses with structural types</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Data Pipeline</td>
                    <td className="px-4 py-3">Python transforms</td>
                    <td className="px-4 py-3">Policyholders, policies, policy types, employees; identity mapping and owner IDs</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Semantic Layer</td>
                    <td className="px-4 py-3">Foundry Ontology</td>
                    <td className="px-4 py-3">9 object types from policy wording to claim citation, linked end to end</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">AI Assessment</td>
                    <td className="px-4 py-3">TypeScript v2 Functions, GPT-4.1 via Foundry, strict JSON schema</td>
                    <td className="px-4 py-3">Deterministic checks, full-wording assessment, quote selection, verification, guardrails</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Workflow</td>
                    <td className="px-4 py-3">Foundry Action Types (function-backed)</td>
                    <td className="px-4 py-3">Submit claim, Ask for review, Decide claim line — atomic edits, user from current_user_id</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Frontend</td>
                    <td className="px-4 py-3">React, TypeScript, @osdk/react, hosted in Foundry</td>
                    <td className="px-4 py-3">Claimant portal + adjuster workspace</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Security</td>
                    <td className="px-4 py-3">OAuth via OSDK, Ontology object security policies, platform identity</td>
                    <td className="px-4 py-3">Owner-or-adjuster row access, ownership-scoped AI input, backend-enforced rules</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Quality</td>
                    <td className="px-4 py-3">AIP Evals, Vitest</td>
                    <td className="px-4 py-3">5 golden scenarios × 3 runs (105 checks), 87 unit tests</td>
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
