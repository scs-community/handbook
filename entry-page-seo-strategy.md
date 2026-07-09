# Entry Page Strategy: Supply Chain Security Handbook

## 1. Purpose

This document identifies the pages that should work as entry points for cold visitors arriving from search, AI answer engines, social sharing, GitHub, standards discussions, internal chats, and customer or supplier emails.

The goal is not to create thin keyword landing pages. The goal is to make priority pages useful, specific, structured, citable, and capable of turning confusion into trust, clarity, and a next step.

Use **entry page**, not **landing page**. The word "landing page" can push the team toward thin search pages; "entry page" preserves the handbook intent.

## 2. Site positioning

### Primary job

> How do we request, produce, verify, exchange, and retain evidence of trust across suppliers, products, components, updates, and lifecycle decisions?

### This site should own

- Evidence-led supply-chain security for connected products and platforms.
- Supplier assurance, supplier questions, procurement evidence, and supplier response scoring.
- Product acceptance as a supply-chain trust decision.
- Component visibility, provenance, SBOM/VEX evidence, update-chain trust, vulnerability response evidence, and lifecycle retention.
- Standards-to-evidence mapping for supply-chain assurance decisions.

### This site should not own

- General secure-by-design implementation guidance unless it is framed as supply-chain trust evidence.
- Generic CRA explainers unless tied to supply-chain assurance and evidence.
- Generic SBOM education unless tied to acceptance, vulnerability response, or customer/supplier evidence.
- Product firmware implementation guidance unless framed as supplier, product, update, or lifecycle assurance evidence.

## 3. Entry-page principle

A priority entry page must quickly answer:

- Am I in the right place?
- Can I trust this?
- What decision, evidence, or action does this help with?
- What should I do next?

The strongest entry pages include practical value such as checklists, decision tables, evidence lists, templates, worked examples, role paths, source-backed standards interpretation, and clear caveats.

## 4. Entry-page tiers

| Tier | Role | Treatment |
|---|---|---|
| Tier 1 | Primary entry pages | Highest editorial priority. Must work for cold visitors and route to deeper pages. |
| Tier 2 | Supporting entry pages | Can receive traffic, but mainly deepen journeys from Tier 1 pages. |
| Tier 3 | Reference, examples, and utility pages | Useful support pages. Optimize only when they have a clear entry role. |
| Tier 4 | Blog, news, archive, and generated utility pages | Useful for freshness or navigation, but not the main entry architecture. |

Do not treat every page equally. The sitemap may be mechanically flat, but editorial priority should not be.

## 5. Priority and readiness

Strategic priority and current entry-page readiness are different things.

| Field | Values | Meaning |
|---|---|---|
| Strategic priority | P1, P2, P3, Later | Importance to entry-page architecture. |
| Entry readiness | Ready, Light alignment, Medium rewrite, Major rewrite | Amount of work needed before the page works well as a cold-entry page. |
| Content status | Not started, Needs edit, In progress, Ready for review, Done | Content rewrite or review status. |
| Routing status | Not started, Needs edit, In progress, Ready for review, Done, Review after analytics | Internal linking, next-step routing, and entry-path status. |

A page can be P1 because it is strategically important, while still needing a medium rewrite before it should be treated as a polished search or AI entry page.

## 6. Required Tier 1 page structure

Every Tier 1 page should include:

1. H1 that matches the reader problem.
2. First paragraph that states who the page is for and what decision/action it helps with.
3. A concise answer in the first 150-250 words.
4. "Use this page when..." or equivalent entry cue.
5. Practical table, checklist, template, decision model, or worked example.
6. "What good looks like" or equivalent.
7. Evidence to retain.
8. Common gaps or mistakes.
9. Related pages grouped by next action.
10. Primary-source citations where standards or regulation are discussed.
11. Clear caveat that the page is guidance, not legal/certification advice where relevant.

## 7. Entry-page map

