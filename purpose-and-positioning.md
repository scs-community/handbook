# SupplyChainSecurityHandbook.com - Purpose & Positioning

## What We Are Building

SupplyChainSecurityHandbook.com is a practical, vendor-neutral guidance site for products and platforms where hardware, firmware, software, suppliers, credentials, updates, and lifecycle services all affect trust.

The site helps buyers, suppliers, manufacturers, operators, auditors, assessors, and ecosystem participants establish, request, verify, retain, and reuse trustworthy information about the security and integrity of complex device, component, platform, and software supply chains.

Examples include connected devices, embedded systems, mobile platforms, PCs, servers, cloud infrastructure components, industrial systems, automotive platforms, medical devices, and secure components.

## Positioning

The site is standards-and-threats-led, control-focused, evidence-backed, and technology-aware.

The handbook is for teams that need to understand the standards they must satisfy and the real supply-chain threats they need to mitigate. Those standards and threats may come from regulation, frameworks, procurement, customer assurance, audit, certification, product acceptance, internal governance, cyber threat patterns, or lifecycle failure modes. The handbook translates them into practical controls, supplier questions, evidence expectations, and technology-aware implementation options.

The site should not be positioned as an evidence hub, a generic resource library, or a TCG / GlobalPlatform 10 best practices microsite. Those framings are too narrow. The handbook should feel like a practical guidance site that uses the 10 best practices workplan as one source of material inside a broader reader journey.

## Visitor Promise

Visitors often arrive because they face a standard, regulation, procurement expectation, audit need, customer assurance request, cyber threat, or supply-chain failure mode.

They should leave with:

- a clearer understanding of the standard, threat, expectation, or supply-chain-security decision they are trying to address;
- a practical view of relevant lifecycle controls and best practices;
- a sense of what evidence can support those practices;
- a sense of who produces, verifies, retains, and relies on that evidence;
- a neutral view of which standards, evidence structures, or technology options may help.

## Audience

Write first for:

- product-security leaders;
- supply-chain-security leaders;
- procurement and supplier-assurance teams;
- procurement and acquisition teams for technical products;
- product-acceptance decision makers;
- buyers and operators of technical products;
- platform and device manufacturers;
- component and secure-technology vendors.

Support implementers, auditors, assessors, certification bodies, assurance labs, and standards participants as secondary readers.

The site should not primarily be written for standards specialists. Standards specialists may be interested, but the language should start from supply-chain-security problems and evidence needs, not from standards-body terminology.

## Primary Reader

The primary reader is responsible for translating a standard, expectation, threat, or failure mode into practical assurance work. That reader may sit in product security, supply-chain security, procurement, supplier assurance, audit, compliance, product acceptance, or governance.

Secondary readers include assurance requesters and implementers who need to ask for, produce, verify, retain, or explain evidence. Serve them through practice pages, reusable resources, technology-option pages, and page-level related links rather than separate homepage routing systems.

## Content Model

The site distinguishes four connected layers:

1. **Standards & Threats**: standards, regulations, procurement expectations, assurance frameworks, cyber threats, and supply-chain attack or failure modes that explain why action is needed and what is being mitigated.
2. **Practices & Controls**: the operating layer of the handbook. Practice pages explain what should operate, which controls sit inside the practice, what evidence those controls should produce or retain, and how reviewers can verify it.
3. **Technology Options**: the technology interpretation layer. These pages explain mechanisms that may help implement controls or generate, protect, exchange, verify, or retain evidence without making any single mechanism mandatory.
4. **Resources**: a small practical toolkit: [Supplier Questions](docs/resources/supplier-questions.md), [Evidence Checklist](docs/resources/evidence-checklist.md), [Evidence Maturity Model](docs/resources/evidence-maturity-model.md), [Evidence Package Template](docs/resources/evidence-package-template.md), [Standards & Technology Mapping Workflow](docs/resources/standards-technology-mapping-workflow.md), [Glossary](docs/resources/glossary.md), and [Curated References](docs/resources/curated-references.md).

Standards should not be treated as one category. Some standards and frameworks explain why a reader has a requirement. Some describe assurance expectations or evidence structures. Others provide technical mechanisms.

| Type | Role in the site | Examples |
|---|---|---|
| Standards and regulations | Explain why visitors may need guidance | CRA, NIS2, NIST, ISO, ENISA, NCSC, CISA, sector frameworks |
| Assurance and evidence structures | Explain what artefacts or assurance structures may be useful | SBOM/xBOM, CoRIM/CoMID, RATS/EAT, attestation evidence |
| Technology and implementation mechanisms | Explain how evidence or trust can be implemented | TCG, GlobalPlatform, SPDM, TPM, DICE, TEE, Secure Element |

Evidence is a cross-cutting concept rather than a top-level section. It belongs inside practice pages, review checklists, evidence packages, and technology-option explanations. Evidence should be scoped to a decision, product or supplier boundary, lifecycle stage, and verification path.

## Lifecycle Thesis

Supply-chain-security assurance is not a single event. It changes as products move from design to sourcing, manufacturing, provisioning, logistics, acceptance, deployment, update, repair, transfer, and decommissioning.

The evidence needed at each stage changes too. Some evidence establishes origin. Some verifies current state. Some supports update and vulnerability response. Some proves lifecycle decisions after acceptance.

## Non-Goals

The site is not:

- a replacement for existing supply-chain-risk-management guidance;
- a legal compliance interpretation service;
- a standards-body advocacy site;
- a detailed implementation profile;
- a procurement questionnaire only;
- a generic software supply-chain-security site;
- a list of TCG or GlobalPlatform technologies.

## Distinctive Editorial Angle

Supply-chain security becomes more actionable when practices are linked to lifecycle controls and evidence. Evidence becomes more useful when it can be produced, verified, retained, and reused across the product lifecycle.

## Relationship To Standards Activity

The handbook should be transparent about its relationship to the GlobalPlatform / TCG collaboration while remaining organized around reader needs rather than standards liaison activity.

The GlobalPlatform 10 best practices workplan is source material for one theme within the broader site. The 10 best practices page is a navigational and educational anchor inside Practices & Controls. It is not the whole site.

Standards and technology options should be clearly sourced where possible. Interpretive mappings should be presented as guidance, not as formal endorsement, certification advice, or compliance advice.
