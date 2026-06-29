---
title: Supply-chain-security requirements
sidebar_position: 1
---

Visitors often arrive because a requirement, customer request, audit, certification activity, procurement expectation, product-acceptance decision, or risk review has made supply-chain security urgent. This page translates those drivers into practical questions, relevant guidance, evidence expectations, and next steps.

This is not legal or certification advice. It is a routing page that helps readers understand what the driver means for supply-chain-security practices and assurance decisions.

## Driver Routes

| Driver | Visitor question | Route next |
|---|---|---|
| Regulation or compliance | What does this requirement mean for supply-chain security? | [Risks & Controls](../guidance/risks-controls.md) -> [10 Best Practices](../guidance/10-best-practices.md) -> [Evidence & Assurance](../evidence-assurance/index.md) |
| Customer assurance | A customer is asking for assurance. What should we provide? | [Use Cases](../use-cases/index.md) -> [Evidence & Assurance](../evidence-assurance/index.md) -> [Standards & Technologies](../standards-technologies/index.md) |
| Procurement or acquisition | What should we ask suppliers for? | [Procurement & Supplier Assurance](../use-cases/procurement-supplier-assurance.md) -> [Evidence Checklist](../resources/evidence-checklist.md) |
| Audit, assessment, or certification | What artifacts show that controls are operating? | [Evidence & Assurance](../evidence-assurance/index.md) -> [Lifecycle Map](../guidance/lifecycle-map.md) -> [Further Reading](../resources/further-reading.md) |
| Product acceptance | How do we know this device, platform, or component is authentic and trustworthy? | [Product Acceptance](../use-cases/product-acceptance.md) -> [Identity & Provenance](../evidence-assurance/identity-provenance.md) -> [Integrity & Attestation](../evidence-assurance/integrity-attestation.md) |
| Risk and resilience | Where are we exposed to substitution, tampering, opaque suppliers, or lifecycle drift? | [Risks & Controls](../guidance/risks-controls.md) -> [Lifecycle Map](../guidance/lifecycle-map.md) -> [10 Best Practices](../guidance/10-best-practices.md) |

## Practical Questions

### Questions to ask internally

- What decision are we trying to make: selection, acceptance, operation, renewal, audit, remediation, transfer, or retirement?
- Which lifecycle stage creates the risk or assurance need?
- Which claims are we currently accepting as supplier assertions only?
- Which artifacts would make the claim easier to verify?
- Who needs to rely on the evidence: buyer, operator, auditor, assessor, product team, or downstream service?
- How long must evidence remain useful after acceptance?

### Questions to ask suppliers

- What identity, provenance, transparency, integrity, update, vulnerability, and lifecycle-state evidence can you provide?
- Which artifacts are signed, measured, hardware-rooted, machine-readable, independently verifiable, or audit-derived?
- What trust anchors, issuers, or verification workflows support the evidence?
- What evidence is retained after delivery, repair, transfer, update, or decommissioning?
- What is a weak answer, a better process answer, and a stronger evidence-backed answer?

### Questions to ask assessors / auditors

- What requirement, control, or assurance expectation is being translated into evidence?
- Can each requested artifact be tied to a decision, lifecycle stage, product scope, and verification path?
- Are interpretive mappings, evidence gaps, exceptions, and remediation commitments documented?

### Questions to ask implementers

- What systems or processes produce the evidence needed for this requirement?
- What metadata is needed to preserve source, scope, freshness, issuer, product binding, and retention context?
- How will implementation choices support procurement, product acceptance, audit, and lifecycle monitoring?

## Requirement Translation Pattern

Use this pattern when translating a requirement or obligation:

| Step | Translation question |
|---|---|
| Driver | What external pressure or risk created the need? |
| Decision | What decision must the reader make? |
| Failure mode | What could go wrong if the claim is wrong or unverifiable? |
| Practice | What practical control or behavior should operate? |
| Evidence | What artifact, record, claim, measurement, certificate, attestation, manifest, log, or report would support the practice? |
| Verification | How can the recipient test origin, integrity, freshness, consistency, or lifecycle relevance? |
| Mapping | Which standards or technologies may help produce, protect, exchange, verify, or retain the evidence? |

## Next Actions

- If you are new to the problem, read [Risks & Controls](../guidance/risks-controls.md).
- If you need a concise synthesis, read [10 Best Practices for Supply-Chain Security](../guidance/10-best-practices.md).
- If you need supplier-facing wording, use [Supplier Questions](../resources/supplier-questions.md).
- If you need artifacts, use the [Evidence Checklist](../resources/evidence-checklist.md).