| Priority | Readiness | Page | URL/source | Entry intent | Page promise | Required work | Owner | Content status | Routing status |
|---|---|---|---|---|---|---|---|---|---|
| P1 | Light alignment | Homepage | `src/pages/index.tsx` | I need practical supply-chain security guidance and do not know where to start. | Route visitors by role and show how the handbook turns standards, threats, and assurance needs into controls, evidence, and implementation choices. | Completed: sharpened role routing and added a Start Here path. | Editorial + developer/site config | Done | Done |
| P1 | Light alignment | Start Here | `docs/start-here/index.md` | I have a supply-chain security problem and need the right path for my role. | Help readers choose a role path without replacing the main handbook structure. | Completed: added first-contact routing language while preserving role paths. | Editorial | Done | Done |
| P1 | Light alignment | 10 Best Practices | `docs/practices-controls/10-best-practices.md` | I need a practical overview of supply-chain security practices for products and platforms. | Provide the broad synthesis and route into lifecycle context, resources, examples, and technology options. | Completed: added use-when opening, audience cue, and grouped next steps. | Editorial + product-security reviewer | Done | Done |
| P1 | Ready | Supplier Security Questions | `docs/resources/supplier-security-questions.md` | I need supplier security questions that request evidence, not generic assertions. | Turn supplier questions into scoped evidence requests tied to decisions, artifacts, verification, and retention. | Protect; light wording only if needed. | Editorial + product-security reviewer | Done | Review after analytics |
| P1 | Ready | Evidence Checklist | `docs/resources/evidence-checklist.md` | I need to judge whether evidence is scoped, current, verifiable, retained, and tied to a decision. | Provide canonical review criteria for supplier, product, update, vulnerability, audit, and lifecycle evidence. | Protect; add copy/use cue only if analytics show need. | Editorial + product-security reviewer | Done | Review after analytics |
| P1 | Ready | Evidence Package Template | `docs/resources/evidence-package-template.md` | I need a reusable structure for retaining a decision, evidence, gaps, exceptions, and follow-up actions. | Provide a reusable package structure and warning that weak evidence is still weak when packaged. | Protect; lightly improve title/intro only if needed. | Editorial + product-security reviewer | Done | Review after analytics |
| P1 | Light alignment | Weak vs Strong Supplier Answers | `docs/resources/worked-examples/weak-vs-strong-supplier-answers.md` | I need examples of weak, better, and stronger supplier answers. | Teach how to score supplier claims and move from assertions to decision-ready evidence. | Completed: strengthened entry promise and scoring pattern. | Editorial + product-security reviewer | Done | Done |
| P1 | Medium rewrite | Product Acceptance and Supply Chain Trust | `docs/practices-controls/product-acceptance-supply-chain-trust.md` | I need to decide whether to accept, reject, quarantine, or conditionally accept a product or component. | Define product acceptance as an evidence-backed trust decision across identity, provenance, component state, vulnerabilities, updates, and supportability. | Completed: rewrote opening, added use-when block, and grouped related links. | Editorial + product-security reviewer | Done | Done |
| P1 | Medium rewrite | Supplier and Procurement Assurance | `docs/practices-controls/supplier-assurance-procurement.md` | I need to turn supplier risk and procurement expectations into evidence requests and review decisions. | Turn supplier assurance into scoped evidence requirements, contract commitments, reviews, renewal triggers, and exceptions. | Completed: strengthened cold opening, use-when framing, and grouped next steps. | Editorial + product-security reviewer | Done | Done |
| P2 | Light alignment | Product Acceptance Package | `docs/resources/worked-examples/product-acceptance-package.md` | I need an example of an evidence-backed product acceptance decision. | Demonstrate the evidence package template in a connected-product acceptance scenario. | Completed: aligned with the Evidence Package Template and grouped related links. | Editorial + product-security reviewer | Done | Done |
| P2 | Light alignment | Supplier Onboarding Evidence Package | `docs/resources/worked-examples/supplier-onboarding-evidence-package.md` | I need an example of a supplier approval or conditional approval evidence package. | Demonstrate conditional supplier approval before contract award using scoped supplier evidence. | Completed: strengthened package intent and aligned decision fields. | Editorial + product-security reviewer | Done | Done |
| P2 | Light alignment | Secure Update Approval | `docs/resources/worked-examples/secure-update-approval.md` | I need an example of an evidence-backed update approval decision. | Demonstrate update approval using signing, release evidence, recovery testing, exclusions, and retention. | Completed: clarified update-approval intent and linked from update mechanisms. | Editorial + product-security reviewer | Done | Done |
| P2 | Light alignment | Vulnerability Response Evidence | `docs/resources/worked-examples/vulnerability-response-evidence.md` | I need to judge whether a vulnerability fix claim is evidence-backed. | Show what "we fixed it" should include beyond a statement. | Completed: aligned fix-claim review with package fields and toolkit links. | Editorial + product-security reviewer | Done | Done |
| P2 | Light alignment | Component Provenance Example | `docs/resources/worked-examples/component-provenance-example.md` | I need to move from a BOM list to reviewable provenance evidence. | Show how component lists become provenance, custody, support, exception, and retention evidence. | Completed: aligned BOM-to-provenance example with package fields and toolkit links. | Editorial + product-security reviewer | Done | Done |
| P2 | Ready | Evidence Maturity Model | `docs/resources/evidence-maturity-model.md` | I need to score whether evidence is an assertion, process, artifact, verifiable artifact, or lifecycle-retained evidence. | Score evidence strength across supplier assurance, product acceptance, updates, vulnerabilities, and audit readiness. | Protect; maybe add one score-this-response prompt later. | Editorial + product-security reviewer | Done | Review after analytics |
| P2 | Ready | Standards to Evidence and Technology Mapping Workflow | `docs/resources/standards-evidence-technology-mapping.md` | I need to map a standard or requirement to evidence and technology without overclaiming. | Provide a repeatable mapping workflow with roles, confidence, gaps, and a starter example. | Protect; add more examples only if needed. | Editorial + standards reviewer | Done | Review after analytics |
| P2 | Medium rewrite | SBOM, VEX, and Component Visibility | `docs/technology-options/sbom-vex-component-visibility.md` | I need to understand how SBOM and VEX support supplier assurance, component visibility, acceptance, and customer evidence. | Explain SBOM/VEX as transparency inputs for decisions, not proof of security or acceptance by themselves. | Completed: strengthened cold-entry summary and grouped next steps to practice/example pages. | Editorial + technical reviewer | Done | Done |
| P2 | Light alignment | Secure Update and Recovery Mechanisms | `docs/technology-options/secure-update-recovery-mechanisms.md` | I need to verify update-chain trust, release governance, signing evidence, rollback, recovery, and deployment evidence. | Explain update and recovery mechanisms as evidence-producing options that require governance and retained decisions. | Completed: added use cases, linked Secure Update Approval near top, and grouped next steps. | Editorial + technical reviewer | Done | Done |
| P2 | Light alignment | Trust Anchors and Device Identity | `docs/technology-options/trust-anchors-device-identity.md` | I need to understand identity evidence for product acceptance, provenance, lifecycle state, and verifier workflows. | Explain trust anchors and identity mechanisms as evidence supports, not proof of product trust by themselves. | Completed: clarified cold-entry promise and added verifier/product-acceptance example links. | Editorial + technical reviewer | Done | Done |
| P2 | Ready | Standards and Regulations | `docs/standards-threats/standards-regulations/index.md` | I need to understand which standards create supply-chain evidence pressure and where to act in the handbook. | Route standards/regulation visitors into threats, practices, evidence, and implementation options. | Routing review complete; protect and review again after analytics. | Editorial + standards reviewer | Done | Review after analytics |
| P2 | Ready | EU Cyber Resilience Act | `docs/standards-threats/standards-regulations/eu-cyber-resilience-act.md` | I need to understand CRA relevance to supply-chain assurance and evidence. | Map CRA product cybersecurity and lifecycle expectations to supply-chain controls and retained evidence. | Routing review complete; protect legal caution and review again after analytics. | Editorial + standards reviewer | Done | Review after analytics |
| P2 | Ready | NIS2 | `docs/standards-threats/standards-regulations/nis2.md` | I need to understand NIS2 relevance to supplier assurance, procurement evidence, and customer assurance. | Explain NIS2 customer flow-down and supplier-risk governance as evidence needs. | Routing review complete; protect legal caution and review again after analytics. | Editorial + standards reviewer | Done | Review after analytics |
| P2 | Ready | NIST SP 800-161 | `docs/standards-threats/standards-regulations/nist-sp-800-161.md` | I need to connect C-SCRM guidance to supplier, acquisition, product, service, and dependency evidence. | Connect C-SCRM guidance to supplier criticality, acquisition, monitoring, risk response, and evidence. | Routing review complete; protect source-backed C-SCRM framing. | Editorial + standards reviewer | Done | Review after analytics |
| P2 | Ready | IEC 62443 | `docs/standards-threats/standards-regulations/iec-62443.md` | I need to connect industrial product and component security expectations to lifecycle evidence. | Interpret IEC 62443 product/component implications for industrial supply-chain evidence. | Routing review complete; protect industrial lifecycle framing. | Editorial + standards reviewer | Done | Review after analytics |
| P2 | Ready | NIST SSDF | `docs/standards-threats/standards-regulations/nist-ssdf.md` | I need to connect secure software development guidance to release, component, vulnerability, and supplier software evidence. | Map SSDF secure development practices to release evidence, component management, vulnerability response, and supplier assurance. | Routing review complete; protect supplier-software bridge. | Editorial + standards reviewer | Done | Review after analytics |
| P3 | Ready | Worked Examples | `docs/resources/worked-examples/index.md` | I need to see realistic examples of stronger supplier, product, update, vulnerability, or component evidence. | Route readers to concrete proof-layer examples using a shared evidence model. | Preserve as hub; do not duplicate scenario detail. | Editorial | Done | Done |

