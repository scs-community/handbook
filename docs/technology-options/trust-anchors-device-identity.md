---
title: Trust Anchors and Device Identity
sidebar_position: 3
description: "Understand trust anchors and device identity mechanisms for product provenance, authenticity, onboarding, ownership, update, and lifecycle assurance."
---

Trust anchors and device-identity mechanisms can help bind identities, credentials, keys, measurements, or claims to hardware, firmware, secure components, or controlled execution environments.

This option area is useful when a control depends on knowing which device, component, platform, secure service, or product instance produced evidence or is authorized to act.

## What this option area is for

Trust anchors and device identity may support:

- product, component, platform, or device identity;
- credential issuance and lifecycle records;
- hardware-rooted key protection;
- identity-bound measurements or attestation inputs;
- supplier, factory, provisioning, repair, transfer, or decommissioning evidence.

They are commonly relevant to [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md), [Supplier and Procurement Assurance](../practices-controls/supplier-assurance-procurement.md), [Secure Development and Release Governance](../practices-controls/secure-development-release-governance.md), and [Secure Updates and Lifecycle Monitoring](../practices-controls/secure-updates-lifecycle-monitoring.md).

## Where it fits

| Lifecycle stage | How it may help |
|---|---|
| Design and sourcing | Define identity, root-of-trust, and credential expectations for the product architecture |
| Manufacturing and provisioning | Bind identities, keys, and credentials to product instances, components, or platforms |
| Acceptance and deployment | Check whether identity evidence matches the product, supplier, configuration, or lifecycle state being accepted |
| Update, repair, and transfer | Support revalidation when identity, firmware, ownership, or service state changes |
| Decommissioning | Support key destruction, credential revocation, identity retirement, and evidence closure |

## Options covered

### Trusted Platform Module (TPM)

A Trusted Platform Module (TPM) is a hardware-rooted trust component used for protected keys, measurements, sealing, and attestation-related evidence. In this handbook, TPM is treated as a technology option that can support device or platform identity and measured-state workflows; it is not proof of product acceptability by itself.

- **Assurance role:** Hardware-rooted trust anchor for keys, measurements, sealing, platform identity, and attestation inputs.
- **Evidence supported:** Hardware-rooted identity, measured boot evidence, attestation inputs, key lifecycle evidence, and platform state claims.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, monitoring, repair, transfer, and decommissioning.
- **Dependencies:** Platform policy, verifier workflow, reference values, credential governance, and lifecycle-state records.
- **What it does not prove:** Does not establish provenance, vulnerability status, trust policy, or retention by itself.
- **Mapping confidence:** Direct for TPM-backed mechanisms; supporting for product assurance workflows.
- **Source/version note:** Cite the relevant TCG TPM specifications and related TCG platform identity or attestation specifications.

### Device Identifier Composition Engine (DICE)

Device Identifier Composition Engine (DICE) is a TCG approach for composing device identities from layered measurements and configuration state. In this handbook, DICE is treated as an identity and attestation option for constrained or embedded systems where firmware-bound identity evidence matters.

- **Assurance role:** Device identity composition and layered identity derivation for constrained or embedded systems.
- **Evidence supported:** Derived device identity, firmware-bound identity claims, provisioning evidence, and trust-chain evidence.
- **Lifecycle fit:** Manufacturing, provisioning, firmware update, acceptance, deployment, and repair.
- **Dependencies:** Provisioning controls, identity-chain interpretation, firmware measurement handling, and verifier policy.
- **What it does not prove:** Does not define full supply-chain provenance, vulnerability handling, or procurement sufficiency.
- **Mapping confidence:** Direct for DICE identity mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Cite specific TCG DICE sources such as DICE Certificate Profiles v1.1 and DICE Attestation Architecture v1.2.

### Block Integrated Trust (BIT)

Block Integrated Trust (BIT) is a TCG lightweight hardware root-of-trust mechanism for constrained devices or components. In this handbook, BIT is treated as a technology option for constrained-component identity, measurement storage, and measurement reporting; it is not a broad provenance mechanism by itself.

- **Assurance role:** Lightweight hardware root-of-trust support for constrained devices or components.
- **Evidence supported:** Component identity evidence, measurement evidence, challenge-response evidence, and attestation inputs.
- **Lifecycle fit:** Manufacturing, provisioning, component acceptance, board acceptance, transfer, repair, and lifecycle review.
- **Dependencies:** Trustworthy provisioning, verifier policy, reference or expected-state context, evidence retention, and relying-party interpretation.
- **What it does not prove:** Does not prove full silicon provenance, manufacturing origin, foundry or lot integrity, packaging integrity, uncloned identity, or lifecycle continuity by itself.
- **Mapping confidence:** Direct for BIT-defined constrained-component identity, measurement, and reporting mechanisms; supporting for broader product-acceptance workflows.
- **Source/version note:** Cite the relevant TCG Block Integrated Trust source, including the public TCG BIT page and the specific BIT specification, profile, or implementation scope used.

### Secure Element

A Secure Element is a protected component used to store credentials, keys, and sensitive security state or to perform security-sensitive operations. In this handbook, Secure Elements are relevant where identity, key protection, credential lifecycle, or protected operation evidence supports an assurance decision.

- **Assurance role:** Protected component for credentials, keys, identity, and security-sensitive operations.
- **Evidence supported:** Credential issuance records, hardware-bound identity, key lifecycle evidence, and protected operation support.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, repair, transfer, and decommissioning.
- **Dependencies:** Credential governance, supplier controls, access policy, lifecycle-state handling, and evidence retention.
- **What it does not prove:** Does not define product-level assurance, supplier responsibilities, or evidence sufficiency by itself.
- **Mapping confidence:** Direct for protected credential and key mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Cite concrete Secure Element references such as GlobalPlatform Secure Element Protection Profile and relevant Secure Element specifications.

