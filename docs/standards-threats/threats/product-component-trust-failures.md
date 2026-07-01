---
title: Product and Component Trust Failures
sidebar_position: 2
description: "Understand product and component trust failures involving identity, provenance, integrity, configuration, support state, and acceptance evidence."
---

A product, component, platform, firmware load, or supplier-provided service may not be the one expected. This page helps answer the decision question: can we trust what was delivered?

Commonly driven by procurement assurance, product acceptance, IEC 62443-style component assurance, customer security requirements, and lifecycle governance.

This is not only a counterfeit-component problem. It is a trust-state problem: whether the recipient can connect the thing being accepted to the expected supplier, provenance, configuration, custody path, and lifecycle event.

## What can go wrong

A delivered product, component, platform, firmware load, or supplier-provided service is not the expected one, has changed state without clear records, or cannot be tied back to an acceptable supplier, build, custody path, or lifecycle event.

## Why it matters

Product and component trust failures can defeat acceptance checks, undermine assurance claims, and introduce unreviewed vulnerabilities or malicious modifications. They are often discovered late, when procurement, product acceptance, audit, or operations asks for evidence that was never produced or retained.

## Decisions this affects

This threat group matters when a team needs to procure, accept, operate, repair, transfer, renew, or retire a product, component, platform, firmware load, or supplier-provided service.

The decision becomes weak when the item cannot be tied to the expected supplier, configuration, custody path, provenance record, or lifecycle state.

## Common failure modes

These failures usually arise when the delivered item cannot be matched to the expected supplier, configuration, custody path, or lifecycle state. The examples below are different ways the same decision can become unsafe: accepting something without confidence that it is the intended thing.

- Counterfeit or substituted component.
- Unauthorized lower-grade, reused, repaired, or refurbished part.
- Supplier delivers a different component, build, firmware load, configuration, or service than expected.
- Reseller, integrator, repairer, or logistics actor changes product state without clear records.
- Repair, refurbishment, resale, or ownership transfer changes trust state.
- Provenance or chain-of-custody records are missing, inconsistent, or not tied to the product being accepted.

## Controls that help

Controls are most useful when they make identity, custody, and lifecycle state explicit before acceptance and after major lifecycle events. They should help teams decide whether to accept, reject, re-provision, escalate, or record an exception.

- Supplier qualification and sourcing controls.
- Component identity checks and product acceptance checks.
- Provenance and chain-of-custody records.
- Lifecycle-state tracking for manufacture, delivery, update, repair, transfer, and retirement.
- Re-provisioning or re-establishing trust after repair or transfer.
- Exception handling when identity, provenance, or custody evidence is missing.

## Evidence to request or retain

The decision is defensible when the evidence is tied to the specific product, component, supplier, custody event, or lifecycle change being assessed. Generic supplier statements may help discovery, but acceptance usually needs records that can be reviewed later.

- Platform, device, component, or service identity evidence.
- Supplier declarations and sourcing records.
- Chain-of-custody records.
- Product acceptance records.
- Repair, refurbishment, transfer, or reseller records.
- Lifecycle-state records.
- Re-provisioning, revocation, or decommissioning records where trust state changes.

## Related pages

- [Threats and Failure Modes](./index.md)
- [Product Acceptance](../../practices-controls/product-acceptance-supply-chain-trust.md)
- [Supplier and Procurement Assurance](../../practices-controls/supplier-assurance-procurement.md)
- [Trust Anchors and Device Identity](../../technology-options/trust-anchors-device-identity.md)
- [Evidence Repositories, Logs, and Retention](../../technology-options/evidence-repositories-logs-retention.md)
- [Evidence Checklist](../../resources/evidence-checklist.md)