## 8. Priority page briefs

Create a brief before rewriting any P1 page. The briefs below are working briefs for the current P1 set and selected P2 pages. For pages now marked `Done`, the `Current problem` and `Required rewrite` fields record what the first implementation pass addressed; they are not new instructions unless a later review reopens the page.

### Homepage

- **Tier:** Tier 1
- **Strategic priority:** P1
- **Entry readiness:** Light alignment
- **Primary audience:** Cold visitors who need orientation.
- **Primary intent:** Find practical supply-chain security guidance and choose a path.
- **Likely query / AI prompt cluster:** supply chain security handbook; supply chain security guidance; product supply chain security controls.
- **Page promise:** This handbook turns standards and threats into controls, evidence, and implementation choices for connected products and platforms.
- **Unique value:** Role routing plus evidence-led handbook model.
- **What good looks like:** A cold visitor can understand the handbook's evidence-led purpose and choose a role, practice, or resource path within one screen.
- **Current problem:** Strong router, but the hero could better foreground evidence-led supply-chain security.
- **Required rewrite:** Light hero/CTA adjustment only.
- **Preserve:** Fast role cards, compact model, featured resources.
- **Next-step links:** Start Here, 10 Best Practices, Evidence Checklist, Resources.
- **Success signal:** Visitor chooses a role path or practical resource.

