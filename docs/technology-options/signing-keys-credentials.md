---
title: "Signing, Keys, and Credentials"
sidebar_position: 6
sidebar_label: "Signing, Keys, and Credentials"
description: "Compare signing, keys, certificates, and credential mechanisms for software integrity, release approval, update trust, and evidence verification."
---

Signing, key, and credential mechanisms can help protect releases, evidence, update packages, verifier results, identities, and authorization decisions from unauthorized change or misuse.

This option area is useful when a control depends on proving who produced an artifact, whether it changed, whether a key was authorized for a purpose, or whether a credential is still valid for the lifecycle state being reviewed.

## What this option area is for

Signing, key, and credential mechanisms may support:

- release, update, evidence, and configuration signing;
- certificate and credential chains;
- key generation, storage, use, rotation, revocation, and retirement;
- separation of build, release, update, recovery, and evidence-signing authority;
- review of signing events and credential lifecycle state.

They are commonly relevant to [Secure Development and Release Governance](../practices-controls/secure-development-release-governance.md), [Secure Updates and Lifecycle Monitoring](../practices-controls/secure-updates-lifecycle-monitoring.md), [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md), and [Audit and Compliance Readiness](../practices-controls/audit-compliance-readiness.md).

## Where it fits

| Lifecycle stage | How it may help |
|---|---|
| Design and sourcing | Define key roles, signing boundaries, and credential expectations |
| Build and release | Sign release candidates, release artifacts, evidence packages, or provenance records |
| Acceptance | Verify signatures, certificate chains, authorization, and product/version binding |
| Update and recovery | Authorize updates, recovery images, rollback controls, and emergency release paths |
| Audit and decommissioning | Retain key-use records, revoke credentials, retire keys, and explain historical signatures |

## Options covered

### Code, firmware, update, and evidence signing

