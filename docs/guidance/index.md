---
title: Guidance overview
sidebar_position: 1
---

This section explains the supply-chain-security problem space, maps risks and evidence across the lifecycle, and summarizes the core practices for products and platforms where hardware, firmware, software, suppliers, credentials, updates, and lifecycle services all affect trust.

The guidance is written for decision makers first: product-security leaders, supply-chain-security leaders, procurement and supplier-assurance teams, product-acceptance decision makers, auditors, assessors, and implementers who need to understand what support they must provide.

## Guidance Pages

| Page | Use it when you need to... |
|---|---|
| [Risks & Controls](./risks-controls.md) | Understand attack and failure modes, and why evidence-backed assurance matters |
| [Lifecycle Map](./lifecycle-map.md) | Map practices and evidence from design through decommissioning |
| [10 Best Practices](./10-best-practices.md) | Read a practical synthesis of the main supply-chain-security practices |

## Editorial Model

Serious guidance pages should follow this model:

```text
Drivers -> attack and failure modes -> practices -> evidence -> verification -> standards and technologies
```

This keeps the site practical and neutral. It starts with the reader's driver or decision, not a standards body or technology.

## What Stronger Assurance Looks Like

| Weak | Better | Stronger |
|---|---|---|
| A supplier says a control exists | The supplier describes the process, owner, scope, and review cadence | The supplier provides evidence, a verification path, lifecycle retention, and a remediation process |
| A product is accepted once | Acceptance checks are documented | Acceptance evidence is retained and updated after deployment, update, repair, transfer, and decommissioning |
| Standards are listed as references | Standards are grouped by role | Standards are mapped to drivers, evidence models, technical mechanisms, and gaps |

## Practical Questions

### Questions to ask suppliers

- What evidence can you provide for the practice, control, or assurance claim being discussed?
- Which lifecycle stage, product version, component, service, or supplier scope does the evidence cover?
- How can a recipient verify origin, integrity, freshness, and applicability?

### Questions to ask internally

- What driver or decision brought us to this guidance page?
- What would go wrong if we relied only on a policy statement or supplier assertion?
- What evidence would make the decision reviewable later?

### Questions to ask assessors / auditors

- Can the claim be traced to a control, artifact, lifecycle stage, and source reference?
- Are unsupported assumptions and evidence gaps visible?
- Is the guidance being used as practical interpretation rather than formal compliance advice?

### Questions to ask implementers

- What systems, workflows, or owners produce the needed evidence?
- How will evidence be retained, refreshed, and reused after the initial decision?
- What standards or technologies may help without becoming the organizing principle?

## Next Actions

- Use [Risks & Controls](./risks-controls.md) to understand what can go wrong.
- Use [Lifecycle Map](./lifecycle-map.md) to decide when evidence is needed.
- Use [10 Best Practices](./10-best-practices.md) to connect practices, evidence, verification, and mappings.
