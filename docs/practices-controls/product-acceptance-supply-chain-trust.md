---
title: Product Acceptance and Supply Chain Trust
sidebar_position: 5
sidebar_label: Product Acceptance
description: "Plan product acceptance decisions using evidence for identity, provenance, component state, vulnerabilities, updates, supportability, and residual risk."
---

Use this page when you need to decide whether a delivered product, component, platform, firmware load, or supplier-provided service can be accepted, rejected, quarantined, remediated, or accepted with conditions before deployment or integration.

Product acceptance is the point where supply chain assurance becomes an operational trust decision. The recipient needs enough evidence to determine whether the delivered item is genuine, expected, supportable, tied to the right product or version, and in an acceptable trust state. That evidence may include identity, provenance, integrity, component transparency, vulnerability status, update history, lifecycle-state records, and retained acceptance decisions.

This practice helps define the acceptance evidence baseline. Use the [Evidence Checklist](../resources/evidence-checklist.md) to review whether evidence is sufficient, and the [Product Acceptance Package](../resources/worked-examples/product-acceptance-package.md) to see a fictional accept-with-conditions decision.

This guidance supports supply chain assurance decisions; it is not legal, certification, or product-safety advice.

## Use this page when

- You need evidence before accepting, quarantining, rejecting, remediating, or deploying a delivered item.
- You need to define an acceptance baseline for later update, monitoring, repair, transfer, audit, or decommissioning decisions.
- Supplier evidence is incomplete, stale, inconsistent, or hard to verify.
- Product identity, provenance, firmware state, component visibility, vulnerability status, or update supportability affects the acceptance decision.

This practice is commonly driven by procurement assurance, customer assurance, lifecycle governance, [Product and Component Trust Failures](../standards-threats/threats/product-component-trust-failures.md), and [Software and Update-Chain Compromise](../standards-threats/threats/software-update-chain-compromise.md).

## What this practice is for

This practice makes delivery a controlled assurance step before deployment or use. It establishes the evidence baseline for later deployment, update, repair, transfer, audit, and decommissioning decisions.

## Decisions this practice supports

- Accept, reject, quarantine, or remediate a delivered item.
- Approve deployment or integration.
- Record an exception when evidence is incomplete.
- Establish the lifecycle baseline for update, monitoring, repair, transfer, and audit.

## What can go wrong

- A delivered item contains counterfeit, substituted, lower-grade, reused, or unauthorized components.
- Firmware or low-level code has changed before delivery.
- Device identity is not bound to a trustworthy manufacturer, product family, or trust anchor.
- Provenance records are missing or inconsistent.
- Update history and vulnerability status are unclear.
- The supplier cannot provide a verification path for identity, integrity, or lifecycle-state claims.

## Core controls

