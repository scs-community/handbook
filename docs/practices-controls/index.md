---
title: Practices & Controls
sidebar_position: 1
---

This section explains the supply-chain-security controls and practices that reduce practical risk. It starts with attack and failure modes, maps them across the lifecycle, and turns them into evidence-backed actions.

The guidance is written for decision makers first: product-security leaders, supply-chain-security leaders, procurement and supplier-assurance teams, product-acceptance decision makers, auditors, assessors, and implementers who need to understand what controls must operate and what evidence those controls should produce.

## Practices & Controls Pages

| Page | Use it when you need to... |
|---|---|
| [Attack & Failure Modes](./attack-failure-modes.md) | Understand what can go wrong and which controls or evidence reduce the risk |
| [Lifecycle Map](./lifecycle-map.md) | Map controls and evidence from design through decommissioning |
| [10 Best Practices](./10-best-practices.md) | Read a practical synthesis of core supply-chain-security practices |

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

- Use [Attack & Failure Modes](./attack-failure-modes.md) to understand what can go wrong.
- Use [Lifecycle Map](./lifecycle-map.md) to decide when evidence is needed.
- Use [10 Best Practices](./10-best-practices.md) to connect practices, evidence, verification, and technology options.
