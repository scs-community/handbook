# SCSH Handbook - Periodic Review

This guide covers how the handbook is kept accurate, current, and useful. Once a month, a full review of the site is run from Claude Code with `/goal`. It finds new standards activity and supply-chain incidents, rechecks every cited source and every doc page, and leaves a dated report. The other maintainer guides set the surrounding rules:

- [purpose-and-positioning.md](./purpose-and-positioning.md): mission, audience, and content model.
- [style-guide.md](./style-guide.md): sourcing, dates, and news posts.
- [navigation-structure.md](./navigation-structure.md): placement, routes, and linking.

**Status**: Proposed on 24 November 2026; not yet run.

## Principles

- **Full, every month**: Every run reviews every doc page and every source cited in `docs/`. Nothing is skipped because it was fine last month. The only thing carried forward between runs is the previous report: its date, the developments it already recorded, and any sources it could not verify.
- **Derived, not maintained**: Each run builds the source list from the pages, so the list cannot drift from what is published. The watchlist is also derived from the publishers the handbook already cites, plus a short fixed list of core bodies and incident sources, so that the review can find what the handbook does not yet cover.
- **Unverified is a status, not a pass**: A source that cannot be fetched is recorded as could not verify, with the reason. It is never counted as confirmed or as broken.
- **Correctness is fixed, relevance is proposed**: The run corrects what is wrong or out of date. Changes to guidance, structure, or the reader journeys are written up as proposals for a maintainer to decide.
- **Obligations are flagged**: Any change the run makes to a legal or regulatory obligation, date, or scope (for example, under the CRA or NIS2) is listed separately in the report, so the reviewer checks it explicitly rather than finding it in the diff.

## Rules This Review Applies

