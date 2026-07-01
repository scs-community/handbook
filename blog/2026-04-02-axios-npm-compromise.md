---
title: "The Axios npm Compromise: Why Trusted Dependencies Still Need Evidence"
authors: [scs_community]
tags: [software-supply-chain, npm, dependency-risk, release-integrity, vulnerability-response]
description: "A compromised Axios npm release shows why dependency trust needs release, provenance, update, and incident evidence."
---

On 31 March 2026, Google Threat Intelligence reported a software supply-chain attack against the widely used `axios` npm package. The attacker introduced a malicious dependency, `plain-crypto-js`, into `axios` npm releases `1.14.1` and `0.30.4`.

The malicious dependency used a `postinstall` hook to deploy the cross-platform WAVESHAPER.V2 backdoor across Windows, macOS, and Linux. Google attributed the activity to a North Korea-nexus actor tracked as UNC1069.

{/* truncate */}

This incident is a useful reminder that a familiar package name, a clean source repository, or a normal-looking dependency update is not enough assurance. The supply chain security question is whether the consumed artifact is expected, authorized, traceable, and tied to a reviewable release path.

For product and supplier-assurance teams, the useful retrospective question is not only "were we affected?" It is whether dependency use, release approval, remediation, and customer-assurance records would still be reviewable after the incident response is over.

:::info[Official analysis]

**[North Korea-Nexus Threat Actor Compromises Widely Used Axios NPM Package in Supply Chain Attack](https://cloud.google.com/blog/topics/threat-intelligence/north-korea-threat-actor-targets-axios-npm-package)** — Google Threat Intelligence Group, 31 March 2026

:::

---

:::info[What to do next]

Check whether affected versions were used in products, services, CI systems, or developer environments. Retain affected-version analysis, remediation records, secret-rotation decisions, release approvals, customer-notification decisions, and remaining exceptions.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Product-security leads | To understand how dependency compromise affects release, update, and vulnerability-response evidence. |
| Software and firmware teams | To check whether package updates are tied to expected source, maintainer, build, and release paths. |
| Supplier-assurance teams | To ask suppliers what evidence supports third-party package use and remediation. |
| Audit and customer-assurance teams | To understand what retained evidence should exist after a supply-chain compromise. |

---

## What failed: package trust, maintainer trust, or release trust?

The incident abused several kinds of trust at once:

- trust that a familiar package name represents a safe artifact;
- trust that a maintainer account is under expected control;
- trust that a package release matches the expected source and dependency graph;
- trust that install-time behavior is benign;
- trust that an update can be accepted without fresh evidence.

For handbook purposes, the most important point is that these are not only technical failures. They are evidence failures. A product or supplier consuming the compromised releases needed to know which versions were used, where they were installed, which secrets may have been exposed, what remediation happened, and which records were retained.

The related failure-mode page is [Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/).

---

## Evidence that would have helped

Dependency lists and lockfiles matter, but they are not enough by themselves. Useful evidence after an npm compromise may include:

| Evidence | Why it matters |
|---|---|
| Dependency lockfiles and package inventories | Show whether affected versions were present in products, services, developer environments, or CI systems. |
| Repository-to-package consistency checks | Help distinguish source trust from published artifact trust. |
| Release provenance and approval records | Show whether a package version followed an expected release path. |
| Install-time behavior review | Makes `postinstall` scripts and unexpected execution paths visible. |
| Affected-version analysis | Separates affected, fixed, not affected, and unknown product states. |
| Secret-rotation and host-remediation records | Show what happened after potential credential exposure. |
| Retained incident evidence | Supports later customer assurance, audit, and lessons learned. |

[NIST SSDF: Secure Software Development and Supplier Evidence](/standards-threats/standards-regulations/nist-ssdf/) is the closest standards-driver page for release and supplier software evidence.

---

## What buyers should ask suppliers after an npm compromise

Suppliers should be able to answer questions such as:

- Which products, services, builds, developer environments, or CI workflows used the affected package versions?
- What evidence shows the affected versions were removed or replaced?
- Were secrets, tokens, signing keys, credentials, or build systems exposed?
- What remediation records, customer notifications, and risk acceptances were created?
- How are future dependency updates checked before release or deployment?

A weak answer says: "We updated the package."

A stronger answer provides affected-version analysis, remediation records, secret-rotation evidence, release approval records, customer communication, and retained incident evidence.

For an example evidence package, see [Vulnerability Response Evidence](/resources/worked-examples/vulnerability-response-evidence/).

---

## What product teams should retain after remediation

After a dependency compromise, retain evidence that supports the decision to continue operating, deploy an update, accept residual risk, or notify customers.

At minimum, the evidence package should show:

- affected products, services, versions, environments, and customers;
- remediation action and fixed dependency versions;
- whether install-time payloads executed;
- credential and secret-rotation decisions;
- release or update approval records;
- customer or internal notification decisions;
- remaining gaps and exception owners.

The same retained-record logic appears in the [Secure Update Approval](/resources/worked-examples/secure-update-approval/) worked example.

---

## Handbook mapping

Use this incident as a worked example of the handbook's evidence model:

```text
threat/failure mode -> decision -> control -> evidence -> verification -> gaps -> retention
```

Recommended reading:

- **[Secure Development and Release Governance](/practices-controls/secure-development-release-governance/)** for release approval, supplier inputs, and build-output evidence.
- **[Software Component and Vulnerability Management](/practices-controls/software-components-vulnerability-management/)** for affected-product analysis and dependency visibility.
- **[Secure Updates and Lifecycle Monitoring](/practices-controls/secure-updates-lifecycle-monitoring/)** for update approval and post-release assurance.
- **[SBOM, VEX, and Component Visibility](/technology-options/sbom-vex-component-visibility/)** for SBOM/xBOM, dependency, and vulnerability-status artifacts.
