---
title: Practices & Controls
sidebar_position: 1
---

This section explains what to do. It turns requirements and risks into practical controls, lifecycle responsibilities, decision workflows, supplier questions, evidence requests, and verification paths.

The guidance is written for decision makers first: product-security leaders, supply-chain-security leaders, procurement and supplier-assurance teams, product-acceptance decision makers, auditors, assessors, operators, and implementers who need to understand what controls must operate and what evidence those controls should produce.

## Practices & Controls Pages

| Page | Use it when you need to... |
|---|---|
| [10 Best Practices](./10-best-practices.md) | Read a practical synthesis of core supply-chain-security practices |
| [Lifecycle Map](./lifecycle-map.md) | Map controls and evidence from design through decommissioning |
| [Decision Guides](./decision-guides.md) | Apply the practices to procurement, product acceptance, audit, monitoring, and implementation planning |
| [Procurement & Supplier Assurance](./procurement-supplier-assurance.md) | Decide what to ask suppliers for |
| [Product Acceptance](./product-acceptance.md) | Decide whether a delivered product is trustworthy enough to accept |
| [Audit & Compliance](./audit-compliance.md) | Decide what artifacts show controls are operating |
| [Lifecycle Monitoring](./lifecycle-monitoring.md) | Decide how to maintain assurance after acceptance |
| [Implementation Planning](./implementation-planning.md) | Decide what capabilities engineering teams need to implement |

## Editorial Model

Practice pages should follow this model:

```text
Requirement or risk -> control -> evidence -> verification -> technology options
```

This keeps the site practical and neutral. It starts with the reader's requirement, risk, or decision, not a standards body or technology.

## How To Translate A Requirement Into Action

Use this pattern when translating a regulation, customer request, procurement expectation, audit task, certification activity, product-acceptance decision, or risk review into practical work.

| Step | Translation question |
|---|---|
| Requirement or risk | What regulation, standard, customer request, procurement expectation, audit need, product-acceptance decision, governance concern, or risk brings the reader here? |
| Decision | What decision must the reader make? |
| Failure mode | What could go wrong if the claim is wrong or unverifiable? |
| Practice or control | What practical control or behavior should operate? |
| Evidence | What artifact, record, claim, measurement, attestation, certificate, manifest, SBOM/xBOM, update record, vulnerability record, lifecycle-state record, log, or audit material would support the control? |
| Verification | How can the recipient test origin, integrity, freshness, consistency, or lifecycle relevance? |
| Technology options | Which mechanisms, protocols, formats, trust anchors, verifier workflows, or tools may help produce, protect, exchange, verify, or retain the evidence? |

## What Stronger Assurance Looks Like

| Weak | Better | Stronger |
|---|---|---|
| A supplier says a control exists | The supplier describes the process, owner, scope, and review cadence | The supplier provides evidence, a verification path, lifecycle retention, and a remediation process |
| A product is accepted once | Acceptance checks are documented | Acceptance evidence is retained and updated after deployment, update, repair, transfer, and decommissioning |
| Standards are listed as references | Standards are grouped by function | Standards are mapped to requirements, evidence models, technical mechanisms, and gaps |

## Practical Questions

### Questions to ask suppliers

- What evidence can you provide for the practice, control, or assurance claim being discussed?
- Which lifecycle stage, product version, component, service, or supplier scope does the evidence cover?
- How can a recipient verify origin, integrity, freshness, and applicability?

### Questions to ask internally

- What requirement, risk, or decision brought us to this page?
- What would go wrong if we relied only on a policy statement or supplier assertion?
- What evidence would make the decision reviewable later?

### Questions to ask assessors / auditors

- Can the claim be traced to a control, artifact, lifecycle stage, and source reference?
- Are unsupported assumptions and evidence gaps visible?
- Is the guidance being used as practical interpretation rather than formal compliance advice?

### Questions to ask implementers

- What systems, workflows, or owners produce the needed evidence?
- How will evidence be retained, refreshed, and reused after the initial decision?
- What technology options may help without becoming the organizing principle?

## Next Actions

- Use [Attack & Failure Modes](../requirements/attack-failure-modes.md) to understand what can go wrong.
- Use [Lifecycle Map](./lifecycle-map.md) to decide when evidence is needed.
- Use [10 Best Practices](./10-best-practices.md) to connect practices, evidence, verification, and technology options.
- Use [Decision Guides](./decision-guides.md) to apply the practices to concrete decisions.
