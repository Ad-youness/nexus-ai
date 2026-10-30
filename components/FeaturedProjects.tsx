import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    number: "01",
    category: "AI AGENT",
    title: "AI Receptionist",
    description:
      "An intelligent virtual receptionist that handles customer inquiries, answers questions, qualifies leads, and helps schedule appointments automatically.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=90",
    imageAlt: "Professional business team working together",
    technologies: ["OpenAI", "n8n", "Google Calendar", "WhatsApp"],
    featured: true,
  },
  {
    number: "02",
    category: "AI CUSTOMER SUPPORT",
    title: "AI Support Agent",
    description:
      "An AI-powered customer support assistant designed to respond to customer questions, understand requests, and provide automated support around the clock.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=90",
    imageAlt: "Technology professionals collaborating on a project",
    technologies: ["AI Agents", "OpenAI API", "WhatsApp", "n8n"],
    featured: false,
  },
  {
    number: "03",
    category: "WORKFLOW AUTOMATION",
    title: "Business Automation System",
    description:
      "A connected workflow that captures leads, organizes customer information, updates CRM records, and automates business notifications.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90",
    imageAlt: "Business analytics dashboard displayed on a computer",
    technologies: ["n8n", "CRM", "Google Sheets", "API Integrations"],
    featured: false,
  },
];

export function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet-600/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2">
            <span className="text-violet-300">✦</span>
            <span className="text-[10px] font-bold tracking-[0.22em] text-violet-200 uppercase">
              Our Portfolio
            </span>
          </div>

          <SectionHeading
            eyebrow="Selected Projects"
            title="Intelligent Systems. Real Business Possibilities."
            description="Explore concept demonstrations of AI agents and automated workflows designed to solve practical business challenges."
          />
        </div>

        {/* Featured Project */}
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <article
              key={project.number}
              className="group mt-16 grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#101018] lg:grid-cols-2"
            >
              <div className="relative min-h-[320px] overflow-hidden lg:min-h-[470px]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101018]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#101018]/30" />

                <span className="absolute left-6 top-6 rounded-full border border-cyan-300/20 bg-black/60 px-4 py-2 text-[10px] font-bold tracking-widest text-cyan-300 backdrop-blur-xl">
                  CONCEPT DEMO
                </span>

                <span className="absolute bottom-6 left-6 text-5xl font-black text-white/60">
                  {project.number}
                </span>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="text-xs font-bold tracking-[0.2em] text-violet-300">
                  {project.category}
                </span>

                <h3 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-6 text-sm leading-8 text-zinc-400 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-8">
                  <p className="mb-4 text-[10px] font-bold tracking-widest text-zinc-500">
                    TECHNOLOGIES
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-violet-400/15 bg-violet-500/[0.07] px-3 py-2 text-xs font-semibold text-violet-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-9 inline-flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
                >
                  Build a Similar Solution
                  <span>↗</span>
                </Link>
              </div>
            </article>
          ))}

        {/* Other Projects */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#101018] transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-950/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101018] via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-cyan-300/20 bg-black/60 px-4 py-2 text-[10px] font-bold tracking-widest text-cyan-300 backdrop-blur-xl">
                    CONCEPT DEMO
                  </span>

                  <span className="absolute bottom-5 right-5 text-3xl font-black text-white/70">
                    {project.number}
                  </span>
                </div>

                <div className="p-8">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-extrabold text-white transition-colors group-hover:text-violet-300">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-3 py-2 text-[10px] font-semibold text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-white/[0.07] pt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-violet-300 transition hover:text-cyan-300"
                    >
                      Build Similar
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Portfolio Notice */}
        <div className="mt-12 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-center">
          <p className="text-xs leading-6 text-zinc-400">
            <span className="font-bold text-cyan-300">
              Portfolio Note:
            </span>{" "}
            These are concept demonstrations illustrating potential
            automation solutions. They are not presented as completed
            client projects.
          </p>
        </div>
      </Container>
    </section>
  );
}