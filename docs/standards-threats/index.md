---
title: Standards & Threats
sidebar_label: Overview
sidebar_position: 1
description: "Start with supply chain security standards, regulations, threat patterns, and failure modes before mapping controls, evidence, and technologies."
---

Supply chain security work is usually driven by two forces: the standards, regulations, procurement expectations, and assurance frameworks organizations need to satisfy; and the real threats, attack patterns, and lifecycle failures those requirements are meant to reduce.

This section connects both sides. Start with a standard if you need to understand an external obligation. Start with a threat if you need to understand what could go wrong. Each route leads to practical controls, evidence expectations, and implementation options.

## Why start here?

Compliance pressure, procurement requirements, customer assurance requests, audit needs, and real attack concerns often point at the same underlying work. A standard may explain why action is required; a threat pattern explains what the action is trying to prevent.

Use this section to move from the reason action is needed to the control and evidence questions that follow.

## Start with a standard, regulation, or driver

Use [Standards and Regulations](./standards-regulations/index.md) when a regulation, standard, procurement expectation, customer request, audit, or assurance framework is driving the work.

Current driver pages include:

- [EU Cyber Resilience Act](./standards-regulations/eu-cyber-resilience-act.md)
- [NIS2](./standards-regulations/nis2.md)
- [NIST SP 800-161](./standards-regulations/nist-sp-800-161.md)
- [IEC 62443](./standards-regulations/iec-62443.md)
- [NIST SSDF](./standards-regulations/nist-ssdf.md)

## Start with a threat pattern

Use [Threats and Failure Modes](./threats/index.md) when the starting question is what could go wrong: substituted components, compromised dependencies, unclear provenance, insecure update paths, weak supplier evidence, credential compromise, or lifecycle drift.

## How the handbook connects the pieces

The handbook uses the same translation pattern across standards and threats:

| Step | Question |
|---|---|
| Standard or threat | What standard, regulation, procurement expectation, customer request, audit need, threat, or failure mode brings the reader here? |
| Practice or control | What control, responsibility, supplier question, or lifecycle behavior should operate? |
| Evidence | What artifact, record, claim, measurement, attestation, certificate, manifest, SBOM, update record, vulnerability record, lifecycle-state record, log, or audit material would support the control? |
| Technology options | Which mechanisms, protocols, formats, trust anchors, verifier workflows, or tooling may help produce, protect, exchange, verify, or retain the evidence? |

## Current pages

- [Standards and Regulations](./standards-regulations/index.md)
- [EU Cyber Resilience Act](./standards-regulations/eu-cyber-resilience-act.md)
- [NIS2](./standards-regulations/nis2.md)
- [NIST SP 800-161](./standards-regulations/nist-sp-800-161.md)
- [IEC 62443](./standards-regulations/iec-62443.md)
- [NIST SSDF](./standards-regulations/nist-ssdf.md)
- [Threats and Failure Modes](./threats/index.md)
- [Product and Component Trust Failures](./threats/product-component-trust-failures.md)
- [Software and Update-Chain Compromise](./threats/software-update-chain-compromise.md)
- [Supplier Assurance Failures](./threats/supplier-assurance-failures.md)

## Next actions

- If you need the conceptual starting point for concrete threats, read [Threats and Failure Modes](./threats/index.md).
- If you need standards and governance context, read [Standards and Regulations](./standards-regulations/index.md).
- If you need control themes, read [Practices & Controls](../practices-controls/index.md).
- If you need supplier-facing wording, use [Supplier Security Questions](../resources/supplier-security-questions.md).
- If you need artifacts, use the [Evidence Checklist](../resources/evidence-checklist.md).
- If you need implementation context, review [Technology Options](../technology-options/index.md).
