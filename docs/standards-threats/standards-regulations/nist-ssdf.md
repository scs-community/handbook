---
title: "NIST SSDF: Secure Software Development and Supplier Evidence"
sidebar_label: NIST SSDF
sidebar_position: 6
description: "Map NIST SSDF secure software development practices to supply chain controls, release evidence, vulnerability response, and supplier assurance."
---

NIST SP 800-218, the Secure Software Development Framework (SSDF), describes secure software development practices that can be integrated into software development lifecycles. For supply chain security, SSDF is useful when software, firmware, supplier code, release governance, vulnerability reduction, or secure-development evidence is the reason for action.

The practical question is not only whether a supplier says it follows secure development practices. It is whether software and firmware development, component use, build and release governance, vulnerability response, and supplier evidence can be shown, checked, and retained.

This page focuses only on the parts of SSDF that drive supply chain security controls and evidence. It is not a complete SSDF implementation guide.

:::info[Source status]

This page is based on NIST SP 800-218, SSDF Version 1.1 final, and was last reviewed against the official NIST publication page on 2026-07-01. NIST has also published SP 800-218 Rev. 1 / SSDF Version 1.2 as an initial public draft. Treat draft material as informative unless a customer, procurement requirement, or mapping explicitly calls for it.

:::

## Official references

Use the official NIST sources for the publication text, updates, and citation details.

- [NIST SP 800-218, Secure Software Development Framework (SSDF) Version 1.1](https://csrc.nist.gov/pubs/sp/800/218/final), official NIST publication page.
- [NIST SP 800-218 PDF](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf), for the full publication text.
- [NIST SP 800-218 Rev. 1 initial public draft](https://csrc.nist.gov/pubs/sp/800/218/r1/ipd), for awareness of proposed SSDF Version 1.2 updates.
- [NIST SSDF project page](https://csrc.nist.gov/Projects/ssdf), for related resources.

## Who should care

This page is relevant to:

- Product-security, software, firmware, and release teams defining secure development and release evidence.
- Suppliers and manufacturers asked to provide customer-facing secure development, vulnerability, SBOM, or release evidence.
- Procurement and customer assurance teams asking for supplier software assurance evidence.
- Implementers building build, signing, provenance, vulnerability, artefact, and evidence-retention workflows.

## Scope and supply chain relevance

SSDF provides a common vocabulary for secure software development practices. For this handbook, its value is in translating software and firmware development expectations into evidence that can support supplier assurance, product acceptance, release approval, vulnerability response, and audit readiness.

SSDF-relevant supply chain work usually centres on secure development governance, protected development and build environments, third-party component management, vulnerability response, release integrity, supplier software evidence, and retained records that show what was reviewed and approved.

For supply chain security, scope questions usually become evidence questions:

- Which software, firmware, component, dependency, release, build, or supplier code is covered?
- What secure development, review, build, release, vulnerability, or component evidence exists?
- How can customers, auditors, product teams, or downstream users verify the evidence and understand known limitations?

This page does not decide whether a supplier or product conforms to SSDF. It highlights the software and firmware assurance work that SSDF can drive.

## Relationship to other standards and drivers

SSDF is secure-software-development-led. It can help product teams, suppliers, and customers discuss secure development practices and evidence using a shared vocabulary.

It may interact with:

- [EU Cyber Resilience Act](./eu-cyber-resilience-act.md), where products with digital elements need secure development, vulnerability handling, update, and technical documentation evidence.
- [NIST SP 800-161](./nist-sp-800-161.md), where supplier software and dependency risks need to be managed through C-SCRM practices.
- [IEC 62443](./iec-62443.md), where industrial products need secure product development lifecycle, component, patching, and vulnerability evidence.
- SBOM/VEX expectations, SLSA and provenance mechanisms, procurement requirements, and customer assurance requests.

## Threats and failure modes addressed

SSDF-relevant practices can help reduce supply chain failures such as:

- insecure software or firmware development practices introduce vulnerabilities
- third-party components are used without review or vulnerability tracking
- source, build, or release environments are not protected
- release approval and signing evidence is missing
- vulnerability response is not tied to affected products or versions
- suppliers provide policy claims without product-scoped artefacts
- development and release evidence is not retained for audit, customer assurance, or incident response
- known limitations in supplier software evidence are hidden

## SSDF expectations mapped to supply chain controls and evidence

| SSDF-related expectation | Supply chain threat or failure mode | Practices & controls | Evidence to retain or request |
|---|---|---|---|
| Secure development governance | Secure development is described as a policy but not operated for the product, firmware, or release under review. | Secure development and release governance, ownership, review cadence. | SDLC policy, secure coding guidance, security requirements, review records, training or role records, governance records. |
| Protected source, build, and release environments | Source, build, dependency, or release pipelines can be compromised or changed without detection. | Build and release controls, access control, release approval, signing readiness. | Access records, build logs, release approvals, change records, signing event records, provenance records. |
| Third-party component management | Components or dependencies introduce vulnerabilities or unsupported code that cannot be traced to affected products. | Component inventory, dependency review, SBOM/xBOM generation, supplier component review. | SBOM, dependency inventory, component review records, supplier declarations, vulnerability impact assessments. |
| Vulnerability response | Vulnerabilities are acknowledged without affected-version analysis, remediation evidence, or customer communication. | Vulnerability intake, triage, affected-product analysis, remediation tracking, status communication. | Triage records, affected-version analysis, remediation records, VEX/status statements, customer notifications, risk acceptances. |
| Release integrity | Software or firmware is released without clear approval, signing, provenance, or rollback evidence. | Release approval workflow, signing control, update approval, rollback and recovery evidence. | Signed release artefacts, update manifests, provenance records, approval logs, rollback and recovery records. |
| Supplier software assurance | Supplier software evidence is generic, stale, or not tied to the product, version, component, service, or lifecycle decision. | Supplier evidence requirements, supplier review, product-scoped evidence package. | Supplier development evidence, vulnerability commitments, product-scoped artefacts, known limitations, remediation plans, retention commitments. |

## What to do next

- Use [Secure Development and Release Governance](../../practices-controls/secure-development-release-governance.md) to turn SSDF-driven needs into release and development controls.
- Use [Software Component and Vulnerability Management](../../practices-controls/software-components-vulnerability-management.md) and [Secure Updates and Lifecycle Monitoring](../../practices-controls/secure-updates-lifecycle-monitoring.md) to identify evidence for dependencies, vulnerabilities, releases, and updates.
- Use [Supplier and Procurement Assurance](../../practices-controls/supplier-assurance-procurement.md) when SSDF appears in supplier software assurance, procurement, or customer evidence requests.
- Use [Vulnerability Response Evidence](../../resources/worked-examples/vulnerability-response-evidence.md) and [Secure Update Approval](../../resources/worked-examples/secure-update-approval.md) to see how software and firmware claims become reviewable evidence packages.
- Use [SBOM, VEX, and Component Visibility](../../technology-options/sbom-vex-component-visibility.md), [Signing, Keys, and Credentials](../../technology-options/signing-keys-credentials.md), and [Evidence Repositories, Logs, and Retention](../../technology-options/evidence-repositories-logs-retention.md) for implementation mechanisms.
