type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <p className="text-xs font-semibold tracking-[0.22em] text-lime-300/90 uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
