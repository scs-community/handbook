---
title: "Secure Boot Certificate Expiry: A Trust Anchor Rotation Is a Supply-Chain Event"
authors: [scs_community]
tags: [firmware, release-integrity, supplier-assurance, procurement, evidence]
description: "Microsoft's 2011 Secure Boot certificates begin expiring on 24 June 2026, showing why buyers need evidence of how device trust anchors will be rotated."
---

On 24 June 2026, the Microsoft Corporation KEK CA 2011 certificate expires. It is the first of three Microsoft Secure Boot certificate authorities from 2011 to reach its expiration date this year. According to Microsoft, the Microsoft UEFI CA 2011, which signs third-party boot loaders and option ROMs, expires on 27 June 2026. The Microsoft Windows Production PCA 2011 expires on 19 October 2026.

Microsoft is replacing them with 2023 certificate authorities and says that "Both UEFI Secure Boot DB and KEK need to be updated with the corresponding new 2023 certificate versions." Microsoft also says some devices may need an OEM firmware update to apply the new certificates correctly.

{/* truncate */}

For this handbook, the event is not a Windows patching story. It shows that a trust anchor has a lifecycle. Microsoft describes the 2011 certificates as "reaching the end of their planned lifecycle." Replacing them depends on the operating-system vendor, the hardware manufacturer, and the fleet operator, and it has to happen on devices already in the field. The assurance gap, where one exists, is that the rotation path, the supplier responsible for each step, and the evidence of device state were never agreed when the device was accepted.

The useful question is not "Does this device support Secure Boot?" It is "Who will rotate this device's trust anchors before they expire, and what evidence will show that it happened?"

:::info[Primary source]

