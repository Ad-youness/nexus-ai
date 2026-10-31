import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About NexusAI",
  description:
    "Discover the thinking behind NexusAI: practical AI agents, connected workflows, and automation designed around real business needs.",
};

const principles = [
  {
    number: "01",
    title: "Start with the problem",
    description:
      "Every useful automation begins with understanding the process, the people involved, and the outcome the business actually needs.",
    accent: "text-violet-300",
  },
  {
    number: "02",
    title: "Keep people in control",
    description:
      "AI should support better decisions, not create uncertainty. Clear rules, human review, and sensible handoffs matter.",
    accent: "text-cyan-300",
  },
  {
    number: "03",
    title: "Build for the real world",
    description:
      "Reliable systems account for exceptions, connected tools, and the everyday details that make a workflow useful.",
    accent: "text-violet-300",
  },
];

export default function AboutPage() {
  return (
    <main id="main" className="flex-1">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-bold tracking-widest text-violet-300">
                ABOUT NEXUSAI
              </span>
              <h1 className="mt-7 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                Less busywork.
                <span className="mt-2 block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  More possibility.
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                NexusAI is an independent AI automation initiative focused on
                making business workflows simpler, smarter, and more connected.
                We explore practical ways to use AI agents and integrations to
                reduce repetitive tasks and give teams more room to do meaningful work.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/contact">Discuss Your Workflow ↗</Button>
                <Button href="/projects" variant="secondary">Explore Demo Projects</Button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-violet-600/30 to-cyan-500/20 blur-2xl opacity-60 transition duration-700 group-hover:opacity-100" />
              <div className="relative h-[350px] overflow-hidden rounded-[2rem] border border-white/10 sm:h-[450px]">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=90"
                  alt="Abstract view of a connected digital world"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-black/10 to-transparent" />
                <div className="absolute bottom-7 left-7">
                  <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                    OUR APPROACH
                  </span>
                  <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Intelligent by design.
                  </h2>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-violet-400/20 bg-[#171323] px-5 py-4 shadow-xl sm:-left-7">
                <p className="text-xs text-zinc-400">What we focus on</p>
                <p className="mt-1 font-bold text-violet-300">Useful AI. Real workflows.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-24">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-cyan-300">
              WHAT GUIDES THE WORK
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-5xl">
              Technology should solve something.
            </h2>
            <p className="mt-5 leading-8 text-zinc-400">
              We believe good automation is not about adding AI everywhere.
              It is about choosing the right tasks, designing clear workflows,
              and making the result genuinely useful.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="glass hover-glow rounded-3xl p-8"
              >
                <span className={`text-sm font-extrabold tracking-widest ${principle.accent}`}>
                  {principle.number}
                </span>
                <h3 className="mt-6 text-xl font-bold text-white">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 sm:h-96">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85"
                alt="A team collaborating around connected technology"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10]/70 to-transparent" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-violet-300">
                FROM IDEA TO WORKFLOW
              </span>
              <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
                Practical systems. Thoughtful implementation.
              </h2>
              <p className="mt-6 leading-8 text-zinc-400">
                Our work starts by mapping a business process, identifying
                repetitive steps, and deciding where automation can help.
                From there, we design connected workflows with clear
                responsibilities and human checkpoints.
              </p>
              <p className="mt-4 leading-8 text-zinc-400">
                The projects shown on this website are concept demonstrations
                created to illustrate possible solutions. They are not presented
                as completed client deployments.
              </p>
              <div className="mt-8">
                <Button href="/services">Explore What We Build ↗</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 pt-10">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-[#101018] p-8 text-center sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
            <div className="relative">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                HAVE A PROCESS IN MIND?
              </span>
              <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-5xl">
                Let’s make work flow better.
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-8 text-zinc-400">
                Tell us what takes up your team’s time. We can explore whether
                an AI agent or connected workflow is the right fit.
              </p>
              <div className="mt-8">
                <Button href="/contact">Start a Conversation ↗</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
