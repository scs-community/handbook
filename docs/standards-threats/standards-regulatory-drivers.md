---
title: Standards & Regulatory Drivers
sidebar_position: 3
---

Standards and regulatory drivers explain why readers may need supply-chain-security guidance. They may define control expectations, shape audit evidence, influence procurement language, describe assurance obligations, or create a need for practical interpretation. They usually do not provide the complete technical evidence mechanism.

## Mapping Summary

| Field | Guidance |
|---|---|
| Role | Contextual source for standards, regulatory expectations, governance, risk management, audit, procurement, or customer assurance needs. |
| Lifecycle fit | Design, sourcing, procurement, acceptance, operation, audit, renewal, and risk review. |
| Evidence supported | Policies, control mappings, risk assessments, audit evidence, supplier requirements, acceptance criteria. |
| What it does not solve | Usually does not define product-specific identity evidence, attestation formats, lifecycle-state records, or implementation profiles. |
| Mapping confidence | Often contextual or supporting. Direct only when a source clearly defines an evidence model, control, or artifact requirement. |

## Entries

### NIST

- **Role:** Provides governance, risk, cybersecurity framework, secure development, and supply-chain-risk context that may drive control expectations.
- **Lifecycle fit:** Design, sourcing, procurement, implementation planning, audit, risk review, and lifecycle governance.
- **Evidence supported:** Policy mappings, risk assessments, control evidence, supplier requirements, and audit evidence.
- **What it does not solve:** Does not by itself define product-specific hardware identity, attestation evidence, or what evidence is sufficient for a given procurement decision.
- **Mapping confidence:** Contextual or supporting; direct only for specific controls or guidance statements in a cited NIST publication.
- **Source/version note:** Use source-specific references such as NIST CSF 2.0, NIST SP 1305 C-SCRM Quick-Start Guide (2024), NIST SP 800-161r1-upd1 (2024), and NIST SP 800-218 SSDF v1.1 (2022).

### ISO

- **Role:** Provides governance, management-system, risk, assurance, and sector-framework context that may shape organizational requirements.
- **Lifecycle fit:** Governance, procurement, audit, risk review, certification planning, and supplier management.
- **Evidence supported:** Policies, procedures, audit records, risk treatment records, supplier requirements, and management-system evidence.
- **What it does not solve:** Does not usually define technical device evidence, attestation formats, or lifecycle-state artifacts.
- **Mapping confidence:** Contextual or supporting; direct only where a cited ISO standard defines a specific control or evidence expectation.
- **Source/version note:** Use ISO/IEC 27036-3:2023, Cybersecurity - Supplier relationships - Part 3: Guidelines for hardware, software, and services supply chain security, Edition 2, published 2023-06.

### ENISA

- **Role:** Provides European cybersecurity guidance and threat/risk context that may inform requirements and assurance expectations.
- **Lifecycle fit:** Requirements translation, risk review, procurement, audit, sector analysis, and resilience planning.
- **Evidence supported:** Risk framing, good-practice mappings, control rationale, and sector-context evidence.
- **What it does not solve:** Does not provide a universal technical evidence format or product acceptance workflow.
- **Mapping confidence:** Contextual or supporting depending on the specific ENISA publication.
- **Source/version note:** Use ENISA Good Practices for Supply Chain Cybersecurity and ENISA Threat Landscape for Supply Chain Attacks; cite publication page and date when making specific claims.

### NCSC

- **Role:** Provides public guidance that may help organizations frame assurance, procurement, vulnerability, and secure technology expectations.
- **Lifecycle fit:** Procurement, operations, supplier assurance, vulnerability handling, and risk management.
- **Evidence supported:** Assurance questions, policy expectations, procurement criteria, and operational guidance evidence.
- **What it does not solve:** Does not define a complete supply-chain-security evidence model for all products or sectors.
- **Mapping confidence:** Contextual or supporting depending on the specific NCSC guidance.
- **Source/version note:** Use the UK NCSC Supply Chain Security Guidance collection and its 12 Principles pages; cite page version/review date where available.

### CISA

- **Role:** Provides public guidance, secure-by-design, SBOM, vulnerability, critical-infrastructure, and supply-chain-risk context.
- **Lifecycle fit:** Requirements translation, procurement, supplier assurance, vulnerability response, audit, and risk management.
- **Evidence supported:** Good-practice references, supplier assurance framing, vulnerability and SBOM-related evidence expectations.
- **What it does not solve:** Does not by itself define all product-specific trust anchors, attestation evidence, or lifecycle retention requirements.
- **Mapping confidence:** Contextual or supporting; direct only for specific guidance statements in a cited CISA source.
- **Source/version note:** Use the CISA SBOM topic page, CISA Framing Software Component Transparency (2024), and CISA 2025 Minimum Elements for a Software Bill of Materials when making SBOM claims.

### Sector references

- **Role:** Provide domain-specific assurance expectations where generic guidance needs interpretation for regulated or high-consequence environments.
- **Lifecycle fit:** Sector procurement, product acceptance, audit, certification, operations, and lifecycle assurance.
- **Evidence supported:** Sector-specific acceptance criteria, audit evidence, retention expectations, and assurance statements.
- **What it does not solve:** Should not replace the general site model or become top-level navigation unless enough content exists.
- **Mapping confidence:** Contextual or adjacent unless a cited sector reference directly defines evidence expectations.
- **Source/version note:** For sector references, cite the exact source, jurisdiction, publication date, and version because sector expectations differ materially.

## Practical Questions

### Questions to ask suppliers

- Which standard, framework, or technology are you relying on, and for what assurance decision?
- What evidence does it help produce, protect, exchange, verify, or retain?
- What product, component, platform, service, or lifecycle stage is the evidence bound to?

### Questions to ask internally

- Are we treating this source as a standards driver, regulatory expectation, evidence model, artifact format, implementation option, or contextual reference?
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

- [Standards & Threats](./index.md)
- [Practices & Controls](../practices-controls/index.md)
- [Evidence](../evidence/index.md)
- [10 Best Practices](../practices-controls/10-best-practices.md)
- [Standards Mapping Workflow](../resources/standards-mapping-workflow.md)
- [Further Reading](../resources/further-reading.md)
