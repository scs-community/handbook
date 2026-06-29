---
title: Transparency Artifacts
sidebar_position: 2
---

Transparency artifacts describe software, firmware, hardware, components, services, dependencies, vulnerabilities, or product composition. They support vulnerability management, supplier assurance, and product acceptance.

## Mapping Summary

| Field | Guidance |
|---|---|
| Role | Provides artifact formats and workflows for component and vulnerability transparency. |
| Lifecycle fit | Design, sourcing, build, release, acceptance, update, vulnerability response, audit. |
| Evidence supported | SBOM, xBOM, VEX-like records, dependency records, build provenance, vulnerability status records. |
| What it does not solve | Does not prove integrity, authenticity, safe configuration, remediation, or compliance without additional evidence and processes. |
| Mapping confidence | Direct for formats like SPDX and CycloneDX; supporting for tooling and workflow integrations. |

## Entries

### SPDX

- **Role:** Provides a software bill of materials and software supply-chain artifact format used for software component transparency.
- **Lifecycle fit:** Build, release, acceptance, vulnerability response, audit, and supplier assurance.
- **Evidence supported:** SBOM records, package identifiers, licensing information, component relationships, and related software metadata.
- **What it does not solve:** Does not prove that components are safe, untampered, patched, or acceptable without vulnerability, integrity, provenance, and policy evidence.
- **Mapping confidence:** Direct for software transparency artifacts; supporting for vulnerability and procurement workflows.
- **Source/version note:** Use SPDX official project/specification references; SPDX is described by the project as ISO/IEC 5962:2021. Cite the specific SPDX version used by an artifact.

### CycloneDX

- **Role:** Provides an SBOM and broader component transparency format commonly used for software and supply-chain metadata.
- **Lifecycle fit:** Build, release, procurement, product acceptance, vulnerability response, and audit.
- **Evidence supported:** SBOM/xBOM-style component records, dependency relationships, vulnerability-related metadata, and product composition information.
- **What it does not solve:** Does not by itself prove authenticity, integrity, update status, or remediation.
- **Mapping confidence:** Direct for transparency artifacts; supporting for vulnerability and assurance workflows.
- **Source/version note:** Use CycloneDX official specification references, including ECMA-424 where applicable. Cite the exact CycloneDX version used by an artifact.

### SBOM / xBOM

- **Role:** Represents software or broader component transparency that helps readers understand what is present in a product or platform.
- **Lifecycle fit:** Sourcing, build, release, acceptance, update, vulnerability response, audit, and renewal.
- **Evidence supported:** Software, firmware, hardware, component, service, or cryptographic asset inventories depending on scope.
- **What it does not solve:** Does not prove security or compliance by itself and may be stale unless bound to product version and lifecycle state.
- **Mapping confidence:** Direct as a transparency evidence class; format-specific confidence depends on SPDX, CycloneDX, or another cited format.
- **Source/version note:** For SBOM/xBOM artifacts, cite the artifact format, version, scope, generation tool/process, and product/version binding.

## Practical Questions

### Questions to ask suppliers

- Which standard, framework, or technology are you relying on, and for what assurance decision?
- What evidence does it help produce, protect, exchange, verify, or retain?
- What product, component, platform, service, or lifecycle stage is the evidence bound to?

### Questions to ask internally

- Are we treating this source as a requirement, evidence model, artifact format, implementation option, or contextual reference?
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

- [Evidence](../evidence/index.md)
- [Software & Component Transparency](../evidence/software-component-transparency.md)
- [Update & Vulnerability](../evidence/update-vulnerability.md)
- [10 Best Practices](../practices-controls/10-best-practices.md)
- [Standards Mapping Workflow](../resources/standards-mapping-workflow.md)
