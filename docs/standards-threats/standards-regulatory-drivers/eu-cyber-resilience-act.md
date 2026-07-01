---
title: "EU Cyber Resilience Act: Product Cybersecurity and Lifecycle Evidence"
sidebar_label: EU Cyber Resilience Act
sidebar_position: 2
---

The EU Cyber Resilience Act (CRA) creates product cybersecurity and lifecycle obligations for products with digital elements placed on the EU market. It increases pressure on manufacturers and product teams to understand how software, firmware, components, suppliers, updates, vulnerabilities, technical documentation, and lifecycle support affect product security.

For supply chain security, the practical question is not only whether a product has controls. It is whether the manufacturer can show how product and supplier risks are managed across design, release, update, vulnerability handling, and support.

Use this page when product cybersecurity regulation, technical documentation, lifecycle support, vulnerability handling, or market-access pressure is the reason for action.

This page focuses only on the parts of CRA that drive supply chain security controls and evidence. It is not a full CRA legal guide.

:::info[Source status]

This page is based on Regulation (EU) 2024/2847 and related European Commission CRA guidance listed below. It was last reviewed against the linked official sources on 2026-07-01. It interprets supply-chain-security implications for this handbook and is not a complete legal compliance guide.

:::

## Official references

Use the legal text for obligations and dates. Use guidance sources to interpret what practical implementation may require.

