---
title: "2026 SBOM Minimum Elements: A Named Baseline for SBOM Requests and Acceptance"
authors: [scs_community]
tags: [sbom, component-visibility, procurement, transparency, evidence]
description: "CISA and partners updated the SBOM minimum elements, giving buyers a named baseline to request and check SBOMs against, without treating SBOMs as proof of security."
---

On 29 July 2026, CISA and 17 US and international partner organizations published **2026 Minimum Elements for a Software Bill of Materials (SBOM)**. The document "updates and replaces" the minimum elements published by the National Telecommunications and Information Administration (NTIA) in 2021. It was revised after comments on a draft released on 22 August 2025.

The 2026 baseline has 17 data fields, split into SBOM Metadata and Component Data, plus six practices and processes. The authors list ten new elements. They also say the minimum elements "apply to SBOMs for all software, including open source software, AI software, and SaaS".

{/* truncate */}

For supply-chain assurance, the update gives buyers a reference. A contract clause or acceptance criterion that says "provide an SBOM" leaves the content, freshness and depth open to interpretation. A clause that names the 2026 minimum elements gives both parties a published, field-by-field reference. The document itself says organizations "should explicitly address these elements in any policy, contract, or arrangement to ask for or provide SBOMs."

The document also says the minimum elements "do not create new requirements; they refine how organizations should generate and request SBOMs". Its disclaimer says it does not constitute advice for compliance, regulatory or legal purposes. Treat it as a reference you choose to adopt, not as an obligation in its own right.

The useful question is not "Can you provide an SBOM?" It is "Does this SBOM meet the named baseline, and can we tell where it came from, how current it is and how far to rely on it?"

:::info[Primary source]

