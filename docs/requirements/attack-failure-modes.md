---
title: Attack & Failure Modes
sidebar_position: 2
---

Supply-chain-security guidance is most useful when readers can see what can go wrong and what evidence would help them make a better decision. This page names common attack and failure modes, then connects them to practical practices, controls, and evidence.

## Attack And Failure Modes

| Attack or failure mode | What can go wrong | Relevant evidence or controls |
|---|---|---|
| Counterfeit or substituted components | A delivered product contains unauthorized, lower-grade, reused, or malicious components | [Identity & Provenance](../evidence/identity-provenance.md), acceptance checks, lifecycle-state records |
| Firmware tampering or reprogramming | Boot firmware, device firmware, or low-level code is modified before or after delivery | [Integrity & Attestation](../evidence/integrity-attestation.md), reference measurements, firmware signing, update records |
| Compromised software dependencies | Vulnerable or malicious dependencies enter through open source or supplier software | [Software & Component Transparency](../evidence/software-component-transparency.md), [Update & Vulnerability](../evidence/update-vulnerability.md), build provenance |
| Supplier self-attestation only | A supplier claims controls exist but provides no verifiable evidence | [Evidence Checklist](../resources/evidence-checklist.md), artifact requests, [Lifecycle State & Audit](../evidence/lifecycle-state-audit.md), verification paths |
| Loss of provenance through the chain | Resellers, integrators, repairers, or logistics actors change the product without clear records | [Identity & Provenance](../evidence/identity-provenance.md), chain-of-custody records, [Lifecycle State & Audit](../evidence/lifecycle-state-audit.md) |
| Unauthorized update or configuration drift | A device changes after acceptance and no longer matches the expected baseline | [Update & Vulnerability](../evidence/update-vulnerability.md), configuration records, [Integrity & Attestation](../evidence/integrity-attestation.md), lifecycle monitoring |
| Insecure repair, resale, or transfer | Trust state changes after repair or ownership transfer without being re-established | [Lifecycle State & Audit](../evidence/lifecycle-state-audit.md), repair records, re-provisioning evidence, transfer records |
| Poor end-of-life handling | Devices, credentials, keys, or sensitive data remain usable after retirement | [Lifecycle State & Audit](../evidence/lifecycle-state-audit.md), decommissioning records, revocation logs |
| Key or credential compromise | Device or supplier credentials are cloned, extracted, reused, or not hardware-bound | [Identity & Provenance](../evidence/identity-provenance.md), [Trust Anchors](../technology-options/trust-anchors.md), credential issuance logs |
| Lack of continuous monitoring | Product is accepted once but not checked after updates, repair, or operation | [Retention & Reuse](../evidence/retention-reuse.md), [Integrity & Attestation](../evidence/integrity-attestation.md), vulnerability and update evidence |

## Risk And Practice Themes

### Identity and authenticity

Readers need to know whether a delivered device, component, platform, supplier, service, or artifact is the expected one. Practices may include unique identity, manufacturer identity claims, hardware-rooted credentials, certificate issuance records, and acceptance checks.

### Provenance and chain of custody

Readers need to understand origin, custody, sourcing, logistics, repair, and transfer history. Practices may include provenance records, chain-of-custody records, supplier declarations, reseller records, and lifecycle-state records.

### Integrity and expected state

Readers need to know whether firmware, software, configuration, and platform state match expectations. Practices may include signed firmware, reference measurements, measured boot, attestation, configuration baselines, and tamper-evident update histories.

### Transparency and vulnerability handling

Readers need to understand what components are present and whether known exposures are tracked. Practices may include SBOMs, xBOMs, vulnerability records, VEX-like status records, remediation evidence, and update plans.

### Lifecycle assurance

Readers need assurance after acceptance. Practices may include update records, repair records, re-provisioning evidence, ownership transfer records, revocation logs, decommissioning evidence, and retained audit trails.

