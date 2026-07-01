import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  startHereSidebar: [
    'start-here/index',
    'start-here/procurement-supplier-assurance',
    'start-here/product-security',
    'start-here/supplier-manufacturer',
    'start-here/audit-compliance-assurance',
    'start-here/technical-implementation',
    'start-here/standards-compliance-mapping',
  ],
  standardsThreatsSidebar: [
    'standards-threats/index',
    {
      type: 'category',
      label: 'Standards and Regulations',
      link: {type: 'doc', id: 'standards-threats/standards-regulations/index'},
      items: [
        'standards-threats/standards-regulations/eu-cyber-resilience-act',
        'standards-threats/standards-regulations/nis2',
        'standards-threats/standards-regulations/nist-sp-800-161',
        'standards-threats/standards-regulations/iec-62443',
        'standards-threats/standards-regulations/nist-ssdf',
      ],
    },
    {
      type: 'category',
      label: 'Threats and Failure Modes',
      link: {type: 'doc', id: 'standards-threats/threats/index'},
      items: [
        'standards-threats/threats/product-component-trust-failures',
        'standards-threats/threats/software-update-chain-compromise',
        'standards-threats/threats/supplier-assurance-failures',
      ],
    },
  ],
  practicesControlsSidebar: [
    'practices-controls/index',
    'practices-controls/10-best-practices',
    'practices-controls/supply-chain-security-lifecycle-map',
    'practices-controls/supplier-assurance-procurement',
    'practices-controls/product-acceptance-supply-chain-trust',
    'practices-controls/secure-development-release-governance',
    'practices-controls/software-components-vulnerability-management',
    'practices-controls/secure-updates-lifecycle-monitoring',
    'practices-controls/audit-compliance-readiness',
    'practices-controls/supply-chain-assurance-implementation',
  ],
  technologyOptionsSidebar: [
    'technology-options/index',
    'technology-options/choosing-technology-options',
    'technology-options/trust-anchors-device-identity',
    'technology-options/attestation-measured-state',
    'technology-options/sbom-vex-component-visibility',
    'technology-options/signing-keys-credentials',
    'technology-options/secure-update-recovery-mechanisms',
    'technology-options/evidence-exchange-verifier-workflows',
    'technology-options/evidence-repositories-logs-retention',
  ],
  resourcesSidebar: [
    'resources/index',
    'resources/supplier-security-questions',
    'resources/evidence-checklist',
    'resources/evidence-maturity-model',
    'resources/evidence-package-template',
    {
      type: 'category',
      label: 'Worked Examples',
      link: {type: 'doc', id: 'resources/worked-examples/index'},
      items: [
        'resources/worked-examples/supplier-onboarding-evidence-package',
        'resources/worked-examples/product-acceptance-package',
        'resources/worked-examples/secure-update-approval',
        'resources/worked-examples/vulnerability-response-evidence',
        'resources/worked-examples/component-provenance-example',
        'resources/worked-examples/weak-vs-strong-supplier-answers',
      ],
    },
    'resources/standards-evidence-technology-mapping',
    'resources/glossary',
    'resources/curated-references',
  ],
};

export default sidebars;
