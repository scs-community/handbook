---
title: Standards Gap Analysis
sidebar_position: 7
---

## Decision

A standards participant, product-security leader, assurance team, or implementation planner needs to understand where standards and technologies support supply-chain-security assurance and where interpretation, profiling, or additional guidance is needed.

## What Can Go Wrong

- Different standards are treated as equivalent even though they play different roles.
- A technology mechanism is mistaken for full supply-chain-security assurance.
- A governance requirement is treated as if it defines a technical evidence format.
- Mapping confidence is not stated.
- Gaps are hidden rather than documented.

## Good Practice

Separate standards and technologies by role: demand source, assurance or evidence model, artifact format, attestation or measurement mechanism, trust anchor, protocol, exchange mechanism, or implementation technology.

## What To Ask For

### Questions to ask suppliers

- Which standard or technology are you citing, and what assurance decision does it support?
- What evidence does it actually produce, protect, exchange, verify, or retain?
- What claims remain unsupported by the cited source?

### Questions to ask internally

- Are we using this source as a need source, evidence model, artifact format, technical mechanism, trust anchor, or protocol?
- What decision would be unsafe if we treated this mapping as stronger than it is?
- What additional guidance, profile, or implementation decision is needed to close the gap?

### Questions to ask assessors / auditors

- Is the source/version visible and mapped to a specific claim or control?
- Are interpretive mappings labeled as guidance rather than formal compliance advice?
- Are direct, supporting, contextual, adjacent, and gap mappings distinguishable?

### Questions to ask implementers

- What is needed to turn the mapping into a deployable control or verification workflow?
- Which product-specific assumptions, trust anchors, formats, or verifier policies are missing?
- How will the implementation record mapping decisions for later review?

## Evidence / Artifacts

Gap analysis may produce mapping matrices, source citations, confidence ratings, assumptions, exclusions, implementation notes, and future profiling needs.

## Weak Answer

This standard is relevant to supply-chain security.

## Stronger Answer

A better answer: This standard supports identity evidence or attestation in some contexts.

A stronger answer: This standard directly defines a mechanism for this evidence type at this lifecycle stage, supports these verification decisions, does not solve these adjacent problems, and may require this future profile or interpretation.

## Lifecycle Stages

Standards gap analysis can apply during requirements translation, procurement, implementation planning, product acceptance, audit, assurance reporting, update planning, and lifecycle monitoring. The lifecycle stage should be explicit because a standard that supports build-time transparency may not support runtime verification or retention.

## Technology Options

Relevant mappings depend on the standard or technology role, the evidence type, and the lifecycle stage being assessed. Use the mapping confidence model in [Technology Options](../technology-options/index.md#mapping-confidence) to distinguish direct support, supporting context, adjacent relevance, and gaps.

## Related Pages

- [Technology Options](../technology-options/index.md)
- [Evidence Models](../evidence/evidence-models.md)
- [Mapping Confidence](../technology-options/index.md#mapping-confidence)
- [Further Reading](../resources/further-reading.md)
