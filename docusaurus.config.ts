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
          sidebarId: 'requirementsSidebar',
          position: 'left',
          label: 'Requirements',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidanceSidebar',
          position: 'left',
          label: 'Guidance',
        },
        {
          type: 'docSidebar',
          sidebarId: 'useCasesSidebar',
          position: 'left',
          label: 'Use Cases',
        },
        {
          type: 'docSidebar',
          sidebarId: 'evidenceSidebar',
          position: 'left',
          label: 'Evidence & Assurance',
        },
        {
          type: 'docSidebar',
          sidebarId: 'standardsSidebar',
          position: 'left',
          label: 'Standards & Technologies',
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
              label: 'Requirements',
              to: '/requirements/',
            },
            {
              label: 'Risks & Controls',
              to: '/guidance/risks-controls/',
            },
            {
              label: '10 Best Practices',
              to: '/guidance/10-best-practices/',
            },
          ],
        },
        {
          title: 'Use Cases',
          items: [
            {
              label: 'Procurement & Supplier Assurance',
              to: '/use-cases/procurement-supplier-assurance/',
            },
            {
              label: 'Product Acceptance',
              to: '/use-cases/product-acceptance/',
            },
            {
              label: 'Audit & Compliance',
              to: '/use-cases/audit-compliance/',
            },
            {
              label: 'Lifecycle Monitoring',
              to: '/use-cases/lifecycle-monitoring/',
            },
          ],
        },
        {
          title: 'Evidence',
          items: [
            {
              label: 'Evidence & Assurance',
              to: '/evidence-assurance/',
            },
            {
              label: 'Identity & Provenance',
              to: '/evidence-assurance/identity-provenance/',
            },
            {
              label: 'Integrity & Attestation',
              to: '/evidence-assurance/integrity-attestation/',
            },
            {
              label: 'Update & Vulnerability',
              to: '/evidence-assurance/update-vulnerability/',
            },
          ],
        },
        {
          title: 'Standards',
          items: [
            {
              label: 'Standards & Technologies',
              to: '/standards-technologies/',
            },
            {
              label: 'Evidence Models',
              to: '/standards-technologies/evidence-models/',
            },
            {
              label: 'Trust Anchors',
              to: '/standards-technologies/trust-anchors/',
            },
            {
              label: 'Protocols & Exchange',
              to: '/standards-technologies/protocols-exchange/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Supplier Questions',
              to: '/resources/supplier-questions/',
            },
            {
              label: 'Evidence Checklist',
              to: '/resources/evidence-checklist/',
            },
            {
              label: 'Artifact Map',
              to: '/resources/artifact-map/',
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
