import type { IconName } from "@/lib/content";

export interface IconProps {
  className?: string;
}

/** Shared props: two-tone line icons, inherit color via currentColor. */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MowerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
      <path d="M3 16h10l2-5h5" />
      <path d="M20 11l1 5" />
      <path d="M3 16v-3h4l1 3" />
      <circle cx="6" cy="18.5" r="2" />
      <circle cx="17" cy="18.5" r="2.5" />
      <path d="M13 11V7" />
    </svg>
  );
}

export function MulchIcon({ className }: IconProps) {
  // wheelbarrow
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
      <path d="M4 7l3 7h9l3-6-12-1" />
      <path d="M7 14l-1.5 3" />
      <path d="M16 14l1 3" />
      <path d="M3 7h2" />
      <circle cx="9" cy="19" r="1.6" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" />
      <path d="M9 15c2-3 5-5 8-6" />
    </svg>
  );
}

const ICONS: Record<IconName, (p: IconProps) => React.ReactElement> = {
  mower: MowerIcon,
  mulch: MulchIcon,
  leaf: LeafIcon,
};

/** Resolve a service icon by name. */
export function ServiceIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Component = ICONS[name];
  return <Component className={className} />;
}

/** Small leaf/diamond glyph used as a separator in the badge marquee. */
export function DiamondGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden>
      <path d="M6 0l6 6-6 6-6-6z" fill="currentColor" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 5.2 2 2 0 016.5 3z" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...stroke}>
      <path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z"
      />
    </svg>
  );
}
