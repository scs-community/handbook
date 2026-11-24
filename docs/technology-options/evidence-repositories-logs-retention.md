---
title: "Evidence Repositories, Logs, and Retention"
sidebar_position: 9
description: "Plan evidence repositories, logs, and retention so supply chain assurance records remain traceable for audit, incident response, and lifecycle decisions."
---

Evidence repositories, logs, and retention mechanisms help evidence remain available, traceable, explainable, and reusable across acceptance, audit, vulnerability response, renewal, incident review, repair, transfer, and decommissioning.

This option area is useful when evidence must outlive the original exchange, support later review, or remain bound to a product, release, supplier, component, lifecycle state, or assurance decision.

Retention is not the same as relevance: old evidence may be preserved but no longer support the current product state or assurance decision.

## What this option area is for

Evidence repositories, logs, and retention mechanisms may support:

- storage and retrieval of assurance evidence;
- verifier logs and appraisal records;
- artifact registries and metadata;
- lifecycle-state evidence;
- access, integrity, and retention controls;
- audit, renewal, incident, and customer review workflows.

They are commonly relevant to [Audit and Compliance Readiness](../practices-controls/audit-compliance-readiness.md), [Assurance Implementation Planning](../practices-controls/supply-chain-assurance-implementation.md), [Secure Updates and Lifecycle Monitoring](../practices-controls/secure-updates-lifecycle-monitoring.md), and [Product Acceptance](../practices-controls/product-acceptance-supply-chain-trust.md).

## Where it fits

| Lifecycle stage | How it may help |
|---|---|
| Procurement and acceptance | Retain supplier responses, acceptance evidence, exceptions, and approvals |
| Release and update | Retain signed artifacts, vulnerability status, update evidence, and verifier results |
| Operation and monitoring | Preserve logs, state changes, failed checks, and exception records |
| Audit, renewal, and customer assurance | Retrieve evidence packages and explain historical control operation |
| Repair, transfer, and decommissioning | Preserve lifecycle-state decisions and closure evidence |

## Options covered

### Evidence repositories

[CRA Art. 31](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_31)

Evidence repositories store and retrieve evidence packages, metadata, logs, and records used across assurance decisions. In this handbook, repositories are useful only when they preserve enough origin, scope, integrity, and lifecycle context for later review.