#### Rewrite instructions

- Sharpen the hero around evidence-led supply-chain security.
- Consider a secondary CTA to `Start Here` or `Evidence Checklist`.
- Keep the homepage short.

#### Do not

- Add long SEO prose.
- Turn the homepage into a complete sitemap.
- Hide the role cards.

### Start Here

- **Tier:** Tier 1
- **Strategic priority:** P1
- **Entry readiness:** Light alignment
- **Primary audience:** Visitors who know their role but not their route.
- **Primary intent:** Choose the right reader path.
- **Likely query / AI prompt cluster:** supply chain security where to start; supplier assurance path; product security assurance path.
- **Page promise:** Pick the role path that matches your part of the assurance workflow.
- **Unique value:** Six role paths tied to the handbook structure.
- **What good looks like:** A visitor can identify their role, choose a path, and understand how that path connects to standards, practices, technology options, and resources.
- **Current problem:** Good router, but cold visitors may need one more sentence explaining the output.
- **Required rewrite:** Light intro adjustment.
- **Preserve:** Simple role table and main-section explanation.
- **Next-step links:** Role pages, common topic shortcuts.
- **Success signal:** Visitor chooses a role route or common topic shortcut.

#### Rewrite instructions

- Add one first-contact sentence explaining that this page routes readers into decision, evidence, and implementation guidance.
- Consider a very small task-based crosswalk only if role paths prove insufficient.

#### Do not

- Duplicate the Resources hub.
- Add a long task table.
- Replace role paths with topic taxonomy.

### 10 Best Practices

- **Tier:** Tier 1
- **Strategic priority:** P1
- **Entry readiness:** Light alignment
- **Primary audience:** Product security, procurement, supplier assurance, compliance, and engineering leadership.
- **Primary intent:** Understand the main practical supply-chain security practices.
- **Likely query / AI prompt cluster:** supply chain security best practices; product supply chain security controls; software supply chain security best practices.
- **Page promise:** Ten recurring practices help move from standards, threats, and assurance needs to controls, evidence, verification, and lifecycle decisions.
- **Unique value:** Evidence-first synthesis rather than generic best practices.
- **What good looks like:** A visitor can select the relevant practice or decision crosswalk and know the first evidence to ask for.
- **Current problem:** Strong page, but could better state its difference from generic best-practice lists.
- **Required rewrite:** Light opening adjustment.
- **Preserve:** At-a-glance table, expandable full guidance, decision crosswalk.
- **Next-step links:** Lifecycle map, evidence checklist, supplier questions, worked examples, technology options.
- **Success signal:** Visitor selects a practice or decision crosswalk path.

#### Rewrite instructions

- Add a "Use this page when..." sentence near the top.
- Add one sentence explaining that the page is evidence-backed and lifecycle-oriented.

#### Do not

- Push the at-a-glance table too far down.
- Turn each practice into a full article.
- Remove expandable detail.

### Supplier Security Questions

- **Tier:** Tier 1
- **Strategic priority:** P1
- **Entry readiness:** Ready
- **Primary audience:** Procurement, supplier assurance, security, compliance, and suppliers preparing responses.
- **Primary intent:** Ask suppliers evidence-backed questions.
- **Likely query / AI prompt cluster:** supplier security questions; supplier security questionnaire; vendor security questionnaire; supplier cybersecurity assessment questions.
- **Page promise:** Ask for artifact, scope, owner, verification path, and retention expectation instead of unsupported assertions.
- **Unique value:** Product/lifecycle/evidence-focused supplier questions.
- **What good looks like:** A reader can turn a supplier claim into a scoped evidence request with artifact, owner, verification, gaps, and retention expectations.
- **Current problem:** No major problem.
- **Required rewrite:** No rewrite; light search-language alignment only if needed.
- **Preserve:** Decision-first structure and request pattern.
- **Next-step links:** Evidence Checklist, Evidence Package Template, Weak vs Strong Supplier Answers, Supplier Onboarding Evidence Package.
- **Success signal:** Visitor can draft or improve a supplier request.

#### Rewrite instructions

- Keep changes minimal.
- If needed, add only one sentence connecting the page to supplier security questionnaire search intent.

#### Do not

- Turn the page into a generic questionnaire library.
- Add broad compliance questions that are not evidence-backed.
- Remove the request pattern.

### Evidence Checklist

