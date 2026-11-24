---
title: "The LiteLLM v1.107.0 Compromise: An Approval Gate Is Only as Independent as Its Approvers"
authors: [scs_community]
tags: [software-supply-chain, release-integrity, dependency-risk, evidence, supplier-assurance]
description: "LiteLLM v1.107.0 was built from a lookalike fork and approved with stolen tokens, showing why release gates need independent approvers and source binding."
---

On October 23, 2026, LiteLLM published a root cause analysis of the compromise of its v1.107.0 release, which it describes as the canonical account of the incident. On October 21, 2026, LiteLLM's own release pipeline, after a production approval given with a stolen token, built `litellm==1.107.0` from an attacker's fork commit, signed it and published it to PyPI, with compromised container images on Docker Hub and GHCR. LiteLLM's incident page says "The official v1.107.0 source tag in GitHub does not contain the malicious files" and that the artifacts were built from an attacker-controlled repository.

According to the analysis, the chain began on May 27, 2026, when an administrative key for an internal LiteLLM platform was committed to a public repository. The file was removed about three hours later, but "Because of human error, nobody followed through on revoking the administrative key". On October 10, the attacker used the key to obtain a GitHub organization owner's GitHub CLI OAuth token, then used workflows to exfiltrate tokens belonging to two other maintainers. On October 21, the attacker changed the release workflow so it could build from a fork, ran it against a lookalike repository, `Berri-AI/litellm`, and approved the production gate with a second maintainer's stolen token.

{/* truncate */}

In the [TanStack compromise](/blog/2026/05/11/tanstack-npm-compromise) in May, no maintainer credential was stolen: the genuine release workflow ran with poisoned inputs. This incident is different. Here, stolen human credentials were used to change the release workflow itself, point it at different source, and satisfy an approval gate. Each control was present. Each was defeated by an identity that the control trusted.

LiteLLM's analysis says a release normally "requires being kicked off by an authorized engineer" and approval from "a special account locked to a physical device in our office." It also says "This restriction was relaxed earlier this week to accommodate the temporary push for more frequent releases", allowing any two engineers to trigger and approve a release. With two stolen tokens, the attacker had two engineers.

The useful question is not "does our release require approval?" It is "could one compromise supply every identity the approval needs, and is the build bound to source that the approval actually covers?"

:::info[Primary source]

**[The attack chain behind the v1.107.0 LiteLLM release](https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain)** — LiteLLM, October 23, 2026

