import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NexusAI, our vision, and our approach to intelligent business automation.",
};

export default function AboutPage() {
  return (
    <main id="main" className="flex-1">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />

        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Text */}
            <div>
              <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-bold tracking-widest text-violet-300">
                ABOUT NEXUSAI
              </span>

              <h1 className="mt-7 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                Building a Smarter
                <span className="mt-2 block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  Digital Future.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                NexusAI focuses on designing intelligent automation systems
                that help businesses reduce repetitive work, improve
                efficiency, and create better customer experiences.
              </p>

              <div className="mt-9">
                <Button href="/contact">
                  Let's Work Together ↗
                </Button>
              </div>
            </div>

            {/* Main Image */}
            <div className="group relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-violet-600/30 to-cyan-500/20 blur-2xl opacity-60 transition duration-700 group-hover:opacity-100" />

              <div className="relative h-[350px] overflow-hidden rounded-[2rem] border border-white/10 sm:h-[450px]">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=90"
                  alt="Digital technology and global connectivity"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-black/10 to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                    THE FUTURE IS INTELLIGENT
                  </span>
                  <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Technology Meets Innovation.
                  </h2>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-violet-400/20 bg-[#171323] px-5 py-4 shadow-xl sm:-left-7">
                <p className="text-xs text-zinc-400">Our Focus</p>
                <p className="mt-1 font-bold text-violet-300">
                  AI & Automation
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MISSION & VISION */}
      <section className="relative overflow-hidden py-24">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-cyan-300">
              WHAT DRIVES US
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-5xl">
              Our Mission & Vision
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              We believe intelligent technology should make businesses
              more efficient, connected, and ready for the future.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <article className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#101018] transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=85"
                  alt="Team collaborating on innovative ideas"
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101018] to-transparent" />
                <span className="absolute bottom-5 left-7 text-xs font-bold tracking-widest text-violet-300">
                  OUR MISSION
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">
                  Making Automation Accessible.
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  To make intelligent automation accessible to businesses
                  by creating practical AI-powered systems that solve
                  everyday operational challenges.
                </p>
              </div>
            </article>

            {/* Vision */}
            <article className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#101018] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=85"
                  alt="Technology professionals working together"
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101018] to-transparent" />
                <span className="absolute bottom-5 left-7 text-xs font-bold tracking-widest text-cyan-300">
                  OUR VISION
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">
                  A Smarter Business Future.
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  To help businesses move toward a smarter future where
                  technology handles repetitive processes and people
                  focus on creativity, strategy, and growth.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24 pt-10">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-[#101018] p-8 text-center sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />

            <div className="relative">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                LET'S CREATE SOMETHING NEW
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-5xl">
                Let's Build Something Intelligent.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-8 text-zinc-400">
                Have an idea or a business process you want to automate?
                Let's explore what is possible.
              </p>

              <div className="mt-8">
                <Button href="/contact">
                  Get in Touch ↗
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
