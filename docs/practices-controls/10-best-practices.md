---
title: 10 Best Practices for Supply Chain Security
id: 10-best-practices
sidebar_position: 2
slug: /practices-controls/10-best-practices
description: "Review ten practical supply chain security practices for supplier assurance, product trust, component visibility, updates, audit readiness, and lifecycle evidence."
---

This page summarises ten recurring supply chain security practices. Use them to move from standards, threats, procurement questions, product assurance needs, audit pressure, or implementation planning to practical controls, evidence requests, verification questions, and lifecycle decisions.

The practices are not a compliance checklist. They are a route into the handbook: each one points to related lifecycle guidance, evidence resources, worked examples, and technology options.

## At a glance

| # | Practice | Main failure reduced | First evidence to ask for |
|---:|---|---|---|
| 1 | Establish and verify identity | Unknown, substituted, cloned, or mis-provisioned product/component | Identity record, issuer evidence, provisioning log |
| 2 | Preserve provenance and chain of custody | Lost origin, custody, repair, or transfer evidence | Provenance record, custody record, supplier declaration |
| 3 | Define lifecycle trust responsibilities | No owner for evidence, verification, or decisions | Responsibility matrix, acceptance criteria, retention owner |
| 4 | Maintain transparency artefacts | Unknown software, firmware, hardware, or dependency composition | SBOM, component record, vulnerability status |
| 5 | Verify integrity and configuration claims | Unauthorised firmware, software, boot, or configuration state | Reference measurements, manifests, attestation results |
| 6 | Protect credentials, keys, and trust anchors | Cloned, extracted, stale, or wrongly issued credentials | Issuance record, key record, revocation record |
| 7 | Authorise, record, and recover updates | Unauthorised, incomplete, or unrecoverable updates | Update approval, signing record, recovery evidence |
| 8 | Track vulnerabilities and remediation evidence | Vulnerabilities not tied to products or decisions | Vulnerability record, affected-product analysis, remediation plan |
| 9 | Retain and reuse evidence | Evidence is stale, unavailable, or unusable later | Evidence registry, lifecycle records, verifier logs |
| 10 | Map standards and technologies cautiously | Standards ignored, overclaimed, or treated as mandates | Mapping matrix, source references, confidence rating |

## The ten practices

Each practice gives a short summary first. Expand **Full guidance** for controls, lifecycle fit, technology options, limits, and related pages.

## 1. Establish and verify device, component, and platform identity

Recipients need to know whether the delivered device, component, or platform is expected, genuine, approved, and correctly provisioned.

| Use when | Ask for | Verify |
|---|---|---|
| Check identity and trust state before acceptance, deployment, repair, transfer, or decommissioning. | Identity records, issuer evidence, credential issuance records, provisioning logs, lifecycle-state records. | Identity is bound to the expected product, issuer, trust anchor, lifecycle state, and decision. |

**Common weak answer:** "This is a genuine product."

**Stronger answer:** Identity evidence is tied to product family, serial number or component identity, issuer, credential record, lifecycle state, and verifier decision.

<details>
<summary>Full guidance</summary>

| Area | Guidance |
|---|---|
| Threat or failure mode | A buyer, operator, or downstream system cannot tell whether the delivered device, component, or platform is the expected one, came from an approved source, or has been substituted, cloned, or incorrectly provisioned. |
| Core controls | Identity verification, issuer review, product/version binding, credential issuance review, lifecycle-state check. |
| Lifecycle fit | Manufacturing, provisioning, logistics, product acceptance, deployment, repair, transfer, decommissioning. |
| Technology options | TPM, DICE, Secure Element, TEE, GlobalPlatform, TCG Platform Certificates, IETF RATS/EAT, CoRIM/CoMID, SPDM. These may support identity, claims, measurements, or evidence exchange; they do not prove the relying party has the right issuer trust, freshness policy, or lifecycle interpretation. |
| Gaps and limits | Sector-specific interpretation may be needed for sufficient identity evidence, trusted issuers, retention, and verification after transfer or repair. |

