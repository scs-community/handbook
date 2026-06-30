---
title: Evidence Checklist
sidebar_position: 4
---

Use this checklist to turn a supply-chain-security question into evidence requests and acceptance criteria.

Use this page for review criteria: what evidence would make a decision defensible. Use [Supplier Questions](./supplier-questions.md) for request wording, and use the relevant decision guide for decision context.

| Evidence area | Questions to ask | Acceptance signal |
|---|---|---|
| Identity | What identity is being claimed, who issued it, and how is it bound to the device, component, platform, supplier, or service? | Identity can be verified against an expected issuer, product, component, or trust anchor |
| Provenance | What origin, custody, sourcing, manufacturing, logistics, repair, or transfer records exist? | Chain gaps and custody changes are visible and explained |
| Integrity | What measurements, manifests, signatures, or attestation results show expected state? | Current state can be compared to a trusted baseline or policy |
| Transparency | What SBOM, xBOM, firmware, hardware, or component artifacts are available? | Artifacts are tied to product versions and updated after changes |
| Updates | What records show updates were authorized, delivered, installed, and recoverable? | Update state and rollback status can be confirmed |
| Vulnerability handling | What evidence shows known exposures are tracked, remediated, accepted, or mitigated? | Vulnerability status is tied to products, versions, and remediation decisions |
| Lifecycle state | What records show whether an asset is active, repaired, transferred, revoked, retired, or decommissioned? | Lifecycle status can be verified and is retained for later decisions |
| Verification | Can the recipient verify origin, integrity, freshness, consistency, and lifecycle relevance? | Evidence has a clear verifier, trust anchor, policy, or audit path |
| Retention | How long will the evidence remain available and useful? | Retention, access, refresh, supersession, and revocation are defined |

## Checklist Use

1. Start with the decision.
2. Identify the lifecycle stage.
3. Name the failure mode.
4. Select the relevant evidence area.
5. Request artifacts and verification paths.
6. Record weak, better, and stronger answers.
7. Decide whether evidence must be retained or refreshed.

## Related Pages

- [Evidence](../evidence/index.md)
- [Supplier Questions](./supplier-questions.md)
- [Procurement & Supplier Assurance](../practices-controls/procurement-supplier-assurance.md)
- [Product Acceptance](../practices-controls/product-acceptance.md)
- [Attack & Failure Modes](../standards-threats/attack-failure-modes.md)
