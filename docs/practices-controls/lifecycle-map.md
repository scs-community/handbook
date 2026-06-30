---
title: Lifecycle Map
sidebar_position: 3
---

Supply-chain-security assurance is not a single event. It changes as products move from design to sourcing, manufacturing, provisioning, logistics, acceptance, deployment, update, repair, transfer, and decommissioning. Evidence changes too: some evidence establishes origin, some verifies current state, some supports update and vulnerability response, and some proves lifecycle decisions after acceptance.

## Lifecycle Evidence Matrix

| Lifecycle stage | Main decision | Common failure modes | Example evidence | Related pages |
|---|---|---|---|---|
| Design | What trust assumptions and controls are required? | Missing threat model, unclear trust boundaries, unmanaged supplier assumptions | Threat model, security requirements, component criteria | [Threats and Failure Modes](../standards-threats/threats-failure-modes/index.md) |
| Sourcing | Are suppliers and components acceptable? | Opaque sub-tiers, unsupported components, counterfeit risk | Supplier evidence, provenance, certifications, component records | [Procurement & Supplier Assurance](./procurement-supplier-assurance.md) |
| Manufacturing | Was the product built as expected? | Substitution, unauthorized changes, poor build traceability | Manufacturing records, identity injection records, Platform Certificates | [Identity & Provenance](../evidence/identity-provenance.md) |
| Provisioning | Was identity or credential material created correctly? | Weak key handling, cloned credentials, unbound identities | Device identity records, credential issuance logs, trust-anchor records | [Trust Anchors](../technology-options/trust-anchors.md) |
| Logistics | Was chain of custody preserved? | Tampering, loss of provenance, uncontrolled reseller path | Provenance records, transfer records, custody logs | [Product Acceptance](./product-acceptance.md) |
| Acceptance | Is the delivered item genuine and in expected state? | Counterfeit device, firmware drift, unverifiable claims | Identity, provenance, integrity, attestation evidence | [Product Acceptance](./product-acceptance.md) |
| Deployment | Is the product connected to approved services and policy? | Wrong service binding, insecure configuration, unmanaged baseline | Onboarding records, policy checks, configuration evidence | [Lifecycle Monitoring](./lifecycle-monitoring.md) |
| Update | Were updates authorized, delivered, installed, and recoverable? | Unauthorized update, failed rollback, missing update history | Update records, version history, rollback evidence | [Update & Vulnerability](../evidence/update-vulnerability.md) |
| Repair | Was trust restored or re-established? | Component replacement without new evidence, stale credentials | Repair records, re-provisioning evidence, delta certificates | [Lifecycle State & Audit](../evidence/lifecycle-state-audit.md) |
| Transfer | Can trust be reassigned or verified? | Ownership ambiguity, stale access, missing custody records | Ownership records, lifecycle-state records, revocation records | [Retention & Reuse](../evidence/retention-reuse.md) |
| Decommissioning | Was the asset retired safely? | Live credentials, recoverable data, unrevoked services | Revocation, wipe, cryptographic erase, retirement logs | [Lifecycle State & Audit](../evidence/lifecycle-state-audit.md) |

## How To Use The Map

1. Identify the lifecycle stage where the decision is being made.
2. Name the failure mode that would make the decision unsafe.
3. Select the practice or control that should reduce the risk.
4. Ask what evidence would show that the control operated.
5. Decide whether the evidence must be retained, refreshed, or re-verified after the decision.
6. Map supporting standards or technologies only where they clarify implementation or verification options.

## Lifecycle Questions

### Questions to ask suppliers

- Which lifecycle stages do your evidence records cover?
- What happens to evidence after update, repair, transfer, or decommissioning?
- Can evidence be refreshed, revoked, superseded, or re-issued?
- Who can verify lifecycle-state changes and with what trust anchor?

### Questions to ask internally

- Which teams rely on evidence after acceptance?
- Where do we currently lose traceability?
- What evidence must survive ownership transfer or repair?
- Which lifecycle events require new acceptance checks?

### Questions to ask assessors / auditors

- Can evidence be traced to the lifecycle stage, event, product scope, and decision it supports?
- Are updates, repairs, transfers, exceptions, and decommissioning actions reflected in retained records?
- Is stale, superseded, revoked, or missing evidence visible during review?

### Questions to ask implementers

- Which systems generate lifecycle events and evidence updates?
- How will product identity, version state, ownership, repair, and retirement status be correlated?
- What workflow triggers re-verification when lifecycle state changes?
