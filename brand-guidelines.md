# Supply Chain Security Handbook - Brand Guidelines

These guidelines codify visual and written conventions so contributors can present a consistent, credible brand experience across the website, social previews, presentations, and related materials.

## Brand Essence

| Element | Guidance |
|---|---|
| Name | Supply Chain Security Handbook |
| Domain | `supplychainsecurityhandbook.com` |
| Tagline | Practical guidance for evidence-backed lifecycle assurance |
| Core proposition | Practical supply-chain-security guidance for products and platforms where hardware, firmware, software, suppliers, credentials, updates, and lifecycle services all affect trust. |
| Personality | Practical, neutral, standards-aware, evidence-led, and lifecycle-aware. |
| Voice | Clear, active, and decision-oriented. Avoid hype, advocacy, and standards-body jargon as the starting point. |

The brand should feel related to the Secure-by-Design Handbook visual family, but the content positioning is distinct. This site is about supply-chain-security assurance across complex technology products and platforms, not broad secure-by-design implementation guidance.

## Logo And Asset Suite

| Asset | File | Usage |
|---|---|---|
| Header logo | `static/img/logo.svg` | Navbar, site identity, small page or slide marks. |
| Favicon | `static/img/favicon.svg` | Browser tab and small icon contexts. |
| Social card | `static/img/social-card.svg` | OpenGraph and social preview image. |
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
| Mid Grey | `#5E6E75` | Light-mode body text. |
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
| Navbar | Deep Teal background with light text. Keep top navigation restrained. |
| Footer | Dark style, practical links into the handbook journey. |
| Primary buttons | Use the Docusaurus primary/secondary button system with the site palette. |
| Cards | Use cards for reader routes, decisions, and evidence groupings. Keep copy short. |
| Code blocks | Use Source Code Pro and the configured Docusaurus code styling. |
| Tables | Use for mappings and comparisons. Keep columns readable on mobile. |

## Homepage Visual Pattern

The homepage should keep the sister-site visual pattern while reflecting the supply-chain-security brief:

- Hero proposition and two clear calls to action.
- Value pillars that move from requirements and risks to practices and controls to evidence.
- A simple model: requirements and risks, practices and controls, evidence, and technology options.
- A clear handoff to the Requirements & Risks for detailed routing.
- Neutrality and open-source framing.

Do not let the homepage look like a TCG, GlobalPlatform, or 10 best practices microsite.

## Iconography And Illustrations

- Prefer simple line or flat-vector assets.
- Use primary cyan as an accent rather than the whole illustration.
- Avoid decorative icons that imply certification, legal authority, or endorsement.
- When using letter or number markers in cards, keep them consistent with the existing homepage style.

## Writing And Naming

Follow `style-guide.md` for editorial voice. Key brand reminders:

- Use "Supply Chain Security Handbook" for the project name.
- Use "supply-chain security" as a noun phrase when referring to the discipline generally.
- Prefer "evidence-backed assurance", "lifecycle assurance", "practical guidance", and "technology-aware mappings".
- Avoid "evidence hub", "10 best practices microsite", and any phrasing that implies a standards body owns the whole problem.
- Treat technology options as implementation or verification options, not mandates.

## Linking Guidance

For public site routes, use canonical root routes with trailing slashes, for example:

- Good: `/practices-controls/`
- Good: `/requirements/`
- Good: `/practices-controls/10-best-practices/`
- Good: `/technology-options/`
- Avoid: `/docs/practices-controls/10-best-practices`

For repository documentation, use relative markdown links where possible, for example:

- Good: `[Style Guide](style-guide.md)`
- Good: `[Evidence Checklist](docs/resources/evidence-checklist.md)`

## Asset Export Notes

| Asset | Target | Format |
|---|---|---|
| Favicon | Browser icon | SVG source, export PNG only if required by a platform. |
| Social card | OpenGraph preview | SVG source at `static/img/social-card.svg`; export PNG if a platform does not support SVG previews. |
| Slide title mark | Presentation use | SVG logo or source illustration, with clear spacing and no distortion. |

## Governance

- Treat `brand-guidelines.md`, `style-guide.md`, `navigation-structure.md`, and `purpose-and-positioning.md` as the root editorial guidance set.
- Major visual identity changes should be reviewed alongside `src/css/custom.css`, `src/pages/index.module.css`, `static/img/`, and `docusaurus.config.ts`.
- Keep brand guidance practical. Do not add visual rules that the site does not actually implement.
