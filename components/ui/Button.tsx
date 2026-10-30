import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-violet-500 to-cyan-400 text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_40px_-18px_rgba(124,58,237,0.7)] hover:brightness-110",
  secondary:
    "border border-white/12 bg-white/[0.03] text-zinc-100 hover:border-cyan-300/40 hover:bg-white/[0.06]",
  ghost: "text-zinc-200 hover:text-white hover:bg-white/[0.05]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classNameValue = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition duration-300 motion-reduce:transition-none ${variants[variant]} ${className}`;

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classNameValue}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameValue}>
      {children}
    </Link>
  );
}
