---
title: "ENISA Healthcare Procurement Guidelines: Writing Supplier Evidence into Contracts"
authors: [scs_community]
tags: [procurement, supplier-assurance, evidence, vulnerability-response]
description: "ENISA's 2026 healthcare procurement guidelines show how supply-chain expectations become supplier obligations across plan, source, and manage phases."
---

On July 22, 2026, ENISA published **Procurement guidelines for the cybersecurity of hospitals and healthcare providers**. The document says the European Commission's action plan on the cybersecurity of hospitals and healthcare providers, launched in January 2025, called for updated procurement guidelines that build on ENISA's 2020 guidelines.

The guidelines organize cybersecurity measures into general measures and three procurement phases: plan, source, and manage. Each plan, source, and manage measure is marked as "recommended" or "nice-to-have" for specific procurement types, such as medical devices, clinical information systems, cloud services, and network equipment.

{/* truncate */}

The guidelines are written for hospitals and healthcare providers, and for the suppliers who sell to them. ENISA states that the publication is "intended for information purposes only" and that it "does not override or replace any national regulations". That still makes it useful well beyond healthcare, because it shows in detail where supply-chain expectations turn into tender text, evaluation criteria, and contract clauses.

Procurement is usually the last point where a buyer can ask for evidence before it loses leverage. The useful question is not "does our tender mention cybersecurity?" It is "which supplier obligations will produce evidence we can review at award, during operation, and at exit?"

:::info[Primary source]

**[Procurement guidelines for the cybersecurity of hospitals and healthcare providers](https://www.enisa.europa.eu/publications/procurement-guidelines-for-the-cybersecurity-of-hospitals-and-healthcare-providers)** — ENISA, July 22, 2026

:::

---

:::info[What to do next]

Take one live tender or renewal for a connected product. List the supplier obligations your contract contains for vulnerability remediation, incident notification, remote access, update integrity, component disclosure, and exit, and note which would leave a record you could review later. The gaps are your evidence gaps.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Procurement and supplier-assurance teams | To see how security expectations can be written into tender specifications, evaluation criteria, and contract clauses. |
| Legal and contract owners | To review which notification, remediation, subcontracting, and exit terms the guidelines suggest. |
| Security teams buying connected products | To turn product-acceptance concerns such as remote access and update integrity into pre-award requirements. |
| Suppliers to regulated buyers | To anticipate the documentation and commitments healthcare buyers may request. |

---

## Why the plan / source / manage split matters

The guidelines divide procurement into three phases. In the plan phase, requirements are defined and written into tender specifications. In the source phase, those requirements are evaluated in proposals. In the manage phase, the buyer oversees the supplier after procurement, through monitoring, incident response, corrective updates, and secure end-of-life handling.

In the source phase, the guidelines say proposals are evaluated against requirements including "required disclosure of known vulnerabilities" and "obligations for suppliers regarding timely software patching and maintenance".

In the handbook's reading (not ENISA's claim), the lesson reaches beyond healthcare: evidence you want in the manage phase has to be written in during the plan phase. If the contract does not require patch records, incident contacts, or data-deletion confirmation, the supplier may have no obligation to produce them later.

[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/) treats this as one practice that runs from before award through renewal.

---

## What the guidelines turn into supplier obligations

Several measures read as contract-ready evidence requirements. The status shown is the guidelines' own marking for named procurement types.

