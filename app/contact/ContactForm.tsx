"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );

    formData.append("subject", "New NexusAI Website Inquiry");
    formData.append("from_name", "NexusAI Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Your message has been sent successfully!");
        form.reset();
      } else {
        setStatus("error");
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Unable to send your message. Please try again.");
    }
  }

  const inputStyle =
    "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10";

  return (
    <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-violet-400/20 bg-[#101018] p-7 shadow-2xl shadow-violet-950/20 sm:p-10">
      <div className="mb-8">
        <span className="text-xs font-bold tracking-[0.2em] text-cyan-300 uppercase">
          Let's Work Together
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Tell Us About Your Project.
        </h2>

        <p className="mt-3 text-sm leading-7 text-zinc-400">
          Fill out the form and our team will get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-zinc-300">
              Full Name *
            </label>
            <input
              name="name"
              type="text"
              required
              maxLength={100}
              placeholder="Your full name"
              className={inputStyle}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-300">
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              required
              maxLength={254}
              placeholder="you@example.com"
              className={inputStyle}
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-zinc-300">
              Company Name
            </label>
            <input
              name="company"
              type="text"
              maxLength={150}
              placeholder="Your company"
              className={inputStyle}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-300">
              Service Required *
            </label>
            <select
              name="service"
              required
              defaultValue=""
              className={inputStyle}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>AI Agents and Chatbots</option>
              <option>Business Workflow Automation</option>
              <option>CRM and Lead Management</option>
              <option>API Integrations</option>
              <option>AI Customer Support</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-zinc-300">
            Project Details *
          </label>
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            placeholder="Tell us about your business, challenges, and what you want to automate..."
            className={`${inputStyle} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition hover:scale-[1.01] hover:shadow-violet-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending..." : "Send Project Inquiry ↗"}
        </button>

        {message && (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${
              status === "success" ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