**[Windows Secure Boot certificate expiration and CA updates](https://support.microsoft.com/help/5062710)** — Microsoft, 26 June 2025, with certificate table updated 18 May 2026

**[When Secure Boot certificates expire on Windows devices](https://support.microsoft.com/en-US/servicing/os/secure-boot/2026/02/when-secure-boot-certificates-expire-on-windows-devices)** — Microsoft, 10 February 2026

:::

---

:::info[What to do next]

Choose one device class in your fleet that uses UEFI Secure Boot. For that class, record which certificates are in its KEK and DB, which supplier ships firmware updates for it, whether that firmware support period is still active, and how a device would be recovered if its Secure Boot settings were reset.

:::

---

## Who should read this

| Role | Why it matters |
|---|---|
| Procurement and supplier-assurance teams | To ask suppliers how firmware trust anchors will be rotated during the product's support period. |
| Product-acceptance reviewers | To record trust-anchor state and the rotation path as part of the acceptance baseline. |
| Fleet and endpoint operations teams | To see which devices need firmware support and where recovery paths depend on the supplier. |
| Device manufacturers and firmware suppliers | To prepare evidence-backed answers about key rotation, firmware defaults, and support periods. |

---

## Why trust-anchor expiry depends on the supply chain

Microsoft's support page describes a hierarchy of keys. It "starts with the Platform Key (PK), typically owned by the hardware manufacturer," and "Any entity with a KEK can update the DB and DBX." The KEK CA 2011 is listed as signing updates to DB and DBX. Its replacement is the Microsoft Corporation KEK 2K CA 2023.

So several parties are involved in one rotation. The operating-system vendor issues the new certificates. The hardware manufacturer controls the platform and its firmware defaults. The fleet operator has to confirm that each device actually reached the new state. Microsoft says some OEM firmware updates "may only be available for devices that are still within their support period." Its FAQ adds that "there will be certain cases where the updates do not apply due to known or unknown issues in the device firmware."

Under Microsoft's description, missing the rotation does not stop a device from working. Devices without the 2023 certificates "will continue to start and operate normally" but "will no longer be able to receive new security protections for the early boot process." Microsoft says that includes "updates to Windows Boot Manager, Secure Boot databases and revocation lists." Microsoft's Windows blog calls this "a degraded security state." For the Linux shim path, the Debian wiki notes that "The specification for UEFI Secure Boot expects that valid dates on certificates should not be enforced for signatures here."

That makes the risk easy to miss. A device can look healthy while it can no longer receive new early-boot protections or revocations.

[Trust Anchors and Device Identity](/technology-options/trust-anchors-device-identity/) explains why a trust anchor needs lifecycle records around it before it can support assurance.

---

## Recovery paths and firmware defaults are part of the evidence

Microsoft's FAQ separates two places where certificates live. Firmware updates change the default Secure Boot variables, while Windows keeps the active variables current. The difference matters when Secure Boot settings are reset to their defaults.

The FAQ includes a device that stopped booting after its firmware was reset to default settings. Microsoft's fix is to "reapply the 2023 certificate to the firmware's DB using the recovery application." Microsoft also warns that "Secure Boot should not be disabled to work around certificate expiration."

For assurance, this means a device's trust state can change during repair, reset, or service, not only during a planned update. A fleet record that only says "certificates updated" may not survive a reset to firmware defaults, depending on whether the supplier's firmware defaults also carry the new certificates.

| Evidence | Why it matters |
|---|---|
| Current KEK and DB contents for each device class | Shows whether the active trust store already includes the replacement certificates. |
| Firmware default variables after OEM update | Shows whether a reset to defaults would keep or remove the new certificates. |
| OEM firmware support period and update availability | Shows whether the rotation depends on a supplier that may no longer ship updates. |
| Recovery procedure and tested recovery media | Shows how a device returns to a known Secure Boot state after reset or repair. |
| Exceptions for unsupported or Secure Boot-disabled devices | Records risk acceptance instead of silently continuing operation. |

[Secure Update and Recovery Mechanisms](/technology-options/secure-update-recovery-mechanisms/) covers what recovery evidence should show about the restored state.

---

## Questions buyers should ask suppliers

The expiry gives product acceptance and supplier assurance a concrete set of questions for any device with a firmware-held trust anchor:

- Which trust anchors are provisioned in the device firmware, and when do they expire?
- Who owns the platform key, and who is responsible for authorizing changes to the key-exchange and signature databases?
- Who ships the firmware update that adds replacement certificates, and for how long is that support committed?
- Do updated firmware defaults include the replacement certificates, so that a reset does not undo the rotation?
- What evidence can show a device's current KEK and DB state, and in what format?
- What is the supported recovery path if a device stops booting after a reset, repair, or failed update?

Weak answer:

> The device supports Secure Boot and we provide firmware updates.

Stronger answer:

> We list the trust anchors provisioned in each firmware release, their expiry dates, and the replacement plan. Firmware support for this model runs to a stated date. Updated firmware sets the replacement certificates in both the active and default variables. We document how you can read KEK and DB state on a device, and we provide signed recovery media and a tested procedure for restoring the expected Secure Boot state after a reset.

The [ETSI EN 304 623: Boot Managers](/standards-threats/standards-regulations/eu-cyber-resilience-act/etsi-en-304-623-boot-managers/) page lists related boot-manager evidence, including trust anchor location, key update rules, and revocation or replacement handling.

---

## What this event does not prove

A device that has the 2023 certificates is not thereby secure; one trust store has been updated. Because Microsoft says devices without the update keep starting normally, successful boot is not evidence that the rotation happened either. Certificate state also does not show by itself that revocation lists are current, that the boot manager is the expected version, or that the device will keep the new state after service.

[Signing, Keys, and Credentials](/technology-options/signing-keys-credentials/) explains why certificate evidence needs issuer, validity, revocation state, and lifecycle-state management around it.

---

## How this maps to the handbook

Use the Secure Boot certificate expiry as a worked case of trust-anchor rotation as a planned, supplier-dependent lifecycle event.

Recommended reading:

- **[Product Acceptance and Supply Chain Trust](/practices-controls/product-acceptance-supply-chain-trust/)** for recording trust-anchor state and rotation commitments in the acceptance baseline.
- **[Secure Updates and Lifecycle Monitoring](/practices-controls/secure-updates-lifecycle-monitoring/)** for re-verifying device trust state after update, repair, reset, or transfer.
- **[Trust Anchors and Device Identity](/technology-options/trust-anchors-device-identity/)** for what trust-anchor evidence can and cannot support.
- **[ETSI EN 304 623: Boot Managers](/standards-threats/standards-regulations/eu-cyber-resilience-act/etsi-en-304-623-boot-managers/)** for boot-manager evidence on trust anchors, key provisioning, and update paths.
