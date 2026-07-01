---
title: Weak vs Strong Supplier Security Answers
sidebar_position: 7
sidebar_label: Weak vs Strong Supplier Answers
description: "Compare weak and stronger supplier assurance answers to see how scope, evidence, verification, ownership, and retention improve confidence."
---

This page gives short examples of vague supplier claims and more reviewable answers. Use it when writing supplier requests, scoring responses, or explaining why a claim is not enough.

## How to read the examples

Weak answers are usually assertions. Better answers describe a process or name an artefact. Stronger answers are scoped, reviewable, and tied to a decision, lifecycle stage, verification path, gap, and retention expectation.

Use the [Evidence Maturity Model](../evidence-maturity-model.md) to score whether an answer is an assertion, documented process, produced artefact, verifiable artefact, or lifecycle-retained evidence.

## Side-by-side examples

| Topic | Weak answer | Better answer | Stronger answer |
|---|---|---|---|
| Supplier security | We have a mature security programme. | We have documented supplier-security and secure development processes. | We provide product-scoped control evidence, named owners, review cadence, sub-tier declarations, known gaps, and remediation records for the assessed supplier relationship. |
| Product identity | This is a genuine product. | The product has a serial number and certificate of conformity. | Device identity is bound to the expected issuer, product family, serial number, lifecycle state, and acceptance record, with a verification path and retained credential issuance evidence. |
| Provenance | We source from approved suppliers. | We can provide supplier names and part numbers. | We provide approved source records, custody records, manufacturing records, reseller path, repair/transfer records where applicable, and exceptions for chain gaps. |
| Component transparency | We can provide an SBOM. | We provide an SBOM for the product. | The SBOM/xBOM is tied to product version, firmware version, generation process, known exclusions, vulnerability workflow, and repository location for later review. |
| Attestation | The product supports attestation. | The product can report measured boot values. | Measurements are bound to product identity, reference values, verifier policy, freshness expectations, exception handling, and retained appraisal results. |
| Update governance | We have a secure update process. | Updates are signed before release. | Release artefacts are signed using controlled keys; build provenance is retained; release approval is logged; rollback conditions are documented; recovery behaviour is tested; affected versions are mapped to vulnerability records. |
| Vulnerability response | We fixed the vulnerability. | Firmware 5.4.3 contains the fix. | Affected-product analysis, SBOM linkage, fixed component version, signed update package, verification result, customer notification, deployment status, and risk acceptance for delayed updates are retained. |
| Lifecycle monitoring | We keep records after deployment. | We retain update and audit logs. | Lifecycle records are tied to product identity, version state, update events, repair/transfer/decommissioning decisions, evidence refresh triggers, access controls, and retention owner. |
| Audit readiness | We can provide evidence during audit. | We maintain an evidence register. | Control evidence packages link controls, artefacts, source references, verification metadata, exceptions, remediation plans, review dates, and retention locations. |

## Common assessment pattern

| Question | What to look for |
|---|---|
| What decision does the answer support? | Supplier approval, product acceptance, update approval, vulnerability response, audit, repair, transfer, or decommissioning |
| What is the scope? | Supplier, product, component, firmware, service, release, lifecycle event, customer, or deployment cohort |
| What artefact exists? | Record, manifest, certificate, SBOM/xBOM, measurement, attestation, update log, vulnerability record, audit material |
| Who owns it? | Supplier owner, buyer owner, product team, release owner, verifier, repository owner, or control owner |
| How can it be checked? | Issuer, signature, trust anchor, reference value, timestamp, product/version binding, verifier policy, or reviewer decision |
| What remains unresolved? | Missing artefact, stale status, incomplete scope, unverified supplier claim, unsupported technology claim, or accepted risk |
| How is it retained? | Repository, contract file, acceptance record, release record, audit package, vulnerability case, or lifecycle record |

## Related pages

- [Supplier Questions](../supplier-security-questions.md)
- [Evidence Checklist](../evidence-checklist.md)
- [Evidence Maturity Model](../evidence-maturity-model.md)
- [Evidence Package Template](../evidence-package-template.md)
- [Supplier & Procurement Assurance](../../practices-controls/supplier-assurance-procurement.md)
- [Product Acceptance](../../practices-controls/product-acceptance-supply-chain-trust.md)
- [Audit & Compliance Readiness](../../practices-controls/audit-compliance-readiness.md)
