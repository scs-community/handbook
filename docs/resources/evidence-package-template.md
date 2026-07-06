---
title: Supply Chain Security Evidence Package Template
sidebar_position: 5
sidebar_label: Evidence Package Template
description: "Use an evidence package template to capture decisions, scope, controls, artifacts, verification, gaps, exceptions, owners, and retention records."
---

Use this template to assemble evidence for supplier assurance, product acceptance, customer assurance, audit readiness, update approval, vulnerability response, or lifecycle monitoring.

An evidence package should make the decision, scope, artifacts, verification path, gaps, exceptions, owners, and retention expectations visible. It should show why the evidence is sufficient, conditional, incomplete, or not yet usable for the decision.

Use [Supplier Security Questions](./supplier-security-questions.md) to ask for evidence. Use the [Evidence Checklist](./evidence-checklist.md) to judge whether it is sufficient. Use this template to assemble and retain the evidence package.

:::warning

An evidence package does not make weak evidence strong. It makes the evidence, assumptions, gaps, exceptions, and decision visible. Unsupported claims should remain visible as gaps, not be repackaged as assurance.

:::

## When to Use This Template

Use this template when evidence needs to support a decision that may be reviewed later.

Common decisions include:

- supplier approval, renewal, continued use, remediation, or rejection;
- product acceptance, quarantine, rejection, or acceptance with conditions;
- update approval, staged rollout, exclusion, rollback, or recovery;
- vulnerability remediation, mitigation, communication, or risk acceptance;
- audit, customer assurance, standards mapping, or lifecycle review.

## Template

| Field | What to record |
|---|---|
| Decision supported | The decision this package supports, such as supplier selection, product acceptance, update approval, vulnerability response, audit review, repair return-to-service, transfer, or decommissioning. |
| Decision outcome | The result of the review, such as accepted, accepted with conditions, rejected, remediation required, risk accepted, or pending. |
| Decision owner | The person, role, or team accountable for the decision and any follow-up. |
| Practice/control supported | The practice and control that produced or requires the evidence. |
| Product, service, supplier, component, release, or lifecycle scope | The exact scope covered by the package, including product/version binding where relevant. |
| Evidence included | Artifacts, records, claims, measurements, attestations, certificates, manifests, SBOM/xBOMs, update records, vulnerability records, lifecycle-state records, logs, or audit material. |
| Producer/source | The supplier, product team, manufacturer, service owner, verifier, tool, repository, or system that produced each evidence item. |
| Consumer/recipient | The buyer, operator, customer, auditor, assessor, product team, verifier, or relying party that will use the evidence. |
| Generated when | When the evidence was generated and what event produced it. |
| Verified when | When the evidence was reviewed or appraised. |
| Verification method | How origin, integrity, freshness, consistency, scope, or lifecycle relevance was checked. |
| Freshness/date | The date, timestamp, version, status, or review cadence that shows whether the evidence is current enough. |
| Known gaps | Missing evidence, unclear scope, weak provenance, stale artifacts, unsupported claims, or unresolved questions. |
| Exceptions/risk acceptance | Any approved exception, residual risk, compensating action, owner, review date, and rationale. |
| Retention owner | The team, repository, system, or role responsible for retaining and refreshing the package. |
| Related technology options | Mechanisms that may help produce, protect, exchange, verify, or retain the evidence. |
| Follow-up actions | Remediation, additional evidence requests, retest, renewal, refresh, customer communication, or review actions required after the decision. |

## Package quality checks

- Is the evidence tied to a decision rather than collected for its own sake?
- Is the product, supplier, component, release, or lifecycle scope clear?
- Can the recipient identify who produced each artifact and when?
- Can origin, integrity, freshness, consistency, or lifecycle relevance be checked?
- Are gaps, exceptions, and risk acceptances visible?
- Is the package retained somewhere it can be found, explained, and reused later?

## Package Variants

Use the same template fields, but emphasize different evidence depending on the decision.

### Supplier review package

| Field | Example focus |
|---|---|
| Decision supported | Supplier selection, renewal, continued use, remediation, or rejection. |
| Practice/control supported | Supplier evidence requirements, supplier assurance review, contractual evidence clauses, remediation tracking. |
| Scope | Supplier, product or service, contract scope, critical sub-tiers, support services, and assessed version or release. |
| Evidence included | Supplier declarations, questionnaire responses, sub-tier declarations, dependency records, SBOM/xBOMs, vulnerability commitments, incident notification terms, remediation plans. |
| Known gaps | Unsupported sub-tier visibility, unavailable artifacts, stale certifications, missing product/version binding, unclear support boundary. |
| Retention owner | Procurement, supplier assurance, product security, or contract owner. |

