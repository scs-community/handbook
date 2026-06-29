---
title: Protocols & Exchange
sidebar_position: 7
---

Protocols and exchange mechanisms help move evidence between producers, verifiers, relying parties, and repositories. They matter when evidence must be requested, transmitted, verified, retained, or reused.

## Mapping Summary

| Field | Guidance |
|---|---|
| Role | Supports evidence exchange, verification workflows, transport, and interoperability. |
| Lifecycle fit | Acceptance, deployment, runtime monitoring, update, audit, repair, transfer. |
| Evidence supported | Attestation evidence, verifier results, SBOM/xBOM artifacts, vulnerability records, protocol-level security state, signed evidence packages. |
| What it does not solve | Does not decide what evidence is sufficient or who should trust whom without policy, governance, and context. |
| Mapping confidence | Direct when a protocol defines exchange mechanics; supporting when it helps transport or verify evidence in a larger workflow. |

## Entries

### SPDM

- **Role:** Supports secure device/component communication, authentication, and measurement access in applicable platform architectures.
- **Lifecycle fit:** Acceptance, deployment, platform communication, monitoring, update validation, and component assurance.
- **Evidence supported:** Protocol-level authentication evidence, measurement evidence, secure session properties, and verifier inputs.
- **What it does not solve:** Does not define full evidence retention, procurement policy, or lifecycle-state governance.
- **Mapping confidence:** Direct for SPDM protocol mechanisms; supporting for broader assurance workflows.
- **Source/version note:** Use DMTF DSP0274 Security Protocol and Data Model (SPDM) Specification; cite the exact version, such as SPDM 1.4.0 published 2025-05-25, when making protocol claims.

### RATS evidence exchange

- **Role:** Supports exchange of attestation evidence between attesters, verifiers, and relying parties.
- **Lifecycle fit:** Acceptance, deployment, runtime monitoring, service admission, update validation, and audit.
- **Evidence supported:** Attestation evidence, appraisal results, and relying-party decision inputs.
- **What it does not solve:** Does not choose product-specific evidence sufficiency, reference values, or remediation actions.
- **Mapping confidence:** Direct for attestation exchange models; supporting for lifecycle assurance.
- **Source/version note:** Use IETF RATS architecture and Entity Attestation Token sources such as RFC 9711/RFC 9782 or the relevant datatracker record; cite the exact source used.

### SBOM / xBOM distribution

- **Role:** Supports transfer and retention of transparency artifacts between suppliers, buyers, operators, and auditors.
- **Lifecycle fit:** Procurement, release, acceptance, update, vulnerability response, and audit.
- **Evidence supported:** SBOMs, xBOMs, vulnerability records, build provenance, and related artifact metadata.
- **What it does not solve:** Does not prove current integrity or remediation without evidence binding and workflow integration.
- **Mapping confidence:** Supporting unless a specific protocol or repository mechanism is being mapped directly.
- **Source/version note:** For SBOM/xBOM distribution, cite the chosen format, transport/repository mechanism, version, and exchange workflow.

### Evidence repositories

- **Role:** Support storage, retrieval, retention, and reuse of evidence across lifecycle decisions.
- **Lifecycle fit:** Acceptance, deployment, update, repair, transfer, audit, incident response, and decommissioning.
- **Evidence supported:** Signed evidence packages, verifier logs, artifact registries, lifecycle-state records, and audit evidence.
- **What it does not solve:** Does not make evidence trustworthy unless origin, integrity, access, and interpretation are preserved.
- **Mapping confidence:** Supporting; direct only for a specific repository or evidence packaging specification.
- **Source/version note:** For evidence repositories, cite the specific repository architecture, evidence packaging format, signature model, and retention policy used.

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

- [Evidence](../evidence-assurance/index.md)
- [10 Best Practices](../guidance/10-best-practices.md)
- [Standards Gap Analysis](../use-cases/standards-gap-analysis.md)
