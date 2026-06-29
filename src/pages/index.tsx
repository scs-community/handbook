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
            Start with your requirement
          </Link>
          <Link className="button button--secondary button--lg" to="/guidance/10-best-practices/">
            Read the 10 best practices
          </Link>
        </div>
      </div>
    </header>
  );
}

function ValuePillars(): ReactNode {
  const pillars = [
    {
      title: 'Understand the driver',
      description:
        'Start from compliance, procurement, customer assurance, audit, certification, product acceptance, or risk pressure.',
      icon: '01',
    },
    {
      title: 'Apply practical guidance',
      description:
        'Translate the driver into supply-chain-security practices, lifecycle controls, responsibilities, and decisions.',
      icon: '02',
    },
    {
      title: 'Request and verify evidence',
      description:
        'Move from supplier assertions to artifacts that can be produced, verified, retained, and reused across the lifecycle.',
      icon: '03',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">From requirements to evidence-backed assurance</Heading>
          <p>
            Standards, compliance, procurement, customer assurance, and risk create the need. Guidance explains what to do. Evidence shows whether it is being done. Standards and technologies may help implement or verify it.
          </p>
        </div>
        <div className="row">
          {pillars.map((pillar) => (
            <div key={pillar.title} className={clsx('col col--4')}>
              <div className="text--center padding-horiz--md">
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <Heading as="h3">{pillar.title}</Heading>
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentPressures(): ReactNode {
  const pressures = [
    'Regulation and compliance obligations',
    'Customer assurance demands',
    'Procurement and acquisition expectations',
    'Audit, assessment, and certification activity',
    'Product acceptance decisions',
    'Enterprise and mission risk management',
  ];

  return (
    <section className={styles.pressures}>
      <div className="container">
        <div className="row">
          <div className="col col--5">
            <Heading as="h2">Current pressures</Heading>
            <p>
              Visitors often arrive with a specific external pressure or internal decision.
              The handbook starts there, then translates that pressure into practical guidance,
              evidence expectations, and implementation options.
            </p>
          </div>
          <div className="col col--7">
            <div className={styles.pressureList}>
              {pressures.map((pressure) => (
                <div key={pressure} className={styles.pressureItem}>
                  {pressure}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleBasedCards(): ReactNode {
  const roles = [
    {
      title: 'Requirement owner',
      description: 'I have a compliance, customer, procurement, audit, certification, or risk requirement. What does it mean?',
      cta: 'Start with Requirements',
      link: '/requirements/',
      icon: 'R',
    },
    {
      title: 'Assurance requester',
      description: 'I need to ask suppliers or product teams for useful evidence. What should I ask for?',
      cta: 'View Use Cases',
      link: '/use-cases/',
      icon: 'A',
    },
    {
      title: 'Assurance implementer',
      description: 'I need to produce, protect, verify, retain, or explain evidence across the lifecycle.',
      cta: 'Explore Evidence',
      link: '/evidence-assurance/',
      icon: 'I',
    },
  ];

  return (
    <section className={styles.roleCards}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Choose your starting point</Heading>
          <p className="margin-bottom--lg">Route by the decision you need to make, not by sector or standards terminology.</p>
        </div>
        <div className="row">
          {roles.map((role) => (
            <div key={role.title} className={clsx('col col--4')}>
              <div className={clsx('card', styles.roleCard)}>
                <div className="card__header">
                  <div className={styles.roleIcon}>{role.icon}</div>
                  <Heading as="h3">{role.title}</Heading>
                </div>
                <div className="card__body">
                  <p>{role.description}</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to={role.link}>
                    {role.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HandbookModel(): ReactNode {
  const steps = [
    {
      title: 'Requirements',
      description: 'Identify the driver, obligation, decision, or risk.',
    },
    {
      title: 'Guidance',
      description: 'Translate the driver into practices and lifecycle controls.',
    },
    {
      title: 'Evidence',
      description: 'Ask what artifacts show whether practices are operating.',
    },
    {
      title: 'Standards & Technologies',
      description: 'Map evidence needs to neutral implementation and verification options.',
    },
  ];

  return (
    <section className={styles.model}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">The handbook model</Heading>
          <p>
            Pressures create the need; guidance explains what to do; evidence shows whether it is being done; standards and technologies may help implement or verify it.
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

function IntentRoutes(): ReactNode {
  const routes = [
    {need: 'Understand what is expected', to: '/requirements/'},
    {need: 'Understand risks and controls', to: '/guidance/risks-controls/'},
    {need: 'Read a practical synthesis', to: '/guidance/10-best-practices/'},
    {need: 'Map assurance across the lifecycle', to: '/guidance/lifecycle-map/'},
    {need: 'Ask better supplier questions', to: '/use-cases/procurement-supplier-assurance/'},
    {need: 'Accept a product, device, platform, or component', to: '/use-cases/product-acceptance/'},
    {need: 'Identify useful evidence', to: '/evidence-assurance/'},
    {need: 'Map practices to standards and technologies', to: '/standards-technologies/'},
  ];

  return (
    <section className={styles.intentRoutes}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Find the next useful page</Heading>
          <p>Use these routes when you arrive with a specific pressure, decision, or assurance task.</p>
        </div>
        <div className="row">
          {routes.map((route) => (
            <div key={route.need} className="col col--3 margin-bottom--md">
              <Link className={styles.intentLink} to={route.to}>{route.need}</Link>
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
              This handbook explains where public guidance, standards, frameworks, and technologies may fit without treating any single standards body or technology family as the organizing principle.
            </p>
            <p>
              Technology mappings are implementation options, not mandates. Interpretive mappings are guidance, not formal compliance advice or endorsement.
            </p>
            <div className={styles.communityLinks}>
              <Link className="button button--outline button--primary" to="/standards-technologies/">
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
              The handbook is developed in the open and will grow with deeper evidence pages, standards mappings, reusable resources, and lifecycle-specific guidance.
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
        <ValuePillars />
        <CurrentPressures />
        <RoleBasedCards />
        <HandbookModel />
        <IntentRoutes />
        <CommunitySection />
      </main>
    </Layout>
  );
}
