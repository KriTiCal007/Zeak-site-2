import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Bot,
  Boxes,
  Check,
  Factory,
  FileCheck2,
  Network,
  Orbit,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, SectionMark, Tag } from '../components/ui';

const trustItems = [
  'Life sciences',
  'Chemicals',
  'Manufacturing',
  'Distribution',
  'Consumer products',
];

const agents = [
  { name: 'Supplier Risk Agent', task: 'Monitors OTIF, delivery variance, and supplier health', systems: 'SAP · Portal' },
  { name: 'Production Agent', task: 'Flags capacity slips and schedule risk early', systems: 'MES · Dynamics' },
  { name: 'Quality Agent', task: 'Validates batch release evidence across systems', systems: 'LIMS · QMS' },
  { name: 'Customer Agent', task: 'Prepares account impact briefs when supply shifts', systems: 'CRM · Email' },
];

const solutions = [
  {
    code: 'SRM',
    title: 'Supplier Relationship Management',
    to: '/solutions/supplier-relationship-management',
    icon: <Network size={18} />,
    points: ['Supplier 360', 'Risk scoring', 'Quality events', 'Onboarding'],
  },
  {
    code: 'OPS',
    title: 'Manufacturing Operations',
    to: '/solutions/manufacturing-operations',
    icon: <Factory size={18} />,
    points: ['Planning', 'Batch ops', 'Materials', 'OEE'],
  },
  {
    code: 'CX',
    title: 'Customer Management',
    to: '/solutions/customer-management',
    icon: <Boxes size={18} />,
    points: ['Customer 360', 'Order risk', 'Service', 'Insights'],
  },
  {
    code: 'AUTO',
    title: 'RPA & Automation',
    to: '/solutions/rpa-automation',
    icon: <Workflow size={18} />,
    points: ['Orchestration', 'Approvals', 'Documents', 'ERP-safe actions'],
  },
];

const principles = [
  { title: 'Context over vibes', detail: 'Agents reason on your systems, objects, and process relationships—not isolated prompts.' },
  { title: 'Evidence by default', detail: 'Every recommendation links back to source systems, timestamps, and audit trails.' },
  { title: 'People in the loop', detail: 'Approvals stay where judgment matters. Automation runs everywhere else.' },
  { title: 'Your cloud, your control', detail: 'Deploy in Azure, AWS, GCP, or private cloud without surrendering data gravity.' },
  { title: 'Build on what works', detail: 'Sit above ERP, CRM, MES, and LIMS. No rip-and-replace required.' },
  { title: 'Quietly operational', detail: 'Designed for the teams who keep enterprises moving—not demos that stall in production.' },
];

