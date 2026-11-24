# Supply Chain Security Handbook - Style Guide

Editorial standards for voice, language, attribution, page structure, sourcing, and page metadata across the Supply Chain Security Handbook. Visual identity lives in [brand-guidelines.md](./brand-guidelines.md); routes, sidebars, and linking live in [navigation-structure.md](./navigation-structure.md); mission, audience, sister-site boundaries, and scope live in [purpose-and-positioning.md](./purpose-and-positioning.md); which pages must work as entry points from search lives in [entry-page-seo-strategy.md](./entry-page-seo-strategy.md).

## Voice And Tone

Use a practical, neutral, standards-aware, and guidance-led tone. Evidence is the site's depth and differentiation.

Prefer:

- practices supported by evidence;
- evidence that can be produced, verified, retained, and reused;
- supplier assertions strengthened by verifiable artifacts;
- technology options, not technology mandates;
- lifecycle assurance, not one-time acceptance;
- neutral practices first, implementation options second;
- lead with the reader's standard, threat, expectation, or decision, then translate it into controls, evidence, verification, and technology options.

Avoid:

- sounding like a TCG advocacy site;
- sounding like a GlobalPlatform advocacy site;
- implying that technology alone solves supply-chain security;
- duplicating generic SCRM guidance;
- organizing around standards-body jargon;
- treating standards only as technical implementation details;
- making legal, certification-style, or compliance-authority claims;
- implying every organization needs the most advanced cryptographic assurance from day one.

## Language And Mechanics

- **American English**: Use American spelling consistently: *organization*, *prioritize*, *recognize*, *color*, *license* (noun and verb), *artifact*.
- **Direct, natural prose**: Prefer active voice and clear sentence structure. Use second person (*you*) for steps the reader carries out directly, and name the role when responsibility sits with someone else: *procurement*, *supplier-assurance lead*, *product-security team*, *acceptance decision maker*, *auditor*, *supplier*, or *manufacturer*.
- **Connected, not staccato**: Join related points into sentences that show how they relate, using *so*, *because*, *but*, *which*, *if*, and *while*, rather than a run of short declaratives that each start with their subject. Vary sentence length, keep colons for introducing a list or an example, and give each paragraph one idea.
  - *Avoid*: `"Ask for the SBOM. Check the version. Store the result."` → *Prefer*: `"Ask for the SBOM for the exact version you are accepting, so the result you store can be traced to that release."`
- **Acronyms**: Spell out abbreviations on first use on a page, for example *Software Bill of Materials (SBOM)*, *Remote Attestation Procedures (RATS)*, or *Cyber Resilience Act (CRA)*, unless the short form is clearer in a heading or table and is explained immediately in text or in the [Glossary](docs/resources/glossary.md).
- **Dates**: Write dates in US long format, `Month D, YYYY`, in prose (*March 21, 2026*), with a comma after the year when the sentence continues (*On March 21, 2026, the maintainers...*). Leave dates inside direct quotes as the source wrote them. Use ISO 8601 (`2026-03-21`) only in front matter, file names, and compact reference tables where dates must sort.

### Preferred Domain Terms

Use the handbook's terms consistently, and define new ones in the [Glossary](docs/resources/glossary.md) before relying on them:

| Preferred term | Meaning |
|---|---|
| **assertion** / **verifiable artifact** | Contrasting kinds of evidence: a claim without supporting proof, and an artifact a relying party can check independently |
| **lifecycle assurance** | Assurance that is retained, refreshed, and re-verified after acceptance, not established once |
| **evidence package** | A collected set of artifacts, records, context, gaps, and exceptions that supports one decision |
| **relying party** | The team, service, customer, or workflow that makes a decision based on evidence or a verifier result |
| **product/version binding** | The link between evidence and the specific product, version, or build it describes |
| **technology options** | Mechanisms that may help implement or verify a control, never presented as mandates |
| **weak answer** / **stronger answer** | Contrasting supplier or internal responses, used on practice pages, worked examples, and posts |

## Page Model

Each substantive page should start from the reader's standard, threat, expectation, decision, or supply-chain-security problem, not from a standards body or technology.

Recommended structure:

1. What standard, threat, expectation, or decision brings the reader here?
2. What can go wrong?
3. What stronger practice looks like.
4. What to ask for.
5. What evidence matters.
6. What a weak answer looks like.
7. What a stronger answer looks like.
8. How this maps to lifecycle stages.
9. Relevant technology options.
10. Related resources.

### Page Patterns

Apply the page model through the pattern for each page type rather than forcing every topic into identical headings:

