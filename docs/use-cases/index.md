---
title: Use Cases
sidebar_position: 1
---

Use cases help readers move from requirements and risks to practical decisions. Each page starts with the decision the reader is trying to make, explains what can go wrong, and turns good practice into questions, evidence requests, verification paths, and technology options.

## Use-Case Routes

| Use case | Reader question | Status |
|---|---|---|
| [Procurement & Supplier Assurance](./procurement-supplier-assurance.md) | What should we ask suppliers for? | Launch |
| [Product Acceptance](./product-acceptance.md) | How do we know this delivered product is trustworthy? | Launch |
| [Audit & Compliance](./audit-compliance.md) | What artifacts show controls are operating? | Expanded |
| [Lifecycle Monitoring](./lifecycle-monitoring.md) | How do we maintain assurance after acceptance? | Expanded |
| [Implementation Planning](./implementation-planning.md) | What should engineering teams implement to support assurance? | Expanded |
| [Standards Gap Analysis](./standards-gap-analysis.md) | Where do standards help, and where are the gaps? | Expanded |

## Use-Case Page Pattern

Each use-case page should include:

1. Decision: What decision is the reader trying to make?
2. What can go wrong: What risks, failures, or blind spots matter?
3. Good practice: What does a stronger approach look like?
4. What to ask for: What questions or requests should the reader make?
5. Evidence / artifacts: What evidence matters?
6. Weak answer: What would be assertion-only or insufficient?
7. Stronger answer: What would be process-based, evidence-backed, verifiable, or lifecycle-retained?
8. Lifecycle stages: Where does this apply?
9. Technology options: Which mechanisms, formats, trust anchors, protocols, tools, or mappings are useful?
10. Related pages: Where should the reader go next?

Use the weak, better, stronger maturity pattern where it helps readers improve without implying that every organization must start with the most advanced mechanism.

## Practical Questions

### Questions to ask suppliers

- What evidence can you provide for the decision this use case supports?
- What scope, lifecycle stage, product version, or service boundary does the evidence cover?
- What cannot currently be evidenced, and what remediation or maturity plan exists?

### Questions to ask internally

- What decision are we trying to make, and what evidence would make it defensible?
- What weak answer would be insufficient, and what better or stronger answer would change the decision?
- Who owns follow-up when evidence is missing, stale, or inconsistent?

### Questions to ask assessors / auditors

- Is the use-case evidence tied to a control, requirement, lifecycle event, and acceptance criterion?
- Are exceptions, assumptions, and gaps visible?
- Can the evidence package be reviewed later without reconstructing context from memory?

### Questions to ask implementers

- What systems, processes, and owners produce the evidence needed by this use case?
- How will the evidence be bound to the right product, component, supplier, service, or lifecycle event?
- How will verification, retention, and refresh happen in normal operations?
