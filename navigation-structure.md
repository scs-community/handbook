# Supply Chain Security Handbook - Navigation Structure

This document describes the intended and current public navigation for SupplyChainSecurityHandbook.com. It should stay aligned with `docusaurus.config.ts`, `sidebars.ts`, and the markdown files under `docs/`.

## Top-Level Navigation

The top navigation should stay restrained:

1. Home
2. Compliance Guide
3. Risks & Practices
4. Use Cases
5. Evidence
6. Standards & Technologies
7. Tools & Templates

Do not put the 10 Best Practices page in top navigation. It belongs inside Risks & Practices as the synthesis and anchor page.

Do not use standards-body names as top-level navigation labels. Topics such as TCG, GlobalPlatform, attestation, SBOM, TPM, DICE, and TEE should appear inside compliance, risks and practices, evidence, use-case, or standards-and-technologies pages.

## Route Policy

The public docs routes are served at the site root, not below `/docs/`.

- Canonical domain: `https://supplychainsecurityhandbook.com`
- `baseUrl`: `/`
- `docs.routeBasePath`: `/`
- `trailingSlash`: `true`

Use public links such as `/compliance-guide/`, `/guidance/`, `/use-cases/`, and `/evidence-assurance/`. Avoid hardcoded `/docs/...` links in public content.

## Site Model

The site should feel like:

```text
Obligation -> Risks & Practices -> Use Cases -> Evidence -> Standards & Technologies -> Tools & Templates
```

This mirrors the logic: obligations create the starting point, risks and practices explain what to do, use cases turn guidance into decisions, evidence shows whether practices are operating, and standards or technologies may help implement or verify it.

The homepage may use a shorter model for clarity:

```text
Obligation -> Practice -> Evidence -> Mapping
```

Use Cases and Tools & Templates support that flow by turning guidance into decisions, evidence requests, templates, and review prompts.

## Launch And Expanded Sitemap

```text
/
  Home

/guidance/
  Risks & Practices overview
/guidance/risks-practices/
  Risks & Practices
/guidance/lifecycle-map/
  Lifecycle Map
/guidance/10-best-practices/
  10 Best Practices for Supply-Chain Security

/use-cases/
  Use Cases overview
/use-cases/procurement-supplier-assurance/
  Procurement & Supplier Assurance
/use-cases/product-acceptance/
  Product Acceptance
/use-cases/audit-compliance/
  Audit & Compliance
/use-cases/lifecycle-monitoring/
  Lifecycle Monitoring
/use-cases/implementation-planning/
  Implementation Planning
/use-cases/standards-gap-analysis/
  Standards Gap Analysis

/evidence-assurance/
  Evidence overview
/evidence-assurance/identity-provenance/
/evidence-assurance/integrity-attestation/
/evidence-assurance/software-component-transparency/
/evidence-assurance/update-vulnerability/
/evidence-assurance/lifecycle-state-audit/
/evidence-assurance/retention-reuse/

/standards-technologies/
  Standards & Technologies overview
/standards-technologies/governance-compliance/
/standards-technologies/evidence-models/
/standards-technologies/transparency-artifacts/
/standards-technologies/attestation-measurement/
/standards-technologies/trust-anchors/
/standards-technologies/protocols-exchange/

/resources/
  Tools & Templates
/resources/glossary/
/resources/supplier-questions/
/resources/evidence-checklist/
/resources/further-reading/
/resources/artifact-map/
/resources/templates/
/resources/sector-notes/
```

## Homepage Routing

The homepage should route by intent, not just repeat navigation.

| Visitor need | Route |
|---|---|
| I need to understand what is expected | `/compliance-guide/` |
| I need to understand risks and practices | `/guidance/` |
| I need a practical synthesis | `/guidance/10-best-practices/` |
| I need to map this across the lifecycle | `/guidance/lifecycle-map/` |
| I need supplier questions | `/use-cases/procurement-supplier-assurance/` |
| I need to accept a product, device, platform, or component | `/use-cases/product-acceptance/` |
| I need to know what evidence matters | `/evidence-assurance/` |
| I need standards or technology mappings | `/standards-technologies/` |

## Reader-Mode Routing

| Reader mode | Starting route |
|---|---|
| Compliance owner | `/compliance-guide/` -> `/guidance/` |
| Assurance requester | `/use-cases/` -> `/resources/evidence-checklist/` |
| Assurance implementer | `/evidence-assurance/` -> `/standards-technologies/` |

| Reader role | Useful starting point |
|---|---|
| Product-security or supply-chain-security leader | `/compliance-guide/` -> `/guidance/10-best-practices/` |
| Procurement or supplier-assurance team | `/use-cases/procurement-supplier-assurance/` |
| Product-acceptance or assurance decision maker | `/use-cases/product-acceptance/` |
| Auditor or assessor | `/compliance-guide/` -> `/evidence-assurance/` |
| Implementer or technology owner | `/evidence-assurance/` -> `/standards-technologies/` |

## Footer And Secondary Navigation

The footer can expose more of the sitemap than the header. It should help readers jump into common use cases, evidence pages, standards mappings, and reusable tools and templates.

Footer links should still avoid making standards-body names the organizing principle. Link to standards roles and evidence needs first, then to specific technologies or standards within those pages.

## Tools And Templates Rule

Tools and templates should not become a catch-all archive. They should contain reusable material that helps readers act:

- glossary entries;
- supplier questions;
- evidence checklists;
- artifact maps;
- templates;
- sector notes;
- curated further reading.

## Expansion Rules

Add new pages when there is enough real content to help the reader make a decision. Do not create pages only to reserve a topic.

New pages should connect to at least one of:

- a real obligation or decision;
- a supply-chain-security risk or failure mode;
- a lifecycle stage;
- an evidence type;
- a standards or technology mapping;
- a reusable tool or template.