| Measure | What the guidelines say | Status in the guidelines |
|---|---|---|
| PLAN-04 Requirement's definition | Suppliers "should provide security updates for the expected lifespan of the product and have a plan for end-of-life"; set an incident point of contact and maximum response time. One example says an RFP can require notification "within 24 hours of any breach". | Recommended: all procurement types |
| PLAN-05 Contractual security clauses | Prompt patching and notification of vulnerabilities or incidents. "Other terms might include" remediation "with defined timelines for critical fixes", suppliers that "must seek approval for any subcontractors" and flow down security requirements, and secure return or destruction of data at contract end. | Recommended: all procurement types |
| SOURCE-03 Technical requirements | Remote access "must be pre-approved and take place only within agreed time windows", limited to the specific device or module supported; maintenance and updates over encrypted channels, "digitally signed and verified". | Recommended: medical devices / IVDs, remote care systems, EHR. Nice-to-have: managed services, CIS, network equipment, ICS/SCADA, healthcare facility infrastructure |
| SOURCE-04 Requirements for supply chain security | Hardware from the official manufacturer or certified distributors; checksums or digital signatures for installation packages, verified before deployment. | Recommended: medical devices / IVDs, network equipment. Nice-to-have: CIS, ICS/SCADA, healthcare facility infrastructure |
| MANAGE-01 Vulnerability disclosure and patch management obligations | Require the supplier to "regularly provide evidence of patching and updating activities", including "patch logs, reports, and change management records". | Recommended: medical devices / IVDs, CIS. Nice-to-have: remote care systems, cloud services, network equipment, ICS/SCADA, healthcare facility infrastructure |
| MANAGE-03 Incident monitoring | Suppliers notify "without undue delay" of incidents that could affect the entity's systems, through a defined reporting mechanism. | Recommended: managed services, CIS, cloud services, medical devices, remote care systems. Nice-to-have: managed security services |

Notification wording varies: an illustrative 24-hour RFP clause, "immediately" in PLAN-05, and "without undue delay" in MANAGE-03. Buyers adapting these clauses may want one consistent definition.

[Supplier Security Questions](/resources/supplier-security-questions/) offers request wording for the update, vulnerability, and lifecycle evidence behind these clauses.

---

## Where component disclosure stays open

Component disclosure is less concrete than the other measures. SOURCE-06, "Supply chain cybersecurity transparency", has the objective of requiring suppliers to maintain "transparency and accountability regarding third-party software and firmware components", including AI-related components. Its implementing guidance, however, covers only vulnerability disclosure and remediation.

The closest the guidelines come to a component listing is PLAN-03. It says that "if possible, it would be best if bidders can provide a listing of the open-source components in the system". The radiology scenario describes requesting the medical device security disclosure (MDS2) form as "best practice". The guidelines do not name SBOMs, and they do not specify a component-disclosure format.

That leaves buyers to decide what to ask for. A component listing is more likely to help vulnerability triage when it is tied to the delivered version and refreshed after updates, so a contract could also say what the listing covers and when it must be reissued.

The [Product Acceptance and Supply Chain Trust](/practices-controls/product-acceptance-supply-chain-trust/) page explains how transparency artifacts, integrity checks, and update records can work together at acceptance.

---

## Weak vs stronger supplier answers

These answers are fictional illustrations, not quotations from ENISA.

Weak answer:

> We patch our products regularly and will inform customers of any serious incidents.

Stronger answer:

> For the contracted product and version, we commit to a defined remediation time frame for critical vulnerabilities, deliver signed updates you can verify before installation, provide patch logs and change records each quarter, allow remote maintenance only through pre-approved, time-limited, MFA-protected sessions scoped to the supported device, notify your named security contact through the agreed channel, and confirm data deletion at contract end.

The stronger answer ties each commitment to a record the buyer can review in the manage phase, not only at award.

The [Supplier Onboarding Evidence Package](/resources/worked-examples/supplier-onboarding-evidence-package/) shows a fictional approve-with-conditions decision for a connected gateway device and its update service, built from answers like this.

---

## How this maps to the handbook

The guidelines are healthcare-specific guidance, but their plan / source / manage structure can help any buyer of connected products decide which evidence to write into the contract.

Recommended reading:

- **[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/)** for turning procurement requirements into evidence requests, contract clauses, and renewal decisions.
- **[NIS2: Supplier Risk Governance and Customer Assurance](/standards-threats/standards-regulations/nis2/)** for the supplier-risk and incident-coordination expectations the guidelines repeatedly reference.
- **[Supplier Security Questions](/resources/supplier-security-questions/)** for request wording on components, updates, vulnerabilities, and lifecycle state.
- **[Evidence Checklist](/resources/evidence-checklist/)** for checking whether supplier responses are scoped, verifiable, and retained.
- **[Product Acceptance and Supply Chain Trust](/practices-controls/product-acceptance-supply-chain-trust/)** for applying integrity and update evidence when a product is delivered.
