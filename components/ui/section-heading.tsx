type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  titleClassName = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      <p className="krona border-b border-[var(--color-orange)] pb-1 text-sm uppercase text-black">
        {eyebrow}
      </p>
      <h2
        className={`krona text-balance text-[1.55rem] leading-[1.2] text-black sm:text-[1.9rem] md:text-[2.2rem] ${titleClassName}`}
      >
        {title}
      </h2>
    </div>
  );
}
