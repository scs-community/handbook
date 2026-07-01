import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Supply Chain Security Handbook',
  tagline: 'Practical supply chain security guidance for evidence-backed lifecycle assurance',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://supplychainsecurityhandbook.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scs-community', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/blog/tags/**', '/blog/archive/**', '/blog/authors/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Source+Code+Pro:wght@500&display=swap',
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Supply Chain Security',
      logo: {
        alt: 'Supply Chain Security Handbook Logo',
        src: 'img/logo.svg',
      },
      style: 'dark',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'standardsThreatsSidebar',
          position: 'left',
          label: 'Standards & Threats',
        },
        {
          type: 'docSidebar',
          sidebarId: 'practicesControlsSidebar',
          position: 'left',
          label: 'Practices & Controls',
        },
        {
          type: 'docSidebar',
          sidebarId: 'technologyOptionsSidebar',
          position: 'left',
          label: 'Technology Options',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resources',
        },
        {
          href: 'https://github.com/scs-community/handbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start Here',
          items: [
            {
              label: 'Start Here',
              to: '/start-here/',
            },
            {
              label: 'Procurement and Supplier Assurance',
              to: '/start-here/procurement-supplier-assurance/',
            },
            {
              label: 'Product Security',
              to: '/start-here/product-security/',
            },
            {
              label: 'Supplier or Manufacturer',
              to: '/start-here/supplier-manufacturer/',
            },
            {
              label: 'Audit, Compliance, and Customer Assurance',
              to: '/start-here/audit-compliance-assurance/',
            },
            {
              label: 'Technical Implementer',
              to: '/start-here/technical-implementation/',
            },
            {
              label: 'Standards, Policy, and Compliance Mapping',
              to: '/start-here/standards-compliance-mapping/',
            },
          ],
        },
        {
          title: 'Standards & Threats',
          items: [
            {
              label: 'Standards & Threats',
              to: '/standards-threats/',
            },
            {
              label: 'Standards and Regulations',
              to: '/standards-threats/standards-regulations/',
            },
            {
              label: 'EU Cyber Resilience Act',
              to: '/standards-threats/standards-regulations/eu-cyber-resilience-act/',
            },
            {
              label: 'NIS2',
              to: '/standards-threats/standards-regulations/nis2/',
            },
            {
              label: 'NIST SP 800-161',
              to: '/standards-threats/standards-regulations/nist-sp-800-161/',
            },
            {
              label: 'IEC 62443',
              to: '/standards-threats/standards-regulations/iec-62443/',
            },
            {
              label: 'NIST SSDF',
              to: '/standards-threats/standards-regulations/nist-ssdf/',
            },
            {
              label: 'Threats and Failure Modes',
              to: '/standards-threats/threats/',
            },
            {
              label: 'Product and Component Trust Failures',
              to: '/standards-threats/threats/product-component-trust-failures/',
            },
            {
              label: 'Software and Update-Chain Compromise',
              to: '/standards-threats/threats/software-update-chain-compromise/',
            },
            {
              label: 'Supplier Assurance Failures',
              to: '/standards-threats/threats/supplier-assurance-failures/',
            },
          ],
        },
        {
          title: 'Practices & Controls',
          items: [
            {
              label: 'Practices & Controls',
              to: '/practices-controls/',
            },
            {
              label: '10 Best Practices',
              to: '/practices-controls/10-best-practices/',
            },
            {
              label: 'Lifecycle Map',
              to: '/practices-controls/supply-chain-security-lifecycle-map/',
            },
            {
              label: 'Supplier and Procurement Assurance',
              to: '/practices-controls/supplier-assurance-procurement/',
            },
            {
              label: 'Product Acceptance',
              to: '/practices-controls/product-acceptance-supply-chain-trust/',
            },
            {
              label: 'Secure Development and Release Governance',
              to: '/practices-controls/secure-development-release-governance/',
            },
            {
              label: 'Software Component and Vulnerability Management',
              to: '/practices-controls/software-components-vulnerability-management/',
            },
            {
              label: 'Secure Updates and Lifecycle Monitoring',
              to: '/practices-controls/secure-updates-lifecycle-monitoring/',
            },
            {
              label: 'Audit and Compliance Readiness',
              to: '/practices-controls/audit-compliance-readiness/',
            },
            {
              label: 'Assurance Implementation Planning',
              to: '/practices-controls/supply-chain-assurance-implementation/',
            },
          ],
        },
        {
          title: 'Technology Options',
          items: [
            {
              label: 'Technology Options',
              to: '/technology-options/',
            },
            {
              label: 'Choosing Technology Options',
              to: '/technology-options/choosing-technology-options/',
            },
            {
              label: 'Trust Anchors and Device Identity',
              to: '/technology-options/trust-anchors-device-identity/',
            },
            {
              label: 'Attestation and Measured State',
              to: '/technology-options/attestation-measured-state/',
            },
            {
              label: 'SBOM, VEX, and Component Visibility',
              to: '/technology-options/sbom-vex-component-visibility/',
            },
            {
              label: 'Signing, Keys, and Credentials',
              to: '/technology-options/signing-keys-credentials/',
            },
            {
              label: 'Secure Update and Recovery Mechanisms',
              to: '/technology-options/secure-update-recovery-mechanisms/',
            },
            {
              label: 'Evidence Exchange and Verifier Workflows',
              to: '/technology-options/evidence-exchange-verifier-workflows/',
            },
            {
              label: 'Evidence Repositories, Logs, and Retention',
              to: '/technology-options/evidence-repositories-logs-retention/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Resources',
              to: '/resources/',
            },
            {
              label: 'Supplier Security Questions',
              to: '/resources/supplier-security-questions/',
            },
            {
              label: 'Evidence Checklist',
              to: '/resources/evidence-checklist/',
            },
            {
              label: 'Evidence Maturity Model',
              to: '/resources/evidence-maturity-model/',
            },
            {
              label: 'Evidence Package Template',
              to: '/resources/evidence-package-template/',
            },
            {
              label: 'Worked Examples',
              to: '/resources/worked-examples/',
            },
            {
              label: 'Standards to Evidence and Technology Mapping Workflow',
              to: '/resources/standards-evidence-technology-mapping/',
            },
            {
              label: 'Glossary',
              to: '/resources/glossary/',
            },
            {
              label: 'Curated References',
              to: '/resources/curated-references/',
            },
            {
              label: 'News and Analysis',
              to: '/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/scs-community/handbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Supply Chain Security Handbook contributors. Licensed under CC BY-SA 4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
