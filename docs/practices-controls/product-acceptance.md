---
title: Product Acceptance
sidebar_position: 6
---

## Decision

A buyer, operator, integrator, or assessor needs to decide whether a delivered device, component, platform, or product is genuine, untampered, supportable, and in an expected trust state.

Delivery is a decision point, not the end of assurance. A product can arrive with missing provenance, unexpected firmware, counterfeit components, stale vulnerability information, or unverifiable supplier claims. Acceptance should establish the baseline for later deployment, update, repair, transfer, and decommissioning decisions.

## What Can Go Wrong

- A delivered item contains counterfeit, substituted, lower-grade, reused, or unauthorized components.
- Firmware or low-level code has changed before delivery.
- Device identity is not bound to a trustworthy manufacturer, product family, or trust anchor.
- Provenance records are missing or inconsistent.
- Update history and vulnerability status are unclear.
- The supplier cannot provide a verification path for identity, integrity, or lifecycle-state claims.

## Good Practice

A stronger product-acceptance process combines identity checks, provenance checks, transparency artifacts, integrity evidence, update history, vulnerability handling, and lifecycle-state records. It defines who verifies each artifact and what happens if evidence is missing or inconsistent.

Use this page for the acceptance decision context. Use [Supplier Questions](../resources/supplier-questions.md) to request missing evidence and the [Evidence Checklist](../resources/evidence-checklist.md) to document acceptance criteria.

## What To Ask For

### Questions to ask suppliers

- What identity evidence identifies this device, component, platform, or product?
- What provenance, configuration, firmware, software, update, and vulnerability evidence applies to the delivered version?
- What evidence changed after manufacturing, logistics, integration, repair, or final delivery?

### Questions to ask internally

- What evidence is required before acceptance, and who can approve exceptions?
- Which checks need to be repeated after deployment, update, repair, transfer, or resale?
- What conditions trigger rejection, quarantine, remediation, or additional review?

### Questions to ask assessors / auditors

- Can each accepted product be tied to the evidence used for the acceptance decision?
- Are acceptance records retained with enough context to be reviewed later?
- Are missing or stale artifacts visible in the acceptance decision trail?

### Questions to ask implementers

- What acceptance workflow verifies identity, provenance, integrity, transparency, and update state?
- How are evidence artifacts bound to serial numbers, product versions, firmware versions, or asset records?
- How will acceptance results flow into asset management and lifecycle monitoring systems?

## Evidence / Artifacts

| Evidence type | Acceptance role |
|---|---|
| Identity evidence | Confirms the item is the expected device, component, platform, or product |
| Provenance evidence | Shows origin, custody, manufacturing, logistics, and transfer history |
| Integrity evidence | Shows whether firmware, configuration, and platform state match expectations |
| Transparency artifacts | Support vulnerability analysis and component risk decisions |
| Update records | Show whether updates were authorized, installed, recoverable, and current |
| Vulnerability records | Show known exposures, remediation, mitigations, or accepted risk |
| Lifecycle-state records | Establish the baseline for deployment, repair, transfer, and decommissioning |

## Weak Answer

The supplier states the product is authentic and secure.

## Stronger Answer

A better answer: The supplier provides process documentation for identity, provenance, update, and vulnerability handling.

A stronger answer: The supplier provides identity evidence, provenance records, firmware/version evidence, update history, vulnerability status, integrity measurements or attestation results, and a clear verification workflow.

## Lifecycle Stages

Acceptance evidence should not be discarded after the product is accepted. It becomes the baseline for deployment, update, monitoring, repair, transfer, audit, and decommissioning.

## Technology Options

Relevant mappings may include Platform Certificates, TPM, DICE, Secure Element, TEE, SPDM, measured boot, RATS/EAT, CoRIM/CoMID, SBOM/xBOM formats, and update-signing mechanisms. Use them as candidate implementation and verification options, not as universal requirements.

## Verification

Acceptance evidence is stronger when reviewers can verify issuer, product binding, integrity, freshness, lifecycle stage, and consistency across artifacts. When evidence is missing or inconsistent, record whether the decision is reject, quarantine, accept with conditions, or remediate before acceptance.

## Related Pages

- [Requirements & Risks](../requirements/index.md)
- [Attack & Failure Modes](../requirements/attack-failure-modes.md)
- [Lifecycle Map](./lifecycle-map.md)
- [Supplier Questions](../resources/supplier-questions.md)
- [Evidence Checklist](../resources/evidence-checklist.md)
- [Identity & Provenance](../evidence/identity-provenance.md)
- [Integrity & Attestation](../evidence/integrity-attestation.md)
- [Update & Vulnerability](../evidence/update-vulnerability.md)
