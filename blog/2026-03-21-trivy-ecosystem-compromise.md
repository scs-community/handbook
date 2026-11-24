---
title: "The Trivy Ecosystem Compromise: A Tag Is Not a Release Identity"
authors: [scs_community]
tags: [software-supply-chain, release-integrity, dependency-risk, vulnerability-response, supplier-assurance]
description: "Force-pushed Trivy action tags and a malicious v0.69.4 release show why CI security tools need pinned, verified releases and complete credential rotation."
---

On 21 March 2026, the Trivy maintainers at Aqua Security published advisory GHSA-69fq-xp46-6x23 (CVE-2026-33634), rated critical. It states that "On March 19, 2026, a threat actor used compromised credentials to publish a malicious Trivy v0.69.4 release," force-pushed 76 of 77 version tags in `aquasecurity/trivy-action` to credential-stealing malware, and replaced all 7 tags in `aquasecurity/setup-trivy` with malicious commits. A maintainer announcement in the Trivy repository, "Trivy Security incident 2026-03-19", was posted on 20 March 2026.

The advisory describes the root cause as the continuation of an incident first disclosed on 1 March, after which "credential rotation was performed but was not atomic (not all credentials were revoked simultaneously)." The advisory says the attacker could have used a still-valid token to exfiltrate newly rotated secrets during that window.

{/* truncate */}

:::note[Updated 24 November 2026]

The advisory was later updated to add malicious Trivy v0.69.5 and v0.69.6 images, which it says were pushed directly to Docker Hub on 22 March 2026 using separately compromised Docker Hub credentials, with no matching GitHub tags or releases. The advisory as revised (last updated 30 March 2026) also gives exposure windows on 19 and 20 March (UTC) of about 3 hours for the v0.69.4 binaries and images, about 12 hours for `trivy-action`, and about 4 hours for `setup-trivy`. It notes that pinning `trivy-action` to a commit from before 9 April 2025 could still pull a malicious `setup-trivy`, and that the malware could create a public `tpcp-docs` repository on a victim's account to hold stolen data, so finding one is a sign of compromise. See the [advisory](https://github.com/advisories/GHSA-69fq-xp46-6x23). The analysis below is written as of 21 March 2026.

:::

Trivy is a security scanner, and many teams run it inside CI with access to the same secrets as their build and release jobs. According to the advisory, the malicious `trivy-action` code ran before the legitimate scan, dumped the GitHub Actions runner's process memory, and swept more than 50 filesystem paths for SSH keys, cloud credentials, Kubernetes tokens, Docker configs, `.env` files and other secrets. Pipelines that referenced the action by a version tag got the attacker's code under a name they already trusted.

Two assumptions failed together. The first is that a version tag identifies a release; a Git tag can be moved, and here it was moved. The second is that rotating credentials after an incident ends the incident; the advisory says rotation that is not atomic can leave an attacker a path back in.

The useful question is not "do we use a reputable security tool?" It is "what exactly does each pipeline run, how do we know it is the release we approved, and which secrets can it reach?"

:::info[Primary source]