## Assertions Vs Artifacts

| Assurance level | What it gives the recipient | Common limitation |
|---|---|---|
| Supplier assertion | A statement that a control exists | Hard to verify, compare, retain, or reuse |
| Documented process | Process owner, scope, and procedure | May not show whether a specific product or event followed the process |
| Produced artifact | Manifest, record, certificate, log, report, or measurement | May still need origin, integrity, freshness, and consistency checks |
| Verifiable artifact | Evidence with a verification path | Requires trust anchors, tooling, retention, and interpretation |
| Lifecycle-retained evidence | Evidence remains available across lifecycle events | Requires governance, storage, refresh, and access decisions |

Use [Evidence](../evidence/index.md) for the full maturity model and evidence page pattern.

## Roles And Responsibilities

Failure modes usually cross organizational boundaries. Procurement may ask the question, engineering may implement the control, suppliers may produce the artifact, product acceptance may verify it, and audit or operations may need to reuse it later. Pages should make those handoffs explicit rather than assuming one team owns the whole assurance chain.

## Questionnaires Vs Artifacts

Questionnaires help discover what a supplier claims and what evidence may exist. They are not a substitute for artifacts. Use [Supplier Questions](../resources/supplier-questions.md) to ask consistently, then use the [Evidence Checklist](../resources/evidence-checklist.md) to decide which artifacts, records, logs, measurements, or attestations are needed for the decision.

## Compliance Controls Vs Operational Assurance

Compliance controls may show that a process exists. Operational assurance asks whether the relevant product, component, firmware, service, update, repair, or lifecycle event actually followed the process and whether the evidence remains useful after acceptance.

## Example Mapping

| Requirement or risk | Failure mode | Practice or control | Evidence |
|---|---|---|---|
| Product acceptance | Counterfeit component | Verify component or platform identity | Platform Certificate, provenance record |
| Audit or compliance | Reliance on self-attestation | Request verifiable artifacts | Evidence checklist, audit records |
| Lifecycle assurance | Firmware drift after update | Verify integrity and state | Reference measurements, measured boot, attestation |
| Procurement | Opaque supplier chain | Ask for provenance and transparency | Supplier evidence, SBOM/xBOM, chain-of-custody records |
| Operations | Post-deployment compromise | Monitor integrity and vulnerabilities | Attestation results, update records, vulnerability records |

## Practical Questions

### Questions to ask suppliers

- Which listed risks are relevant to the product, platform, component, service, or supplier relationship?
- What artifacts show that the relevant practices or controls are operating for the specific scope being assessed?
- What evidence would change after manufacturing, update, repair, transfer, or decommissioning?

### Questions to ask internally

- Which failure mode would make our decision unsafe or hard to defend later?
- What is our minimum acceptable evidence for this risk, and what would be stronger?
- Who owns remediation when evidence is missing, stale, or inconsistent?

### Questions to ask assessors / auditors

- Is each control claim tied to evidence rather than only to a process description?
- Can evidence be reviewed for origin, integrity, scope, freshness, and retention?
- Are residual risks and exceptions recorded?

### Questions to ask implementers

- What control produces the evidence, and where is it stored?
- What verification path will recipients use?
- How will the control and evidence survive update, repair, transfer, and retirement events?

## Next Actions

- Use [Lifecycle Map](../practices-controls/lifecycle-map.md) to decide when each risk matters.
- Use [10 Best Practices](../practices-controls/10-best-practices.md) to connect risk themes to practices.
- Use [Evidence](../evidence/index.md) to identify artifacts and verification paths.
- Use [Procurement & Supplier Assurance](../practices-controls/procurement-supplier-assurance.md) when the failure mode needs supplier-facing requests.
- Use [Product Acceptance](../practices-controls/product-acceptance.md) when the failure mode affects an acceptance decision.
- Use [Evidence Checklist](../resources/evidence-checklist.md) to turn a failure mode into artifact requests.
