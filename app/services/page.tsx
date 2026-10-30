import type { Metadata } from "next";
import { Services } from "@/components/Services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description:
    "Explore NexusAI services: AI agents, workflow automation, customer support, CRM automation, and intelligent integrations.",
};

export default function ServicesPage() {
  return (
    <main id="main" className="flex-1">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden py-28 sm:py-36">

        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />
          <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:65px_65px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <Container className="relative">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-5 py-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-[10px] font-bold tracking-[0.22em] text-violet-200 uppercase">
                NexusAI Capabilities
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Intelligent Automation.
              <span className="mt-3 block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Built for Business.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              We design AI-powered systems that eliminate repetitive tasks,
              streamline operations, and help businesses focus on what
              matters most: growth.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/contact">
                Discuss Your Project
                <span className="ml-2">↗</span>
              </Button>

              <Button href="/projects" variant="secondary">
                Explore Our Work
                <span className="ml-2">→</span>
              </Button>
            </div>

            {/* Bottom Highlights */}
            <div className="mx-auto mt-16 grid max-w-xl grid-cols-3 border-t border-white/[0.08] pt-8">

              <div>
                <p className="text-xl font-extrabold text-violet-300 sm:text-2xl">
                  AI
                </p>
                <p className="mt-2 text-[10px] text-zinc-500 sm:text-xs">
                  Intelligent Agents
                </p>
              </div>

              <div className="border-x border-white/[0.08]">
                <p className="text-xl font-extrabold text-cyan-300 sm:text-2xl">
                  API
                </p>
                <p className="mt-2 text-[10px] text-zinc-500 sm:text-xs">
                  Smart Integrations
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-purple-300 sm:text-2xl">
                  24/7
                </p>
                <p className="mt-2 text-[10px] text-zinc-500 sm:text-xs">
                  Automated Workflows
                </p>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES COMPONENT */}
      <Services />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">

        <Container>
          <div className="group relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-[#0d0b16] px-6 py-16 text-center shadow-[0_30px_100px_-30px_rgba(124,58,237,0.2)] sm:px-12 sm:py-20">

            {/* Glow */}
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl">

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-cyan-200 uppercase">
                ✦ Let's Work Together
              </span>

              <h2 className="mt-7 font-display text-3xl leading-tight font-extrabold text-white sm:text-5xl">
                Ready to Make Your Business
                <span className="mt-2 block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  Work Smarter?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                Let's identify the processes consuming your time
                and explore how intelligent automation can improve
                your business operations.
              </p>

              <div className="mt-9 flex justify-center">
                <Button href="/contact">
                  Start a Conversation
                  <span className="ml-2">↗</span>
                </Button>
              </div>

            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
