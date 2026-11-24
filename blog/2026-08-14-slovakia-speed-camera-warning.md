---
title: "Slovakia's Speed-Camera Warning: Product Acceptance Starts with Origin and Interface Evidence"
authors: [scs_community]
tags: [procurement, supplier-assurance, component-visibility, evidence]
description: "Slovakia's NBU warned about road speed-camera products after finding origin, interface, and remote-access risks. What evidence should buyers demand first?"
---

On August 14, 2026, Slovakia's National Security Authority (Národný bezpečnostný úrad, NBU) published a warning about a significant cyber threat involving several types of road speed meters with cameras. The warning is dated August 13, 2026, and was issued under Slovakia's cybersecurity act (Act No. 69/2018).

The warning names three product lines. These are NERO R-ONE road speed meters, with SODASUS of the Republic of Cyprus listed as manufacturer, and two Cordon-series vehicle speed meters, with Simicon of the Russian Federation and NEROline of the Republic of Croatia listed as manufacturers. NBU says it carried out the security analysis at the request of the Slovak Ministry of the Interior. It also says its analysis of a loaned sample of the NERO R-ONE identified several security risks.

{/* truncate */}

NBU lists these risks:

- the actual origin of the cameras' hardware and software;
- a mismatch between the documented and the observed configuration of the product's communication interfaces;
- preconfigured remote-access and management mechanisms whose configuration is not fully available to the user;
- a mismatch between the declared software and the software actually used to process measurements;
- weak software security.

NBU recommends that operators of essential services and other entities identify these products in their infrastructure. Where the products are present or in use, the warning says they must contact NBU about next steps.

For this handbook, the warning is useful because of what kind of findings it lists. Several describe a gap between what a product was declared to be and what testing found. These are product-acceptance and component-trust questions, and a buyer can ask them before any device connects to a public-sector network.

The useful question is not "is this supplier trustworthy?" It is "what evidence about origin, interfaces, remote management, and software would let us check that the delivered device matches its documentation?"

:::info[Primary source]

**[Varovanie pred rizikami cestných meradiel (Warning about the risks of road measuring devices), ref. 07175/2026/NCKB-001](https://www.nbu.gov.sk/data/att/4096.pdf)** — Národný bezpečnostný úrad (National Security Authority of the Slovak Republic), August 14, 2026

:::

---

:::info[What to do next]

Pick one category of connected field equipment, such as cameras, sensors, or roadside or building controllers, and check your acceptance records for three items: a declared list of communication interfaces, a description of any vendor remote-access or management channel, and the firmware or software version actually installed. Record any device that lacks any of the three as an acceptance gap.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Public-sector procurement teams | To turn origin and interface questions into tender and contract evidence requirements. |
| Product acceptance and test teams | To decide what independent testing should check before connected devices go into service. |
| Network and security operations | To identify devices with remote-management channels that may sit outside normal oversight. |
| Suppliers and integrators of field equipment | To prepare origin, sub-tier, interface, and software evidence that buyers can verify. |

---

## Why these findings are acceptance failures

NBU frames its findings as security risks. Two are direct mismatches between the documentation and the device: the documented interfaces differ from the observed ones, and the declared software differs from the software in use. A third is preconfigured remote access and management whose configuration is not fully available to the user. NBU also lists the actual origin of the hardware and software as a risk in its own right.

These risk categories correspond to failure modes described in [Product and Component Trust Failures](/standards-threats/threats/product-component-trust-failures/). That page describes the general case: a delivered item that cannot be tied to its expected supplier, configuration, or provenance. The handbook notes that these failures are often found late, when someone asks for evidence that was never produced.

The [Product Acceptance](/practices-controls/product-acceptance-supply-chain-trust/) practice explains how to make delivery a controlled decision point instead.

---

## What evidence a buyer can request

Mapping NBU's risk categories to evidence gives a starting request list. This mapping is the handbook's interpretation, not NBU's guidance.

| NBU risk category | Evidence a buyer can request |
|---|---|
| Actual origin of hardware and software | Named manufacturers for the main hardware assemblies and firmware, sub-tier supplier declarations, and records of any rebranding, white-labeling, or reseller path. |
| Documented vs observed communication interfaces | A complete interface declaration covering wired, wireless, cellular, and debug interfaces, plus each interface's default state and how to disable it. |
| Preconfigured remote access and management | A description of every vendor remote-access or management channel: who operates it, where it connects, how the buyer can see and control it, and how to turn it off. |
| Declared vs actually used software | A firmware and software manifest bound to the delivered version, an SBOM or xBOM for that version, and a way to check the installed build against the manifest. |
| Weak software security | Vulnerability status for the shipped version, update and support commitments, and security test results. |

The [Component Provenance Example](/resources/worked-examples/component-provenance-example/) shows how source, reseller path, and firmware build evidence can be tied to one product release.

---

## What independent pre-deployment testing should look for

Supplier evidence is a set of claims to test. Before field devices connect to public-sector networks, buyers can sample them and compare each device with its declarations:

- Do the communication interfaces present on the device match the interface declaration, including any that the documentation does not mention?
- Does the device try outbound connections, or accept inbound management, that the documentation does not explain?
- Can the buyer see, change, and disable every remote-access and management setting, or are some configured beyond the buyer's control?
- Does the installed firmware and software match the declared manifest and version?
- Do the components found during testing match the declared manufacturers and sub-tier suppliers?

When results differ from declarations, the acceptance decision should be recorded as reject, quarantine, or accept with conditions, not left implicit. The [Product Acceptance Package](/resources/worked-examples/product-acceptance-package/) shows a fictional accept-with-conditions record that ties a deployment condition to an expected firmware baseline.

---

## Weak vs stronger supplier answers

These answers are illustrative. They come from a fictional supplier of roadside equipment that has been asked about device origin and interfaces.

Weak answer:

> Our roadside equipment is manufactured to EU standards, and we can supply a certificate of conformity.

Stronger answer:

> For the model and firmware version supplied, we name the manufacturers of the main hardware and firmware and provide declarations for critical sub-tier suppliers. We also provide a complete communication-interface declaration with default states, a description of every vendor remote-management channel and how you control it, and a signed firmware manifest with an SBOM. We agree to independent pre-deployment testing against those declarations.

The stronger answer gives the buyer something to verify. A certificate of conformity may answer a metrology or product-safety question, but it does not show where the firmware came from or which interfaces are active.

[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/) explains how to put these requests into contracts and renewal reviews, and [Supplier Security Questions](/resources/supplier-security-questions/) gives reusable wording.

---

## How this maps to the handbook

Use NBU's warning as a prompt to check whether your acceptance process compares what a connected device is declared to be with what it actually does.

Recommended reading:

- **[Product and Component Trust Failures](/standards-threats/threats/product-component-trust-failures/)** for the failure modes behind origin, configuration, and provenance gaps.
- **[Product Acceptance and Supply Chain Trust](/practices-controls/product-acceptance-supply-chain-trust/)** for the controls and evidence baseline to set before deployment.
- **[Supplier and Procurement Assurance](/practices-controls/supplier-assurance-procurement/)** for sub-tier visibility and contractual evidence clauses.
- **[Component Provenance Evidence Example](/resources/worked-examples/component-provenance-example/)** for a fictional review of a reseller path and firmware module provenance.
- **[NIS2: Supplier Risk Governance and Customer Assurance](/standards-threats/standards-regulations/nis2/)** for how regulated entities can turn supplier and procurement risk into evidence requirements.

NBU's warning cites Slovak national law, not NIS2. The NIS2 link reflects the handbook's interpretation of the wider supplier-governance context.
