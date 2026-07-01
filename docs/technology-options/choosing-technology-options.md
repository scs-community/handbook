---
title: Choosing Supply Chain Security Technology Options
sidebar_position: 2
sidebar_label: Choosing Technology Options
description: "Choose supply chain security technology options by starting with assurance decisions, evidence needs, verification paths, constraints, and operating maturity."
---

Technology choices should start from the assurance decision, not from the acronym. A mechanism is useful when it helps operate a control, produce or protect evidence, exchange that evidence with the right party, or verify that the evidence is still meaningful.

This page helps teams decide which option areas are relevant without turning any single technology into a blanket requirement.

## Start with the assurance need

| Assurance need | Useful option areas | Evidence or workflow supported |
|---|---|---|
| Identify a device, product, component, platform, or supplier-provided service | [Trust Anchors & Device Identity](./trust-anchors-device-identity.md), [Signing, Keys & Credential Mechanisms](./signing-keys-credentials.md) | Device identity, platform identity, certificate chains, key lifecycle records, credential issuance records |
| Show what software, firmware, component, dependency, or vulnerability information is present | [Transparency Artefacts & Component Visibility](./sbom-vex-component-visibility.md) | SBOM/xBOM records, component inventories, vulnerability status records, dependency metadata |
| Compare measured or reported state against expected state | [Attestation & Measured State](./attestation-measured-state.md), [Evidence Exchange & Verifier Workflows](./evidence-exchange-verifier-workflows.md) | Measurements, reference values, attestation evidence, verifier appraisal results |
| Protect release, update, recovery, or evidence artefacts from unauthorised change | [Signing, Keys & Credential Mechanisms](./signing-keys-credentials.md), [Update & Recovery Mechanisms](./secure-update-recovery-mechanisms.md) | Signed releases, update authorisation records, recovery artefacts, key-use logs |
| Exchange evidence between suppliers, product teams, operators, assessors, and customers | [Evidence Exchange & Verifier Workflows](./evidence-exchange-verifier-workflows.md) | Evidence requests, attestation exchange, SBOM distribution, verifier policies, APIs |
| Retain evidence for acceptance, audit, renewal, vulnerability response, or incident review | [Evidence Repositories, Logs & Retention](./evidence-repositories-logs-retention.md) | Evidence packages, repository metadata, verifier logs, access records, retention records |

## Selection questions

### What decision will the option support?

Name the decision first: supplier selection, product acceptance, release approval, update eligibility, vulnerability response, audit readiness, transfer, repair return-to-service, or decommissioning. If the decision is unclear, the technology choice will be hard to justify.

### What evidence is needed?

Identify whether the decision needs identity evidence, composition evidence, measured-state evidence, signed artefacts, vulnerability status, lifecycle-state records, verifier results, or retained audit material. Then choose options that support that evidence type.

### Who needs to verify it?

Evidence may be verified by an internal product team, procurement team, operator, customer, auditor, assessor, automated verifier, or relying-party service. The recipient affects format, transport, trust anchor, retention, and explanation requirements.

### What has to exist around it?

Most options need supporting practices: key governance, supplier obligations, release controls, reference-value management, repository access controls, verifier policies, exception handling, and evidence retention. A mechanism without the surrounding practice is usually weak assurance.

### What does it not prove?

Record the limits explicitly. An SBOM does not prove components are safe. A signature does not prove content is acceptable. Attestation does not prove provenance without expected-state baselines. A repository does not make evidence trustworthy unless origin, integrity, access, and interpretation are preserved.

If the answer is "we do not know", record that as a limit rather than treating the technology as assurance.

## Selection pattern

Use this pattern when choosing or documenting a technology option:

| Step | Question |
|---|---|
| Practice/control need | Which practice or control is this supporting? |
| Evidence need | What record, claim, artefact, measurement, log, or appraisal result is needed? |
| Technology option | Which mechanism, format, protocol, repository, tooling category, or workflow may help? |
| Dependencies | What keys, trust anchors, policies, baselines, repositories, tools, or roles must exist? |
| Verification | Who verifies the evidence, against what policy, and how often? |
| Limits | What would remain unproven or require manual review? |
| Retention | How long must the evidence remain available, explainable, and bound to the product or lifecycle state? |

## Supplier and implementer questions

### Questions to ask suppliers

- Which technology option are you using, and what assurance decision does it support?
- What evidence does it produce, protect, exchange, verify, or retain?
- What product, component, platform, service, release, or lifecycle state is the evidence bound to?
- What version, profile, implementation scope, or certification claim is relevant?
- What does this option not prove without additional controls or evidence?

### Questions to ask internally

- Are we treating this as a requirement, evidence format, implementation option, verifier workflow, repository pattern, or contextual reference?
- What mapping confidence applies: direct, supporting, contextual, adjacent, or gap?
- Who is responsible for verifier policy, exception handling, retention, and refresh?

### Questions to ask assessors or auditors

- Is the source, version, mapping rationale, and implementation scope visible enough to review?
- Are advisory mappings clearly labelled as guidance?
- Are endorsement, compliance, and certification claims avoided unless directly supported?

## Related pages

- [Practices & Controls](../practices-controls/index.md)
- [Evidence Checklist](../resources/evidence-checklist.md)
- [Evidence Maturity Model](../resources/evidence-maturity-model.md)
- [Evidence Package Template](../resources/evidence-package-template.md)
- [Standards & Technology Mapping Workflow](../resources/standards-evidence-technology-mapping.md)
