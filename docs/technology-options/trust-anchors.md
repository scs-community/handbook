---
title: Trust Anchors
sidebar_position: 4
---

Trust anchors and device-security technologies can help bind identity, keys, credentials, measurements, or claims to hardware or controlled environments.

## Mapping Summary

| Field | Guidance |
|---|---|
| Role | Helps protect identity, credentials, measurements, keys, and roots of trust. |
| Lifecycle fit | Manufacturing, provisioning, acceptance, deployment, update, repair, transfer, decommissioning. |
| Evidence supported | Device identity, platform identity, credential issuance records, hardware-rooted claims, key lifecycle records. |
| What it does not solve | Does not define all assurance decisions, supply-chain responsibilities, retention requirements, or sector-specific sufficiency criteria. |
| Mapping confidence | Direct for mechanisms like TPM, DICE, Secure Element, TEE, and related device-security technologies; supporting for broader lifecycle assurance. |

## Entries

### TCG

- **Role:** Provides technology specifications and concepts relevant to platform identity, roots of trust, TPMs, measured boot, Platform Certificates, and related assurance mechanisms.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, update, repair, transfer, and decommissioning depending on the technology used.
- **Evidence supported:** Platform identity, Platform Certificates, reference measurements, measured boot records, TPM-backed keys, attestation inputs, and lifecycle-related claims.
- **What it does not solve:** Does not own the entire supply-chain-security problem and does not by itself define procurement sufficiency or lifecycle governance.
- **Mapping confidence:** Direct for TCG-defined mechanisms; supporting for broader assurance workflows.
- **Source/version note:** Use specific TCG publications such as Platform Certificate Profile 2.1, DICE Certificate Profiles v1.1, DICE Attestation Architecture v1.2, and relevant TPM specifications.

### GlobalPlatform

- **Role:** Provides secure component, TEE, Secure Element, and device trust technology concepts relevant to identity, protected execution, and lifecycle services.
- **Lifecycle fit:** Provisioning, acceptance, deployment, update, lifecycle services, repair, and decommissioning depending on architecture.
- **Evidence supported:** Secure component identity, credential handling, protected service state, lifecycle state, and implementation support for evidence generation.
- **What it does not solve:** Does not by itself define all product acceptance, procurement, or evidence retention decisions.
- **Mapping confidence:** Direct for GlobalPlatform-defined mechanisms; supporting for broader assurance workflows.
- **Source/version note:** Use GlobalPlatform specification library entries such as TEE System Architecture v1.3 (GPD_SPE_009), TEE Secure Element API v1.1.2 (GPD_SPE_024), and Secure Element Protection Profile v2.0 where relevant.

### TPM

- **Role:** Provides a hardware-rooted trust anchor that may support keys, measurements, sealing, platform identity, and attestation.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, monitoring, repair, transfer, and decommissioning.
- **Evidence supported:** Hardware-rooted identity, measured boot evidence, attestation inputs, key lifecycle evidence, and platform state claims.
- **What it does not solve:** Does not establish trust policy, provenance, vulnerability status, or lifecycle retention by itself.
- **Mapping confidence:** Direct for TPM-backed mechanisms; supporting for product assurance workflows.
- **Source/version note:** Use relevant TCG TPM specifications and related TCG platform identity/attestation specifications; cite the exact TCG document and version.

### DICE

- **Role:** Supports device identity composition and layered identity derivation for constrained or embedded systems.
- **Lifecycle fit:** Manufacturing, provisioning, firmware update, acceptance, deployment, and repair.
- **Evidence supported:** Derived device identity, firmware-bound identity claims, provisioning evidence, and trust-chain evidence.
- **What it does not solve:** Does not define full supply-chain provenance, vulnerability handling, or procurement acceptance criteria.
- **Mapping confidence:** Direct for DICE identity mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Use TCG DICE Certificate Profiles v1.1 and DICE Attestation Architecture v1.2; cite exact document names and publication dates.

### TEE

- **Role:** Provides an isolated execution environment that may help protect credentials, measurements, or security services.
- **Lifecycle fit:** Provisioning, deployment, runtime service operation, update, and lifecycle services.
- **Evidence supported:** Protected execution claims, service state, key protection evidence, and implementation support for attestation or identity workflows.
- **What it does not solve:** Does not prove supply-chain provenance or product integrity unless connected to evidence, trust anchors, and verification policy.
- **Mapping confidence:** Direct for protected execution mechanisms; supporting for assurance evidence.
- **Source/version note:** Use concrete TEE references such as GlobalPlatform TEE System Architecture v1.3 and relevant TEE API/protection-profile documents.

### Secure Element

- **Role:** Provides a protected component for credentials, keys, identity, and security-sensitive operations.
- **Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, repair, transfer, and decommissioning.
- **Evidence supported:** Credential issuance records, hardware-bound identity, key lifecycle evidence, and protected operation support.
- **What it does not solve:** Does not define product-level assurance, supplier responsibilities, or evidence retention by itself.
- **Mapping confidence:** Direct for protected credential/key mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Use concrete Secure Element references such as GlobalPlatform Secure Element Protection Profile and relevant card/SE specifications.

### OCP SAFE / Caliptra

- **Role:** Provides open hardware root-of-trust and platform security concepts relevant to infrastructure and component assurance.
- **Lifecycle fit:** Design, manufacturing, provisioning, acceptance, deployment, update, and operations for applicable architectures.
- **Evidence supported:** Root-of-trust evidence, device identity, firmware measurement, update/security state, and platform assurance inputs.
- **What it does not solve:** May be architecture-specific and does not define all procurement, sector, or lifecycle evidence expectations.
- **Mapping confidence:** Direct for mechanisms in applicable architectures; adjacent or supporting elsewhere.
- **Source/version note:** Use OCP S.A.F.E. public program/repository references and the Caliptra project documentation; cite specific project pages, reports, or specification versions.

## Practical Questions

### Questions to ask suppliers

- Which standard, framework, or technology are you relying on, and for what assurance decision?
- What evidence does it help produce, protect, exchange, verify, or retain?
- What product, component, platform, service, or lifecycle stage is the evidence bound to?

### Questions to ask internally

- Are we treating this source as a requirement, evidence model, artifact format, implementation option, or contextual reference?
- What decision would this mapping support, and what would remain unresolved without additional evidence?
- Is the mapping direct, supporting, contextual, adjacent, or a gap?

### Questions to ask assessors / auditors

- Is the cited source, version, and mapping rationale visible enough to review?
- Does the page avoid implying endorsement, certification, or compliance unless the source supports that claim?
- Are assumptions, trust anchors, verifier workflows, and limits documented?

### Questions to ask implementers

- What data model, protocol, trust anchor, repository, or workflow needs to exist for this mapping to be useful?
- How will evidence be generated, protected, verified, retained, and refreshed?
- What tooling or operational process will make the evidence usable by recipients?

## Related Pages

- [Evidence](../evidence/index.md)
- [10 Best Practices](../practices-controls/10-best-practices.md)
- [Standards Gap Analysis](../use-cases/standards-gap-analysis.md)