### Trusted Execution Environment (TEE)

A Trusted Execution Environment (TEE) is an isolated execution environment that can protect selected code, data, credentials, or security services. In this handbook, TEEs are treated as supporting mechanisms for protected execution and evidence generation, not as proof of product integrity or supply chain provenance by themselves.

- **Assurance role:** Isolated execution environment that may help protect credentials, measurements, or security services.
- **Evidence supported:** Protected execution claims, service state, key protection evidence, and implementation support for attestation or identity workflows.
- **Lifecycle fit:** Provisioning, deployment, runtime service operation, update, and lifecycle services.
- **Dependencies:** TEE implementation scope, trust anchor, service policy, update governance, and evidence interpretation.
- **What it does not prove:** Does not prove supply-chain provenance or product integrity unless connected to evidence, trust anchors, and verifier policy.
- **Mapping confidence:** Direct for protected execution mechanisms; supporting for assurance evidence.
- **Source/version note:** Cite concrete TEE references such as GlobalPlatform TEE System Architecture and relevant API or protection-profile documents.

### Public Key Infrastructure (PKI) and platform certificates

Public Key Infrastructure (PKI) and platform certificates provide certificate-based identity, issuer, and credential-chain evidence. In this handbook, they are useful when an assurance workflow needs to bind a device, platform, component, service, or supplier claim to an issuer and verification path.

- **Assurance role:** Certificate-based identity and credential chains for devices, platforms, components, services, or suppliers.
- **Evidence supported:** Certificate chains, issuance records, revocation status, platform identity, and identity-to-product binding evidence.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, repair, transfer, renewal, and decommissioning.
- **Dependencies:** Certificate policy, root management, revocation handling, lifecycle-state updates, and recipient verification.
- **What it does not prove:** A certificate does not prove the product is secure, current, unmodified, or acceptable without supporting evidence.
- **Mapping confidence:** Direct for certificate mechanisms; supporting for identity and provenance assurance.
- **Source/version note:** Cite the specific certificate profile, policy, issuer, validity rules, and product binding used.

### Caliptra

Caliptra is an open silicon root-of-trust project for applicable platform and infrastructure architectures. In this handbook, Caliptra is treated as a concrete root-of-trust option where its implementation scope, firmware governance, and verifier policy fit the product architecture.

- **Assurance role:** Open silicon root-of-trust implementation relevant to infrastructure and component assurance in applicable architectures.
- **Evidence supported:** Root-of-trust evidence, device identity, firmware measurement, update or security state, and platform assurance inputs.
- **Lifecycle fit:** Design, manufacturing, provisioning, acceptance, deployment, update, and operations for applicable architectures.
- **Dependencies:** Architecture fit, implementation scope, firmware governance, verifier policy, and repository handling.
- **What it does not prove:** May be architecture-specific and does not define all procurement, sector, or lifecycle evidence expectations.
- **Mapping confidence:** Direct for Caliptra mechanisms in applicable architectures; adjacent or supporting elsewhere.
- **Source/version note:** Cite specific Caliptra project documentation, specifications, releases, or implementation references.

## What these options can support

Trust anchors and device-identity mechanisms can support stronger binding between evidence and the product, component, or service that produced it. They can also support automated checks, signed evidence packages, attestation workflows, update eligibility, and lifecycle-state transitions.

## What they do not solve alone

They do not decide whether a product is acceptable, whether a supplier is trustworthy, whether a vulnerability is exploitable, or whether evidence is sufficient. They need control expectations, verifier policies, supplier obligations, lifecycle records, and exception handling.

## What must exist around them

- identity, key, and credential governance;
- certificate or trust-anchor policy;
- provisioning, renewal, revocation, and retirement workflows;
- verifier policy and recipient trust decisions;
- evidence retention and lifecycle-state records;
- exception handling for missing, expired, conflicting, or unverifiable identity evidence.

## Evidence they may produce, protect, exchange, or verify

- product, component, device, platform, or service identity;
- certificate chains and issuance records;
- key lifecycle and credential lifecycle records;
- identity-bound attestation inputs;
- provisioning, repair, transfer, revocation, or retirement evidence.

## Verification considerations

Verification should check whether the identity evidence is bound to the right product or component, whether the credential chain is current, whether revocation and lifecycle state are handled, and whether the recipient can explain what the identity claim does and does not prove.

## Tooling categories

- certificate lifecycle management;
- hardware-rooted identity provisioning;
- key and credential management;
- device identity inventory;
- verifier policy and trust-store management;
- lifecycle-state and revocation tracking.

## Questions to ask suppliers

- What identity, trust anchor, credential, or certificate mechanism is used?
- What product, component, platform, service, or lifecycle state is the identity bound to?
- Who issues, renews, revokes, and retires the identity or credential?
- What happens when identity evidence is missing, expired, cloned, transferred, or unverifiable?

## Questions to ask implementers

- What provisioning, renewal, revocation, and retirement workflow supports the identity mechanism?
- Which verifier policy, trust store, repository, or lifecycle-state record consumes the identity evidence?
- How is identity evidence linked to acceptance, update, repair, transfer, or decommissioning decisions?

## Related pages

- [Choosing Technology Options](./choosing-technology-options.md)
- [Glossary](../resources/glossary.md)
- [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md)
- [Product and Component Trust Failures](../standards-threats/threats/product-component-trust-failures.md)
- [Supplier and Procurement Assurance](../practices-controls/supplier-assurance-procurement.md)