[CRA Annex I Part II (7)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I)<br/>
[SSDF PS.2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf#page=19)

Signing can protect the integrity and origin of code, firmware, update packages, evidence records, and verifier results. In this handbook, a signature is useful when the verifier can connect it to the right signing authority, approval policy, artifact scope, and lifecycle decision.

Signing assurance depends on the concrete format, key type, certificate profile, timestamping approach, signing service, and verification workflow. Examples include [Sigstore](https://www.sigstore.dev/), code-signing certificate services, firmware-signing pipelines, package-manager signing, container signing, and evidence-package signing. A signature mechanism only becomes useful when recipients can tell who was authorized to sign what, when, and for which decision.

- **Assurance role:** Provides integrity and origin evidence for artifacts that need controlled release, exchange, or retention.
- **Evidence supported:** Signed releases, update packages, firmware images, evidence bundles, provenance records, and verifier results.
- **Lifecycle fit:** Build, release, acceptance, update, recovery, audit, and retention.
- **Dependencies:** Key governance, signing policy, build/release approval, timestamping where needed, verification workflow, and revocation handling.
- **What it does not prove:** A valid signature does not prove the content is safe, authorized by the right process, vulnerability-free, or compliant.
- **Mapping confidence:** Direct for signing mechanisms; supporting for assurance workflows.
- **Source/version note:** Cite the signature format, certificate or key profile, signing policy, timestamping approach, and verification rules used.

### Key management and hardware-backed key protection

[SSDF PS.2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf#page=19)<br/>
[CRA Annex I Part II (7)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I)

Key management and hardware-backed key protection control how sensitive keys are generated, stored, used, rotated, revoked, and retired. In this handbook, key protection supports assurance only when key use is governed, logged, and tied to the relevant release, update, identity, or evidence workflow.

Hardware-backed protection may involve an HSM, secure element, TPM, cloud KMS, platform enclave, or product-specific key store. Examples include [Thales Luna](https://cpl.thalesgroup.com/encryption/hardware-security-modules) or [Utimaco HSMs](https://utimaco.com/data-protection/gp-hsm), [YubiHSM](https://www.yubico.com/product/yubihsm-2/), [AWS KMS](https://aws.amazon.com/kms/), [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault), [Google Cloud KMS](https://cloud.google.com/security/products/security-key-management), or a product-integrated secure element. These are not interchangeable without understanding the implementation, access model, certification or assurance claims, backup/recovery behavior, and audit logging.

- **Assurance role:** Protects keys used for identity, release signing, update authorization, attestation, evidence signing, or credential issuance.
- **Evidence supported:** Key lifecycle records, key-use logs, rotation records, approval records, and revocation or retirement evidence.
- **Lifecycle fit:** Design, provisioning, release, update, operation, audit, incident response, and decommissioning.
- **Dependencies:** Key ownership, separation of duties, access control, backup/recovery, monitoring, incident response, and retention.
- **What it does not prove:** Protected keys do not prove correct release governance or product acceptability without approval and verification evidence.
- **Mapping confidence:** Supporting for most assurance workflows; direct where a specific key-management mechanism or profile is mapped.
- **Source/version note:** Cite the key store, HSM, secure element, TPM, cloud KMS, policy, or profile used, including version or configuration scope where relevant.

### Certificates, credentials, and authorization claims

Certificates, credentials, and authorization claims identify issuers, subjects, roles, entitlements, or authorization decisions. In this handbook, these mechanisms are useful when recipients can verify the issuer, scope, validity, revocation state, and relationship to the decision being made.

Credential assurance depends on the concrete profile and ecosystem. X.509 certificates, TCG platform certificates, device certificates, [SPIFFE](https://spiffe.io/) identities, JSON Web Tokens (JWTs), and role claims can carry very different meanings unless issuer policy, subject binding, validity, revocation, and relying-party interpretation are documented.

- **Assurance role:** Supports identity, authorization, entitlement, role, supplier, service, or platform claims used in evidence workflows.
- **Evidence supported:** Certificate chains, credential issuance records, validity and revocation status, role claims, and authorization decisions.
- **Lifecycle fit:** Provisioning, acceptance, deployment, update, service operation, transfer, renewal, and decommissioning.
- **Dependencies:** Issuer policy, trust anchor, subject binding, validity rules, revocation checking, and lifecycle-state management.
- **What it does not prove:** A credential does not prove the subject acted correctly or that the artifact is acceptable unless linked to policy and evidence.
- **Mapping confidence:** Direct for credential mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Cite the credential format, issuer, certificate policy, profile, validity rules, and revocation mechanism.

### Signing authority separation

[SSDF PS.2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf#page=19)

Signing authority separation limits who can sign different classes of builds, releases, updates, recovery images, evidence records, or emergency fixes. In this handbook, separation helps reduce misuse risk when it is backed by role governance, approval records, monitoring, and exception handling.

Separation can be implemented through different tooling and operating models, from role-based signing services to dedicated HSM partitions or emergency signing workflows. Examples include [Sigstore cosign](https://github.com/sigstore/cosign) keyless signing with CI/CD identity, GitHub Actions OIDC-based signing workflows, and admission or deployment enforcement using [Sigstore policy-controller](https://docs.sigstore.dev/policy-controller/overview/). The evidence should show the actual control path, not just a statement that duties are separated.

- **Assurance role:** Separates who can sign builds, releases, updates, recovery images, evidence records, or emergency fixes.
- **Evidence supported:** Approval records, signing event logs, role assignments, emergency signing records, and exception approvals.
- **Lifecycle fit:** Build, release, update, recovery, audit, incident response, and decommissioning.
- **Dependencies:** Release governance, access control, change management, monitoring, escalation paths, and audit logging.
- **What it does not prove:** Separation reduces misuse risk but does not prove the artifact was adequately tested, reviewed, or accepted.
- **Mapping confidence:** Supporting for release and update assurance.
- **Source/version note:** Cite the signing workflow, role model, approval policy, and logging source used.

## What these options can support

Signing, key, and credential mechanisms can support stronger integrity, origin, authorization, and accountability evidence. They can help recipients verify whether artifacts came from an expected source and whether key use aligns with the control policy.

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

- signed release, update, recovery, configuration, or evidence artifacts;
- certificate chains and credential records;
- key-use, rotation, revocation, and retirement logs;
- signing approvals and exception records;
- verification results and trust-store records.

## Verification considerations

Verification should check signature validity, certificate path, key authorization, product/version binding, signing-time context, revocation status, and whether the signing event aligns with the release or update approval record.

## Tooling categories

- signing services and release-signing workflows;
- HSM, Secure Element, TPM, or KMS-backed key protection;
- certificate and credential lifecycle management;
- trust-store and revocation checking;
- signing event monitoring;
- evidence package signing and verification.

## Questions to ask suppliers

- Which artifacts are signed, and what decision does each signature support?
- Who controls the signing keys, and how are duties separated?
- How are keys created, protected, rotated, revoked, recovered, and retired?
- How are emergency, recovery, or exceptional signing paths approved and logged?

## Questions to ask implementers

- Which signing workflow, key store, trust store, or verifier checks each artifact?
- How are signing events linked to release, update, credential, or evidence approval records?
- What does a valid signature not prove without additional review or evidence?

## Related pages

- [Choosing Technology Options](./choosing-technology-options.md)
- [Trust Anchors and Device Identity](./trust-anchors-device-identity.md)
- [Secure Update and Recovery Mechanisms](./secure-update-recovery-mechanisms.md)
- [Glossary](../resources/glossary.md)
- [Evidence Package Template](../resources/evidence-package-template.md)
- [Secure Development and Release Governance](../practices-controls/secure-development-release-governance.md)
- [Software and Update-Chain Compromise](../standards-threats/threats/software-update-chain-compromise.md)
