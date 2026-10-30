import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact NexusAI to discuss AI automation, intelligent workflows, and business solutions.",
};

const services = [
  "AI Agents and Chatbots",
  "Business Workflow Automation",
  "CRM and Lead Management",
  "API Integrations",
  "AI Customer Support",
];

export default function ContactPage() {
  const email = site.contactPlaceholder.email;

  const emailSubject = encodeURIComponent(
    "Let's Discuss an AI Automation Project"
  );

  const emailBody = encodeURIComponent(
    "Hello NexusAI,\n\nI would like to discuss an AI automation project.\n\nBusiness / Industry:\nProject idea:\nMain challenge:\n\nLooking forward to hearing from you."
  );

  return (
    <main id="main" className="flex-1">
      <section className="relative isolate overflow-hidden py-24 sm:py-32">

        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />
          <div className="absolute -right-40 top-60 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:65px_65px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>

        <Container className="relative">

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-[10px] font-bold tracking-[0.22em] text-cyan-200 uppercase">
                Contact NexusAI
              </span>
            </div>

            <h1 className="font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl">
              Let's Build Something
              <span className="mt-2 block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Intelligent Together.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Have a business challenge or an idea for automation?
              Tell us what you want to improve. Let's explore how
              AI can make your operations smarter.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Main Contact Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-violet-400/20 bg-[#101018] p-8 shadow-2xl shadow-violet-950/20 sm:p-10">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/15 blur-[100px]" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl text-violet-300">
                  ✉
                </div>

                <h2 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
                  Start a Conversation
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                  Every great automation project starts with a conversation.
                  Share your idea, your challenges, or the tasks you want
                  to automate.
                </p>

                <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
                    Email Address
                  </p>

                  <a
                    href={`mailto:${email}`}
                    className="mt-3 block break-all text-lg font-semibold text-cyan-300 transition hover:text-white sm:text-xl"
                  >
                    {email}
                  </a>
                </div>

                <div className="mt-8">
                  <Button href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}>
                    Send Us a Message
                    <span className="ml-2">↗</span>
                  </Button>
                </div>

                <p className="mt-5 text-xs text-zinc-500">
                  Your email application will open with a pre-filled message.
                </p>

              </div>
            </div>

            {/* Services Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#101018] p-8 sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                ✦
              </div>

              <h2 className="mt-8 text-2xl font-bold text-white">
                What We Can Help With
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                We design intelligent systems to simplify business
                operations and reduce repetitive work.
              </p>

              <ul className="mt-8 space-y-5">
                {services.map((service, index) => (
                  <li key={service} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-xs font-bold text-violet-300">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-medium text-zinc-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 border-t border-white/[0.07] pt-6">
                <p className="text-xs leading-6 text-zinc-500">
                  Not sure what you need? Tell us about your business
                  and we can explore possible automation opportunities.
                </p>
              </div>

            </div>
          </div>
<ContactForm />
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-sm text-zinc-500">
              Prefer to explore our work first?
            </p>

            <a
              href="/projects"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-violet-300 transition hover:text-cyan-300"
            >
              Explore Our Projects
              <span>→</span>
            </a>
          </div>

        </Container>
      </section>
    </main>
  );
}