**[Trivy ecosystem supply chain was briefly compromised (GHSA-69fq-xp46-6x23, CVE-2026-33634)](https://github.com/advisories/GHSA-69fq-xp46-6x23)** — Aqua Security Trivy maintainers, 21 March 2026

See also the maintainer announcement [aquasecurity/trivy discussion #10425](https://github.com/aquasecurity/trivy/discussions/10425), 20 March 2026.

:::

---

:::info[What to do next]

Search your workflow files for `aquasecurity/trivy-action` and `aquasecurity/setup-trivy`, and check run logs from 19 and 20 March 2026. Where an affected version ran, follow the advisory and treat every secret the pipeline could reach as exposed. Then list every third-party action in your release workflows that is referenced by a tag rather than a full commit SHA.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Build and release engineers | To find tag-referenced actions and tools in pipelines that hold build, signing or publish credentials. |
| Product-security leads | To treat CI security tooling as a supplier input with its own release-integrity evidence. |
| Supplier-assurance and procurement teams | To ask suppliers how they pin, verify and scope the third-party tools in their pipelines. |
| Incident-response and audit teams | To check that credential rotation after an incident is complete and recorded. |

---

## What failed: mutable names and incomplete rotation

The advisory describes several distinct failures:

- **Mutable release references.** Version tags in `trivy-action` and `setup-trivy` were force-pushed to malicious commits. A workflow using `@0.34.0` or similar ran whatever the tag pointed to at the time.
- **Release pipeline abuse.** For v0.69.4, the advisory says the attacker pushed a commit that swapped the `actions/checkout` reference to an imposter commit, added `--skip=validate` to the goreleaser step to bypass binary validation, and tagged the commit to trigger the release pipeline. The malicious code was never on `main`.
- **Incomplete credential rotation.** The advisory links the 19 March attack to an earlier compromise disclosed on 1 March and to rotation that "was not atomic."

The advisory also shows what held. It says v0.69.3 "is protected by GitHub's immutable releases feature (enabled March 3, before v0.69.3 was published)," that v0.69.2 can be verified through Sigstore signatures, and that images referenced by digest were not affected. Its guidance is to "Pin GitHub Actions to full, immutable commit SHA hashes, don't use mutable version tags."

The [Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/) page describes these build and release failure modes and the evidence to request.

---

## Evidence that separates a release from a name

| Evidence | What it can support | What it does not show |
|---|---|---|
| Workflow files that pin actions to full commit SHAs | The pipeline runs a specific, reviewed commit rather than whatever a tag points to | That the pinned commit was safe, or that the actions it calls are pinned too |
| Image digests and immutable-release records | The artifact consumed is the one that was published and cannot be silently replaced | That the original release was authorized |
| Signature verification against an expected signer identity | The artifact was signed by the expected workflow identity at a known time | That the build inputs were trustworthy |
| Credential inventory and rotation records | Which secrets existed, when each was revoked, and when replacements were issued | That no still-valid token was used during the rotation window |
| Pipeline run logs for the exposure window | Which runs executed which versions, and what they could reach | Whether exfiltration succeeded |

[Signing, Keys, and Credentials](/technology-options/signing-keys-credentials/) explains why a signature only helps when the verifier knows who was authorized to sign what.

---

## A security tool in CI is a supplier

Teams often review the libraries that ship in their products and pay less attention to the tools that run in their pipelines. A scanner, linter or setup action that runs in a release job is a supplier input with access to build credentials, and it needs the same release-identity and update evidence as a shipped dependency.

Questions buyers can ask suppliers about their own pipelines:

- Which third-party actions, scanners and setup tools run in workflows that can reach build, signing or publish credentials?
- Are they referenced by full commit SHA or digest, and who reviews changes to those pins?
- Do you verify signatures or immutable-release status before adopting a new tool version?
- After a suspected credential exposure, how do you make sure every affected credential is revoked at once, and what record shows that?
- Can you show which pipeline runs used which tool versions during a given window?

Weak answer:

> We use well-known open-source security tools in our CI pipeline.

Stronger answer:

> Every third-party action and tool in our release workflows is pinned to a full commit SHA or image digest, and pin changes go through review. We verify signatures where the project publishes them. Release jobs get only the secrets they need. After an exposure, we revoke all affected credentials together and keep a dated rotation record, and we can show which runs used which tool versions.

[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/) covers how to turn these expectations into evidence requests and contract terms.

---

## What to retain after this incident

For teams that ran an affected version, the advisory's actions translate into records worth keeping:

- which workflows referenced `trivy-action` or `setup-trivy`, by tag or SHA, and which runs executed during the exposure window;
- whether Trivy v0.69.4 was pulled or run from any source, and where it was removed;
- the list of secrets each affected pipeline could reach, and the date each was rotated;
- the replacement pins and the review that approved them.

The [Vulnerability Response Evidence](/resources/worked-examples/vulnerability-response-evidence/) worked example shows how these records fit into a complete response package.

---

## How this maps to the handbook

Use this incident to check that release identity in your pipelines is pinned and verifiable, and that tools in CI are reviewed as suppliers.

Recommended reading:

- **[Secure Development and Release Governance](/practices-controls/secure-development-release-governance/)** for build inputs, release approval and signing as separate controls.
- **[Signing, Keys, and Credentials](/technology-options/signing-keys-credentials/)** for signer identity, key governance and revocation handling.
- **[Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/)** for build and release failure modes and the evidence to request.
- **[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/)** for supplier evidence requests that cover pipeline tools.
- **[Software Component and Vulnerability Management](/practices-controls/software-components-vulnerability-management/)** for affected-version analysis and remediation tracking.
