# Supply Chain Security Handbook - Navigation Structure

This document describes the intended and current public navigation for SupplyChainSecurityHandbook.com. It should stay aligned with `docusaurus.config.ts`, `sidebars.ts`, and the markdown files under `docs/`.

## Top-Level Navigation

The top navigation should stay restrained. The site title/logo acts as the home link; the explicit navbar items are the four handbook sections plus GitHub:

1. Standards & Threats
2. Practices & Controls
3. Technology Options
4. Resources
5. GitHub

Do not put the 10 Best Practices page or individual practice pages in top navigation. Practices live inside Practices & Controls because they describe recurring operating activities. The 10 Best Practices page belongs inside Practices & Controls as the synthesis and anchor page.

Do not use standards-body names as top-level navigation labels. Topics such as TCG, GlobalPlatform, attestation, SBOM, TPM, DICE, and TEE should appear inside standards and threats, practices and controls, technology-options, or resources pages.

The Standards & Threats section contains [Threats and Failure Modes](/standards-threats/threats/) because that subsection is the canonical threat-pattern entry point.

## Route Policy

The public docs routes are served at the site root, not below `/docs/`.

- Canonical domain: `https://supplychainsecurityhandbook.com`
- `baseUrl`: `/`
- `docs.routeBasePath`: `/`
- `trailingSlash`: `true`

Use public links such as `/standards-threats/`, `/practices-controls/`, `/practices-controls/supplier-assurance-procurement/`, and `/technology-options/` in config, JSX, blog posts, and other cross-plugin contexts. Avoid hardcoded `/docs/...` links in public content.

Within docs pages, prefer relative Markdown source links such as `../resources/evidence-checklist.md`. Docusaurus converts those source links to the final public route and keeps docs easier to rename. Use public routes inside docs only when source links are not appropriate, such as the `10-best-practices` numeric-prefix exception.

## Site Model

The site should feel like:

```text
Standards & Threats -> Practices & Controls -> Technology Options -> Resources
```

This mirrors the logic: standards and threats create the starting point, practices and controls explain what should operate and what evidence makes it reviewable, technology options may help implement or verify controls, and resources provide a small practical toolkit for applying the guidance.

The homepage may use a shorter model for clarity:

```text
Standards & Threats -> Practices & Controls -> Technology Options
```

Applied practice pages are part of Practices & Controls. Resources support the flow with supplier questions, evidence review criteria, evidence maturity examples, evidence package templates, standards and technology mapping workflow, glossary definitions, and curated source references.

## Launch And Expanded Sitemap

