---
title: Technology Options
sidebar_label: Overview
sidebar_position: 1
---

Technology options are mechanisms, protocols, formats, trust anchors, verifier workflows, tooling, and implementation patterns that may help produce, protect, exchange, verify, or retain evidence. Their presence in this handbook does not mean they are mandatory for every product, sector, or assurance scenario.

This section does not organize the site around standards bodies. It starts from supply-chain-security decisions, evidence needs, lifecycle stages, and verification questions. Standards and regulations belong with [Standards & Threats](../standards-threats/standards-regulatory-drivers/index.md); assurance and evidence models belong with [Evidence](../evidence/evidence-models.md).

## Technology Option Roles

| Type | Role in the handbook | Examples |
|---|---|---|
| Transparency artifacts | Provide product, software, firmware, component, dependency, or vulnerability transparency | SBOM/xBOM, SPDX, CycloneDX, VEX-like records |
| Attestation and measurement | Provide current-state, expected-state, or verifier-appraisal evidence | Measured boot, RIMs, TPM, DICE, SPDM, IETF RATS/EAT, CoRIM/CoMID |
| Trust anchors | Provide identities, keys, credentials, roots of trust, or secure execution context | TCG, GlobalPlatform, TPM, DICE, TEE, Secure Element, OCP SAFE/Caliptra |
| Protocols and exchange | Move evidence between producers, verifiers, relying parties, repositories, and audit workflows | SPDM, RATS evidence exchange, SBOM distribution, evidence repositories |

## Section Routes

| Page | Use it to understand... |
|---|---|
| [Transparency Artifacts](./transparency-artifacts.md) | SBOM, xBOM, vulnerability, and component transparency formats, including SPDX and CycloneDX |
| [Attestation & Measurement](./attestation-measurement.md) | Current-state evidence, reference measurements, and verifier workflows, including measured boot, RIMs, SPDM, and RATS/EAT |
| [Trust Anchors](./trust-anchors.md) | Hardware-rooted identity, credentials, keys, and secure environments, including TCG, GlobalPlatform, TPM, DICE, TEE, Secure Element, and OCP SAFE/Caliptra |
| [Protocols & Exchange](./protocols-exchange.md) | Exchange, verification, and transport mechanisms for evidence, including SPDM, RATS evidence exchange, SBOM/xBOM distribution, and evidence repositories |

## Mapping Confidence

| Mapping type | Meaning |
|---|---|
| Direct | The standard or specification directly defines a mechanism, artifact, or assurance model for this issue |
| Supporting | It helps implement, exchange, protect, or verify relevant evidence |
| Contextual | It explains the standard, threat, or governance expectation |
| Adjacent | It may be relevant in some sectors or architectures, but is not central |
| Gap | The area may need future profiling, interpretation, or implementation guidance |

## Entry Pattern

For each technology option, standard, framework, or mechanism in this section, explain:

- Role: what problem it helps with.
- Lifecycle fit: where it applies.
- Evidence supported: what artifact, assurance model, or verification path it supports.
- What it does not solve: limits and non-goals.
- Mapping confidence: direct, supporting, contextual, adjacent, or gap.

## Practical Questions

### Questions to ask suppliers

- Which standard, framework, technology, or specification are you using, and what evidence does it support?
- What version, profile, implementation scope, or certification claim is relevant?
- What does the source not prove about the product, supplier, or lifecycle state?

### Questions to ask internally

- Are we using this as an artifact format, trust anchor, protocol, verifier workflow, tooling pattern, or implementation option?
- What mapping confidence applies: direct, supporting, contextual, adjacent, or gap?
- What additional evidence or interpretation is needed before relying on the mapping?

### Questions to ask assessors / auditors

- Is the source reference and mapping rationale reviewable?
- Are advisory mappings clearly labeled as guidance?
- Are endorsement, compliance, and certification claims avoided unless directly supported?

### Questions to ask implementers

- What technical or process capability is needed to make this standard or technology useful in practice?
- What verifier policy, trust anchor, evidence format, repository, or exchange path is required?
- How will mappings be maintained as source versions and product implementations change?

## Editorial Guardrails

- Do not imply endorsement by a standards body unless formally confirmed.
- Do not say a standard requires something unless the source clearly says so.
- Prefer "may support", "can be used for", "is commonly associated with", or "is relevant to" for advisory mappings.
- Label interpretive mappings as guidance.
- Keep source references and versions visible where relevant.