**Related pages**

- [Product Acceptance and Supply Chain Trust](./product-acceptance-supply-chain-trust.md)
- [Trust Anchors and Device Identity](../technology-options/trust-anchors-device-identity.md)
- [Product Acceptance Evidence Package Example](../resources/worked-examples/product-acceptance-package.md)

</details>

## 2. Preserve provenance and chain-of-custody evidence

Supply chain assurance weakens when origin, custody, reseller, integrator, logistics, repair, or transfer records disappear before a decision is made.

| Use when | Ask for | Verify |
|---|---|---|
| Trace relevant origin and custody changes before accepting, transferring, repairing, or retiring a product or component. | Provenance records, chain-of-custody records, supplier declarations, bill-of-materials records, manufacturing, repair, and transfer records. | Custody and lifecycle changes trace to a trustworthy source and unexplained gaps are visible. |

**Common weak answer:** "We source from approved suppliers."

**Stronger answer:** Provenance and custody records identify approved sources, handoffs, manufacturing or integration records, repair or transfer events, and any unresolved custody gaps.

<details>
<summary>Full guidance</summary>

| Area | Guidance |
|---|---|
| Threat or failure mode | Origin, custody, reseller, integrator, logistics, or repair information is lost, making substitution, tampering, or unauthorised changes difficult to detect. |
| Core controls | Provenance capture, chain-of-custody review, supplier declaration review, transfer/repair record retention. |
| Lifecycle fit | Sourcing, manufacturing, logistics, product acceptance, repair, transfer, decommissioning. |
| Technology options | Platform Certificates, signed provenance records, CoRIM/CoMID, SBOM/xBOM formats, asset management systems. These may structure or protect provenance evidence; they do not prove every custody event is complete, trustworthy, or relevant to the decision. |
| Gaps and limits | Provenance requirements vary widely by sector, product type, supplier depth, and risk tolerance. |

**Related pages**

- [Supplier and Procurement Assurance](./supplier-assurance-procurement.md)
- [Product and Component Trust Failures](../standards-threats/threats/product-component-trust-failures.md)
- [Component Provenance Evidence Example](../resources/worked-examples/component-provenance-example.md)

</details>

## 3. Define lifecycle trust assumptions and responsibilities

Evidence is only useful when someone owns the claim, the verification action, the decision, the exception, and the retention obligation.

| Use when | Ask for | Verify |
|---|---|---|
| Make trust assumptions and evidence responsibilities explicit across the product lifecycle. | Security requirements, threat models, supplier responsibility matrices, acceptance criteria, retention policies, verification procedures. | Owners are named for each claim, artefact, verification action, remediation decision, and retained record. |

**Common weak answer:** "Security is covered by our process."

**Stronger answer:** Lifecycle responsibilities show who produces, verifies, reviews, accepts, refreshes, and retains evidence at each relevant stage.

<details>
<summary>Full guidance</summary>

| Area | Guidance |
|---|---|
| Threat or failure mode | Teams do not know who is responsible for producing, verifying, retaining, or acting on evidence at each lifecycle stage. |
| Core controls | Responsibility mapping, lifecycle evidence requirements, acceptance criteria, retention ownership, escalation path. |
| Lifecycle fit | Design, sourcing, manufacturing, acceptance, deployment, update, repair, transfer, decommissioning. |
| Technology options | Governance frameworks, secure development frameworks, assurance process standards, sector guidance. These may provide structure and vocabulary; they do not assign ownership or resolve contractual boundaries by themselves. |
| Gaps and limits | Responsibility boundaries often cross organisational, contractual, and operational lines. |

**Related pages**

- [Supply Chain Security Lifecycle Map](./supply-chain-security-lifecycle-map.md)
- [Supply Chain Assurance Implementation Planning](./supply-chain-assurance-implementation.md)
- [Evidence Package Template](../resources/evidence-package-template.md)

</details>

## 4. Request and maintain transparency artefacts for software, firmware, and components

Readers need enough component visibility to understand what is present, where risk enters, and whether known vulnerabilities affect the product or service.

