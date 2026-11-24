---
title: "UEFI Shell Secure Boot Bypass: Inherited Firmware Risk and the Evidence Gap Behind Unknown"
authors: [scs_community]
tags: [firmware, vulnerability-response, supplier-assurance, component-visibility, procurement]
description: "CERT/CC VU#718077 shows how a UEFI Shell in SPI flash can bypass Secure Boot, and why firmware supplier, version, and vendor status need evidence."
---

On 8 September 2026, the CERT Coordination Center (CERT/CC) published Vulnerability Note VU#718077, "UEFI Shell module embedded in SPI Flash can be used to bypass Secure Boot". The note says that when the UEFI Shell is included in SPI flash, an attacker able to modify UEFI boot configuration may create multiple boot option entries and bypass controls intended to stop the Shell launching while Secure Boot is enabled. The Shell's memory commands and startup scripting could then be used to overwrite Secure Boot-related memory values and run unauthorized code before the operating system loads. CERT/CC credits Stas Lyakhov of Eclypsium with the report.

The note lists three CVE identifiers: CVE-2026-20293, CVE-2026-33197 and CVE-2026-6485. The same day, AMI published advisory AMI-SA-2026001 for CVE-2026-33197, rating it CVSS 4.0 8.7 (`CVSS:4.0/AV:L/AC:L/AT:P/PR:H/UI:N/VC:H/VI:H/VA:H/SC:H/SI:H/SA:H`), CWE-184, with fix version `AptioV_5.044`.

{/* truncate */}

The firmware in a server, workstation or appliance is rarely written by the company whose name is on the box. CERT/CC notes that many OEM and independent BIOS vendor (IBV) firmware images include the UEFI Shell for service and support purposes. A choice made by one layer, such as keeping a diagnostic shell in flash, passes down to every product built on it.

The vendor table shows how unevenly that inherited risk was understood at publication. CERT/CC notified most of the 22 listed vendors on 8 April 2026. Five months later, 16 had not provided a statement and were listed as Unknown.

The useful question is not "is my vendor on the affected list?" It is whether each layer in your firmware supply chain can say which firmware supplier and version a product carries, whether it is affected under the relevant identifier, and when a fix will reach the installed base.

:::info[Primary source]

