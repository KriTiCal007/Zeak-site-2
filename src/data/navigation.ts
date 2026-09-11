export type NavItem = {
  label: string;
  path: string;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export type PageContent = {
  path: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  highlights: string[];
  capabilities: { title: string; detail: string }[];
};

export const navGroups: NavGroup[] = [
  {
    label: 'Platform',
    items: [
      { label: 'Zeak Platform', path: '/platform' },
      { label: 'Intelligence Layer', path: '/platform/intelligence-layer' },
      { label: 'Agentic AI', path: '/platform/agentic-ai' },
      { label: 'Automation', path: '/platform/automation' },
      { label: 'Application Builder', path: '/platform/application-builder' },
      { label: 'Integrations', path: '/platform/integrations' },
      { label: 'Security & Governance', path: '/platform/security-governance' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { label: 'Supplier Relationship Management', path: '/solutions/supplier-relationship-management' },
      { label: 'Manufacturing Operations', path: '/solutions/manufacturing-operations' },
      { label: 'Customer Management', path: '/solutions/customer-management' },
      { label: 'RPA & Automation', path: '/solutions/rpa-automation' },
      { label: 'Decision Intelligence', path: '/solutions/decision-intelligence' },
    ],
  },
  {
    label: 'Industries',
    items: [
      { label: 'Life Sciences & Pharmaceuticals', path: '/industries/life-sciences-pharmaceuticals' },
      { label: 'Chemicals', path: '/industries/chemicals' },
      { label: 'Manufacturing', path: '/industries/manufacturing' },
      { label: 'Distribution', path: '/industries/distribution' },
      { label: 'Consumer Products', path: '/industries/consumer-products' },
    ],
  },
  {
    label: 'Developers',
    items: [
      { label: 'Platform Overview', path: '/developers' },
      { label: 'APIs', path: '/developers/apis' },
      { label: 'Connectors', path: '/developers/connectors' },
      { label: 'Documentation', path: '/developers/documentation' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Insights', path: '/resources/insights' },
      { label: 'Blog', path: '/resources/blog' },
      { label: 'Case Studies', path: '/resources/case-studies' },
      { label: 'Documentation', path: '/resources/documentation' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About', path: '/company/about' },
      { label: 'Contact', path: '/company/contact' },
    ],
  },
];

export const pages: PageContent[] = [
  {
    path: '/platform',
    category: 'Platform',
    title: 'Zeak Platform',
    headline: 'One intelligent operating layer for the enterprise.',
    description:
      'Zeak connects systems, data, people, workflows and AI into a unified intelligence and execution platform—without replacing the systems you already run.',
    highlights: ['Unified enterprise context', 'Cross-system orchestration', 'Governed AI actions', 'Deploy in your cloud'],
    capabilities: [
      { title: 'Connect', detail: 'Bring ERP, CRM, MES, LIMS and custom systems into one governed fabric.' },
      { title: 'Understand', detail: 'Model relationships across suppliers, orders, batches, customers and finance.' },
      { title: 'Decide', detail: 'Surface evidence-backed recommendations with full auditability.' },
      { title: 'Act', detail: 'Execute workflows, approvals and automations across your stack.' },
    ],
  },
  {
    path: '/platform/intelligence-layer',
    category: 'Platform',
    title: 'Intelligence Layer',
    headline: "Don't replace your enterprise. Make it intelligent.",
    description:
      'Zeak sits above your operational systems and creates a living intelligence graph—so AI can reason across processes, not isolated datasets.',
    highlights: ['Enterprise object graph', 'Real-time context', 'Evidence trails', 'Process-aware reasoning'],
    capabilities: [
      { title: 'Object graph', detail: 'Map suppliers, materials, orders, inventory, quality events and more.' },
      { title: 'Context engine', detail: 'Give agents the relationships they need to explain impact paths.' },
      { title: 'Signal fusion', detail: 'Combine ERP, MES, CRM and unstructured signals into one view.' },
      { title: 'Explainability', detail: 'Every insight links back to source systems and evidence.' },
    ],
  },
  {
    path: '/platform/agentic-ai',
    category: 'Platform',
    title: 'Agentic AI',
    headline: 'AI agents that understand your business.',
    description:
      'Deploy specialized agents that collaborate, reason over enterprise context, and take action with the right human approvals.',
    highlights: ['Specialized agents', 'Multi-agent collaboration', 'Human-in-the-loop', 'Actionable outcomes'],
    capabilities: [
      { title: 'Supplier Risk Agent', detail: 'Monitor OTIF, delivery variance and supplier health continuously.' },
      { title: 'Production Planning Agent', detail: 'Detect schedule slips and capacity constraints early.' },
      { title: 'Quality Agent', detail: 'Validate batch release evidence across LIMS and QMS.' },
      { title: 'Customer Agent', detail: 'Prepare account impact briefs when supply is at risk.' },
    ],
  },
  {
    path: '/platform/automation',
    category: 'Platform',
    title: 'Automation',
    headline: 'From insight to action—without losing control.',
    description:
      'Orchestrate cross-system workflows with AI actions, human approvals and immutable audit trails built for enterprise operations.',
    highlights: ['Workflow orchestration', 'AI-triggered actions', 'Approval gates', 'ERP-safe updates'],
    capabilities: [
      { title: 'Detect', detail: 'Catch risk signals across suppliers, production and quality.' },
      { title: 'Evaluate', detail: 'Let agents score impact and propose the next best action.' },
      { title: 'Approve', detail: 'Keep buyers, planners and quality teams in the loop.' },
      { title: 'Execute', detail: 'Create POs, notify suppliers and update systems of record.' },
    ],
  },
  {
    path: '/platform/application-builder',
    category: 'Platform',
    title: 'Application Builder',
    headline: 'Build applications around your business.',
    description:
      'Turn enterprise context into purpose-built experiences—supplier portals, manufacturing dashboards, quality apps and more.',
    highlights: ['Prompt-to-app', 'Business data models', 'Role-based workspaces', 'Embedded workflows'],
    capabilities: [
      { title: 'Describe', detail: 'Capture the process you want in natural language.' },
      { title: 'Generate', detail: 'Create workspaces, data models and approval flows.' },
      { title: 'Customize', detail: 'Tune screens, permissions and integrations for your teams.' },
      { title: 'Deploy', detail: 'Ship governed apps into your cloud with audit controls.' },
    ],
  },
  {
    path: '/platform/integrations',
    category: 'Platform',
    title: 'Integrations',
    headline: 'Connect the systems your business already runs.',
    description:
      'Zeak becomes the connective tissue between Dynamics 365, SAP, Salesforce, MES, LIMS and custom APIs—without rip-and-replace.',
    highlights: ['ERP & CRM', 'MES & LIMS', 'Data platforms', 'REST & events'],
    capabilities: [
      { title: 'Microsoft & SAP', detail: 'Native patterns for Dynamics 365 and SAP landscapes.' },
      { title: 'CRM & service', detail: 'Sync Salesforce, ServiceNow and customer systems.' },
      { title: 'Plant systems', detail: 'Connect MES, LIMS and shop-floor data sources.' },
      { title: 'Open APIs', detail: 'Extend with REST, webhooks, SFTP and email connectors.' },
    ],
  },
  {
    path: '/platform/security-governance',
    category: 'Platform',
    title: 'Security & Governance',
    headline: 'Enterprise intelligence without compromise.',
    description:
      'Built for Zero Trust, SSO, RBAC/ABAC, AI action approvals and private-cloud deployment—so your policies stay in control.',
    highlights: ['Zero Trust', 'SSO / Entra ID', 'AI governance', 'Immutable audit'],
    capabilities: [
      { title: 'Identity', detail: 'Authenticate with Microsoft Entra ID and enterprise SSO.' },
      { title: 'Access', detail: 'Enforce role- and attribute-based permissions at field level.' },
      { title: 'AI controls', detail: 'Require approvals before agents take consequential actions.' },
      { title: 'Compliance', detail: 'Architecture ready for SOC 2, ISO 27001, HIPAA and 21 CFR Part 11.' },
    ],
  },
  {
    path: '/solutions/supplier-relationship-management',
    category: 'Solutions',
    title: 'Supplier Relationship Management',
    headline: 'Supplier 360 with performance, risk and quality in one place.',
    description:
      'Unify onboarding, contracts, spend, OTIF and quality signals so procurement teams can act before disruption hits production.',
    highlights: ['Supplier 360', 'Risk scoring', 'Quality events', 'Onboarding workflows'],
    capabilities: [
      { title: 'Performance', detail: 'Track delivery, quality and responsiveness across the base.' },
      { title: 'Risk', detail: 'Surface early warnings from logistics, finance and quality data.' },
      { title: 'Contracts', detail: 'Keep commercial terms connected to operational reality.' },
      { title: 'Onboarding', detail: 'Qualify suppliers with document checks and approvals.' },
    ],
  },
  {
    path: '/solutions/manufacturing-operations',
    category: 'Solutions',
    title: 'Manufacturing Operations',
    headline: 'Plan, produce and recover with full process context.',
    description:
      'Connect planning, batch operations, materials, OEE and quality so production teams can see risk early and respond fast.',
    highlights: ['Production planning', 'Batch operations', 'Material availability', 'OEE & risk'],
    capabilities: [
      { title: 'Planning', detail: 'Align demand, capacity and material constraints in one view.' },
      { title: 'Execution', detail: 'Monitor batches, equipment and release readiness live.' },
      { title: 'Materials', detail: 'Detect shortages and alternate sources before downtime.' },
      { title: 'Quality', detail: 'Tie quality events back to suppliers, batches and customers.' },
    ],
  },
  {
    path: '/solutions/customer-management',
    category: 'Solutions',
    title: 'Customer Management',
    headline: 'Customer 360 with order visibility and service intelligence.',
    description:
      'Give sales and service teams a connected view of accounts, orders, risk and impact—so they can protect commitments.',
    highlights: ['Customer 360', 'Order visibility', 'Service workflows', 'Account impact'],
    capabilities: [
      { title: 'Visibility', detail: 'See order status across ERP, warehouse and logistics.' },
      { title: 'Risk', detail: 'Flag accounts affected by supply or production constraints.' },
      { title: 'Service', detail: 'Equip teams with evidence-backed answers in the moment.' },
      { title: 'Insights', detail: 'Connect commercial activity to operational reality.' },
    ],
  },
  {
    path: '/solutions/rpa-automation',
    category: 'Solutions',
    title: 'RPA & Automation',
    headline: 'Automate work that spans systems, teams and judgment.',
    description:
      'Combine orchestration, AI actions and human approvals to automate operational processes—not just screen clicks.',
    highlights: ['Cross-system bots', 'Document processing', 'Approvals', 'Notifications'],
    capabilities: [
      { title: 'Orchestrate', detail: 'Coordinate steps across ERP, portals and messaging.' },
      { title: 'Assist', detail: 'Use AI to extract, classify and recommend next actions.' },
      { title: 'Govern', detail: 'Insert approval gates wherever policy requires judgment.' },
      { title: 'Observe', detail: 'Audit every automation run with full evidence trails.' },
    ],
  },
  {
    path: '/solutions/decision-intelligence',
    category: 'Solutions',
    title: 'Decision Intelligence',
    headline: 'See second- and third-order effects before you decide.',
    description:
      'Zeak makes cross-functional relationships operational—so leaders can understand impact paths and act with confidence.',
    highlights: ['Impact paths', 'Scenario views', 'Evidence packs', 'Action readiness'],
    capabilities: [
      { title: 'Relate', detail: 'Trace supplier risk to production and customer impact.' },
      { title: 'Simulate', detail: 'Compare recovery options with estimated time saved.' },
      { title: 'Explain', detail: 'Package the evidence decision-makers need.' },
      { title: 'Close the loop', detail: 'Turn decisions into governed workflow execution.' },
    ],
  },
  {
    path: '/industries/life-sciences-pharmaceuticals',
    category: 'Industries',
    title: 'Life Sciences & Pharmaceuticals',
    headline: 'Intelligence for batch, quality and regulated workflows.',
    description:
      'Support supplier quality, batch manufacturing, regulatory workflows, EBR and manufacturing intelligence with governed AI.',
    highlights: ['Batch manufacturing', 'Quality events', 'EBR', 'Regulatory readiness'],
    capabilities: [
      { title: 'Supplier quality', detail: 'Connect supplier performance to batch and release risk.' },
      { title: 'Batch ops', detail: 'Monitor production, materials and equipment context together.' },
      { title: 'Quality events', detail: 'Investigate deviations with cross-system evidence.' },
      { title: 'Compliance', detail: 'Keep auditability at the center of every action.' },
    ],
  },
  {
    path: '/industries/chemicals',
    category: 'Industries',
    title: 'Chemicals',
    headline: 'Batch manufacturing intelligence for chemical operations.',
    description:
      'Unify compliance, SDS, quality, supplier management and inventory intelligence for complex chemical value chains.',
    highlights: ['Batch manufacturing', 'Chemical compliance', 'SDS', 'Inventory intelligence'],
    capabilities: [
      { title: 'Compliance', detail: 'Keep chemical and safety context attached to operations.' },
      { title: 'Quality', detail: 'Link specs, tests and deviations to production lots.' },
      { title: 'Suppliers', detail: 'Manage raw material risk across global sources.' },
      { title: 'Inventory', detail: 'Balance availability with demand and plant constraints.' },
    ],
  },
  {
    path: '/industries/manufacturing',
    category: 'Industries',
    title: 'Manufacturing',
    headline: 'Planning, production and maintenance in one operating layer.',
    description:
      'Connect planning, OEE, maintenance, materials and supplier risk so plants can move from reactive to proactive operations.',
    highlights: ['Planning', 'OEE', 'Maintenance', 'Supplier risk'],
    capabilities: [
      { title: 'Schedule', detail: 'See capacity, materials and demand in one planning surface.' },
      { title: 'Produce', detail: 'Track OEE and production risk with live context.' },
      { title: 'Maintain', detail: 'Connect equipment events to schedule impact.' },
      { title: 'Supply', detail: 'Respond to supplier variance before it hits the line.' },
    ],
  },
  {
    path: '/industries/distribution',
    category: 'Industries',
    title: 'Distribution',
    headline: 'Inventory, fulfillment and customer intelligence together.',
    description:
      'Optimize inventory, supplier performance, warehouse operations and order fulfillment with connected enterprise context.',
    highlights: ['Inventory optimization', 'Fulfillment', 'Warehouse ops', 'Customer intelligence'],
    capabilities: [
      { title: 'Inventory', detail: 'Balance stock positions against demand and lead times.' },
      { title: 'Fulfillment', detail: 'Protect fill rates when supply or transport shifts.' },
      { title: 'Warehouse', detail: 'Connect floor activity to order and customer outcomes.' },
      { title: 'Service', detail: 'Give teams account-ready answers when orders are at risk.' },
    ],
  },
  {
    path: '/industries/consumer-products',
    category: 'Industries',
    title: 'Consumer Products',
    headline: 'Demand, supply and retail readiness in sync.',
    description:
      'Connect demand signals, materials, production and customer commitments so CPG teams can protect shelf availability.',
    highlights: ['Demand sensing', 'Supply continuity', 'Promo readiness', 'Retail service'],
    capabilities: [
      { title: 'Demand', detail: 'Connect commercial spikes to material and capacity needs.' },
      { title: 'Supply', detail: 'Detect constraints early across suppliers and plants.' },
      { title: 'Launch', detail: 'Coordinate new product readiness across functions.' },
      { title: 'Service', detail: 'Keep retail and distributor promises visible and actionable.' },
    ],
  },
  {
    path: '/developers',
    category: 'Developers',
    title: 'Platform Overview',
    headline: 'Build on the Zeak intelligence and execution layer.',
    description:
      'Use Zeak APIs, connectors and SDKs to extend enterprise context, agents and workflows into your own applications.',
    highlights: ['APIs', 'Connectors', 'Webhooks', 'Sandboxed environments'],
    capabilities: [
      { title: 'Context APIs', detail: 'Query enterprise objects and relationships securely.' },
      { title: 'Agent hooks', detail: 'Trigger and observe agent runs from your services.' },
      { title: 'Workflow APIs', detail: 'Start, approve and audit cross-system automations.' },
      { title: 'Extensibility', detail: 'Add custom connectors and application surfaces.' },
    ],
  },
  {
    path: '/developers/apis',
    category: 'Developers',
    title: 'APIs',
    headline: 'Programmatic access to context, agents and workflows.',
    description:
      'REST and event-driven APIs for reading enterprise context, launching agent actions and orchestrating approvals.',
    highlights: ['REST APIs', 'Events', 'Auth via SSO', 'Versioned contracts'],
    capabilities: [
      { title: 'Objects', detail: 'Read suppliers, orders, batches and related entities.' },
      { title: 'Actions', detail: 'Request agent recommendations and execute workflows.' },
      { title: 'Audit', detail: 'Retrieve evidence and action history for compliance.' },
      { title: 'Security', detail: 'Authenticate with enterprise identity and scoped tokens.' },
    ],
  },
  {
    path: '/developers/connectors',
    category: 'Developers',
    title: 'Connectors',
    headline: 'Ship integrations faster with reusable connectors.',
    description:
      'Use prebuilt connectors for ERP, CRM, MES, data platforms and collaboration tools—or extend with custom adapters.',
    highlights: ['ERP connectors', 'Plant systems', 'Data lakes', 'Custom adapters'],
    capabilities: [
      { title: 'Catalog', detail: 'Browse certified connectors for major enterprise systems.' },
      { title: 'Mapping', detail: 'Align source fields to Zeak business objects.' },
      { title: 'Sync modes', detail: 'Choose batch, near-real-time or event-driven sync.' },
      { title: 'Custom', detail: 'Build private connectors for internal systems.' },
    ],
  },
  {
    path: '/developers/documentation',
    category: 'Developers',
    title: 'Documentation',
    headline: 'Guides, references and examples for Zeak builders.',
    description:
      'Everything you need to authenticate, query context, run agents and deploy applications on Zeak.',
    highlights: ['Quickstarts', 'API reference', 'SDK examples', 'Security guides'],
    capabilities: [
      { title: 'Quickstart', detail: 'Connect a sandbox tenant and call your first API.' },
      { title: 'Reference', detail: 'Explore endpoints, schemas and error contracts.' },
      { title: 'Patterns', detail: 'Copy proven patterns for agents and workflows.' },
      { title: 'Ops', detail: 'Learn deployment, monitoring and governance practices.' },
    ],
  },
  {
    path: '/resources/insights',
    category: 'Resources',
    title: 'Insights',
    headline: 'Perspectives on enterprise intelligence and execution.',
    description:
      'Explore how leading operations teams connect systems, deploy agents and turn insight into governed action.',
    highlights: ['Thought leadership', 'Playbooks', 'Benchmarks', 'Architecture notes'],
    capabilities: [
      { title: 'Operating models', detail: 'How teams structure AI and automation ownership.' },
      { title: 'Architecture', detail: 'Patterns for intelligence layers above ERP.' },
      { title: 'Governance', detail: 'Practical controls for agentic workflows.' },
      { title: 'ROI', detail: 'Where enterprises see measurable process gains.' },
    ],
  },
  {
    path: '/resources/blog',
    category: 'Resources',
    title: 'Blog',
    headline: 'Product updates, stories and field notes from Zeak.',
    description:
      'Follow product releases, customer stories and practical guidance from the Zeak team.',
    highlights: ['Product news', 'Customer stories', 'How-tos', 'Announcements'],
    capabilities: [
      { title: 'Releases', detail: 'Learn what shipped and how to use it.' },
      { title: 'Field notes', detail: 'See how operators apply Zeak day to day.' },
      { title: 'How-tos', detail: 'Step-through guides for common workflows.' },
      { title: 'Community', detail: 'Share patterns across industries and roles.' },
    ],
  },
  {
    path: '/resources/case-studies',
    category: 'Resources',
    title: 'Case Studies',
    headline: 'Proof from real enterprise operations.',
    description:
      'See how manufacturers, life sciences and distribution teams use Zeak to reduce risk and accelerate decisions.',
    highlights: ['Manufacturing', 'Life sciences', 'Distribution', 'Procurement'],
    capabilities: [
      { title: 'Supplier risk', detail: 'Earlier detection and faster recovery paths.' },
      { title: 'Production', detail: 'Fewer schedule surprises with connected context.' },
      { title: 'Service', detail: 'Better customer answers when orders are threatened.' },
      { title: 'Automation', detail: 'Governed execution across ERP and plant systems.' },
    ],
  },
  {
    path: '/resources/documentation',
    category: 'Resources',
    title: 'Documentation',
    headline: 'Product docs for operators, admins and builders.',
    description:
      'Find user guides, admin configuration, security manuals and developer references in one place.',
    highlights: ['User guides', 'Admin docs', 'Security', 'Developer refs'],
    capabilities: [
      { title: 'Operators', detail: 'Learn daily workflows for agents and applications.' },
      { title: 'Admins', detail: 'Configure tenants, roles and integrations.' },
      { title: 'Security', detail: 'Review controls, deployment and compliance topics.' },
      { title: 'Builders', detail: 'Jump into APIs, connectors and app builder docs.' },
    ],
  },
  {
    path: '/company/about',
    category: 'Company',
    title: 'About',
    headline: 'Building the next operating layer for the enterprise.',
    description:
      'Zeak helps enterprises connect systems, understand processes and execute with AI—securely, in their own cloud.',
    highlights: ['Mission-driven', 'Enterprise-first', 'Security by design', 'Operator focused'],
    capabilities: [
      { title: 'Mission', detail: 'Make every enterprise process intelligent and actionable.' },
      { title: 'Approach', detail: 'Augment existing systems instead of replacing them.' },
      { title: 'Team', detail: 'Operators, engineers and enterprise architects building together.' },
      { title: 'Trust', detail: 'Security, governance and customer-cloud deployment first.' },
    ],
  },
  {
    path: '/company/contact',
    category: 'Company',
    title: 'Contact',
    headline: 'Talk to Zeak about your operating challenges.',
    description:
      'Book a demo, ask about deployment options, or speak with our team about supplier, manufacturing or customer workflows.',
    highlights: ['Book a demo', 'Deployment help', 'Partnerships', 'Support'],
    capabilities: [
      { title: 'Sales', detail: 'hello@zeak.ai — schedule a platform walkthrough.' },
      { title: 'Support', detail: 'Get help with tenants, connectors and workflows.' },
      { title: 'Partners', detail: 'Explore system integrator and cloud partnerships.' },
      { title: 'Press', detail: 'Reach our team for media and analyst inquiries.' },
    ],
  },
];

export const pageByPath = Object.fromEntries(pages.map((page) => [page.path, page]));

export function relatedPages(path: string, limit = 3): PageContent[] {
  const current = pageByPath[path];
  if (!current) return pages.slice(0, limit);
  return pages.filter((page) => page.category === current.category && page.path !== path).slice(0, limit);
}
