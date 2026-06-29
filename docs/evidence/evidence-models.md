---
title: Assurance & Evidence Models
sidebar_position: 8
---

Assurance and evidence models help structure claims, measurements, reference values, manifests, certificates, attestations, and other artifacts that support assurance decisions. They belong in Evidence because they define how artifacts can be shaped and interpreted, not because they are always implementation mechanisms.

## Mapping Summary

| Field | Guidance |
|---|---|
| Role | Defines or supports the shape, semantics, or verification path for evidence. |
| Lifecycle fit | Manufacturing, provisioning, acceptance, deployment, update, audit, repair, transfer. |
| Evidence supported | Attestation evidence, reference measurements, manifests, claims, certificates, endorsements, verifier results. |
| What it does not solve | Does not by itself decide what evidence is sufficient for a sector, product, customer, or procurement requirement. |
| Mapping confidence | Direct when the specification defines the evidence model; supporting when it helps package or interpret evidence. |

## Entries

This page is the canonical place for evidence-model and assurance-model roles. Technology pages may mention the same sources where they act as implementation, protocol, or verifier-workflow options.

### IETF RATS / EAT

- **Role:** Supports remote attestation concepts and evidence/claim structures for communicating attester state to verifiers and relying parties.
- **Lifecycle fit:** Provisioning, acceptance, deployment, runtime monitoring, update, repair, audit, and service admission decisions.
- **Evidence supported:** Attestation evidence, claims about device or platform state, freshness, verifier appraisal results, and relying-party decisions.
- **What it does not solve:** Does not choose the product policy, reference values, trust anchors, or procurement sufficiency criteria.
- **Mapping confidence:** Direct for attestation evidence models and claim structures; supporting for broader lifecycle assurance workflows.
- **Source/version note:** Use IETF RATS architecture references and Entity Attestation Token sources such as RFC 9711 and RFC 9782; cite the exact RFC or datatracker record used.

### CoRIM / CoMID

- **Role:** Supports reference values, endorsements, and measurement-related metadata used to appraise attestation or integrity evidence.
- **Lifecycle fit:** Manufacturing, release, acceptance, deployment, update, monitoring, and audit.
- **Evidence supported:** Reference measurements, endorsements, manifests, measurement metadata, and verifier inputs.
- **What it does not solve:** Does not prove current state without measured evidence, verifier policy, and trusted collection mechanisms.
- **Mapping confidence:** Direct for reference/endorsement models; supporting for attestation workflows.
- **Source/version note:** Use the IETF RATS CoRIM/CoMID Internet-Draft, currently draft-ietf-rats-corim-10 as of 2026-03; cite draft status and revision because it may change.

### Attestation evidence

- **Role:** A general evidence class for signed or protected claims about measured or asserted state.
- **Lifecycle fit:** Acceptance, deployment, runtime monitoring, update validation, repair return-to-service, and audit.
- **Evidence supported:** Measurements, state claims, freshness, verifier results, and policy appraisal outputs.
- **What it does not solve:** Does not prove provenance, vulnerability remediation, or compliance without context and supporting evidence.
- **Mapping confidence:** Direct as an evidence class; exact confidence depends on the concrete mechanism and source.
- **Source/version note:** Map to specific attestation specifications such as IETF RATS/EAT, CoRIM/CoMID, TCG, DICE, TPM, or SPDM depending on the claim being made.

## Practical Questions

### Questions to ask suppliers

- Which standard, framework, or technology are you relying on, and for what assurance decision?
- What evidence does it help produce, protect, exchange, verify, or retain?
- What product, component, platform, service, or lifecycle stage is the evidence bound to?

### Questions to ask internally

- Are we treating this source as an evidence model, artifact format, implementation option, requirement source, or contextual reference?
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

- [Evidence](./index.md)
- [Integrity & Attestation](./integrity-attestation.md)
- [Attestation & Measurement](../technology-options/attestation-measurement.md)
- [Protocols & Exchange](../technology-options/protocols-exchange.md)
- [10 Best Practices](../practices-controls/10-best-practices.md)
- [Standards Mapping Workflow](../resources/standards-mapping-workflow.md)
