---
title: "CRA Reporting Obligations Apply: Evidence for the First 24 Hours"
authors: [scs_community]
tags: [vulnerability-response, standards, evidence, component-visibility, supplier-assurance]
description: "CRA reporting for manufacturers applies from 11 September 2026, so 24-hour deadlines depend on component, triage, and supplier evidence that already exists."
---

On 11 September 2026, reporting obligations under the EU Cyber Resilience Act (CRA) began to apply to manufacturers. ENISA announced the same day that it had deployed the initial operating capability of the CRA Single Reporting Platform (SRP). In ENISA's words, "From today, 11 September 2026, manufacturers are required to report" actively exploited vulnerabilities and severe incidents that affect the security of products with digital elements.

ENISA says it developed, operates and maintains the platform, and that the SRP "allows users to report once and communicate the relevant information to all appropriate authorities."

{/* truncate */}

The European Commission's [CRA reporting page](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting) sets out the timeline. Manufacturers "need to submit an early warning within 24 hours of becoming aware, and a full notification within 72 hours." The final report is due no later than 14 days after a corrective measure is available for an actively exploited vulnerability, or within a month of the 72-hour notification for a severe incident.

For supply-chain assurance, the important words are "becoming aware". The clock runs from awareness, not from the point where the manufacturer has worked out which products and versions are affected. Work slowed by incomplete component records, unclear triage ownership, or a misrouted supplier advisory now has a deadline attached.

The useful question is not "can we file a report on the SRP?" It is "when we become aware, which evidence already exists to tell us what is affected, who decides, and what we can show later?"

:::info[Primary source]

**[The CRA Single Reporting Platform is launched](https://www.enisa.europa.eu/news/the-cra-single-reporting-platform-is-launched)** — ENISA, 11 September 2026

:::

---

:::info[What to do next]

Pick one recent third-party component vulnerability and rehearse it against the 24-hour window. Record how long it took to identify affected products and versions, who made the triage decision, how the supplier or upstream project told you, and where the records are now. The slow steps are your evidence gaps. The [Vulnerability Response Evidence](/resources/worked-examples/vulnerability-response-evidence/) worked example shows what a complete record can look like.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Product-security and PSIRT leads | To check whether triage, ownership, and decision records can keep pace with 24-hour and 72-hour reporting windows. |
| Software and firmware teams | To confirm that component and version records can answer "which products contain this?" quickly. |
| Supplier-assurance and procurement teams | To make sure supplier and upstream notification routes feed the manufacturer's vulnerability and incident workflow. |
| Risk, compliance, and audit teams | To plan what records should be retained so reporting decisions can be reviewed later. |

---

## What the reporting timeline asks of evidence

The Commission page describes three reporting stages. Each depends on evidence that is easier to retrieve than to create under time pressure.

| Stage (as described by the Commission) | Evidence that may help |
|---|---|
| Early warning within 24 hours of becoming aware | A record of when and how the manufacturer became aware, and an initial view of which products may be affected. |
| Full notification within 72 hours | Affected-product and affected-version analysis tied to component records, plus the triage decision and its owner. |
| Final report: no later than 14 days after a corrective measure is available (actively exploited vulnerability), or within a month of the 72-hour notification (severe incident) | Remediation records, release or update evidence for the corrective measure, and any remaining exceptions. |

The deadlines come from the Commission page; the evidence column is handbook interpretation, not a legal checklist.

The [Software Component and Vulnerability Management](/practices-controls/software-components-vulnerability-management/) practice covers the intake, affected-product analysis, and remediation tracking behind each of these stages.

---

## Where the evidence usually breaks

Four gaps can slow the first 24 hours down:

- **Component visibility.** If the manufacturer cannot quickly tell which products and versions contain a vulnerable component, the early warning may rest on guesswork. Version-bound SBOM or component inventory records may help answer this in minutes rather than days.
- **Triage ownership.** If no one owns the decision on whether an issue is reportable, time goes to finding the decision-maker rather than deciding.
- **Supplier and upstream notification.** Reportable issues may start in a third-party library, firmware component, or supplier-delivered element. The manufacturer needs a known route by which suppliers and upstream projects tell it, and a record of when that happened.
- **Retained records.** The SRP gathers the notification. It does not reconstruct the manufacturer's internal reasoning. Triage notes, affected-version analysis, and remediation decisions still need to be kept where they can be reviewed later.

[SBOM, VEX, and Component Visibility](/technology-options/sbom-vex-component-visibility/) explains what component records can and cannot support during vulnerability response.

---

## Questions to ask suppliers now

Both sources describe manufacturers, not their suppliers, as the ones who report. Supplier evidence can still decide how quickly a manufacturer knows what to report. Useful questions include:

- How will you notify us of an actively exploited vulnerability or security incident affecting a component you supply, and how quickly?
- Which of our products and versions does your component appear in, and how is that mapping kept current?
- What status information will you provide: affected, not affected, fixed, or under investigation?
- What records will you keep of notification time, affected versions, and corrective measures, and for how long?

Weak answer:

> We will inform customers of security issues as appropriate.

Stronger answer:

> We notify named customer contacts of actively exploited vulnerabilities in supplied components through an agreed channel, with a timestamped record. Each notice identifies affected and fixed component versions and is followed by status updates until a corrective measure is available. Notification and remediation records are retained for the agreed period.

The stronger answer does not do the reporting for the manufacturer. It gives the manufacturer evidence it can act on inside the reporting window.

[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/) covers how to turn these expectations into contract clauses, incident notification terms, and renewal checks.

---

## What the platform does and does not change

ENISA describes how a notification is routed: the CSIRT "designated as a coordinator that initially receives it" passes it on to "other relevant CSIRTs in Member States where the affected product is also available", "while the notification is simultaneously made available to ENISA." The Commission page describes the notification as addressed to the CSIRT where the manufacturer has its main establishment.

Reporting once instead of to each authority separately removes friction from the reporting step, but not the work behind the report. The platform receives what the manufacturer knows. Whether that knowledge is accurate, scoped to the right products and versions, and supported by retained records still depends on the manufacturer's own evidence.

ENISA also notes that, under Article 24(3) of the CRA, these reporting obligations will apply from 11 December 2027 to open-source software stewards "to the extent that they are involved in the development of products with digital elements."

The handbook's [EU Cyber Resilience Act](/standards-threats/standards-regulations/eu-cyber-resilience-act/) page places the 11 September 2026 reporting date alongside the wider CRA timeline and maps vulnerability handling to evidence.

---

## How this maps to the handbook

The reporting deadlines make existing vulnerability-response and supplier-evidence practices time-critical, so test that evidence before an event starts the clock.

Recommended reading:

- **[EU Cyber Resilience Act: Product Cybersecurity and Lifecycle Evidence](/standards-threats/standards-regulations/eu-cyber-resilience-act/)** for CRA dates and the mapping of vulnerability handling and reporting to controls and evidence.
- **[Software Component and Vulnerability Management](/practices-controls/software-components-vulnerability-management/)** for intake, affected-product analysis, remediation tracking, and status communication.
- **[SBOM, VEX, and Component Visibility](/technology-options/sbom-vex-component-visibility/)** for component records that can support fast affected-product analysis.
- **[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/)** for supplier notification commitments and incident terms.
- **[Evidence Repositories, Logs, and Retention](/technology-options/evidence-repositories-logs-retention/)** for keeping triage and reporting records available for later review.
