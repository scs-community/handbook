---
title: Identity & Provenance
sidebar_position: 2
---

Identity evidence helps a recipient decide whether a device, component, platform, supplier, service, or artifact is the expected one. Provenance evidence helps a recipient understand origin, custody, sourcing, manufacturing, logistics, repair, or transfer history.

## Decision Supported

Is this the expected device, component, platform, supplier, service, or artifact, and did it come through an acceptable chain?

## Who Produces It

Manufacturers, component vendors, secure-technology vendors, provisioning systems, logistics actors, integrators, repairers, resellers, suppliers, and lifecycle service providers may produce identity or provenance evidence.

## Who Consumes It

Buyers, procurement teams, supplier-assurance teams, product-acceptance teams, operators, auditors, assessors, service providers, and downstream systems may consume it.

## When It Is Generated

Identity and provenance evidence may be generated during design, sourcing, manufacturing, provisioning, logistics, acceptance, repair, transfer, and decommissioning.

## When It Is Verified

Verification often happens during supplier onboarding, product acceptance, deployment, repair, transfer, audit, or incident investigation.

## Evidence Examples

- Manufacturer identity claims.
- Device, component, or platform identity records.
- Certificate or credential issuance records.
- Platform Certificates where relevant.
- Provisioning logs.
- Manufacturing records.
- Chain-of-custody and transfer records.
- Repair and re-provisioning records.
- Ownership and lifecycle-state records.

## What Makes It Verifiable

Identity and provenance evidence is stronger when the recipient can verify issuer, integrity, binding to the product or component, freshness, custody continuity, and lifecycle state.

## Retention

Identity and provenance evidence should usually be retained beyond acceptance because it may be needed for update, repair, transfer, audit, vulnerability response, recall, or decommissioning decisions.

## Practical Questions

### Questions to ask suppliers

- What artifact, record, measurement, certificate, manifest, log, or report can you provide for this evidence area?
- When is it generated, updated, superseded, or retired?
- What product, component, version, supplier scope, or lifecycle event is it bound to?

### Questions to ask internally

- What decision will this evidence support: selection, acceptance, operation, update, audit, transfer, or retirement?
- Who verifies it, what acceptance criteria apply, and what happens if the evidence is missing or inconsistent?
- How long does it need to remain available and interpretable?

### Questions to ask assessors / auditors

- Can origin, integrity, freshness, scope, and product binding be checked independently?
- Is there a clear trail from the evidence to the control, requirement, or assurance claim being assessed?
- Are gaps, exceptions, expired artifacts, or remediation actions recorded?

### Questions to ask implementers

- What system or process produces this evidence with enough metadata for later verification?
- How are signatures, hashes, timestamps, issuers, trust anchors, and access controls protected?
- How will recipients retrieve, verify, refresh, and correlate the evidence across lifecycle events?

## Technology Options Support

Relevant mappings may include TCG Platform Certificates, TPM, DICE, Secure Element, TEE, GlobalPlatform, SPDM, CoRIM/CoMID, RATS/EAT, signed provenance records, and asset management systems.

## What It Does Not Solve

Identity alone does not prove the current integrity, vulnerability status, safe configuration, or update history of a product. Provenance records may not reveal hidden sub-tier risk unless the chain and evidence requirements are defined.

## Related Pages

- [Product Acceptance](../practices-controls/product-acceptance.md)
- [Supplier & Procurement Assurance](../practices-controls/supplier-procurement-assurance.md)
- [Trust Anchors & Device Identity](../technology-options/trust-anchors-device-identity.md)
- [Assurance & Evidence Models](./evidence-models.md)