- **Tier:** Tier 1
- **Strategic priority:** P1
- **Entry readiness:** Ready
- **Primary audience:** Assurance reviewers, procurement, product security, auditors, and customer assurance teams.
- **Primary intent:** Judge evidence quality.
- **Likely query / AI prompt cluster:** cybersecurity evidence checklist; supplier assurance evidence checklist; supply chain security evidence.
- **Page promise:** Evidence should be scoped, current, verifiable, retained, and tied to a decision.
- **Unique value:** Canonical review criteria for evidence-led assurance.
- **What good looks like:** A reviewer can decide whether evidence is sufficient, conditional, rejected, or still incomplete.
- **Current problem:** No major problem.
- **Required rewrite:** No rewrite; optional copy/use cue later.
- **Preserve:** Start With the Decision, evidence-area table, Minimum Useful Evidence.
- **Next-step links:** Supplier Security Questions, Evidence Maturity Model, Evidence Package Template, worked examples.
- **Success signal:** Visitor can decide whether evidence is sufficient, conditional, rejected, or incomplete.

#### Rewrite instructions

- Protect the current structure.
- Add only a small reuse cue if future review shows readers want it.

#### Do not

- Add too many standards citations.
- Turn the checklist into a full methodology guide.
- Remove the decision-first framing.

### Evidence Package Template

- **Tier:** Tier 1
- **Strategic priority:** P1
- **Entry readiness:** Ready
- **Primary audience:** Assurance teams, auditors, product security, procurement, suppliers, and customer assurance teams.
- **Primary intent:** Package and retain an evidence-backed decision.
- **Likely query / AI prompt cluster:** security evidence package template; supplier evidence package; product security evidence template; cybersecurity audit evidence package.
- **Page promise:** Capture decision, outcome, owner, scope, evidence, verification, gaps, exceptions, retention, and follow-up actions.
- **Unique value:** Practical template with an explicit warning that packaging does not strengthen weak evidence.
- **What good looks like:** A team can retain a decision package that remains explainable, reviewable, and useful after the original decision.
- **Current problem:** No major problem.
- **Required rewrite:** No rewrite; optional title/intro alignment later.
- **Preserve:** Warning, template table, package variants, copyable starter template.
- **Next-step links:** Supplier Security Questions, Evidence Checklist, Evidence Maturity Model, worked examples.
- **Success signal:** Visitor can assemble an evidence package.

#### Rewrite instructions

- Protect the warning and copyable template.
- Keep the template near the top.

#### Do not

- Add long explanatory prose before the template.
- Make this a maturity scoring page.
- Treat evidence packages as proof of assurance by themselves.

### Weak vs Strong Supplier Answers

- **Tier:** Tier 1
- **Strategic priority:** P1
- **Entry readiness:** Light alignment
- **Primary audience:** Procurement, supplier assurance, customer assurance, and suppliers writing responses.
- **Primary intent:** Compare weak supplier claims with stronger evidence-backed answers.
- **Likely query / AI prompt cluster:** weak vs strong supplier security answers; supplier security questionnaire examples; example supplier security answer.
- **Page promise:** Stronger answers are scoped, reviewable, decision-ready, gap-aware, and retained.
- **Unique value:** Fast side-by-side examples that teach response scoring.
- **What good looks like:** A reader can explain why an answer is weak, better, stronger, or incomplete and route it into review or packaging.
- **Current problem:** Strong page; could be even better as a first-contact page with a more explicit entry promise.
- **Required rewrite:** Light opening alignment.
- **Preserve:** Scoring table, side-by-side examples, assessment pattern.
- **Next-step links:** Supplier Security Questions, Evidence Checklist, Evidence Maturity Model, Evidence Package Template.
- **Success signal:** Visitor can explain why a supplier answer is weak, better, stronger, or incomplete.

#### Rewrite instructions

- Add a sharper opening sentence for supplier-answer scoring.
- Consider one short lead example before the main table.

#### Do not

- Turn the page into a full supplier assurance guide.
- Add long policy discussion.
- Remove quick comparison value.

### Product Acceptance and Supply Chain Trust

- **Tier:** Tier 1
- **Strategic priority:** P1
- **Entry readiness:** Medium rewrite
- **Primary audience:** Product security, supplier assurance, procurement, integrators, and acceptance authorities.
- **Primary intent:** Decide whether to accept, reject, quarantine, or conditionally accept a product or component.
- **Likely query / AI prompt cluster:** product security acceptance criteria; product acceptance security evidence; supply chain product acceptance; component acceptance evidence.
- **Page promise:** Product acceptance is an evidence-backed trust decision before deployment or integration.
- **Unique value:** Differentiated treatment of product acceptance as a supply-chain security decision.
- **What good looks like:** A buyer can define the evidence baseline needed to accept, quarantine, reject, remediate, or conditionally accept a product or component.
- **Current problem:** Substance is strong, but the opening reads like a practice reference more than a cold-entry page.
- **Required rewrite:** Medium rewrite of the opening and related links, not a full content rewrite.
- **Preserve:** Decisions supported, core controls, evidence table, weak/strong answer, related worked examples.
- **Next-step links:** Product Acceptance Package, Evidence Checklist, Trust Anchors and Device Identity, Attestation and Measured State, SBOM/VEX.
- **Success signal:** Visitor can define an acceptance evidence baseline or route to the worked example.