| Use when | Ask for | Verify |
|---|---|---|
| Connect software, firmware, hardware, and service composition to supplier review, acceptance, update, and vulnerability decisions. | SBOMs, firmware component records, hardware or component BOMs, dependency records, build provenance, vulnerability status records. | Transparency artefacts match the product, version, firmware, service, lifecycle state, and decision being reviewed. |

**Common weak answer:** "We can provide an SBOM."

**Stronger answer:** Component evidence is product-scoped, version-bound, fresh, tied to vulnerability handling, and clear about exclusions and limitations.

<details>
<summary>Full guidance</summary>

| Area | Guidance |
|---|---|
| Threat or failure mode | Buyers and operators cannot understand what software, firmware, hardware, or service components are present, where risks enter, or whether known vulnerabilities affect them. |
| Core controls | Component inventory maintenance, SBOM/version binding, supplier component review, affected-product mapping. |
| Lifecycle fit | Design, sourcing, build, acceptance, deployment, update, vulnerability response. |
| Technology options | SPDX, CycloneDX, VEX-like records, build provenance tooling, package signing, SBOM distribution and exchange mechanisms. These may improve visibility and exchange; they do not prove the artefact is complete, current, or sufficient for the decision. |
| Gaps and limits | Transparency artefacts need interpretation, freshness, version binding, exclusions, and vulnerability workflow integration. |

**Related pages**

- [Software Component and Vulnerability Management](./software-components-vulnerability-management.md)
- [SBOM, VEX, and Component Visibility](../technology-options/sbom-vex-component-visibility.md)
- [Evidence Checklist](../resources/evidence-checklist.md)

</details>

## 5. Verify integrity and configuration claims using trustworthy evidence

Acceptance and continued use depend on knowing whether firmware, software, boot state, or configuration still matches an expected baseline.

| Use when | Ask for | Verify |
|---|---|---|
| Compare delivered or current state against an expected baseline before acceptance, deployment, update, or repair. | Reference measurements, signed firmware manifests, measured boot records, attestation results, configuration baselines, update records. | Current state can be compared with expected state using trustworthy measurements, signatures, or attestation evidence. |

**Common weak answer:** "The device passed inspection."

**Stronger answer:** Integrity evidence identifies the expected baseline, measurement source, verifier policy, exception status, and decision made from the result.

<details>
<summary>Full guidance</summary>

| Area | Guidance |
|---|---|
| Threat or failure mode | Firmware, software, boot state, or configuration changes before or after acceptance and no longer matches the expected baseline. |
| Core controls | Integrity baseline review, configuration check, attestation or measurement review, exception workflow. |
| Lifecycle fit | Manufacturing, acceptance, deployment, update, operations, repair. |
| Technology options | Measured boot, RIMs, attestation, TPM, DICE, SPDM, IETF RATS/EAT, CoRIM/CoMID. These may support measurement and appraisal; they do not prove the policy, baseline, freshness, or exception handling is right. |
| Gaps and limits | Verification depends on trusted baselines, policy interpretation, freshness, verifier workflow, and operational ownership. |

**Related pages**

- [Product Acceptance and Supply Chain Trust](./product-acceptance-supply-chain-trust.md)
- [Attestation and Measured State](../technology-options/attestation-measured-state.md)
- [Product Acceptance Evidence Package Example](../resources/worked-examples/product-acceptance-package.md)

</details>

## 6. Protect provisioning, credentials, keys, and trust anchors

Credentials and trust anchors can strengthen assurance only if their issuance, binding, custody, revocation, and lifecycle state are reviewable.

| Use when | Ask for | Verify |
|---|---|---|
| Check whether credentials, keys, and trust anchors should still be trusted after provisioning, deployment, repair, transfer, or decommissioning. | Credential issuance records, key-management records, provisioning logs, hardware-rooted identity evidence, revocation records, re-provisioning evidence. | The recipient can determine who issued the credential, what it is bound to, whether it is current, and whether it should still be trusted. |

**Common weak answer:** "The product uses hardware-backed keys."

