---
title: Supplier Onboarding Evidence Package
sidebar_position: 2
description: "See a supplier onboarding evidence package example that turns procurement risk into scoped controls, evidence, verification, and acceptance decisions."
---

This fictional example shows what a useful supplier response can look like before contract award.

## Scenario

A buyer is onboarding a supplier that provides a connected gateway device and associated update service. The supplier has passed an initial commercial review, but the buyer needs supply chain security evidence before contract award.

## Decision being made

Should the buyer approve the supplier for contract award, approve with conditions, or require remediation before award?

:::tip[Example outcome]

Decision: approve with conditions.

Main condition: update-hosting-provider evidence must be reviewed before production deployment.

Evidence maturity: [Level 3–4](../evidence-maturity-model.md), because the response includes produced artefacts with reviewable scope and partial verification; not Level 5 until renewal and deployment records are refreshed and retained.

:::

## Weak answer

The supplier says:

> We have a mature security process and complete annual supplier questionnaires.

Assessment: weak. This is an assertion and does not show which product, service, lifecycle stage, or control the claim applies to.

Evidence maturity: Level 1, supplier assertion.

## Better answer

The supplier says:

> We have a documented secure development process, supplier review process, vulnerability handling process, and secure update policy. We can share summaries under NDA.

Assessment: better, but still incomplete. The answer describes processes, but does not yet provide product-scoped artefacts or verification paths.

Evidence maturity: Level 2, documented process.

## Stronger answer

The supplier provides:

- product-scoped supplier responsibility matrix;
- named security and update-service owners;
- sub-tier declaration for the update hosting provider and cryptographic component supplier;
- SBOM for the current gateway firmware release;
- vulnerability handling process with customer notification commitments;
- update signing policy and key custody summary;
- sample release approval and update deployment record;
- evidence retention commitment for release, update, vulnerability, and incident records;
- list of known evidence gaps and remediation dates.

Assessment: strong. The response is scoped, reviewable, tied to contract and product decisions, and clear about gaps.

Evidence maturity: Level 3–4, produced artefacts with reviewable scope and partial verification.

## What changed from weak to strong?

| Improvement | Why it matters |
|---|---|
| Product and service scope added | Prevents generic supplier claims from being reused across unrelated products or services |
| Owners named | Makes follow-up and accountability possible |
| Sub-tier dependencies declared | Shows where supplier assurance needs to extend beyond the direct supplier |
| Verification path added | Lets the buyer review sample records and commitments instead of trusting a questionnaire |
| Gaps declared | Prevents update-service uncertainty from being hidden |
| Retention owner added | Keeps supplier evidence useful after award, renewal, deployment, incident, or major release |

## Evidence package

| Field | Example content |
|---|---|
| Decision supported | Supplier approval before contract award |
| Threat/failure mode addressed | Supplier self-attestation only, opaque sub-tier dependencies, unsupported update-service claims |
| Practice/control supported | Supplier evidence requirements, supplier scope/version binding, contractual evidence clauses, supplier assurance review |
| Scope | Gateway device model GW-100, firmware 3.x, update service, critical sub-tier update hosting provider |
| Evidence included | Supplier responsibility matrix, sub-tier declaration, SBOM, vulnerability process, update signing policy, sample release record, retention commitment |
| Producer/source | Supplier product security lead, supplier release manager, supplier procurement owner |
| Consumer/recipient | Buyer procurement, product security, legal, and product acceptance teams |
| Verification method | Review product/version scope, named owners, sample records, update-service boundary, and evidence retention commitments |
| Known gaps | No independent review of update hosting provider yet; supplier commits to provide review evidence before first production deployment |
| Exceptions/risk acceptance | Contract award may proceed only if the update hosting evidence is delivered before production use |
| Retention owner | Buyer supplier assurance owner and supplier account security owner |

## Verification questions

- Is the evidence tied to the actual product and service being procured?
- Are sub-tier dependencies visible enough for the decision?
- Are vulnerability and update commitments contractual, reviewable, and retained?
- Are sample records representative, or only illustrative?
- Are unresolved gaps recorded with owners and dates?

## Gaps, exceptions, and retention

The buyer records an approval-with-conditions decision. The supplier may be awarded the contract, but production deployment is blocked until the update hosting provider evidence is reviewed.

Supplier onboarding evidence is retained with the contract file and refreshed at renewal, major product release, update-service change, incident, or critical vulnerability.

## Related pages

- [Supplier & Procurement Assurance](../../practices-controls/supplier-procurement-assurance.md)
- [Supplier Questions](../supplier-questions.md)
- [Evidence Checklist](../evidence-checklist.md)
- [Evidence Maturity Model](../evidence-maturity-model.md)
- [Evidence Package Template](../evidence-package-template.md)
- [Evidence Exchange & Verifier Workflows](../../technology-options/evidence-exchange-verifier-workflows.md)
- [Evidence Repositories, Logs & Retention](../../technology-options/evidence-repositories-logs-retention.md)
