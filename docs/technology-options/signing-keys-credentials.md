---
title: "Signing, Keys, and Credentials"
sidebar_position: 6
sidebar_label: "Signing, Keys, and Credentials"
description: "Compare signing, keys, certificates, and credential mechanisms for software integrity, release approval, update trust, and evidence verification."
---

Signing, key, and credential mechanisms can help protect releases, evidence, update packages, verifier results, identities, and authorisation decisions from unauthorised change or misuse.

This option area is useful when a control depends on proving who produced an artefact, whether it changed, whether a key was authorised for a purpose, or whether a credential is still valid for the lifecycle state being reviewed.

## What this option area is for

Signing, key, and credential mechanisms may support:

- release, update, evidence, and configuration signing;
- certificate and credential chains;
- key generation, storage, use, rotation, revocation, and retirement;
- separation of build, release, update, recovery, and evidence-signing authority;
- review of signing events and credential lifecycle state.

They are commonly relevant to [Secure Development & Release Governance](../practices-controls/secure-development-release-governance.md), [Secure Update & Lifecycle Monitoring](../practices-controls/secure-updates-lifecycle-monitoring.md), [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md), and [Audit & Compliance Readiness](../practices-controls/audit-compliance-readiness.md).

## Where it fits

| Lifecycle stage | How it may help |
|---|---|
| Design and sourcing | Define key roles, signing boundaries, and credential expectations |
| Build and release | Sign release candidates, release artefacts, evidence packages, or provenance records |
| Acceptance | Verify signatures, certificate chains, authorisation, and product/version binding |
| Update and recovery | Authorise updates, recovery images, rollback controls, and emergency release paths |
| Audit and decommissioning | Retain key-use records, revoke credentials, retire keys, and explain historical signatures |

## Options covered

### Code, firmware, update, and evidence signing

- **Assurance role:** Provides integrity and origin evidence for artefacts that need controlled release, exchange, or retention.
- **Evidence supported:** Signed releases, update packages, firmware images, evidence bundles, provenance records, and verifier results.
- **Lifecycle fit:** Build, release, acceptance, update, recovery, audit, and retention.
- **Dependencies:** Key governance, signing policy, build/release approval, timestamping where needed, verification workflow, and revocation handling.
- **What it does not prove:** A valid signature does not prove the content is safe, authorised by the right process, vulnerability-free, or compliant.
- **Mapping confidence:** Direct for signing mechanisms; supporting for assurance workflows.
- **Source/version note:** Cite the signature format, certificate or key profile, signing policy, timestamping approach, and verification rules used.

### Key management and hardware-backed key protection

- **Assurance role:** Protects keys used for identity, release signing, update authorisation, attestation, evidence signing, or credential issuance.
- **Evidence supported:** Key lifecycle records, key-use logs, rotation records, approval records, and revocation or retirement evidence.
- **Lifecycle fit:** Design, provisioning, release, update, operation, audit, incident response, and decommissioning.
- **Dependencies:** Key ownership, separation of duties, access control, backup/recovery, monitoring, incident response, and retention.
- **What it does not prove:** Protected keys do not prove correct release governance or product acceptability without approval and verification evidence.
- **Mapping confidence:** Supporting for most assurance workflows; direct where a specific key-management mechanism or profile is mapped.
- **Source/version note:** Cite the key store, HSM, secure element, TPM, cloud KMS, policy, or profile used, including version or configuration scope where relevant.

### Certificates, credentials, and authorisation claims

- **Assurance role:** Supports identity, authorisation, entitlement, role, supplier, service, or platform claims used in evidence workflows.
- **Evidence supported:** Certificate chains, credential issuance records, validity and revocation status, role claims, and authorisation decisions.
- **Lifecycle fit:** Provisioning, acceptance, deployment, update, service operation, transfer, renewal, and decommissioning.
- **Dependencies:** Issuer policy, trust anchor, subject binding, validity rules, revocation checking, and lifecycle-state management.
- **What it does not prove:** A credential does not prove the subject acted correctly or that the artefact is acceptable unless linked to policy and evidence.
- **Mapping confidence:** Direct for credential mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Cite the credential format, issuer, certificate policy, profile, validity rules, and revocation mechanism.

### Signing authority separation

- **Assurance role:** Separates who can sign builds, releases, updates, recovery images, evidence records, or emergency fixes.
- **Evidence supported:** Approval records, signing event logs, role assignments, emergency signing records, and exception approvals.
- **Lifecycle fit:** Build, release, update, recovery, audit, incident response, and decommissioning.
- **Dependencies:** Release governance, access control, change management, monitoring, escalation paths, and audit logging.
- **What it does not prove:** Separation reduces misuse risk but does not prove the artefact was adequately tested, reviewed, or accepted.
- **Mapping confidence:** Supporting for release and update assurance.
- **Source/version note:** Cite the signing workflow, role model, approval policy, and logging source used.

## What these options can support

Signing, key, and credential mechanisms can support stronger integrity, origin, authorisation, and accountability evidence. They can help recipients verify whether artefacts came from an expected source and whether key use aligns with the control policy.

The same signature mechanism may support different decisions depending on whether it is used for release approval, update delivery, evidence integrity, or credential issuance; the decision context should be recorded.

## What they do not solve alone

They do not prove that signed content is safe, correct, complete, vulnerability-free, or operationally acceptable. They also do not replace review, testing, supplier assurance, vulnerability analysis, or lifecycle governance.

## What must exist around them

- key and credential lifecycle governance;
- separation of duties for sensitive signing roles;
- release, update, recovery, and evidence-signing policy;
- verification workflow and trust-store management;
- revocation, rotation, expiry, and compromise handling;
- audit logging and retention of signing decisions.

## Evidence they may produce, protect, exchange, or verify

- signed release, update, recovery, configuration, or evidence artefacts;
- certificate chains and credential records;
- key-use, rotation, revocation, and retirement logs;
- signing approvals and exception records;
- verification results and trust-store records.

## Verification considerations

Verification should check signature validity, certificate path, key authorisation, product/version binding, signing-time context, revocation status, and whether the signing event aligns with the release or update approval record.

## Tooling categories

- signing services and release-signing workflows;
- HSM, Secure Element, TPM, or KMS-backed key protection;
- certificate and credential lifecycle management;
- trust-store and revocation checking;
- signing event monitoring;
- evidence package signing and verification.

## Questions to ask suppliers

- Which artefacts are signed, and what decision does each signature support?
- Who controls the signing keys, and how are duties separated?
- How are keys created, protected, rotated, revoked, recovered, and retired?
- How are emergency, recovery, or exceptional signing paths approved and logged?

## Questions to ask implementers

- Which signing workflow, key store, trust store, or verifier checks each artefact?
- How are signing events linked to release, update, credential, or evidence approval records?
- What does a valid signature not prove without additional review or evidence?

## Related pages

- [Choosing Technology Options](./choosing-technology-options.md)
- [Trust Anchors & Device Identity](./trust-anchors-device-identity.md)
- [Update & Recovery Mechanisms](./secure-update-recovery-mechanisms.md)
- [Glossary](../resources/glossary.md)
- [Evidence Package Template](../resources/evidence-package-template.md)
- [Secure Development & Release Governance](../practices-controls/secure-development-release-governance.md)
- [Software and Update-Chain Compromise](../standards-threats/threats/software-update-chain-compromise.md)
