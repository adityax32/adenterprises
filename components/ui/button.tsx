import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
};

const baseClasses =
  "krona inline-flex items-center justify-center rounded-[14px] border px-6 py-3.5 text-[13px] uppercase tracking-[0.005em] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange)] focus-visible:ring-offset-2";

export function Button({
  children,
  href = "#contact",
  variant = "solid",
  className = "",
}: ButtonProps) {
  const variantClasses =
    variant === "solid"
      ? "border-[var(--color-orange)] bg-[var(--color-orange)] text-white hover:bg-[#f26b1a] hover:border-[#f26b1a]"
      : "border-[var(--color-orange)] bg-black text-white hover:bg-[var(--color-orange)]";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </a>
  );
}
