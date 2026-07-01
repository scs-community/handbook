---
title: "AI SBOMs: When Component Visibility Has to Include Models, Data, and Infrastructure"
authors: [scs_community]
tags: [sbom, ai, transparency, component-visibility, evidence]
description: "CISA and G7 partners have published minimum elements for AI SBOMs. Here's how to treat them as supply-chain evidence."
---

In May 2026, CISA and G7 partners released voluntary guidance on **Software Bill of Materials for AI - Minimum Elements**. The guidance is intended to improve transparency in artificial intelligence systems and their supply chains.

CISA frames an SBOM as an "ingredients list" that helps organisations understand supply chains and make risk-informed decisions. For AI systems, that ingredients list needs to include more than ordinary software packages.

{/* truncate */}

The guidance describes AI-specific SBOM information across areas such as metadata, system-level properties, models, datasets, infrastructure, security properties, and key performance indicators.

For this handbook, the important point is not that AI SBOMs are a new proof of assurance. They are transparency artefacts. They become useful when they are scoped to a product, version, model, dataset, service, or lifecycle decision, and when the recipient can understand their source, freshness, limitations, and verification path.

This post looks back at the guidance as a practical component-visibility prompt. The useful question is not "Do we have an AI SBOM?" but "Can this artefact support a decision about an AI-enabled product or service?"

:::info[Official guidance]

**[Software Bill of Materials for AI - Minimum Elements](https://www.cisa.gov/resources-tools/resources/software-bill-materials-ai-minimum-elements)** — CISA and G7 partners, 12 May 2026

:::

---

::::info[What to do next]

Choose one AI-enabled product, service, or feature and define the minimum evidence package needed for acceptance or continued use. Include software components, model identity, datasets, infrastructure dependencies, excluded items, refresh triggers, and verification limits.

::::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Product-security leads | To understand how AI components, datasets, models, and infrastructure affect product assurance. |
| Procurement and supplier-assurance teams | To ask better questions about AI-enabled products and services. |
| Suppliers and manufacturers | To prepare evidence-backed answers about AI system composition and limitations. |
| Implementers | To understand where transparency artefacts may need repository, exchange, and verification workflows. |

---

## Why ordinary SBOM thinking is not enough for AI systems

Traditional SBOM thinking often starts with software components: package names, versions, licences, suppliers, and dependency relationships. AI systems can include those things, but they can also depend on:

- model identity, version, properties, and provenance;
- training, evaluation, or operational datasets;
- infrastructure and runtime services;
- model weights and external references;
- security properties and known vulnerabilities;
- performance indicators and evaluation context.

That means the assurance question changes. Buyers and reviewers need to know not only "what packages are in this product?" but also "which model, data, infrastructure, and service dependencies affect this decision?"

For example, an AI gateway used to triage support tickets might include ordinary application dependencies, a hosted large-language-model service, prompt templates, retrieval indexes, evaluation datasets, cloud inference infrastructure, monitoring services, and policy rules that shape outputs. A useful AI SBOM would not turn that into a single magic assurance artefact. It would identify what changed, what is excluded, which version or service is being relied on, and how the buyer can verify freshness before acceptance or renewal.

➡️ **Handbook resource:** [Transparency Artefacts & Component Visibility](/technology-options/sbom-vex-component-visibility/)

---

## What AI SBOMs can help show

AI SBOMs can help make hidden dependencies visible. They may support:

| AI SBOM area | Evidence value |
|---|---|
| Metadata | Shows who produced the artefact, when, in what format, and for what system. |
| System-level properties | Describes the AI system, components, data flows, usage, and intended application area. |
| Models | Identifies models, versions, producers, properties, hashes, licences, and external references. |
| Dataset properties | Records dataset identity, provenance, lifecycle use, licensing, and relevant properties. |
| Infrastructure | Identifies physical, virtual, hardware, cloud, or runtime dependencies. |
| Security properties | Captures security measures, vulnerabilities, threat models, or access-control assumptions. |
| Key performance indicators | Records evaluation or operational metrics needed to understand model behaviour in context. |

This can help procurement, product-security, and assurance teams ask more specific questions about AI-enabled products and services.

➡️ **Handbook resource:** [Evidence Maturity Model](/resources/evidence-maturity-model/)

---

## What AI SBOMs still do not prove

An AI SBOM does not prove that an AI system is safe, fair, secure, robust, lawful, or appropriate for a given use.

It also does not prove by itself that:

- the model behaves acceptably in the buyer's environment;
- the datasets are appropriate, complete, representative, or lawfully usable;
- the system is free from vulnerabilities or adversarial weaknesses;
- the listed infrastructure is configured securely;
- the artefact is current, complete, or independently verified.

Like any transparency artefact, an AI SBOM becomes stronger when it is tied to a decision, scope, source, verification path, known limitations, and retention plan.

➡️ **Handbook resource:** [Evidence Checklist](/resources/evidence-checklist/)

---

## Procurement questions for AI-enabled products

For AI-enabled products and services, supplier questions should become more precise:

- Which AI models, datasets, services, and infrastructure components are in scope?
- Which versions, hashes, producers, licences, and external references apply?
- What is excluded from the AI SBOM, and why?
- How often is the AI SBOM refreshed after model, data, infrastructure, or service changes?
- What security properties, known vulnerabilities, and limitations are recorded?
- Who retains the artefact, and how can a buyer verify freshness and scope?

A weak answer says: "We can provide an AI SBOM."

A stronger answer provides a product-scoped AI SBOM with model, dataset, infrastructure, and software-component scope; names exclusions and limitations; records producer, timestamp, format, repository location, and refresh triggers; and explains how the buyer can verify freshness before acceptance, renewal, or major change.

➡️ **Handbook resource:** [Supplier Questions](/resources/supplier-security-questions/)

---

## How to treat AI SBOMs as evidence

Treat an AI SBOM as one artefact inside an evidence package, not as assurance by itself.

A useful AI SBOM should support a decision such as supplier onboarding, product acceptance, update approval, vulnerability response, audit, or continued use. It should be clear about:

- product, service, model, dataset, infrastructure, and lifecycle scope;
- producer, source, timestamp, format, and repository location;
- verification method and known limitations;
- refresh triggers after model, data, service, infrastructure, or source changes;
- retention owner and review cadence.

Recommended reading:

- **[Standards & Technology Mapping Workflow](/resources/standards-evidence-technology-mapping/)** for mapping artefact roles and confidence.
- **[Component Provenance Example](/resources/worked-examples/component-provenance-example/)** for a worked example of moving from a component list to usable assurance evidence.
- **[Evidence Repositories, Logs & Retention](/technology-options/evidence-repositories-logs-retention/)** for keeping transparency evidence usable after acceptance, update, repair, transfer, or audit.