**Stronger answer:** Credential evidence includes issuer, binding, issuance event, custody controls, revocation state, lifecycle state, and re-provisioning or transfer rules.

<details>
<summary>Full guidance</summary>

| Area | Guidance |
|---|---|
| Threat or failure mode | Credentials are cloned, extracted, incorrectly issued, not hardware-bound, or not revoked after lifecycle changes. |
| Core controls | Provisioning review, key custody control, hardware-binding check, revocation and re-provisioning workflow. |
| Lifecycle fit | Manufacturing, provisioning, acceptance, deployment, repair, transfer, decommissioning. |
| Technology options | TPM, DICE, Secure Element, TEE, GlobalPlatform, PKI, certificate transparency-style records, revocation mechanisms. These may protect or bind credentials; they do not prove issuer trust, lifecycle ownership, or revocation policy by themselves. |
| Gaps and limits | Trust-anchor governance, issuer trust, credential lifecycle, and transfer rules often need product-specific interpretation. |

**Related pages**

- [Trust Anchors and Device Identity](../technology-options/trust-anchors-device-identity.md)
- [Signing, Keys, and Credentials](../technology-options/signing-keys-credentials.md)
- [Supply Chain Security Lifecycle Map](./supply-chain-security-lifecycle-map.md)

</details>

## 7. Authorise, record, and recover updates

Updates change product state after acceptance, so approval, signing, delivery, installation, rollback, and recovery evidence must remain reviewable.

| Use when | Ask for | Verify |
|---|---|---|
| Decide whether a software or firmware update was authorised, installed, recoverable, and consistent with expected state. | Update authorisation records, signing records, delivery records, installation records, version history, rollback evidence, recovery procedures. | The update followed an approved path and the product can be restored or explained if the update fails or introduces risk. |

**Common weak answer:** "Updates are signed."

**Stronger answer:** Update evidence includes release approval, signing event record, authorised key, affected-version mapping, rollback and recovery evidence, deployment record, and retained exception decisions.

<details>
<summary>Full guidance</summary>

| Area | Guidance |
|---|---|
| Threat or failure mode | Unauthorised, incomplete, unrecoverable, or poorly documented updates change product state and break assurance after acceptance. |
| Core controls | Update approval, signing control, update eligibility check, installation record, rollback/recovery review. |
| Lifecycle fit | Deployment, update, operations, repair, vulnerability response. |
| Technology options | Firmware signing, update frameworks, transparency logs, attestation, vulnerability handling records, secure boot and recovery mechanisms. These may protect update integrity or record update state; they do not prove the update was appropriate, recoverable, or accepted by the right owner. |
| Gaps and limits | Update assurance must connect engineering, operations, supplier support, vulnerability response, and customer assurance workflows. |

**Related pages**

- [Secure Updates and Lifecycle Monitoring](./secure-updates-lifecycle-monitoring.md)
- [Secure Update and Recovery Mechanisms](../technology-options/secure-update-recovery-mechanisms.md)
- [Secure Update Approval Evidence Example](../resources/worked-examples/secure-update-approval.md)

</details>

## 8. Track vulnerabilities, exposure decisions, and remediation evidence

Vulnerability response needs evidence that connects findings to affected products, versions, configurations, customer commitments, remediation, and residual risk.

| Use when | Ask for | Verify |
|---|---|---|
| Decide whether a vulnerability affects a product, what response is required, and what customers or auditors can be told. | Vulnerability records, affected-product analysis, VEX-like status records, remediation plans, patch records, risk acceptance records, customer notification records. | Vulnerability status is tied to the specific product, component, version, configuration, lifecycle state, and decision. |

**Common weak answer:** "We patched the vulnerability."

**Stronger answer:** Vulnerability evidence includes affected-version analysis, remediation or non-affected rationale, customer communication decision, risk acceptance owner, and retained records.

<details>
<summary>Full guidance</summary>

