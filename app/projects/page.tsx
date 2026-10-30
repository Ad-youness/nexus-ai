import type { Metadata } from "next";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore NexusAI AI automation demos, intelligent agents, and workflow solutions.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="flex-1">
      <section className="relative overflow-hidden py-28 sm:py-36">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-5 py-2 text-xs font-bold tracking-widest text-violet-300">
              NEXUSAI PORTFOLIO
            </span>

            <h1 className="mt-8 font-display text-4xl font-extrabold text-white sm:text-7xl">
              Ideas Into
              <span className="mt-3 block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Intelligent Solutions.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Explore practical demonstrations of AI agents,
              intelligent chatbots, and automated business workflows.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/contact">
                Build a Similar Solution ↗
              </Button>

              <Button href="/services" variant="secondary">
                Explore Services →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FeaturedProjects />

      <section className="py-24">
        <Container>
          <div className="rounded-3xl border border-violet-400/20 bg-[#101018] p-10 text-center sm:p-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
              Have an Idea?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-zinc-400">
              Let's build an intelligent solution for your business.
            </p>

            <div className="mt-8">
              <Button href="/contact">
                Discuss Your Project ↗
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
