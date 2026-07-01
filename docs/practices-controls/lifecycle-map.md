---
title: Lifecycle Map
sidebar_position: 3
description: "Map supply chain security practices across product lifecycle phases from concept and sourcing through release, operation, support, and retirement."
---

Supply chain security assurance is not a single event. It changes as products move from design to sourcing, manufacturing, provisioning, logistics, acceptance, deployment, update, repair, transfer, and decommissioning. Evidence changes too: some evidence establishes origin, some verifies current state, some supports update and vulnerability response, and some proves lifecycle decisions after acceptance.

## Lifecycle evidence matrix

Use the matrix to locate where a decision is being made, what can go wrong at that stage, which practices and controls apply, and what evidence should be available.

| Lifecycle stage | Main decision | Common failure modes | Practices and controls | Example evidence | Related pages |
|---|---|---|---|---|---|
| Design | What trust assumptions and controls are required? | Missing threat model, unclear trust boundaries, unmanaged supplier assumptions | Define lifecycle trust assumptions, supplier requirements, evidence needs, and release criteria. | Threat model, security requirements, component criteria, evidence requirements. | [Threats and Failure Modes](../standards-threats/threats-failure-modes/index.md), [Assurance Implementation Planning](./assurance-implementation-planning.md) |
| Sourcing | Are suppliers and components acceptable? | Opaque sub-tiers, unsupported components, counterfeit risk | Qualify suppliers, define contract evidence requirements, review supplier scope and component support. | Supplier evidence, provenance, certifications, component records. | [Supplier & Procurement Assurance](./supplier-procurement-assurance.md) |
| Manufacturing | Was the product built as expected? | Substitution, unauthorised changes, poor build traceability | Capture identity, provenance, manufacturing, and build evidence. | Manufacturing records, identity injection records, Platform Certificates, build provenance. | [Product and Component Trust Failures](../standards-threats/threats-failure-modes/product-component-trust-failures.md), [Trust Anchors & Device Identity](../technology-options/trust-anchors-device-identity.md) |
| Provisioning | Was identity or credential material created correctly? | Weak key handling, cloned credentials, unbound identities | Govern credential issuance, trust anchors, and provisioning records. | Device identity records, credential issuance logs, trust-anchor records. | [Trust Anchors & Device Identity](../technology-options/trust-anchors-device-identity.md) |
| Logistics | Was chain of custody preserved? | Tampering, loss of provenance, uncontrolled reseller path | Preserve provenance and custody records before acceptance. | Provenance records, transfer records, custody logs. | [Product Acceptance](./product-acceptance.md) |
| Acceptance | Is the delivered item genuine and in expected state? | Counterfeit device, firmware drift, unverifiable claims | Review identity, provenance, integrity, transparency, update, and vulnerability evidence before acceptance. | Identity, provenance, integrity, attestation, transparency, and vulnerability evidence. | [Product Acceptance](./product-acceptance.md) |
| Deployment | Is the product connected to approved services and policy? | Wrong service binding, insecure configuration, unmanaged baseline | Record deployment state, configuration baseline, service binding, and monitoring triggers. | Onboarding records, policy checks, configuration evidence. | [Secure Update & Lifecycle Monitoring](./secure-update-lifecycle-monitoring.md) |
| Update | Were updates authorised, delivered, installed, and recoverable? | Unauthorised update, failed rollback, missing update history | Approve, sign, deliver, install, verify, and retain update evidence. | Update approvals, signing records, update manifests, installation logs, rollback evidence. | [Secure Update & Lifecycle Monitoring](./secure-update-lifecycle-monitoring.md), [Update & Recovery Mechanisms](../technology-options/update-recovery-mechanisms.md) |
| Operation | Does the product remain in an acceptable state? | Stale evidence, untracked vulnerabilities, configuration drift | Monitor lifecycle state, vulnerabilities, evidence freshness, and exceptions. | Attestation results, vulnerability records, configuration records, monitoring logs. | [Software, Component & Vulnerability Management](./software-component-vulnerability-management.md), [Secure Update & Lifecycle Monitoring](./secure-update-lifecycle-monitoring.md) |
| Repair | Was trust restored or re-established? | Component replacement without new evidence, stale credentials | Trigger re-provisioning, evidence refresh, and renewed acceptance checks after repair. | Repair records, re-provisioning evidence, delta certificates. | [Product Acceptance](./product-acceptance.md), [Secure Update & Lifecycle Monitoring](./secure-update-lifecycle-monitoring.md), [Evidence Repositories, Logs & Retention](../technology-options/evidence-repositories-logs-retention.md) |
| Transfer | Can trust be reassigned or verified? | Ownership ambiguity, stale access, missing custody records | Review ownership, custody, credential, and evidence retention state before transfer. | Ownership records, lifecycle-state records, revocation records. | [Supplier & Procurement Assurance](./supplier-procurement-assurance.md), [Secure Update & Lifecycle Monitoring](./secure-update-lifecycle-monitoring.md), [Evidence Package Template](../resources/evidence-package-template.md) |
| Decommissioning | Was the asset retired safely? | Live credentials, recoverable data, unrevoked services | Revoke credentials, retire services, retain final lifecycle records, and close evidence obligations. | Revocation records, wipe records, cryptographic erase records, retirement logs. | [Secure Update & Lifecycle Monitoring](./secure-update-lifecycle-monitoring.md), [Audit & Compliance Readiness](./audit-compliance-readiness.md), [Evidence Repositories, Logs & Retention](../technology-options/evidence-repositories-logs-retention.md) |

## How to use the map

1. Identify the lifecycle stage where the decision is being made.
2. Name the failure mode that would make the decision unsafe.
3. Select the practice or control that should reduce the risk.
4. Ask what evidence would show that the control operated.
5. Decide whether the evidence must be retained, refreshed, or re-verified after the decision.
6. Map supporting standards or technologies only where they clarify implementation or verification options.

Lifecycle-state records do not prove technical integrity unless connected to integrity evidence. Audit records do not prove security by themselves unless they connect controls, evidence, verification, and decisions.

## Lifecycle questions

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
