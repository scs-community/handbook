---
title: Supplier Questions
sidebar_position: 3
---

Supplier questions should help move from assertions to evidence-backed assurance. Use them in procurement, supplier assurance, product acceptance, audit, and lifecycle monitoring.

Use this page for wording: what to ask a supplier. Use [Procurement & Supplier Assurance](../practices-controls/procurement-supplier-assurance.md) for the decision context, and use the [Evidence Checklist](./evidence-checklist.md) to turn answers into review criteria.

## Identity And Provenance

- What identity evidence can you provide for the supplier, product, device, platform, component, or service?
- Who issued the identity evidence, and what is it bound to?
- What provenance records are available, and how far through the supply chain do they extend?
- What chain-of-custody records exist for logistics, resale, integration, repair, or transfer?

## Transparency

- What SBOM, firmware BOM, hardware BOM, or xBOM artifacts are available?
- How are artifacts tied to product versions, firmware versions, builds, or configurations?
- How are artifacts updated after product changes?
- What known limitations or exclusions apply?

## Integrity And Attestation

- What evidence shows firmware, software, configuration, or platform state is expected?
- Are reference measurements, signed manifests, measured boot logs, or attestation results available?
- Who verifies the evidence, when, and using what policy or trust anchor?
- How fresh must the evidence be for acceptance or operation?

## Updates And Vulnerabilities

- How are updates authorized, signed, delivered, installed, recorded, and rolled back?
- What records show update history for this product or version?
- How are vulnerabilities tracked, remediated, accepted, mitigated, or communicated?
- Can vulnerability status be connected to SBOM/xBOM artifacts and product versions?

## Lifecycle State

- What evidence is retained after deployment, update, repair, transfer, revocation, or decommissioning?
- How are credentials revoked, rotated, or re-issued after lifecycle changes?
- What evidence can be reused for audit or customer assurance later?

## Request Pattern

Ask for the artifact, owner, lifecycle stage, retention expectation, and verification path. A useful answer should explain not only what the supplier does, but what evidence exists and how a recipient can rely on it.

## Related Pages

- [Procurement & Supplier Assurance](../practices-controls/procurement-supplier-assurance.md)
- [Product Acceptance](../practices-controls/product-acceptance.md)
- [Evidence Checklist](./evidence-checklist.md)
- [Standards & Threats](../standards-threats/index.md)
