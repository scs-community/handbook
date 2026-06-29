---
title: Integrity & Attestation
sidebar_position: 3
---

Integrity evidence helps a recipient decide whether firmware, software, configuration, or platform state matches an expected baseline. Attestation evidence can provide a signed or otherwise trustworthy claim about current or measured state.

## Decision Supported

Is the product, device, platform, firmware, software, or configuration in an expected state now?

## Who Produces It

Devices, platforms, firmware, bootloaders, attesters, verifiers, measurement systems, manufacturers, operators, and security services may produce integrity or attestation evidence.

## Who Consumes It

Product-acceptance teams, operators, verifiers, security monitoring systems, auditors, assessors, and relying services may consume it.

## When It Is Generated

Integrity and attestation evidence may be generated during manufacturing, acceptance, deployment, update, runtime monitoring, repair, and incident response.

## When It Is Verified

Verification may occur at acceptance, onboarding, connection to a service, periodic monitoring, update validation, repair return-to-service, or audit.

## Evidence Examples

- Reference integrity measurements.
- Signed firmware manifests.
- Measured boot logs.
- Attestation evidence.
- Configuration baselines.
- Attestation verifier results.
- Update and version records.
- Runtime integrity measurements.

## What Makes It Verifiable

Integrity and attestation evidence is stronger when measurements are bound to trustworthy hardware, signed or otherwise protected, fresh enough for the decision, comparable to an expected baseline, and interpreted by a known verifier policy.

## Retention

Some attestation evidence is short-lived and decision-specific. Verifier results, baselines, update records, and audit logs may need longer retention to support lifecycle assurance.

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

Relevant mappings may include measured boot, TPM, DICE, SPDM, IETF RATS/EAT, CoRIM/CoMID, TCG reference integrity measurements, secure boot, firmware signing, TEEs, and verifier architectures.

## What It Does Not Solve

Attestation does not automatically prove the product is free from vulnerabilities, came through an acceptable supply chain, or meets a compliance requirement. It needs baselines, policies, trust anchors, and interpretation.

## Related Pages

- [Attack & Failure Modes](../requirements/attack-failure-modes.md)
- [Product Acceptance](../practices-controls/product-acceptance.md)
- [Attestation & Measurement](../technology-options/attestation-measurement.md)
