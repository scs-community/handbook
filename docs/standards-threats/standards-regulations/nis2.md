---
title: "NIS2: Supplier Risk Governance and Customer Assurance"
sidebar_label: NIS2
sidebar_position: 3
description: "Understand how NIS2 supplier risk governance creates evidence needs for procurement, assurance, incident response, and customer confidence."
---

NIS2 raises cybersecurity risk-management and governance expectations for essential and important entities, including supply chain and supplier risks. It makes supply chain risk part of governed cybersecurity risk management for regulated organisations, and that can affect suppliers indirectly through procurement requirements, contractual commitments, customer assurance requests, audits, and incident reporting expectations.

For many suppliers, NIS2 will appear as customer flow-down rather than direct regulation. Even when a supplier is not directly regulated, NIS2 can show up as procurement requirements, contractual security clauses, evidence requests, incident notification commitments, and supplier assurance reviews.

For suppliers and product manufacturers, the practical effect may be a stronger need to explain security practices, provide evidence, coordinate incidents, and show how third-party dependencies are managed.

Use this page when regulated-customer pressure, supplier assurance, procurement requirements, contractual commitments, incident coordination, or customer evidence requests are the reason for action.

This page focuses only on the parts of NIS2 that drive supply chain security controls and evidence. It is not a full NIS2 compliance guide.

:::info[Source status]

This page is based on Directive (EU) 2022/2555 and related national implementation context. It was last reviewed against the linked official EUR-Lex sources on 2026-07-01. It interprets supply chain security implications for this handbook and is not a complete legal compliance guide.

:::

## Official references

Use the legal text and national implementation sources for obligations, scope, and enforcement details. This page only interprets the supply chain security implications.

- [Directive (EU) 2022/2555, the NIS2 Directive](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555), as published on EUR-Lex.
- [NIS2 risk-management measures](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_21), especially the supply chain and supplier relationship expectations in Article 21.
- [NIS2 reporting obligations](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_23), for incident notification context.
- National transposition laws and regulator guidance, because NIS2 is a directive and implementation details can differ by Member State.

## Who should care

This page is relevant to:

- Essential and important entities managing supply chain and supplier cybersecurity risk.
- Suppliers, product manufacturers, managed service providers, and technology vendors selling into regulated organisations.
- Procurement, risk, audit, and assurance teams translating NIS2-driven expectations into supplier requirements.
- Product and security teams asked to provide evidence to regulated customers.

## Scope and supply chain relevance

NIS2 applies to [essential and important entities](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_3) in covered sectors. The main distinction for this handbook is not the full sector classification; it is the supply chain effect created when regulated entities need to manage cybersecurity risks across suppliers, service providers, technology products, and dependencies.

NIS2 directly affects regulated entities. It can indirectly affect suppliers because those entities may need stronger supplier assurance, clearer procurement requirements, contractual security commitments, dependency visibility, and incident coordination processes.

Supplier-facing requests may include evidence of secure development, vulnerability handling, SBOM or component visibility, incident notification processes, and governance of third-party dependencies.

For supply chain security, scope questions usually become assurance questions:

- Is the customer a regulated entity or supplying one?
- Which suppliers, managed services, software, firmware, products, or dependencies support critical services?
- What procurement, contract, audit, incident, vulnerability, or assurance evidence will the customer require?

This page does not attempt to determine whether an organisation is in scope. It focuses on the supply chain security expectations that may flow from NIS2-regulated customers and sectors.

## Key dates and status

Use these dates for planning, not as legal advice:

