---
title: Supply-chain-security compliance guide
sidebar_position: 1
---

Most visitors arrive because they need to satisfy a supply-chain-security obligation. That obligation may come from regulation, standards, procurement, customer assurance, audit, certification, product acceptance, or internal governance.

This page helps translate that obligation into practical risks, controls, supplier questions, evidence expectations, and standards-aware implementation options. It is not legal, procurement, audit, or certification advice. It is a routing guide for turning obligations into practical assurance work.

## Common Obligations

| Obligation route | Reader question | Route next |
|---|---|---|
| Regulation, standard, or compliance expectation | What does this mean for supply-chain security? | [Risks & Practices](../guidance/risks-practices.md) -> [10 Best Practices](../guidance/10-best-practices.md) -> [Evidence](../evidence-assurance/index.md) |
| Customer assurance request | What should we provide? | [Use Cases](../use-cases/index.md) -> [Evidence](../evidence-assurance/index.md) -> [Standards & Technologies](../standards-technologies/index.md) |
| Procurement or acquisition requirement | What should we ask suppliers for? | [Procurement & Supplier Assurance](../use-cases/procurement-supplier-assurance.md) -> [Supplier Questions](../resources/supplier-questions.md) -> [Evidence Checklist](../resources/evidence-checklist.md) |
| Audit, assessment, or certification activity | What artifacts show that controls are operating? | [Audit & Compliance](../use-cases/audit-compliance.md) -> [Evidence](../evidence-assurance/index.md) -> [Lifecycle Map](../guidance/lifecycle-map.md) |
| Product acceptance decision | How do we know this device, platform, component, or service is trustworthy? | [Product Acceptance](../use-cases/product-acceptance.md) -> [Identity & Provenance](../evidence-assurance/identity-provenance.md) -> [Integrity & Attestation](../evidence-assurance/integrity-attestation.md) |
| Internal governance or risk review | Where are we exposed to substitution, tampering, opaque suppliers, or lifecycle drift? | [Risks & Practices](../guidance/risks-practices.md) -> [Lifecycle Map](../guidance/lifecycle-map.md) -> [10 Best Practices](../guidance/10-best-practices.md) |

## Translation Pattern

Use this pattern when turning an obligation into practical work.

| Step | Question |
|---|---|
| Obligation | What regulation, standard, customer request, procurement expectation, audit need, product-acceptance decision, or governance concern brings the reader here? |
| Risk or failure mode | What could go wrong if the claim is wrong, incomplete, stale, or unverifiable? |
| Practice | What control, responsibility, supplier question, or lifecycle behavior should operate? |
| Evidence | What artifact, record, claim, measurement, certificate, attestation, manifest, log, or report would support the practice? |
| Verification | How can the recipient test origin, integrity, freshness, scope, consistency, or lifecycle relevance? |
| Mapping | Which standards, frameworks, technologies, or verification mechanisms may help without becoming the organizing principle? |
| Tools and templates | Which reusable questions, checklists, mappings, or templates help the reader act? |

## Practical Questions

### Questions to ask internally

- What obligation or decision brought us here?
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

- What obligation, control, or assurance expectation is being translated into evidence?
- Can each requested artifact be tied to a decision, lifecycle stage, product scope, and verification path?
- Are interpretive mappings, evidence gaps, exceptions, and remediation commitments documented?

### Questions to ask implementers

- What systems or processes produce the evidence needed for this obligation?
- What metadata is needed to preserve source, scope, freshness, issuer, product binding, and retention context?
- How will implementation choices support procurement, product acceptance, audit, and lifecycle monitoring?

## Next Actions

- If you need the conceptual starting point, read [Risks & Practices](../guidance/risks-practices.md).
- If you need supplier-facing wording, use [Supplier Questions](../resources/supplier-questions.md).
- If you need artifacts, use the [Evidence Checklist](../resources/evidence-checklist.md).
- If you need implementation context, review [Standards & Technologies](../standards-technologies/index.md).