#### Rewrite instructions

- Rewrite first 150-250 words to say who the page is for and what decision it supports.
- Add "Use this page when..." near the top.
- Group related links by next action.

#### Do not

- Turn the practice page into a second worked example.
- Duplicate the Product Acceptance Package.
- Lose the existing practice-page structure for internal readers.

### Supplier and Procurement Assurance

- **Tier:** Tier 1
- **Strategic priority:** P1
- **Entry readiness:** Medium rewrite
- **Primary audience:** Procurement, supplier assurance, risk, compliance, product security, and suppliers.
- **Primary intent:** Turn supplier risk and procurement expectations into evidence requests and review decisions.
- **Likely query / AI prompt cluster:** supplier assurance cybersecurity; procurement cybersecurity requirements; supplier cyber risk assessment; supply chain security procurement.
- **Page promise:** Supplier assurance works when supplier claims are tied to scoped evidence, contracts, reviews, renewal triggers, and exceptions.
- **Unique value:** Bridges procurement process and evidence-backed assurance.
- **What good looks like:** A procurement or assurance team can define supplier evidence requirements, review cadence, contract expectations, and exception paths.
- **Current problem:** Good practice page, but could be clearer as a cold-entry page for procurement search intent.
- **Required rewrite:** Medium rewrite of opening and use-when framing.
- **Preserve:** Controls, evidence list, supplier/internal/auditor/implementer questions, related examples.
- **Next-step links:** Supplier Security Questions, Weak vs Strong Supplier Answers, Supplier Onboarding Evidence Package, Evidence Checklist.
- **Success signal:** Visitor can define supplier evidence requirements or route to the supplier questionnaire.

#### Rewrite instructions

- Strengthen the opening around supplier assurance and procurement security requirements.
- Add a concise use-when block.
- Group related links by request, review, package, and implementation.

#### Do not

- Turn the page into generic procurement policy.
- Duplicate Supplier Security Questions.
- Remove standards citations from controls.

### SBOM, VEX, and Component Visibility

- **Tier:** Tier 2
- **Strategic priority:** P2
- **Entry readiness:** Medium rewrite
- **Primary audience:** Product security, supplier assurance, vulnerability response, DevSecOps, compliance, and customer assurance teams.
- **Primary intent:** Understand how SBOM and VEX support assurance decisions.
- **Likely query / AI prompt cluster:** SBOM VEX supplier assurance; SBOM supply chain security; component visibility security; VEX vulnerability status evidence.
- **Page promise:** SBOM and VEX are transparency inputs for acceptance, vulnerability response, update decisions, and customer evidence; they do not prove security by themselves.
- **Unique value:** Positions SBOM/VEX inside assurance workflows rather than as standalone paperwork.
- **Current problem:** Strong technology-option page, but mechanism-heavy for cold visitors.
- **Required rewrite:** Medium rewrite of first 150-250 words and next-step routing.
- **Preserve:** Format-specific sections, limits, source/version notes, supplier questions.
- **Next-step links:** Software Component and Vulnerability Management, Product Acceptance, Evidence Checklist, Component Provenance Example, Vulnerability Response Evidence.
- **Success signal:** Visitor understands what SBOM/VEX can and cannot support and where to go next.

#### Rewrite instructions

- Add a concise cold-entry summary at the top.
- Explicitly say SBOM/VEX support decisions but do not prove acceptance.
- Group next steps by supplier assurance, acceptance, vulnerability response, and retention.

#### Do not

- Remove format detail for SPDX, CycloneDX, and VEX-like records.
- Turn the page into a generic SBOM explainer.
- Claim SBOM/VEX proves compliance or product security.

### Product Acceptance Package

- **Tier:** Tier 2
- **Strategic priority:** P2
- **Entry readiness:** Light alignment
- **Primary audience:** Product security, supplier assurance, procurement, and acceptance reviewers.
- **Primary intent:** See an example of an evidence-backed product acceptance decision.
- **Page promise:** A fictional product acceptance package shows how identity, provenance, firmware, vulnerability status, gaps, conditions, and retention support an acceptance decision.
- **Unique value:** Concrete proof that the Evidence Package Template can support a real acceptance workflow.
- **What good looks like:** A reader can copy the decision pattern into their own acceptance review without confusing the example with policy.
- **Current problem:** Strong example, but the opening could more clearly state that it applies the Evidence Package Template.
- **Required rewrite:** Light opening alignment only.
- **Preserve:** Scenario, weak/better/stronger progression, evidence package table, verification questions, gaps and retention.
- **Next-step links:** Product Acceptance and Supply Chain Trust, Evidence Checklist, Evidence Package Template, Trust Anchors and Device Identity, SBOM/VEX.
- **Success signal:** Visitor can model an accept-with-conditions decision.

