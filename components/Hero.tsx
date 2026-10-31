
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WorkflowIllustration } from "@/components/WorkflowIllustration";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:65px_65px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/[0.08] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-[10px] font-bold tracking-[0.22em] text-violet-200 sm:text-xs">
              AI AUTOMATION FOR GROWING BUSINESSES
            </span>

            <span className="text-cyan-400">✦</span>
          </div>

          <h1 className="font-display text-5xl leading-[1.05] font-extrabold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Turn Busywork
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Into Growth.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Give your team more time to focus on what matters.
            NexusAI designs AI agents and connected workflows that
            streamline operations, respond to customers faster,
            and help your business grow with confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">
              Let's Talk About Your Workflow
              <span className="ml-2">↗</span>
            </Button>

            <Button href="/projects" variant="secondary">
              Explore Demo Projects
              <span className="ml-2">→</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-lg grid-cols-3 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">
                SMARTER
              </p>
              <p className="mt-2 text-[10px] font-medium text-zinc-500 sm:text-xs">
                Business Operations
              </p>
            </div>

            <div className="border-x border-white/10 px-4">
              <p className="text-2xl font-extrabold text-white sm:text-3xl">
                FASTER
              </p>
              <p className="mt-2 text-[10px] font-medium text-zinc-500 sm:text-xs">
                Customer Response
              </p>
            </div>

            <div className="pl-4">
              <p className="text-2xl font-extrabold text-white sm:text-3xl">
                SCALABLE
              </p>
              <p className="mt-2 text-[10px] font-medium text-zinc-500 sm:text-xs">
                Systems That Grow
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-[100px]" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101019]/80 p-3 shadow-2xl shadow-violet-950/40 backdrop-blur-xl sm:p-5">
            {/* AI IMAGE */}
            <div className="group relative h-56 overflow-hidden rounded-2xl sm:h-72">
             <video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  aria-hidden="true"
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
>
  <source src="/videos/ai-network.mp4" type="video/mp4" />
</video>

              <div className="absolute inset-0 bg-gradient-to-t from-[#101019] via-violet-950/20 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">
                  NEXT GENERATION TECHNOLOGY
                </span>
                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Intelligence in Motion.
                </h3>
              </div>

              <div className="absolute right-4 top-4 rounded-full border border-cyan-300/20 bg-black/50 px-3 py-2 backdrop-blur-xl">
                <span className="text-[10px] font-bold text-cyan-300">
                  ✦ AI POWERED
                </span>
              </div>
            </div>

            {/* WORKFLOW HEADER */}
            <div className="mb-4 mt-5 flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                <span className="text-xs font-semibold text-zinc-300">
                  NexusAI Intelligence
                </span>
              </div>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold text-cyan-300">
                SYSTEM ACTIVE
              </span>
            </div>

            <WorkflowIllustration />

            {/* STATUS */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
              <div>
                <p className="text-xs font-semibold text-white">
                  Automation Engine
                </p>
                <p className="mt-1 text-[10px] text-zinc-500">
                  Intelligent workflows running
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-[10px] font-bold text-emerald-400">
                  ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* FLOATING BADGE */}
          <div className="absolute -right-3 -top-5 rounded-xl border border-violet-400/20 bg-[#171323] px-4 py-3 shadow-xl shadow-violet-950/30 sm:-right-6">
            <p className="text-[10px] font-semibold text-zinc-400">
              POWERED BY
            </p>
            <p className="mt-1 text-sm font-bold text-violet-300">
              Artificial Intelligence
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
