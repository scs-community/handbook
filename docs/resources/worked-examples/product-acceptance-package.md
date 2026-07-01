---
title: Product Acceptance Package
sidebar_position: 3
description: "See a product acceptance package example for reviewing product identity, component provenance, vulnerability status, update support, and residual risk."
---

This fictional example shows what a buyer should review before accepting a connected product.

## Scenario

A buyer receives a batch of connected industrial controllers from an approved supplier. The devices will be deployed into a monitored operational environment, and the buyer needs evidence that the delivered products are genuine, expected, supportable, and in an acceptable trust state.

## Decision being made

Should the buyer accept, quarantine, reject, or accept with conditions before deployment?

:::tip[Example outcome]

Decision: accept with conditions.

Main condition: first deployment attestation must match the accepted firmware baseline before production service connection.

Evidence maturity: [Level 4–5](../evidence-maturity-model.md). The evidence is verifiable and becomes lifecycle-retained once the deployment baseline and first attestation result are retained.

:::

## Weak answer

The supplier says:

> These are genuine devices from our approved factory and are ready to deploy.

Assessment: weak. The answer asserts identity and readiness without reviewable evidence.

Evidence maturity: Level 1, supplier assertion.

## Better answer

The supplier provides:

- packing list;
- serial number list;
- certificate of conformity;
- statement that firmware is current.

Assessment: better, but still incomplete. The answer provides delivery records, but does not show trustworthy product identity, provenance, firmware state, vulnerability status, or update baseline.

Evidence maturity: Level 2–3, documented delivery records and produced artefacts without a complete verification path.

## Stronger answer

The supplier provides:

- device identity records bound to serial numbers and expected issuer;
- manufacturing and chain-of-custody records for the batch;
- platform or component identity evidence where applicable;
- firmware version manifest and signed release identifier;
- SBOM/xBOM for the accepted firmware release;
- vulnerability status for the shipped version;
- update history showing no post-release unauthorised update;
- acceptance checklist that records verifier, date, product scope, gaps, and decision.

Assessment: strong. The buyer can review the evidence against the actual delivered products and retain it as the lifecycle baseline.

Evidence maturity: Level 4–5, verifiable artefacts with retained lifecycle baseline.

## What changed from weak to strong?

| Improvement | Why it matters |
|---|---|
| Serial and product scope added | Ties evidence to the delivered batch rather than a generic product claim |
| Identity and provenance evidence added | Lets the buyer check that the product is expected and traceable |
| Firmware and vulnerability status added | Shows whether the accepted version is supportable and understood |
| Verification path added | Gives reviewers checks for issuer, signature, version, freshness, and consistency |
| Conditional gap recorded | Makes the missing deployment attestation visible rather than implicit |
| Retention owner added | Preserves the acceptance baseline for update, repair, transfer, audit, and decommissioning |

## Evidence package

| Field | Example content |
|---|---|
| Decision supported | Accept batch C-2026-041 for deployment |
| Threat/failure mode addressed | Counterfeit product, firmware drift, unclear vulnerability status, missing lifecycle baseline |
| Practice/control supported | Identity verification, provenance review, integrity/configuration check, transparency artefact review, update/vulnerability review |
| Scope | Industrial controller model IC-22, serial numbers 3101-3150, firmware 5.4.2 |
| Evidence included | Device identity records, serial list, custody record, firmware manifest, SBOM, vulnerability status, update history, acceptance checklist |
| Producer/source | Supplier manufacturing system, supplier release system, buyer product acceptance reviewer |
| Consumer/recipient | Buyer product acceptance authority, deployment team, lifecycle monitoring owner |
| Verification method | Check issuer, serial/product binding, firmware manifest signature, SBOM product/version scope, vulnerability status date, and update history |
| Known gaps | No runtime attestation available before deployment; first attestation check scheduled during onboarding |
| Exceptions/risk acceptance | Accept with condition that first deployment attestation must match firmware 5.4.2 baseline |
| Retention owner | Buyer asset owner and lifecycle monitoring owner |

## Verification questions

- Does identity evidence match the delivered product and serial numbers?
- Does provenance evidence show unexplained custody or repair gaps?
- Is firmware state bound to a signed release or expected baseline?
- Are SBOM and vulnerability status tied to the accepted version?
- Is the acceptance decision retained for later update, repair, transfer, and audit?

## Gaps, exceptions, and retention

The buyer accepts with conditions. Deployment may proceed, but the device must pass a first deployment state check before connection to production services.

The acceptance package is retained as the baseline for future update approval, vulnerability response, repair, transfer, and decommissioning decisions.

## Related pages

- [Product Acceptance](../../practices-controls/product-acceptance.md)
- [Lifecycle Map](../../practices-controls/lifecycle-map.md)
- [Evidence Checklist](../evidence-checklist.md)
- [Evidence Package Template](../evidence-package-template.md)
- [Trust Anchors & Device Identity](../../technology-options/trust-anchors-device-identity.md)
- [Attestation & Measured State](../../technology-options/attestation-measured-state.md)
- [Transparency Artefacts & Component Visibility](../../technology-options/transparency-artefacts-component-visibility.md)
