"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#08080c]/85 backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between gap-5">

        {/* BRAND */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-lg shadow-violet-600/30">
            <span className="text-xl font-black text-white">N</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white">
              NEXUS<span className="text-violet-400">AI</span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.28em] text-zinc-500">
              AUTOMATION STUDIO
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.025] p-1.5 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                isActive(link.href)
                  ? "bg-violet-500/15 text-white shadow-[inset_0_0_15px_rgba(139,92,246,0.12)]"
                  : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <Link
          href="/contact"
          className="group relative hidden items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/40 lg:inline-flex"
        >
          <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />
          <span className="relative">Let's Talk</span>
          <span className="relative text-cyan-200 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-white transition hover:border-cyan-400/40 lg:hidden"
        >
          <span className="text-2xl">{open ? "×" : "☰"}</span>
        </button>
      </Container>

      {/* MOBILE MENU */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/[0.07] bg-[#08080c] lg:hidden"
        >
          <Container className="flex flex-col gap-3 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-xl border px-5 py-3.5 text-sm font-semibold transition ${
                  isActive(link.href)
                    ? "border-violet-500/30 bg-violet-500/10 text-cyan-300"
                    : "border-white/[0.05] text-zinc-300 hover:bg-white/[0.05]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-4 text-sm font-bold text-white"
            >
              Let's Talk <span>↗</span>
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}