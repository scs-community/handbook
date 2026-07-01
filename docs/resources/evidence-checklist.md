---
title: Supply Chain Security Evidence Checklist
sidebar_position: 3
sidebar_label: Evidence Checklist
description: "Use an evidence checklist to test whether supply chain security evidence is scoped, current, verifiable, retained, and tied to a decision."
---

Use this checklist to turn a supply chain security question into evidence requests and acceptance criteria.

Use this page for review criteria: what evidence would make a decision defensible. Evidence should be scoped, source-attributed, version-bound, lifecycle-aware, verifiable, retained, and tied to a decision. Use [Supplier Security Questions](./supplier-security-questions.md) for request wording, and use the relevant practice page for decision context.

| Evidence area | Questions to ask | Acceptance signal |
|---|---|---|
| Identity | What identity is being claimed, who issued it, and how is it bound to the device, component, platform, supplier, or service? | Identity can be verified against an expected issuer, product, component, or trust anchor |
| Provenance | What origin, custody, sourcing, manufacturing, logistics, repair, or transfer records exist? | Chain gaps and custody changes are visible and explained |
| Integrity | What measurements, manifests, signatures, or attestation results show expected state? | Current state can be compared to a trusted baseline or policy |
| Transparency | What SBOM, xBOM, firmware, hardware, or component artefacts are available? | Artefacts are tied to product versions and updated after changes |
| Updates | What records show updates were authorised, delivered, installed, and recoverable? | Update state and rollback status can be confirmed |
| Vulnerability handling | What evidence shows known exposures are tracked, remediated, accepted, or mitigated? | Vulnerability status is tied to products, versions, and remediation decisions |
| Lifecycle state | What records show whether an asset is active, repaired, transferred, revoked, retired, or decommissioned? | Lifecycle status can be verified and is retained for later decisions |
| Verification | Can the recipient verify origin, integrity, freshness, consistency, and lifecycle relevance? | Evidence has a clear verifier, trust anchor, policy, or audit path |
| Retention | How long will the evidence remain available and useful? | Retention, access, refresh, supersession, and revocation are defined |

## Checklist Use

1. Start with the decision.
2. Identify the lifecycle stage.
3. Name the failure mode.
4. Select the relevant evidence area.
5. Request artefacts and verification paths.
6. Record weak, better, and stronger answers.
7. Decide whether evidence must be retained or refreshed.

## Related Pages

- [Supplier Security Questions](./supplier-security-questions.md)
- [Evidence Maturity Model](./evidence-maturity-model.md)
- [Glossary](./glossary.md)
- [Evidence Package Template](./evidence-package-template.md)
- [Supplier and Procurement Assurance](../practices-controls/supplier-assurance-procurement.md)
- [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md)
- [Threats and Failure Modes](../standards-threats/threats/index.md)
