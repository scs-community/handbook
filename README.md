# SupplyChainSecurityHandbook.com

This repository contains the source for SupplyChainSecurityHandbook.com, a practical, vendor-neutral reference for supply-chain-security guidance across complex technology products and platforms. It helps teams translate requirements and risks from compliance, procurement, audit, customer assurance, product acceptance, governance, and resilience concerns into practical controls, evidence expectations, lifecycle assurance, and technology-aware implementation options.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Documentation

- [Purpose & Positioning](purpose-and-positioning.md) - Mission, audience, positioning, reader modes, and non-goals
- [Navigation Structure](navigation-structure.md) - Top-level navigation, sitemap, and homepage routing model
- [Style Guide](style-guide.md) - Editorial stance, sourcing rules, evidence language, and content quality tests
- [Brand Guidelines](brand-guidelines.md) - Visual identity, assets, colors, typography, and brand usage
- [Requirements & Risks](docs/requirements/index.md) - Requirement and risk routes into practical assurance work
- [Practices & Controls](docs/practices-controls/index.md) - Controls, lifecycle assurance, the 10 best practices synthesis, and decision guides
- [Decision Guides](docs/practices-controls/decision-guides.md) - Practical guidance for procurement, supplier assurance, product acceptance, audit, monitoring, and implementation planning
- [Evidence](docs/evidence/index.md) - Evidence types, maturity levels, and assurance decisions
- [Technology Options](docs/technology-options/index.md) - Neutral mappings to implementation mechanisms, protocols, formats, trust anchors, verifier workflows, and tooling
- [Resources](docs/resources/index.md) - Glossary, supplier questions, evidence checklist, templates, and further reading
- [Contributing](CONTRIBUTING.md) - Contribution workflow and submission checklist

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Typecheck

```bash
npm run typecheck
```

## Deployment

The site is deployed to GitHub Pages using GitHub Actions.

- **Live Site**: [https://supplychainsecurityhandbook.com](https://supplychainsecurityhandbook.com)
- **Trigger**: Any push to the `main` branch automatically triggers deployment
- **Workflow**: See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for the deployment configuration
- **Process**: Build -> Deploy to GitHub Pages -> Live in a few minutes

## Contributing

We welcome contributions from product-security, supply-chain-security, procurement, supplier-assurance, assurance, audit, standards, and implementation practitioners.

- **Suggest improvements**: Open an [Issue](https://github.com/scs-community/handbook/issues)
- **Ask questions**: Start a [Discussion](https://github.com/scs-community/handbook/discussions)
- **Review the site locally**: Run `npm install`, then `npm start`

Whether you want to add guidance, improve supplier questions, expand evidence mappings, fix typos, or suggest new topics, your contributions help make supply-chain-security assurance more practical and reusable.
