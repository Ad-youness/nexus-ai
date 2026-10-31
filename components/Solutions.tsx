import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/lib/content";

const solutionStyles = [
{
color: "text-violet-300",
bg: "bg-violet-500/10",
border: "group-hover:border-violet-400/30",
image:
"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=85",
},
{
color: "text-cyan-300",
bg: "bg-cyan-500/10",
border: "group-hover:border-cyan-400/30",
image:
"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=85",
},
{
color: "text-purple-300",
bg: "bg-purple-500/10",
border: "group-hover:border-purple-400/30",
image:
"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=85",
},
{
color: "text-lime-300",
bg: "bg-lime-500/10",
border: "group-hover:border-lime-400/30",
image:
"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=85",
},
];

export function Solutions() {
return ( <section
   id="solutions"
   className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
 >
{/* Background Glow */} <div
     className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/[0.07] blur-[120px]"
     aria-hidden="true"
   />

```
  <Container className="relative">
    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
        <span className="text-cyan-300">✦</span>
        <span className="text-[10px] font-bold tracking-[0.22em] text-cyan-200 uppercase">
          Business Solutions
        </span>
      </div>

      <SectionHeading
        eyebrow="Solutions"
        title="See What Automation Can Do for Your Business."
        description="Here are practical examples of how connected AI systems can handle repetitive steps, support your team, and create a smoother customer experience."
      />
    </div>

    {/* Solutions Grid */}
    <ul className="mt-16 grid gap-7 md:grid-cols-2">
      {solutions.map((solution, index) => {
        const style = solutionStyles[index % solutionStyles.length];

        return (
          <li key={solution.title}>
            <article
              className={`group relative h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-[#101018] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${style.border}`}
            >
              {/* Solution Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  role="img"
                  aria-label={`${solution.title} illustration`}
                  className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${style.image}")`,
                  }}
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101018] via-black/20 to-transparent" />

                {/* Number */}
                <span
                  className={`absolute right-6 top-6 text-lg font-extrabold ${style.color}`}
                >
                  0{index + 1}
                </span>

                {/* Image Label */}
                <span className="absolute bottom-5 left-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[10px] font-bold tracking-widest text-white backdrop-blur-xl">
                  WORKFLOW EXAMPLE
                </span>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-violet-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="relative p-7 sm:p-9">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200">
                    {solution.title}
                  </h3>

                  <span
                    className={`text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${style.color}`}
                  >
                    ↗
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {solution.description}
                </p>

                <div className="mt-7 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="text-[10px] font-bold tracking-[0.18em] text-zinc-500 uppercase">
                    Intelligent Automation
                  </span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-700 group-hover:w-full" />
            </article>
          </li>
        );
      })}
    </ul>
  </Container>
</section>
);
}
