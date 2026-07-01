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
          <Link className="button button--secondary button--lg" to="/standards-threats/">
            Start with standards and threats
          </Link>
          <Link className="button button--secondary button--lg" to="/practices-controls/10-best-practices/">
            Read the 10 best practices
          </Link>
        </div>
      </div>
    </header>
  );
}

function HandbookModel(): ReactNode {
  const steps = [
    {
      title: 'Standards & Threats',
      description: 'Start with the standard, regulation, procurement expectation, audit question, customer assurance need, threat pattern, or failure mode that brought you here.',
    },
    {
      title: 'Practices & Controls',
      description: 'Translate the standard or threat into control expectations, lifecycle responsibilities, supplier questions, and operating decisions.',
    },
    {
      title: 'Technology Options',
      description: 'Compare mechanisms, formats, protocols, trust anchors, verifier workflows, and tools that can implement controls or generate, protect, exchange, verify, and retain evidence.',
    },
    {
      title: 'Resources',
      description: 'Use checklists, templates, glossaries, and workflows to turn practices into evidence requests, review criteria, and reusable assurance packages.',
    },
  ];

  return (
    <section className={styles.model}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">How the handbook helps</Heading>
          <p>
            Use the handbook to move from standards, compliance pressure, procurement expectations, customer assurance, or real supply chain threats to practical controls, evidence expectations, and implementation choices.
          </p>
        </div>
        <div className={styles.modelSteps}>
          {steps.map((step) => (
            <div key={step.title} className={styles.modelStep}>
              <Heading as="h3">{step.title}</Heading>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommonStartingPoints(): ReactNode {
  const routes = [
    {
      title: 'I need to understand a standard or regulation',
      description: 'Start with standards, regulations, procurement expectations, and assurance obligations.',
      to: '/standards-threats/',
    },
    {
      title: 'I need to understand what could go wrong',
      description: 'Look at supply chain threat patterns, lifecycle failure modes, and the controls used to mitigate them.',
      to: '/standards-threats/threats-failure-modes/',
    },
    {
      title: 'I need practices and controls',
      description: 'Translate standards and threats into control expectations, supplier questions, and lifecycle decisions.',
      to: '/practices-controls/',
    },
    {
      title: 'I need evidence for audit or customer review',
      description: 'Use checklists and templates to assemble scoped, verifiable, and retained evidence packages.',
      to: '/resources/evidence-package-template/',
    },
    {
      title: 'I need implementation options',
      description: 'Compare technologies, trust anchors, protocols, formats, and tooling.',
      to: '/technology-options/',
    },
  ];

  return (
    <section className={styles.startingPoints}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Common starting points</Heading>
          <p>Choose the route that best matches why you arrived.</p>
        </div>
        <div className={styles.startingPointGrid}>
          {routes.map((route) => (
            <Link key={route.title} className={styles.startingPointCard} to={route.to}>
              <Heading as="h3">{route.title}</Heading>
              <p>{route.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StartByRole(): ReactNode {
  const routes = [
    {
      title: 'I buy or assess suppliers',
      description: 'Follow a path through supplier assurance, supplier questions, evidence review, and worked examples.',
      to: '/start-here/procurement/',
    },
    {
      title: 'I own product security',
      description: 'Move from lifecycle practices to product acceptance, release governance, vulnerability response, updates, and evidence.',
      to: '/start-here/product-security/',
    },
    {
      title: 'I am a supplier or manufacturer',
      description: 'Prepare evidence-backed answers for customers without relying on broad claims or unsupported policy statements.',
      to: '/start-here/supplier/',
    },
    {
      title: 'I prepare for audit or customer assurance',
      description: 'Use maturity, checklists, evidence packages, mappings, and retention guidance to make assurance reviewable.',
      to: '/start-here/audit-assurance/',
    },
    {
      title: 'I implement technical mechanisms',
      description: 'Start with evidence and verification needs, then compare mechanisms, trust anchors, workflows, and repositories.',
      to: '/start-here/implementer/',
    },
    {
      title: 'I map standards to controls',
      description: 'Translate standards, regulations, policy drivers, and customer requirements into controls, evidence, and mapping confidence.',
      to: '/start-here/standards-policy/',
    },
  ];

  return (
    <section className={styles.startingPoints}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Start by role</Heading>
          <p>Choose the path that best matches your role in the assurance workflow.</p>
        </div>
        <div className={styles.startingPointGrid}>
          {routes.map((route) => (
            <Link key={route.title} className={styles.startingPointCard} to={route.to}>
              <Heading as="h3">{route.title}</Heading>
              <p>{route.description}</p>
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
              The handbook uses standards where they help explain requirements, controls, evidence, assurance models, or implementation mechanisms. Standards are mapped into the guidance, but they are not the main organizing principle.
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
            <Heading as="h2">Open source and evolving</Heading>
            <p>
              The handbook is developed in the open and will grow with deeper practice guidance, evidence resources, standards mappings, tools, supplier guidance, and lifecycle-specific examples.
            </p>
            <Link className="button button--primary" to="/blog/">
              Handbook updates
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
        <HandbookModel />
        <CommonStartingPoints />
        <StartByRole />
        <CommunitySection />
      </main>
    </Layout>
  );
}
