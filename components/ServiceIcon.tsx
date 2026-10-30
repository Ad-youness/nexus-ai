type ServiceIconName =
  | "AI Agents"
  | "Workflow Automation"
  | "AI Customer Support"
  | "CRM Automation"
  | "AI Integrations"
  | "Lead Qualification";

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  const common = "h-6 w-6";

  switch (name) {
    case "AI Agents":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 5V3M12 21v-2M5 12H3M21 12h-2M7.05 7.05 5.64 5.64M18.36 18.36l-1.41-1.41M16.95 7.05l1.41-1.41M5.64 18.36l1.41-1.41"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Workflow Automation":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <rect x="3" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="15" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M9 7h3.5A3.5 3.5 0 0 1 16 10.5V14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "AI Customer Support":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M5 12a7 7 0 0 1 14 0v4.5a1.5 1.5 0 0 1-1.5 1.5H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect x="4" y="11" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="16" y="11" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "CRM Automation":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M4.5 18c.7-2.4 2.7-4 5.5-4s4.8 1.6 5.5 4M16 14c1.8 0 3.4.8 4.3 2.1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "AI Integrations":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M8 12H5a2 2 0 1 1 0-4h3M16 12h3a2 2 0 1 0 0-4h-3M8 16H5a2 2 0 1 0 0 4h3M16 16h3a2 2 0 1 1 0 4h-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect x="8" y="8" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "Lead Qualification":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M4 19 10.2 8.4a2 2 0 0 1 3.6 0L20 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
