---
title: Technology Options
sidebar_label: Overview
sidebar_position: 1
---

Technology options are mechanisms, formats, protocols, trust anchors, verifier workflows, repositories, and tools that may help implement controls or generate, protect, exchange, verify, and retain evidence.

Tooling categories are included where they help readers understand implementation choices, but this section is not a vendor directory or product comparison.

This section is the handbook's technology interpretation layer. It does not make any technology mandatory, and it is not organised as a standards-body catalogue. Start with the practice or control you need to operate, identify the evidence needed to support the assurance decision, then decide which technology options may help.

```text
Practice/control need -> evidence need -> technology option -> verification and limits
```

Standards and regulations belong with [Standards & Threats](../standards-threats/index.md). Control operation and evidence requirements belong with [Practices & Controls](../practices-controls/index.md). Reusable evidence definitions, checklists, and templates belong with [Resources](../resources/index.md).

## How to use this section

| If you need to... | Start with... |
|---|---|
| Decide whether a mechanism is useful for an assurance workflow | [Choosing Technology Options](./choosing-technology-options.md) |
| Bind product, component, device, or platform identity to a trustable root | [Trust Anchors & Device Identity](./trust-anchors-device-identity.md) |
| Check measured or current state against expected state | [Attestation & Measured State](./attestation-measured-state.md) |
| Understand product composition, dependencies, and vulnerability status | [Transparency Artefacts & Component Visibility](./transparency-artefacts-component-visibility.md) |
| Protect releases, evidence, credentials, keys, or authorisation decisions | [Signing, Keys & Credential Mechanisms](./signing-keys-credential-mechanisms.md) |
| Support authorised updates, recovery, rollback control, or post-release assurance | [Update & Recovery Mechanisms](./update-recovery-mechanisms.md) |
| Move evidence between producers, verifiers, relying parties, and tools | [Evidence Exchange & Verifier Workflows](./evidence-exchange-verifier-workflows.md) |
| Retain evidence so it remains usable for audit, renewal, incident review, and lifecycle decisions | [Evidence Repositories, Logs & Retention](./evidence-repositories-logs-retention.md) |

## What technology options can and cannot do

Technology options can help make controls more repeatable, evidence more structured, and verification more scalable. They may provide product identity, signed artefacts, transparency records, measured-state evidence, verifier results, repository records, and audit logs.

They do not replace governance, supplier accountability, acceptance criteria, risk acceptance, or review. A technology option is useful only when the surrounding practice explains what decision the evidence supports, who verifies it, how exceptions are handled, and how stale or conflicting evidence is treated.

## Mapping confidence

| Mapping type | Meaning |
|---|---|
| Direct | The standard or specification directly defines a mechanism, artefact, protocol, or evidence model for the issue |
| Supporting | It can help implement, exchange, protect, verify, or retain relevant evidence |
| Contextual | It explains a standard, threat, assurance model, or governance expectation |
| Adjacent | It may be relevant in some sectors or architectures, but is not central to the control |
| Gap | The area needs future profiling, interpretation, or implementation guidance |

## Entry pattern

Where this section lists individual standards, specifications, mechanisms, or tooling patterns, use the same compact pattern:

- Assurance role: what problem it helps with.
- Evidence supported: what artefact, record, claim, or verification result it may support.
- Lifecycle fit: where it is commonly relevant.
- Dependencies: what trust anchors, policies, repositories, verifier workflows, or operational practices must exist around it.
- What it does not prove: limits and non-goals.
- Mapping confidence: direct, supporting, contextual, adjacent, or gap.
- Source/version note: the specific source, version, profile, or implementation scope that should be cited.

## Editorial guardrails

- Do not imply that a technology is mandatory unless a cited source clearly requires it.
- Do not imply standards-body endorsement, certification, or compliance unless directly supported.
- Prefer "may support", "can help", or "is commonly used for".
- Explain what the option does not prove by itself.

## Related starting points

- [Choosing Technology Options](./choosing-technology-options.md)
- [Practices & Controls](../practices-controls/index.md)
- [Evidence Checklist](../resources/evidence-checklist.md)
- [Glossary](../resources/glossary.md)
- [Evidence Package Template](../resources/evidence-package-template.md)
- [Standards & Technology Mapping Workflow](../resources/standards-technology-mapping-workflow.md)
