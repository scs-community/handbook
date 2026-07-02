---
title: Secure Update and Recovery Mechanisms
sidebar_position: 7
sidebar_label: Secure Update and Recovery Mechanisms
description: "Evaluate update and recovery mechanisms for secure delivery, rollback, repair, lifecycle monitoring, update evidence, and operational resilience."
---

Update and recovery mechanisms can help deliver authorized changes, prevent unauthorized replacement, manage rollback and recovery paths, and retain evidence about what changed and why.

This option area is useful when a product, component, device, or platform needs post-release assurance across updates, emergency fixes, repair, recovery, and lifecycle-state changes.

## What this option area is for

Update and recovery mechanisms may support:

- update authorization and package integrity;
- release-to-update handoff;
- version, configuration, and lifecycle-state control;
- rollback, recovery, and failsafe behavior;
- update eligibility, monitoring, and evidence refresh.

They are commonly relevant to [Secure Updates and Lifecycle Monitoring](../practices-controls/secure-updates-lifecycle-monitoring.md), [Secure Development and Release Governance](../practices-controls/secure-development-release-governance.md), [Software Component and Vulnerability Management](../practices-controls/software-components-vulnerability-management.md), and [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md).

## Where it fits

| Lifecycle stage | How it may help |
|---|---|
| Design | Define update authority, recovery paths, rollback rules, and lifecycle-state handling |
| Release | Bind release evidence to update packages and update eligibility rules |
| Acceptance and deployment | Confirm supported update paths, recovery assumptions, and evidence refresh expectations |
| Operation and monitoring | Track update state, failed updates, exceptions, and unsupported versions |
| Repair, transfer, and decommissioning | Revalidate software state, credentials, ownership, and recovery status |

## Options covered

### Signed and authorized updates

Signed and authorized update mechanisms help recipients verify that an update package came from an expected authority and has not changed unexpectedly. In this handbook, signed updates support assurance only when they are connected to release approval, eligibility checks, deployment evidence, and exception handling.

- **Assurance role:** Helps ensure update packages are authorized, intact, and bound to an expected release or supplier workflow.
- **Evidence supported:** Signed update packages, update manifests, approval records, verification results, and deployment logs.
- **Lifecycle fit:** Release, acceptance, deployment, operation, emergency response, and audit.
- **Dependencies:** Signing governance, release approval, update policy, version binding, verifier workflow, and exception handling.
- **What it does not prove:** Does not prove the update is safe, complete, or appropriate without testing, vulnerability analysis, and release governance.
- **Mapping confidence:** Direct for signing and update verification mechanisms; supporting for lifecycle assurance.
- **Source/version note:** Cite the update framework, signature profile, manifest format, policy, and version used.

### Update eligibility checks

Update eligibility checks decide whether a product, component, device, or platform should receive, apply, or continue using a specific update. In this handbook, eligibility evidence matters because the same update may be appropriate for one product state and unsafe or unsupported for another.

- **Assurance role:** Determines whether a product, component, device, or platform is eligible to receive, apply, or continue using a specific update.
- **Evidence supported:** Eligibility records, configuration checks, lifecycle-state records, version compatibility, and exception approvals.
- **Lifecycle fit:** Deployment, operation, update, repair, transfer, and decommissioning.
- **Dependencies:** Product inventory, configuration state, trust anchors, vulnerability status, update policy, and recipient-specific constraints.
- **What it does not prove:** Eligibility does not prove successful installation or post-update security without deployment and verification evidence.
- **Mapping confidence:** Supporting for update assurance and lifecycle monitoring.
- **Source/version note:** Cite the eligibility policy, version rules, configuration sources, and decision records used.

### Recovery and rollback controls

Recovery and rollback controls help return a product or component from a failed, compromised, or unsuitable state to a controlled state. In this handbook, recovery evidence is useful when it shows what state was restored, who approved it, and whether rollback risk was managed.

