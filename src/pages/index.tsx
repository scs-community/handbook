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
          Practical supply-chain-security guidance for products and platforms where hardware, firmware, software, suppliers, credentials, updates, and lifecycle services all affect trust.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/requirements/">
            Start with requirements and risks
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
      title: 'Requirements & Risks',
      description: 'Start from the regulation, standard, procurement expectation, customer assurance request, audit need, product-acceptance decision, or risk concern that brought you here.',
    },
    {
      title: 'Practices & Controls',
      description: 'Translate the requirement or risk into controls, lifecycle responsibilities, supplier questions, and operating decisions.',
    },
    {
      title: 'Evidence',
      description: 'Ask what artifacts, records, claims, measurements, attestations, logs, or audit materials show whether controls are operating.',
    },
    {
      title: 'Technology Options',
      description: 'Use mechanisms, formats, protocols, trust anchors, verifier workflows, and tooling where they help implement, produce, protect, exchange, verify, or retain evidence.',
    },
  ];

  return (
    <section className={styles.model}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">How the handbook helps</Heading>
          <p>
            Standards, compliance, procurement, customer assurance, and risk create the need. Controls explain what to do, evidence shows whether controls are operating, and technologies help implement, produce, protect, exchange, verify, or retain evidence.
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

function CommunitySection(): ReactNode {
  return (
    <section className={styles.community}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">Neutral, standards-aware guidance</Heading>
            <p>
              Standards appear by function: some explain requirements and governance expectations, some define evidence and assurance models, and some provide technology or implementation mechanisms. They are options and mappings, not the organizing principle.
            </p>
            <div className={styles.communityLinks}>
              <Link className="button button--outline button--primary" to="/technology-options/">
                Explore mappings
              </Link>
              <Link className="button button--outline button--secondary" to="/resources/further-reading/">
                Further reading
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <Heading as="h2">Open source and evolving</Heading>
            <p>
              The handbook is developed in the open and will grow with deeper evidence pages, standards mappings, tools, and lifecycle-specific guidance.
            </p>
            <Link className="button button--primary" to="/blog/">
              Latest News
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
      description="Practical supply-chain-security guidance for products and platforms where hardware, firmware, software, suppliers, credentials, updates, and lifecycle services all affect trust.">
      <HomepageHeader />
      <main>
        <HandbookModel />
        <CommunitySection />
      </main>
    </Layout>
  );
}
