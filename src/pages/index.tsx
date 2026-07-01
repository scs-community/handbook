import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          A practical handbook for turning supply chain security standards and real-world threats into controls, evidence, and implementation choices across connected products and platforms.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/practices-controls/10-best-practices/">
            Read the 10 best practices
          </Link>
        </div>
      </div>
    </header>
  );
}

function ChooseYourPath(): ReactNode {
  const roleRoutes = [
    {
      title: 'I buy or assess suppliers',
      description: 'Review supplier assurance, evidence requests, maturity, and worked examples.',
      to: '/start-here/procurement-supplier-assurance/',
    },
    {
      title: 'I own product security',
      description: 'Plan assurance across acceptance, release, update, vulnerability response, and lifecycle monitoring.',
      to: '/start-here/product-security/',
    },
    {
      title: 'I am a supplier or manufacturer',
      description: 'Prepare evidence-backed answers for customers, auditors, buyers, and assessors.',
      to: '/start-here/supplier-manufacturer/',
    },
    {
      title: 'I prepare for audit or customer assurance',
      description: 'Build traceable evidence packages, mappings, exceptions, and retention records.',
      to: '/start-here/audit-compliance-assurance/',
    },
    {
      title: 'I implement technical mechanisms',
      description: 'Start from evidence needs, then compare mechanisms, trust anchors, workflows, and repositories.',
      to: '/start-here/technical-implementation/',
    },
    {
      title: 'I map standards to controls',
      description: 'Translate standards, regulations, policy drivers, and customer requirements into controls and evidence.',
      to: '/start-here/standards-compliance-mapping/',
    },
  ];

  return (
    <section className={styles.choosePath}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Choose your path</Heading>
          <p>Start with the role that best matches your part in the assurance workflow.</p>
        </div>
        <div className={styles.roleGrid}>
          {roleRoutes.map((route) => (
            <Link key={route.title} className={styles.roleCard} to={route.to}>
              <Heading as="h3">{route.title}</Heading>
              <p>{route.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HandbookModelCompact(): ReactNode {
  const steps = [
    {
      title: 'Standards & Threats',
      to: '/standards-threats/',
    },
    {
      title: 'Practices & Controls',
      to: '/practices-controls/',
    },
    {
      title: 'Technology Options',
      to: '/technology-options/',
    },
    {
      title: 'Resources',
      to: '/resources/',
    },
  ];

  return (
    <section className={styles.model}>
      <div className="container">
        <div className="text--center">
          <Heading as="h2">How the handbook works</Heading>
          <div className={styles.modelFlow}>
            {steps.map((step, index) => (
              <span key={step.title} className={styles.modelFlowItem}>
                <Link to={step.to}>{step.title}</Link>
                {index < steps.length - 1 && <span className={styles.modelArrow}>-&gt;</span>}
              </span>
            ))}
          </div>
          <p className={styles.modelSummary}>
            Use the handbook to move from an external driver or real failure mode to controls, evidence expectations, verification paths, and implementation choices.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedResources(): ReactNode {
  const resources = [
    {
      title: 'Evidence Checklist',
      description: 'Review whether evidence is scoped, verifiable, retained, and tied to the decision.',
      to: '/resources/evidence-checklist/',
    },
    {
      title: 'Worked Examples',
      description: 'See realistic examples of weak, better, and stronger evidence packages.',
      to: '/resources/worked-examples/',
    },
    {
      title: 'Standards to Evidence and Technology Mapping Workflow',
      description: 'Map requirements, controls, evidence, technologies, and confidence.',
      to: '/resources/standards-evidence-technology-mapping/',
    },
  ];

  return (
    <section className={styles.featuredResources}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Featured resources</Heading>
          <p>Use these practical tools when you are ready to turn a path into reviewable evidence.</p>
        </div>
        <div className={styles.resourceGrid}>
          {resources.map((resource) => (
            <Link key={resource.title} className={styles.resourceCard} to={resource.to}>
              <Heading as="h3">{resource.title}</Heading>
              <p>{resource.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection(): ReactNode {
  return (
    <section className={styles.community}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">Neutral, standards-aware guidance</Heading>
            <p>
              The handbook uses standards where they help explain requirements, controls, evidence, assurance models, or implementation mechanisms. Standards are mapped into the guidance, but they are not the main organising principle.
            </p>
            <div className={styles.communityLinks}>
              <Link className="button button--outline button--primary" to="/technology-options/">
                Explore technology options
              </Link>
              <Link className="button button--outline button--secondary" to="/resources/curated-references/">
                Curated references
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <Heading as="h2">Stay updated</Heading>
            <p>
              Supply chain security expectations are changing quickly. Read short updates on incidents, policy changes, standards activity, and evidence practices.
            </p>
            <Link className="button button--primary" to="/blog/">
              Latest analysis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Supply Chain Security Handbook"
      description="A practical handbook for turning supply chain security standards and real-world threats into controls, evidence, and implementation choices across connected products and platforms.">
      <HomepageHeader />
      <main>
        <ChooseYourPath />
        <HandbookModelCompact />
        <FeaturedResources />
        <CommunitySection />
      </main>
    </Layout>
  );
}
