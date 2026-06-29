---
title: Attestation & Measurement
sidebar_position: 3
---

Attestation and measurement technologies can support claims about current or measured state. They are useful when a recipient needs evidence that a device, platform, firmware, or configuration is in an expected state.

## Mapping Summary

| Field | Guidance |
|---|---|
| Role | Supports measured state, reference values, verifier workflows, and current-state assurance. |
| Lifecycle fit | Manufacturing, acceptance, deployment, update, runtime monitoring, repair, audit. |
| Evidence supported | Reference integrity measurements, measured boot logs, attestation evidence, verifier results, configuration state. |
| What it does not solve | Does not prove provenance, vulnerability remediation, or compliance without baselines, policy, and interpretation. |
| Mapping confidence | Direct for attestation and measurement mechanisms; supporting for operational monitoring and acceptance workflows. |

## Entries

This page treats overlapping sources as measurement, attestation, or verifier-workflow options. For their evidence-model role, use [Assurance & Evidence Models](../evidence/evidence-models.md).

### Measured boot

- **Role:** Measures boot components or state so a verifier can compare reported values against expected reference values.
- **Lifecycle fit:** Manufacturing, acceptance, deployment, update validation, runtime monitoring, and repair return-to-service.
- **Evidence supported:** Measurement logs, reference measurement comparison, attestation inputs, and verifier appraisal records.
- **What it does not solve:** Does not define acceptable policy, prove provenance, or remediate unexpected state without an operational response.
- **Mapping confidence:** Direct as a measurement mechanism; supporting for lifecycle assurance.
- **Source/version note:** For measured boot claims, cite the specific platform technology or specification, such as TPM/TCG, DICE, SPDM, or another platform reference.

### Reference Integrity Measurements

- **Role:** Provide expected measurements or reference values used to appraise measured or attested state.
- **Lifecycle fit:** Release, acceptance, deployment, update, monitoring, audit, and repair.
- **Evidence supported:** Reference values, manifests, measurement metadata, and verifier inputs.
- **What it does not solve:** Do not prove current state without measured evidence and a verifier workflow.
- **Mapping confidence:** Direct for integrity comparison; supporting for acceptance and monitoring workflows.
- **Source/version note:** For reference measurements, cite the exact RIM, CoRIM, CoMID, or platform-specific reference-value source and version.

### SPDM

- **Role:** Can support security protocol interactions for device/component authentication, measurement access, and secure communication in some architectures.
- **Lifecycle fit:** Platform/component acceptance, device communication, measurement collection, deployment, and monitoring.
- **Evidence supported:** Protocol-level authentication, measurement-related evidence, secure session state, and device/component security properties.
- **What it does not solve:** Does not decide whether evidence is sufficient or handle full lifecycle retention by itself.
- **Mapping confidence:** Direct for protocol mechanisms; supporting for product assurance workflows.
- **Source/version note:** Use DMTF DSP0274 Security Protocol and Data Model (SPDM) Specification; cite the exact version, such as SPDM 1.4.0 published 2025-05-25, when making protocol claims.

### IETF RATS / EAT

- **Role:** Supports remote attestation architecture and evidence claims used in current-state appraisal.
- **Lifecycle fit:** Acceptance, deployment, monitoring, update validation, and audit.
- **Evidence supported:** Attestation evidence, claims, freshness, verifier appraisal, and relying-party results.
- **What it does not solve:** Does not define platform-specific measurements, baselines, or procurement sufficiency rules.
- **Mapping confidence:** Direct for attestation architecture and evidence claims; supporting for lifecycle assurance.
- **Source/version note:** Use IETF RATS architecture and Entity Attestation Token sources such as RFC 9711/RFC 9782 or the relevant datatracker record; cite the exact source used.

## Practical Questions

### Questions to ask suppliers

- Which standard, framework, or technology are you relying on, and for what assurance decision?
- What evidence does it help produce, protect, exchange, verify, or retain?
- What product, component, platform, service, or lifecycle stage is the evidence bound to?

### Questions to ask internally

- Are we treating this source as a requirement, evidence model, artifact format, implementation option, or contextual reference?
- What decision would this mapping support, and what would remain unresolved without additional evidence?
- Is the mapping direct, supporting, contextual, adjacent, or a gap?

### Questions to ask assessors / auditors

- Is the cited source, version, and mapping rationale visible enough to review?
- Does the page avoid implying endorsement, certification, or compliance unless the source supports that claim?
- Are assumptions, trust anchors, verifier workflows, and limits documented?

### Questions to ask implementers

- What data model, protocol, trust anchor, repository, or workflow needs to exist for this mapping to be useful?
- How will evidence be generated, protected, verified, retained, and refreshed?
- What tooling or operational process will make the evidence usable by recipients?

## Related Pages

- [Evidence](../evidence/index.md)
- [Integrity & Attestation](../evidence/integrity-attestation.md)
- [Assurance & Evidence Models](../evidence/evidence-models.md)
- [10 Best Practices](../practices-controls/10-best-practices.md)
- [Standards Mapping Workflow](../resources/standards-mapping-workflow.md)
