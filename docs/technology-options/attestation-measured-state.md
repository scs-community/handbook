---
title: Attestation and Measured State
sidebar_position: 4
description: "Use attestation and measured state to support evidence about configuration, boot state, runtime posture, policy compliance, and verifier confidence."
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

They are commonly relevant to [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md), [Secure Development and Release Governance](../practices-controls/secure-development-release-governance.md), [Secure Updates and Lifecycle Monitoring](../practices-controls/secure-updates-lifecycle-monitoring.md), and [Audit and Compliance Readiness](../practices-controls/audit-compliance-readiness.md).

## Where it fits

| Lifecycle stage | How it may help |
|---|---|
| Release | Define expected measurements, reference values, and verifier policy |
| Acceptance | Compare delivered product state with expected state before acceptance |
| Deployment and operation | Support runtime or periodic checks where appropriate |
| Update and recovery | Check whether the installed or recovered state matches an authorized state |
| Repair and audit | Support return-to-service, exception review, and audit explanations |

## Options covered

### Measured boot

[EN 304 623 § 4.2.1](https://www.etsi.org/deliver/etsi_en/304600_304699/304623/00.01.03_20/en_304623v000103ev.pdf#page=22)

Measured boot records measurements of boot components or platform state so that a verifier can compare them with expected values. In this handbook, measured boot is useful only when measurements are tied to reference values, verifier policy, lifecycle context, and a decision about the product or component state.

Measured boot is a pattern that can be implemented through different platform technologies, such as TPM Platform Configuration Registers (PCRs), [DICE](https://www.trustedcomputinggroup.org/resources/documents/dice-attestation-architecture)-derived identities, BIT-style measurement reporting, or other protected measurement storage. Implementations may be exposed through platform firmware, embedded firmware, device-management agents, or attestation services. The assurance question is which implementation produced the measurements and how a verifier can interpret them.

- **Assurance role:** Measures boot components or platform state so a verifier can compare reported values with expected reference values.
- **Evidence supported:** Measurement logs, reference measurement comparison, attestation inputs, and verifier appraisal records.
- **Lifecycle fit:** Manufacturing, acceptance, deployment, update validation, runtime monitoring, and repair return-to-service.
- **Dependencies:** Trust anchor, reference values, verifier workflow, appraisal policy, and response process for unexpected state.
- **What it does not prove:** Does not define acceptable policy, prove provenance, or remediate unexpected state without operational response.
- **Mapping confidence:** Direct as a measurement mechanism; supporting for lifecycle assurance.
- **Source/version note:** Cite the specific platform technology or specification, such as TPM/TCG, DICE, Block Integrated Trust (BIT), SPDM, or another platform reference.

### Reference Integrity Measurements (RIMs)

[CRA Art. 31](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_31)

Reference Integrity Measurements (RIMs) describe expected measurements or reference values used to appraise measured or attested state. In this handbook, RIMs help make measured-state evidence reviewable, but they still need trusted publication, version binding, and verifier interpretation.

RIM-style reference values are only useful when their format, publisher, signature or integrity mechanism, product/version binding, and distribution path are clear. A reference value without trusted publication and update handling can make measured-state checks look stronger than they are.

- **Assurance role:** Provide expected measurements or reference values used to appraise measured or attested state.
- **Evidence supported:** Reference values, manifests, measurement metadata, and verifier inputs.
- **Lifecycle fit:** Release, acceptance, deployment, update, monitoring, audit, and repair.
- **Dependencies:** Release governance, version binding, trusted publication path, update handling, and verifier access.
- **What it does not prove:** Do not prove current state without measured evidence and an appraisal workflow.
- **Mapping confidence:** Direct for integrity comparison; supporting for acceptance and monitoring workflows.
- **Source/version note:** Cite the exact RIM, CoRIM, CoMID, or platform-specific reference-value source and version.

### Security Protocol and Data Model (SPDM)

Security Protocol and Data Model (SPDM) is a DMTF protocol for device or component authentication, measurement access, and secure communication in applicable architectures. In this handbook, SPDM is treated as a technology option for collecting and protecting platform or component evidence, not as a complete assurance workflow by itself.

SPDM support depends on concrete requester and responder implementations, transport binding, endpoint certificates, measurement sources, firmware behavior, and verifier integration. Examples include open-source stacks such as [DMTF libspdm](https://github.com/DMTF/libspdm) and SPDM support integrated into platform firmware, device firmware, or management-controller ecosystems. A product claim that it "supports SPDM" should identify the implemented version, endpoints, measurements, and policy assumptions.

- **Assurance role:** Can support device or component authentication, measurement access, and secure communication in applicable architectures.
- **Evidence supported:** Protocol-level authentication, measurement-related evidence, secure session state, and device or component security properties.
- **Lifecycle fit:** Platform or component acceptance, device communication, measurement collection, deployment, and monitoring.
- **Dependencies:** Architecture support, endpoint identity, measurement sources, verifier interpretation, and lifecycle records.
- **What it does not prove:** Does not decide whether evidence is sufficient or handle full lifecycle retention by itself.
- **Mapping confidence:** Direct for protocol mechanisms; supporting for product assurance workflows.
- **Source/version note:** Cite DMTF DSP0274 Security Protocol and Data Model (SPDM) Specification with the exact version used.

### Remote Attestation Procedures (RATS) / Entity Attestation Token (EAT)

The Remote Attestation Procedures (RATS) architecture describes roles for remote attestation, while Entity Attestation Token (EAT) provides a token format for attestation claims. In this handbook, RATS and EAT are useful when measured or claimed state must be appraised and communicated to a relying party.

RATS and EAT are architectural and token-building blocks. Real assurance depends on the attester implementation, token profile, signing keys, freshness mechanism, verifier policy, and relying-party decision flow. Example deployments may use platform attestation services, device-management services, cloud workload attestation, or custom verifiers, with implementation examples such as [Veraison](https://github.com/veraison), [veraison/eat](https://github.com/veraison/eat), or embedded token libraries such as [ctoken](https://github.com/laurencelundblade/ctoken), rather than a single standard product.

- **Assurance role:** Supports remote attestation architecture and evidence claims used in current-state appraisal.
- **Evidence supported:** Attestation evidence, claims, freshness, verifier appraisal, and relying-party results.
- **Lifecycle fit:** Acceptance, deployment, monitoring, update validation, service admission, and audit.
- **Dependencies:** Attester identity, verifier policy, appraisal rules, freshness handling, and relying-party interpretation.
- **What it does not prove:** Does not define platform-specific measurements, baselines, or procurement sufficiency rules.
- **Mapping confidence:** Direct for attestation architecture and evidence claims; supporting for lifecycle assurance.
- **Source/version note:** Cite the specific IETF RATS architecture and Entity Attestation Token sources used, such as the relevant RFC or datatracker record.

### Concise Reference Integrity Manifest (CoRIM) / Concise Module Identifier (CoMID)

Concise Reference Integrity Manifest (CoRIM) and Concise Module Identifier (CoMID) are formats for reference values and measurement metadata used in attestation and appraisal workflows. In this handbook, they support expected-state management rather than proving current state by themselves.

CoRIM and CoMID artifacts need an implementation context: who produces them, how they are signed or distributed, which products and versions they describe, and how verifiers ingest and supersede them. Examples include Veraison's [cocli](https://github.com/veraison/cocli), [corim-rs](https://github.com/veraison/corim-rs), [cover](https://github.com/veraison/cover), and Azure's [corim](https://github.com/azure/corim) tooling.

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
- [Trust Anchors and Device Identity](./trust-anchors-device-identity.md)
- [Evidence Exchange and Verifier Workflows](./evidence-exchange-verifier-workflows.md)
- [Glossary](../resources/glossary.md)
- [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md)
- [Secure Updates and Lifecycle Monitoring](../practices-controls/secure-updates-lifecycle-monitoring.md)
- [Software and Update-Chain Compromise](../standards-threats/threats/software-update-chain-compromise.md)
