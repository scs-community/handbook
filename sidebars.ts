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
  standardsThreatsSidebar: [
    'standards-threats/index',
    {
      type: 'category',
      label: 'Standards and Regulations',
      link: {type: 'doc', id: 'standards-threats/standards-regulatory-drivers/index'},
      items: [
        'standards-threats/standards-regulatory-drivers/eu-cyber-resilience-act',
        'standards-threats/standards-regulatory-drivers/nis2',
      ],
    },
    {
      type: 'category',
      label: 'Threats and Failure Modes',
      link: {type: 'doc', id: 'standards-threats/threats-failure-modes/index'},
      items: [
        'standards-threats/threats-failure-modes/product-component-trust-failures',
        'standards-threats/threats-failure-modes/software-update-chain-compromise',
        'standards-threats/threats-failure-modes/supplier-assurance-failures',
      ],
    },
  ],
  practicesControlsSidebar: [
    'practices-controls/index',
    'practices-controls/best-practices',
    'practices-controls/lifecycle-map',
    'practices-controls/supplier-procurement-assurance',
    'practices-controls/product-acceptance',
    'practices-controls/secure-development-release-governance',
    'practices-controls/software-component-vulnerability-management',
    'practices-controls/secure-update-lifecycle-monitoring',
    'practices-controls/audit-compliance-readiness',
    'practices-controls/assurance-implementation-planning',
  ],
  technologyOptionsSidebar: [
    'technology-options/index',
    'technology-options/choosing-technology-options',
    'technology-options/trust-anchors-device-identity',
    'technology-options/attestation-measured-state',
    'technology-options/transparency-artefacts-component-visibility',
    'technology-options/signing-keys-credential-mechanisms',
    'technology-options/update-recovery-mechanisms',
    'technology-options/evidence-exchange-verifier-workflows',
    'technology-options/evidence-repositories-logs-retention',
  ],
  resourcesSidebar: [
    'resources/index',
    'resources/glossary',
    'resources/supplier-questions',
    'resources/evidence-checklist',
    'resources/evidence-maturity-model',
    'resources/evidence-glossary',
    'resources/evidence-package-template',
    'resources/further-reading',
    'resources/artifact-map',
    'resources/standards-mapping-workflow',
    'resources/templates',
  ],
};

export default sidebars;
