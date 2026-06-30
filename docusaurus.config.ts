import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Supply Chain Security Handbook',
  tagline: 'Practical guidance for evidence-backed lifecycle assurance',
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
          ignorePatterns: ['/tags/**'],
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
          sidebarId: 'evidenceSidebar',
          position: 'left',
          label: 'Evidence',
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
          title: 'Standards & Threats',
          items: [
            {
              label: 'Standards & Threats',
              to: '/standards-threats/',
            },
            {
              label: 'Attack & Failure Modes',
              to: '/standards-threats/attack-failure-modes/',
            },
            {
              label: 'Standards & Regulatory Drivers',
              to: '/standards-threats/standards-regulatory-drivers/',
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
              label: 'Decision Guides',
              to: '/practices-controls/decision-guides/',
            },
            {
              label: 'Procurement & Supplier Assurance',
              to: '/practices-controls/procurement-supplier-assurance/',
            },
            {
              label: 'Product Acceptance',
              to: '/practices-controls/product-acceptance/',
            },
            {
              label: 'Audit & Compliance',
              to: '/practices-controls/audit-compliance/',
            },
            {
              label: 'Lifecycle Monitoring',
              to: '/practices-controls/lifecycle-monitoring/',
            },
            {
              label: 'Implementation Planning',
              to: '/practices-controls/implementation-planning/',
            },
          ],
        },
        {
          title: 'Evidence',
          items: [
            {
              label: 'Evidence',
              to: '/evidence/',
            },
            {
              label: 'Identity & Provenance',
              to: '/evidence/identity-provenance/',
            },
            {
              label: 'Integrity & Attestation',
              to: '/evidence/integrity-attestation/',
            },
            {
              label: 'Software & Component Transparency',
              to: '/evidence/software-component-transparency/',
            },
            {
              label: 'Update & Vulnerability',
              to: '/evidence/update-vulnerability/',
            },
            {
              label: 'Lifecycle State & Audit',
              to: '/evidence/lifecycle-state-audit/',
            },
            {
              label: 'Retention & Reuse',
              to: '/evidence/retention-reuse/',
            },
            {
              label: 'Assurance & Evidence Models',
              to: '/evidence/evidence-models/',
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
              label: 'Transparency Artifacts',
              to: '/technology-options/transparency-artifacts/',
            },
            {
              label: 'Attestation & Measurement',
              to: '/technology-options/attestation-measurement/',
            },
            {
              label: 'Trust Anchors',
              to: '/technology-options/trust-anchors/',
            },
            {
              label: 'Protocols & Exchange',
              to: '/technology-options/protocols-exchange/',
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
              label: 'Glossary',
              to: '/resources/glossary/',
            },
            {
              label: 'Supplier Questions',
              to: '/resources/supplier-questions/',
            },
            {
              label: 'Evidence Checklist',
              to: '/resources/evidence-checklist/',
            },
            {
              label: 'Further Reading',
              to: '/resources/further-reading/',
            },
            {
              label: 'Artifact Map',
              to: '/resources/artifact-map/',
            },
            {
              label: 'Standards Mapping Workflow',
              to: '/resources/standards-mapping-workflow/',
            },
            {
              label: 'Templates',
              to: '/resources/templates/',
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
