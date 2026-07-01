---
title: Trust Anchors and Device Identity
sidebar_position: 3
description: "Understand trust anchors and device identity mechanisms for product provenance, authenticity, onboarding, ownership, update, and lifecycle assurance."
---

Trust anchors and device-identity mechanisms can help bind identities, credentials, keys, measurements, or claims to hardware, firmware, secure components, or controlled execution environments.

This option area is useful when a control depends on knowing which device, component, platform, secure service, or product instance produced evidence or is authorised to act.

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

### TPM

- **Assurance role:** Hardware-rooted trust anchor for keys, measurements, sealing, platform identity, and attestation inputs.
- **Evidence supported:** Hardware-rooted identity, measured boot evidence, attestation inputs, key lifecycle evidence, and platform state claims.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, monitoring, repair, transfer, and decommissioning.
- **Dependencies:** Platform policy, verifier workflow, reference values, credential governance, and lifecycle-state records.
- **What it does not prove:** Does not establish provenance, vulnerability status, trust policy, or retention by itself.
- **Mapping confidence:** Direct for TPM-backed mechanisms; supporting for product assurance workflows.
- **Source/version note:** Cite the relevant TCG TPM specifications and related TCG platform identity or attestation specifications.

### DICE

- **Assurance role:** Device identity composition and layered identity derivation for constrained or embedded systems.
- **Evidence supported:** Derived device identity, firmware-bound identity claims, provisioning evidence, and trust-chain evidence.
- **Lifecycle fit:** Manufacturing, provisioning, firmware update, acceptance, deployment, and repair.
- **Dependencies:** Provisioning controls, identity-chain interpretation, firmware measurement handling, and verifier policy.
- **What it does not prove:** Does not define full supply-chain provenance, vulnerability handling, or procurement sufficiency.
- **Mapping confidence:** Direct for DICE identity mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Cite specific TCG DICE sources such as DICE Certificate Profiles v1.1 and DICE Attestation Architecture v1.2.

### Secure Element

- **Assurance role:** Protected component for credentials, keys, identity, and security-sensitive operations.
- **Evidence supported:** Credential issuance records, hardware-bound identity, key lifecycle evidence, and protected operation support.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, repair, transfer, and decommissioning.
- **Dependencies:** Credential governance, supplier controls, access policy, lifecycle-state handling, and evidence retention.
- **What it does not prove:** Does not define product-level assurance, supplier responsibilities, or evidence sufficiency by itself.
- **Mapping confidence:** Direct for protected credential and key mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Cite concrete Secure Element references such as GlobalPlatform Secure Element Protection Profile and relevant Secure Element specifications.

### TEE

- **Assurance role:** Isolated execution environment that may help protect credentials, measurements, or security services.
- **Evidence supported:** Protected execution claims, service state, key protection evidence, and implementation support for attestation or identity workflows.
- **Lifecycle fit:** Provisioning, deployment, runtime service operation, update, and lifecycle services.
- **Dependencies:** TEE implementation scope, trust anchor, service policy, update governance, and evidence interpretation.
- **What it does not prove:** Does not prove supply-chain provenance or product integrity unless connected to evidence, trust anchors, and verifier policy.
- **Mapping confidence:** Direct for protected execution mechanisms; supporting for assurance evidence.
- **Source/version note:** Cite concrete TEE references such as GlobalPlatform TEE System Architecture and relevant API or protection-profile documents.

### PKI and platform certificates

- **Assurance role:** Certificate-based identity and credential chains for devices, platforms, components, services, or suppliers.
- **Evidence supported:** Certificate chains, issuance records, revocation status, platform identity, and identity-to-product binding evidence.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, repair, transfer, renewal, and decommissioning.
- **Dependencies:** Certificate policy, root management, revocation handling, lifecycle-state updates, and recipient verification.
- **What it does not prove:** A certificate does not prove the product is secure, current, unmodified, or acceptable without supporting evidence.
- **Mapping confidence:** Direct for certificate mechanisms; supporting for identity and provenance assurance.
- **Source/version note:** Cite the specific certificate profile, policy, issuer, validity rules, and product binding used.

### TCG and GlobalPlatform sources

- **Assurance role:** Provide technology specifications and concepts relevant to platform identity, TPMs, DICE, measured boot, TEEs, Secure Elements, and related assurance mechanisms.
- **Evidence supported:** Platform identity, credential records, reference measurements, protected execution claims, and trust-chain inputs.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, update, repair, transfer, and decommissioning depending on the technology used.
- **Dependencies:** Specific profiles, implementation scope, verifier policy, and supporting governance.
- **What it does not prove:** Standards-body references do not by themselves define procurement sufficiency, sector-specific assurance, or lifecycle governance.
- **Mapping confidence:** Direct for mechanisms they define; supporting for broader assurance workflows.
- **Source/version note:** Cite exact publication names, versions, and dates rather than the standards body alone.

### OCP SAFE / Caliptra

- **Assurance role:** Open hardware root-of-trust and platform security concepts relevant to infrastructure and component assurance.
- **Evidence supported:** Root-of-trust evidence, device identity, firmware measurement, update or security state, and platform assurance inputs.
- **Lifecycle fit:** Design, manufacturing, provisioning, acceptance, deployment, update, and operations for applicable architectures.
- **Dependencies:** Architecture fit, implementation scope, firmware governance, verifier policy, and repository handling.
- **What it does not prove:** May be architecture-specific and does not define all procurement, sector, or lifecycle evidence expectations.
- **Mapping confidence:** Direct for mechanisms in applicable architectures; adjacent or supporting elsewhere.
- **Source/version note:** Cite specific OCP S.A.F.E. public program, repository, Caliptra project, report, or specification references.

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
