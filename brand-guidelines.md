# Supply Chain Security Handbook - Brand Guidelines

These guidelines codify visual and written conventions so contributors can present a consistent, credible brand experience across the website, social previews, presentations, and related materials.

## Brand Essence

| Element | Guidance |
|---|---|
| Name | Supply Chain Security Handbook |
| Domain | `supplychainsecurityhandbook.com` |
| Tagline | Practical supply chain security guidance for evidence-backed lifecycle assurance |
| Core proposition | Practical supply chain security guidance for products and platforms where hardware, firmware, software, suppliers, credentials, updates, and lifecycle services all affect trust. |
| Personality | Practical, neutral, standards-aware, evidence-led, and lifecycle-aware. |
| Voice | Clear, active, and decision-oriented. Avoid hype, advocacy, and standards-body jargon as the starting point. |

The brand should feel related to the Secure-by-Design Handbook visual family, but the content positioning is distinct. This site is about supply chain security assurance across complex technology products and platforms, not broad secure-by-design implementation guidance.

## Logo And Asset Suite

| Asset | File | Usage |
|---|---|---|
| Header logo | `static/img/logo.svg` | Navbar, site identity, small page or slide marks. |
| Favicon | `static/img/favicon.svg` | Browser tab and small icon contexts. |
| Social card | `static/img/social-card.png` (source: `static/img/social-card.svg`) | OpenGraph and social preview image (`themeConfig.image`), `1200 × 630`, with `og:image` dimensions and alt text set in `themeConfig.metadata`. |
| Source illustration | `static/img/tech_shield_padlock_v5.svg` | Shared sister-site visual source or supporting illustration where appropriate. |

Logo usage:

- Keep clear space of at least half the logo height around the mark.
- Keep the mark legible at small sizes.
- Do not skew, stretch, outline, recolor arbitrarily, or change stroke weight.
- Use approved SVG assets from `static/img/` rather than recreating the mark.
- Use descriptive alt text, such as "Supply Chain Security Handbook logo".

## Color Palette

The site currently uses the sister-site teal/cyan palette.

| Role | Hex | Usage |
|---|---|---|
| Primary Cyan | `#00C5D8` | Links, accents, highlights, active UI elements. |
| Deep Teal | `#013B4E` | Navbar, dark footer, dark-mode background. |
| Darker Teal | `#012A38` | Navbar depth and darker UI surfaces. |
| Surface Light | `#F5FCFD` | Light-mode background and dark-mode foreground text. |
| Mid Gray | `#5E6E75` | Light-mode body text. |
| Highlight Orange | `#FF9F45` | Warnings or selective emphasis. Use sparingly. |

Accessibility expectations:

- Do not convey meaning by color alone.
- Check text contrast when adding new color combinations.
- Prefer the existing Docusaurus/Infima variables in `src/css/custom.css`.

## Typography

| Use | Font family | CSS reference |
|---|---|---|
| Headings | Inter, weight 700 | `--ifm-heading-font-weight: 700` |
| Body | Inter, weight 400/600 | `--ifm-font-family-base: 'Inter', sans-serif` |
| Code / CLI | Source Code Pro, weight 500 | `--ifm-font-family-monospace: 'Source Code Pro', monospace` |

Load fonts through the Docusaurus `stylesheets` setting or self-hosted equivalents. Always preserve system fallbacks.

## UI Components

| Component | Guidance |
|---|---|
| Navbar | Dark navbar (`navbar.style: 'dark'`) with light text, the search box, and restrained top-level items: the four handbook sections plus GitHub (see [navigation-structure.md](navigation-structure.md)). The background is Deep Teal (`#013B4E`) in light mode and Darker Teal (`#012A38`) in dark mode. Infima's `.navbar--dark` class sets its own charcoal background, so `src/css/custom.css` overrides it for both color modes. |
| Footer | Dark style in both modes: Deep Teal (`#013B4E`) with Surface Light (`#F5FCFD`) links into the handbook journey, above a single copyright line whose license link is underlined in the footer link color. |
| Primary buttons | Use the Docusaurus primary/secondary button system with the site palette. |
| Cards | Use the `scs-card` and `scs-card-grid` classes for reader routes, decisions, practice areas, technology-option roles, and resource tools: outlined cards with a subtle `1px` border that turns Primary Cyan on hover, in two or three columns that stack to one column at `768px` and below. Keep copy short. |
| Code blocks | Use Source Code Pro and the configured Docusaurus code styling. |
| Tables | Use for mappings and comparisons, with the default Infima table styling. Tables are not restyled for phones and scroll sideways when they are too wide, so keep columns few and cell text short. |
| News and analysis | The blog listing and posts use the standard page, table, and admonition styles. No hero images, per-post illustrations, or promotional banners; posts share the site's social card. |

