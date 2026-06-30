---
title: Secure Development & Release Governance
sidebar_position: 6
---

Secure development and release governance is the recurring practice of controlling supplier inputs, dependencies, build outputs, reviews, approvals, signing readiness, and release evidence before product, software, or firmware release.

This practice is commonly driven by CRA, secure development expectations, release assurance, customer assurance requests, and [Software and Update-Chain Compromise](../standards-threats/threats-failure-modes/software-update-chain-compromise.md).

## What this practice is for

This practice focuses on supply-chain-security-relevant development and release controls. It is not a generic secure development lifecycle page. It helps teams decide whether supplier-delivered software, firmware, dependencies, build outputs, and release artefacts are ready to become part of a product or update.

## Decisions this practice supports

- Supplier software or firmware acceptance.
- Dependency approval.
- Build output acceptance.
- Release approval.
- Signing readiness.
- Pre-release vulnerability exception.
- Release evidence retention.

## What can go wrong

Supplier-delivered software or firmware may enter a product without review. Dependencies may be approved without version or vulnerability context. Build outputs may not be traceable to reviewed inputs. Signing may happen before release approval. Exceptions may be handled informally and become invisible later.

When release evidence is missing, stale, incomplete, inconsistent, or unverifiable, the practice should produce an exception, remediation action, release hold, rejection, or risk-acceptance decision before signing or update preparation continues.

## Core controls

| Control | Purpose | Evidence produced |
|---|---|---|
| Dependency approval | Review dependencies before inclusion or release. | Dependency review records, approved component list, exception records. |
| Supplier software/firmware review | Assess supplier-delivered code or firmware against release criteria. | Supplier review records, security findings, remediation records. |
| Build provenance capture | Tie build outputs to source, dependencies, tools, and environment. | Build provenance, build logs, artefact identifiers. |
| Release approval workflow | Ensure release candidates are reviewed and authorised before signing, delivery, or update preparation. | Release approvals, release checklist, acceptance criteria. |
| Pre-release vulnerability check | Identify unresolved vulnerabilities before release. | Vulnerability review, affected-product analysis, risk acceptance records. |
| Signing readiness check | Confirm signing should occur only after approval and evidence capture. | Signing readiness record, key custody check, release manifest. |
| Release-to-update handoff | Ensure release evidence, manifests, vulnerability status, signing records, and approval decisions are available to update and lifecycle monitoring workflows. | Release package, update manifest, version record, vulnerability status, lifecycle monitoring trigger. |
| Release evidence retention | Keep release evidence available for audit, vulnerability response, and customer assurance. | Release evidence package, retained artefacts, review metadata. |

## What good practice looks like

Good release governance connects supplier inputs, dependency review, build provenance, vulnerability status, release approval, signing readiness, release-to-update handoff, and retained evidence. It makes the release decision reviewable later, especially when a vulnerability, incident, customer assurance request, or audit asks what was included and why it was approved.

## Questions to ask

### Suppliers

- What software, firmware, dependencies, build outputs, or artefacts are you delivering?
- What evidence shows these inputs were reviewed, approved, and version-bound?
- What vulnerabilities, exceptions, or unresolved dependencies remain at release?

### Internally

- What release criteria must be satisfied before signing, delivery, or customer notification?
- Which supplier inputs and dependencies are in scope for review?
- Who can approve exceptions before release?

### Assessors / auditors

- Can the release be traced to reviewed inputs, approvals, and retained evidence?
- Are exceptions, unresolved vulnerabilities, and supplier inputs visible?
- Is signing tied to release approval rather than treated as approval itself?

### Implementers

- What systems capture dependency review, build provenance, release approval, and signing records?
- How are release artefacts bound to product, firmware, software, and component versions?
- How will release evidence feed vulnerability response and update workflows?

## Evidence this should produce

This practice should produce dependency review records, supplier software/firmware review records, build provenance, release approvals, vulnerability checks, signing readiness records, release manifests, release packages, update manifests, version records, lifecycle monitoring triggers, exception approvals, and release evidence packages.

## Weak answer

The team says the release followed secure development practices.

## Stronger answer

The team provides reviewed dependency records, supplier input reviews, build provenance, vulnerability status, release approvals, signing readiness evidence, release-to-update handoff records, and retained release artefacts for the specific product or firmware version.

## Verification considerations

Reviewers should check whether release evidence is tied to the specific build, version, supplier input, dependency set, approval decision, and signing event. Evidence should be retained so later vulnerability or audit questions can be answered without reconstructing the release from memory.

## Lifecycle stages

This practice applies during design, sourcing, development, build, pre-release review, release, signing, update preparation, vulnerability response, and audit.

## Technology options

Technology options may include source and artefact repositories, build provenance tooling, package signing, SBOM generation, vulnerability scanning, release workflow systems, signing services, transparency logs, and evidence repositories.

## Related pages

- [EU Cyber Resilience Act](../standards-threats/standards-regulatory-drivers/eu-cyber-resilience-act.md)
- [Software and Update-Chain Compromise](../standards-threats/threats-failure-modes/software-update-chain-compromise.md)
- [10 Best Practices](./10-best-practices.md)
- [Lifecycle Map](./lifecycle-map.md)
- [Software, Component & Vulnerability Management](./software-component-vulnerability-management.md)
- [Secure Update & Lifecycle Monitoring](./secure-update-lifecycle-monitoring.md)
- [Evidence Checklist](../resources/evidence-checklist.md)
- [Transparency Artefacts & Component Visibility](../technology-options/transparency-artefacts-component-visibility.md)
- [Signing, Keys & Credential Mechanisms](../technology-options/signing-keys-credential-mechanisms.md)
- [Update & Recovery Mechanisms](../technology-options/update-recovery-mechanisms.md)
