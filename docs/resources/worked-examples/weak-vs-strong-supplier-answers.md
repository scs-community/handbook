---
title: Weak vs Strong Supplier Security Answers
sidebar_position: 7
sidebar_label: Weak vs Strong Supplier Answers
description: "Compare weak and stronger supplier assurance answers to see how scope, evidence, verification, ownership, and retention improve confidence."
---

Use this page to score supplier security questionnaire answers from unsupported assertions to decision-ready evidence. It helps when writing supplier requests, reviewing responses, explaining why an answer is not enough, or deciding whether supplier evidence is ready to package and retain.

It sits between [Supplier Security Questions](../supplier-security-questions.md), the [Evidence Checklist](../evidence-checklist.md), the [Evidence Maturity Model](../evidence-maturity-model.md), and the [Supplier Onboarding Evidence Package](./supplier-onboarding-evidence-package.md).

## How to score supplier claims

Use this pattern when comparing supplier answers:

| Rating | What it usually means | What to do next |
|---|---|---|
| Weak | The answer is mostly an assertion. | Ask for scope, artifacts, owners, verification, gaps, and retention. |
| Better | The answer names a process or artifact. | Check whether it is bound to the supplier, product, component, release, or lifecycle decision under review. |
| Stronger | The answer is scoped, reviewable, decision-ready, gap-aware, and retained. | Use the [Evidence Checklist](../evidence-checklist.md) to review it and the [Evidence Package Template](../evidence-package-template.md) to package the decision. |

Use the [Evidence Maturity Model](../evidence-maturity-model.md) to score whether an answer is an assertion, documented process, produced artifact, verifiable artifact, or lifecycle-retained evidence.

## Quick example

Weak answer:

> We have a mature security program.

Better answer:

> We have documented supplier-security and secure development processes.

Stronger answer:

> We provide product-scoped control evidence, named owners, review cadence, sub-tier declarations, known gaps, and remediation records for the assessed supplier relationship.

## What stronger answers include

Stronger supplier answers usually show:

- the decision they support;
- the supplier, product, component, firmware, service, release, or lifecycle scope;
- the artifact or record being provided;
- who produced it and who owns it;
- how it can be verified;
- known gaps, exclusions, exceptions, or residual risks;
- where it will be retained and when it must be refreshed.

## Side-by-side examples

| Topic | Weak answer | Better answer | Stronger answer |
|---|---|---|---|
| Supplier security | We have a mature security program. | We have documented supplier-security and secure development processes. | We provide product-scoped control evidence, named owners, review cadence, sub-tier declarations, known gaps, and remediation records for the assessed supplier relationship. |
| Product identity | This is a genuine product. | The product has a serial number and certificate of conformity. | Device identity is bound to the expected issuer, product family, serial number, lifecycle state, and acceptance record, with a verification path and retained credential issuance evidence. |
| Provenance | We source from approved suppliers. | We can provide supplier names and part numbers. | We provide approved source records, custody records, manufacturing records, reseller path, repair/transfer records where applicable, and exceptions for chain gaps. |
| Component transparency | We can provide an SBOM. | We provide an SBOM for the product. | The SBOM/xBOM is tied to product version, firmware version, generation process, known exclusions, vulnerability workflow, and repository location for later review. |
| Attestation | The product supports attestation. | The product can report measured boot values. | Measurements are bound to product identity, reference values, verifier policy, freshness expectations, exception handling, and retained appraisal results. |
| Update governance | We have a secure update process. | Updates are signed before release. | Release artifacts are signed using controlled keys; build provenance is retained; release approval is logged; rollback conditions are documented; recovery behavior is tested; affected versions are mapped to vulnerability records. |
| Vulnerability response | We fixed the vulnerability. | Firmware 5.4.3 contains the fix. | Affected-product analysis, SBOM linkage, fixed component version, signed update package, verification result, customer notification, deployment status, and risk acceptance for delayed updates are retained. |
| Lifecycle monitoring | We keep records after deployment. | We retain update and audit logs. | Lifecycle records are tied to product identity, version state, update events, repair/transfer/decommissioning decisions, evidence refresh triggers, access controls, and retention owner. |
| Audit readiness | We can provide evidence during audit. | We maintain an evidence register. | Control evidence packages link controls, artifacts, source references, verification metadata, exceptions, remediation plans, review dates, and retention locations. |

## Common assessment pattern

| Question | What to look for |
|---|---|
| What decision does the answer support? | Supplier approval, product acceptance, update approval, vulnerability response, audit, repair, transfer, or decommissioning |
| What is the scope? | Supplier, product, component, firmware, service, release, lifecycle event, customer, or deployment cohort |
| What artifact exists? | Record, manifest, certificate, SBOM/xBOM, measurement, attestation, update log, vulnerability record, audit material |
| Who owns it? | Supplier owner, buyer owner, product team, release owner, verifier, repository owner, or control owner |
| How can it be checked? | Issuer, signature, trust anchor, reference value, timestamp, product/version binding, verifier policy, or reviewer decision |
| What remains unresolved? | Missing artifact, stale status, incomplete scope, unverified supplier claim, unsupported technology claim, or accepted risk |
| How is it retained? | Repository, contract file, acceptance record, release record, audit package, vulnerability case, or lifecycle record |

Use this pattern before moving a supplier response into a full [Supplier Onboarding Evidence Package](./supplier-onboarding-evidence-package.md). If the answer is still weak or incomplete, keep the gap visible rather than treating the response as assurance.

## Related pages

Improve requests:

- [Supplier Security Questions](../supplier-security-questions.md)

Review evidence:

- [Evidence Checklist](../evidence-checklist.md)
- [Evidence Maturity Model](../evidence-maturity-model.md)

Package the decision:

- [Evidence Package Template](../evidence-package-template.md)
- [Supplier Onboarding Evidence Package](./supplier-onboarding-evidence-package.md)

Practice context:

- [Supplier and Procurement Assurance](../../practices-controls/supplier-assurance-procurement.md)
- [Product Acceptance](../../practices-controls/product-acceptance-supply-chain-trust.md)
- [Audit and Compliance Readiness](../../practices-controls/audit-compliance-readiness.md)
