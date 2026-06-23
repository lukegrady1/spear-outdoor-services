import Link from "next/link";

export interface PageHeroProps {
  eyebrow: string;
  /** Headline; wrap the accent word in <span className="text-leaf">…</span>. */
  title: React.ReactNode;
  subtitle?: string;
  /** Current page label for the breadcrumb. */
  crumb: string;
}

/**
 * Forest-green page header for sub-pages. Sits under the fixed (transparent)
 * header, so the dark band lets the white logo + nav read at the top of scroll.
 */
export default function PageHero({ eyebrow, title, subtitle, crumb }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 text-white">
      {/* atmospheric leaf-green glow + bottom fade */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(110%_90%_at_85%_0%,rgba(123,158,54,0.20),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-900/40 to-forest-950" />

      <div className="mx-auto max-w-site px-6 pb-[clamp(48px,8vw,80px)] pt-[clamp(140px,20vh,220px)]">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-2 font-body text-[13px] font-medium uppercase tracking-[0.12em] text-white/55">
            <li>
              <Link href="/" className="transition-colors hover:text-leaf">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-leaf">
              /
            </li>
            <li className="text-white/80">{crumb}</li>
          </ol>
        </nav>

        <p className="eyebrow text-leaf [&::before]:bg-leaf">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(44px,7vw,80px)] leading-[1.0] tracking-[0.01em]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-[clamp(16px,2vw,19px)] leading-relaxed text-white/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
