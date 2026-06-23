/**
 * Section — consistent full-width band with a centered max-w-site container.
 * Padding follows the spec: py-[clamp(64px,10vw,120px)].
 */
export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  /** Visual band style. */
  tone?: "white" | "mist" | "forest" | "forest-deep";
  className?: string;
  /** Set false to remove the inner container (full-bleed content). */
  container?: boolean;
}

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  white: "bg-white text-forest-900",
  mist: "bg-mist text-forest-900",
  forest: "bg-forest-900 text-white",
  "forest-deep": "bg-forest-950 text-white",
};

export default function Section({
  id,
  children,
  tone = "white",
  className = "",
  container = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-[clamp(64px,10vw,120px)] ${tones[tone]} ${className}`}
    >
      {container ? (
        <div className="mx-auto w-full max-w-site px-6">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
