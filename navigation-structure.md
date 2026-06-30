# Supply Chain Security Handbook - Navigation Structure

This document describes the intended and current public navigation for SupplyChainSecurityHandbook.com. It should stay aligned with `docusaurus.config.ts`, `sidebars.ts`, and the markdown files under `docs/`.

## Top-Level Navigation

The top navigation should stay restrained:

1. Home
2. Standards & Threats
3. Practices & Controls
4. Technology Options
5. Resources

Do not put the 10 Best Practices page or individual practice pages in top navigation. Practices live inside Practices & Controls because they describe recurring operating activities. The 10 Best Practices page belongs inside Practices & Controls as the synthesis and anchor page.

Do not use standards-body names as top-level navigation labels. Topics such as TCG, GlobalPlatform, attestation, SBOM, TPM, DICE, and TEE should appear inside standards and threats, practices and controls, technology-options, or resources pages.

The Standards & Threats section contains [Threats and Failure Modes](/standards-threats/threats-failure-modes/) because that subsection is the canonical threat-pattern entry point.

## Route Policy

The public docs routes are served at the site root, not below `/docs/`.

- Canonical domain: `https://supplychainsecurityhandbook.com`
- `baseUrl`: `/`
- `docs.routeBasePath`: `/`
- `trailingSlash`: `true`

Use public links such as `/standards-threats/`, `/practices-controls/`, `/practices-controls/supplier-procurement-assurance/`, and `/technology-options/`. Avoid hardcoded `/docs/...` links in public content.

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

/standards-threats/
  Standards & Threats
/standards-threats/standards-regulatory-drivers/
  Standards and Regulations
/standards-threats/standards-regulatory-drivers/eu-cyber-resilience-act/
  EU Cyber Resilience Act
/standards-threats/standards-regulatory-drivers/nis2/
  NIS2
/standards-threats/threats-failure-modes/
  Threats and Failure Modes
/standards-threats/threats-failure-modes/product-component-trust-failures/
  Product and Component Trust Failures
/standards-threats/threats-failure-modes/software-update-chain-compromise/
  Software and Update-Chain Compromise
/standards-threats/threats-failure-modes/supplier-assurance-failures/
  Supplier Assurance Failures

/practices-controls/
  Practices & Controls overview
/practices-controls/lifecycle-map/
  Lifecycle Map
/practices-controls/10-best-practices/
  10 Best Practices for Supply-Chain Security

/practices-controls/supplier-procurement-assurance/
  Supplier & Procurement Assurance
/practices-controls/product-acceptance/
  Product Acceptance
/practices-controls/secure-development-release-governance/
  Secure Development & Release Governance
/practices-controls/software-component-vulnerability-management/
  Software, Component & Vulnerability Management
/practices-controls/secure-update-lifecycle-monitoring/
  Secure Update & Lifecycle Monitoring
/practices-controls/audit-compliance-readiness/
  Audit & Compliance Readiness
/practices-controls/assurance-implementation-planning/
  Assurance Implementation Planning

/technology-options/
  Technology Options overview
/technology-options/choosing-technology-options/
  Choosing Technology Options
/technology-options/trust-anchors-device-identity/
  Trust Anchors & Device Identity
/technology-options/attestation-measured-state/
  Attestation & Measured State
/technology-options/transparency-artefacts-component-visibility/
  Transparency Artefacts & Component Visibility
/technology-options/signing-keys-credential-mechanisms/
  Signing, Keys & Credential Mechanisms
/technology-options/update-recovery-mechanisms/
  Update & Recovery Mechanisms
/technology-options/evidence-exchange-verifier-workflows/
  Evidence Exchange & Verifier Workflows
/technology-options/evidence-repositories-logs-retention/
  Evidence Repositories, Logs & Retention

/resources/
  Resources
/resources/supplier-questions/
  Supplier Questions
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
/resources/standards-technology-mapping-workflow/
  Standards & Technology Mapping Workflow
/resources/glossary/
  Glossary
/resources/curated-references/
  Curated References
```

## Homepage Routing

The homepage should introduce the handbook and point readers to the Standards & Threats as the single detailed routing surface. Avoid stacking multiple homepage route systems such as obligation tables, persona cards, and intent grids.

Homepage routing should stay limited to:

- primary CTA: `/standards-threats/`;
- secondary CTA: `/practices-controls/10-best-practices/`;
- top navigation for readers who already know the section they want.

## Detailed Routing

Detailed routing belongs in `/standards-threats/`, section landing pages, sidebars, and page-level related links. This keeps the homepage focused while still helping readers who arrive with procurement, audit, product-acceptance, evidence, or implementation questions.

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
- standards and technology mapping workflows;
- sector-note templates should remain outside public navigation until there is enough sector content;
- curated references.

Do not reintroduce standalone `Artifact Map`, generic `Templates`, or separate `Evidence Glossary` pages unless there is a specific reader job that cannot be served by the current toolkit. Keep Worked Examples under Resources rather than making examples a top-level navigation item.

## Expansion Rules

Add new pages when there is enough real content to help the reader make a decision. Do not create pages only to reserve a topic.

New pages should connect to at least one of:

- a real obligation or decision;
- a supply-chain-security risk or failure mode;
- a lifecycle stage;
- an evidence type or evidence package need;
- a technology option, standard, or evidence requirement mapping;
- a reusable tool or template.
