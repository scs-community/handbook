---
title: Standards and Regulations
sidebar_position: 1
description: "Compare supply chain security standards and regulatory drivers, including CRA, NIS2, NIST SSDF, NIST SP 800-161, and IEC 62443."
---

Standards, regulations, procurement expectations, and assurance frameworks create external pressure to act.

This page connects those drivers to the supply chain threats, practices, controls, and evidence expectations covered elsewhere in the handbook. It is a routing page, not a legal compliance checklist.

## Current drivers

| Driver | Why it matters | Supply chain security relevance | Related threats / failure modes |
|---|---|---|---|
| [EU Cyber Resilience Act](./eu-cyber-resilience-act.md) | Product cybersecurity and lifecycle obligations for products with digital elements placed on the EU market. | Relevant to secure development, software and component visibility, vulnerability handling, secure updates, technical documentation, and support-period obligations. | Vulnerable third-party components, unclear provenance, insecure update paths, poor vulnerability response, weak evidence. |
| [NIS2](./nis2.md) | Cybersecurity risk-management and governance expectations for essential and important entities, including supply chain and supplier relationships. | Relevant to supplier assurance, procurement requirements, third-party risk, incident coordination, dependency visibility, and customer assurance expectations. | Compromised suppliers, weak supplier governance, incident propagation through suppliers or managed services, missing supplier evidence, unclear accountability. |
| [NIST SP 800-161](./nist-sp-800-161.md) | Cybersecurity supply chain risk-management guidance for systems, products, services, suppliers, and organisational risk management. | Relevant to supplier criticality, acquisition requirements, supplier assurance, dependency visibility, risk response, exception handling, and supplier coordination. | Unknown critical suppliers, weak supplier risk assessment, opaque sub-tier dependencies, unmanaged dependency risk, stale supplier evidence. |
| [IEC 62443](./iec-62443.md) | Industrial automation and control system security guidance, with product-development and component-security relevance for connected industrial systems. | Relevant to secure product development, product and component acceptance, patch management, vulnerability handling, end-of-life support, and responsibility boundaries. | Insecure industrial components, unclear patch responsibilities, weak product lifecycle evidence, unsupported products, unclear integrator and supplier boundaries. |
| [NIST SSDF](./nist-ssdf.md) | Secure software development practices for reducing software vulnerabilities and improving software assurance. | Relevant to secure development governance, protected source/build/release environments, third-party component management, vulnerability response, release integrity, and supplier software evidence. | Weak secure development evidence, vulnerable dependencies, compromised build or release paths, unsupported software claims, poor vulnerability response. |

## Which driver should I start with?

| Start with... | When the pressure is... |
|---|---|
| [EU Cyber Resilience Act](./eu-cyber-resilience-act.md) | Product cybersecurity, support period, vulnerability handling, technical documentation, or EU market access. |
| [NIS2](./nis2.md) | Regulated-customer supplier risk, procurement clauses, incident coordination, or customer assurance. |
| [NIST SP 800-161](./nist-sp-800-161.md) | Supplier or dependency risk management, acquisition, sub-tier visibility, risk response, or C-SCRM governance. |
| [IEC 62443](./iec-62443.md) | Industrial or OT product security, component security, patching, end-of-life, or product lifecycle evidence. |
| [NIST SSDF](./nist-ssdf.md) | Software or firmware development, build and release governance, third-party components, or vulnerability response. |

## Driver types in brief

CRA is primarily product-led: it asks whether products with digital elements are designed, maintained, updated, documented, and supported securely.

NIS2 is primarily organisation- and risk-management-led: it asks whether essential and important entities manage cybersecurity risks, including supply chain and supplier risks, in a governed way.

NIST SP 800-161 is C-SCRM-led: it asks whether supplier, acquisition, product, service, and dependency risks are identified, assessed, mitigated, monitored, and retained as governed risk decisions.

IEC 62443 is industrial-product and system-security-led: it asks whether industrial products, components, development practices, patching, and lifecycle responsibilities are understood and evidenced.

NIST SSDF is secure-software-development-led: it asks whether software and firmware development practices reduce vulnerabilities and produce evidence that customers, product teams, or auditors can review.

These drivers can all support supply chain security work, but they create different control and evidence expectations.

## How to use these pages

Start with a driver page when a regulation, standard, customer assurance request, procurement expectation, audit, or framework is the reason for action. Then follow the links to:

- [Threats and Failure Modes](../threats-failure-modes/index.md) to understand what the driver is trying to reduce.
- [Practices & Controls](../../practices-controls/index.md) to identify practical control themes.
- [Evidence Checklist](../../resources/evidence-checklist.md) to decide which records, claims, logs, attestations, and audit materials matter.
- [Technology Options](../../technology-options/index.md) to compare mechanisms that may support implementation and verification.

## Planned pages

Later pages may cover NIST IoT guidance, ETSI EN 303 645, SLSA, SBOM/VEX expectations, and procurement or customer assurance expectations.