| Page type | Reader job and structure |
|---|---|
| **Start Here routes** (`/start-here/`) | Route one kind of reader into the handbook: the decisions they probably need to make, pages to read in order, what they should leave with, the evidence to expect or produce, and common weak and stronger answers. |
| **Standards and regulations** (`/standards-threats/standards-regulations/`) | Open with official references and who should care; then scope and supply-chain relevance, key dates and status, relationships to other drivers, threats addressed, the source's expectations mapped to controls and evidence, and what to do next. |
| **Threats and failure modes** (`/standards-threats/threats/`) | Explain what can go wrong and why it matters, the decisions it affects, common failure modes, controls that help, and evidence to request or retain. |
| **Practices and controls** (`/practices-controls/`) | Say when to use the page and what the practice is for, the decisions it supports, what can go wrong, core controls, what good practice looks like, questions to ask, evidence it should produce, a weak and a stronger answer, verification, lifecycle stages, and technology options. |
| **Technology options** (`/technology-options/`) | Describe each option with the same fields: assurance role, evidence supported, lifecycle fit, dependencies, what it does not prove, mapping confidence, and a source or version note. Then cover what the options can support, what they do not solve alone, what must exist around them, and verification. |
| **Resources and worked examples** (`/resources/`) | Give the reader a tool to use: questions, checklists, templates, or a worked example that moves from scenario and decision through weak, better, and stronger answers to the evidence package, verification questions, and gaps. Keep fictional organizations clearly illustrative. |
| **Section indexes** (`index.md`) | Route readers into the section without duplicating full pages. |
| **News and analysis posts** (`/blog/`) | Interpret one dated event for supply-chain assurance; follow [News And Analysis Posts](#news-and-analysis-posts) below. |

Practice, threat, technology-option, Start Here, and worked-example pages end with `## Related pages` (the 10 Best Practices synthesis and the Lifecycle Map are the exceptions, because they are themselves routing pages); standards pages end with `## What to do next`. Cite sources inline where the claim is made, or in the `## Official references` section of each standards page, rather than in a separate bibliography.

## Evidence Language

Use evidence broadly: artifact, record, claim, measurement, attestation, certificate, manifest, SBOM/xBOM, update record, vulnerability record, lifecycle-state record, log, or audit material.

Distinguish:

- assertion;
- documented process;
- produced artifact;
- verifiable artifact;
- lifecycle-retained evidence.

## Standards Language

Use confident guidance, but avoid overclaiming. Prefer:

- can support;
- may help;
- is commonly used for;
- can provide evidence for;
- is relevant to.

Avoid unless directly sourced:

- proves compliance;
- is required;
- is the only way.

Overstating obligations is a common failure in supply-chain guidance, so keep legal requirements, standards expectations, authority recommendations, and handbook guidance clearly separated:

- **Attribute in prose**: When citing an external position, name the authority or document, the audience it governs, and an accurate verb in the sentence itself (*"NIS2 requires essential and important entities to…"*, *"NIST SP 800-161 recommends that…"*, *"ENISA's guidelines suggest…"*). Unattributed guidance on a page is already handbook guidance, so do not label it with ledger prefixes such as `**Requirement:**`, `**Handbook practice:**`, or `**Authority statement:**`. Contrast labels such as `**Weak answer:**` and `**Stronger answer:**` are fine.
- **Calibrate modal verbs**: When a sentence says that a regulation or standard requires something, use *must* or *shall* only where the source binds that audience, and name the issuing authority and who it applies to. Do not use *must* to make handbook guidance read like an external obligation; for guidance, prefer direct instructional verbs (*ask*, *record*, *verify*, *retain*, *escalate*) or the measured phrasing above. *Must* is fine for what a decision or condition needs within the handbook's own advice or a worked example (*"name the decision the evidence must support"*).
- **Name whose obligation it is**: A CRA obligation on manufacturers is not an obligation on their customers, and a NIS2 duty on essential entities is not a duty on every supplier. Say whose obligation it is and when it applies, rather than presenting one regulation's date as universal.

## Visual Identity And Branding

Use [Brand Guidelines](brand-guidelines.md) as the source of truth for visual identity, logo usage, colors, typography, homepage visual patterns, and asset export notes.

This style guide governs editorial voice and content structure. The brand guide governs how the handbook should look and feel across the website, social previews, presentations, and related materials.

## Sourcing Rules

- Cite public guidance, standards, or specifications when making factual claims about them.
- Distinguish direct quotation, paraphrase, and interpretation.
- Do not imply endorsement by a standards body unless formally confirmed.
- Label interpretive mappings as guidance.
- Avoid saying a standard requires something unless the source clearly says so.
- Include publication date or version where relevant.
- Keep further reading curated, not exhaustive.
- Order multi-source lists from most authoritative downward: (1) legislation and standards, (2) national cyber guidance, (3) sector guidance, (4) illustrative practice. Treat vendor material as illustrative practice at most.
- Cite final publications rather than superseded drafts, and label drafts, consultations, and candidate standards as such.
- Link rather than rewrite external standards and handbooks; summarize what matters for supply-chain evidence and send the reader to the source for the full text.
- Treat links to the sister sites (see [purpose-and-positioning.md](purpose-and-positioning.md#sister-sites)) as onward reading, not as authorities for dates or obligations; cite the primary source instead.
- Never make a news post the only home of a date or obligation. When a post reports one that a doc page states, update that page in the same change and cite the primary source there, not the post.
- Never cite or link local drafting material under `.ai-helper-files/`, or unverified survey and marketing claims.
- Do not add "last reviewed", "last checked", "last updated", or "as of [date]" text to reference pages. Such dates go stale while the page stays the same, and they suggest the page is only reliable up to that date. The [periodic review](periodic-review.md) keeps pages current, and its reports in `reviews/` record what was checked and when. State current status in the present tense ("is a draft", "has not been adopted"). Dates of events are fine, such as when a document was published, a proposal was made, or an obligation applies. News posts are different, because they are dated snapshots by design (see [Updates And Corrections](#updates-and-corrections)).

## Metadata And Search Results

Every Markdown file under `docs/` has front matter with `title` and `description`, and usually `sidebar_label` and `sidebar_position`:

```yaml
---
title: Supplier and Procurement Assurance
sidebar_position: 4
sidebar_label: Supplier and Procurement Assurance
description: "Build supplier and procurement assurance around scoped supplier risk, evidence requests, contractual commitments, renewal triggers, and exceptions."
---
```

Front matter must parse as YAML, so quote any value that contains a colon followed by a space. Do not set `id` or `slug` except for the documented `10-best-practices` exception (see [navigation-structure.md](navigation-structure.md#route-policy)).

A search or social result should tell the handbook's audience exactly what the page answers, in the words they would search with. Write for the reader, not for keywords: no keyword stuffing, clickbait, superlatives, or sales language. Which pages must work as entry points, and for which searches, is set in [entry-page-seo-strategy.md](entry-page-seo-strategy.md).

- **Titles**: A doc's `title` is its `<h1>`, and the site appends ` | Supply Chain Security Handbook` (33 characters) to make the browser title. Keep each `title` to `70` characters or fewer, so the browser title stays within `103`; most practice, technology-option, and resource titles need under `50`, and standards pages may use the longer *identifier: description* form (*NIS2: Supplier Risk Governance and Customer Assurance*). Results lists show only about 60 characters, so put the words that distinguish the page first. Keep titles in Title Case like the rest of the site, and keep every title distinct.
- **Descriptions**: The search and social snippet. Keep it to `100–160` characters (aim for about `120–155`), distinct across the site, and starting with the content rather than "This page". Say what the page answers or helps the reader do, and make no claim the page does not support. For a standards page, name the issuer, what the document does, its audience, and a key date where the page gives one.
- **Distinct jobs**: Give routing pages, practice pages, and standards pages different titles and snippets, so they do not compete for the same search.
- **Labels**: Keep `sidebar_label` values short enough to fit the sidebar on one line, and keep navbar and footer labels in `docusaurus.config.ts` short enough not to wrap on mobile.

## Content Quality Tests

Each page should pass these tests:

- Can a non-standards specialist understand the practical reason for the page?
- Does the page start from a real standard, threat, expectation, decision, or risk?
- Does it explain what good practice looks like?
- Does it say what evidence would support the practice?
- Does it distinguish assertions from verifiable artifacts?
- Does it map to technology options, resource aids, or standards only where useful?
- Does it give the reader practical questions or next actions?
- Does it link naturally to deeper pages?
- Is every date, obligation, and authority recommendation attributed in prose to its source, with whom it applies to?
- Could a standard's status, a regulatory date, or an incident detail have changed? If so, is the claim tied to a primary source and stated in the present tense, so the [periodic review](periodic-review.md) can keep it current?
- Read out of context, do the title and description tell the reader exactly what the page answers, accurately and without sales language?
- If a news post changes a date or obligation, does the doc page that states it change in the same commit?
- Do `npm run typecheck` and `npm run build` pass?

## News And Analysis Posts

Blog posts at `/blog/` are news and analysis: short, dated interpretations of external events. They are not where core guidance lives. A post explains why an event matters for supply-chain assurance and sends the reader into handbook pages that hold the lasting guidance.

### Choosing A Topic

Write a post when all of these are true:

- **There is an authoritative primary source.** For example, an official advisory, a regulator or standards-body publication, government guidance, or a first-party incident report from the affected maintainer or a recognized threat-intelligence team. Do not build a post on vendor marketing, aggregator coverage, or social-media commentary.
- **The event changes or sharpens an assurance decision.** You can restate it as a question about what evidence should be requested, produced, verified, exchanged, or retained.
- **It fits the site's scope.** It concerns supplier assurance, product acceptance, component visibility, update-chain trust, vulnerability response, lifecycle retention, or standards-to-evidence mapping. Generic CRA, SBOM, or secure-by-design news is out of scope unless it is framed around supply-chain evidence (see [Entry Page Strategy](entry-page-seo-strategy.md)).
- **The handbook already has somewhere to send the reader.** The post should link to at least four existing handbook pages. If those pages do not exist yet, improve the handbook first, or note the gap.

Aim for a mix of incidents, regulation and policy, and guidance or specifications. Prompt posts are better, but relevance and accuracy matter more than speed.

Do not publish:

- straight news reposts with no assurance interpretation;
- vendor or product announcements;
- posts that speculate beyond what the primary source says, such as attribution, impact, or affected versions.

### File And Front Matter

Name files `blog/YYYY-MM-DD-short-slug.md`, always using the source date, even when the post is written later. The source date is the primary source's publication date or, for a scheduled event such as an obligation starting or a certificate expiring, the date the event takes effect. Posts therefore sort by when the event happened, and retrospective posts slot into the timeline where they belong. If the source has no single date (for example, a multi-day incident), use the date of the first authoritative report.

Write a retrospective post as of its source date. Its body should not rely on facts that came out later. If a later development matters, put it in an update note (see [Updates And Corrections](#updates-and-corrections)), dated on the day you add it.

```yaml
---
title: "Event or Topic: Handbook-Angle Subtitle"
authors: [scs_community]
tags: [tag-one, tag-two, tag-three]
description: "One sentence stating the event and why it matters for supply-chain evidence."
---
```

- The title names the event and then states the assurance angle after the colon.
- Use 3-5 tags. Each tag must already exist in `blog/tags.yml`. Add a new tag only if at least one future post is likely to use it.
- Write the description for search and social previews. Keep it to one sentence and about 160 characters or fewer.

### Post Structure

Use this order. Separate the sections after the opening callouts with `---`.

1. **Factual lede**, in one or two short paragraphs: what happened, who published or reported it, and when (for example, "March 31, 2026"). State only what the source says.
2. `{/* truncate */}`
3. **Handbook framing**, in one to three paragraphs: why this matters for supply-chain assurance. End by restating the event as a decision or evidence question ("The useful question is not X. It is Y.").
4. **Primary source callout**, with exactly this label:

   ```md
   :::info[Primary source]

   **[Source title](https://...)** — Publisher, Month D, YYYY

   :::
   ```

5. **Next-action callout**, which gives one concrete action the reader can take this week:

   ```md
   :::info[What to do next]

   ...

   :::
   ```

6. `## Who should read this`, a two-column table (`Role` | `Why it matters`) with three to five rows.
7. **Analysis sections**, three or four `##` sections. Draw on these patterns as they fit:
   - what failed, or why it matters;
   - an evidence table (for example `Evidence` | `Why it matters`, or `Source theme` | `Handbook interpretation`);
   - questions buyers should ask suppliers, as a bullet list;
   - what the source or artifact does not prove;
   - weak and stronger supplier answers.
8. `## How this maps to the handbook`, the closing section. It has one framing sentence, then `Recommended reading:` with three to five bullets in the form `- **[Page title](/public/path/)** for <why>.`

End each analysis section with one sentence that links to the most relevant handbook page.

### Formatting Conventions

- Format weak and stronger answers as blockquotes:

  ```md
  Weak answer:

  > We updated the package.

  Stronger answer:

  > We provide affected-version analysis, remediation records, ...
  ```

- Use public handbook URLs such as `/practices-controls/...`, never `/docs/...`.
- Write dates as `Month D, YYYY`.
- Use sentence case for headings inside posts.
- Fictional examples must be clearly illustrative. Do not name real suppliers as weak examples.

### Updates And Corrections

If facts change after publication, such as affected versions, attribution, or a revised source, do not silently rewrite the post. Add a note directly after the truncate marker:

```md
:::note[Updated Month D, YYYY]

What changed, with a link to the updated source.

:::
```

Fix typos and broken links silently.
