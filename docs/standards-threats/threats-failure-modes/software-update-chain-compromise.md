---
title: Software and Update-Chain Compromise
sidebar_position: 3
---

Malicious, vulnerable, unauthorized, or unreviewed software or firmware can enter a product before release, during update, or through supplier inputs. This page helps answer the decision question: can we trust the software, firmware, build, release, or update path?

Commonly driven by CRA, NIST SSDF, SLSA, SBOM/VEX expectations, secure update requirements, and customer assurance requests.

The update chain is not only the delivery mechanism. It is part of the product's lifecycle trust model.

## What can go wrong

Software, firmware, dependencies, build outputs, signing credentials, update packages, or configurations are compromised, unauthorized, vulnerable, or out of sync with the accepted baseline.

## Why it matters

Software and firmware compromise can bypass product acceptance, undermine update trust, and make affected products difficult to identify or remediate. These failures connect strongly to CRA-driven expectations, SBOM/component visibility, VEX/status communication, signing controls, secure update, and vulnerability handling.

## Decisions this affects

This threat group matters when a team needs to approve a release, accept supplier software, deploy an update, assess a vulnerability, recover from an incident, or prove which products are affected.

The decision becomes weak when software, firmware, build outputs, signing records, update packages, or vulnerability status cannot be tied to a reviewed and authorized path.

## Common failure modes

These failures usually arise when teams cannot connect software or firmware to a reviewed dependency set, controlled build, approved release, protected signing process, authorized update path, or current vulnerability status. The examples below show where the chain can break before or after product acceptance.

- Vulnerable dependency enters the product.
- Supplier software or firmware is compromised.
- Firmware is modified before or after delivery.
- Build or release process produces an unexpected artifact.
- Signing credentials are misused, shared too broadly, or not protected.
- Update package is unauthorized, malicious, rollback-prone, or not tied to an approved release.
- Configuration drifts from the accepted baseline after update or operation.
- Vulnerability status is unclear across products, components, or supplier inputs.

## Controls that help

Controls should preserve traceability from component selection through build, release, signing, update, and remediation. They should make it possible to identify affected products, decide whether an update is authorized, and explain how vulnerabilities are handled.

- Dependency review and component inventory.
- SBOM or xBOM generation and product/component mapping.
- Build and release governance.
- Signing controls and release approval.
- Secure update authorization and rollback/recovery planning.
- Vulnerability intake, triage, remediation, supplier coordination, and disclosure workflow.
- Monitoring after update or configuration change.

## Evidence to request or retain

The decision is defensible when evidence shows what software or firmware was included, how it was built and approved, who or what authorized the release, and how update or vulnerability decisions were recorded. Evidence should support both acceptance-time review and later remediation.

- SBOMs, xBOMs, or component inventories.
- Build provenance and release approvals.
- Signing records, key custody records, and update manifests.
- Update logs and rollback/recovery records.
- Vulnerability records, supplier advisories, remediation plans, and VEX/status statements.
- Configuration records and accepted baseline evidence.

## Related pages

- [Threats and Failure Modes](./index.md)
- [EU Cyber Resilience Act](../standards-regulatory-drivers/eu-cyber-resilience-act.md)
- [Software & Component Transparency](../../evidence/software-component-transparency.md)
- [Update & Vulnerability](../../evidence/update-vulnerability.md)
- [Integrity & Attestation](../../evidence/integrity-attestation.md)
- [Transparency Artefacts](../../technology-options/transparency-artifacts.md)
- [Trust Anchors](../../technology-options/trust-anchors.md)
