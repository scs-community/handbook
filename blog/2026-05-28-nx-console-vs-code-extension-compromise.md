---
title: "The Nx Console Extension Compromise: Developer Tools Are Part of the Supply Chain"
authors: [scs_community]
tags: [software-supply-chain, dependency-risk, release-integrity, evidence, supplier-assurance]
description: "A malicious Nx Console VS Code extension, delivered by auto-update, shows why developer tools that touch build credentials need supply-chain evidence."
---

On 28 May 2026, CISA published an alert on supply-chain compromises affecting Nx Console and GitHub repositories. CISA says threat actors used a prior compromise of Nx developer systems to reach a GitHub employee's device through a poisoned third-party VS Code extension, leading to unauthorized access to and exfiltration of internal GitHub repositories. CISA identifies the malicious build as Nx Console 18.95.0, says it was distributed through VS Code's automatic update mechanism, and states that CVE-2026-48027 was assigned and added to its Known Exploited Vulnerabilities (KEV) Catalog.

Nx's postmortem, published on 21 May 2026, says the malicious version was published on 18 May 2026 by an attacker using a legitimate Nx contributor's stolen credentials. The Nx advisory (GHSA-c9j4-9m59-847w) gives exposure windows of 12:30 to 12:48 UTC on the Visual Studio Marketplace and 12:33 to 13:09 UTC on Open VSX. Nx states that the compromise "was scoped entirely to the Nx Console VSCode extension" and that the Nx CLI, `@nx/*` plugins and Nx Cloud were not affected.

{/* truncate */}

The Nx postmortem traces the stolen credential to 11 May, when a contributor ran `pnpm install` in an external repository and pulled a malicious `@tanstack/zod-adapter` version from the [TanStack npm compromise](/blog/2026/05/11/tanstack-npm-compromise). The malware took the contributor's GitHub CLI OAuth token. Nx also notes that the repository's `.npmrc` set a seven-day `minimum-release-age`, but the pinned pnpm version predated support for that setting and ignored it.

The chain therefore ran from one package compromise, through a developer's machine and an IDE extension release, to a second organization's developer device. At the extension step, CISA says systems could receive the malicious build through auto-update without a manual install. Nx advises that anyone who had Nx Console installed with auto-update enabled during the window should treat the machine as potentially compromised.

The useful question is not "which libraries ship in our product?" It is "which tools on developer machines and in CI can reach our build and publish credentials, and how do we know what version of each one ran?"

:::info[Primary source]