**[VU#718077: UEFI Shell module embedded in SPI Flash can be used to bypass Secure Boot](https://kb.cert.org/vuls/id/718077)** — CERT Coordination Center, 8 September 2026

:::

---

:::info[What to do next]

For your highest-value platforms, record the firmware supplier (IBV), the OEM firmware version, and whether a UEFI Shell is present in flash. Ask each OEM listed as Unknown in VU#718077 for a dated, product-scoped status statement, and treat "Unknown" as an open exception, not as "not affected".

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Procurement and supplier-assurance teams | To ask which firmware supplier and version a product carries, and how quickly the OEM can state its status. |
| Product-security and firmware teams | To check whether diagnostic tools such as the UEFI Shell remain in production firmware. |
| Infrastructure and endpoint owners | To plan firmware updates, which CERT/CC notes are often managed separately from operating system patching. |
| Vulnerability-response leads | To track status per product and per CVE, and to keep Unknown states visible until they are resolved. |

---

## How firmware risk is inherited through layers

A Secure Boot bypass in platform firmware passes through several hands before it reaches a buyer:

```text
open-source reference code -> independent BIOS vendor -> motherboard or OEM firmware -> product -> buyer
```

VU#718077 shows each of these layers. CERT/CC describes the UEFI Shell as part of the open-source TianoCore EDK II reference implementation. AMI states that it is affected. GIGABYTE's statement, dated 8 July 2026, confirms a vulnerability in the AMI Aptio UEFI BDS module: a logic error in the Shell boot-option removal process. GIGABYTE says it integrated AMI's patch into its BIOS build pipeline and verified that the updated module removes all matching entries, with a BIOS update scheduled for public release before 14 July 2026.

Insyde's statement says the issue is based on a vulnerability in the upstream TianoCore codebase, and that most devices shipping with Insyde BIOS are not affected because they do not include the Shell in code areas approved to run unsigned during Secure Boot. A subset of customers who chose to include it may be.

None of these statements is about the buyer's product. The answer depends on which IBV codebase and version the OEM used, and whether the OEM shipped the Shell. That is component-visibility evidence, and it is the kind of firmware record that [Software Component and Vulnerability Management](/practices-controls/software-components-vulnerability-management/) asks teams to bind to product versions.

---

## What the vendor table does and does not tell you

As published on 8 September 2026, the table showed this overall vendor status:

| Status | Vendors |
|---|---|
| Affected | AMI, Cisco, GIGABYTE, Insyde Software |
| Not Affected | Intel, Phoenix Technologies |
| Unknown | 16 vendors, including major PC, server and cloud vendors, none of which had provided a statement |

The overall status hides an important detail. CERT/CC also records status for each CVE, and the results differ:

- AMI and GIGABYTE are Affected by CVE-2026-33197.
- Cisco is Affected by CVE-2026-20293, which it describes as a variation of the issue affecting UCS servers and UCS-based appliances, and Not Affected by CVE-2026-33197 or CVE-2026-6485.
- Insyde is Affected by CVE-2026-6485, its own identifier, and Not Affected by CVE-2026-33197.
- Intel and Phoenix are Not Affected by CVE-2026-33197.

So a vendor can be Affected overall and Not Affected for the identifier you are tracking. An answer that names only one CVE, or only the overall status, may not answer your question.

The Unknown rows are the bigger gap. Unknown is not a finding of safety; it means the coordinator had no statement. The handbook treats it as a state to track, distinct from not affected, affected, fixed and mitigated. The [Vulnerability Response Evidence](/resources/worked-examples/vulnerability-response-evidence/) worked example shows how to keep these states separate.

---

## Secure Boot depends on what is in the flash

Secure Boot is often discussed in terms of keys, certificates and signed boot components. VU#718077 shows that those controls rely on assumptions about the rest of the firmware image. If a powerful diagnostic tool sits in SPI flash and the control that hides it can be bypassed, the certificate chain is intact but the protection can still fail.

The handbook's mapping of draft [ETSI EN 304 623: Boot Managers](/standards-threats/standards-regulations/eu-cyber-resilience-act/etsi-en-304-623-boot-managers/) lists production debug and diagnostic interfaces as an evidence area, and asks which BIOS, OEM and open-source components sit inside the boot-manager trust boundary.

Measured boot and attestation may help show whether firmware state matches a reference value for an approved version, but only if the reference values reflect a build without an exposed shell and unexpected results trigger review. For the certificate side of the same trust chain, see the related post on [Secure Boot certificate expiry](/blog/2026/06/24/secure-boot-certificate-expiry).

[Attestation and Measured State](/technology-options/attestation-measured-state/) explains what measured-state evidence can and cannot support.

---

## Questions buyers should ask firmware suppliers

Ask OEMs and platform suppliers:

- Which independent BIOS vendor codebase and version does this product's firmware use?
- Does the production firmware image include the UEFI Shell, or any other diagnostic tool, in SPI flash?
- What is the product's status for each CVE in VU#718077, and when was it determined?
- If affected, which fixed firmware version applies, and has the IBV fix been integrated into it?
- How will you deliver the firmware update, and how can we confirm installation?
- How long did it take you to state your status after the IBV advisory?

Weak answer:

> Our products use Secure Boot and are not vulnerable to this issue.

Stronger answer:

> Product line X uses IBV firmware version Y. The production image does / does not include the UEFI Shell. Our status for each listed CVE is recorded with a date and an owner. Affected models are fixed in firmware version Z, which integrates the IBV fix. Update packages are signed, and we can provide installation records or a method to verify the installed version.

[Supplier Security Questions](/resources/supplier-security-questions/) has reusable wording for asking about firmware versions, integrity evidence and vulnerability status.

---

## How this maps to the handbook

Use this note as a worked example of inherited firmware risk: the vulnerability sits in one layer, the evidence must come from another, and the buyer's decision depends on both.

Recommended reading:

- **[Software Component and Vulnerability Management](/practices-controls/software-components-vulnerability-management/)** for version-bound firmware records, supplier advisory review and status communication.
- **[Vulnerability Response Evidence](/resources/worked-examples/vulnerability-response-evidence/)** for separating affected, fixed, not affected and unknown states.
- **[ETSI EN 304 623: Boot Managers](/standards-threats/standards-regulations/eu-cyber-resilience-act/etsi-en-304-623-boot-managers/)** for boot trust-boundary, debug-interface and vulnerability-handling evidence.
- **[Product and Component Trust Failures](/standards-threats/threats/product-component-trust-failures/)** for cases where delivered firmware is not what the buyer expected.
- **[Trust Anchors and Device Identity](/technology-options/trust-anchors-device-identity/)** for why certificates and trust anchors do not prove a product is current or unmodified by themselves.
