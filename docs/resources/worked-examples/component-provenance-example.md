---
title: Component Provenance Evidence Example
sidebar_position: 6
sidebar_label: Component Provenance Example
description: "See a component provenance example that moves from a component list to useful evidence about source, integrity, supplier, and verification."
---

This fictional example shows how to move from a component list to usable assurance evidence.

## Scenario

A supplier provides an xBOM for a connected device. The buyer notices that a secure component and a firmware module are sourced through a reseller and asks for evidence that the components are expected, supported, and traceable.

## Decision being made

Is the component provenance strong enough to support product acceptance and continued use?

:::tip[Example outcome]

Decision: accept the batch with a recorded exception.

Main condition: the reseller custody gap is limited to this batch and must be closed for future supply.

Evidence maturity: [Level 4](../evidence-maturity-model.md) for the assessed batch; not Level 5 until future repair, transfer, or source-change evidence is refreshed and retained.

:::

## Weak answer

The supplier says:

> The components are listed in the BOM and sourced from approved suppliers.

Assessment: weak. A component list is not provenance evidence by itself.

Evidence maturity: Level 1–2, assertion or basic list.

## Better answer

The supplier provides:

- xBOM entry for each component;
- supplier name;
- part number;
- approved supplier list entry.

Assessment: better, but still incomplete. The answer identifies expected components, but does not show custody, version binding, support status, or evidence gaps.

Evidence maturity: Level 3, produced artefacts without complete provenance verification.

## Stronger answer

The supplier provides:

- xBOM entries tied to the product and firmware release;
- approved source and reseller path;
- purchase, receipt, and manufacturing records;
- component identity or certificate record where applicable;
- firmware module version and build provenance;
- support status and end-of-life statement;
- exception record for a reseller custody gap and compensating inspection;
- retention plan for component records after repair or transfer.

Assessment: strong. The evidence connects component identity, provenance, lifecycle state, and acceptance decision.

Evidence maturity: Level 4, verifiable artefacts with recorded exception and retention plan.

## What changed from weak to strong?

| Improvement | Why it matters |
|---|---|
| Product and release binding added | Prevents a generic component list from being treated as acceptance evidence |
| Source and custody evidence added | Shows how the component reached the product |
| Build provenance added | Connects firmware module evidence to the released product |
| Support status added | Shows whether the component remains suitable for continued use |
| Exception recorded | Makes the reseller custody gap visible and bounded |
| Retention plan added | Keeps provenance useful after repair, transfer, audit, or source changes |

## Evidence package

| Field | Example content |
|---|---|
| Decision supported | Accept component provenance for device model CD-40 release 2.1 |
| Threat/failure mode addressed | Component substitution, loss of provenance through reseller path, unsupported component status |
| Practice/control supported | Provenance review, transparency artefact review, supplier component review, acceptance decision record |
| Scope | Secure component SC-7, firmware module NET-3.2, product CD-40 release 2.1 |
| Evidence included | xBOM entries, approved source record, reseller path, purchase and receipt records, manufacturing record, component certificate, firmware build provenance, support status |
| Producer/source | Supplier procurement system, manufacturing system, firmware build system, component supplier |
| Consumer/recipient | Buyer product acceptance reviewer and supplier assurance owner |
| Verification method | Check product/release binding, source approval, custody continuity, certificate issuer, build provenance, support status, and exception handling |
| Known gaps | One reseller custody handoff lacks timestamped receipt evidence |
| Exceptions/risk acceptance | Supplier records compensating incoming inspection and commits to direct-source evidence for future batches |
| Retention owner | Supplier manufacturing quality owner and buyer product acceptance owner |

## Verification questions

- Is the component list tied to the product and release under review?
- Are component source, custody, and support status visible?
- Are reseller, repair, or transfer gaps recorded and assessed?
- Is firmware provenance tied to build and release records?
- Will provenance evidence remain available after repair, transfer, or audit?

## Gaps, exceptions, and retention

The buyer accepts the batch with a recorded exception for one reseller handoff. The exception is limited to the assessed batch and must be closed for future supply.

Component provenance evidence is retained with acceptance evidence and refreshed when the component source, firmware module, repair state, or support status changes.

## Related pages

- [Product and Component Trust Failures](../../standards-threats/threats/product-component-trust-failures.md)
- [Supplier & Procurement Assurance](../../practices-controls/supplier-assurance-procurement.md)
- [Product Acceptance](../../practices-controls/product-acceptance-supply-chain-trust.md)
- [Transparency Artefacts & Component Visibility](../../technology-options/sbom-vex-component-visibility.md)
- [Trust Anchors & Device Identity](../../technology-options/trust-anchors-device-identity.md)
- [Evidence Package Template](../evidence-package-template.md)
- [Glossary](../glossary.md)
