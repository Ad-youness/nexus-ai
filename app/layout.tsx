import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "NexusAI — AI Automation Agency",
    template: "%s | NexusAI",
  },

  description:
    "NexusAI designs AI agents, workflow automation, and intelligent business systems for qualification, support, scheduling, and operations.",

  applicationName: "NexusAI",

  keywords: [
    "AI automation",
    "AI agents",
    "workflow automation",
    "CRM automation",
    "AI customer support",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NexusAI — Build Smarter. Automate Everything.",
    description:
      "Transform your business with intelligent AI agents and automation.",
    siteName: "NexusAI",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "NexusAI — Build Smarter. Automate Everything.",
    description:
      "Premium AI automation for agents, workflows, and intelligent business operations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-zinc-50 focus:px-4 focus:py-2 focus:text-sm focus:text-zinc-950"
        >
          Skip to content
        </a>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
