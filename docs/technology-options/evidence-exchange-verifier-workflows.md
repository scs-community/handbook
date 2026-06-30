---
title: Evidence Exchange & Verifier Workflows
sidebar_position: 8
---

Evidence exchange and verifier workflows move evidence between producers, verifiers, relying parties, customers, operators, repositories, and audit workflows. Relying parties are the teams, services, customers, or workflows that make decisions based on verifier results. These workflows matter when evidence must be requested, transmitted, appraised, explained, or reused.

This option area is useful when the assurance decision depends not only on the artefact, but also on who receives it, how it is verified, what policy is applied, and what result is given to the relying party.

## What this option area is for

Evidence exchange and verifier workflows may support:

- evidence requests and responses;
- attestation exchange and appraisal;
- SBOM, xBOM, vulnerability, or lifecycle evidence distribution;
- verifier policy and relying-party decisions;
- API, portal, repository, or automated evidence workflows.

They are commonly relevant to [Product Acceptance](../practices-controls/product-acceptance.md), [Secure Update & Lifecycle Monitoring](../practices-controls/secure-update-lifecycle-monitoring.md), [Audit & Compliance Readiness](../practices-controls/audit-compliance-readiness.md), and [Assurance Implementation Planning](../practices-controls/assurance-implementation-planning.md).

## Where it fits

| Lifecycle stage | How it may help |
|---|---|
| Procurement and supplier assurance | Request evidence in a reviewable format and track responses |
| Acceptance | Move evidence from supplier or product team to the recipient that must decide acceptance |
| Deployment and operation | Support automated or periodic evidence checks |
| Update and vulnerability response | Exchange update, vulnerability, and current-state evidence |
| Audit and renewal | Provide repeatable workflows for evidence retrieval, appraisal, and explanation |

## Options covered

### RATS evidence exchange

- **Assurance role:** Supports exchange of attestation evidence between attesters, verifiers, and relying parties.
- **Evidence supported:** Attestation evidence, appraisal results, freshness claims, and relying-party decision inputs.
- **Lifecycle fit:** Acceptance, deployment, runtime monitoring, service admission, update validation, and audit.
- **Dependencies:** Attester identity, verifier policy, reference values, appraisal logic, and relying-party interpretation.
- **What it does not prove:** Does not choose product-specific evidence sufficiency, reference values, or remediation actions.
- **Mapping confidence:** Direct for attestation exchange models; supporting for lifecycle assurance.
- **Source/version note:** Cite the specific IETF RATS architecture and Entity Attestation Token sources used.

### SPDM

- **Assurance role:** Supports secure device or component communication, authentication, and measurement access in applicable platform architectures.
- **Evidence supported:** Protocol-level authentication evidence, measurement evidence, secure session properties, and verifier inputs.
- **Lifecycle fit:** Acceptance, deployment, platform communication, monitoring, update validation, and component assurance.
- **Dependencies:** Architecture support, endpoint identity, measurement source, verifier interpretation, and lifecycle-state handling.
- **What it does not prove:** Does not define full evidence retention, procurement policy, or lifecycle governance.
- **Mapping confidence:** Direct for SPDM protocol mechanisms; supporting for broader assurance workflows.
- **Source/version note:** Cite DMTF DSP0274 Security Protocol and Data Model (SPDM) Specification with the exact version used.

### SBOM / xBOM distribution

- **Assurance role:** Supports transfer and reuse of transparency artefacts between suppliers, buyers, operators, customers, and auditors.
- **Evidence supported:** SBOMs, xBOMs, vulnerability records, build provenance, and related artefact metadata.
- **Lifecycle fit:** Procurement, release, acceptance, update, vulnerability response, audit, and renewal.
- **Dependencies:** Format selection, product/version binding, access controls, repository or delivery channel, and recipient interpretation.
- **What it does not prove:** Does not prove current integrity or remediation without evidence binding and workflow integration.
- **Mapping confidence:** Supporting unless a specific protocol or repository mechanism is mapped directly.
- **Source/version note:** Cite the chosen format, transport or repository mechanism, version, and exchange workflow.

### Verifier policies and APIs

- **Assurance role:** Define how evidence is requested, appraised, transformed into a result, and exposed to a relying party.
- **Evidence supported:** Appraisal policies, verifier results, evidence request records, relying-party decisions, and exception records.
- **Lifecycle fit:** Acceptance, deployment, update, monitoring, audit, and incident review.
- **Dependencies:** Policy ownership, source-of-truth evidence, trust anchors, access control, logging, and change management.
- **What it does not prove:** A successful verifier result does not prove broader compliance unless the policy scope and evidence inputs match the decision.
- **Mapping confidence:** Supporting unless a specific verifier protocol or API specification is mapped directly.
- **Source/version note:** Cite the policy source, API contract, verifier version, evidence input scope, and decision output semantics.

## What these options can support

Evidence exchange and verifier workflows can support scalable evidence collection, automated appraisal, relying-party decisions, and consistent supplier or product review. They can also reduce ambiguous manual interpretation when verifier policy is visible and maintained.

## What they do not solve alone

They do not decide what evidence is sufficient, who should trust whom, or what happens after a failed appraisal. They also do not make weak evidence strong; they only move, appraise, or present the evidence available.

## What must exist around them

- evidence request and response process;
- trust anchors, identities, and access controls;
- verifier policy, reference values, and appraisal rules;
- repository or retention workflow where evidence must be reused;
- exception, escalation, and risk-acceptance handling;
- logging and review of verifier decisions.

## Evidence they may produce, protect, exchange, or verify

- attestation evidence and verifier results;
- SBOM, xBOM, vulnerability, or lifecycle artefacts;
- evidence requests and response records;
- relying-party decision records;
- API, portal, or exchange logs;
- exception and appraisal records.

## Verification considerations

Verification should check who produced the evidence, whether the exchange path preserved integrity and context, what verifier policy was applied, whether the recipient can interpret the result, and whether exceptions are retained for audit.

## Tooling categories

- evidence request portals;
- attestation verifiers and brokers;
- SBOM and vulnerability exchange services;
- verifier policy engines;
- API gateways and access control;
- relying-party decision services;
- audit logging and evidence export.

## Questions to ask suppliers

- How is evidence requested, transmitted, appraised, and returned?
- Who operates the verifier, and what policy does it apply?
- What evidence inputs are required for a successful result?
- How are failed, missing, stale, or conflicting evidence responses handled?

## Questions to ask implementers

- Which APIs, portals, verifier services, repositories, or logs support the workflow?
- How are verifier policy versions, appraisal results, and relying-party decisions represented?
- How are verifier results retained and linked to the relevant product or lifecycle decision?

## Related pages

- [Choosing Technology Options](./choosing-technology-options.md)
- [Attestation & Measured State](./attestation-measured-state.md)
- [Evidence Repositories, Logs & Retention](./evidence-repositories-logs-retention.md)
- [Assurance & Evidence Models](../evidence/evidence-models.md)
- [Audit & Compliance Readiness](../practices-controls/audit-compliance-readiness.md)
