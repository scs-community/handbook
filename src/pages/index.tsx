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
          <Link className="button button--secondary button--lg" to="/compliance-guide/">
            Start with your obligation
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
      title: 'Understand the obligation',
      description:
        'Start with a regulation, standard, procurement expectation, customer request, audit, certification, product acceptance, or governance obligation.',
      icon: '01',
    },
    {
      title: 'Apply practical practices',
      description:
        'Translate the obligation into supply-chain-security practices, lifecycle controls, responsibilities, and decisions.',
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
          <Heading as="h2">From obligations to evidence-backed assurance</Heading>
          <p>
            Supply-chain-security obligations create the need. They may come from regulation, standards, procurement, customer assurance, audit, certification, product acceptance, or internal governance. This handbook helps translate those obligations into practical practices, supplier questions, evidence expectations, and standards-aware implementation options.
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

function CommonObligations(): ReactNode {
  const obligations = [
    'Regulation and compliance obligations',
    'Customer assurance demands',
    'Procurement and acquisition expectations',
    'Audit, assessment, and certification activity',
    'Product acceptance decisions',
    'Enterprise and mission risk management',
  ];

  return (
    <section className={styles.needs}>
      <div className="container">
        <div className="row">
          <div className="col col--5">
            <Heading as="h2">Common obligations</Heading>
            <p>
              Supply-chain-security obligations usually arrive through one of these routes.
              Start with the route that matches the obligation you are facing, then move
              from obligation to practice, evidence, and verification.
            </p>
          </div>
          <div className="col col--7">
            <div className={styles.needList}>
              {obligations.map((obligation) => (
                <div key={obligation} className={styles.needItem}>
                  {obligation}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ObligationRoutes(): ReactNode {
  const routes = [
    {
      obligation: 'Regulation, standard, or compliance expectation',
      question: 'What does this mean for supply-chain security?',
      route: (
        <>
          <Link to="/guidance/risks-practices/">Risks & Practices</Link>
          {' -> '}
          <Link to="/guidance/10-best-practices/">10 Best Practices</Link>
          {' -> '}
          <Link to="/evidence-assurance/">Evidence</Link>
        </>
      ),
    },
    {
      obligation: 'Customer assurance request',
      question: 'What should we provide?',
      route: (
        <>
          <Link to="/use-cases/">Use Cases</Link>
          {' -> '}
          <Link to="/evidence-assurance/">Evidence</Link>
        </>
      ),
    },
    {
      obligation: 'Procurement or acquisition requirement',
      question: 'What should we ask suppliers for?',
      route: (
        <>
          <Link to="/use-cases/procurement-supplier-assurance/">Procurement & Supplier Assurance</Link>
          {' -> '}
          <Link to="/resources/evidence-checklist/">Evidence Checklist</Link>
        </>
      ),
    },
    {
      obligation: 'Audit, assessment, or certification activity',
      question: 'What artifacts show controls are operating?',
      route: (
        <>
          <Link to="/evidence-assurance/">Evidence</Link>
          {' -> '}
          <Link to="/guidance/lifecycle-map/">Lifecycle Map</Link>
        </>
      ),
    },
    {
      obligation: 'Product acceptance decision',
      question: 'How do we know this product is trustworthy?',
      route: (
        <>
          <Link to="/use-cases/product-acceptance/">Product Acceptance</Link>
          {' -> '}
          <Link to="/evidence-assurance/identity-provenance/">Identity & Provenance</Link>
        </>
      ),
    },
    {
      obligation: 'Internal governance or risk review',
      question: 'Where are we exposed?',
      route: (
        <>
          <Link to="/guidance/risks-practices/">Risks & Practices</Link>
          {' -> '}
          <Link to="/guidance/lifecycle-map/">Lifecycle Map</Link>
        </>
      ),
    },
  ];

  return (
    <section className={styles.needRoutes}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2" id="start-with-your-obligation">
            Start with your obligation
          </Heading>
          <p>
            Arrive with an obligation, customer request, procurement question, audit task,
            product-acceptance decision, or governance concern, then choose the next useful route.
          </p>
        </div>
        <div className={styles.routeTableWrapper}>
          <table className={styles.routeTable}>
            <thead>
              <tr>
                <th>Obligation</th>
                <th>Reader question</th>
                <th>Best starting route</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr key={route.obligation}>
                  <td>{route.obligation}</td>
                  <td>{route.question}</td>
                  <td>{route.route}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RoleBasedCards(): ReactNode {
  const roles = [
    {
      title: 'Compliance owner',
      description: 'I need to understand what a regulation, standard, customer request, procurement requirement, audit, or internal governance obligation means for supply-chain security.',
      cta: 'Start with the Compliance Guide',
      link: '/compliance-guide/',
      icon: 'C',
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
      title: 'Obligation',
      description: 'Identify the regulation, standard, customer request, procurement expectation, audit need, product-acceptance decision, or internal governance concern.',
    },
    {
      title: 'Practice',
      description: 'Translate the obligation into risks, controls, lifecycle responsibilities, supplier questions, and operating decisions.',
    },
    {
      title: 'Evidence',
      description: 'Ask what artifacts show whether the practice is operating, whether the claim can be verified, and whether the evidence remains useful after acceptance.',
    },
    {
      title: 'Mapping',
      description: 'Map evidence needs to relevant standards, frameworks, technologies, and verification mechanisms without making any single option the organizing principle.',
    },
  ];

  return (
    <section className={styles.model}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">The handbook model</Heading>
          <p>
            Obligations create the starting point; practices explain what to do; evidence shows whether work is operating; mappings explain where standards and technologies may help.
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
    {need: 'Understand what is expected', to: '/compliance-guide/'},
    {need: 'Understand risks and practices', to: '/guidance/risks-practices/'},
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
          <p>Use these routes when you arrive with a specific obligation, decision, or assurance task.</p>
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
        <CommonObligations />
        <ObligationRoutes />
        <RoleBasedCards />
        <HandbookModel />
        <IntentRoutes />
        <CommunitySection />
      </main>
    </Layout>
  );
}
