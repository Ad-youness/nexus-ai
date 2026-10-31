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
      "Deploy AI assistants that answer questions, qualify requests, retrieve information, and complete approved tasks across your business tools.",
    accent: "purple" as const,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive processes—from form submissions and notifications to approvals and reporting—so tasks move forward reliably.",
    accent: "cyan" as const,
  },
  {
    title: "AI Customer Support",
    description:
      "Respond to common questions, organize incoming requests, and route complex conversations to your team with the right context.",
    accent: "lime" as const,
  },
  {
    title: "CRM Automation",
    description:
      "Automatically update customer records, assign new leads, track activity, and trigger timely follow-ups in your CRM.",
    accent: "purple" as const,
  },
  {
    title: "AI Integrations",
    description:
      "Connect the apps you already use, including email, calendars, forms, and CRMs, to keep business information flowing.",
    accent: "cyan" as const,
  },
  {
    title: "Lead Qualification",
    description:
      "Capture inquiries, identify intent, and prioritize promising prospects so your team can focus on qualified opportunities.",
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
      "A website inquiry arrives, its details and intent are extracted, a lead score is prepared, and the right team member receives a structured summary for review.",
  },
  {
    title: "Customer support workflows",
    description:
      "Incoming messages are categorized, suggested replies are prepared from approved information, and sensitive or complex cases are handed to a human with context.",
  },
  {
    title: "Appointment orchestration",
    description:
      "A customer requests a time, the workflow checks connected availability, sends booking details, and prepares reminders or rescheduling steps.",
  },
  {
    title: "Repetitive business tasks",
    description:
      "Recurring admin work—such as updating records, organizing form data, preparing summaries, and sending notifications—runs through connected workflows.",
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