Repository assurance depends on the implemented architecture, metadata model, access controls, integrity protection, and export workflow. A document store, artifact registry, evidence graph, customer portal, GRC tool, Git repository, [OCI registry](https://opencontainers.org/), or cloud object store may all retain evidence, but they preserve different context unless designed deliberately. Examples include graph or metadata systems such as [GUAC](https://github.com/guacsec/guac) and [Grafeas](https://github.com/Grafeas/Grafeas), or attestation stores such as [Archivista](https://github.com/in-toto/archivista).

- **Assurance role:** Store, retrieve, and reuse evidence across lifecycle decisions.
- **Evidence supported:** Signed evidence packages, verifier logs, artifact registries, lifecycle-state records, customer assurance records, and audit evidence.
- **Lifecycle fit:** Acceptance, deployment, update, repair, transfer, audit, incident response, renewal, and decommissioning.
- **Dependencies:** Origin, integrity, access control, metadata, retention rules, ownership, and interpretation.
- **What it does not prove:** A repository does not make evidence trustworthy unless origin, integrity, access, and interpretation are preserved.
- **Mapping confidence:** Supporting; direct only for a specific repository, packaging, or evidence-store specification.
- **Source/version note:** Cite the repository architecture, evidence packaging format, signature model, retention policy, and access model used.

### Verifier and appraisal logs

[CRA Art. 31](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_31)<br/>
[SP 800-161 SR-6](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-161r1-upd1.pdf#page=173)

Verifier and appraisal logs preserve what evidence was checked, which policy was applied, and what result was produced. In this handbook, logs help make verifier decisions reviewable, but they do not prove that the verifier policy or evidence inputs were sufficient.

Verifier logs are implementation-specific. Examples include attestation verifier logs, CI/CD policy gate logs, SBOM ingestion logs, vulnerability-status appraisal logs, customer assurance portal audit logs, and transparency-log records such as [Rekor](https://github.com/sigstore/rekor) entries or receipts from transparency services that follow the IETF [SCITT architecture (RFC 9943)](https://www.rfc-editor.org/info/rfc9943) for signed statements. Reviewers should know which verifier produced the log, which policy and evidence versions were used, how results are protected from alteration, and how log records are linked to the relying-party decision.

- **Assurance role:** Preserve what evidence was appraised, which policy was applied, and what result was produced.
- **Evidence supported:** Verifier inputs, appraisal results, policy version, relying-party decision records, and exception records.
- **Lifecycle fit:** Acceptance, deployment, monitoring, update validation, audit, and incident review.
- **Dependencies:** Verifier identity, policy versioning, log integrity, access control, retention, and review workflow.
- **What it does not prove:** Logs do not prove the policy was sufficient or the evidence inputs were complete without contextual review.
- **Mapping confidence:** Supporting for verifier workflows and audit readiness.
- **Source/version note:** Cite the verifier, policy version, log schema, integrity mechanism, and retention period.

### Artifact registries

[CRA Art. 31](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_31)

Artifact registries store releases, SBOM/xBOM records, vulnerability records, reference values, configuration records, or other artifacts with metadata. In this handbook, registries help make artifacts findable and reviewable, but correctness still depends on generation, signing, review, and verification workflows.

Registries differ in how they model artifacts, signatures, metadata, versioning, access, and retention. Examples include [OCI registries](https://opencontainers.org/), package registries, firmware repositories, SBOM repositories, vulnerability advisory repositories, reference-value stores, and OCI-attached attestations created by tools such as [cosign](https://github.com/sigstore/cosign). The implementation should make it clear whether a registry entry is a source artifact, published evidence, cached copy, superseded record, or approval-bound release.

- **Assurance role:** Store signed releases, SBOM/xBOM records, vulnerability records, reference values, configuration records, or other artifacts with metadata.
- **Evidence supported:** Artifact identity, version, origin, signature, scope, approval, publication, and retrieval records.
- **Lifecycle fit:** Build, release, acceptance, update, vulnerability response, audit, and renewal.
- **Dependencies:** Naming, versioning, signing, metadata, access controls, update process, and retention rules.
- **What it does not prove:** A registry record does not prove artifact correctness or sufficiency unless connected to review and verification.
- **Mapping confidence:** Supporting for evidence management; direct where a specific artifact registry or packaging specification is mapped.
- **Source/version note:** Cite the registry type, metadata model, signature or integrity mechanism, and retention policy.

### Retention and reuse workflows

[CRA Art. 31](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_31)<br/>
[CRA Art. 13 § 13](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R2847-20241120#art_13)

Retention and reuse workflows keep evidence available after the original review, acceptance decision, or audit request has passed. In this handbook, retention is valuable when evidence remains tied to product scope, lifecycle state, refresh history, and the decision it supports.

Reuse workflows may be implemented through evidence graphs, attestation stores, customer portals, or audit exports. Examples include [GUAC](https://github.com/guacsec/guac) for supply chain metadata aggregation and [Witness](https://github.com/in-toto/witness) with [Archivista](https://github.com/in-toto/archivista) for creating and storing in-toto attestations.

- **Assurance role:** Keep evidence explainable and usable after acceptance, across product changes, supplier changes, vulnerabilities, audit cycles, and lifecycle transitions.
- **Evidence supported:** Retention schedules, evidence packages, access records, stale-evidence reviews, refresh decisions, and disposal records.
- **Lifecycle fit:** Acceptance, operation, update, audit, renewal, repair, transfer, and decommissioning.
- **Dependencies:** Evidence ownership, retention policy, product/version binding, access controls, refresh triggers, and disposal rules.
- **What it does not prove:** Retained evidence may be stale or irrelevant unless its scope, date, lifecycle state, and refresh history are visible.
- **Mapping confidence:** Supporting for audit, lifecycle, and assurance reuse.
- **Source/version note:** Cite retention policy, legal or contractual drivers where applicable, evidence classes, and review cadence.

## What these options can support

Repositories, logs, and retention workflows can support audit readiness, customer assurance, incident review, vulnerability response, and lifecycle continuity. They help evidence remain available after the original product acceptance or supplier review has passed.

## What they do not solve alone

They do not make evidence accurate, complete, trustworthy, or sufficient. They also do not replace evidence review, verifier policy, access governance, or stale-evidence handling.

## What must exist around them

- evidence ownership and classification;
- metadata for product, version, supplier, lifecycle state, and decision context;
- access control, integrity protection, and audit logging;
- retention, refresh, and disposal policy;
- exception handling for missing, stale, conflicting, or inaccessible evidence;
- retrieval and explanation workflow for customers, auditors, assessors, and internal teams.

## Evidence they may produce, protect, exchange, or verify

- evidence packages and repository metadata;
- verifier and appraisal logs;
- artifact registry records;
- access and retrieval records;
- retention schedules and disposal records;
- stale-evidence review and refresh records;
- audit export and customer assurance packages.

## Verification considerations

Verification should check whether evidence origin is preserved, whether integrity and access controls are adequate, whether metadata links evidence to the correct product and decision, whether retention rules match the assurance need, and whether stale evidence is reviewed.

## Tooling categories

- evidence repositories and artifact registries;
- document and records management;
- verifier log storage;
- metadata and evidence graph tooling;
- access control and audit logging;
- retention and disposal management;
- customer assurance or audit export portals.

## Supplier and implementer questions

- Where is evidence retained, and who owns it?
- What metadata binds the evidence to product, version, supplier, release, lifecycle state, or decision?
- How is evidence integrity protected after collection?
- How are access, retrieval, refresh, disposal, and audit export handled?
- What happens when evidence is stale, missing, contradictory, or no longer accessible?

## Related pages

- [Choosing Technology Options](./choosing-technology-options.md)
- [Evidence Exchange and Verifier Workflows](./evidence-exchange-verifier-workflows.md)
- [Evidence Maturity Model](../resources/evidence-maturity-model.md)
- [Evidence Package Template](../resources/evidence-package-template.md)
- [Audit and Compliance Readiness](../practices-controls/audit-compliance-readiness.md)
