---
title: Secure Update & Lifecycle Monitoring
sidebar_position: 8
---

Secure update and lifecycle monitoring is the recurring practice of governing update approval, authorisation, signing, delivery, installation, recovery, monitoring, evidence refresh, and continued lifecycle assurance.

This practice is commonly driven by CRA, update requirements, vulnerability remediation, lifecycle assurance, product acceptance, and [Software and Update-Chain Compromise](../standards-threats/threats-failure-modes/software-update-chain-compromise.md).

## What this practice is for

This practice keeps assurance alive after acceptance. Updates, repairs, transfers, vulnerability decisions, and retirement events can change product state, evidence freshness, and trust assumptions. The practice defines which lifecycle events require review, re-verification, evidence refresh, or exception handling.

This page focuses on assurance after acceptance; it does not replace operational monitoring or incident response guidance outside the supply-chain-security context.

## Decisions this practice supports

- Update approval and deployment.
- Continued operation after update, vulnerability, repair, or transfer.
- Rollback, recovery, or quarantine.
- Re-acceptance after lifecycle-state change.
- Revocation, retirement, or decommissioning.

## What can go wrong

Products may be accepted once and never checked again. Updates can change firmware, software, configuration, or vulnerability status without fresh evidence. Repair or transfer can change trust state without re-establishing identity, provenance, credentials, or lifecycle records.

When update or lifecycle evidence is missing, stale, incomplete, inconsistent, or unverifiable, the practice should produce an exception, remediation, rejection, quarantine, rollback, or risk-acceptance decision rather than silently continuing operation.

## Core controls

| Control | Purpose | Evidence produced |
|---|---|---|
| Update approval workflow | Ensure updates are reviewed and authorised before release or deployment. | Update approvals, release notes, eligibility records. |
| Update eligibility check | Confirm that an update is authorised for the specific product, version, lifecycle state, customer, region, or deployment context. | Eligibility decision, policy check, deployment cohort, exception record. |
| Update signing control | Protect update authenticity and integrity. | Signing records, key custody records, update manifests. |
| Installation and rollback recording | Show whether updates were delivered, installed, recoverable, and current. | Installation logs, rollback records, recovery records. |
| Post-update verification | Check product state after update or configuration change. | Attestation results, configuration records, verification logs. |
| Lifecycle event trigger | Identify repair, transfer, vulnerability, retirement, or ownership changes that require review. | Lifecycle-state records, event logs, review tasks. |
| Evidence refresh | Keep evidence usable after acceptance and identify stale or missing records. | Refreshed artefacts, stale-evidence findings, exception records. |

## What good practice looks like

Good lifecycle monitoring defines which events require new evidence, who reviews that evidence, what happens when expected evidence is absent, and how long records must be retained. It connects update workflows, vulnerability response, asset management, supplier support, and audit readiness.

## Questions to ask

### Suppliers

- Which lifecycle events trigger new evidence or re-verification?
- How will you notify recipients about updates, vulnerabilities, repairs, ownership transfer, or decommissioning changes?
- What records show that evidence has been refreshed after those events?

### Internally

- Which accepted products need monitoring after deployment, and at what cadence?
- What changes invalidate previous acceptance evidence?
- Who reviews new evidence and decides whether operation should continue?

### Assessors / auditors

- Is there a retained history of evidence refresh, review, exceptions, and remediation?
- Can lifecycle events be traced to updated assurance decisions?
- Are stale evidence and unreviewed changes visible?

### Implementers

- What event sources, asset systems, update systems, attestation services, or repositories produce monitoring evidence?
- How will monitoring evidence be correlated with product identity and version state?
- What alerts or workflow steps trigger review when expected evidence is absent or inconsistent?

## Evidence this should produce

This practice should produce update approvals, eligibility decisions, policy checks, deployment cohort records, signing records, update manifests, delivery and installation logs, rollback/recovery records, attestation or integrity results, vulnerability records, repair/transfer records, revocation records, stale-evidence findings, and lifecycle-state records.

## Weak answer

The product was checked at acceptance.

## Stronger answer

The organisation defines lifecycle events, refreshes evidence after those events, verifies current state against policy, retains evidence for future assurance decisions, and records exceptions when operation continues despite gaps.

## Verification considerations

Reviewers should check whether update and lifecycle evidence is bound to the right product identity, software/firmware version, lifecycle event, supplier input, and review decision. Freshness and retention matter because old acceptance evidence may no longer support current operation.

## Lifecycle stages

This practice applies after acceptance and continues through deployment, update, operation, vulnerability response, repair, transfer, revocation, retirement, and decommissioning.

## Technology options

Technology options may include update frameworks, signing systems, transparency logs, attestation, RATS/EAT, CoRIM/CoMID, asset management systems, vulnerability workflow tools, revocation mechanisms, and audit evidence stores.

## Related pages

- [EU Cyber Resilience Act](../standards-threats/standards-regulatory-drivers/eu-cyber-resilience-act.md)
- [Software and Update-Chain Compromise](../standards-threats/threats-failure-modes/software-update-chain-compromise.md)
- [10 Best Practices](./10-best-practices.md)
- [Lifecycle Map](./lifecycle-map.md)
- [Product Acceptance](./product-acceptance.md)
- [Update & Vulnerability](../evidence/update-vulnerability.md)
- [Lifecycle State & Audit](../evidence/lifecycle-state-audit.md)
- [Trust Anchors & Device Identity](../technology-options/trust-anchors-device-identity.md)
