# Agent guidance

This repository contains the source for the Supply Chain Security Handbook, a Docusaurus site. Treat the existing maintainer guides as the source of truth; do not duplicate their full rules here.

## Before making changes

- For changes to handbook content, read [style-guide.md](style-guide.md) and [purpose-and-positioning.md](purpose-and-positioning.md). For posts under `blog/`, read the News And Analysis Posts section of the style guide.
- For page placement, URLs, links, sidebars, or the footer, read [navigation-structure.md](navigation-structure.md) and check `sidebars.ts` and `docusaurus.config.ts` as needed.
- For pages that readers arrive at cold from search, AI answers, or shared links, read [entry-page-seo-strategy.md](entry-page-seo-strategy.md).
- For visual or UI changes, including diagrams, read [brand-guidelines.md](brand-guidelines.md).
- For a periodic review of the site, or a change to how reviews run, read [periodic-review.md](periodic-review.md).
- Check nearby pages and existing patterns before adding new content or components.

## Content requirements

- Write for product security, supply-chain security, procurement, supplier-assurance, audit, and implementation practitioners working on complex technology products and platforms.
- Keep guidance vendor-neutral, practical, and evidence-led. Start from the reader's standard, threat, expectation, or decision, then translate it into controls, evidence, verification, and technology options.
- Treat technologies as options, not mandates, and do not imply that technology alone solves supply-chain security. Avoid legal, certification-style, or compliance-authority claims.
- Attribute dates, obligations, and incident details to the relevant primary source.
- Use American English and the page metadata, sourcing, and linking conventions in the style and navigation guides.
- Never link to or cite `.ai-helper-files/`; it holds private local drafting material, not public sources.

## Implementation and verification

- Docs live under `docs/` and are served from the site root with trailing slashes; blog posts live under `blog/` and are served under `/blog/`. Keep each doc in the sidebar that owns its section.
- Preserve the documented Node.js 20+ requirement (CI builds with Node 24). Use the package scripts rather than ad hoc build commands.
- Before considering a change ready, run `npm run typecheck` and `npm run build` (see [README.md](README.md)). Broken links fail the build.
- Do not claim checks passed unless they were run and passed. If a check cannot be run, state that clearly.
