---
title: "The OVHcloud CLI Compromise: A Published Release Can Still Change"
authors: [scs_community]
tags: [software-supply-chain, release-integrity, dependency-risk, supplier-assurance]
description: "Malicious binaries replaced existing OVHcloud CLI releases while source and build stayed clean, showing why release immutability and hash checks matter."
---

On 20 October 2026, OVHcloud published a security advisory for its `ovhcloud-cli` project. It says that on 19 October 2026 "a compromised OVHcloud's GitHub developer account was used to replace several existing assets releases with malicious binaries," affecting releases v0.11.0 to v0.15.0 between 14:47 and 16:21 (UTC+2). The advisory reports about 250 downloads in that window and says "source code and build chain are not affected."

OVHcloud gives the main cause as a repository that "was not appropriately configured to ensure release immutability." It says the configuration was corrected and applied to every repository, and that a clean v0.16.0 was released with a signed tag the same evening.

{/* truncate */}

Most release-integrity checks look at how an artifact was built: the source, the pipeline, the signing step. This incident left all of those intact. The attacker did not publish a new version; they swapped the files behind versions that already existed. A team that had reviewed v0.15.0 and pinned to it by version number would have downloaded something different on the afternoon of 19 October without any version change to notice.

The useful question is not "was this release built from reviewed source?" It is "can the files behind an approved release change after we approve it, and would we detect it if they did?"

:::info[Primary source]

**[ovhcloud-cli security incident - October 19th, 2026 (GHSA-862f-55f5-vmvw)](https://github.com/ovh/ovhcloud-cli/security/advisories/GHSA-862f-55f5-vmvw)** — OVHcloud, 20 October 2026

:::

---

:::info[What to do next]

Pick one tool your pipelines download as a release binary. Check whether you pin it by version only or also by hash, and whether its publisher's releases are immutable. If you pin by version only, record the hash of the release you approved and verify it on every download.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Build and platform engineers | To check whether downloaded tools are verified by hash, not only by version. |
| Product-security leads | To decide whether release immutability is a requirement for tools and components the product depends on. |
| Supplier-assurance teams | To ask suppliers whether published releases can be modified after publication. |
| Release managers | To check their own repositories' release settings before an attacker does. |

---

## What failed

The advisory describes a short chain:

- **A developer account was compromised.** OVHcloud's investigation traced the change to one developer's GitHub account.
- **Existing release assets could be replaced.** The repository did not enforce release immutability, so the account could overwrite binaries attached to past releases.
- **Version numbers did not change.** v0.11.0 to v0.15.0 kept their names while their binaries were swapped, first for one platform and then for all of them.
- **Detection came from a customer.** A customer reported suspicious activity through a GitHub issue about an hour after the first replacement.

The [Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/) page lists the failure mode of release assets replaced after publication.

---

## What a version pin does not prove

| Evidence | What it can support | What it does not show |
|---|---|---|
| Pinned version number | Which release the team intended to use | That the files behind that release are the ones reviewed |
| Clean source code and build pipeline | That the publisher's build produced a clean artifact | That the artifact users downloaded is the one the build produced |
| Signed release tag | That the tag was created by a holder of the signing key | That release assets attached later were not replaced |
| Recorded hash of the approved artifact | That a later download matches what was approved | Whether the approved artifact was itself safe |

[Secure Development and Release Governance](/practices-controls/secure-development-release-governance/) treats release integrity and build provenance as separate controls with separate evidence.

---

## Questions buyers should ask suppliers

- Are your published releases immutable, so that assets cannot be replaced or added after publication?
- Do you publish hashes or signatures for each release asset, and where can customers verify them?
- Which accounts can modify releases, and how are those accounts protected?
- How would you detect and announce a change to an already-published release?

Weak answer:

> Our releases are built from reviewed source in a protected pipeline.

Stronger answer:

> Releases are immutable once published. Each asset has a published hash and signature, and our release accounts use hardware-bound credentials. We monitor release changes and would announce any modification through our security advisories.

The weak answer can be true and still miss this failure, because the pipeline was never touched. [Signing, Keys, and Credentials](/technology-options/signing-keys-credentials/) covers how artifact signatures can bind a release to its publisher.

---

## How this maps to the handbook

Use this incident to check whether the tools and components you depend on can change after you approve them.

Recommended reading:

- **[Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/)** for release and update failure modes.
- **[Secure Development and Release Governance](/practices-controls/secure-development-release-governance/)** for release integrity controls.
- **[Signing, Keys, and Credentials](/technology-options/signing-keys-credentials/)** for artifact signatures and release account protection.
- **[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/)** for supplier evidence requests about release controls.
- **[Software Component and Vulnerability Management](/practices-controls/software-components-vulnerability-management/)** for tracking which versions and hashes are in use.
