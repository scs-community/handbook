---
title: Supply Chain Security Practices and Controls
sidebar_label: Overview
sidebar_position: 1
description: "Use practical supply chain security practices to turn standards and threats into controls, evidence expectations, verification, and operating routines."
---

Practices & Controls is the operating layer of the handbook. Use it when a standard, regulation, procurement requirement, customer assurance request, audit need, or supply chain threat has created a need for action, and you need to decide what should actually operate.

A practice is a recurring operating activity. A control is a safeguard, check, workflow, approval, or requirement inside that practice. Evidence is what the control produces or retains so the practice can be reviewed.

Evidence may be an artefact, record, claim, measurement, attestation, certificate, manifest, SBOM/xBOM, update record, vulnerability record, lifecycle-state record, log, or audit material.

Good evidence is bound to a decision, product or supplier scope, lifecycle stage, and verification path.

Use this section to move from standards and threats to practical behaviours, core controls, evidence, verification, and implementation choices.

## Pages in this section

| Page | Use it when you need to... |
|---|---|
| [10 Best Practices](/practices-controls/10-best-practices/) | Understand the core supply chain security practices and how they connect to evidence, lifecycle, verification, and technology options. |
| [Lifecycle Map](./supply-chain-security-lifecycle-map.md) | Place practices, controls, and evidence across design, sourcing, manufacturing, provisioning, logistics, acceptance, deployment, update, repair, transfer, and decommissioning. |
| [Supplier & Procurement Assurance](./supplier-assurance-procurement.md) | Operate supplier selection, contracting, assurance review, renewal, and continued-use processes based on evidence. |
| [Product Acceptance](./product-acceptance-supply-chain-trust.md) | Accept delivered products, components, platforms, firmware loads, or services only when evidence supports the trust decision. |
| [Secure Development & Release Governance](./secure-development-release-governance.md) | Govern supplier inputs, dependencies, build outputs, reviews, approvals, signing readiness, and release evidence. |
| [Software, Component & Vulnerability Management](./software-components-vulnerability-management.md) | Maintain visibility of software, firmware, components, supplier inputs, affected products, vulnerabilities, remediation, and status communication. |
| [Secure Update & Lifecycle Monitoring](./secure-updates-lifecycle-monitoring.md) | Govern update approval, authorisation, signing, delivery, installation, recovery, evidence refresh, and continued lifecycle assurance. |
| [Audit & Compliance Readiness](./audit-compliance-readiness.md) | Maintain traceable control evidence for audit, customer assurance, certification, and internal review. |
| [Assurance Implementation Planning](./supply-chain-assurance-implementation.md) | Plan engineering capabilities from assurance decisions, evidence needs, verification paths, and lifecycle retention requirements. |

## Operating model

Practice pages should follow this model:

```text
Practice -> control -> evidence -> verification -> technology option
```

This keeps the site practical and neutral. Standards and threats explain why action is needed; practice pages explain what should operate, what evidence should be retained, how it can be reviewed, and which technology options may help.

## Evidence maturity

| Level | Description |
|---|---|
| Assertion | A supplier or team says a control exists |
| Documented process | The process, owner, scope, and review cadence are described |
| Produced artefact | A record, manifest, certificate, SBOM/xBOM, log, measurement, attestation, or report is provided |
| Verifiable artefact | The recipient can verify origin, integrity, freshness, scope, or consistency |
| Lifecycle-retained evidence | Evidence is retained, refreshed, and reused across deployment, update, repair, transfer, audit, and decommissioning |

Use [Evidence Maturity Model](../resources/evidence-maturity-model.md), [Evidence Checklist](../resources/evidence-checklist.md), [Glossary](../resources/glossary.md), and [Evidence Package Template](../resources/evidence-package-template.md) when turning practice evidence into reusable requests, review criteria, or audit packages.

## What stronger assurance looks like

| Weak | Better | Stronger |
|---|---|---|
| A supplier says a control exists | The supplier describes the process, owner, scope, and review cadence | The supplier provides evidence, a verification path, lifecycle retention, and a remediation process |
| A product is accepted once | Acceptance checks are documented | Acceptance evidence is retained and updated after deployment, update, repair, transfer, and decommissioning |
| Standards are listed as references | Standards are grouped by function | Standards are mapped to requirements, evidence structures, technical mechanisms, and gaps |

## How to translate a driver into action

Use this pattern when translating a regulation, customer request, procurement expectation, audit task, certification activity, product-acceptance decision, or threat pattern into practical work.

| Step | Translation question |
|---|---|
| Standard or threat | What standard, regulation, customer request, procurement expectation, audit need, product-acceptance decision, governance concern, or threat brings the reader here? |
| Practice | What recurring operating activity should exist? |
| Control | What safeguard, check, workflow, approval, or requirement sits inside the practice? |
| Decision | What decision becomes stronger if the control operates? |
| Failure mode | What could go wrong if the claim is wrong or unverifiable? |
| Evidence | What artefact, record, claim, measurement, attestation, certificate, manifest, SBOM/xBOM, update record, vulnerability record, lifecycle-state record, log, or audit material would support the control? |
| Verification | How can the recipient test origin, integrity, freshness, consistency, or lifecycle relevance? |
| Technology options | Which mechanisms, protocols, formats, trust anchors, verifier workflows, or tools may help produce, protect, exchange, verify, or retain the evidence? |

## Practical questions

### Questions to ask suppliers

- What evidence can you provide for the practice, control, or assurance claim being discussed?
- Which lifecycle stage, product version, component, service, or supplier scope does the evidence cover?
- How can a recipient verify origin, integrity, freshness, and applicability?

### Questions to ask internally

- What standard, threat, expectation, or decision brought us to this page?
- What would go wrong if we relied only on a policy statement or supplier assertion?
- What evidence would make the decision reviewable later?

### Questions to ask assessors / auditors

- Can the claim be traced to a control, artefact, lifecycle stage, and source reference?
- Are unsupported assumptions and evidence gaps visible?
- Is the guidance being used as practical interpretation rather than formal compliance advice?

### Questions to ask implementers

- What systems, workflows, or owners produce the needed evidence?
- How will evidence be retained, refreshed, and reused after the initial decision?
- What technology options may help without becoming the organising principle?

## Next actions

- Use [Threats and Failure Modes](../standards-threats/threats/index.md) to understand what can go wrong.
- Use [Lifecycle Map](./supply-chain-security-lifecycle-map.md) to decide when practices, controls, and evidence matter.
- Use [10 Best Practices](/practices-controls/10-best-practices/) to connect practices, evidence, verification, and technology options.
- Use [Resources](../resources/index.md) for evidence definitions, checklists, maturity models, and package templates.
- Use [Technology Options](../technology-options/index.md) to compare implementation and verification mechanisms.
