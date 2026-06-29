---
title: Retention & Reuse
sidebar_position: 7
---

Retention and reuse guidance helps teams keep evidence useful after the first decision. Evidence becomes more valuable when it can be produced, verified, retained, refreshed, and reused across the product lifecycle.

## Decision Supported

Can evidence found or produced today support later decisions about deployment, update, repair, transfer, audit, vulnerability response, or decommissioning?

## Who Produces It

Evidence retention may involve suppliers, manufacturers, operators, evidence repositories, verifiers, asset management systems, security teams, and auditors.

## Who Consumes It

Future consumers may include the original buyer, a downstream customer, an operator, a service provider, an auditor, an assessor, an incident responder, or a new owner.

## When It Is Generated

Retention requirements should be defined before evidence is produced. Reuse may happen long after the original evidence generation event.

## When It Is Verified

Evidence may be re-verified during renewal, audit, update, repair, transfer, incident response, recall, or decommissioning.

## Evidence Examples

- Evidence retention policy.
- Artifact registry.
- Signed evidence packages.
- Verification logs.
- Lifecycle-state records.
- Supersession and revocation records.
- Audit trails.
- Evidence access records.

## What Makes It Verifiable

Retained evidence is stronger when it preserves origin, integrity, context, product binding, lifecycle stage, freshness, supersession status, and verification instructions.

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

## Standards And Technology Support

Relevant mappings may include signed artifacts, evidence repositories, CoRIM/CoMID, RATS/EAT, asset management systems, audit evidence stores, certificate lifecycle mechanisms, and policy frameworks.

## What It Does Not Solve

Retention does not make weak evidence strong. It preserves evidence usefulness only if the original artifact, context, and verification path are meaningful.

## Related Pages

- [Lifecycle Map](../guidance/lifecycle-map.md)
- [Evidence Checklist](../resources/evidence-checklist.md)
- [Lifecycle State & Audit](./lifecycle-state-audit.md)
