import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#08080c]">

      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-violet-600/[0.07] blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative py-16 sm:py-20">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-600/20">
                <span className="text-2xl font-black text-white">N</span>
              </div>

              <div>
                <p className="text-xl font-black tracking-tight text-white">
                  NEXUS<span className="text-violet-400">AI</span>
                </p>
                <p className="text-[9px] font-bold tracking-[0.28em] text-zinc-500">
                  AUTOMATION STUDIO
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
              {site.tagline}. We build AI agents and intelligent business
              workflows that help businesses operate smarter and grow faster.
            </p>

            <a
              href={`mailto:${site.contactPlaceholder.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white"
            >
              {site.contactPlaceholder.email}
              <span>↗</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-violet-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-violet-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-xs text-zinc-500">
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs font-bold tracking-wide text-zinc-400 transition hover:text-cyan-300"
          >
            Let's build something intelligent
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>

        </div>

      </Container>
    </footer>
  );
}
