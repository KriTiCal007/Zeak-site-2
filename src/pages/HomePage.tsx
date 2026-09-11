import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Cloud,
  Database,
  Factory,
  FileCheck2,
  GitBranch,
  Globe2,
  HardDrive,
  Headphones,
  Layers3,
  LockKeyhole,
  Network,
  Orbit,
  Play,
  Plus,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  Workflow,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, FlaskIcon, Logo, SectionLabel } from '../components/ui';

const systems = ['Dynamics 365', 'SAP', 'Salesforce', 'ServiceNow', 'MES', 'LIMS', 'SQL', 'Email', 'APIs'];
const outputs = ['Applications', 'AI Agents', 'Automations', 'Insights', 'Decisions', 'Approvals'];
const graphNodes = [
  'Suppliers',
  'Materials',
  'Purchase Orders',
  'Inventory',
  'Production',
  'Customers',
  'Sales Orders',
  'Quality Events',
  'Shipments',
  'Contracts',
  'Equipment',
  'Finance',
];

const agents = [
  { name: 'Supplier Risk Agent', color: 'blue', status: 'Monitoring', task: 'Reviewing NovaChem delivery variance', systems: 'SAP · Supplier Portal', insight: '3 suppliers need attention' },
  { name: 'Production Planning Agent', color: 'cyan', status: 'Planning', task: 'Evaluating Reactor K-04 capacity', systems: 'MES · Dynamics 365', insight: '2.4 day slip detected' },
  { name: 'Inventory Agent', color: 'violet', status: 'Optimizing', task: 'Finding alternate RM-2187 sources', systems: 'ERP · Procurement', insight: '1 eligible source found' },
  { name: 'Quality Agent', color: 'green', status: 'Validating', task: 'Checking batch release evidence', systems: 'LIMS · QMS', insight: 'All critical checks passed' },
  { name: 'Customer Agent', color: 'amber', status: 'Ready', task: 'Preparing account impact brief', systems: 'CRM · Email', insight: '12 orders in scope' },
  { name: 'Finance Agent', color: 'slate', status: 'Watching', task: 'Calculating working capital effect', systems: 'Finance · Contracts', insight: 'Within approved threshold' },
];

const scenarios = [
  ['Supplier Risk', 'Production Risk', 'Supplier · Material · Purchase Order', 'blue'],
  ['Customer Order', 'Supply Constraint', 'Customer · Sales Order · Inventory', 'cyan'],
  ['Quality Event', 'Supplier Investigation', 'Quality Event · Batch · Supplier', 'violet'],
  ['Production Delay', 'Customer Impact', 'Production · Shipment · Customer', 'amber'],
  ['Demand Spike', 'Material Requirement', 'Customer · Demand · Material', 'green'],
  ['Equipment Failure', 'Schedule Optimization', 'Equipment · Production · Schedule', 'slate'],
] as const;

