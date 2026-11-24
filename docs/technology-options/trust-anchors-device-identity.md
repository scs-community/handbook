---
title: Trust Anchors and Device Identity
sidebar_position: 3
description: "Understand trust anchors and device identity mechanisms for product provenance, authenticity, onboarding, ownership, update, and lifecycle assurance."
---

Use this page when you need to understand how trust anchors and device identity can support product acceptance, provenance, lifecycle state, verifier workflows, update eligibility, and retained assurance evidence.

Trust anchors and device-identity mechanisms can help bind identities, credentials, keys, measurements, or claims to hardware, firmware, secure components, or controlled execution environments. They can make evidence easier to bind to a product, component, device, platform, or service, but they do not prove product acceptability, supplier trustworthiness, provenance, vulnerability status, or evidence sufficiency by themselves.

This option area is useful when a control depends on knowing which device, component, platform, secure service, or product instance produced evidence or is authorized to act. Use [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md) for the acceptance decision, [Product Acceptance Package](../resources/worked-examples/product-acceptance-package.md) for a worked example, and [Evidence Exchange and Verifier Workflows](./evidence-exchange-verifier-workflows.md) when identity evidence must be consumed by verifier systems.

This guidance supports supply chain assurance decisions; it is not legal, certification, or product-safety advice.

## Use this page when

- You need identity evidence for product acceptance, supplier assurance, provenance, lifecycle state, update eligibility, or verifier workflows.
- A supplier claims a product uses a TPM, DICE, BIT, secure element, TEE, platform certificate, PKI, or silicon root of trust and you need to understand what that can support.
- You need to know what an identity, credential, certificate, or trust-anchor claim is bound to and who can verify it.
- You need to explain why identity evidence supports assurance but does not prove product trust by itself.

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