| Date | Planning significance |
|---|---|
| 2023-01-16 | NIS2 [entered into force](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_45). |
| 2024-10-17 | Member State [transposition deadline](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022L2555#art_41). |
| 2024-10-18 | NIS2 rules became applicable through national implementation. |

## Relationship to other standards and drivers

CRA is product-led: it asks whether products with digital elements are designed, maintained, updated, documented, and supported securely.

NIS2 is organisation- and risk-management-led: it asks whether essential and important entities manage cybersecurity risks, including supply chain and supplier risks, in a governed way.

The two can meet in procurement. A NIS2-regulated customer may ask suppliers for product security, vulnerability, update, SBOM, and assurance evidence that overlaps with CRA-driven product security work.

It may interact with:

- [EU Cyber Resilience Act](./eu-cyber-resilience-act.md), where products with digital elements need product security and lifecycle evidence.
- [NIST SP 800-161](./nist-sp-800-161.md), where supplier and supply chain risk need a C-SCRM operating model.
- [NIST SSDF](./nist-ssdf.md) and [IEC 62443](./iec-62443.md), where supplier software, firmware, product, or component evidence is requested by regulated customers.
- Certification, assurance frameworks, contractual commitments, and incident coordination requirements in supplier relationships.

Those mechanisms are useful only when they connect back to specific risks, controls, and evidence.

## Threats and failure modes addressed

NIS2-relevant supply chain work can help reduce failures such as:

- compromised supplier or managed service provider
- weak procurement security requirements
- insufficient visibility of critical suppliers and dependencies
- incident propagation through supplier systems or services
- poor supplier incident notification and coordination
- lack of accountability for third-party dependencies
- unmanaged third-party access
- weak assurance evidence from suppliers
- incomplete governance of software, firmware, or service dependencies

## NIS2 expectations mapped to supply chain controls and evidence

| NIS2-related expectation | Supply chain threat or failure mode | Practices & controls | Evidence to retain or request |
|---|---|---|---|
| Supply chain and supplier relationship security | Critical suppliers introduce vulnerabilities, outages, compromise paths, or unmanaged dependencies. | Supplier inventory, supplier criticality assessment, supplier security requirements, periodic assurance review. | Supplier inventory, supplier assessments, assurance questionnaires, audit reports, supplier risk ratings, review records. |
| Security in procurement and supplier contracts | Products or services are procured without clear cybersecurity, incident, update, vulnerability, or evidence expectations. | Procurement security requirements, contractual security clauses, minimum evidence requirements, acceptance criteria. | Security clauses, procurement checklists, supplier commitments, product security evidence, acceptance records. |
| Incident handling and supplier coordination | Supplier incidents are not reported, escalated, or coordinated quickly enough to prevent customer impact. | Supplier incident notification requirements, escalation contacts, incident playbooks, customer/supplier communication process. | Incident notification clauses, incident records, escalation logs, post-incident reviews, supplier communications. |
| Vulnerability handling across third-party dependencies | Vulnerabilities in supplier software, firmware, services, or components are not identified or remediated. | Vulnerability disclosure process, dependency tracking, supplier remediation expectations, VEX/status communication. | Vulnerability records, dependency inventories, supplier advisories, remediation plans, VEX/status statements. |
| Governance and accountability for third-party risk | Supply chain risk is treated as informal technical debt rather than a governed organisational risk. | Ownership, risk acceptance process, periodic review, exception management, management reporting. | Risk registers, exception records, review minutes, ownership records, management reports. |

## Supplier assurance and incident coordination

NIS2-driven customers may ask suppliers to show how security expectations are defined, reviewed, and maintained. Useful supplier evidence is usually evidence that supports a decision: whether to procure, accept, operate, renew, escalate, or remediate.

Supplier evidence may include questionnaires, security addenda, SBOMs or component inventories, vulnerability handling records, incident notification commitments, audit reports, risk acceptance records, and customer-facing remediation updates.

## What to do next

- Use [Supplier and Procurement Assurance](../../practices-controls/supplier-assurance-procurement.md) to turn NIS2-driven needs into supplier-facing assurance work.
- Use [Audit and Compliance Readiness](../../practices-controls/audit-compliance-readiness.md) and [Secure Updates and Lifecycle Monitoring](../../practices-controls/secure-updates-lifecycle-monitoring.md) for review and operating models.
- Use [Software Component and Vulnerability Management](../../practices-controls/software-components-vulnerability-management.md), [Secure Updates and Lifecycle Monitoring](../../practices-controls/secure-updates-lifecycle-monitoring.md), and [Audit and Compliance Readiness](../../practices-controls/audit-compliance-readiness.md) to identify useful evidence.
- Use [SBOM, VEX, and Component Visibility](../../technology-options/sbom-vex-component-visibility.md) and [Evidence Exchange and Verifier Workflows](../../technology-options/evidence-exchange-verifier-workflows.md) where machine-readable evidence or exchange workflows may help.
- Use [Supplier Security Questions](../../resources/supplier-security-questions.md) and the [Evidence Checklist](../../resources/evidence-checklist.md) to keep customer and supplier requests consistent.