export default function HomePage() {
  const [activeGraph, setActiveGraph] = useState('Enterprise');
  const [activeScenario, setActiveScenario] = useState(0);

  return (
    <main id="top">
      <section className="hero dark-section">
        <div className="hero-grid" />
        <div className="container hero-content">
          <SectionLabel dark>Enterprise Intelligence &amp; Execution Platform</SectionLabel>
          <h1>
            Your Enterprise.
            <br />
            <span>Connected. Intelligent. Autonomous.</span>
          </h1>
          <p className="hero-copy">
            Zeak connects your enterprise systems, data, people, workflows and AI into one intelligent
            operating layer—so teams can build applications, deploy agents and automate business
            processes without replacing the systems they already depend on.
          </p>
          <div className="hero-actions">
            <Button to="/company/contact">Book a Demo</Button>
            <Link className="text-link light-link" to="/platform">
              Explore the Platform <ArrowRight size={16} />
            </Link>
          </div>
          <ArchitectureDiagram systems={systems} outputs={outputs} />
        </div>
      </section>

      <section className="section section-white" id="platform">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionLabel>THE INTELLIGENCE LAYER</SectionLabel>
              <h2>
                Don&apos;t replace your enterprise.
                <br />
                <em>Make it intelligent.</em>
              </h2>
            </div>
            <p>
              Enterprises already have ERP, CRM, MES, QMS and hundreds of operational systems. Zeak
              sits above these systems and creates a unified intelligence and execution layer.
            </p>
          </div>
          <div className="three-column-architecture">
            <ArchitectureColumn title="Your systems" items={['Dynamics 365', 'SAP', 'Salesforce', 'MES', 'LIMS', 'Email']} icon={<Database />} />
            <div className="architecture-arrow">
              <span>CONNECT</span>
              <ArrowRight />
            </div>
            <ArchitectureColumn
              title="Zeak"
              featured
              items={['Enterprise Intelligence Layer', 'Data + Context', 'Intelligence Graph', 'AI Agents', 'Workflow Orchestration', 'Security & Governance']}
              icon={<Orbit />}
            />
            <div className="architecture-arrow">
              <span>EXECUTE</span>
              <ArrowRight />
            </div>
            <ArchitectureColumn title="Your business" items={['Supplier 360', 'Manufacturing Operations', 'Customer 360', 'AI Assistants', 'Automations', 'Decision Apps']} icon={<Target />} />
          </div>
        </div>
      </section>

      <section className="section section-sand graph-section">
        <div className="container graph-layout">
          <div className="graph-copy">
            <SectionLabel>CONTEXT, NOT JUST DATA</SectionLabel>
            <h2>
              Your business already has the data.
              <br />
              <em>Zeak gives it context.</em>
            </h2>
            <p>
              Zeak understands the relationships between enterprise objects so AI agents can reason
              across business processes instead of isolated datasets.
            </p>
            <div className="graph-stats">
              <div>
                <strong>12M+</strong>
                <span>Connected objects</span>
              </div>
              <div>
                <strong>360°</strong>
                <span>Business context</span>
              </div>
            </div>
          </div>
          <div className="graph-card">
            <div className="graph-card-top">
              <span>LIVE INTELLIGENCE GRAPH</span>
              <span className="live-dot">
                <i />
                Live
              </span>
            </div>
            <div className="graph-canvas">
              <div className="graph-lines" />
              {graphNodes.map((node, index) => {
                const angle = (index / graphNodes.length) * Math.PI * 2;
                const x = 50 + Math.cos(angle) * 38;
                const y = 50 + Math.sin(angle) * 37;
                return (
                  <button
                    className={`graph-node node-${index} ${activeGraph === node ? 'active' : ''}`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    key={node}
                    onClick={() => setActiveGraph(node)}
                    type="button"
                  >
                    <span>{node}</span>
                  </button>
                );
              })}
              <button className="graph-center" onClick={() => setActiveGraph('Enterprise')} type="button">
                <Orbit size={21} />
                <span>{activeGraph}</span>
                <small>Context hub</small>
              </button>
            </div>
            <div className="graph-card-bottom">
              <span>
                <CircleDot size={13} />
                Relationships are updating
              </span>
              <span>1,842 connections</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading centered-heading">
            <SectionLabel>AGENTIC BUSINESS NETWORK</SectionLabel>
            <h2>
              AI agents that <em>understand your business.</em>
            </h2>
            <p>
              Deploy specialized agents that collaborate with each other, reason over your enterprise
              context, and take action with the right approvals.
            </p>
          </div>
          <div className="agent-grid">
            {agents.map((agent) => (
              <div className={`agent-card accent-${agent.color}`} key={agent.name}>
                <div className="agent-card-head">
                  <div className="agent-icon">
                    <Bot size={19} />
                  </div>
                  <span className="agent-status">
                    <i />
                    {agent.status}
                  </span>
                </div>
                <h3>{agent.name}</h3>
                <p>{agent.task}</p>
                <div className="agent-meta">
                  <span>
                    <Layers3 size={13} />
                    {agent.systems}
                  </span>
                  <span>
                    <Sparkles size={13} />
                    {agent.insight}
                  </span>
                </div>
                <div className="agent-trace">
                  <span>Agent trace</span>
                  <span className="trace-bars">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section assistant-section">
        <div className="container assistant-layout">
          <div className="assistant-copy">
            <SectionLabel dark>ZEAK ASSISTANT</SectionLabel>
            <h2>Ask your enterprise.</h2>
            <p>
              Evidence-backed answers grounded in your systems, processes and operating context. Then
              move from insight to action.
            </p>
            <Link className="text-link light-link" to="/platform/agentic-ai">
              Explore agentic AI <ArrowRight size={16} />
            </Link>
          </div>
          <div className="assistant-window">
            <div className="window-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>ZEAK / Enterprise Assistant</span>
              <span className="window-live">
                <i />
                Connected
              </span>
            </div>
            <div className="chat-area">
              <div className="chat-question">Why is Batch 24A-871 expected to ship late?</div>
              <div className="chat-answer">
                <div className="answer-head">
                  <div className="answer-avatar">
                    <Logo compact />
                  </div>
                  <span>Zeak Intelligence</span>
                  <span className="answer-time">Just now</span>
                </div>
                <h4>
                  Batch 24A-871 has a projected <strong>2.4-day delay.</strong>
                </h4>
                <p className="answer-intro">Primary factors:</p>
                <ol>
                  <li>Raw material RM-2187 is arriving 18 hours late.</li>
                  <li>Supplier NovaChem OTIF dropped from 96% to 82%.</li>
                  <li>Reactor K-04 has a 6-hour maintenance window tomorrow.</li>
                </ol>
                <div className="recommendation">
                  <div className="recommendation-icon">
                    <Zap size={16} />
                  </div>
                  <div>
                    <span>RECOMMENDED ACTION</span>
                    <strong>Move batch to Reactor K-07 and expedite RM-2187.</strong>
                    <small>
                      Estimated recovery: <b>1.9 days</b>
                    </small>
                  </div>
                </div>
                <div className="answer-actions">
                  <button type="button">
                    <FileCheck2 size={14} />
                    Review Recommendation
                  </button>
                  <button type="button">
                    <Play size={14} />
                    Create Action
                  </button>
                  <button type="button">
                    <Search size={14} />
                    Show Evidence
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sand workflow-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionLabel>EXECUTION, NOT JUST GENERATION</SectionLabel>
              <h2>
                From insight
                <br />
                <em>to action.</em>
              </h2>
            </div>
            <p>
              Zeak can execute business workflows rather than just generate AI responses. Keep people
              in the loop when judgment matters, and automate the rest.
            </p>
          </div>
          <div className="workflow">
            <WorkflowStep label="Supplier delivery risk detected" icon={<ShieldCheck />} />
            <WorkflowStep label="AI evaluates production impact" icon={<Sparkles />} />
            <WorkflowStep label="Alternative supplier identified" icon={<Search />} />
            <WorkflowStep label="Buyer approval requested" icon={<UserRound />} />
            <WorkflowStep label="PO created" icon={<FileCheck2 />} />
            <WorkflowStep label="Supplier notified" icon={<Send />} />
            <WorkflowStep label="ERP updated" icon={<Check />} />
          </div>
        </div>
      </section>

      <section className="section section-white app-builder-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <SectionLabel>APPLICATION BUILDER</SectionLabel>
            <h2>
              Build applications <em>around your business.</em>
            </h2>
            <p>
              Turn your enterprise context into purpose-built experiences for the people who move
              your business forward.
            </p>
          </div>
          <div className="builder-layout">
            <div className="builder-prompt">
              <div className="builder-top">
                <span>
                  <Sparkles size={15} />
                  ZEAK BUILDER
                </span>
                <span>New application</span>
              </div>
              <div className="prompt-label">Describe what you want to build</div>
              <div className="prompt-field">
                Build a supplier qualification application with onboarding, document verification,
                risk scoring and approval workflows.
                <span className="cursor" />
              </div>
              <div className="prompt-footer">
                <span>
                  <Plus size={15} />
                  Add context
                </span>
                <Button to="/platform/application-builder">Generate app</Button>
              </div>
              <div className="builder-generation">
                <div className="generation-icon">
                  <Workflow size={18} />
                </div>
                <div>
                  <strong>Supplier Qualification</strong>
                  <span>Generating workspace, data model and workflows</span>
                </div>
                <span className="generation-progress">78%</span>
              </div>
            </div>
            <div className="app-preview">
              <div className="preview-sidebar">
                <Logo compact />
                <span className="preview-active">Overview</span>
                <span>Suppliers</span>
                <span>Documents</span>
                <span>Risk scoring</span>
                <span>Approvals</span>
                <span>Settings</span>
              </div>
              <div className="preview-main">
                <div className="preview-header">
                  <div>
                    <span>SUPPLIER QUALIFICATION</span>
                    <h3>Good morning, Anna</h3>
                  </div>
                  <div className="preview-user">
                    <span>AA</span>
                    <ChevronDown size={13} />
                  </div>
                </div>
                <div className="preview-metrics">
                  <div>
                    <span>Active suppliers</span>
                    <strong>284</strong>
                    <small>+12 this month</small>
                  </div>
                  <div>
                    <span>Pending review</span>
                    <strong>18</strong>
                    <small className="warning-text">Requires attention</small>
                  </div>
                  <div>
                    <span>Avg. risk score</span>
                    <strong>Low</strong>
                    <small>↓ 8% vs last month</small>
                  </div>
                </div>
                <div className="preview-table">
                  <div className="table-head">
                    <span>SUPPLIER</span>
                    <span>RISK</span>
                    <span>STATUS</span>
                  </div>
                  {['NovaChem Industries', 'Apex Materials', 'Helio Manufacturing'].map((name, i) => (
                    <div className="table-row" key={name}>
                      <span>
                        <i className={`company-logo company-${i}`} />
                        {name}
                      </span>
                      <span className={i === 0 ? 'risk-high' : 'risk-low'}>{i === 0 ? 'Medium' : 'Low'}</span>
                      <span className="approved">
                        <Check size={12} />
                        Approved
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="example-tags">
            <span>Supplier Portal</span>
            <span>Customer Portal</span>
            <span>Manufacturing Dashboard</span>
            <span>Quality Management</span>
            <span>Executive Command Center</span>
          </div>
        </div>
      </section>

      <section className="section section-charcoal solutions-section">
        <div className="container">
          <div className="section-heading split-heading heading-light">
            <div>
              <SectionLabel dark>OPERATIONAL SOLUTIONS</SectionLabel>
              <h2>
                Start with solutions
                <br />
                <em>built for real operations.</em>
              </h2>
            </div>
            <p>
              Go from connected data to a working business application with proven patterns for the
              functions that keep enterprises moving.
            </p>
          </div>
          <div className="solution-grid">
            <SolutionCard
              code="ZEAK SRM"
              title="Supplier Relationship Management"
              to="/solutions/supplier-relationship-management"
              icon={<Network />}
              features={['Supplier 360', 'Supplier Performance', 'Supplier Risk', 'Supplier Quality', 'Contracts', 'Spend Intelligence', 'Supplier Onboarding']}
            />
            <SolutionCard
              code="OPERATIONS"
              title="Manufacturing Operations"
              to="/solutions/manufacturing-operations"
              icon={<Factory />}
              features={['Production Planning', 'Batch Operations', 'Material Availability', 'Resource Utilization', 'Quality', 'OEE', 'Production Risk']}
            />
            <SolutionCard
              code="CUSTOMER"
              title="Customer Management"
              to="/solutions/customer-management"
              icon={<Headphones />}
              features={['Customer 360', 'Order Visibility', 'Customer Service', 'Sales Activity', 'Order Risk', 'Customer Insights']}
            />
            <SolutionCard
              code="AUTOMATION"
              title="Zeak Automation"
              to="/solutions/rpa-automation"
              icon={<Workflow />}
              features={['Workflow Orchestration', 'AI Actions', 'Human Approvals', 'Cross-System Automation', 'Notifications', 'Document Processing']}
            />
          </div>
        </div>
      </section>

      <section className="section section-white integrations-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <SectionLabel>INTEGRATIONS</SectionLabel>
            <h2>
              Connect the systems
              <br />
              <em>your business already runs.</em>
            </h2>
            <p>
              Zeak becomes the connective tissue between your enterprise systems—without asking you
              to rip out what already works.
            </p>
          </div>
          <div className="integration-layout">
            <div className="integration-orbit">
              <div className="orbit-ring ring-one" />
              <div className="orbit-ring ring-two" />
              <div className="integration-core">
                <Logo compact />
                <span>ZEAK</span>
              </div>
              {systems.concat(['Oracle', 'Microsoft 365']).map((system, index) => (
                <div className={`integration-node int-${index}`} key={system}>
                  <span>{system.slice(0, 2).toUpperCase()}</span>
                  <small>{system}</small>
                </div>
              ))}
            </div>
            <div className="integration-list">
              {[
                'Microsoft Dynamics 365',
                'SAP',
                'Salesforce',
                'ServiceNow',
                'Oracle',
                'NetSuite',
                'MES',
                'LIMS',
                'Snowflake',
                'SQL Server',
                'PostgreSQL',
                'Microsoft 365',
                'Google Workspace',
                'REST APIs',
                'SFTP',
                'Email',
              ].map((item) => (
                <div key={item}>
                  <span className="integration-tile-icon">
                    <Boxes size={17} />
                  </span>
                  {item}
                  <Check size={14} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sand security-section" id="security">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionLabel>SECURITY &amp; GOVERNANCE</SectionLabel>
              <h2>
                Enterprise intelligence
                <br />
                <em>without compromise.</em>
              </h2>
            </div>
            <p>
              Built for the security, governance and deployment requirements of modern enterprises.
              Your policies stay in control at every layer.
            </p>
          </div>
          <div className="security-layout">
            <div className="security-stack">
              {[
                'Identity',
                'Authentication / SSO',
                'RBAC / ABAC',
                'Application Security',
                'Data Security',
                'AI Governance',
                'Audit',
                'Infrastructure Security',
              ].map((item, i) => (
                <div key={item} className={`security-layer layer-${i}`}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                  <ChevronRight size={15} />
                </div>
              ))}
            </div>
            <div className="security-capabilities">
              <div className="capabilities-label">CAPABILITIES</div>
              <div className="capability-grid">
                {[
                  'Zero Trust architecture',
                  'Microsoft Entra ID / SSO',
                  'Role-based access',
                  'Attribute-based access',
                  'Field-level permissions',
                  'Encryption in transit',
                  'Tenant isolation',
                  'Immutable audit trails',
                  'AI action approvals',
                  'Human-in-the-loop controls',
                  'Model governance',
                  'Private cloud deployment',
                ].map((item) => (
                  <div key={item}>
                    <Check size={14} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="compliance-row">
                {['SOC 2', 'ISO 27001', 'HIPAA', '21 CFR Part 11'].map((item) => (
                  <div key={item}>
                    <ShieldCheck size={18} />
                    <span>
                      {item}
                      <small>Compliance-ready architecture</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white deployment-section">
        <div className="container deployment-layout">
          <div>
            <SectionLabel>DEPLOYMENT</SectionLabel>
            <h2>
              Your cloud.
              <br />
              <em>
                Your data.
                <br />
                Your control.
              </em>
            </h2>
            <p>
              Choose the deployment model that matches your security, infrastructure and regulatory
              requirements.
            </p>
            <Link className="text-link" to="/platform/security-governance">
              Explore deployment options <ArrowRight size={16} />
            </Link>
          </div>
          <div className="deployment-visual">
            <div className="deployment-zeak">
              <Logo compact />
              <strong>ZEAK</strong>
              <span>Intelligence layer</span>
            </div>
            <div className="deployment-lines">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="cloud-options">
              <div>
                <Cloud size={22} />
                <strong>Microsoft Azure</strong>
                <span>Customer Azure</span>
              </div>
              <div>
                <Cloud size={22} />
                <strong>AWS</strong>
                <span>Customer AWS</span>
              </div>
              <div>
                <Globe2 size={22} />
                <strong>Google Cloud</strong>
                <span>Customer GCP</span>
              </div>
              <div>
                <HardDrive size={22} />
                <strong>Private Cloud</strong>
                <span>Hybrid Deployment</span>
              </div>
            </div>
            <div className="deployment-note">
              <LockKeyhole size={15} /> Your data stays where you choose.
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sand industries-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <SectionLabel>INDUSTRIES</SectionLabel>
            <h2>
              Intelligence for the way
              <br />
              <em>your industry actually works.</em>
            </h2>
          </div>
          <div className="industry-grid">
            {(
              [
                [
                  'Life Sciences & Pharmaceuticals',
                  'Supplier quality · Batch manufacturing · Quality events · Regulatory workflows · EBR · Manufacturing intelligence',
                  <FileCheck2 key="ls" />,
                  '/industries/life-sciences-pharmaceuticals',
                ],
                [
                  'Chemicals',
                  'Batch manufacturing · Chemical compliance · SDS · Quality · Supplier management · Inventory intelligence',
                  <FlaskIcon key="ch" />,
                  '/industries/chemicals',
                ],
                [
                  'Manufacturing',
                  'Planning · Production · OEE · Maintenance · Materials · Supplier risk',
                  <Factory key="mf" />,
                  '/industries/manufacturing',
                ],
                [
                  'Distribution',
                  'Inventory optimization · Supplier performance · Order fulfillment · Warehouse operations · Customer intelligence',
                  <Boxes key="di" />,
                  '/industries/distribution',
                ],
              ] as const
            ).map(([name, detail, icon, to]) => (
              <Link className="industry-card" to={to} key={name}>
                <div className="industry-icon">{icon}</div>
                <h3>{name}</h3>
                <p>{detail}</p>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white scenarios-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionLabel>CROSS-FUNCTIONAL INTELLIGENCE</SectionLabel>
              <h2>
                See what happens
                <br />
                <em>across the entire business.</em>
              </h2>
            </div>
            <p>
              Surface the second- and third-order effects that stay hidden in disconnected systems.
              Zeak makes relationships operational.
            </p>
          </div>
          <div className="scenario-layout">
            <div className="scenario-list">
              {scenarios.map(([from, to], index) => (
                <button
                  className={`scenario-item ${activeScenario === index ? 'active' : ''}`}
                  key={from}
                  onMouseEnter={() => setActiveScenario(index)}
                  onFocus={() => setActiveScenario(index)}
                  type="button"
                >
                  <span>0{index + 1}</span>
                  <strong>
                    {from} <ArrowRight size={14} /> {to}
                  </strong>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
            <div className={`scenario-visual scenario-${scenarios[activeScenario][3]}`}>
              <div className="scenario-top">
                <span>RELATIONSHIP VIEW</span>
                <span>
                  <i />
                  Highlighted path
                </span>
              </div>
              <div className="scenario-network">
                <div className="scenario-node node-a">
                  <CircleDot size={15} />
                  <span>{scenarios[activeScenario][0]}</span>
                </div>
                <div className="scenario-connector">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="scenario-hub">
                  <Orbit size={25} />
                  <span>Zeak context</span>
                </div>
                <div className="scenario-connector reverse">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="scenario-node node-b">
                  <Target size={15} />
                  <span>{scenarios[activeScenario][1]}</span>
                </div>
              </div>
              <div className="scenario-objects">
                {scenarios[activeScenario][2].split(' · ').map((object) => (
                  <span key={object}>
                    <Database size={12} />
                    {object}
                  </span>
                ))}
              </div>
              <div className="scenario-footer">
                <span>Impact path identified</span>
                <ArrowRight size={15} />
                <span>Action ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-charcoal compare-section">
        <div className="container">
          <div className="section-heading centered-heading heading-light">
            <SectionLabel dark>THE ZEAK DIFFERENCE</SectionLabel>
            <h2>
              AI tools answer questions.
              <br />
              <em>Zeak runs business processes.</em>
            </h2>
            <p>Zeak brings the full enterprise execution stack together in one operating layer.</p>
          </div>
          <div className="comparison-table">
            <div className="comparison-head">
              <span>CAPABILITY</span>
              <span>Chat AI</span>
              <span>Automation tools</span>
              <span>App builders</span>
              <span className="zeak-column">ZEAK</span>
            </div>
            {[
              ['Enterprise Context', '—', 'Limited', 'Limited', 'Full'],
              ['Cross-System Data', '—', 'Some', 'Some', 'Native'],
              ['AI Agents', 'Answers', 'Basic', 'Basic', 'Actionable'],
              ['Agent Collaboration', '—', '—', '—', 'Native'],
              ['Application Builder', '—', 'Limited', 'Core', 'Core'],
              ['Workflow Automation', '—', 'Core', 'Some', 'Core'],
              ['Enterprise Intelligence Graph', '—', '—', '—', 'Core'],
              ['Human Approvals', '—', 'Some', 'Some', 'Native'],
              ['Evidence-backed AI', 'Some', '—', '—', 'Native'],
              ['Enterprise Security', 'Varies', 'Varies', 'Varies', 'Built-in'],
              ['Customer Cloud Deployment', 'Varies', 'Varies', 'Varies', 'Flexible'],
            ].map(([label, ...values]) => (
              <div className="comparison-row" key={label}>
                <strong>{label}</strong>
                {values.map((value, index) => (
                  <span className={index === 3 ? 'zeak-column' : ''} key={`${label}-${value}-${index}`}>
                    {index === 3 && <Check size={14} />}
                    {value}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta dark-section" id="contact">
        <div className="cta-lines" />
        <div className="container final-cta-inner">
          <SectionLabel dark>THE NEXT OPERATING LAYER</SectionLabel>
          <h2>
            Your enterprise is already
            <br />
            <span>connected by processes.</span>
          </h2>
          <p>
            Zeak makes those processes intelligent. Connect your systems. Build intelligent
            applications. Deploy AI agents. Automate operations. And give your teams one place to
            understand and act on the business.
          </p>
          <div className="hero-actions">
            <Button to="/company/contact">Book a Demo</Button>
            <a className="text-link light-link" href="mailto:hello@zeak.ai">
              Talk to Zeak <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArchitectureDiagram({
  systems: sourceSystems,
  outputs: destinationOutputs,
}: {
  systems: string[];
  outputs: string[];
}) {
  return (
    <div className="architecture-diagram">
      <div className="diagram-caption">
        <span>ENTERPRISE ARCHITECTURE</span>
        <span>
          <i />
          Live data flows
        </span>
      </div>
      <div className="diagram-grid">
        <div className="diagram-column diagram-systems">
          <small>YOUR SYSTEMS</small>
          {sourceSystems.map((item, index) => (
            <div className="diagram-node" key={item}>
              <span className={`system-symbol symbol-${index % 4}`} />
              {item}
              <div className="flow-line" />
            </div>
          ))}
        </div>
        <div className="diagram-layer">
          <div className="layer-glow" />
          <div className="layer-bracket">
            <span />
            <span />
          </div>
          <div className="layer-logo">
            <Logo compact />
          </div>
          <strong>ZEAK</strong>
          <small>INTELLIGENCE + ORCHESTRATION</small>
          <div className="layer-pills">
            <span>Data + Context</span>
            <span>AI Agents</span>
            <span>Workflow Orchestration</span>
            <span>Security</span>
          </div>
        </div>
        <div className="diagram-column diagram-outputs">
          <small>WHAT YOU CREATE</small>
          {destinationOutputs.map((item) => (
            <div className="diagram-node" key={item}>
              <span className="output-symbol">
                <ArrowUpRight size={13} />
              </span>
              {item}
              <div className="flow-line" />
            </div>
          ))}
        </div>
      </div>
      <div className="diagram-bottom">
        <span>
          <LockKeyhole size={13} />
          Governed by design
        </span>
        <span>
          <GitBranch size={13} />
          Cross-system execution
        </span>
        <span>
          <CircleDot size={13} />
          Evidence-backed decisions
        </span>
      </div>
    </div>
  );
}

function ArchitectureColumn({
  title,
  items,
  icon,
  featured = false,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <div className={`architecture-column ${featured ? 'architecture-featured' : ''}`}>
      <div className="column-title">
        <span>{icon}</span>
        <small>{title}</small>
      </div>
      {items.map((item, index) => (
        <div className="column-item" key={item}>
          <span>{featured ? <Sparkles size={13} /> : <CircleDot size={11} />}</span>
          {item}
          <span className="item-index">0{index + 1}</span>
        </div>
      ))}
    </div>
  );
}

function WorkflowStep({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="workflow-step">
      <div className="workflow-icon">{icon}</div>
      <span>{label}</span>
      <ChevronRight className="workflow-chevron" size={15} />
    </div>
  );
}

function SolutionCard({
  code,
  title,
  icon,
  features,
  to,
}: {
  code: string;
  title: string;
  icon: React.ReactNode;
  features: string[];
  to: string;
}) {
  return (
    <div className="solution-card">
      <div className="solution-card-top">
        <span>{icon}</span>
        <small>{code}</small>
      </div>
      <h3>{title}</h3>
      <div className="solution-features">
        {features.map((feature) => (
          <span key={feature}>
            <Check size={13} />
            {feature}
          </span>
        ))}
      </div>
      <Link to={to}>
        Explore solution <ArrowUpRight size={15} />
      </Link>
    </div>
  );
}