| Control | Purpose | Evidence produced |
|---|---|---|
| Identity verification | Confirm the delivered item is the expected product, component, platform, or service. | Identity evidence, certificate records, acceptance checklist. |
| **Provenance review**<br/>[SP 800-161 SR-4](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-161r1-upd1.pdf#page=173) | Review origin, custody, transfer, repair, and supplier path. | Provenance records, chain-of-custody records, supplier declarations. |
| Integrity/configuration check | Compare firmware, software, boot state, or configuration with the expected baseline. | Integrity evidence, measurements, attestation results, configuration records. |
| **Transparency artifact review**<br/>[CRA Annex I Part II (1)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#anx_I)<br/>[SSDF PW.4](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf#page=21) | Confirm software, firmware, and component visibility for the accepted version. | SBOMs, xBOMs, component inventories, build provenance. |
| **Update/vulnerability review**<br/>[CRA Art. 13 §§ 6-10](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13)<br/>[CRA Art. 14](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_14) | Check update history, vulnerability status, and remediation commitments. | Update records, vulnerability records, VEX/status statements. |
| **Exception workflow**<br/>[SP 800-161 § 2.3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-161r1-upd1.pdf#page=36) | Decide what happens when evidence is missing or inconsistent. | Exception approvals, quarantine records, remediation actions. |
| **Acceptance decision record**<br/>[CRA Art. 31](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_31) | Retain the basis for acceptance and later review. | Acceptance record, reviewer, scope, evidence package. |

## What good practice looks like

A stronger product-acceptance process combines identity checks, provenance checks, transparency artifacts, integrity evidence, update history, vulnerability handling, and lifecycle-state records. It defines who verifies each artifact and what happens if evidence is missing or inconsistent.

Identity alone does not prove current integrity, vulnerability status, safe configuration, or update history. Provenance records may not reveal hidden sub-tier risk unless the chain and evidence requirements are defined.

Attestation does not automatically prove that the product is free from vulnerabilities, came through an acceptable supply chain, or meets a compliance requirement. It needs baselines, policies, trust anchors, and interpretation.

When acceptance evidence is missing, stale, incomplete, inconsistent, or unverifiable, the practice should produce a reject, quarantine, accept-with-conditions, remediation, or risk-acceptance decision rather than silently proceeding to deployment.

Use [Supplier Security Questions](../resources/supplier-security-questions.md) to request missing evidence and the [Evidence Checklist](../resources/evidence-checklist.md) to document acceptance criteria.

## Questions to ask

### Questions to ask suppliers

- What identity evidence identifies this device, component, platform, product, or supplier-provided service?
- What provenance, configuration, firmware, software, update, and vulnerability evidence applies to the delivered version?
- What evidence changed after manufacturing, logistics, integration, repair, or final delivery?

### Questions to ask internally

- What evidence is required before acceptance, and who can approve exceptions?
- Which checks need to be repeated after deployment, update, repair, transfer, or resale?
- What conditions trigger rejection, quarantine, remediation, or additional review?

### Questions to ask assessors / auditors

- Can each accepted product be tied to the evidence used for the acceptance decision?
- Are acceptance records retained with enough context to be reviewed later?
- Are missing or stale artifacts visible in the acceptance decision trail?

### Questions to ask implementers

- What acceptance workflow verifies identity, provenance, integrity, transparency, and update state?
- How are evidence artifacts bound to serial numbers, product versions, firmware versions, or asset records?
- How will acceptance results flow into asset management and lifecycle monitoring systems?

## Evidence this should produce

| Evidence type | Acceptance role |
|---|---|
| Identity evidence | Confirms the item is the expected device, component, platform, or product |
| Provenance evidence | Shows origin, custody, manufacturing, logistics, and transfer history |
| Integrity evidence | Shows whether firmware, configuration, and platform state match expectations |
| Transparency artifacts | Support vulnerability analysis and component risk decisions |
| Update records | Show whether updates were authorized, installed, recoverable, and current |
| Vulnerability records | Show known exposures, remediation, mitigations, or accepted risk |
| Lifecycle-state records | Establish the baseline for deployment, repair, transfer, and decommissioning |

## Weak answer

The supplier states the product is authentic and secure.

## Stronger answer

A better answer: The supplier provides process documentation for identity, provenance, update, and vulnerability handling.

A stronger answer: The supplier provides identity evidence, provenance records, firmware/version evidence, update history, vulnerability status, integrity measurements or attestation results, and a clear verification workflow.

## Verification considerations

Acceptance evidence is stronger when reviewers can verify issuer, product binding, integrity, freshness, lifecycle stage, and consistency across artifacts. When evidence is missing or inconsistent, record whether the decision is reject, quarantine, accept with conditions, or remediate before acceptance.

## Lifecycle stages

Acceptance evidence should not be discarded after the product is accepted. It becomes the baseline for deployment, update, monitoring, repair, transfer, audit, and decommissioning.

## Technology options

Relevant mappings may include Platform Certificates, TPM, DICE, Block Integrated Trust (BIT), Secure Element, TEE, SPDM, measured boot, RATS/EAT, CoRIM/CoMID, SBOM/xBOM formats, and update-signing mechanisms. These are candidate implementation and verification options, not universal requirements.

## Related pages

Define the acceptance baseline:

- [Evidence Checklist](../resources/evidence-checklist.md)
- [Evidence Maturity Model](../resources/evidence-maturity-model.md)
- [Evidence Package Template](../resources/evidence-package-template.md)
- [Lifecycle Map](./supply-chain-security-lifecycle-map.md)

See worked examples:

- [Product Acceptance Package](../resources/worked-examples/product-acceptance-package.md)
- [Component Provenance Example](../resources/worked-examples/component-provenance-example.md)

Verify mechanisms and evidence:

- [Trust Anchors and Device Identity](../technology-options/trust-anchors-device-identity.md)
- [Attestation and Measured State](../technology-options/attestation-measured-state.md)
- [SBOM, VEX, and Component Visibility](../technology-options/sbom-vex-component-visibility.md)
- [Secure Update and Recovery Mechanisms](../technology-options/secure-update-recovery-mechanisms.md)

Understand context and adjacent practices:

- [Standards & Threats](../standards-threats/index.md)
- [Threats and Failure Modes](../standards-threats/threats/index.md)
- [Product and Component Trust Failures](../standards-threats/threats/product-component-trust-failures.md)
- [Supplier and Procurement Assurance](./supplier-assurance-procurement.md)
- [Supplier Security Questions](../resources/supplier-security-questions.md)
