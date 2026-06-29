---
title: Lifecycle Monitoring
sidebar_position: 8
---

## Decision

An operator, product-security team, or assurance owner needs to decide whether a product remains trustworthy after acceptance, deployment, update, repair, transfer, or operation.

## What Can Go Wrong

- A product is accepted once and never checked again.
- Updates change firmware, software, configuration, or vulnerability status without new evidence.
- Repair or transfer changes trust state without re-establishing evidence.
- Credentials remain valid after ownership changes or decommissioning.
- Attestation, vulnerability, and update records are not retained or correlated.

## Good Practice

Lifecycle monitoring keeps evidence alive. It defines which events require new evidence, which baselines must be rechecked, and how long records must be retained.

## What To Ask For

### Questions to ask suppliers

- Which lifecycle events trigger new evidence or re-verification?
- How will you notify recipients about updates, vulnerabilities, repairs, ownership transfer, or decommissioning changes?
- What records show that evidence has been refreshed after those events?

### Questions to ask internally

- Which accepted products need monitoring after deployment, and at what cadence?
- What changes invalidate previous acceptance evidence?
- Who reviews new evidence and decides whether operation should continue?

### Questions to ask assessors / auditors

- Is there a retained history of evidence refresh, review, exceptions, and remediation?
- Can lifecycle events be traced to updated assurance decisions?
- Are stale evidence and unreviewed changes visible?

### Questions to ask implementers

- What event sources, asset systems, update systems, attestation services, or repositories produce monitoring evidence?
- How will monitoring evidence be correlated with product identity and version state?
- What alerts or workflow steps trigger review when expected evidence is absent or inconsistent?

## Evidence / Artifacts

Lifecycle monitoring may use attestation results, update records, vulnerability records, configuration records, lifecycle-state records, repair records, transfer records, revocation records, and verifier logs.

## Weak Answer

The product was checked at acceptance.

## Stronger Answer

A better answer: The organization records updates, repairs, and vulnerability actions.

A stronger answer: The organization defines lifecycle events, refreshes evidence after those events, verifies current state against policy, and retains evidence for future audit or assurance decisions.

## Lifecycle Stages

Lifecycle monitoring applies after acceptance and continues through deployment, operations, update, vulnerability response, repair, transfer, revocation, retirement, and decommissioning. It should define which events trigger evidence refresh or renewed acceptance decisions.

## Technology Options

Relevant mappings may include attestation, RATS/EAT, CoRIM/CoMID, update frameworks, vulnerability workflow tools, asset management systems, revocation mechanisms, and audit evidence stores.

## Related Pages

- [Lifecycle Map](./lifecycle-map.md)
- [Integrity & Attestation](../evidence/integrity-attestation.md)
- [Update & Vulnerability](../evidence/update-vulnerability.md)
- [Retention & Reuse](../evidence/retention-reuse.md)
