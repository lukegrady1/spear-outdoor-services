import { BADGES } from "@/lib/content";
import { DiamondGlyph } from "@/components/icons";

export interface BadgeMarqueeProps {
  /** Band background. */
  tone?: "forest" | "mist";
}

/**
 * Auto-scrolling trust strip. Content is duplicated so the -50% keyframe loops
 * seamlessly; pauses on hover. Decorative — hidden from screen readers since
 * the same phrases appear elsewhere on the page.
 */
export default function BadgeMarquee({ tone = "forest" }: BadgeMarqueeProps) {
  const isForest = tone === "forest";
  const items = [...BADGES, ...BADGES];

  return (
    <div
      aria-hidden
      className={`overflow-hidden border-y py-5 ${
        isForest
          ? "border-white/10 bg-forest-900 text-white"
          : "border-forest-900/10 bg-mist text-forest-900"
      }`}
    >
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {items.map((badge, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-7 font-display text-[26px] tracking-[0.03em]">
              {badge}
            </span>
            <DiamondGlyph className="h-2.5 w-2.5 shrink-0 text-leaf" />
          </span>
        ))}
      </div>
    </div>
  );
}
