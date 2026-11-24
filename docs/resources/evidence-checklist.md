---
title: Supply Chain Security Evidence Checklist
sidebar_position: 3
sidebar_label: Evidence Checklist
description: "Use an evidence checklist to test whether supply chain security evidence is scoped, current, verifiable, retained, and tied to a decision."
---

Use this checklist to decide whether supply chain security evidence is strong enough to support a supplier, product, update, vulnerability, audit, or lifecycle decision.

The checklist helps turn supplier answers, product records, SBOMs, attestations, vulnerability statements, update records, and audit materials into review criteria. Evidence should be scoped, source-attributed, version-bound, lifecycle-aware, verifiable, retained, and tied to a decision.

Use [Supplier Security Questions](./supplier-security-questions.md) for request wording. Use the [Evidence Package Template](./evidence-package-template.md) to package the decision, evidence, verification notes, gaps, exceptions, and retention owner.

## Start With the Decision

Before reviewing evidence, name the decision it must support.

Examples:

- approve, reject, or conditionally approve a supplier;
- accept, quarantine, reject, or conditionally accept a product;
- approve, delay, exclude, or remediate an update;
- continue operation, mitigate, update, or accept residual vulnerability risk;
- prepare an audit, customer assurance, or lifecycle review package.

Evidence is weaker when it is collected without a visible decision, scope, owner, or verification path.

| Evidence area | Review questions | Acceptance signal |
|---|---|---|
| Identity | What identity is being claimed, who issued it, and how is it bound to the device, component, platform, supplier, or service? | Identity can be verified against an expected issuer, product, component, or trust anchor |
| **Provenance**<br/>[SP 800-161 SR-4](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-161r1-upd1.pdf#page=173) | What origin, custody, sourcing, manufacturing, logistics, repair, or transfer records exist? | Chain gaps and custody changes are visible and explained |
| Integrity | What measurements, manifests, signatures, or attestation results show expected state? | Current state can be compared to a trusted baseline or policy |
| **Transparency**<br/>[CRA Annex I Part II (1)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120)<br/>[SSDF PW.4](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf#page=21) | What SBOM, xBOM, firmware, hardware, or component artifacts are available? | Artifacts are tied to product versions and updated after changes |
| **Updates**<br/>[CRA Annex I Part II (7)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120) | What records show updates were authorized, delivered, installed, and recoverable? | Update state and rollback status can be confirmed |
| **Vulnerability handling**<br/>[CRA Art. 13 §§ 6-10](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13)<br/>[CRA Art. 14](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_14) | What evidence shows known exposures are tracked, remediated, accepted, or mitigated? | Vulnerability status is tied to products, versions, and remediation decisions |
| **Lifecycle state**<br/>[CRA Art. 13 §§ 8-10](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13) | What records show whether an asset is active, repaired, transferred, revoked, retired, or decommissioned? | Lifecycle status can be verified and is retained for later decisions |
| **Verification**<br/>[SP 800-161 SR-6](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-161r1-upd1.pdf#page=173) | Can the recipient verify origin, integrity, freshness, consistency, and lifecycle relevance? | Evidence has a clear verifier, trust anchor, policy, or audit path |
| **Retention**<br/>[CRA Art. 13 § 13](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13) | How long will the evidence remain available and useful? | Retention, access, refresh, supersession, and revocation are defined |

## Minimum Useful Evidence

For most assurance decisions, useful evidence should show:

- what decision it supports;
- what supplier, product, component, release, service, or lifecycle stage it covers;
- who produced it;
- when it was generated or last reviewed;
- how origin, integrity, freshness, scope, or consistency can be checked;
- what gaps, exceptions, or risk acceptances remain;
- where the evidence will be retained and when it must be refreshed.

## Checklist Use

1. Name the decision.
2. Identify the lifecycle stage.
3. Name the failure mode or assurance concern.
4. Select the relevant evidence areas.
5. Request artifacts, owners, scope, dates, and verification paths.
6. Record whether the answer is weak, better, stronger, or still incomplete.
7. Decide whether evidence is sufficient, conditional, rejected, or needs remediation.
8. Record retention, refresh, supersession, and exception handling.

## Related Pages

- [Supplier Security Questions](./supplier-security-questions.md)
- [Evidence Maturity Model](./evidence-maturity-model.md)
- [Glossary](./glossary.md)
- [Evidence Package Template](./evidence-package-template.md)
- [Weak vs Strong Supplier Answers](./worked-examples/weak-vs-strong-supplier-answers.md)
- [Supplier Onboarding Evidence Package](./worked-examples/supplier-onboarding-evidence-package.md)
- [Product Acceptance Package](./worked-examples/product-acceptance-package.md)
- [Vulnerability Response Evidence](./worked-examples/vulnerability-response-evidence.md)
- [Supplier and Procurement Assurance](../practices-controls/supplier-assurance-procurement.md)
- [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md)
- [Threats and Failure Modes](../standards-threats/threats/index.md)