**[2026 Minimum Elements for a Software Bill of Materials (SBOM)](https://www.cisa.gov/resources-tools/resources/2026-minimum-elements-software-bill-materials-sbom)** — CISA and partners, 29 July 2026

:::

---

:::info[What to do next]

Find one supplier contract, purchase template or acceptance checklist that says "provide an SBOM". Redraft it to cite the 2026 minimum elements, and add three conditions: an SBOM for each delivered version, the generation context stated, and unknown or withheld data marked explicitly.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Procurement and supplier-assurance teams | To replace open-ended SBOM requests with a named, published baseline. |
| Product-acceptance reviewers | To check delivered SBOMs against specific fields and practices before acceptance. |
| Suppliers and manufacturers | To see which new metadata and component fields recipients may start to expect. |
| Vulnerability-management teams | To understand what the baseline does and does not tell them about exposure. |

---

## What the 2026 baseline contains

Appendix A of the document lists 17 data fields. The ten marked "New" are shown in bold.

| Category | Data fields |
|---|---|
| SBOM Metadata | SBOM Author; **SBOM Author Signature**; **SBOM Data Format Name**; **SBOM Data Format Version**; **SBOM Generation Context**; SBOM Timestamp; **SBOM Tool Name**; **SBOM Tool Version**; **SBOM Version** |
| Component Data | Component Dependency Relationship; **Component Hash Algorithm**; **Component Hash Value**; Component Identifiers; **Component License**; Component Name; Component Producer; Component Version |

The six practices and processes are Accommodation of Updates to SBOM Data, Coverage, Distribution and Delivery, Explicitly Identifying Unknown Information, Frequency, and Machine-Processable Data.

Several 2021 elements were renamed or reworked. Supplier Name became Component Producer, because it "has proven ambiguous in practice, particularly around distributors of software". Depth became Coverage, which expects "all components that make up the target software, including transitive dependencies". Known Unknowns became Explicitly Identifying Unknown Information. The stand-alone Access Control element was removed, and its considerations were folded into Distribution and Delivery.

For how SBOM formats and related artifacts fit into assurance decisions, see [SBOM, VEX, and Component Visibility](/technology-options/sbom-vex-component-visibility/).

---

## Fields that help a recipient judge reliance

Most of the new metadata describes the SBOM itself: who produced it, how, from what and in which revision. A recipient asks those questions when deciding how far to rely on a supplier's artifact.

| Element | What it can help a recipient judge |
|---|---|
| SBOM Generation Context | Whether the data came from source "before build", from the "build", or from binary analysis "after build". |
| SBOM Tool Name and SBOM Tool Version | Which tool produced or amended the SBOM. |
| SBOM Version and SBOM Timestamp | Whether this is the latest revision for that component version, and when it last changed. |
| SBOM Author Signature | Whether the SBOM arrived as its author created it. |
| Component Hash Value and Component Hash Algorithm | Whether a listed executable artifact matches the one delivered. |
| Explicitly Identifying Unknown Information | Whether missing data is unknown to the author or deliberately withheld. |

These fields can help move an SBOM from a produced artifact towards a verifiable one. The baseline also says that "Each software version or update should have an associated SBOM," and that a revised SBOM should be issued when an error is corrected. Read together, these points can support version-bound acceptance rather than a one-off submission.

The [Evidence Maturity Model](/resources/evidence-maturity-model/) can help you decide whether a delivered SBOM is a produced artifact or a verifiable one.

---

## What a minimum-elements SBOM still does not show

Meeting the baseline does not show that a product is secure. The document says plainly that "SBOMs will not resolve all software security and supply chain concerns."

Its own validation discussion draws the line. The signature element can give assurance that "the recipient is receiving the SBOM as the SBOM author created it". Confirming "the accuracy, coverage, and completeness of SBOM data" is a separate concern that is "out of the scope of the SBOM Minimum Elements". A signed, complete-looking SBOM can still be wrong.

Vulnerability status also sits outside the baseline. The document describes VEX and CSAF documents as security advisories that "communicate information about the vulnerability status of a software component", and it treats correlating them with SBOMs as an area for future work. In handbook terms, an SBOM records composition and a VEX-style statement records exposure. A buyer usually needs both, tied to the same product version.

On scope, AI software and SaaS are covered by the minimum elements, but the document "does not introduce additional elements for SBOMs for AI systems". It also notes that "The frequency of SBOM delivery for SaaS may also need further specification." For AI-specific fields, see the earlier post on [AI SBOM minimum elements](/blog/2026/05/14/ai-sbom-minimum-elements).

[Software Component and Vulnerability Management](/practices-controls/software-components-vulnerability-management/) explains how component records feed affected-product analysis and status communication.

---

## Asking for SBOMs against the baseline

A named baseline makes supplier questions more precise:

- Does the SBOM include all 17 data fields in the 2026 minimum elements?
- What generation context, tool and tool version produced it?
- Is there a separate SBOM, with its own SBOM Version, for each release or update we receive?
- Does Coverage include transitive dependencies? If you link to other SBOMs, can we access all of them?
- Which fields are unknown, and which are withheld? How can we ask about redacted security-related information?
- How is the SBOM signed, and how do we verify the signature?
- Where is vulnerability status published for the same version?

Weak answer:

> We can provide an SBOM in a standard format on request.

Stronger answer:

> Each release ships with a signed SBOM that meets the 2026 minimum elements. It records the build-stage generation context, tool name and version, SBOM version, component hashes and licenses. It covers transitive dependencies and marks each gap as unknown or withheld. Vulnerability status for the same release is published separately as VEX.

[Supplier Security Questions](/resources/supplier-security-questions/) has request wording you can adapt for component transparency.

---

## How this maps to the handbook

Use the 2026 minimum elements as a named reference for SBOM requests and acceptance, and pair them with evidence that the baseline leaves out.

Recommended reading:

- **[Product Acceptance](/practices-controls/product-acceptance-supply-chain-trust/)** for turning SBOM checks into accept, reject or accept-with-conditions decisions.
- **[SBOM, VEX, and Component Visibility](/technology-options/sbom-vex-component-visibility/)** for how SBOMs and vulnerability-status records work together.
- **[Component Provenance Example](/resources/worked-examples/component-provenance-example/)** for moving from a component list to source, integrity and version-bound evidence.
- **[Evidence Maturity Model](/resources/evidence-maturity-model/)** for judging whether a delivered SBOM is a produced or verifiable artifact.