- [Regulation (EU) 2024/2847, the Cyber Resilience Act](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402847), as published in the Official Journal.
- [Consolidated CRA text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120), for easier article and annex citation.
- [European Commission CRA FAQ](https://ec.europa.eu/newsroom/dae/redirection/document/122331), for implementation and transition questions.
- [Implementing Regulation (EU) 2025/2392](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202502392), for technical descriptions of product categories in Annexes III and IV.
- [BSI TR-03183](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03183/BSI-TR-03183-1-0_9_0.pdf), as a practical technical guideline for cyber resilience requirements.

## Who should care

This page is relevant to:

- Manufacturers and product teams preparing products with digital elements for the EU market.
- Suppliers providing software, firmware, components, cloud functions, or security-relevant services to those products.
- Importers, distributors, and authorised representatives who may need evidence that product cybersecurity obligations are being handled.
- Customers, procurement teams, auditors, and assurance reviewers asking for product security evidence.

## Scope and supply chain relevance

CRA applies to [products with digital elements](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_3) placed on the EU market. In practical terms, that can include software, hardware, firmware, connected devices, and remote data-processing solutions that are part of the product's function.

CRA-relevant supply chain work usually centres on secure development and release governance; software, firmware, and component visibility; supplier and dependency assurance; vulnerability handling during the support period; secure update capability; technical documentation; retained assurance evidence; and lifecycle support commitments.

For supply chain security, scope questions usually become evidence questions:

- Which software, firmware, components, services, and supplier inputs are part of the product?
- Which dependencies or supplier-delivered elements affect security during the support period?
- Which updates, vulnerability records, SBOMs, technical documentation, and supplier evidence need to be retained?

This page does not attempt to decide legal scope for every product. It highlights the supply chain security work that CRA can drive when a product is in scope.

## Key dates and status

Use these dates for planning, not as legal advice:

| Date | Planning significance |
|---|---|
| 2024-12-10 | CRA [entered into force](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_71). |
| 2026-09-11 | Vulnerability and incident reporting duties begin for manufacturers under [Article 14](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_14). |
| 2027-12-11 | Main CRA requirements apply, including essential cybersecurity requirements, conformity assessment, technical documentation, and CE-marking obligations. |

The most important planning point for this handbook is the support-period and lifecycle implication: product teams need ways to maintain visibility of components, vulnerabilities, updates, supplier inputs, and retained evidence after initial release.

## Relationship to other standards and drivers

CRA is product-led. It asks whether products with digital elements are designed, maintained, updated, documented, and supported securely.

It may interact with:

- [NIS2](./nis2.md), where customers or operators are regulated entities managing supplier and product security risk.
- Radio Equipment Directive requirements for connected radio products.
- [IEC 62443](./iec-62443.md), [NIST SSDF](./nist-ssdf.md), ETSI EN 303 645, SBOM/VEX expectations, and procurement or customer assurance requirements.
- [Technology Options](../../technology-options/index.md) that support transparency, provenance, signing, attestation, and verification.

## Harmonised standards and presumption of conformity

Harmonised standards may become important because they can provide a route to [presumption of conformity](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_27) for relevant CRA requirements. For supply chain security, that does not remove the need to understand the underlying evidence.

Even where a standard supports conformity, product teams and suppliers may still need to show which controls operate, which products or components are covered, which evidence is retained, and how updates or vulnerability decisions are handled during the support period.

## Threats and failure modes addressed

CRA-relevant practices can help reduce supply chain failures such as:

- vulnerable third-party components included without review
- unclear software or firmware provenance
- insecure or unauthorised update mechanisms
- weak vulnerability handling during the support period
- missing or incomplete SBOM or component visibility
- insufficient supplier or component assurance
- poor signing and release governance
- weak technical documentation evidence
- unsupported products remaining in use without clear lifecycle commitments

## CRA expectations mapped to supply chain controls and evidence

| CRA-related expectation | Supply chain threat or failure mode | Practices & controls | Evidence to retain or request |
|---|---|---|---|
| Secure development and product security lifecycle | Vulnerabilities are introduced through software, firmware, dependencies, or supplier-delivered components. | Secure development practices, dependency review, supplier security expectations, release governance. | Secure development records, dependency and component inventories, security review records, supplier declarations, release approval records. |
| Vulnerability handling during the support period | Known vulnerabilities remain untracked, unassessed, or unpatched across product and supplier components. | Vulnerability intake, triage, impact assessment, remediation workflow, supplier coordination, disclosure process. | Vulnerability records, triage decisions, remediation plans, supplier notifications, VEX/status statements, disclosure records. |
| Secure update capability | Unauthorised, malicious, or vulnerable firmware or software is delivered to products. | Signed updates, update authorisation, release approval, rollback protections, update monitoring. | Signing records, update manifests, release approvals, update logs, rollback and recovery records. |
| Software and component visibility | Teams cannot identify affected products when a component or dependency is compromised or vulnerable. | SBOM or component inventory generation, dependency tracking, product/component mapping. | SBOMs, component inventories, dependency review records, vulnerability impact assessments. |
| Technical documentation and assurance evidence | The manufacturer cannot demonstrate that supply chain controls are defined and operating. | Evidence retention, control mapping, documentation ownership, assurance review process. | Technical documentation, control records, audit logs, test reports, supplier evidence, update and vulnerability records. |
| Supply-chain-aware lifecycle support and maintenance | Products remain in use after supplier support, component visibility, update availability, or vulnerability handling commitments are unclear. | Support-period definition, supplier and component support tracking, end-of-support communication, maintenance planning, customer notification. | Support policy, supplier support records, component support status, maintenance records, end-of-support notices, update history, customer communications. |

## What to do next

- Use [Threats and Failure Modes](../threats-failure-modes/index.md) to connect CRA-driven work to concrete supply chain failures.
- Use [10 Best Practices](../../practices-controls/10-best-practices.md) and [Lifecycle Map](../../practices-controls/lifecycle-map.md) to turn expectations into practical controls.
- Use [Software, Component & Vulnerability Management](../../practices-controls/software-component-vulnerability-management.md) and [Secure Update & Lifecycle Monitoring](../../practices-controls/secure-update-lifecycle-monitoring.md) to identify evidence for SBOM, dependency, update, and vulnerability work.
- Use [Transparency Artefacts & Component Visibility](../../technology-options/transparency-artefacts-component-visibility.md), [Signing, Keys & Credential Mechanisms](../../technology-options/signing-keys-credential-mechanisms.md), [Update & Recovery Mechanisms](../../technology-options/update-recovery-mechanisms.md), and [Evidence Exchange & Verifier Workflows](../../technology-options/evidence-exchange-verifier-workflows.md) for implementation mechanisms.
- Use [Supplier Questions](../../resources/supplier-questions.md) and the [Evidence Checklist](../../resources/evidence-checklist.md) when turning CRA-driven needs into supplier or audit requests.
