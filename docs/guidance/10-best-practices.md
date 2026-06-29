---
title: 10 Best Practices for Supply-Chain Security
slug: /guidance/10-best-practices
sidebar_position: 4
---

This page is the practical synthesis for the handbook. It is not the whole site: each practice routes readers into lifecycle, evidence, use-case, and standards pages.

Practice titles are action-led and reader-oriented. They avoid making standards names, acronyms, or technology families the organizing principle.

## 1. Establish and verify device, component, and platform identity

**Risk addressed:** A buyer, operator, or downstream system cannot tell whether the delivered device, component, or platform is the expected one, came from an approved source, or has been substituted, cloned, or incorrectly provisioned.

**Evidence to request or produce:** Device identity record, manufacturer identity claim, certificate or credential issuance record, Platform Certificate where applicable, provisioning log, ownership or lifecycle-state record.

**Verification question:** Can the recipient verify that identity is bound to an expected manufacturer, product family, device, component, or trust anchor, and that the evidence is fresh enough for the decision?

**Lifecycle fit:** Manufacturing, provisioning, logistics, product acceptance, deployment, repair, transfer, decommissioning.

**Technology mappings:** TPM, DICE, Secure Element, TEE, GlobalPlatform, TCG Platform Certificates, IETF RATS/EAT, CoRIM/CoMID, SPDM.

**Gaps:** Sector-specific interpretation may be needed for sufficient identity evidence, trusted issuers, retention, and verification after transfer or repair.

## 2. Preserve provenance and chain-of-custody evidence

**Risk addressed:** Origin, custody, reseller, integrator, logistics, or repair information is lost, making substitution, tampering, or unauthorized changes difficult to detect.

**Evidence to request or produce:** Provenance records, chain-of-custody records, supplier declarations, bill-of-materials records, manufacturing records, repair records, transfer records.

**Verification question:** Can the recipient trace relevant custody and lifecycle changes to a trustworthy source and detect unexplained gaps?

**Lifecycle fit:** Sourcing, manufacturing, logistics, product acceptance, repair, transfer, decommissioning.

**Technology mappings:** Platform Certificates, signed provenance records, CoRIM/CoMID, SBOM/xBOM formats, asset management systems.

**Gaps:** Provenance requirements vary widely by sector, product type, and supply-chain depth.

## 3. Define lifecycle trust assumptions and responsibilities

**Risk addressed:** Teams do not know who is responsible for producing, verifying, retaining, or acting on evidence at each lifecycle stage.

**Evidence to request or produce:** Security requirements, threat models, supplier responsibility matrices, acceptance criteria, retention policies, verification procedures.

**Verification question:** Can a reader identify who owns each claim, artifact, verification action, and remediation decision?

**Lifecycle fit:** Design, sourcing, manufacturing, acceptance, deployment, update, repair, transfer, decommissioning.

**Technology mappings:** Governance frameworks, secure development frameworks, assurance process standards, sector guidance.

**Gaps:** Responsibility boundaries often cross organizational and contractual lines.

## 4. Request and maintain transparency artifacts for software, firmware, and components

**Risk addressed:** Buyers and operators cannot understand what software, firmware, hardware, or service components are present, where risks enter, or whether known vulnerabilities affect them.

**Evidence to request or produce:** SBOM, firmware component records, hardware or component BOMs, dependency records, build provenance, vulnerability status records.

**Verification question:** Can the recipient connect transparency artifacts to the delivered product version, firmware version, or lifecycle state being assessed?

**Lifecycle fit:** Design, sourcing, build, acceptance, deployment, update, vulnerability response.

**Technology mappings:** SPDX, CycloneDX, VEX-like records, build provenance tooling, package signing, SBOM distribution and exchange mechanisms.

**Gaps:** Transparency artifacts need interpretation, freshness, version binding, and vulnerability workflow integration.

## 5. Verify integrity and configuration claims using trustworthy evidence

**Risk addressed:** Firmware, software, boot state, or configuration changes before or after acceptance and no longer matches the expected baseline.

**Evidence to request or produce:** Reference integrity measurements, signed firmware manifests, measured boot records, attestation results, configuration baselines, update records.

**Verification question:** Can the recipient compare current state to an expected state with trustworthy measurements, signatures, or attestation evidence?

**Lifecycle fit:** Manufacturing, acceptance, deployment, update, operations, repair.

**Technology mappings:** Measured boot, RIMs, attestation, TPM, DICE, SPDM, IETF RATS/EAT, CoRIM/CoMID.

**Gaps:** Verification depends on trusted baselines, policy interpretation, freshness, and operational workflow.

## 6. Protect provisioning, credentials, keys, and trust anchors

**Risk addressed:** Credentials are cloned, extracted, incorrectly issued, not hardware-bound, or not revoked after lifecycle changes.

**Evidence to request or produce:** Credential issuance records, key-management records, provisioning logs, hardware-rooted identity evidence, revocation records, re-provisioning evidence.