const steps = [
  { title: 'Connect your context', detail: 'Integrate ERP, CRM, MES, LIMS, and collaboration systems into one governed fabric.' },
  { title: 'Map the enterprise graph', detail: 'Zeak models suppliers, materials, orders, batches, customers, and finance as living relationships.' },
  { title: 'Deploy specialized agents', detail: 'Stand up agents for risk, planning, quality, and service—tuned to your workflows.' },
  { title: 'Execute with control', detail: 'Move from insight to action with approvals, automations, and applications built around your business.' },
];

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((s) => (s + 1) % steps.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className={`home ${visible ? 'is-ready' : ''}`}>
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid-lines" />
        <div className="container hero-inner">
          <div className="brand-lockup reveal">
            <img src="/zeak-logo-on-dark.png" alt="ZEAK" width={840} height={280} />
          </div>
          <h1 className="reveal delay-1">
            Enterprise intelligence
            <br />
            for{' '}
            <span className="hero-highlight">
              real operating systems
              <i className="hatch" />
            </span>
          </h1>
          <p className="hero-copy reveal delay-2">
            Zeak connects your enterprise systems, data, people, workflows and AI into one intelligent
            operating layer—so teams can build applications, deploy agents, and automate processes
            without replacing what already works.
          </p>
          <div className="hero-actions reveal delay-3">
            <Button to="/company/contact" variant="lime">
              Book a demo
            </Button>
            <Button to="/platform" variant="teal">
              Explore platform
            </Button>
          </div>

          <div className="hero-stage reveal delay-4">
            <div className="hero-stage-frame">
              <div className="stack-block">
                <Orbit size={22} />
                <strong>ZEAK</strong>
                <span>Intelligence layer</span>
              </div>
              <div className="orbit-cubes" aria-hidden>
                {['ERP', 'CRM', 'MES', 'LIMS', 'APIs', 'Agents', 'Apps', 'Workflows'].map((label, i) => (
                  <span className={`cube cube-${i}`} key={label}>
                    {label}
                  </span>
                ))}
              </div>
              <div className="stage-floor" />
            </div>
            <div className="hero-chip">
              <span className="live-pip" />
              Enterprise context connected
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-inner">
          <span>Built for operators in</span>
          <div className="trust-row">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="trust-stats">
            <div>
              <strong>12M+</strong>
              <small>Connected objects</small>
            </div>
            <div>
              <strong>360°</strong>
              <small>Process context</small>
            </div>
            <div>
              <strong>SOC 2</strong>
              <small>Ready architecture</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream problem-section">
        <div className="container problem-layout">
          <div>
            <SectionMark>THE PROBLEM</SectionMark>
            <h2>
              At enterprise scale,
              <br />
              vibes don&apos;t ship.
            </h2>
          </div>
          <div className="problem-copy">
            <p>
              You already have ERP, CRM, MES, QMS, and hundreds of operational systems. What you
              don&apos;t have is one layer that understands how they connect—and can act on that
              understanding with governance.
            </p>
            <p className="problem-punch">
              It&apos;s not a prompt problem.
              <br />
              <em>It&apos;s a systems problem.</em>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-head">
            <Tag>PLATFORM</Tag>
            <h2>Custom agents made for serious operations teams</h2>
            <p>
              A full suite of enterprise-grade agents—each one deeply aware of your systems,
              intelligence graph, workflows, and approvals.
            </p>
          </div>
          <div className="agent-board">
            {agents.map((agent) => (
              <article className="agent-tile" key={agent.name}>
                <div className="agent-tile-top">
                  <span className="agent-icon">
                    <Bot size={16} />
                  </span>
                  <span className="mono-meta">{agent.systems}</span>
                </div>
                <h3>{agent.name}</h3>
                <p>{agent.task}</p>
              </article>
            ))}
          </div>
          <div className="section-cta-row">
            <Button to="/platform/agentic-ai" variant="dark">
              Explore agentic AI
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-cream split-feature">
        <div className="container split-feature-grid">
          <div>
            <Tag>INTELLIGENCE LAYER</Tag>
            <h2>Don&apos;t replace your enterprise. Make it intelligent.</h2>
            <p>
              Zeak sits above your operational stack and creates a living intelligence graph—so AI
              can reason across processes, not isolated datasets.
            </p>
            <ul className="check-list">
              <li>
                <Check size={15} /> Enterprise object graph
              </li>
              <li>
                <Check size={15} /> Evidence-backed recommendations
              </li>
              <li>
                <Check size={15} /> Cross-system impact paths
              </li>
            </ul>
            <Button to="/platform/intelligence-layer" variant="dark">
              See the intelligence layer
            </Button>
          </div>
          <div className="feature-panel dark-panel">
            <div className="panel-label">LIVE GRAPH</div>
            <div className="mini-graph">
              <div className="mini-hub">
                <Orbit size={20} />
                <span>Context</span>
              </div>
              {['Supplier', 'Batch', 'Customer', 'PO', 'Quality', 'Shipment'].map((node) => (
                <span key={node}>{node}</span>
              ))}
            </div>
            <div className="panel-foot">
              <span className="live-pip" /> Relationships updating
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream split-feature reverse">
        <div className="container split-feature-grid">
          <div className="feature-panel cream-panel">
            <div className="builder-mock">
              <div className="builder-top">
                <Sparkles size={14} />
                ZEAK BUILDER
              </div>
              <p>Build a supplier qualification app with risk scoring and approvals…</p>
              <div className="builder-bar">
                <span>Add context</span>
                <em>Generate</em>
              </div>
            </div>
          </div>
          <div>
            <Tag>APPLICATION BUILDER</Tag>
            <h2>Build applications around your business.</h2>
            <p>
              Turn enterprise context into purpose-built experiences—supplier portals, manufacturing
              dashboards, quality apps, and command centers.
            </p>
            <Button to="/platform/application-builder" variant="dark">
              Explore builder
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-dark solutions-band">
        <div className="container">
          <div className="section-head light">
            <SectionMark>SOLUTIONS</SectionMark>
            <h2>Start with solutions built for real operations</h2>
            <p>Go from connected data to working business applications with proven patterns.</p>
          </div>
          <div className="solution-board">
            {solutions.map((item) => (
              <Link to={item.to} className="solution-tile" key={item.code}>
                <div className="solution-tile-top">
                  <span>{item.icon}</span>
                  <small>{item.code}</small>
                </div>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <span className="tile-link">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-head centered">
            <SectionMark>HOW ZEAK WORKS</SectionMark>
            <h2>Inside Zeak&apos;s operating layer</h2>
            <p>Your enterprise is mapped into context that agents use to reason and execute.</p>
          </div>
          <div className="how-layout">
            <div className="how-visual dark-panel">
              <div className="how-visual-label">STEP 0{activeStep + 1}</div>
              <h3>{steps[activeStep].title}</h3>
              <p>{steps[activeStep].detail}</p>
              <div className="how-progress">
                {steps.map((_, i) => (
                  <i key={i} className={i === activeStep ? 'is-on' : ''} />
                ))}
              </div>
            </div>
            <div className="how-steps">
              {steps.map((step, index) => (
                <button
                  type="button"
                  key={step.title}
                  className={`how-step ${activeStep === index ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                >
                  <span>0{index + 1}</span>
                  <strong>{step.title}</strong>
                  <ArrowRight size={15} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-head centered">
            <SectionMark>PHILOSOPHY</SectionMark>
            <h2>Built with the principles Zeak is named for</h2>
            <p>Layered. Complete. Efficient. Quietly powerful.</p>
          </div>
          <div className="principle-grid">
            {principles.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream security-band">
        <div className="container security-layout">
          <div>
            <Tag>SECURITY &amp; GOVERNANCE</Tag>
            <h2>Centrally governed AI with enterprise-grade control</h2>
            <p>
              Zero Trust, SSO, RBAC/ABAC, AI action approvals, immutable audit, and deployment in
              your cloud.
            </p>
            <div className="security-actions">
              <Button to="/company/contact" variant="lime">
                Book a demo
              </Button>
              <Button to="/platform/security-governance" variant="ghost">
                Trust details
              </Button>
            </div>
          </div>
          <div className="security-cards">
            <div>
              <ShieldCheck size={20} />
              <strong>Your cloud</strong>
              <p>Azure, AWS, GCP, or private—data stays where you choose.</p>
            </div>
            <div>
              <FileCheck2 size={20} />
              <strong>Audit ready</strong>
              <p>Architecture aligned to SOC 2, ISO 27001, HIPAA, 21 CFR Part 11.</p>
            </div>
            <div>
              <Bot size={20} />
              <strong>AI governance</strong>
              <p>Human approvals before consequential agent actions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-glow" />
        <div className="container final-cta-inner">
          <SectionMark>THE NEXT OPERATING LAYER</SectionMark>
          <h2>
            Ready to run the enterprise
            <br />
            without the grind?
          </h2>
          <p>
            Connect your systems. Deploy agents. Build applications. Automate with control—and give
            every team one place to understand and act.
          </p>
          <div className="hero-actions">
            <Button to="/company/contact" variant="lime">
              Book a demo
            </Button>
            <Button to="/platform" variant="teal">
              Read platform
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
