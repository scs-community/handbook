---
title: Evidence
sidebar_label: Overview
sidebar_position: 1
---

Evidence is any artifact, record, claim, measurement, attestation, certificate, manifest, SBOM/xBOM, update record, vulnerability record, lifecycle-state record, log, or audit material that demonstrates whether supply-chain-security controls are operating.

Evidence may be human-readable, machine-readable, signed, measured, hardware-rooted, process-based, or audit-derived. This section distinguishes evidence that merely asserts or documents a process from evidence that can be produced, verified, retained, and reused across lifecycle decisions.

## Evidence Pages

| Evidence area | Decision it supports |
|---|---|
| [Identity & Provenance](./identity-provenance.md) | Is this the expected device, component, platform, supplier, or service, and where did it come from? |
| [Integrity & Attestation](./integrity-attestation.md) | Is this in an expected state now? |
| [Software & Component Transparency](./software-component-transparency.md) | What software, firmware, hardware, or component elements are present? |
| [Update & Vulnerability](./update-vulnerability.md) | Were updates authorized and are known exposures handled? |
| [Lifecycle State & Audit](./lifecycle-state-audit.md) | Is the asset active, repaired, transferred, revoked, retired, or decommissioned? |
| [Retention & Reuse](./retention-reuse.md) | Can evidence remain useful across later lifecycle decisions? |

## Assurance & Evidence Models

Evidence models are not another evidence type. They help define the shape, semantics, or verification path for claims, measurements, attestations, certificates, manifests, and evidence packages. Use [Assurance & Evidence Models](./evidence-models.md) when the question is how evidence should be structured or interpreted.

## Evidence Maturity

| Level | Description |
|---|---|
| Assertion | Supplier says a control exists |
| Documented process | Supplier describes the process, owner, and scope |
| Produced artifact | Supplier provides a record, manifest, certificate, SBOM/xBOM, log, measurement, attestation, or report |
| Verifiable artifact | Recipient can verify integrity, origin, freshness, or consistency |
| Lifecycle-retained evidence | Evidence is retained and updated across deployment, update, repair, transfer, and decommissioning |

## Evidence Page Pattern

Each evidence page should make six things explicit: who produces it, who consumes it, when it is generated, when it is verified, how long it must be retained, and what decision it supports. This keeps evidence requests tied to controls and decisions rather than collecting artifacts for their own sake.

## Practical Questions

### Questions to ask suppliers

- Who produces each evidence type, when is it generated, and what scope does it cover?
- What makes the artifact verifiable: signature, issuer, hash, timestamp, measurement, log, or independent record?
- How long will it remain available, and how will updates or superseded evidence be handled?

### Questions to ask internally

- What decision does the evidence support, and who relies on it?
- What is the minimum useful evidence for the decision, and what would be stronger?
- Where will the evidence be retained so it can be reused after acceptance?

### Questions to ask assessors / auditors

- Can each evidence item be tied to a claim, control, lifecycle stage, product scope, and verification path?
- Are freshness, completeness, exceptions, and retention visible?
- Does the evidence package distinguish assertion, process description, produced artifact, verifiable artifact, and lifecycle-retained evidence?

### Questions to ask implementers

- What system, workflow, or owner produces each evidence item?
- What metadata is needed for later verification and correlation?
- How will evidence be refreshed after update, repair, transfer, vulnerability disclosure, or decommissioning?

## Practical Use

Use this section with the [Evidence Checklist](../resources/evidence-checklist.md), [Supplier Questions](../resources/supplier-questions.md), and the [Lifecycle Map](../practices-controls/lifecycle-map.md). When an evidence need requires a format, trust anchor, verifier workflow, protocol, repository, or tool, continue to [Technology Options](../technology-options/index.md).
