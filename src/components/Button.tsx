import Link from "next/link";

export type ButtonVariant = "primary" | "accent" | "ghost" | "ghost-light";

export interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  /** Render larger for hero / closing bands. */
  size?: "md" | "lg";
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-display font-bold tracking-[0.02em] " +
  "rounded-pill transition-colors duration-150 " +
  "focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2";

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "text-[18px] px-6 py-3",
  lg: "text-[20px] px-8 py-4",
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-forest-900 text-white hover:bg-forest-950",
  accent: "bg-leaf text-white hover:bg-leaf2",
  ghost:
    "bg-transparent text-forest-900 ring-1 ring-inset ring-forest-900/30 hover:ring-forest-900 hover:bg-forest-900 hover:text-white",
  "ghost-light":
    "bg-transparent text-white ring-1 ring-inset ring-white/40 hover:ring-white/80",
};

/**
 * Pill CTA. Internal anchors (`#…`) use next/link; external/tel links render a
 * plain anchor with safe rel attributes.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const isInternal = href.startsWith("#") || href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
