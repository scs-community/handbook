---
title: Procurement & Supplier Assurance
sidebar_position: 2
---

## Decision

A procurement or supplier-assurance team needs to decide whether a supplier, component, device, platform, or product is acceptable, and what evidence should be required before selection, contract award, renewal, or continued use.

## What Can Go Wrong

- Supplier questionnaires produce assertions but no verifiable artifacts.
- Sub-tier suppliers, resellers, or integrators are opaque.
- Provenance is lost before product acceptance.
- Transparency artifacts are incomplete, stale, or not tied to product versions.
- Update controls, vulnerability handling, repair, and lifecycle service evidence are missing.
- Contract language asks for controls but not evidence, retention, or remediation paths.

## Good Practice

A stronger supplier-assurance approach ties requirements to evidence, acceptance criteria, retention expectations, and remediation paths. It distinguishes between process descriptions and artifacts that a buyer or assessor can verify.

## What To Ask For

### Questions to ask suppliers

- What identity, provenance, transparency, integrity, update, vulnerability, and lifecycle-state evidence can you provide for this product or service?
- Which artifacts are tied to the exact product, component, firmware, software, service, version, or contract scope being assessed?
- Who issues, signs, maintains, and refreshes the evidence?

### Questions to ask internally

- What procurement decision does the evidence support: shortlist, award, renewal, exception, remediation, or rejection?
- Which evidence is needed before contract award, before delivery, and during operation?
- What acceptance criteria and escalation path apply when supplier evidence is incomplete or inconsistent?

### Questions to ask assessors / auditors

- Can the supplier's claims be tied to artifacts that are reviewable and retained?
- Are evidence gaps, compensating controls, and remediation commitments documented?
- Is the assessment scoped to the supplier, product, service, and lifecycle stage under review?

### Questions to ask implementers

- What systems will collect, store, verify, and refresh supplier evidence?
- How will evidence requirements be represented in contracts, onboarding workflows, and renewal checks?
- How will procurement findings feed product acceptance, vulnerability management, and lifecycle monitoring?

## Evidence / Artifacts

| Evidence area | Useful artifacts |
|---|---|
| Identity | Supplier identity, device identity, platform identity, credential issuance records |
| Provenance | Manufacturing records, chain-of-custody records, transfer records, component source records |
| Transparency | SBOM, firmware BOM, hardware BOM, xBOM, build provenance |
| Integrity | Signed firmware, reference measurements, attestation results, configuration baselines |
| Updates | Update authorization records, version history, installation records, rollback evidence |
| Vulnerability handling | Vulnerability records, affected-product analysis, remediation evidence, risk acceptance |
| Lifecycle state | Repair records, re-provisioning evidence, transfer records, revocation and retirement logs |

## Weak Answer

The supplier confirms the device is secure.

## Stronger Answer

A better answer: The supplier describes the process, owner, scope, and review cadence for supply-chain-security controls.

A stronger answer: The supplier provides identity evidence, provenance records, transparency artifacts, update history, vulnerability handling records, lifecycle-state evidence, and verification paths for key claims.

## Lifecycle Stages

Procurement and supplier assurance apply before contract award, during sourcing, before product acceptance, during renewal, and when a supplier supports updates, repair, transfer, or decommissioning.

## Technology Options

Relevant mappings may include governance frameworks for requirements, SBOM/xBOM formats for transparency, TCG or GlobalPlatform mechanisms for identity and trust anchors, RATS/EAT or CoRIM/CoMID for evidence and attestation models, and SPDX or CycloneDX for software transparency. The mapping should explain what each option supports and what it does not solve.

## Related Pages

- [Practices & Controls](../practices-controls/index.md)
- [Evidence Checklist](../resources/evidence-checklist.md)
- [Identity & Provenance](../evidence/identity-provenance.md)
- [Technology Options](../technology-options/index.md)
