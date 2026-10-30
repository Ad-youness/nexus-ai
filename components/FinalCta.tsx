import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <Container>
        <div className="group relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-[#0d0b16] px-6 py-20 text-center shadow-[0_30px_100px_-30px_rgba(124,58,237,0.25)] sm:px-12 sm:py-28">

          {/* Background Effects */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.14),transparent_45%)]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]"
            aria-hidden="true"
          />

          {/* Decorative Border */}
          <div
            className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-white/[0.05]"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/10 px-5 py-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-[10px] font-bold tracking-[0.22em] text-violet-200 uppercase">
                Let's Build Something Intelligent
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-6xl">
              Your Business Deserves
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Smarter Automation.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Let's identify the processes slowing your business down
              and explore how AI automation can help you work smarter,
              save time, and scale efficiently.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={`mailto:${site.contactPlaceholder.email}`}>
                Book a Discovery Call
                <span className="ml-2">↗</span>
              </Button>

              <Button href="/services" variant="secondary">
                Explore Our Services
                <span className="ml-2">→</span>
              </Button>
            </div>

            {/* Contact */}
            <div className="mt-10 inline-flex flex-col items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-4 sm:flex-row sm:gap-4">
              <span className="text-xs text-zinc-500">
                Contact us:
              </span>

              <a
                href={`mailto:${site.contactPlaceholder.email}`}
                className="text-sm font-semibold text-cyan-300 transition-colors hover:text-white"
              >
                {site.contactPlaceholder.email}
              </a>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}