**[Supply Chain Compromises Impact Nx Console and GitHub Repositories](https://www.cisa.gov/news-events/alerts/2026/05/28/supply-chain-compromises-impact-nx-console-and-github-repositories)** — CISA, 28 May 2026

See also the [Nx postmortem](https://nx.dev/blog/nx-console-v18-95-0-postmortem) (Nx, 21 May 2026), the [Nx Console advisory GHSA-c9j4-9m59-847w](https://github.com/nrwl/nx-console/security/advisories/GHSA-c9j4-9m59-847w) (18 May 2026), and [GitHub's investigation update](https://github.blog/security/investigating-unauthorized-access-to-githubs-internal-repositories/) (20 May 2026, updated 26 May 2026).

:::

---

:::info[What to do next]

Identify developer machines that had Nx Console installed with auto-update enabled on 18 May 2026. A current version check is not enough, because those machines may have updated past 18.95.0 since; check them for the indicators of compromise in the Nx advisory and follow its remediation steps. Then pick one build or release credential and list every tool that can reach it, including IDE extensions, CLIs with stored tokens, package managers and CI actions, with how each one is updated.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Product-security leads | To bring developer tooling and IDE extensions into supply-chain threat models. |
| Build and release engineers | To see how a token on a developer machine became a route to publish and repository access. |
| IT and endpoint teams | To decide how extension auto-update is controlled on machines that hold build credentials. |
| Supplier-assurance teams | To ask suppliers what evidence they keep about the tools that touch their build credentials. |

---

## What failed: trust in tools nobody listed

The sources describe a chain of trust in tools that sit outside most product component inventories:

- **A package manager setting that did not apply.** Nx says the seven-day `minimum-release-age` was configured, but "pnpm 10.14 silently ignores the unknown config key rather than warning or failing, so the safeguard was never applied."
- **A developer CLI token.** The stolen credential was a GitHub CLI OAuth token on a contributor's machine. Nx says its policy "now disallows direct use of `gh` CLI on developer machines altogether."
- **A publish path without independent approval.** The Nx advisory says: "Previously a single member of our organization was able to release a new version of Nx Console without manual approval."
- **Automatic delivery.** CISA says the malicious build was distributed through VS Code's automatic update mechanism, so systems could receive it without a manual install.

According to the Nx advisory, the payload harvested credentials from disk and memory, including Vault, npm, AWS and GitHub tokens, 1Password vault contents if a session was active, private keys and other filesystem secrets, and attempted `sudoers` injection on Linux for persistence. GitHub says it contained a compromise of an employee device on 18 May involving a poisoned VS Code extension published by a third party; CISA's alert is what connects that compromise to Nx Console.

The [Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/) page covers update paths that deliver unexpected artifacts, which is what an extension auto-update did here.

---

## Evidence about what touches build credentials

Few organizations can say which tools can reach their build credentials. These records may help:

| Evidence | Why it matters |
|---|---|
| Inventory of IDE extensions, CLIs and package managers on machines that hold build or publish credentials | Shows which tools are in scope when one of them is compromised. |
| Extension update policy and installed-version records | Shows whether a malicious version could arrive automatically, and which machines had it during a window. |
| Credential-to-tool mapping | Shows which tokens a compromised tool could reach, so rotation is complete. |
| Tool configuration checks (for example, package manager version and release-age settings) | Shows whether protective settings actually take effect. |
| Publish approval records with an approver independent of the trigger | Shows that one stolen account cannot release alone. |
| Rotation and rebuild records | Shows what was done after exposure and when. |

[Secure Development and Release Governance](/practices-controls/secure-development-release-governance/) treats build environment and release approval controls as evidence-producing controls.

---

## Questions buyers should ask suppliers

- Which developer tools, IDE extensions and CLIs run on machines that can reach your build, signing or publish credentials?
- Are extension and tool updates automatic on those machines, and can you show which versions were installed on a given date?
- Are developer tokens stored in plain CLI configuration, or through a secret manager with limited scope?
- Can one account trigger and approve a release, or does publishing need a second, independent approver?
- How do you check that protective settings, such as release-age delays, are actually applied by the tool version in use?

Weak answer:

> Our developers use standard, widely used tools.

Stronger answer:

> We keep an inventory of extensions and CLIs on machines with build access and record installed versions. Auto-update is controlled on those machines. Build tokens are scoped and held in a secret manager, not in CLI configuration. Publishing needs approval from someone other than the person who triggered it. We test that our package-manager settings take effect, and after any exposure we rotate every credential a tool could reach and keep the record.

The [Supplier Security Questions](/resources/supplier-security-questions/) resource has more questions on build environment and credential evidence.

---

## How this maps to the handbook

Use this incident to extend supply-chain evidence from the components you ship to the tools that can reach your build credentials.

Recommended reading:

- **[Secure Development and Release Governance](/practices-controls/secure-development-release-governance/)** for build-environment protection and release approval.
- **[Signing, Keys, and Credentials](/technology-options/signing-keys-credentials/)** for credential scope, storage and revocation.
- **[Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/)** for update-path failure modes.
- **[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/)** for turning tooling questions into supplier evidence requests.
- **[Evidence Repositories, Logs, and Retention](/technology-options/evidence-repositories-logs-retention/)** for keeping installed-version and rotation records available after an incident.
