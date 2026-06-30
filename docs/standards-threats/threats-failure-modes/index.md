---
title: Threats and Failure Modes
sidebar_label: Overview
sidebar_position: 1
---

Supply-chain-security standards and requirements are easier to apply when readers can see the failures they are trying to prevent.

This section groups common supply chain threat patterns and lifecycle failure modes by the decision they affect: whether to trust what was delivered, whether to trust the software and update path, and whether to trust a supplier's evidence. Each page connects the threat pattern to practical controls and evidence.

## Why threat patterns matter

Compliance pressure, procurement requirements, customer assurance requests, and audit needs often use abstract control language. Threat patterns make the control question concrete: what could make a product, supplier, component, update, or lifecycle decision unsafe or hard to defend?

Use this section to move from a concrete failure mode to the controls and evidence that would make the decision stronger.

## Start with the decision you need to defend

Threat patterns are useful because they connect abstract requirements to real decisions. A team may need to decide whether to accept a product, trust a supplier, release an update, continue operating a device, renew a contract, or record an exception.

Use the pages below to identify what could make that decision unsafe or hard to defend, then follow the links to controls and evidence.

## Common threat groups

| Threat group | Reader question | Useful controls and evidence |
|---|---|---|
| [Product and component trust failures](./product-component-trust-failures.md) | Can I trust what was delivered? | Supplier qualification, identity checks, provenance records, acceptance records, lifecycle-state evidence. |
| [Software and update-chain compromise](./software-update-chain-compromise.md) | Can I trust the software, firmware, build, release, or update path? | Dependency review, SBOMs, build provenance, signing records, update manifests, vulnerability records. |
| [Supplier assurance failures](./supplier-assurance-failures.md) | Can I trust the supplier's evidence? | Supplier evidence requirements, artifact requests, assurance reviews, audit reports, exception records. |

## Quick lookup: threats, controls, and evidence

Use this table when you already know the failure mode and need a fast route to the relevant threat group, control area, or evidence type.

| Attack or failure mode | What can go wrong | Useful controls and evidence |
|---|---|---|
| Counterfeit or substituted components | A delivered product contains unauthorized, lower-grade, reused, or malicious components. | [Product and component trust failures](./product-component-trust-failures.md), [Identity & Provenance](../../evidence/identity-provenance.md), acceptance checks, lifecycle-state records. |
| Firmware tampering or reprogramming | Boot firmware, device firmware, or low-level code is modified before or after delivery. | [Software and update-chain compromise](./software-update-chain-compromise.md), [Integrity & Attestation](../../evidence/integrity-attestation.md), reference measurements, firmware signing, update records. |
| Compromised software dependencies | Vulnerable or malicious dependencies enter through open source or supplier software. | [Software & Component Transparency](../../evidence/software-component-transparency.md), [Update & Vulnerability](../../evidence/update-vulnerability.md), build provenance. |
| Supplier self-attestation only | A supplier claims controls exist but provides no verifiable evidence. | [Supplier assurance failures](./supplier-assurance-failures.md), [Evidence Checklist](../../resources/evidence-checklist.md), artifact requests, verification paths. |
| Loss of provenance through the chain | Resellers, integrators, repairers, or logistics actors change the product without clear records. | [Product and component trust failures](./product-component-trust-failures.md), provenance records, chain-of-custody records, [Lifecycle State & Audit](../../evidence/lifecycle-state-audit.md). |
| Unauthorized update or configuration drift | A device changes after acceptance and no longer matches the expected baseline. | [Software and update-chain compromise](./software-update-chain-compromise.md), update records, configuration records, [Integrity & Attestation](../../evidence/integrity-attestation.md), lifecycle monitoring. |
| Insecure repair, resale, or transfer | Trust state changes after repair or ownership transfer without being re-established. | [Product and component trust failures](./product-component-trust-failures.md), repair records, re-provisioning evidence, transfer records. |
| Poor end-of-life handling | Devices, credentials, keys, or sensitive data remain usable after retirement. | [Provenance, identity, and lifecycle evidence](../../evidence/lifecycle-state-audit.md), decommissioning records, revocation logs. |
| Key or credential compromise | Device or supplier credentials are cloned, extracted, reused, or not hardware-bound. | [Identity & Provenance](../../evidence/identity-provenance.md), [Trust Anchors](../../technology-options/trust-anchors.md), credential issuance logs. |
| Lack of continuous monitoring | Product is accepted once but not checked after updates, repair, or operation. | [Retention & Reuse](../../evidence/retention-reuse.md), [Integrity & Attestation](../../evidence/integrity-attestation.md), vulnerability and update evidence. |

## Cross-cutting assurance lessons

Threat patterns differ, but the assurance lessons repeat: weak claims need stronger artifacts, responsibilities cross organizational boundaries, and evidence needs to remain useful after the first review.

### Assertions vs artifacts

| Assurance level | What it gives the recipient | Common limitation |
|---|---|---|
| Supplier assertion | A statement that a control exists. | Hard to verify, compare, retain, or reuse. |
| Documented process | Process owner, scope, and procedure. | May not show whether a specific product or event followed the process. |
| Produced artifact | Manifest, record, certificate, log, report, or measurement. | May still need origin, integrity, freshness, and consistency checks. |
| Verifiable artifact | Evidence with a verification path. | Requires trust anchors, tooling, retention, and interpretation. |
| Lifecycle-retained evidence | Evidence remains available across lifecycle events. | Requires governance, storage, refresh, and access decisions. |

Use [Evidence](../../evidence/index.md) for the full maturity model and evidence page pattern.

### Roles and responsibilities

Failure modes usually cross organizational boundaries. Procurement may ask the question, engineering may implement the control, suppliers may produce the artifact, product acceptance may verify it, and audit or operations may need to reuse it later.

Pages should make those handoffs explicit rather than assuming one team owns the whole assurance chain.

### Questionnaires vs artifacts

Questionnaires help discover what a supplier claims and what evidence may exist. They are not a substitute for artifacts. Use [Supplier Questions](../../resources/supplier-questions.md) to ask consistently, then use the [Evidence Checklist](../../resources/evidence-checklist.md) to decide which artifacts, records, logs, measurements, or attestations are needed for the decision.

### Compliance controls vs operational assurance

Compliance controls may show that a process exists. Operational assurance asks whether the relevant product, component, firmware, service, update, repair, or lifecycle event actually followed the process and whether the evidence remains useful after acceptance.

## Practical questions

### Questions to ask suppliers

- Which listed threats or failure modes are relevant to the product, platform, component, service, or supplier relationship?
- What artifacts show that the relevant practices or controls are operating for the specific scope being assessed?
- What evidence would change after manufacturing, update, repair, transfer, or decommissioning?

### Questions to ask internally

- Which failure mode would make our decision unsafe or hard to defend later?
- What is our minimum acceptable evidence for this threat or failure mode, and what would be stronger?
- Who owns remediation when evidence is missing, stale, or inconsistent?

## Next actions

- Use [Lifecycle Map](../../practices-controls/lifecycle-map.md) to decide when each threat or failure mode matters.
- Use [10 Best Practices](../../practices-controls/10-best-practices.md) to connect threat themes to practices.
- Use [Evidence](../../evidence/index.md) to identify artifacts and verification paths.
- Use [Supplier & Procurement Assurance](../../practices-controls/supplier-procurement-assurance.md) when the failure mode needs supplier-facing requests.
- Use [Product Acceptance](../../practices-controls/product-acceptance.md) when the failure mode affects an acceptance decision.
- Use [Evidence Checklist](../../resources/evidence-checklist.md) to turn a failure mode into artifact requests.