## Homepage Visual Pattern

The homepage should keep the sister-site visual pattern while reflecting the supply chain security brief:

- Hero proposition and a clear primary call to action into the 10 best practices.
- Role-based reader paths for procurement, product security, suppliers, audit, implementers, and standards/compliance mapping.
- A simple model: standards and threats, practices and controls, technology options, and resources.
- Featured resources that route readers to evidence checklists, worked examples, and standards/evidence/technology mapping.
- A concise handoff to news and analysis.
- Neutrality and open-source framing.

Do not let the homepage look like a TCG, GlobalPlatform, or 10 best practices microsite.

## Diagrams And Illustrations

- Keep diagrams and illustrations functional, clean, and low-noise. Every visual should clarify a flow, a relationship between parties, or a decision boundary that is hard to follow in prose or a table.
- Draw diagrams in Mermaid. Mermaid uses the `neutral` theme in light mode and the `dark` theme in dark mode, so diagrams stay legible in both color schemes. Prefer a straight chain without return arrows where the content allows, because loops make Mermaid place nodes out of reading order.
- Give every diagram `accTitle` and `accDescr`, and keep the point the diagram makes in the surrounding prose, so the page still works for screen readers and on narrow screens where wide diagrams scale down.
- For icons and illustrations, prefer simple line or flat-vector assets, with Primary Cyan as an accent rather than filling the whole graphic.
- Avoid decorative stock art, and icons, seals, or badges that imply certification, legal authority, compliance approval, or endorsement.
- When using letter or number markers in cards, keep them consistent with the existing homepage style.

## Writing And Naming

Follow `style-guide.md` for editorial voice. Key brand reminders:

- Use "Supply Chain Security Handbook" for the project name.
- Use "supply chain security" as the public noun phrase when referring to the discipline generally.
- Keep naming vendor-neutral and standards-body-neutral: avoid sub-brands or phrasing that imply endorsement by a regulator, a standards body such as TCG or GlobalPlatform, or a commercial supplier.
- Prefer "evidence-backed assurance", "lifecycle assurance", "practical guidance", and "technology-aware mappings".
- Avoid "evidence hub", "10 best practices microsite", and any phrasing that implies a standards body owns the whole problem.
- Treat technology options as implementation or verification options, not mandates.
- Treat resources as a small toolkit, not a library. The public Resources set is Supplier Security Questions, Evidence Checklist, Evidence Maturity Model, Evidence Package Template, Worked Examples, Standards to Evidence and Technology Mapping Workflow, Glossary, Curated References, and News and Analysis.

## Linking Guidance

For public site routes, use canonical root routes with trailing slashes, for example:

- Good: `/practices-controls/`
- Good: `/standards-threats/`
- Good: `/practices-controls/10-best-practices/`
- Good: `/technology-options/`
- Good: `/resources/worked-examples/`
- Good: `/resources/standards-evidence-technology-mapping/`
- Good: `/resources/curated-references/`
- Avoid: `/resources/further-reading/`
- Avoid: `/resources/templates/`
- Avoid: `/docs/practices-controls/10-best-practices`

For repository documentation, use relative markdown links where possible, for example:

- Good: `[Style Guide](style-guide.md)`
- Good: `[Evidence Checklist](docs/resources/evidence-checklist.md)`
- Good: `[Curated References](docs/resources/curated-references.md)`

## Asset Export Notes

| Asset | Target | Format |
|---|---|---|
| Favicon | Browser icon | SVG source, export PNG only if required by a platform. |
| Social card | OpenGraph preview | Edit the SVG source at `static/img/social-card.svg`, then export `static/img/social-card.png` at exactly `1200 × 630`, because most social and chat platforms, including LinkedIn, X, Facebook, and Slack, do not render SVG previews. Export from a browser with the Inter font loaded, as the SVG names Inter and other renderers substitute a fallback font and ignore its group opacity. |
| Slide title mark | Presentation use | SVG logo or source illustration, with clear spacing and no distortion. |

## Governance

- Treat `brand-guidelines.md`, `style-guide.md`, `navigation-structure.md`, `purpose-and-positioning.md`, and `entry-page-seo-strategy.md` as the root editorial guidance set: mission, audience, and sister-site boundaries in [purpose-and-positioning.md](purpose-and-positioning.md); routes, sidebars, and linking in [navigation-structure.md](navigation-structure.md); voice, language, sourcing, and page metadata in [style-guide.md](style-guide.md); entry pages in [entry-page-seo-strategy.md](entry-page-seo-strategy.md).
- Major visual identity changes should be reviewed alongside `src/css/custom.css`, `src/pages/index.module.css`, `static/img/`, and `docusaurus.config.ts`.
- Keep brand guidance practical. Do not add visual rules that the site does not actually implement.
