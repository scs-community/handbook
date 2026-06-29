---
title: Attack & Failure Modes
sidebar_position: 2
---

Supply-chain-security guidance is most useful when readers can see what can go wrong and what evidence would help them make a better decision. This page names common attack and failure modes, then connects them to practical practices, controls, and evidence.

## Attack And Failure Modes

| Attack or failure mode | What can go wrong | Relevant evidence or controls |
|---|---|---|
| Counterfeit or substituted components | A delivered product contains unauthorized, lower-grade, reused, or malicious components | Platform Certificates, component identity, provenance records, acceptance checks |
| Firmware tampering or reprogramming | Boot firmware, device firmware, or low-level code is modified before or after delivery | Measured boot, reference integrity measurements, attestation, firmware signing, update records |
| Compromised software dependencies | Vulnerable or malicious dependencies enter through open source or supplier software | SBOM, vulnerability records, build provenance, update and remediation evidence |
| Supplier self-attestation only | A supplier claims controls exist but provides no verifiable evidence | Supplier questions, artifact requests, audit records, verification paths |
| Loss of provenance through the chain | Resellers, integrators, repairers, or logistics actors change the product without clear records | Chain-of-custody records, delta certificates, lifecycle-state records |
| Unauthorized update or configuration drift | A device changes after acceptance and no longer matches the expected baseline | Update records, configuration records, attestation, lifecycle monitoring |
| Insecure repair, resale, or transfer | Trust state changes after repair or ownership transfer without being re-established | Repair records, re-provisioning evidence, revocation, transfer records |
| Poor end-of-life handling | Devices, credentials, keys, or sensitive data remain usable after retirement | Decommissioning records, revocation logs, cryptographic erase evidence |
| Key or credential compromise | Device or supplier credentials are cloned, extracted, reused, or not hardware-bound | Hardware-rooted identity, TPM, DICE, Secure Element evidence, credential issuance logs |
| Lack of continuous monitoring | Product is accepted once but not checked after updates, repair, or operation | Lifecycle assurance records, attestation cadence, vulnerability and update evidence |

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

- Use [Lifecycle Map](./lifecycle-map.md) to decide when each risk matters.
- Use [10 Best Practices](./10-best-practices.md) to connect risk themes to practices.
- Use [Evidence](../evidence/index.md) to identify artifacts and verification paths.
