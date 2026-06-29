---
title: Lifecycle State & Audit
sidebar_position: 6
---

Lifecycle-state evidence helps a recipient decide whether an asset is active, accepted, deployed, repaired, transferred, revoked, retired, or decommissioned. Audit evidence helps show whether controls operated for a specific product, event, supplier, or lifecycle stage.

## Decision Supported

What is the current lifecycle state of the asset, and what evidence shows that lifecycle decisions were made and executed correctly?

## Who Produces It

Asset management systems, manufacturers, operators, service providers, repairers, transfer agents, identity systems, decommissioning workflows, auditors, and assessors may produce lifecycle-state and audit evidence.

## Who Consumes It

Operators, buyers, auditors, assessors, incident responders, product-security teams, procurement teams, and downstream service providers may consume it.

## When It Is Generated

Evidence may be generated during acceptance, deployment, update, repair, transfer, revocation, audit, incident response, and decommissioning.

## When It Is Verified

Verification may occur during audit, renewal, repair return-to-service, ownership transfer, incident investigation, or decommissioning review.

## Evidence Examples

- Asset lifecycle-state records.
- Acceptance records.
- Deployment records.
- Repair records.
- Re-provisioning evidence.
- Transfer and ownership records.
- Revocation logs.
- Decommissioning records.
- Audit logs.
- Verifier logs.
- Control assessment records.

## What Makes It Verifiable

Lifecycle-state and audit evidence is stronger when events are timestamped, attributable, integrity-protected, tied to a product or asset identity, and connected to the evidence that justified the lifecycle decision.

## Retention

Retention depends on asset life, support life, contractual obligations, audit needs, incident response, and decommissioning requirements. Some records may need to survive ownership transfer or retirement.

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

Relevant mappings may include asset management systems, audit evidence stores, signed logs, revocation mechanisms, certificate lifecycle records, RATS verifier logs, and governance frameworks.

## What It Does Not Solve

Lifecycle-state records do not prove technical integrity unless connected to integrity evidence. Audit records do not prove security by themselves unless they connect controls, evidence, verification, and decisions.

## Related Pages

- [Lifecycle Map](../practices-controls/lifecycle-map.md)
- [Audit & Compliance](../practices-controls/audit-compliance.md)
- [Retention & Reuse](./retention-reuse.md)
- [Protocols & Exchange](../technology-options/protocols-exchange.md)
