---
title: Evidence Maturity Model
sidebar_position: 5
---

This page helps readers distinguish weak evidence from stronger assurance. It explains the progression from supplier assertion, to documented process, to produced artefact, to verifiable artefact, to lifecycle-retained evidence.

Evidence is not a separate journey. It is what makes practices reviewable.

## Maturity levels

| Level | Description | Example |
|---|---|---|
| Assertion | A supplier or team says a control exists. | The supplier says the product is authentic. |
| Documented process | The process, owner, scope, and review cadence are described. | The supplier describes its identity, provisioning, and supplier review process. |
| Produced artefact | A record, manifest, certificate, SBOM/xBOM, log, measurement, attestation, or report is provided. | The supplier provides identity evidence, credential issuance records, SBOMs, update records, or vulnerability status records. |
| Verifiable artefact | The recipient can verify origin, integrity, freshness, scope, or consistency. | Evidence is signed, issuer-bound, product/version-bound, timestamped, measured, or supported by a verifier workflow. |
| Lifecycle-retained evidence | Evidence is retained, refreshed, and reused across deployment, update, repair, transfer, audit, and decommissioning. | Evidence remains available after update, repair, transfer, vulnerability disclosure, and decommissioning, with supersession and retention records. |

## Weak, better, stronger

| Decision | Weak | Better | Stronger | Strongest |
|---|---|---|---|---|
| Supplier assurance | The supplier says controls exist. | The supplier describes control ownership, scope, and review cadence. | The supplier provides evidence packages, artefacts, logs, and exception records. | Evidence is retained, refreshed, and reviewed across renewal, audit, and continued use. |
| Product acceptance | The supplier says the product is genuine and secure. | The supplier describes identity, provenance, integrity, and acceptance processes. | The supplier provides identity evidence, credential issuance records, product/version binding, and a verification path. | Evidence is retained and refreshed after update, repair, transfer, and decommissioning. |
| Update assurance | The supplier says updates are authorised. | The update process, signing roles, and rollback approach are documented. | Signed update packages, update approvals, installation logs, and rollback evidence are provided. | Update state, recovery evidence, exceptions, and superseded versions remain reviewable over time. |
| Vulnerability response | The supplier says vulnerabilities are handled. | Vulnerability intake, triage, and communication processes are described. | Affected-product analysis, vulnerability status, remediation records, and update evidence are provided. | Vulnerability status is refreshed and retained across versions, customer requests, audit, and lifecycle review. |
| Audit readiness | Teams say controls operate. | Control owners, cadence, and evidence expectations are documented. | Evidence packages link controls, decisions, artefacts, verification, and exceptions. | Evidence remains searchable, explainable, retained, and reusable across audit cycles and assurance requests. |

## How to use the model

Use the maturity model when deciding whether evidence is sufficient for:

- [Supplier & Procurement Assurance](../practices-controls/supplier-procurement-assurance.md);
- [Product Acceptance](../practices-controls/product-acceptance.md);
- [Software, Component & Vulnerability Management](../practices-controls/software-component-vulnerability-management.md);
- [Secure Update & Lifecycle Monitoring](../practices-controls/secure-update-lifecycle-monitoring.md);
- [Audit & Compliance Readiness](../practices-controls/audit-compliance-readiness.md);
- [Assurance Implementation Planning](../practices-controls/assurance-implementation-planning.md).

## Retention warning

Retention does not make weak evidence strong. It preserves evidence usefulness only if the original artefact, context, and verification path are meaningful.

Good retained evidence stays bound to a decision, product or supplier scope, lifecycle stage, verification path, and refresh history.

## Related pages

- [Evidence Checklist](./evidence-checklist.md)
- [Evidence Glossary](./evidence-glossary.md)
- [Evidence Package Template](./evidence-package-template.md)
- [Practices & Controls](../practices-controls/index.md)