```text
/
  Home

/start-here/
  Start Here
/start-here/procurement-supplier-assurance/
  Procurement and Supplier Assurance
/start-here/product-security/
  Product Security
/start-here/supplier-manufacturer/
  Supplier or Manufacturer
/start-here/audit-compliance-assurance/
  Audit, Compliance, and Customer Assurance
/start-here/technical-implementation/
  Technical Implementation
/start-here/standards-compliance-mapping/
  Standards and Compliance Mapping

/standards-threats/
  Standards & Threats
/standards-threats/standards-regulations/
  Standards and Regulations
/standards-threats/standards-regulations/eu-cyber-resilience-act/
  EU Cyber Resilience Act
/standards-threats/standards-regulations/nis2/
  NIS2
/standards-threats/standards-regulations/nist-sp-800-161/
  NIST SP 800-161
/standards-threats/standards-regulations/iec-62443/
  IEC 62443
/standards-threats/standards-regulations/nist-ssdf/
  NIST SSDF
/standards-threats/threats/
  Threats and Failure Modes
/standards-threats/threats/product-component-trust-failures/
  Product and Component Trust Failures
/standards-threats/threats/software-update-chain-compromise/
  Software and Update-Chain Compromise
/standards-threats/threats/supplier-assurance-failures/
  Supplier Assurance Failures

/practices-controls/
  Practices & Controls overview
/practices-controls/10-best-practices/
  10 Best Practices for Supply Chain Security
/practices-controls/supply-chain-security-lifecycle-map/
  Supply Chain Security Lifecycle Map

/practices-controls/supplier-assurance-procurement/
  Supplier & Procurement Assurance
/practices-controls/product-acceptance-supply-chain-trust/
  Product Acceptance and Supply Chain Trust
/practices-controls/secure-development-release-governance/
  Secure Development & Release Governance
/practices-controls/software-components-vulnerability-management/
  Software, Component & Vulnerability Management
/practices-controls/secure-updates-lifecycle-monitoring/
  Secure Update & Lifecycle Monitoring
/practices-controls/audit-compliance-readiness/
  Audit & Compliance Readiness
/practices-controls/supply-chain-assurance-implementation/
  Assurance Implementation Planning

/technology-options/
  Technology Options overview
/technology-options/choosing-technology-options/
  Choosing Technology Options
/technology-options/trust-anchors-device-identity/
  Trust Anchors & Device Identity
/technology-options/attestation-measured-state/
  Attestation & Measured State
/technology-options/sbom-vex-component-visibility/
  SBOM, VEX, and Component Visibility
/technology-options/signing-keys-credentials/
  Signing, Keys, and Credentials
/technology-options/secure-update-recovery-mechanisms/
  Secure Update and Recovery Mechanisms
/technology-options/evidence-exchange-verifier-workflows/
  Evidence Exchange & Verifier Workflows
/technology-options/evidence-repositories-logs-retention/
  Evidence Repositories, Logs & Retention

/resources/
  Resources
/resources/supplier-security-questions/
  Supplier Security Questions
/resources/evidence-checklist/
  Evidence Checklist
/resources/evidence-maturity-model/
  Evidence Maturity Model
/resources/evidence-package-template/
  Evidence Package Template
/resources/worked-examples/
  Worked Examples
/resources/worked-examples/supplier-onboarding-evidence-package/
  Supplier Onboarding Evidence Package
/resources/worked-examples/product-acceptance-package/
  Product Acceptance Package
/resources/worked-examples/secure-update-approval/
  Secure Update Approval
/resources/worked-examples/vulnerability-response-evidence/
  Vulnerability Response Evidence
/resources/worked-examples/component-provenance-example/
  Component Provenance Example
/resources/worked-examples/weak-vs-strong-supplier-answers/
  Weak vs Strong Supplier Answers
/resources/standards-evidence-technology-mapping/
  Standards to Evidence and Technology Mapping Workflow
/resources/glossary/
  Glossary
/resources/curated-references/
  Curated References

/blog/
  News and Analysis
```

## Homepage Routing

The homepage should introduce the handbook and route readers without competing navigation systems. The current implementation uses role-based reader paths, a compact handbook model, featured resources, and a news/analysis handoff.

Homepage routing should stay limited to:

- hero CTA: `/practices-controls/10-best-practices/`;
- role cards under `/start-here/`;
- compact model links to `/standards-threats/`, `/practices-controls/`, `/technology-options/`, and `/resources/`;
- featured resources: Evidence Checklist, Worked Examples, and Standards to Evidence and Technology Mapping Workflow;
- latest analysis link to `/blog/`;
- top navigation for readers who already know the section they want.

## Detailed Routing

Detailed routing belongs in `/start-here/`, `/standards-threats/`, section landing pages, sidebars, and page-level related links. This keeps the homepage focused while still helping readers who arrive with procurement, audit, product acceptance, evidence, implementation, or standards-mapping questions.

## Footer And Secondary Navigation

The footer can expose more of the sitemap than the header. It should help readers jump into common practices, technology-option pages, standards mappings, and reusable tools and templates.

Footer links should still avoid making standards-body names the organising principle. Link to standards roles, practices, evidence needs, and technology-option roles first, then to specific technologies or standards within those pages.

## Resources Rule

Resources should not become a catch-all archive. They should remain the small practical toolkit that helps readers act:

- glossary entries;
- supplier questions;
- evidence checklists;
- evidence maturity models;
- evidence package templates;
- worked examples;
- standards to evidence and technology mapping workflows;
- sector-note templates should remain outside public navigation until there is enough sector content;
- curated references;
- news and analysis.

Do not reintroduce standalone `Artifact Map`, generic `Templates`, or separate `Evidence Glossary` pages unless there is a specific reader job that cannot be served by the current toolkit. Keep Worked Examples under Resources rather than making examples a top-level navigation item.

## Expansion Rules

Add new pages when there is enough real content to help the reader make a decision. Do not create pages only to reserve a topic.

New pages should connect to at least one of:

- a real obligation or decision;
- a supply chain security risk or failure mode;
- a lifecycle stage;
- an evidence type or evidence package need;
- a technology option, standard, or evidence requirement mapping;
- a reusable tool or template.
