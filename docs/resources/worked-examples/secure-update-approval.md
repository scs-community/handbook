---
title: Secure Update Approval Evidence Example
sidebar_position: 4
sidebar_label: Secure Update Approval
description: "See a secure update approval example that links update risk, release evidence, verification, rollout decisions, and lifecycle monitoring."
---

This fictional example shows how to assess signing, release governance, rollback, recovery, vulnerability handling, and customer notification before approving an update.

## Scenario

A supplier wants to deploy firmware update 5.4.3 to devices already accepted by a buyer. The update fixes a security issue and changes a device communication component.

## Decision being made

Should the update be approved for deployment to the affected product fleet?

:::tip[Example outcome]

Decision: approve for deployment to tested configurations only.

Main condition: the regional configuration is excluded until recovery testing is complete.

Evidence maturity: [Level 4–5](../evidence-maturity-model.md) for tested configurations where deployment records are retained; not Level 5 for excluded configurations until deployment and recovery evidence is refreshed and retained.

:::

## Weak answer

The supplier says:

> We have a secure update process.

Assessment: weak. This is an assertion only.

Evidence maturity: Level 1, supplier assertion.

## Better answer

The supplier says:

> Updates are signed before release.

Assessment: better, but incomplete. Signing does not prove release approval, rollback, recovery, affected-version mapping, or customer notification.

Evidence maturity: Level 2–3, documented process and produced artefact without complete verification.

## Stronger answer

The supplier provides:

- release artefacts signed using controlled keys;
- retained build provenance;
- logged release approval;
- documented rollback conditions;
- tested recovery behaviour for the approved configurations;
- affected-version mapping tied to vulnerability records;
- customer notification text for affected operators.

Assessment: strong. The response is concrete, reviewable, and lifecycle-aware, while clearly excluding the untested regional configuration.

Evidence maturity: Level 4–5 where deployment records are retained.

## What changed from weak to strong?

| Improvement | Why it matters |
|---|---|
| Release approval added | Shows that signing happened after an authorised decision |
| Key control and signing evidence added | Lets the buyer verify origin and integrity of the update package |
| Affected-version mapping added | Connects the update to vulnerability and product scope |
| Rollback and recovery evidence added | Shows what happens if deployment fails or must be reversed |
| Exclusion recorded | Prevents an untested configuration from being silently deployed |
| Retention owner added | Keeps update decisions available for audit, incident review, and later vulnerability response |

## Evidence package

| Field | Example content |
|---|---|
| Decision supported | Approve firmware update 5.4.3 for deployment |
| Threat/failure mode addressed | Unauthorised update, incomplete rollback, untested recovery, unresolved affected-version mapping |
| Practice/control supported | Update approval workflow, update eligibility check, update signing control, installation and rollback recording |
| Scope | Industrial controller IC-22, firmware 5.4.2 to 5.4.3, deployment cohort A, affected vulnerability VULN-2026-014 |
| Evidence included | Release approval, signed update manifest, signing event record, build provenance, affected-version analysis, vulnerability remediation record, rollback test result, recovery procedure, customer notification draft |
| Producer/source | Supplier release manager, supplier product security team, update service owner |
| Consumer/recipient | Buyer product owner, deployment approver, vulnerability response lead |
| Verification method | Check release approval, signature validity, key authorisation, affected-version mapping, rollback/recovery test evidence, and notification scope |
| Known gaps | Recovery test passed on reference hardware but not yet on one regional configuration |
| Exceptions/risk acceptance | Regional configuration excluded from deployment until recovery test completes |
| Retention owner | Supplier release owner and buyer lifecycle monitoring owner |

## Verification questions

- Was the update approved before signing and deployment?
- Is the update package signed by an authorised key for this product and release?
- Is the affected-version analysis tied to product versions and vulnerability records?
- Are rollback and recovery conditions documented and tested?
- Are deployment failures, exclusions, and customer notification decisions retained?

## Gaps, exceptions, and retention

The buyer approves deployment only for configurations with completed recovery testing. The excluded regional configuration remains on firmware 5.4.2 with a mitigation and a dated follow-up decision.

Update approval evidence is retained with release records, vulnerability response records, and deployment logs.

## Related pages

- [Secure Update & Lifecycle Monitoring](../../practices-controls/secure-updates-lifecycle-monitoring.md)
- [Secure Development & Release Governance](../../practices-controls/secure-development-release-governance.md)
- [Software, Component & Vulnerability Management](../../practices-controls/software-components-vulnerability-management.md)
- [Evidence Package Template](../evidence-package-template.md)
- [Signing, Keys & Credential Mechanisms](../../technology-options/signing-keys-credentials.md)
- [Update & Recovery Mechanisms](../../technology-options/secure-update-recovery-mechanisms.md)
- [Evidence Repositories, Logs & Retention](../../technology-options/evidence-repositories-logs-retention.md)