| Area | Guidance |
|---|---|
| Threat or failure mode | Known vulnerabilities are not tracked, not tied to affected products, not remediated, or not explained to customers and auditors. |
| Core controls | Vulnerability intake, triage, affected-product analysis, remediation tracking, status communication, risk acceptance. |
| Lifecycle fit | Design, sourcing, acceptance, deployment, update, operations, decommissioning. |
| Technology options | SBOM, VEX-like formats, vulnerability databases, disclosure policies, update records, incident response workflows. These may support analysis and communication; they do not prove status is correct without product scope, version binding, and review. |
| Gaps and limits | Vulnerability evidence depends on timely component transparency and clear responsibility between supplier and product owner. |

**Related pages**

- [Software Component and Vulnerability Management](./software-components-vulnerability-management.md)
- [Vulnerability Response Evidence Example](../resources/worked-examples/vulnerability-response-evidence.md)
- [SBOM, VEX, and Component Visibility](../technology-options/sbom-vex-component-visibility.md)

</details>

## 9. Retain and reuse evidence across lifecycle decisions

Evidence should remain usable after the original decision, especially when products are updated, repaired, transferred, audited, or retired.

| Use when | Ask for | Verify |
|---|---|---|
| Keep evidence available, interpretable, refreshed, and reusable across acceptance, deployment, update, repair, transfer, audit, and decommissioning. | Evidence retention policy, artefact registry, lifecycle-state records, verifier logs, audit records, repair and transfer records, revocation records. | The recipient can find, verify, and interpret evidence after the original acceptance decision. |

**Common weak answer:** "Evidence is stored in the project folder."

**Stronger answer:** Evidence is retained with scope, owner, source, timestamp, verification method, refresh trigger, access controls, exception status, and lifecycle decision context.

<details>
<summary>Full guidance</summary>

| Area | Guidance |
|---|---|
| Threat or failure mode | Evidence exists once but is unavailable, stale, unverifiable, or unusable when the product is updated, repaired, transferred, audited, or retired. |
| Core controls | Evidence retention, artefact registry, evidence refresh trigger, verifier log retention, stale-evidence review. |
| Lifecycle fit | Acceptance, deployment, update, repair, transfer, audit, decommissioning. |
| Technology options | Evidence repositories, signed artefacts, RATS/EAT, CoRIM/CoMID, asset management systems, audit evidence stores. These may retain and protect records; they do not decide what evidence is sufficient or when it must be refreshed. |
| Gaps and limits | Evidence retention requires governance, storage, access, refresh, privacy, and ownership decisions. |

**Related pages**

- [Audit and Compliance Readiness](./audit-compliance-readiness.md)
- [Evidence Repositories, Logs, and Retention](../technology-options/evidence-repositories-logs-retention.md)
- [Evidence Package Template](../resources/evidence-package-template.md)

</details>

## 10. Map practices to standards and technology choices without treating them as mandates

Standards and technologies help when they are mapped to decisions, controls, evidence, verification paths, lifecycle fit, and known limits.

| Use when | Ask for | Verify |
|---|---|---|
| Translate external drivers, customer requests, and technology options into evidence-backed practices without overstating what any one standard or mechanism proves. | Mapping matrix, source references, implementation notes, confidence ratings, gap records, assumptions and limits. | The mapping explains what the source supports, what evidence it helps produce or verify, and what remains a gap or assumption. |

**Common weak answer:** "We comply with the standard" or "we use the technology."

**Stronger answer:** The mapping identifies the source, practice, control, evidence, technology role, lifecycle fit, mapping confidence, assumptions, gaps, and retained decision record.

<details>
<summary>Full guidance</summary>

| Area | Guidance |
|---|---|
| Threat or failure mode | Teams either ignore relevant standards or overstate a technology as the only route to supply chain security. |
| Core controls | Source reference review, mapping confidence rating, assumptions and limits record, gap tracking, technology option assessment. |
| Lifecycle fit | All stages, especially requirements translation, procurement, implementation planning, audit, and assurance reporting. |
| Technology options | NIST, ISO, ENISA, NCSC, CISA, TCG, GlobalPlatform, IETF RATS/EAT, CoRIM/CoMID, SPDX, CycloneDX, SPDM, OCP SAFE/Caliptra. These may provide source material, mechanisms, formats, or assurance models; they do not become mandates unless a specific obligation says so. |
| Gaps and limits | Future profiling may be needed where standards provide pieces of the evidence requirements or evidence structures but not a full product-specific interpretation. |