- **Assurance role:** Supports controlled recovery from failed, compromised, or unsuitable states while managing rollback risk.
- **Evidence supported:** Recovery images, recovery approvals, rollback controls, state transition records, and post-recovery validation.
- **Lifecycle fit:** Operation, incident response, repair, emergency update, and return-to-service.
- **Dependencies:** Recovery policy, signed recovery artifacts, protected recovery environment, key governance, and validation workflow.
- **What it does not prove:** Recovery capability does not prove the recovered state is acceptable without validation and updated evidence.
- **Mapping confidence:** Supporting for lifecycle assurance; direct where a specific recovery mechanism or profile is mapped.
- **Source/version note:** Cite the recovery mechanism, rollback policy, signing model, and validation process used.

### Update telemetry and evidence refresh

Update telemetry and evidence refresh records show delivery, installation, failure, deferral, and current version state after release. In this handbook, telemetry becomes assurance evidence only when it is interpreted against inventory, vulnerability status, lifecycle state, and review criteria.

- **Assurance role:** Provides records about update delivery, installation, failure, deferral, and current version state.
- **Evidence supported:** Update logs, deployment status, failed-update records, exception records, and refreshed vulnerability or lifecycle evidence.
- **Lifecycle fit:** Operation, monitoring, vulnerability response, audit, renewal, repair, and transfer.
- **Dependencies:** Inventory, logging, access controls, repository retention, vulnerability workflow, and operational review.
- **What it does not prove:** Telemetry may show what happened, but does not prove correctness or sufficiency without interpretation and verification.
- **Mapping confidence:** Supporting for update and lifecycle monitoring.
- **Source/version note:** Cite telemetry sources, log schemas, retention rules, and review cadence.

## What these options can support

Update and recovery mechanisms can support authorized change, vulnerable-version reduction, post-release evidence refresh, repair return-to-service, and recovery from failed or compromised states.

## What they do not solve alone

They do not replace secure development, release approval, vulnerability triage, customer communication, or operational incident response. An update mechanism without governance can still deliver the wrong update, an unsafe update, or an update to the wrong product state.

## What must exist around them

- update authority and signing policy;
- release-to-update handoff;
- product inventory and lifecycle-state records;
- update eligibility and compatibility policy;
- vulnerability and remediation workflow;
- recovery, rollback, and exception handling;
- retention of update, recovery, and verification evidence.

## Evidence they may produce, protect, exchange, or verify

- signed update packages and manifests;
- update approval and eligibility records;
- deployment, failure, deferral, and exception logs;
- recovery artifacts and recovery validation records;
- version, configuration, and lifecycle-state evidence;
- vulnerability remediation and status records.

## Verification considerations

Verification should check whether the update came from an authorized source, whether the package was intact, whether the product was eligible, whether the installed state matches expectation, and whether exceptions or failed updates are reviewed.

Emerging CRA boot-manager guidance such as [ETSI EN 304 623: Boot Managers](../standards-threats/standards-regulations/eu-cyber-resilience-act/etsi-en-304-623-boot-managers.md) shows how update assurance can become more specific for pre-OS components. Reviewers may need evidence for authenticated and authorized update sources, isolated update logic, atomic update behavior, preserved recovery capability, protected update-verification keys, and support-period configuration updateability.

## Tooling categories

- update frameworks and package managers;
- signing and manifest tooling;
- update eligibility engines;
- fleet inventory and deployment tracking;
- rollback and recovery management;
- vulnerability remediation tracking;
- evidence repositories and audit export.

## Questions to ask suppliers

- How are updates authorized, signed, delivered, verified, and logged?
- What evidence links a released artifact to an update package?
- How is update eligibility determined for different product states or customers?
- What recovery and rollback controls exist, and how are they approved?

## Questions to ask implementers

- Which update, inventory, signing, verification, and repository systems produce update evidence?
- How are update state, recovery state, failed updates, and exceptions bound to product or lifecycle records?
- How are failed, deferred, emergency, or exceptional updates handled and retained?

## Related pages

- [Choosing Technology Options](./choosing-technology-options.md)
- [Signing, Keys, and Credentials](./signing-keys-credentials.md)
- [Evidence Repositories, Logs, and Retention](./evidence-repositories-logs-retention.md)
- [Evidence Package Template](../resources/evidence-package-template.md)
- [Secure Updates and Lifecycle Monitoring](../practices-controls/secure-updates-lifecycle-monitoring.md)
- [Software and Update-Chain Compromise](../standards-threats/threats/software-update-chain-compromise.md)
