# Supply Chain Security Handbook - Style Guide

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

Name files `blog/YYYY-MM-DD-short-slug.md`, using the publication date.

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

1. **Factual lede**, in one or two short paragraphs: what happened, who published or reported it, and when (for example, "31 March 2026"). State only what the source says.
2. `{/* truncate */}`
3. **Handbook framing**, in one to three paragraphs: why this matters for supply-chain assurance. End by restating the event as a decision or evidence question ("The useful question is not X. It is Y.").
4. **Primary source callout**, with exactly this label:

   ```md
   :::info[Primary source]

   **[Source title](https://...)** — Publisher, D Month YYYY

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
- Write dates as `D Month YYYY`.
- Use sentence case for headings inside posts.
- Fictional examples must be clearly illustrative. Do not name real suppliers as weak examples.

### Updates And Corrections

If facts change after publication, such as affected versions, attribution, or a revised source, do not silently rewrite the post. Add a note directly after the truncate marker:

```md
:::note[Updated D Month YYYY]

What changed, with a link to the updated source.

:::
```

Fix typos and broken links silently.
