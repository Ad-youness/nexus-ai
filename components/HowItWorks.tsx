import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

const stepStyles = [
  {
    color: "text-violet-300",
    border: "group-hover:border-violet-400/40",
    glow: "group-hover:shadow-violet-500/10",
    gradient: "from-violet-500",
  },
  {
    color: "text-cyan-300",
    border: "group-hover:border-cyan-400/40",
    glow: "group-hover:shadow-cyan-500/10",
    gradient: "from-cyan-500",
  },
  {
    color: "text-purple-300",
    border: "group-hover:border-purple-400/40",
    glow: "group-hover:shadow-purple-500/10",
    gradient: "from-purple-500",
  },
  {
    color: "text-cyan-300",
    border: "group-hover:border-cyan-400/40",
    glow: "group-hover:shadow-cyan-500/10",
    gradient: "from-cyan-500",
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
            <span className="text-cyan-300">✦</span>
            <span className="text-[10px] font-bold tracking-[0.22em] text-cyan-200 uppercase">
              Our Process
            </span>
          </div>

          <SectionHeading
            eyebrow="How It Works"
            title="From Manual Work to Intelligent Automation."
            description="A clear, structured process to transform repetitive operations into intelligent systems that work for your business."
          />
        </div>

        {/* Process Steps */}
        <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const style = stepStyles[index % stepStyles.length];

            return (
              <li key={step.title} className="relative">
                {/* Connector */}
                {index < processSteps.length - 1 && (
                  <div
                    className="absolute left-[calc(100%+1px)] top-12 z-20 hidden h-px w-6 bg-gradient-to-r from-violet-400/50 to-cyan-400/50 lg:block"
                    aria-hidden="true"
                  />
                )}

                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-[#101018] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#151321] hover:shadow-2xl ${style.border} ${style.glow} motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
                >
                  {/* Decorative Glow */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/0 blur-[70px] transition-all duration-500 group-hover:bg-violet-500/15"
                    aria-hidden="true"
                  />

                  {/* Step Number */}
                  <div className="relative flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] font-display text-xl font-extrabold ${style.color}`}
                    >
                      {step.number}
                    </div>

                    <span className="text-3xl font-black text-white/[0.06]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="relative mt-9">
                    <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="relative mt-auto pt-9">
                    <div className="h-px w-full bg-white/[0.07]" />

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.18em] text-zinc-500 uppercase">
                        Step {index + 1}
                      </span>

                      <span
                        className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${style.color}`}
                      >
                        →
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${style.gradient} to-cyan-400 transition-all duration-500 group-hover:w-full`}
                  />
                </article>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
