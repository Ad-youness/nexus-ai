export const site = {
  name: "NexusAI",
  copyrightYear: 2026,
  tagline: "AI automation for modern operations",
  description:
    "NexusAI designs AI agents and intelligent workflows that take repetitive work off your team so you can focus on growth.",
  contactPlaceholder: {
    label: "Contact placeholder",
  email: "adamouyoones@gmail.com",
    note: "This inbox is a placeholder until live contact is connected.",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "AI Agents",
    description:
      "Purpose-built agents that research, decide, and act across your tools with clear guardrails.",
    accent: "purple" as const,
  },
  {
    title: "Workflow Automation",
    description:
      "Connect the steps between intake, approval, and delivery so work moves without handoffs.",
    accent: "cyan" as const,
  },
  {
    title: "AI Customer Support",
    description:
      "Triage, draft replies, and escalate with context so your team only handles the exceptions.",
    accent: "lime" as const,
  },
  {
    title: "CRM Automation",
    description:
      "Keep records current, route opportunities, and trigger follow-ups as soon as signals appear.",
    accent: "purple" as const,
  },
  {
    title: "AI Integrations",
    description:
      "Link your stack—email, calendar, CRM, and ops tools—into one coordinated automation layer.",
    accent: "cyan" as const,
  },
  {
    title: "Lead Qualification",
    description:
      "Score, enrich, and prioritize inbound interest so sales time goes to the right conversations.",
    accent: "lime" as const,
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map the work that slows you down: tools, handoffs, exceptions, and the outcomes that matter.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We sketch the agent roles, decision rules, and human checkpoints before any automation goes live.",
  },
  {
    number: "03",
    title: "Automate",
    description:
      "We connect the workflow, instrument it, and launch with a controlled rollout your team can trust.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We review what the agents learn, tighten prompts and routing, and expand into the next process.",
  },
] as const;

export const solutions = [
  {
    title: "Automated lead qualification",
    description:
      "Inbound forms and emails are enriched, scored, and routed to the right owner with a concise brief.",
  },
  {
    title: "Customer support workflows",
    description:
      "Tickets are classified, drafts are prepared, and urgent cases skip the queue with full conversation history.",
  },
  {
    title: "Appointment orchestration",
    description:
      "Availability, reminders, reschedules, and follow-ups stay in sync across calendar and CRM.",
  },
  {
    title: "Repetitive business tasks",
    description:
      "Status updates, file prep, data entry, and internal summaries run on a schedule instead of a to-do list.",
  },
] as const;

export const featuredProjects = [
  {
    title: "Lead Intake Agent",
    category: "Demo project",
    summary:
      "A sample agent that reads inbound inquiries, tags intent, and prepares a qualification brief for review.",
    stack: ["Intake", "Scoring", "CRM sync"],
  },
  {
    title: "Support Triage Desk",
    category: "Demo project",
    summary:
      "A sample workflow that sorts support messages, drafts replies, and flags exceptions for a human specialist.",
    stack: ["Triage", "Drafting", "Escalation"],
  },
  {
    title: "Appointment Orchestrator",
    category: "Demo project",
    summary:
      "A sample scheduler that coordinates booking, reminders, and follow-up notes without a live calendar backend.",
    stack: ["Booking", "Reminders", "Notes"],
  },
] as const;

export const footerLinks = {
  services: [
    { href: "/#services", label: "AI Agents" },
    { href: "/#services", label: "Workflow Automation" },
    { href: "/#services", label: "AI Customer Support" },
    { href: "/#services", label: "CRM Automation" },
  ],
  pages: [
    { href: "/#services", label: "Services" },
    { href: "/#solutions", label: "Solutions" },
    { href: "/#process", label: "Process" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ],
} as const;
