# Supply Chain Security Handbook

**Practical supply chain security guidance for evidence-backed lifecycle assurance.**

This repository contains the source for [supplychainsecurityhandbook.com](https://supplychainsecurityhandbook.com), a vendor-neutral handbook for products and platforms where hardware, firmware, software, suppliers, credentials, updates, and lifecycle services all affect trust. It helps product security, supply-chain security, procurement, supplier-assurance, audit, and implementation teams translate standards, regulations, procurement expectations, and real supply-chain threats into practical controls, evidence expectations, and technology-aware implementation options.

The Supply Chain Security Handbook is built with [Docusaurus 3](https://docusaurus.io/) and is a sister site to the **Secure-by-Design Handbook** and the **PQC Handbook**.

## Documentation

### Maintainer Guides

Read these root documents before changing structure, prose, or styling, and the last one before running a review:

- [Purpose & Positioning](./purpose-and-positioning.md) — Mission, visitor promise, audience, reader modes, and non-goals
- [Navigation Structure](./navigation-structure.md) — Top-level navigation, sidebars, sitemap, homepage routing, and footer
- [Style Guide](./style-guide.md) — Voice, page model, evidence and standards language, sourcing rules, content quality tests, and news posts
- [Brand Guidelines](./brand-guidelines.md) — Visual identity, logo assets, colors, typography, UI components, and diagram guidance
- [Entry Page SEO Strategy](./entry-page-seo-strategy.md) — Which pages must work for cold visitors arriving from search, AI answer engines, and shared links, and how to keep them useful
- [Periodic Review](./periodic-review.md) — The monthly full-site review run from Claude Code with `/goal`: what it checks, how blocked sources are handled, and the report it leaves under `reviews/`

[AGENTS.md](./AGENTS.md) tells coding agents which of these guides to read for each kind of change.

### Handbook Content (`docs/`)

- [Start Here](./docs/start-here/index.md) — Reader routes for procurement and supplier assurance, product security, suppliers and manufacturers, audit and compliance, technical implementation, and standards mapping
- [Standards & Threats](./docs/standards-threats/index.md) — Standards, regulatory drivers, threat patterns, and failure modes that route into practical assurance work
- [Practices & Controls](./docs/practices-controls/index.md) — Applied supply-chain-security practices, controls, lifecycle assurance, and the 10 best practices synthesis
- [Technology Options](./docs/technology-options/index.md) — Role-based technology interpretation for trust anchors, attestation, transparency artifacts, signing, updates, exchange, repositories, logs, and retention
- [Resources](./docs/resources/index.md) — Supplier questions, evidence checklist, evidence maturity model, evidence package template, worked examples, standards and technology mapping workflow, glossary, and curated references
- [Blog](./blog/) — Dated posts on supply-chain incidents, standards, and regulatory developments, served at `/blog/`; each links to the handbook pages that hold the lasting guidance

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **20.0** or newer (`engines.node` in `package.json`); CI builds with Node 24

### Install and Run Locally

```bash
npm install
npm start
```

Starts the local development server with hot reloading. Markdown pages under `docs/` are served directly from the site root with trailing slashes (for example, `/practices-controls/10-best-practices/`). Site search only works in a production build; use `npm run build` and `npm run serve` to try it.

## Verification and Build

Run both checks locally before opening a pull request or pushing to `main`. The [GitHub Actions workflow](./.github/workflows/deploy.yml) runs the same two commands on every pull request and on every push to `main`, and deploys to GitHub Pages only from `main` when both pass:

```bash
npm run typecheck
npm run build
```

| Command | Description |
| --- | --- |
| `npm start` | Runs the development server with hot reloading |
| `npm run typecheck` | Runs TypeScript (`tsc`) against `docusaurus.config.ts`, `sidebars.ts`, and `src/` |
| `npm run build` | Builds static files and the local search index into `build/` (broken links fail the build; broken Markdown links warn) |
| `npm run serve` | Serves the production `build/` output locally |
| `npm run clear` | Clears the Docusaurus cache and generated files |

## Repository Layout

| Path | Purpose |
| --- | --- |
| `docs/` | Public handbook Markdown content (`routeBasePath: '/'`) |
| `blog/` | Blog posts at `blog/<date>-<slug>.md`, served under `/blog/` with RSS and Atom feeds; `tags.yml` and `authors.yml` hold the tags and authors a post may use |
| `src/pages/` | Homepage: hero, choose your path, how the handbook works, featured resources, and community (`index.tsx` and `index.module.css`) |
| `src/theme/` | Theme wrappers: `SearchPage` adds `noindex` to the local search results page |
| `src/css/custom.css` | Infima color palette, typography, cards, and footer overrides |
| `static/` | `CNAME`, logo, favicons, and social card images under `img/` |
| `sidebars.ts` | Hand-written documentation sidebars: Start Here plus one per navbar section |
| `docusaurus.config.ts` | Site configuration, navbar, footer, Mermaid theme, local search, sitemap, and link policy |
| `reviews/` | Dated periodic review reports (see [periodic-review.md](./periodic-review.md)) |
| `sector-notes-template.md` | Template for future sector notes; kept outside `docs/` until there is enough sourced content |

*(If present locally, `.ai-helper-files/` holds gitignored private drafting material and must never be linked or cited on public pages.)*

## Deployment

Pushes to `main` automatically build and deploy the site to GitHub Pages via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):

- **Live site**: [https://supplychainsecurityhandbook.com](https://supplychainsecurityhandbook.com) (`static/CNAME`)
- **CI steps**: Node 24 setup, `npm ci`, `npm run typecheck`, and `npm run build` on every pull request and push; on a push to `main`, GitHub Pages artifact upload and deployment follow only if every step passed

## Contributing, Security, and License

We welcome contributions from product-security, supply-chain-security, procurement, supplier-assurance, assurance, audit, standards, and implementation practitioners:

- **Suggest improvements, ask a question, or report a stale reference**: Open an [issue](https://github.com/scs-community/handbook/issues)
- **Propose content or structural changes**: Follow [CONTRIBUTING.md](./CONTRIBUTING.md), the sourcing, voice, and navigation rules in [style-guide.md](./style-guide.md) and [navigation-structure.md](./navigation-structure.md), and verify `npm run typecheck` and `npm run build` pass locally
- **Report a security vulnerability**: Report it privately as described in [SECURITY.md](./SECURITY.md)
- **License**: The handbook is licensed under [CC BY-SA 4.0](./LICENSE), the same license as its sister sites
