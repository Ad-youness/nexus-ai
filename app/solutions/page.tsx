import type { Metadata } from "next";
import { Solutions } from "@/components/Solutions";

export const metadata: Metadata = {
  title: "Business Solutions",
  description:
    "Discover how NexusAI helps businesses improve operations through intelligent AI automation solutions.",
};

export default function SolutionsPage() {
  return (
    <main id="main" className="flex-1">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Business Solutions
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Smarter Systems.
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Better Business.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Discover how intelligent automation can simplify your operations,
            improve customer experiences, and accelerate business growth.
          </p>
        </div>
      </section>

      <Solutions />
    </main>
  );
}