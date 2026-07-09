---
title: Supply Chain Security Standards and Regulations
sidebar_position: 1
sidebar_label: Overview
description: "Compare supply chain security standards and regulations including CRA, NIS2, NIST SP 800-161, IEC 62443, and NIST SSDF."
---

Standards and regulations often explain why supply-chain-security work is needed. Procurement requirements, customer assurance requests, and audit questions often point to the same sources.

Use this page to find the relevant standard, regulation, or framework, understand the supply-chain question it raises, and follow the links into threats, practices, evidence, and implementation options.

This is a routing page, not a legal, certification, or compliance checklist.

## Where to start

| Page | Start here when... | Main supply-chain focus |
|---|---|---|
| [EU Cyber Resilience Act](./eu-cyber-resilience-act.md) | Product cybersecurity, vulnerability handling, support-period obligations, technical documentation, or EU market access are the issue. | Product lifecycle evidence, secure updates, vulnerability handling, component visibility, and supplier inputs. |
| [NIS2](./nis2.md) | Regulated-customer supplier risk, procurement clauses, incident coordination, or customer assurance is the issue. | Supplier assurance, procurement evidence, incident coordination, and third-party risk governance. |
| [NIST SP 800-161](./nist-sp-800-161.md) | Supplier or dependency risk management, acquisition, sub-tier visibility, or C-SCRM governance is the issue. | Supplier criticality, acquisition evidence, dependency visibility, risk response, and exception handling. |
| [IEC 62443](./iec-62443.md) | Industrial or OT product security, component security, patching, end-of-life, or lifecycle evidence is the issue. | Secure product development, component acceptance, vulnerability handling, patching, and responsibility boundaries. |
| [NIST SSDF](./nist-ssdf.md) | Software or firmware development, build/release governance, third-party components, or vulnerability response is the issue. | Secure development evidence, release integrity, component management, and supplier software assurance. |

:::info[CRA vertical example]

For a more specific CRA-related example, see [ETSI EN 304 623: Boot Managers](./eu-cyber-resilience-act/etsi-en-304-623-boot-managers.md). It maps a draft boot-manager standard to evidence questions for trust anchors, verified or measured boot, updates, rollback protection, debug interfaces, vulnerability handling, and assessment records.

:::

## How these sources differ

- **CRA starts with the product.** It asks whether products with digital elements are designed, maintained, updated, documented, and supported securely.
- **NIS2 starts with organizational risk management.** It asks whether regulated entities manage cybersecurity risks, including supplier and supply-chain risks.
- **NIST SP 800-161 starts with supply-chain risk management.** It gives teams a model for managing supplier, acquisition, product, service, and dependency risks as governed risk decisions.
- **IEC 62443 starts with industrial systems and components.** It gives industrial-product teams vocabulary for secure development, component security, patching, lifecycle responsibilities, and evidence.
- **NIST SSDF starts with software development.** It helps teams describe and evidence secure software and firmware development, release integrity, component management, and vulnerability response.

These sources can all support supply chain security work, but they create different control and evidence expectations.

## How to use these pages

Start with the page that matches the standard, regulation, procurement requirement, customer request, or audit question you are facing. Then follow the links to:

- [Threats and Failure Modes](../threats/index.md) to understand what the requirement is trying to reduce.
- [Practices & Controls](../../practices-controls/index.md) to identify practical control themes.
- [Evidence Checklist](../../resources/evidence-checklist.md) to decide which records, claims, logs, attestations, and audit materials matter.
- [Evidence Package Template](../../resources/evidence-package-template.md) and [Worked Examples](../../resources/worked-examples/index.md) to package and compare evidence-backed decisions.
- [Technology Options](../../technology-options/index.md) to compare mechanisms that may support implementation and verification.