#### Rewrite instructions

- Add a one-sentence setup tying the example to the Evidence Package Template.
- Keep the scenario concrete and fictional.

#### Do not

- Turn this into a general product acceptance guide.
- Duplicate the Product Acceptance practice page.

### Secure Update Approval

- **Tier:** Tier 2
- **Strategic priority:** P2
- **Entry readiness:** Light alignment
- **Primary audience:** Product security, release owners, deployment approvers, vulnerability response leads, and supplier assurance teams.
- **Primary intent:** See an example of an evidence-backed update approval decision.
- **Page promise:** A fictional update approval example shows how signing, release approval, vulnerability mapping, recovery testing, exclusions, and retained evidence support deployment.
- **Unique value:** Concrete decision package for update approval, not a generic update security explanation.
- **What good looks like:** A reader can distinguish a signed-update claim from an update approval package with scope, gaps, exclusions, and follow-up actions.
- **Current problem:** Strong example, but should be easier to find from update technology pages.
- **Required rewrite:** Light opening alignment and stronger cross-linking.
- **Preserve:** Tested-configuration condition, regional exclusion, evidence package table, verification questions.
- **Next-step links:** Secure Update and Recovery Mechanisms, Signing Keys and Credentials, Evidence Package Template, Secure Updates and Lifecycle Monitoring.
- **Success signal:** Visitor can model an update approval, exclusion, or follow-up decision.

#### Rewrite instructions

- Make the first paragraph clearer for update-approval search intent.
- Link this example near the top of update mechanism pages where appropriate.

#### Do not

- Turn this into a secure update implementation guide.
- Remove the explicit exclusion and follow-up decision.

### Secure Update and Recovery Mechanisms

- **Tier:** Tier 2
- **Strategic priority:** P2
- **Entry readiness:** Light alignment
- **Primary audience:** Technical implementers, product security, release teams, supplier assurance, and lifecycle monitoring owners.
- **Primary intent:** Understand update-chain trust and recovery evidence.
- **Page promise:** Update and recovery mechanisms can support assurance only when tied to release governance, eligibility, deployment, recovery, exception handling, and retained evidence.
- **Unique value:** Explains update mechanisms as evidence-producing options with limits.
- **What good looks like:** A reader understands what evidence update mechanisms can produce and which governance or verification gaps still remain.
- **Current problem:** Strong technology page, but could route more clearly to update approval examples and next actions.
- **Required rewrite:** Light use-when and routing alignment.
- **Preserve:** Option sections, driver citations, mechanism examples, "what they do not solve alone" section.
- **Next-step links:** Secure Update Approval, Signing Keys and Credentials, Evidence Repositories, Secure Updates and Lifecycle Monitoring.
- **Success signal:** Visitor can identify which update evidence and recovery records to request or retain.

#### Rewrite instructions

- Add explicit use cases near the top.
- Link Secure Update Approval near the top.
- Group related pages by design, approval, and retention.

#### Do not

- Turn the page into an update product comparison.
- Suggest signed updates alone prove update assurance.

### Trust Anchors and Device Identity

- **Tier:** Tier 2
- **Strategic priority:** P2
- **Entry readiness:** Light alignment
- **Primary audience:** Technical implementers, product security, supplier assurance, product acceptance reviewers, and verifier workflow owners.
- **Primary intent:** Understand identity evidence for product acceptance, provenance, lifecycle state, and verifier workflows.
- **Page promise:** Trust anchors and device identity mechanisms can bind evidence to products or components, but they do not prove acceptability by themselves.
- **Unique value:** Explains TPM, DICE, BIT, secure elements, TEEs, PKI, platform certificates, and Caliptra as assurance supports with limits.
- **What good looks like:** A reader can identify which identity evidence is needed, what it is bound to, who verifies it, and what it does not prove.
- **Current problem:** Useful technology reference, but the cold-entry promise could be clearer and verifier workflow links are thin.
- **Required rewrite:** Light opening and routing alignment.
- **Preserve:** Mechanism sections, implementation caveats, "what they do not solve alone" section.
- **Next-step links:** Product Acceptance, Product Acceptance Package, Evidence Exchange and Verifier Workflows, Attestation and Measured State.
- **Success signal:** Visitor can connect identity mechanisms to acceptance or verifier evidence needs.

#### Rewrite instructions

- Clarify that this is about identity evidence, not product trust by itself.
- Add links to verifier workflows and product acceptance examples.

#### Do not

- Make any one trust anchor sound mandatory.
- Let implementation detail obscure the assurance decision.

## 9. Cross-page boundaries and cannibalisation rules

