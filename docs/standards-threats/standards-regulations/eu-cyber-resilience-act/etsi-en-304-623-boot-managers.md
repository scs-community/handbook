---
title: "ETSI EN 304 623: Boot Managers"
sidebar_label: "EN 304 623: Boot Managers"
description: "Understand how draft ETSI EN 304 623 for CRA boot managers relates to supply chain security, product acceptance, updates, trust anchors, and evidence."
---

ETSI EN 304 623 is a draft CRA vertical standard for boot managers. It matters to supply chain security because boot managers establish initial system trust before operating systems, applications, or higher-level security services are available.

For this handbook, the useful question is not only whether a boot manager implements secure boot. It is whether the manufacturer can show how boot code, trust anchors, key provisioning, update paths, rollback protection, debug interfaces, measured-state evidence, vulnerability handling, and lifecycle support are controlled across suppliers and product versions.

:::info[Source status]

This page is based on draft ETSI EN 304 623 V0.1.3, dated 2026-06, and the public ETSI work item context available at the time of review. The draft describes itself as an interim draft and may change before publication or citation as a harmonized standard. This page is an interpretive supply chain security mapping, not legal or conformity assessment advice.

:::

## Official references

- [Draft ETSI EN 304 623 V0.1.3: Cybersecurity requirements for boot managers](https://www.etsi.org/deliver/etsi_en/304600_304699/304623/00.01.03_20/en_304623v000103ev.pdf), public draft PDF.
- [ETSI work item report for EN 304 623](https://portal.etsi.org/webapp/WorkProgram/Report_WorkItem.asp?WKI_ID=74414), for status and work item metadata.
- [STAN4CRA EN 304 623 Boot Managers project](https://labs.etsi.org/rep/stan4cra/en-304-623), for the public collaboration repository where available.
- [EU Cyber Resilience Act](../eu-cyber-resilience-act.md), for the parent CRA driver page in this handbook.

## Why boot managers matter for supply chain security

Boot managers are part of the product trust boundary. A weak boot manager can allow unauthorized firmware, vulnerable downgraded code, debug access, or unreviewed configuration to undermine later security controls.

Supply chain security concerns arise because boot-manager implementations may involve silicon vendors, independent BIOS or firmware vendors, OEMs, integrators, open-source projects, and product manufacturers. Each participant may affect update capability, trust anchor handling, vulnerability response, maintenance lifecycle, and evidence availability.

The draft is therefore relevant to:

- product acceptance decisions for devices, boards, platforms, firmware loads, or boot components;
- supplier evidence for firmware, trust anchors, signing, debug lockdown, and key provisioning;
- lifecycle monitoring after update, repair, transfer, reset, or decommissioning;
- vulnerability and update response for boot code and boot configuration;
- retained technical documentation and assessment evidence.

## Use cases and security profiles

The draft defines three boot-manager use cases. They are cumulative: higher use cases include the security-enhancing capabilities of lower ones.

| Use case | Security profile | Supply chain security meaning |
|---|---|---|
| `UC-IMM` | LOW | Boot manager code and trust anchors are immutable. Evidence focuses on immutability, manufacturing/provisioning state, and limits of post-deployment remediation. |
| `UC-VER` | MEDIUM | Boot manager implements verified boot, update capability, logging, and key provisioning. Evidence expands to update authorization, signing, logs, vulnerability response, and key lifecycle. |
| `UC-HW` | HIGH | Boot manager adds hardware-assisted security mechanisms. Evidence must explain hardware-backed key protection, trust anchor protection, rollback resistance, and hardware/firmware assumptions. |

This framing is useful for assurance because it ties evidence expectations to declared capability. A supplier claiming a higher-assurance boot manager should be able to explain which use case applies, which capabilities are implemented, and which records support the claim.

## Evidence implications

EN 304 623-style boot-manager assurance creates evidence needs across several areas:

| Evidence area | What reviewers may need |
|---|---|
| Boot architecture | Declared use case, boot stages, boot sources, handoff assumptions, and whether verified boot, measured boot, update, recovery, network boot, configuration, logging, authentication, debug, or key provisioning capabilities exist. |
| Trust anchors and keys | Trust anchor location, key provisioning process, key update rules, revocation or replacement handling, and protection of verification material. |
| Verified or measured boot | Verification policy, reference values, measurement logs, attestation inputs, verifier policy, and exceptions when measurements or verification results are unexpected. |
| Update and rollback | Update authorization, signed update packages, eligibility checks, anti-rollback state, recovery mode, failed update handling, and evidence that downgrade paths are controlled. |
| Debug and attack surface | Production debug state, authenticated or disabled debug interfaces, DMA exposure, network boot exposure, and records showing development modes are not left open in production. |
| Vulnerability handling | Boot-manager component inventory, affected-version analysis, remediation plan, update availability, support-period commitments, and customer notification decisions. |
| Assessment and documentation | Security design documentation, integrity mechanism documentation, configuration security documentation, security testing evidence, and conformity assessment records. |

## Questions to ask suppliers or product teams

- Which EN 304 623 use case or security profile best matches the boot manager as shipped?
- Which supplier, firmware, silicon, BIOS, OEM, integrator, or open-source components are part of the boot-manager trust boundary?
- What evidence shows that boot components, trust anchors, keys, configuration, and update mechanisms are bound to the assessed product version?
- How are boot-manager updates authorized, signed, delivered, verified, logged, and recovered?
- How is rollback protection implemented and retained as reviewable evidence?
- Which debug, diagnostic, DMA, programming, or network boot interfaces exist in production, and how are they disabled, authenticated, or controlled?
- What measured boot or attestation evidence is available, and which reference values or verifier policies make it meaningful?
- What happens when a boot-manager vulnerability is discovered after product acceptance?

## What this does not prove by itself

Alignment with a boot-manager standard does not prove that the whole product is secure, that all supplier inputs are trustworthy, or that post-handoff software is acceptable. Boot-manager evidence still needs to be tied to the product, firmware version, lifecycle stage, verifier policy, supplier responsibility, update path, and retained decision record.

## Related handbook pages

- [EU Cyber Resilience Act](../eu-cyber-resilience-act.md)
- [Product Acceptance and Supply Chain Trust](../../../practices-controls/product-acceptance-supply-chain-trust.md)
- [Secure Development and Release Governance](../../../practices-controls/secure-development-release-governance.md)
- [Secure Updates and Lifecycle Monitoring](../../../practices-controls/secure-updates-lifecycle-monitoring.md)
- [Software Component and Vulnerability Management](../../../practices-controls/software-components-vulnerability-management.md)
- [Trust Anchors and Device Identity](../../../technology-options/trust-anchors-device-identity.md)
- [Attestation and Measured State](../../../technology-options/attestation-measured-state.md)
- [Signing, Keys, and Credentials](../../../technology-options/signing-keys-credentials.md)
- [Secure Update and Recovery Mechanisms](../../../technology-options/secure-update-recovery-mechanisms.md)
- [Evidence Checklist](../../../resources/evidence-checklist.md)
- [Evidence Package Template](../../../resources/evidence-package-template.md)
