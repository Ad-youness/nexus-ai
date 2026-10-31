import { ServiceIcon } from "@/components/ServiceIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

const accentMap = {
purple: {
icon: "text-violet-300 bg-violet-500/10 border-violet-400/20",
glow: "group-hover:shadow-violet-500/20",
number: "text-violet-400",
overlay: "from-violet-950/50",
},
cyan: {
icon: "text-cyan-300 bg-cyan-400/10 border-cyan-300/20",
glow: "group-hover:shadow-cyan-500/20",
number: "text-cyan-400",
overlay: "from-cyan-950/50",
},
lime: {
icon: "text-lime-300 bg-lime-400/10 border-lime-300/20",
glow: "group-hover:shadow-lime-500/20",
number: "text-lime-400",
overlay: "from-lime-950/50",
},
};

const serviceImages: Record<string, string> = {
"AI Agents":
"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=85",
"Workflow Automation":
"https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85",
"AI Customer Support":
"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=85",
"CRM Automation":
"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
"AI Integrations":
"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=85",
"Lead Qualification":
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=85",};

export function Services() {
return ( <section
   id="services"
   className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
 >
{/* Background Glow */} <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet-600/[0.07] blur-[120px]" />

```
  <Container className="relative">
    {/* Section Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2">
        <span className="text-violet-300">✦</span>
        <span className="text-[10px] font-bold tracking-[0.22em] text-violet-200 uppercase">
          What We Do
        </span>
      </div>

      <SectionHeading
        eyebrow="Our Services"
        title="Practical AI Systems. Measurable Business Impact."
        description="Explore the systems we can build around your operations—from customer conversations and lead handling to the tools your team uses every day."
      />
    </div>

    {/* Services Grid */}
    <ul className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const accent =
          accentMap[service.accent as keyof typeof accentMap] ??
          accentMap.purple;

        const image =
          serviceImages[service.title] ?? serviceImages["AI Agents"];

        return (
          <li key={service.title}>
            <article
              className={`group relative h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-[#101018] transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-2xl ${accent.glow}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  role="img"
                  aria-label={`${service.title} illustration`}
                  className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${image}")`,
                  }}
                />

                {/* Dark Overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${accent.overlay} via-black/20 to-transparent`}
                />

                {/* Purple Glow */}
                <div className="pointer-events-none absolute inset-0 bg-violet-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Image Number */}
                <span
                  className={`absolute right-5 top-5 text-sm font-bold tracking-widest ${accent.number}`}
                >
                  0{index + 1}
                </span>

                {/* Service Badge */}
                <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[10px] font-bold tracking-widest text-white backdrop-blur-xl">
                  NEXUSAI SERVICE
                </span>

                {/* Neon Border */}
                <div className="pointer-events-none absolute inset-0 border border-white/5 transition-all duration-500 group-hover:border-violet-400/30" />
              </div>

              {/* Content */}
              <div className="relative p-7">
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${accent.icon}`}
                >
                  <ServiceIcon name={service.title} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>

                {/* Bottom Decoration */}
                <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span className="text-[10px] font-bold tracking-[0.16em] text-zinc-500 uppercase">
                    LET'S BUILD THIS
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-500 group-hover:rotate-45 group-hover:border-violet-400/40 group-hover:bg-violet-500/10 group-hover:text-violet-300">
                    ↗
                  </span>
                </div>
              </div>

              {/* Animated Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-400 transition-all duration-700 group-hover:w-full" />
            </article>
          </li>
        );
      })}
    </ul>
  </Container>
</section>
);
}
