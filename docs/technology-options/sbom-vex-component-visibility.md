---
title: "SBOM, VEX, and Component Visibility"
sidebar_position: 5
sidebar_label: "SBOM, VEX, and Component Visibility"
description: "Use SBOMs, VEX, xBOMs, inventories, and component transparency artifacts to support supply chain security decisions and vulnerability response."
---

Transparency artifacts describe software, firmware, hardware, components, services, dependencies, vulnerabilities, or product composition. They can help teams understand what is present, what may be affected, and what evidence is needed for supplier assurance, product acceptance, vulnerability response, and audit.

This option area is useful when a control depends on component visibility or when a customer, operator, auditor, assessor, or procurement team needs structured evidence about product composition.

## What this option area is for

Transparency artifacts may support:

- software, firmware, hardware, service, or cryptographic asset visibility;
- component and dependency inventory;
- supplier and sub-tier visibility;
- vulnerability status and impact analysis;
- product acceptance, audit, and update planning.

They are commonly relevant to [Software Component and Vulnerability Management](../practices-controls/software-components-vulnerability-management.md), [Supplier and Procurement Assurance](../practices-controls/supplier-assurance-procurement.md), [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md), and [Secure Development and Release Governance](../practices-controls/secure-development-release-governance.md).

## Where it fits

| Lifecycle stage | How it may help |
|---|---|
| Sourcing and design | Identify expected components, dependencies, and supplier inputs |
| Build and release | Produce version-bound composition records and dependency metadata |
| Acceptance | Review whether supplied artifacts match the product, version, and acceptance scope |
| Vulnerability response | Determine whether a product or component is affected, not affected, fixed, or under investigation |
| Audit and renewal | Retain explainable composition and vulnerability-status records |

## Options covered

### SBOM / xBOM

- **Assurance role:** Represents software or broader component transparency so recipients can understand what is present in a product or platform.
- **Evidence supported:** Software, firmware, hardware, component, service, cryptographic asset, or dependency inventories depending on scope.
- **Lifecycle fit:** Sourcing, build, release, acceptance, update, vulnerability response, audit, and renewal.
- **Dependencies:** Product/version binding, generation process, supplier coverage, update process, vulnerability workflow, and repository handling.
- **What it does not prove:** Does not prove security, integrity, authenticity, patch status, or compliance by itself.
- **Mapping confidence:** Direct as a transparency evidence class; format-specific confidence depends on the cited format.
- **Source/version note:** Cite the artifact format, version, scope, generation tool or process, and product or release binding.

### SPDX

- **Assurance role:** Provides a software bill of materials and software supply-chain artifact format used for software component transparency.
- **Evidence supported:** SBOM records, package identifiers, licensing information, component relationships, and related software metadata.
- **Lifecycle fit:** Build, release, acceptance, vulnerability response, audit, and supplier assurance.
- **Dependencies:** Generation workflow, product/version binding, package identification rules, repository or exchange mechanism, and vulnerability correlation.
- **What it does not prove:** Does not prove that components are safe, untampered, patched, or acceptable without vulnerability, integrity, provenance, and policy evidence.
- **Mapping confidence:** Direct for software transparency artifacts; supporting for vulnerability and procurement workflows.
- **Source/version note:** Cite the official SPDX source and the specific SPDX version used by an artifact. SPDX is described by the project as ISO/IEC 5962:2021.

### CycloneDX

- **Assurance role:** Provides an SBOM and broader component transparency format commonly used for software and supply-chain metadata.
- **Evidence supported:** SBOM/xBOM-style component records, dependency relationships, vulnerability-related metadata, and product composition information.
- **Lifecycle fit:** Build, release, procurement, product acceptance, vulnerability response, and audit.
- **Dependencies:** Generation workflow, scope statement, product/version binding, repository or exchange mechanism, and vulnerability review process.
- **What it does not prove:** Does not by itself prove authenticity, integrity, update status, remediation, or acceptability.
- **Mapping confidence:** Direct for transparency artifacts; supporting for vulnerability and assurance workflows.
- **Source/version note:** Cite the official CycloneDX specification reference, including ECMA-424 where applicable, and the exact CycloneDX version used.

### VEX-like vulnerability status records

- **Assurance role:** Communicate whether a known vulnerability affects a product, component, release, or service.
- **Evidence supported:** Vulnerability status, affected/not affected reasoning, fixed status, under-investigation status, and remediation context.
- **Lifecycle fit:** Vulnerability intake, triage, customer assurance, update planning, audit, and renewal.
- **Dependencies:** Component visibility, vulnerability analysis, product/version binding, status approval, update governance, and communication workflow.
- **What it does not prove:** Does not prove that analysis is correct, complete, or current without supporting review records and update handling.
- **Mapping confidence:** Supporting unless a specific VEX format, profile, or workflow is mapped directly.
- **Source/version note:** Cite the specific VEX-like format, profile, status definitions, and publication workflow used.

## What these options can support

Transparency artifacts can support supplier questions, product acceptance, vulnerability analysis, dependency review, audit preparation, and customer assurance. They can also give update and monitoring workflows a structured starting point.

## What they do not solve alone

They do not prove that the listed components are authentic, safe, properly configured, patched, or acceptable. They can also become stale unless bound to product version, release state, update status, and retention rules.

## What must exist around them

- component and dependency governance;
- supplier disclosure expectations;
- product/version and lifecycle-state binding;
- vulnerability analysis and status approval;
- update and remediation workflow;
- repository, access, and retention controls;
- exception handling for missing, incomplete, stale, or contradictory artifacts.

## Evidence they may produce, protect, exchange, or verify

- SBOM, xBOM, and dependency records;
- vulnerability status records;
- product composition metadata;
- supplier disclosure records;
- component review and exception records;
- artifact generation and approval records.

## Verification considerations

Verification should check whether the artifact is bound to the right product and version, whether the scope is clear, whether supplier and sub-tier coverage is explained, whether vulnerability status is current, and whether the artifact can be traced to a controlled generation or approval process.

## Tooling categories

- SBOM and xBOM generation;
- dependency and component inventory;
- vulnerability correlation and triage;
- supplier disclosure collection;
- artifact validation;
- repository and exchange tooling;
- reporting and audit export.

## Supplier and implementer questions

- What transparency artifacts are available, and what product, version, or service do they cover?
- What format, version, generation process, and scope statement apply?
- How are supplier, sub-tier, firmware, service, or cryptographic dependencies represented?
- How is vulnerability status analysed, approved, refreshed, and communicated?
- What happens when component evidence is missing, stale, incomplete, or disputed?

## Related pages

- [Choosing Technology Options](./choosing-technology-options.md)
- [Glossary](../resources/glossary.md)
- [Software Component and Vulnerability Management](../practices-controls/software-components-vulnerability-management.md)
- [Component Provenance Example](../resources/worked-examples/component-provenance-example.md)
- [Software and Update-Chain Compromise](../standards-threats/threats/software-update-chain-compromise.md)
