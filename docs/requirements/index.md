---
title: Requirements & Risks
sidebar_position: 1
---

Most visitors arrive because they have a formal requirement to satisfy or a risk they need to reduce. The requirement may come from regulation, standards, procurement, customer assurance, audit, certification, product acceptance, or internal governance. The risk may be counterfeit components, tampered firmware, compromised dependencies, weak supplier evidence, lost provenance, update drift, or lifecycle blind spots.

This page translates requirements and risks into practical controls, supplier questions, evidence expectations, and standards-aware implementation options. It is not legal, procurement, audit, or certification advice. It is a routing guide for turning expectations into assurance work.

## Common Starting Points

| Starting point | Reader question | Route next |
|---|---|---|
| Regulation or compliance | What does this expectation mean for supply-chain security? | [Practices & Controls](../practices-controls/index.md) -> [10 Best Practices](../practices-controls/10-best-practices.md) -> [Evidence](../evidence/index.md) |
| Customer requirement | What should we provide, and what should we avoid over-claiming? | [Practices & Controls](../practices-controls/index.md) -> [Decision Guides](../practices-controls/decision-guides.md) -> [Evidence](../evidence/index.md) -> [Technology Options](../technology-options/index.md) |
| Procurement or acquisition | What should we ask suppliers for before purchase or award? | [Procurement & Supplier Assurance](../practices-controls/procurement-supplier-assurance.md) -> [Supplier Questions](../resources/supplier-questions.md) -> [Evidence Checklist](../resources/evidence-checklist.md) -> [Product Acceptance](../practices-controls/product-acceptance.md) |
| Audit or certification | What artifacts show that controls are operating? | [Audit & Compliance](../practices-controls/audit-compliance.md) -> [Evidence](../evidence/index.md) -> [Lifecycle Map](../practices-controls/lifecycle-map.md) -> [Evidence Checklist](../resources/evidence-checklist.md) |
| Product acceptance | How do we know this device, platform, component, or service is trustworthy enough to accept? | [Product Acceptance](../practices-controls/product-acceptance.md) -> [Attack & Failure Modes](./attack-failure-modes.md) -> [Identity & Provenance](../evidence/identity-provenance.md) -> [Integrity & Attestation](../evidence/integrity-attestation.md) |
| Risk and resilience | Where are we exposed to substitution, tampering, opaque suppliers, credential compromise, or lifecycle drift? | [Attack & Failure Modes](./attack-failure-modes.md) -> [Lifecycle Map](../practices-controls/lifecycle-map.md) -> [Evidence](../evidence/index.md) -> [Evidence Checklist](../resources/evidence-checklist.md) |

## Standards By Function

Standards can appear at different points in the model. Treating them as one flat layer hides the reason they matter.

| Function | How to use it |
|---|---|
| Requirement and governance sources | Explain why an expectation exists, which control themes matter, and what audit or procurement language may need interpretation. |
| Assurance and evidence models | Explain what artifacts, claims, measurements, attestations, manifests, records, or certificates may be useful. |
| Technology and implementation mechanisms | Explain how evidence can be produced, protected, exchanged, verified, or retained. |

This classification keeps the site neutral. A standard may drive a requirement, define an evidence model, or provide a technology mechanism; it should not become the organizing principle unless the reader's decision actually depends on it.

Use [Requirement & Governance Sources](./governance-compliance.md) when the question is why an expectation exists or how governance, procurement, risk management, audit, or customer assurance sources shape control expectations.

## Attack & Failure Orientation

Requirements are easier to implement when they are connected to concrete failure modes. Start with [Attack & Failure Modes](./attack-failure-modes.md) when you need to understand whether the relevant concern is substitution, firmware tampering, compromised dependencies, supplier self-attestation, lost provenance, unauthorized update drift, insecure repair or transfer, poor end-of-life, key compromise, or lack of continuous monitoring.

## Translation Pattern

Use this pattern when turning a requirement or risk into practical work.

| Step | Question |
|---|---|
| Requirement or risk | What regulation, standard, customer request, procurement expectation, audit need, product-acceptance decision, governance concern, or risk brings the reader here? |
| Risk or failure mode | What could go wrong if the claim is wrong, incomplete, stale, or unverifiable? |
| Practice or control | What control, responsibility, supplier question, or lifecycle behavior should operate? |
| Evidence | What artifact, record, claim, measurement, attestation, certificate, manifest, SBOM/xBOM, update record, vulnerability record, lifecycle-state record, log, or audit material would support the control? |
| Verification | How can the recipient test origin, integrity, freshness, scope, consistency, or lifecycle relevance? |
| Technology options | Which mechanisms, protocols, formats, trust anchors, verifier workflows, tooling, or implementation options may help? |
| Resources | Which reusable questions, checklists, mappings, templates, or reference material help the reader act? |

## Practical Questions

### Questions to ask internally

- What requirement, risk, or decision brought us here?
- What lifecycle stage creates the risk or assurance need?
- Which claims are we currently accepting as supplier assertions only?
- Which artifacts would make the claim easier to verify?
- Who needs to rely on the evidence: buyer, operator, auditor, assessor, product team, or downstream service?
- How long must evidence remain useful after acceptance?

### Questions to ask suppliers

- What identity, provenance, transparency, integrity, update, vulnerability, and lifecycle-state evidence can you provide?
- Which artifacts are signed, measured, hardware-rooted, machine-readable, independently verifiable, or audit-derived?
- What trust anchors, issuers, or verification workflows support the evidence?
- What evidence is retained after delivery, repair, transfer, update, or decommissioning?

### Questions to ask assessors / auditors

- What requirement, control, or assurance expectation is being translated into evidence?
- Can each requested artifact be tied to a decision, lifecycle stage, product scope, and verification path?
- Are interpretive mappings, evidence gaps, exceptions, and remediation commitments documented?

### Questions to ask implementers

- What systems or processes produce the evidence needed for this requirement or risk decision?
- What metadata is needed to preserve source, scope, freshness, issuer, product binding, and retention context?
- How will implementation choices support procurement, product acceptance, audit, and lifecycle monitoring?

## Next Actions

- If you need the conceptual starting point, read [Attack & Failure Modes](./attack-failure-modes.md).
- If you need control themes, read [Practices & Controls](../practices-controls/index.md).
- If you need supplier-facing wording, use [Supplier Questions](../resources/supplier-questions.md).
- If you need artifacts, use the [Evidence Checklist](../resources/evidence-checklist.md).
- If you need implementation context, review [Technology Options](../technology-options/index.md).
