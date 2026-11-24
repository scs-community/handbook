---
title: "The TanStack npm Compromise: When the Right Pipeline Publishes the Wrong Release"
authors: [scs_community]
tags: [npm, software-supply-chain, release-integrity, evidence, supplier-assurance]
description: "Malicious TanStack npm releases came from TanStack's own trusted-publisher pipeline, showing why build identity is not release authorization."
---

On May 11, 2026, between 19:20 and 19:26 UTC, an attacker published 84 malicious versions across 42 `@tanstack/*` npm packages. TanStack's postmortem, published the same day, says the attacker chained three weaknesses: a `pull_request_target` "Pwn Request" workflow, GitHub Actions cache poisoning across the fork-to-base trust boundary, and extraction of an OIDC token from the GitHub Actions runner's memory.

The publishes were authenticated through the legitimate GitHub Actions OIDC trusted-publisher binding for the `TanStack/router` release workflow. TanStack states that no npm tokens were stolen and that the publish workflow itself was not modified. An external researcher at StepSecurity opened tracking issue #7383 at 19:46 UTC, and the advisory is GHSA-g7cv-rxg3-hmpx (CVE-2026-45321).

{/* truncate */}

:::note[Updated November 24, 2026]

On July 8, 2026, GitHub announced that npm v12 is generally available and that dependency lifecycle scripts (`preinstall`, `install`, `postinstall`) no longer run by default unless explicitly allowed. See the [GitHub changelog](https://github.blog/changelog/2026-07-08-npm-install-time-security-and-gat-bypass2fa-deprecation). The analysis below is written as of May 11, 2026.

:::

In the [Axios compromise](/blog/2026/04/02/axios-npm-compromise) earlier this year, the release path was abused through a compromised maintainer account. This incident is different. Nobody stole a maintainer credential. The malicious versions came out of the project's own CI, under the identity that downstream users had been told to trust.

That matters for any team that treats publish identity or build provenance as release evidence. Trusted publishing binds a package to a repository, workflow and ref. Here, every one of those was genuine. What was wrong was the inputs to the build (a poisoned dependency cache) and the step that published (attacker code during test and cleanup, not the workflow's own publish step, which was skipped because tests failed).

The useful question is not "did this package come from the expected pipeline?" It is "was this publish authorized, and were the pipeline's inputs trustworthy when it ran?"

:::info[Primary source]

**[Postmortem: TanStack npm supply-chain compromise](https://tanstack.com/blog/npm-supply-chain-compromise-postmortem)** — TanStack (Tanner Linsley), May 11, 2026

See also the [GitHub Security Advisory GHSA-g7cv-rxg3-hmpx](https://github.com/advisories/GHSA-g7cv-rxg3-hmpx) and the [tracking issue TanStack/router#7383](https://github.com/TanStack/router/issues/7383).

:::

---

:::info[What to do next]

Check whether any affected `@tanstack/*` version was installed in a developer, CI or production environment on May 11, 2026. Then list every workflow in your own release repositories that can mint a publish or signing credential, and record which triggers, caches and steps can reach it.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Product-security leads | To see why provenance and trusted publishing show where an artifact was built, not whether the release was authorized. |
| Build and release engineers | To review workflow triggers, cache scope and token permissions in release pipelines. |
| Supplier-assurance and procurement teams | To ask suppliers for release-path evidence beyond a provenance badge. |
| Audit and customer-assurance teams | To understand what records would show that a publish followed an approved path. |

---

## What failed: inputs and authorization, not identity

TanStack's postmortem says that each of the three weaknesses was necessary and none was sufficient alone. Each one crossed a trust boundary that the next one assumed:

- **Workflow trigger.** `bundle-size.yml` ran on `pull_request_target` for fork pull requests and built the fork's code. The postmortem notes that no first-time-contributor approval was required because `pull_request_target` bypasses that gate.
- **Cache trust.** The fork's code wrote a poisoned pnpm store into the base repository's cache, under the key that `release.yml` would later restore. The postmortem explains that setting `permissions: contents: read` did not block the cache write, because cache writes use a runner-internal token.
- **Token scope.** `release.yml` declared `id-token: write`, which trusted publishing legitimately needs. Attacker code restored from the cache read the runner's memory, extracted the OIDC token and posted directly to the npm registry.

TanStack's own lesson is direct: "OIDC trusted-publisher binding has no per-publish review. Once configured, any code path in the workflow can mint a publish-capable token."

For supply-chain assurance, this is a release-integrity failure that publish identity alone could not reveal. The related failure mode is described in [Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/), which lists "build or release process produces an unexpected artifact" as a common failure.

---

## What provenance and publish identity do not show

npm's [provenance documentation](https://docs.npmjs.com/generating-provenance-statements) describes provenance as a link to a package's source code and build instructions, and says that trusted publishing generates provenance attestations automatically. The same page notes that provenance does "not guarantee the package has no malicious code."

The primary sources do not say whether the malicious versions carried provenance attestations. They do say that the publishes were authenticated as `TanStack/router` `release.yml` on `refs/heads/main`. Any check that only confirms "built by the expected repository and workflow" would have pointed to the genuine pipeline. TanStack's proposed fix includes "provenance-source-verification to detect publishes from unexpected workflow steps", which suggests that checking the workflow alone was not enough.

| Evidence | What it can support | What it does not show |
|---|---|---|
| Trusted-publisher identity or provenance | Which repository, workflow and ref the publish is bound to | Which step published, or whether the publish was approved |
| Workflow file review | Which triggers and permissions are configured | Whether untrusted code can reach release-time inputs through shared caches |
| Cache key and scope records | Which cache entries a release run restored | Whether those entries were written by trusted runs |
| Release approval record | That a person or policy authorized a specific version | That the registry publish followed it, unless the two are technically linked |

[Signing, Keys, and Credentials](/technology-options/signing-keys-credentials/) makes the same point for signatures: a valid signature does not prove the content was authorized by the right process.

---

## Questions buyers should ask suppliers

Suppliers that publish through automated pipelines should be able to answer:

- Which workflows can mint a publish or signing credential, and which steps inside them can use it?
- Can code from forks or untrusted pull requests run in a context that shares caches, artifacts or credentials with release workflows?
- Are release-time caches scoped or rebuilt so that untrusted runs cannot populate them?
- Is each publish tied to a release approval, or can any successful (or failed) run publish?
- Are third-party actions pinned to commit SHAs rather than floating tags or branches?
- How would you detect a publish that did not come from the defined publish step?

Weak answer:

> Our packages are published through trusted publishing and carry provenance.

Stronger answer:

> Only the release workflow can request a publish credential, and only its publish step uses it. That step runs after a recorded release approval. Fork and pull-request workflows cannot write to caches that release workflows restore. Third-party actions are pinned to SHAs. We monitor registry publishes and compare them with our release records, and we can show those records for each version.

[Secure Development and Release Governance](/practices-controls/secure-development-release-governance/) covers release approval and signing readiness as controls that must happen before publication, not after.

---

## What product teams should retain

TanStack learned of the compromise from a third party; the postmortem lists "no internal alerting" as a gap. The [advisory](https://github.com/advisories/GHSA-g7cv-rxg3-hmpx) says the install-time payload harvests cloud, Kubernetes, Vault, npm, GitHub and SSH credentials and can republish other packages the victim maintains. Consuming teams therefore need incident records, and publishing teams need release-path records.

For consumers, retain:

- which builds, environments and hosts installed an affected version on May 11, 2026;
- which credentials were reachable from those hosts, and rotation decisions;
- the clean lockfile and fixed versions used for reinstall.

For publishers, retain:

- workflow definitions, trigger settings and token permissions for each release;
- cache entries restored by each release run and where they came from;
- release approvals linked to the published version and registry publish events;
- monitoring results comparing registry publishes with approved releases.

The [NIST SSDF](/standards-threats/standards-regulations/nist-ssdf/) page maps protected build and release environments (PS.1, PS.2) to access records, build logs, release approvals and provenance records. This incident shows why those records need to cover caches and token scope too.

---

## How this maps to the handbook

Use this incident to separate build identity from release authorization when reviewing supplier evidence.

Recommended reading:

- **[Secure Development and Release Governance](/practices-controls/secure-development-release-governance/)** for release approval, build provenance and signing readiness as separate controls.
- **[Signing, Keys, and Credentials](/technology-options/signing-keys-credentials/)** for signing authority separation and what a valid signature does not prove.
- **[Attestation and Measured State](/technology-options/attestation-measured-state/)** for why attested evidence needs reference values and verifier policy before it supports a decision.
- **[Software and Update-Chain Compromise](/standards-threats/threats/software-update-chain-compromise/)** for build and release failure modes and the evidence to request.
- **[NIST SSDF: Secure Software Development and Supplier Evidence](/standards-threats/standards-regulations/nist-ssdf/)** for mapping protected build environments to retained records.