### Product acceptance package

| Field | Example focus |
|---|---|
| Decision supported | Accept, reject, quarantine, remediate, or accept with conditions. |
| Practice/control supported | Identity verification, provenance review, integrity/configuration check, transparency artifact review, update/vulnerability review. |
| Scope | Product, component, platform, firmware load, supplier-provided service, serial number, release, or deployment cohort. |
| Evidence included | Identity evidence, provenance records, certificate or credential issuance records, measurements or attestation results, SBOM/xBOMs, update history, vulnerability status, acceptance checklist. |
| Known gaps | Missing provenance, stale vulnerability status, unverifiable identity, incomplete SBOM scope, unavailable reference values, unclear update history. |
| Retention owner | Product owner, asset owner, acceptance authority, or lifecycle monitoring owner. |

### Audit or customer assurance package

| Field | Example focus |
|---|---|
| Decision supported | Customer assurance response, audit response, certification preparation, internal control review, or evidence gap remediation. |
| Practice/control supported | Control evidence register, standards mapping review, evidence retention control, audit package preparation, exception visibility. |
| Scope | Standard, control, customer request, audit period, product line, supplier, lifecycle stage, or assurance claim. |
| Evidence included | Control-to-evidence mappings, source references, audit packs, customer assurance packs, review notes, verification metadata, exception records, remediation plans. |
| Known gaps | Unsupported control claims, expired evidence, unclear source reference, weak verification path, unresolved exception, missing retention owner. |
| Retention owner | Audit owner, compliance owner, customer assurance owner, control owner, or evidence repository owner. |

### Update or vulnerability review package

| Field | Example focus |
|---|---|
| Decision supported | Update approval, update eligibility, deployment, rollback, vulnerability remediation, vulnerability status communication, or risk acceptance. |
| Practice/control supported | Update approval workflow, update eligibility check, update signing control, affected-product analysis, remediation tracking, evidence refresh. |
| Scope | Product, version, release, deployment cohort, vulnerability identifier, affected component, customer environment, or lifecycle state. |
| Evidence included | Update approvals, signing records, update manifests, installation logs, rollback evidence, affected-product analysis, VEX-like status records, remediation records, risk acceptance records. |
| Known gaps | Unclear affected-product mapping, missing installation logs, stale vulnerability status, unverifiable update package, unresolved remediation, unsupported rollback evidence. |
| Retention owner | Product security, release owner, update service owner, vulnerability response owner, or lifecycle monitoring owner. |

## Retention Does Not Improve Weak Evidence

Retention does not make weak evidence strong. It preserves evidence usefulness only if the original artifact, context, and verification path are meaningful.

Use this template with [Evidence Repositories, Logs, and Retention](../technology-options/evidence-repositories-logs-retention.md) when evidence needs to support later audit, renewal, vulnerability response, transfer, repair, incident review, or decommissioning decisions.

## Copyable Starter Template

```text
Decision supported:
Decision outcome:
Decision owner:
Practice/control supported:
Scope:
Evidence included:
Producer/source:
Consumer/recipient:
Generated when:
Verified when:
Verification method:
Freshness/date:
Known gaps:
Exceptions/risk acceptance:
Retention owner:
Related technology options:
Follow-up actions:
```

## Related pages

- [Supplier Security Questions](./supplier-security-questions.md)
- [Evidence Checklist](./evidence-checklist.md)
- [Evidence Maturity Model](./evidence-maturity-model.md)
- [Worked Examples](./worked-examples/index.md)
- [Supplier Onboarding Evidence Package](./worked-examples/supplier-onboarding-evidence-package.md)
- [Product Acceptance Package](./worked-examples/product-acceptance-package.md)
- [Secure Update Approval](./worked-examples/secure-update-approval.md)
- [Vulnerability Response Evidence](./worked-examples/vulnerability-response-evidence.md)
- [Component Provenance Example](./worked-examples/component-provenance-example.md)
- [Weak vs Strong Supplier Answers](./worked-examples/weak-vs-strong-supplier-answers.md)
- [Glossary](./glossary.md)
- [Audit and Compliance Readiness](../practices-controls/audit-compliance-readiness.md)
- [Assurance Implementation Planning](../practices-controls/supply-chain-assurance-implementation.md)