TPM refers to the TCG specification ecosystem and interface model, not a single product. Real systems may use a discrete TPM chip from vendors such as [Infineon OPTIGA TPM](https://www.infineon.com/products/security-smart-card-solutions/optiga-embedded-security-solutions/optiga-tpm), [Nuvoton TPM](https://www.nuvoton.com/products/cloud-computing/security/trusted-platform-module-tpm/), [STSAFE-TPM](https://www.st.com/en/secure-mcus/stsafe-tpm.html), or [Microchip TPM](https://www.microchip.com/en-us/products/security-ics/trusted-platform-module); an integrated TPM in platform silicon; or a firmware TPM such as [Intel PTT](https://www.intel.com/content/www/us/en/support/articles/000094205/processors/intel-core-processors.html) or [AMD fTPM](https://www.amd.com/en/resources/support-articles/faqs/PA-200.html). Assurance depends on the specific implementation, provisioning, credentials, firmware state, platform integration, and verifier policy.

- **Assurance role:** Hardware-rooted trust anchor for keys, measurements, sealing, platform identity, and attestation inputs.
- **Evidence supported:** Hardware-rooted identity, measured boot evidence, attestation inputs, key lifecycle evidence, and platform state claims.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, monitoring, repair, transfer, and decommissioning.
- **Dependencies:** Platform policy, verifier workflow, reference values, credential governance, and lifecycle-state records.
- **What it does not prove:** Does not establish provenance, vulnerability status, trust policy, or retention by itself.
- **Mapping confidence:** Direct for TPM-backed mechanisms; supporting for product assurance workflows.
- **Source/version note:** Cite the relevant TCG TPM specifications and related TCG platform identity or attestation specifications.

### Device Identifier Composition Engine (DICE)

Device Identifier Composition Engine (DICE) is a TCG approach for composing device identities from layered measurements and configuration state. In this handbook, DICE is treated as an identity and attestation option for constrained or embedded systems where firmware-bound identity evidence matters.

DICE is an architecture pattern and specification family rather than a single component. Examples include [Android's DICE adoption](https://source.android.com/docs/security/features/dice), Google's [Open Profile for DICE](https://github.com/google/open-dice), and [Caliptra DICE flows](https://chipsalliance.github.io/Caliptra/2.0/specification/HEAD/) for measured boot and attestation. Actual assurance depends on how the silicon, boot ROM, firmware stages, certificate profiles, provisioning process, and verifier workflow implement and interpret the DICE chain.

- **Assurance role:** Device identity composition and layered identity derivation for constrained or embedded systems.
- **Evidence supported:** Derived device identity, firmware-bound identity claims, provisioning evidence, and trust-chain evidence.
- **Lifecycle fit:** Manufacturing, provisioning, firmware update, acceptance, deployment, and repair.
- **Dependencies:** Provisioning controls, identity-chain interpretation, firmware measurement handling, and verifier policy.
- **What it does not prove:** Does not define full supply-chain provenance, vulnerability handling, or procurement sufficiency.
- **Mapping confidence:** Direct for DICE identity mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Cite specific TCG DICE sources such as DICE Certificate Profiles v1.1 and DICE Attestation Architecture v1.2.

### Block Integrated Trust (BIT)

Block Integrated Trust (BIT) is a TCG lightweight hardware root-of-trust mechanism for constrained devices or components. In this handbook, BIT is treated as a technology option for constrained-component identity, measurement storage, and measurement reporting; it is not a broad provenance mechanism by itself.

BIT should be assessed as a concrete implementation and integration scope, not only as a named capability. Public material is currently strongest at the TCG specification and work-group level, such as the [TCG Block Integrated Trust page](https://www.trustedcomputinggroup.org/work-groups/bit). Some public implementation examples still use BIT's earlier MARS naming, such as [Crypto Quantique QRoot Lite](https://www.cryptoquantique.com/products/qroot-lite/) and the official [TCG MARS examples](https://github.com/TrustedComputingGroup/BIT), whose repository is now named BIT. Reviewers still need to know which component implements BIT, what profile or specification applies, how it is provisioned, and how relying parties verify its measurements or reports.

- **Assurance role:** Lightweight hardware root-of-trust support for constrained devices or components.
- **Evidence supported:** Component identity evidence, measurement evidence, challenge-response evidence, and attestation inputs.
- **Lifecycle fit:** Manufacturing, provisioning, component acceptance, board acceptance, transfer, repair, and lifecycle review.
- **Dependencies:** Trustworthy provisioning, verifier policy, reference or expected-state context, evidence retention, and relying-party interpretation.
- **What it does not prove:** Does not prove full silicon provenance, manufacturing origin, foundry or lot integrity, packaging integrity, uncloned identity, or lifecycle continuity by itself.
- **Mapping confidence:** Direct for BIT-defined constrained-component identity, measurement, and reporting mechanisms; supporting for broader product-acceptance workflows.
- **Source/version note:** Cite the relevant TCG Block Integrated Trust source, including the public TCG BIT page and the specific BIT specification, profile, or implementation scope used.

### Secure Element

A Secure Element is a protected component used to store credentials, keys, and sensitive security state or to perform security-sensitive operations. In this handbook, Secure Elements are relevant where identity, key protection, credential lifecycle, or protected operation evidence supports an assurance decision.

Secure Element is a product category, not a single standard. Examples include products and families such as [NXP EdgeLock SE050](https://www.nxp.com/products/security-and-authentication/authentication/edgelock-se050-plug-and-trust-secure-element-family:SE050), [Infineon OPTIGA Trust](https://www.infineon.com/products/security-smart-card-solutions/optiga-embedded-security-solutions/optiga-trust), [STMicroelectronics STSAFE](https://www.st.com/en/secure-mcus/stsafe-a.html), and [Microchip ATECC or Trust Platform](https://www.microchip.com/en-us/products/security-ics/trust-platform) devices. Implementations vary by vendor, certification profile, API, provisioning flow, key custody model, and lifecycle controls, so evidence should identify the specific secure element and how it is used.

- **Assurance role:** Protected component for credentials, keys, identity, and security-sensitive operations.
- **Evidence supported:** Credential issuance records, hardware-bound identity, key lifecycle evidence, and protected operation support.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, repair, transfer, and decommissioning.
- **Dependencies:** Credential governance, supplier controls, access policy, lifecycle-state handling, and evidence retention.
- **What it does not prove:** Does not define product-level assurance, supplier responsibilities, or evidence sufficiency by itself.
- **Mapping confidence:** Direct for protected credential and key mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Cite concrete Secure Element references such as GlobalPlatform Secure Element Protection Profile and relevant Secure Element specifications.

### Trusted Execution Environment (TEE)

A Trusted Execution Environment (TEE) is an isolated execution environment that can protect selected code, data, credentials, or security services. In this handbook, TEEs are treated as supporting mechanisms for protected execution and evidence generation, not as proof of product integrity or supply chain provenance by themselves.

TEE is an architecture category with materially different implementations, such as [Arm TrustZone](https://www.arm.com/technologies/trustzone-for-cortex-a)-based TEEs, [OP-TEE](https://www.trustedfirmware.org/projects/op-tee/), [Intel SGX](https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/overview.html) or [Intel TDX](https://www.intel.com/content/www/us/en/developer/tools/trust-domain-extensions/overview.html)-style environments, [AMD SEV-SNP](https://www.amd.com/en/developer/sev.html), or vendor-specific secure enclaves. Assurance depends on the implementation scope, threat model, firmware or runtime governance, attestation support, and verifier interpretation.

- **Assurance role:** Isolated execution environment that may help protect credentials, measurements, or security services.
- **Evidence supported:** Protected execution claims, service state, key protection evidence, and implementation support for attestation or identity workflows.
- **Lifecycle fit:** Provisioning, deployment, runtime service operation, update, and lifecycle services.
- **Dependencies:** TEE implementation scope, trust anchor, service policy, update governance, and evidence interpretation.
- **What it does not prove:** Does not prove supply-chain provenance or product integrity unless connected to evidence, trust anchors, and verifier policy.
- **Mapping confidence:** Direct for protected execution mechanisms; supporting for assurance evidence.
- **Source/version note:** Cite concrete TEE references such as GlobalPlatform TEE System Architecture and relevant API or protection-profile documents.

### Public Key Infrastructure (PKI) and platform certificates

Public Key Infrastructure (PKI) and platform certificates provide certificate-based identity, issuer, and credential-chain evidence. In this handbook, they are useful when an assurance workflow needs to bind a device, platform, component, service, or supplier claim to an issuer and verification path.

PKI and platform certificate assurance depends on the concrete certificate profile, issuer policy, subject binding, validity rules, revocation mechanism, and relying-party trust store. Examples include the [TCG Platform Certificate Profile](https://www.trustedcomputinggroup.org/resources/documents/tcg-platform-certificate-profile) and tooling such as NSA's [paccor](https://github.com/nsacyber/paccor) for creating, signing, inspecting, and validating TCG-defined platform certificates. A certificate chain is evidence only when the recipient can interpret what the credential actually claims.

- **Assurance role:** Certificate-based identity and credential chains for devices, platforms, components, services, or suppliers.
- **Evidence supported:** Certificate chains, issuance records, revocation status, platform identity, and identity-to-product binding evidence.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, repair, transfer, renewal, and decommissioning.
- **Dependencies:** Certificate policy, root management, revocation handling, lifecycle-state updates, and recipient verification.
- **What it does not prove:** A certificate does not prove the product is secure, current, unmodified, or acceptable without supporting evidence.
- **Mapping confidence:** Direct for certificate mechanisms; supporting for identity and provenance assurance.
- **Source/version note:** Cite the specific certificate profile, policy, issuer, validity rules, and product binding used.

### Caliptra

Caliptra is an open silicon root-of-trust project for applicable platform and infrastructure architectures. In this handbook, Caliptra is treated as a concrete root-of-trust option where its implementation scope, firmware governance, and verifier policy fit the product architecture.

Caliptra is closer to a concrete open project than a generic category, with public [Caliptra project documentation](https://chipsalliance.github.io/Caliptra/) and implementation materials. Deployed assurance still depends on how the design is integrated into silicon or platform firmware, which version or profile is used, how firmware is governed, and which evidence a verifier can consume.

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

Choose and interpret identity mechanisms:

- [Choosing Technology Options](./choosing-technology-options.md)
- [Glossary](../resources/glossary.md)

Apply in acceptance and supplier decisions:

- [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md)
- [Product Acceptance Package](../resources/worked-examples/product-acceptance-package.md)
- [Supplier and Procurement Assurance](../practices-controls/supplier-assurance-procurement.md)

Verify and exchange identity evidence:

- [Attestation and Measured State](./attestation-measured-state.md)
- [Evidence Exchange and Verifier Workflows](./evidence-exchange-verifier-workflows.md)

Understand threat context:

- [Product and Component Trust Failures](../standards-threats/threats/product-component-trust-failures.md)