The [style guide](./style-guide.md) already covers sourcing, date format (`D Month YYYY`), news post scope, and [updates and corrections](./style-guide.md#updates-and-corrections) to posts. The review also applies these rules:

- **Same change**: When a development changes something the handbook states, the news post (if one is warranted) and every affected doc page change in the same run and the same commit. A post never announces a change that the reference pages do not yet reflect.
- **Posts are snapshots**: News posts are not rechecked as current. Where a later development supersedes what a post reported, add an update note as the style guide describes. Do not rewrite the post body.
- **Reference pages do not depend on posts**: Doc pages hold the lasting guidance and cite primary sources. They may route to `/blog/`, but they should not cite an individual post as the source for a claim.
- **No review dates on pages**: Pages do not say when they were last reviewed or checked (see [Sourcing Rules](./style-guide.md#sourcing-rules)). The report is the record of what was checked and when. Remove any such text a run finds.

## What a Run Covers

A run answers six questions in order. The report has one section for each.

### 1. What Is New?

Check the watchlist for anything issued since the last report, or, for the first run, since 1 January 2026. Look for:

- new or revised publications;
- drafts that became final;
- comment periods that opened or closed;
- withdrawn documents;
- implementing or delegated acts, and guidance that changes an obligation or date;
- supply-chain incidents and advisories that change or sharpen an assurance decision.

The watchlist has three parts.

**Derived from the pages.** Each run, list every publisher whose document is cited in `docs/`. On 24 November 2026 this included:

- the European Commission and EUR-Lex (the CRA and NIS2);
- NIST and the NIST CSRC (SP 800-161, SSDF);
- ETSI (EN 304 623 and related work);
- IEC (62443);
- ENISA;
- CISA;
- NCSC;
- BSI;
- TCG;
- GlobalPlatform;
- DMTF;
- the IETF (the rats working group, through the IETF Datatracker);
- CycloneDX, SPDX, and Ecma TC54;
- OASIS;
- the Open Compute Project;
- CHIPS Alliance;
- the update-framework projects cited on Technology Options pages.

**Fixed core bodies.** Always check these, whether or not they are cited yet:

- the European Commission's CRA pages and the CRA implementing and delegated acts;
- ENISA;
- CEN-CENELEC JTC 13 and ETSI for CRA harmonized standards;
- NIST;
- CISA;
- the UK NCSC;
- IEC TC 65;
- TCG;
- GlobalPlatform;
- the IETF rats and scitt working groups;
- OpenSSF;
- SPDX;
- CycloneDX.

**Incident sources.** Check:

- CISA advisories and the Known Exploited Vulnerabilities catalog;
- GitHub Security Advisories and OSV for package-registry compromises;
- the first-party advisories of the affected maintainer or vendor for any incident found there.

Treat aggregator coverage as a lead to a primary source, never as a source.

For each development, decide whether it changes anything the handbook states or should state.

- **If it does**: Make every page change in the same run. If it also meets the style guide's tests for a news post, write the post.
- **If it does not**: Record it in one line with the reason, so the next run knows it was seen.

A publisher whose pages cannot be fetched is recorded as could not verify, like a source.

### 2. Is It Still True?

Build the source list, then check every source on it. The list contains every external URL cited in `docs/`, together with the pages that cite it:

```bash
grep -rnoE "https?://[^][)(<>\"' \`]+" docs \
  | sed -E 's/[.,;:]+$//' \
  | awk -F: '{f=$1; sub(/^[^:]*:[0-9]+:/,""); if ($0 !~ /supplychainsecurityhandbook\.com|github\.com\/scs-community/) print $0 "\t" f}' \
  | sort -u \
  | awk -F'\t' '{a[$1]=a[$1] (a[$1]?", ":"") $2} END{for(u in a) print u "\t" a[u]}' \
  | sort
```

On 24 November 2026 this listed 144 sources.

Fetch each source and confirm two things:

- It is the document cited.
- What the citing pages say about it still holds, including title, version, status, publication or revision date, and any dates, obligations, or positions quoted.

A landing page that shows status, version, and date is usually enough. Read the full text only where a page quotes or paraphrases it. For vendor product pages cited as technology examples, confirm that the product and the capability attributed to it still exist. Do not assess the product.

Give each source one status:

| Status | Meaning |
| --- | --- |
| **Confirmed** | Fetched this run. It is the cited document, and the citing pages match it. |
| **Updated** | Fetched this run. The source has changed, and every citing page now matches it. |
| **Replaced** | The URL is gone or now points elsewhere. The citation now points to the issuing body's own current copy. |
| **Withdrawn** | The issuer has withdrawn or retired the document with no successor. The citing claims have been rewritten or removed, not just relinked. |
| **Could not verify** | Not fetched this run. The reason is recorded: blocked, timed out, or no official copy found. |

### 3. Is It Still Current?

Read every page for text that time alone has made wrong:

- deadlines, application dates, comment periods, and expected publication dates that are now in the past;
- words such as *recently*, *new*, *upcoming*, *this year*, *next year*, *currently*, *draft*, and *expected* that no longer hold at the run date;
- dates in the worked examples, the evidence package template, and the evidence maturity model that are presented as still to come but are now past;
- threat pages that describe an incident or technique as current when it has since been resolved or superseded;
- "last reviewed", "last checked", "as of [date]" and similar text, which the style guide does not allow on reference pages. Remove it, and restate the status it qualified in the present tense.

### 4. Is It Consistent?

Every date, status, obligation, and position that appears on more than one page must agree everywhere. Check:

- the Standards and Regulations pages;
- the standards and technology mapping workflow;
- the 10 best practices synthesis and the practice pages;
- the Technology Options pages;
- the supplier security questions and the evidence checklist;
- the worked examples;
- the glossary.

When a run changes one statement, search for every other statement of it and change those too.

### 5. Is It Still Relevant?

Read each section as its audience would, against the developments found in question 1 and the run date. Ask questions such as:

- Do the six Start Here journeys still send each reader to the right pages?
- Do the supplier security questions and the evidence checklist still ask for what a buyer would now expect, given new standards or incidents?
- Do the evidence maturity model and the worked examples still reflect current practice?
- Does each Technology Options page still describe the right mechanisms and examples?
- Does a recent incident expose a failure mode that the threat pages or practice pages do not cover?
- Is there a standard, regulation, technology, or authority that readers now meet and the handbook does not cover?

Write each answer that calls for change as a proposal in the report, with its reason and the source behind it. Do not make the change in the run.

### 6. Is the Site Healthy?

Run `npm run typecheck` and `npm run build`. The build fails on broken internal links (`onBrokenLinks: 'throw'`). Broken anchors and broken Markdown links only warn, so record every build warning in the report. Also run `npm outdated` and `npm audit`.

Apply patch and minor dependency updates only if both checks still pass afterwards. Record major updates and security advisories as proposals.

## Fetching Sources

Some publishers block automated requests, and which ones do varies by run and by network. EUR-Lex, NIST, ETSI, and the IEC webstore together account for most cited URLs, so a block from any of them affects many pages.

- **Be polite**: Fetch one page at a time from each site, and use the tools' normal behavior. Never solve a challenge, rotate addresses, or try in any other way to get past bot protection.
- **Detect blocking by response, not keywords**: Treat any of these as could not verify:
  - a `403` or `429`;
  - a `202` with no content;
  - a connection failure;
  - a page whose title is not the cited document.

  Do not search the page body for words such as *captcha*, because pages that loaded correctly can contain them.
- **Use the issuer's own alternative route**: Some issuers offer another official route to the same facts, such as a publication listing, a CELEX or ELI record on EUR-Lex, a DOI record, the NIST CSRC publication page, or an IETF Datatracker page. Confirming through such a route counts. A third-party copy, cache, or archive does not.
- **Paywalled standards**: For standards sold through a webstore (IEC, ISO), the publication page's edition, date, and status are the facts to confirm. Do not try to obtain the full text.
- **Hand-check afterwards**: After the goal finishes, a maintainer opens each could-not-verify source in a browser. Claude records the result in the report as confirmed, updated, replaced, or withdrawn, with "checked by hand" in its note. Anything still unverified stays so.
- **Escalate what stays unverified**: List any source that could not be verified in two consecutive reports at the top of the next report. Look for another official copy from the same issuer. If none can be checked, add a proposal to reword the claim so that it no longer depends on that source, or to remove it. Do not add a "last confirmed" date to the page.

## Running the Review

1. Start Claude Code in the repository on an up-to-date `main`, in auto mode, so that permission prompts do not stop the run.
2. Paste the goal below, replacing `YYYY-MM` with the year and month of the run.
3. When the goal ends, read the closing summary and the report. Then hand-check the could-not-verify sources, and ask Claude to record the results in the report.
4. Decide the proposals, review the diff (checking each flagged obligation change against its source), then push the branch and open a pull request yourself.

### The Goal

```text
/goal The YYYY-MM periodic review in periodic-review.md is complete. Steps: (1) Create branch review/YYYY-MM from main before any edit. (2) Create reviews/YYYY-MM.md with the six sections in periodic-review.md and fill each section as you work, so the report is the record if the session compacts or resumes. (3) Build the source list with the command in periodic-review.md and give every listed source exactly one status (confirmed, updated, replaced, withdrawn, or could not verify with a reason), fetching politely and never bypassing bot protection. (4) Check the watchlist in periodic-review.md for developments since the last report. (5) Review every page under docs/, split by sidebar section across subagents if useful; fix what is wrong, out of date, or inconsistent, list every change to a legal or regulatory obligation or date separately in the report, and record relevance changes as proposals without making them. (6) Write any news posts and update notes that new developments need, following style-guide.md. (7) Run npm run typecheck and npm run build, and fix failures. (8) Confirm the current branch is review/YYYY-MM, then commit all changes. Do not push. Done when your final message, in one turn, shows: the branch name; the number of sources listed and the count for each status; doc pages reviewed out of the total; the number of new developments, page changes, flagged obligation changes, posts, and proposals; both commands with exit code 0 from this session; and the commit hash. Stop and report what remains if not done after 40 turns.
```

The goal stays under the 4,000-character limit. The evaluator that decides whether a goal is met reads only the conversation, not files, so the final message must show the evidence itself. The goal has not been tested yet. Adjust it here after the first run.

## The Report

Each run writes `reviews/YYYY-MM.md`, which is the review log. The report is not part of the site, because Docusaurus builds only `docs/`, `blog/`, and `src/pages/`, and nothing on the site links to it. The report contains these items, in order:

1. The run date, the branch, the commit, and the closing summary counts.
2. Any sources that could not be verified in the previous report as well as this one.
3. The changes to legal or regulatory obligations and dates, each with its source, for the reviewer to check.
4. One section for each of the six questions. Sources go in a table of URL, citing pages, status, and note. Pages are listed by sidebar section.
5. The proposals, each with its reason and source, for a maintainer to decide.
6. The hand-check results, added after the goal ends.

Never rewrite an earlier report. Correct it in the next one.