| Topic | This site owns | Boundary rule |
|---|---|---|
| CRA | Supply-chain assurance and evidence implications of product cybersecurity regulation. | CRA page = regulatory mapping and source-backed supply-chain implications, not evidence packaging or a full legal guide. |
| Supplier assurance | Evidence-backed supplier requests, review, scoring, packaging, renewal, and exceptions. | Supplier practice page = operating model; Supplier Questions = request wording; Weak vs Strong = answer scoring. |
| Product acceptance | Acceptance as a product/component trust decision. | Product Acceptance practice = operating model; Product Acceptance Package = fictional evidence package example. |
| Evidence packages | Packaging and retaining assurance decisions. | Evidence Package Template = packaging and retention structure, not evidence scoring. |
| Evidence maturity | Scoring strength of evidence. | Evidence Maturity Model = scoring strength, not packaging. |
| SBOM/VEX | Transparency mechanisms for supplier assurance, component visibility, acceptance, vulnerability response, and customer evidence. | SBOM/VEX = transparency mechanisms, not acceptance decisions by itself. |
| Secure updates | Update-chain trust, signing evidence, recovery evidence, approval, deployment, and retention across supplier/product boundaries. | Secure Update and Recovery Mechanisms = technology options; Secure Update Approval = fictional decision package. |
| Device identity | Identity evidence for acceptance, provenance, lifecycle state, and verifier workflows. | Trust Anchors and Device Identity = mechanisms and evidence roles, not proof that a product is acceptable by itself. |
| Worked examples | Concrete fictional decision packages. | Do not turn worked examples into generic guides, policy pages, or compliance advice. |

## 10. Sitemap and indexing rules

- Keep real content pages in the sitemap.
- Exclude generated tag pages unless curated.
- Exclude archive, author, paginated, and starter-template pages unless they have a clear purpose.
- Do not rely on sitemap priority as editorial priority.
- Avoid turning low-value listing pages into search targets.

Candidate pages to de-emphasize, remove from sitemap, or noindex where supported:

- `/markdown-page`
- `/blog/archive`
- `/blog/authors`
- `/blog/page/2`
- `/blog/tags/*`
- `/docs/tags/*`

The current Supply Chain `docusaurus.config.ts` already excludes blog tag, archive, and author routes from the sitemap. Keep that discipline unless those pages become curated, useful entry pages.

## 11. Execution plan

### Phase 1: Protect and lightly align strong P1 pages

Status: complete for the first implementation pass.

- Supplier Security Questions
- Evidence Checklist
- Evidence Package Template
- Weak vs Strong Supplier Answers
- Homepage and Start Here

Goal: improve first-contact clarity without disturbing pages that already work.

### Phase 2: Medium rewrites for strategic P1 pages

Status: complete for the first implementation pass.

- Product Acceptance and Supply Chain Trust
- Supplier and Procurement Assurance
- 10 Best Practices

Goal: make strategically important practice pages work better for cold visitors while preserving their role as practice references.

### Phase 3: Align P2 technology and worked-example pages

Status: complete for the first implementation pass.

- SBOM, VEX, and Component Visibility
- Secure Update and Recovery Mechanisms
- Trust Anchors and Device Identity
- Product Acceptance Package
- Secure Update Approval
- Supplier Onboarding Evidence Package
- Vulnerability Response Evidence
- Component Provenance Example

Goal: improve use-when openings, grouped next steps, and links between examples and technology options.

### Phase 4: Standards and performance review

Status: standards routing review complete; analytics and performance review still pending.

- CRA routing review
- NIS2 routing review
- NIST SP 800-161 routing review
- IEC 62443 routing review
- NIST SSDF routing review
- Search Console review
- AI citation review
- Internal journey review

Goal: protect source discipline, identify actual entry paths, and avoid creating new pages before the existing entry pages are measured.

## 12. Review checklist

| Review field | Value |
|---|---|
| Page reviewed |  |
| Reviewer |  |
| Review date |  |
| Decision | Pass / Needs changes / Not ready |
| Follow-up owner |  |

| Test | Pass / Partial / Fail / N/A | Notes |
|---|---|---|
| H1 matches reader problem |  |  |
| First 150-250 words answer the intent |  |  |
| Page says who it is for |  |  |
| Page gives a practical tool, model, checklist, template, or example |  |  |
| Page explains the evidence, decision, or action output |  |  |
| Page identifies evidence to retain |  |  |
| Page identifies common gaps or mistakes |  |  |
| Related pages route to next actions |  |  |
| Claims are sourced and caveated |  |  |
| Page avoids duplication or cannibalisation |  |  |
| Page preserves value for visitors already navigating the handbook |  |  |

## 13. Source references

- [Supply Chain Security Handbook](https://supplychainsecurityhandbook.com/)
- [Google: Optimizing your website for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Measuring Google AI Overviews: Activation, Source Quality, Claim Fidelity, and Publisher Impact](https://arxiv.org/abs/2605.14021)
