---
title: Attestation & Measured State
sidebar_position: 4
---

Attestation and measured-state technologies can help a recipient evaluate whether a device, platform, firmware set, component, or configuration is in an expected state.

This option area is useful when acceptance, deployment, update, repair, or monitoring decisions depend on comparing reported state with reference values, verifier policy, and lifecycle context.

## What this option area is for

Attestation and measured-state options may support:

- measured boot and state measurement;
- reference integrity measurements and expected-state baselines;
- attestation evidence and claims;
- verifier appraisal results;
- current-state or update-state checks.

They are commonly relevant to [Product Acceptance](../practices-controls/product-acceptance.md), [Secure Development & Release Governance](../practices-controls/secure-development-release-governance.md), [Secure Update & Lifecycle Monitoring](../practices-controls/secure-update-lifecycle-monitoring.md), and [Audit & Compliance Readiness](../practices-controls/audit-compliance-readiness.md).

## Where it fits

| Lifecycle stage | How it may help |
|---|---|
| Release | Define expected measurements, reference values, and verifier policy |
| Acceptance | Compare delivered product state with expected state before acceptance |
| Deployment and operation | Support runtime or periodic checks where appropriate |
| Update and recovery | Check whether the installed or recovered state matches an authorised state |
| Repair and audit | Support return-to-service, exception review, and audit explanations |

## Options covered

### Measured boot

- **Assurance role:** Measures boot components or platform state so a verifier can compare reported values with expected reference values.
- **Evidence supported:** Measurement logs, reference measurement comparison, attestation inputs, and verifier appraisal records.
- **Lifecycle fit:** Manufacturing, acceptance, deployment, update validation, runtime monitoring, and repair return-to-service.
- **Dependencies:** Trust anchor, reference values, verifier workflow, appraisal policy, and response process for unexpected state.
- **What it does not prove:** Does not define acceptable policy, prove provenance, or remediate unexpected state without operational response.
- **Mapping confidence:** Direct as a measurement mechanism; supporting for lifecycle assurance.
- **Source/version note:** Cite the specific platform technology or specification, such as TPM/TCG, DICE, SPDM, or another platform reference.

### Reference Integrity Measurements

- **Assurance role:** Provide expected measurements or reference values used to appraise measured or attested state.
- **Evidence supported:** Reference values, manifests, measurement metadata, and verifier inputs.
- **Lifecycle fit:** Release, acceptance, deployment, update, monitoring, audit, and repair.
- **Dependencies:** Release governance, version binding, trusted publication path, update handling, and verifier access.
- **What it does not prove:** Do not prove current state without measured evidence and an appraisal workflow.
- **Mapping confidence:** Direct for integrity comparison; supporting for acceptance and monitoring workflows.
- **Source/version note:** Cite the exact RIM, CoRIM, CoMID, or platform-specific reference-value source and version.

### SPDM

- **Assurance role:** Can support device or component authentication, measurement access, and secure communication in applicable architectures.
- **Evidence supported:** Protocol-level authentication, measurement-related evidence, secure session state, and device or component security properties.
- **Lifecycle fit:** Platform or component acceptance, device communication, measurement collection, deployment, and monitoring.
- **Dependencies:** Architecture support, endpoint identity, measurement sources, verifier interpretation, and lifecycle records.
- **What it does not prove:** Does not decide whether evidence is sufficient or handle full lifecycle retention by itself.
- **Mapping confidence:** Direct for protocol mechanisms; supporting for product assurance workflows.
- **Source/version note:** Cite DMTF DSP0274 Security Protocol and Data Model (SPDM) Specification with the exact version used.

### IETF RATS / EAT

- **Assurance role:** Supports remote attestation architecture and evidence claims used in current-state appraisal.
- **Evidence supported:** Attestation evidence, claims, freshness, verifier appraisal, and relying-party results.
- **Lifecycle fit:** Acceptance, deployment, monitoring, update validation, service admission, and audit.
- **Dependencies:** Attester identity, verifier policy, appraisal rules, freshness handling, and relying-party interpretation.
- **What it does not prove:** Does not define platform-specific measurements, baselines, or procurement sufficiency rules.
- **Mapping confidence:** Direct for attestation architecture and evidence claims; supporting for lifecycle assurance.
- **Source/version note:** Cite the specific IETF RATS architecture and Entity Attestation Token sources used, such as the relevant RFC or datatracker record.

### CoRIM / CoMID

- **Assurance role:** Can support reference-value and measurement metadata used by attestation and appraisal workflows.
- **Evidence supported:** Reference measurements, manifests, measured-state metadata, and verifier inputs.
- **Lifecycle fit:** Release, acceptance, update, monitoring, audit, and repair.
- **Dependencies:** Trusted publication, product and version binding, verifier ingestion, and change-control processes.
- **What it does not prove:** Does not show current state without attested measurements and appraisal results.
- **Mapping confidence:** Direct for reference-value or measurement metadata roles where applicable; supporting for broader assurance.
- **Source/version note:** Cite the exact CoRIM, CoMID, or related source and version used.

## What these options can support

Attestation and measured-state options can support acceptance checks, update eligibility decisions, repair return-to-service, runtime trust decisions, and audit explanations. They can make state claims more reviewable when combined with reference values and verifier policy.

Unexpected or missing measurements should trigger review, exception handling, remediation, quarantine, or risk acceptance; otherwise appraisal results do not change assurance outcomes.

## What they do not solve alone

They do not prove supplier intent, component provenance, vulnerability remediation, or regulatory compliance by themselves. They also do not decide what state is acceptable; that decision belongs in control policy, release governance, and risk acceptance.

## What must exist around them

- trust anchors and identity binding;
- expected-state baselines and reference values;
- verifier policy and appraisal workflow;
- freshness and replay protection where relevant;
- exception handling for unexpected, missing, stale, or conflicting state;
- retention of measurements, appraisals, and decisions where audit or reuse is needed.

## Evidence they may produce, protect, exchange, or verify

- measurement logs;
- reference values and expected-state manifests;
- attestation evidence and claims;
- verifier appraisal results;
- update-state or recovery-state records;
- exception records for unexpected measurements.

## Verification considerations

Verification should check whether the evidence came from the expected product or component, whether reference values match the release or lifecycle state, whether evidence freshness is adequate, whether appraisal policy is documented, and whether unexpected state triggers review.

## Tooling categories

- measurement collection;
- reference-value management;
- attestation brokers and verifiers;
- appraisal policy engines;
- evidence exchange APIs;
- monitoring and exception dashboards;
- repository integration for attestation records.

## Supplier and implementer questions

- What measured state can the product, component, platform, or service report?
- What reference values or expected-state baselines are available?
- Who operates the verifier, and what policy does it apply?
- How are updates, repair, recovery, and configuration changes reflected in expected state?
- What happens when measured state is unavailable, stale, or unexpected?

## Related pages

- [Choosing Technology Options](./choosing-technology-options.md)
- [Trust Anchors & Device Identity](./trust-anchors-device-identity.md)
- [Evidence Exchange & Verifier Workflows](./evidence-exchange-verifier-workflows.md)
- [Evidence Glossary](../resources/evidence-glossary.md)
- [Product Acceptance](../practices-controls/product-acceptance.md)
- [Secure Update & Lifecycle Monitoring](../practices-controls/secure-update-lifecycle-monitoring.md)
- [Software and Update-Chain Compromise](../standards-threats/threats-failure-modes/software-update-chain-compromise.md)