**Verification question:** Can the recipient determine who issued the credential, what it is bound to, whether it is current, and whether it should still be trusted?

**Lifecycle fit:** Manufacturing, provisioning, acceptance, deployment, repair, transfer, decommissioning.

**Technology mappings:** TPM, DICE, Secure Element, TEE, GlobalPlatform, PKI, certificate transparency-style records, revocation mechanisms.

**Gaps:** Trust-anchor governance, issuer trust, credential lifecycle, and transfer rules often need product-specific interpretation.

## 7. Authorize, record, and recover updates

**Risk addressed:** Unauthorized, incomplete, unrecoverable, or poorly documented updates change product state and break assurance after acceptance.

**Evidence to request or produce:** Update authorization records, signing records, delivery records, installation records, version history, rollback evidence, recovery procedures.

**Verification question:** Can the recipient determine whether an update was authorized, installed, recoverable, and consistent with the expected state?

**Lifecycle fit:** Deployment, update, operations, repair, vulnerability response.

**Technology mappings:** Firmware signing, update frameworks, transparency logs, attestation, vulnerability handling records, secure boot and recovery mechanisms.

**Gaps:** Update assurance must connect engineering, operations, supplier support, and customer assurance workflows.

## 8. Track vulnerabilities, exposure decisions, and remediation evidence

**Risk addressed:** Known vulnerabilities are not tracked, not tied to affected products, not remediated, or not explained to customers and auditors.

**Evidence to request or produce:** Vulnerability records, affected-product analysis, VEX-like status records, remediation plans, patch records, risk acceptance records, customer notification records.

**Verification question:** Can the recipient connect the vulnerability status to the specific product, component, version, configuration, and lifecycle state?

**Lifecycle fit:** Design, sourcing, acceptance, deployment, update, operations, decommissioning.

**Technology mappings:** SBOM, VEX-like formats, vulnerability databases, disclosure policies, update records, incident response workflows.

**Gaps:** Vulnerability evidence depends on timely component transparency and clear responsibility between supplier and product owner.

## 9. Retain and reuse evidence across lifecycle decisions

**Risk addressed:** Evidence exists once but is unavailable, stale, unverifiable, or unusable when the product is updated, repaired, transferred, audited, or retired.

**Evidence to request or produce:** Evidence retention policy, artifact registry, lifecycle-state records, verifier logs, audit records, repair and transfer records, revocation records.

**Verification question:** Can the recipient find, verify, and interpret evidence after the original acceptance decision?

**Lifecycle fit:** Acceptance, deployment, update, repair, transfer, audit, decommissioning.

**Technology mappings:** Evidence repositories, signed artifacts, RATS/EAT, CoRIM/CoMID, asset management systems, audit evidence stores.

**Gaps:** Evidence retention requires governance, storage, access, refresh, privacy, and ownership decisions.

## 10. Map practices to standards and technologies without treating them as mandates

**Risk addressed:** Teams either ignore relevant standards or overstate a technology as the only route to supply-chain security.

**Evidence to request or produce:** Mapping matrix, source references, implementation notes, confidence ratings, gap records, assumptions and limits.

**Verification question:** Does the mapping explain the role of the standard or technology, the evidence it supports, its lifecycle fit, its limits, and the confidence of the relationship?

**Lifecycle fit:** All stages, especially requirements translation, procurement, implementation planning, audit, and assurance reporting.

**Technology mappings:** NIST, ISO, ENISA, NCSC, CISA, TCG, GlobalPlatform, IETF RATS/EAT, CoRIM/CoMID, SPDX, CycloneDX, SPDM, OCP SAFE/Caliptra.

**Gaps:** Future profiling may be needed where standards provide pieces of the assurance model but not a full product-specific interpretation.

## Practical Questions

### Questions to ask suppliers

- Which practices can you support with concrete artifacts instead of assertions?
- What evidence is available now, what can be produced on request, and what is not currently supported?
- Which practices are maintained after delivery through update, vulnerability handling, repair, transfer, and decommissioning?

### Questions to ask internally

- Which practices matter for the decision we are making now?
- What would be an acceptable weak, better, and stronger answer for our risk level?
- Which evidence needs to be retained for later audit, product acceptance, or lifecycle monitoring?

### Questions to ask assessors / auditors

- Are practice claims linked to evidence, verification paths, and lifecycle stages?
- Are standards and technologies mapped as support or context rather than treated as mandates?
- Are gaps and assumptions explicit enough to review?

### Questions to ask implementers

- Which practice requires a technical control, workflow change, repository, or verification service?
- What metadata is needed so evidence remains useful after the original decision?
- How will implementation choices be tested against real procurement, acceptance, audit, and monitoring scenarios?

## Use This Page With

- [Lifecycle Map](./lifecycle-map.md) to place practices in lifecycle context.
- [Evidence](../evidence-assurance/index.md) to identify artifacts and verification paths.
- [Standards & Technologies](../standards-technologies/index.md) to understand mapping roles and limits.
- [Supplier Questions](../resources/supplier-questions.md) to turn practices into requests.