See also LiteLLM's [incident page and remediation steps](https://docs.litellm.ai/blog/security-incident-oct-21-2026) (October 21, 2026) and Microsoft Security's [analysis of the payload](https://www.microsoft.com/en-us/security/blog/2026/10/23/inside-the-litellm-1-107-0-supply-chain-compromise-credential-theft-through-python-startup-hooks/) (October 23, 2026).

:::

---

:::info[What to do next]

Check whether `litellm==1.107.0` or the affected images ran anywhere in your environments on October 21, 2026, and follow LiteLLM's remediation steps if so. Then, for one release pipeline you own, write down every identity that can trigger, change or approve a release, and note which of them could be compromised together.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Build and release engineers | To check whether release workflows can be pointed at different source, and who can change them. |
| Product-security leads | To test whether approval gates depend on independent identities or on tokens that one compromise could collect. |
| Identity and access teams | To review token scope, owner-level overrides and revocation after exposure. |
| Supplier-assurance teams | To ask suppliers what makes their release approvals independent, not only whether approvals exist. |

---

## What failed: three controls, one compromise

The analysis describes a release process with branch protection, a source-owner binding and a two-person gate. Each was bypassed through an identity it trusted:

- **Unrevoked exposed key.** The administrative key stayed valid for more than four months after it was exposed. LiteLLM writes that the incident "has provided a strong illustration of the risks associated with failing to rotate a potentially exposed key."
- **Owner-level token.** The token obtained on October 10 was a GitHub CLI OAuth token belonging to an organization owner. LiteLLM writes: "From this point on, the threat actor had owner capabilities over our GitHub organization." That token was used to disable branch protection and force-push the workflow change.
- **Source binding that could be edited.** The release workflows previously "checked out their source with `BerriAI` hardcoded as the repository owner". The attacker's commit added an input that accepted any owner, and the staging run used a commit that existed only on the lookalike fork.
- **Approval by a stolen identity.** The production gate was approved with a second maintainer's token, which had been exfiltrated through a CI workflow on October 10.

After publication, a third maintainer's stolen token was used to delete the staging and production run records. LiteLLM says the organization audit log still recorded the protection overrides, and token hashes in the audit log tie the stolen tokens to the approval and the deletions.

The [Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/) page describes the related failure mode of a build or release process producing an unexpected artifact.

---

## What a valid release path does not prove

| Evidence | What it can support | What it does not show |
|---|---|---|
| Release approval record | That an account with approval rights approved this run | That the approving account was under its owner's control, or independent of the trigger |
| Branch protection settings | That normal pushes to `main` need review | That owner-level tokens cannot override it |
| Workflow definition at release time | Which source the build was configured to check out | That the definition was not changed shortly before the run |
| Source tag in the official repository | What the maintainers intended to release | That the published artifact was built from it; here the tag was clean and the artifacts were not |
| Organization audit log | Overrides, approvals and deletions, linked to token identity | Whether exposed keys and tokens were revoked |

[Secure Development and Release Governance](/practices-controls/secure-development-release-governance/) treats release approval, build provenance and source binding as separate controls with separate evidence.

---

## Questions buyers should ask suppliers

- Which identities can trigger, approve, or change a release workflow, and can any single compromise supply more than one of them?
- Is the source repository and owner fixed in the release workflow, or can a run input or recent commit change it?
- Do approvers use credentials that are separate from day-to-day developer tokens, such as hardware-bound or device-bound accounts?
- What happens to release controls when they are relaxed temporarily, and who approves and records that change?
- After a key or token is exposed, how do you confirm it was revoked, and how quickly?
- Do you compare published artifacts with the source tag they claim to be built from?

Weak answer:

> All our releases require two-person approval and branch protection.

Stronger answer:

> Release approval needs an approver who did not trigger the run, using an account bound to a separate device. The release workflow checks out a fixed source repository and owner that run inputs cannot change, and changes to the workflow need their own review. Exposed credentials are revoked, not only removed from history, and we keep the revocation record. Temporary relaxations of release controls are approved, time-limited and logged. We compare each published artifact with its source tag.

A weak answer like this can be true and still miss the failure this incident shows: approval and protection that exist but can be satisfied or overridden by stolen identities. [Signing, Keys, and Credentials](/technology-options/signing-keys-credentials/) covers credential scope, separation of authority and revocation.

---

## What consumers should retain

LiteLLM's incident page lists the affected PyPI wheels and Docker Hub and GHCR tags with their windows on October 21, 2026, and remediation steps including rebuilding environments, removing named startup files and rotating every credential the host could reach. Microsoft's analysis states that "Removing the package or a release tag is not sufficient recovery." For consumers, retain:

- which environments installed `litellm==1.107.0` or ran the affected image digests, and when;
- the startup-file and process checks performed, and their results;
- the credentials each affected host could reach, and the date each was rotated or revoked;
- the rebuild records and the pinned version or digest used afterward.

The [Vulnerability Response Evidence](/resources/worked-examples/vulnerability-response-evidence/) worked example shows how these records come together.

---

## How this maps to the handbook

Use this incident to test whether release approvals rely on independent identities, and whether builds are bound to the source that approvers believe they are approving.

Recommended reading:

- **[Secure Development and Release Governance](/practices-controls/secure-development-release-governance/)** for release approval, source binding and build provenance as separate controls.
- **[Signing, Keys, and Credentials](/technology-options/signing-keys-credentials/)** for credential scope, authority separation and revocation.
- **[Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/)** for build and release failure modes.
- **[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/)** for supplier evidence requests about release controls.
- **[Evidence Repositories, Logs, and Retention](/technology-options/evidence-repositories-logs-retention/)** for keeping audit logs that survive deletion of run records.
