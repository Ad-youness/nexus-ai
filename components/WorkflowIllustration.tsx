export function WorkflowIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-3xl border border-violet-400/20 bg-[#0d0d16] p-5 shadow-[0_30px_100px_-35px_rgba(124,58,237,0.45)] sm:p-7">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-[100px]" />

      {/* Dashboard Header */}
      <div className="relative mb-8 flex items-center justify-between border-b border-white/[0.07] pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-lg text-violet-300">
            ✦
          </div>

          <div>
            <p className="text-sm font-bold text-white">AI Control Center</p>
            <p className="mt-1 text-[10px] text-zinc-500">
              Intelligent workflow overview
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[9px] font-bold tracking-wider text-emerald-300">
            LIVE
          </span>
        </div>
      </div>

      {/* Workflow Diagram */}
      <div className="relative">

        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs font-semibold text-zinc-300">
            Workflow automation
          </p>
          <span className="text-[10px] text-zinc-500">Flow / 001</span>
        </div>

        <svg
          viewBox="0 0 420 340"
          className="relative z-10 h-auto w-full overflow-visible"
          role="img"
          aria-labelledby="workflow-title workflow-desc"
        >
          <title id="workflow-title">
            NexusAI automated workflow
          </title>

          <desc id="workflow-desc">
            Incoming leads pass through an AI agent and connect to CRM,
            WhatsApp support, and calendar booking systems.
          </desc>

          <defs>
            <linearGradient id="nexus-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>

            <radialGradient id="nexus-glow">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center Glow */}
          <circle
            cx="210"
            cy="170"
            r="100"
            fill="url(#nexus-glow)"
            className="motion-safe:animate-pulse"
          />

          {/* Connection Lines */}
          <g
            fill="none"
            stroke="url(#nexus-line)"
            strokeWidth="2"
            strokeDasharray="7 8"
            strokeLinecap="round"
          >
            <path
              d="M85 75 C140 75 155 145 210 170"
              className="motion-safe:animate-dash"
            />
            <path
              d="M335 75 C280 75 265 145 210 170"
              className="motion-safe:animate-dash-slow"
            />
            <path
              d="M85 265 C140 265 155 195 210 170"
              className="motion-safe:animate-dash-slow"
            />
            <path
              d="M335 265 C280 265 265 195 210 170"
              className="motion-safe:animate-dash"
            />
          </g>

          {/* Workflow Nodes */}
          <Node x={85} y={75} label="Lead Capture" sub="Forms / Website" icon="↗" />
          <Node x={335} y={75} label="CRM System" sub="Data / Contacts" icon="▣" />
          <Node x={85} y={265} label="WhatsApp" sub="AI Customer Support" icon="◉" />
          <Node x={335} y={265} label="Calendar" sub="Smart Scheduling" icon="◷" />

          {/* Main AI Agent */}
          <g transform="translate(142 132)">
            <rect
              width="136"
              height="76"
              rx="18"
              fill="#1c1630"
              stroke="#a78bfa"
              strokeWidth="1.5"
            />

            <rect
              x="1"
              y="1"
              width="134"
              height="74"
              rx="17"
              fill="none"
              stroke="#8b5cf6"
              strokeOpacity="0.2"
            />

            <circle
              cx="23"
              cy="27"
              r="11"
              fill="#8b5cf6"
              fillOpacity="0.2"
              stroke="#a78bfa"
            />

            <text
              x="23"
              y="31"
              textAnchor="middle"
              fontSize="12"
              fill="#c4b5fd"
            >
              ✦
            </text>

            <text
              x="42"
              y="28"
              fontSize="12"
              fontWeight="700"
              fill="white"
            >
              AI Agent
            </text>

            <text
              x="68"
              y="52"
              textAnchor="middle"
              fontSize="10"
              fill="#a78bfa"
            >
              Think • Decide • Act
            </text>
          </g>

        </svg>
      </div>

      {/* Bottom Status */}
      <div className="relative mt-6 grid grid-cols-2 gap-3">

        <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="text-[10px] text-zinc-400">
              AI Processing
            </span>
          </div>
          <p className="mt-2 text-sm font-bold text-white">
            Intelligent
          </p>
        </div>

        <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-[10px] text-zinc-400">
              Workflow Status
            </span>
          </div>
          <p className="mt-2 text-sm font-bold text-cyan-300">
            Connected
          </p>
        </div>

      </div>
    </div>
  );
}

function Node({
  x,
  y,
  label,
  sub,
  icon,
}: {
  x: number;
  y: number;
  label: string;
  sub: string;
  icon: string;
}) {
  return (
    <g transform={`translate(${x - 53} ${y - 28})`}>
      <rect
        width="106"
        height="56"
        rx="12"
        fill="#171722"
        stroke="#ffffff"
        strokeOpacity="0.13"
        strokeWidth="1"
      />

      <circle
        cx="17"
        cy="19"
        r="9"
        fill="#8b5cf6"
        fillOpacity="0.16"
      />

      <text
        x="17"
        y="23"
        textAnchor="middle"
        fontSize="11"
        fill="#c4b5fd"
      >
        {icon}
      </text>

      <text
        x="31"
        y="21"
        fontSize="10"
        fontWeight="700"
        fill="#fafafa"
      >
        {label}
      </text>

      <text
        x="12"
        y="42"
        fontSize="8"
        fill="#a1a1aa"
      >
        {sub}
      </text>
    </g>
  );
}