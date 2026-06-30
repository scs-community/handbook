# Supply Chain Security Handbook - Navigation Structure

This document describes the intended and current public navigation for SupplyChainSecurityHandbook.com. It should stay aligned with `docusaurus.config.ts`, `sidebars.ts`, and the markdown files under `docs/`.

## Top-Level Navigation

The top navigation should stay restrained:

1. Home
2. Standards & Threats
3. Practices & Controls
4. Evidence
5. Technology Options
6. Resources

Do not put Decision Guides or the 10 Best Practices page in top navigation. Decision Guides live inside Practices & Controls because they apply controls to concrete decisions. The 10 Best Practices page also belongs inside Practices & Controls as the synthesis and anchor page.

Do not use standards-body names as top-level navigation labels. Topics such as TCG, GlobalPlatform, attestation, SBOM, TPM, DICE, and TEE should appear inside standards and threats, practices and controls, evidence, resources, or technology-options pages.

The Standards & Threats section contains [Attack & Failure Modes](/standards-threats/attack-failure-modes/) because that page is the canonical threat-detail page.

## Route Policy

The public docs routes are served at the site root, not below `/docs/`.

- Canonical domain: `https://supplychainsecurityhandbook.com`
- `baseUrl`: `/`
- `docs.routeBasePath`: `/`
- `trailingSlash`: `true`

Use public links such as `/standards-threats/`, `/practices-controls/`, `/practices-controls/decision-guides/`, and `/evidence/`. Avoid hardcoded `/docs/...` links in public content.

## Site Model

The site should feel like:

```text
Standards & Threats -> Practices & Controls -> Evidence -> Technology Options -> Resources
```

This mirrors the logic: standards and threats create the starting point, practices and controls explain what to do, evidence shows whether controls are operating, and technology options may help implement, produce, protect, exchange, verify, or retain evidence.

The homepage may use a shorter model for clarity:

```text
Standards & Threats -> Practices & Controls -> Evidence -> Technology Options
```

Decision Guides are part of Practices & Controls. Resources support the flow by turning guidance into evidence requests, templates, mappings, and review prompts.

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
/standards-threats/attack-failure-modes/
  Attack & Failure Modes

/practices-controls/
  Practices & Controls overview
/practices-controls/lifecycle-map/
  Lifecycle Map
/practices-controls/10-best-practices/
  10 Best Practices for Supply-Chain Security

/practices-controls/decision-guides/
  Decision Guides overview
/practices-controls/procurement-supplier-assurance/
  Procurement & Supplier Assurance
/practices-controls/product-acceptance/
  Product Acceptance
/practices-controls/audit-compliance/
  Audit & Compliance
/practices-controls/lifecycle-monitoring/
  Lifecycle Monitoring
/practices-controls/implementation-planning/
  Implementation Planning

/evidence/
  Evidence overview
/evidence/identity-provenance/
/evidence/integrity-attestation/
/evidence/software-component-transparency/
/evidence/update-vulnerability/
/evidence/lifecycle-state-audit/
/evidence/retention-reuse/
/evidence/evidence-models/

/technology-options/
  Technology Options overview
/technology-options/transparency-artifacts/
/technology-options/attestation-measurement/
/technology-options/trust-anchors/
/technology-options/protocols-exchange/

/resources/
  Resources
/resources/glossary/
/resources/supplier-questions/
/resources/evidence-checklist/
/resources/further-reading/
/resources/artifact-map/
/resources/standards-mapping-workflow/
  Standards Mapping Workflow
/resources/templates/
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

The footer can expose more of the sitemap than the header. It should help readers jump into common decision guides, evidence pages, standards mappings, and reusable tools and templates.

Footer links should still avoid making standards-body names the organizing principle. Link to standards roles and evidence needs first, then to specific technologies or standards within those pages.

## Resources Rule

Resources should not become a catch-all archive. They should contain reusable material that helps readers act:

- glossary entries;
- supplier questions;
- evidence checklists;
- artifact maps;
- standards mapping workflows;
- templates;
- sector-note templates should remain outside public navigation until there is enough sector content;
- curated further reading.

## Expansion Rules

Add new pages when there is enough real content to help the reader make a decision. Do not create pages only to reserve a topic.

New pages should connect to at least one of:

- a real obligation or decision;
- a supply-chain-security risk or failure mode;
- a lifecycle stage;
- an evidence type;
- a technology option, standard, or evidence-model mapping;
- a reusable tool or template.
