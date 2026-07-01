---
title: Supply Chain Security Curated References
sidebar_position: 8
sidebar_label: Curated References
description: "Find curated references for supply chain security standards, guidance, threat analysis, secure development, component transparency, and assurance evidence."
---

Curated references should be sourced, version-aware, and deliberately non-exhaustive. Use this page to find public guidance, standards, and specifications that support the handbook's mappings.

This page is not a live standards catalog. Keep it stable, useful, and maintainable.

## Source discipline

- Cite public guidance, standards, or specifications when making factual claims about them.
- Distinguish direct quotation, paraphrase, and interpretation.
- Do not imply endorsement by a standards body unless formally confirmed.
- Label interpretive mappings as guidance.
- Avoid saying a standard requires something unless the source clearly says so.
- Prefer "may support", "can be used for", "is commonly associated with", or "is relevant to" where the relationship is advisory.
- Include publication date or version where relevant.
- Keep references curated, not exhaustive.

## Governance, risk, and supply-chain guidance

| Source | Use it for | Version or date note |
|---|---|---|
| [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) | Governance, risk, and supply-chain-risk framing | CSF 2.0 |
| [NIST SP 1305: CSF 2.0 Quick-Start Guide for C-SCRM](https://www.nist.gov/publications/nist-cybersecurity-framework-20-quick-start-guide-cybersecurity-supply-chain-risk) | Using CSF 2.0 to establish and communicate C-SCRM requirements | Published 2024-10-21 |
| [NIST SP 800-161r1-upd1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-161r1-upd1.pdf) | Cybersecurity supply-chain-risk management practices | Updated 2024 |
| [NIST SP 800-218 SSDF v1.1](https://csrc.nist.gov/pubs/sp/800/218/final) | Secure software development and supplier communication for software security | Final, 2022-02-03 |
| [ISO/IEC 27036-3:2023](https://www.iso.org/standard/82890.html) | Supplier relationship and hardware/software/services supply-chain security guidance | Edition 2, published 2023-06 |
| [ENISA Good Practices for Supply Chain Cybersecurity](https://www.enisa.europa.eu/publications/good-practices-for-supply-chain-cybersecurity) | EU supply-chain cybersecurity practices and NIS2-related context | Cite publication page/date when used |
| [ENISA Threat Landscape for Supply Chain Attacks](https://www.enisa.europa.eu/publications/threat-landscape-for-supply-chain-attacks) | Attack/failure mode context and threat examples | Cite publication page/date when used |
| [UK NCSC Supply Chain Security Guidance](https://www.ncsc.gov.uk/collection/supply-chain-security) | Supplier assurance, supply-chain principles, and assessment practices | Use page version/review date where available |
| [CISA SBOM topic page](https://www.cisa.gov/topics/information-communications-technology-supply-chain-security/sbom) | SBOM policy, adoption, and operationalization context | Use page and resource dates where available |
| [CISA 2025 Minimum Elements for SBOM](https://www.cisa.gov/resources-tools/resources/2025-minimum-elements-software-bill-materials-sbom) | SBOM minimum elements and software transparency expectations | Draft guidance, published 2025-08-22 |

## Evidence structures and attestation

| Source | Use it for | Version or date note |
|---|---|---|
| [IETF RATS Working Group](https://datatracker.ietf.org/wg/rats/about/) | Remote attestation architecture and evidence model context | Cite exact RFC or Internet-Draft |
| [Entity Attestation Token RFC information](https://www.rfc-editor.org/info/rfc9782/) | EAT media types and links to EAT-related RFCs | RFC 9782; also cite EAT RFC used |
| [IETF CoRIM Internet-Draft](https://datatracker.ietf.org/doc/draft-ietf-rats-corim/) | CoRIM/CoMID reference values and endorsements | Draft status; cite revision number |
| [TCG Platform Certificate Profile 2.1](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub.pdf) | Platform identity and composition claims | Version 2.1 |
| [TCG DICE Certificate Profiles v1.1](https://trustedcomputinggroup.org/wp-content/uploads/DICE-Certificate-Profiles-v1.1_pub.pdf) | DICE certificate profiles and identity/attestation certificates | Version 1.1, 2025-04-24 |
| [TCG DICE Attestation Architecture v1.2](https://trustedcomputinggroup.org/wp-content/uploads/DICE-Attestation-Architecture-v1.2_pub.pdf) | DICE attestation architecture and certificate extensions | Version 1.2 |
| [TCG Block Integrated Trust](https://trustedcomputinggroup.org/work-groups/mars/) | Lightweight hardware root-of-trust capabilities for constrained device identity, measurement storage, and measurement reporting | Cite the public page and the exact BIT specification, profile, or implementation scope used |

## Transparency artifacts

| Source | Use it for | Version or date note |
|---|---|---|
| [SPDX](https://spdx.dev/) | SPDX SBOM and systems/package data exchange references | SPDX is identified by the project as ISO/IEC 5962:2021; cite artifact version used |
| [CycloneDX](https://cyclonedx.org/) | CycloneDX BOM capabilities, including SBOM, HBOM, CBOM, VEX, and other BOM types | Cite exact CycloneDX version used |
| [ECMA-424 CycloneDX specification](https://ecma-tc54.github.io/ECMA-424/) | Formal CycloneDX Bill of Materials specification | Cite edition/version used |

## Trust anchors, device security, and protocols

| Source | Use it for | Version or date note |
|---|---|---|
| [DMTF SPDM standards page](https://www.dmtf.org/standards/spdm) | SPDM overview and links to related specifications | Cite exact DSP version used |
| [DMTF DSP0274 SPDM 1.4.0](https://www.dmtf.org/sites/default/files/standards/documents/DSP0274_1.4.0.pdf) | Security Protocol and Data Model messages, data objects, and sequences | Version 1.4.0, 2025-05-15 document date |
| [GlobalPlatform specification library](https://globalplatform.org/specs-library/) | GlobalPlatform TEE, Secure Element, and related specifications | Cite exact document ID and version |
| [GlobalPlatform TEE System Architecture v1.3](https://globalplatform.org/specs-library/tee-system-architecture/) | TEE architecture context | GPD_SPE_009, published 2022-05 |
| [GlobalPlatform TEE Secure Element API v1.1.2](https://globalplatform.org/specs-library/tee-secure-element-api/) | TEE to Secure Element API context | GPD_SPE_024, published 2021-02 |
| [OCP S.A.F.E. program](https://www.opencompute.org/sp/about-ocp-safe) | Hardware and firmware security appraisal context | Cite current program page and repository references |
| [OCP S.A.F.E. GitHub repository](https://github.com/opencomputeproject/OCP-Security-SAFE) | OCP S.A.F.E. framework, reports, and process documents | Cite commit, file, or release where appropriate |
| [Caliptra project documentation](https://chipsalliance.github.io/Caliptra/) | Open silicon root-of-trust project context | Cite exact project documentation or specification referenced |

## Relationship to existing guidance

This handbook should acknowledge that extensive supply chain security guidance already exists. Its role is to bridge standards and threats, practices and controls, evidence expectations, lifecycle assurance, and technology options.

Use [Standards and Regulations](../standards-threats/standards-regulations/index.md) for how governance references shape requirements, [Glossary](./glossary.md) for terminology, and [Technology Options](../technology-options/index.md) for implementation mechanisms.

## Related pages

- [Standards & Threats](../standards-threats/index.md)
- [Practices & Controls](../practices-controls/index.md)
- [Evidence Checklist](./evidence-checklist.md)
- [Technology Options](../technology-options/index.md)