**Related pages**

- [Supply Chain Security Standards and Regulations](../standards-threats/standards-regulations/index.md)
- [Choosing Supply Chain Security Technology Options](../technology-options/choosing-technology-options.md)
- [Standards to Evidence and Technology Mapping Workflow](../resources/standards-evidence-technology-mapping.md)

</details>

## Choose by decision

If you arrived with a decision rather than a practice number, use this crosswalk to choose where to start. Most real assurance work touches several practices; the links below point back to the most relevant ones.

| If you need to... | Start with practices... |
|---|---|
| Qualify, renew, or review a supplier | [2](#2-preserve-provenance-and-chain-of-custody-evidence), [3](#3-define-lifecycle-trust-assumptions-and-responsibilities), [4](#4-request-and-maintain-transparency-artefacts-for-software-firmware-and-components), [8](#8-track-vulnerabilities-exposure-decisions-and-remediation-evidence), [9](#9-retain-and-reuse-evidence-across-lifecycle-decisions), [10](#10-map-practices-to-standards-and-technology-choices-without-treating-them-as-mandates) |
| Accept a connected product or component | [1](#1-establish-and-verify-device-component-and-platform-identity), [2](#2-preserve-provenance-and-chain-of-custody-evidence), [4](#4-request-and-maintain-transparency-artefacts-for-software-firmware-and-components), [5](#5-verify-integrity-and-configuration-claims-using-trustworthy-evidence), [6](#6-protect-provisioning-credentials-keys-and-trust-anchors), [9](#9-retain-and-reuse-evidence-across-lifecycle-decisions) |
| Approve a software or firmware update | [5](#5-verify-integrity-and-configuration-claims-using-trustworthy-evidence), [7](#7-authorise-record-and-recover-updates), [8](#8-track-vulnerabilities-exposure-decisions-and-remediation-evidence), [9](#9-retain-and-reuse-evidence-across-lifecycle-decisions) |
| Respond to a vulnerability | [4](#4-request-and-maintain-transparency-artefacts-for-software-firmware-and-components), [7](#7-authorise-record-and-recover-updates), [8](#8-track-vulnerabilities-exposure-decisions-and-remediation-evidence), [9](#9-retain-and-reuse-evidence-across-lifecycle-decisions) |
| Prepare audit or customer evidence | [3](#3-define-lifecycle-trust-assumptions-and-responsibilities), [8](#8-track-vulnerabilities-exposure-decisions-and-remediation-evidence), [9](#9-retain-and-reuse-evidence-across-lifecycle-decisions), [10](#10-map-practices-to-standards-and-technology-choices-without-treating-them-as-mandates) |
| Choose implementation mechanisms | [1](#1-establish-and-verify-device-component-and-platform-identity), [5](#5-verify-integrity-and-configuration-claims-using-trustworthy-evidence), [6](#6-protect-provisioning-credentials-keys-and-trust-anchors), [7](#7-authorise-record-and-recover-updates), [10](#10-map-practices-to-standards-and-technology-choices-without-treating-them-as-mandates) |

## How to use this page with the rest of the handbook

- Use [Supply Chain Security Lifecycle Map](./supply-chain-security-lifecycle-map.md) to place practices in lifecycle context.
- Use [Evidence Checklist](../resources/evidence-checklist.md) to identify artefacts and verification paths.
- Use [Supplier Security Questions](../resources/supplier-security-questions.md) to turn practices into supplier requests.
- Use [Supply Chain Security Worked Examples](../resources/worked-examples/index.md) when you need examples of weak, better, and stronger evidence packages.
- Use [Supply Chain Security Technology Options](../technology-options/index.md) to understand mechanism roles and limits.
