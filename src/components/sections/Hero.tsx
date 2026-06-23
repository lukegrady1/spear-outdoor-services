import Image from "next/image";
import Button from "@/components/Button";
import { COMPANY, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/content";

/**
 * Hero — full-bleed forest band over a darkened lawn photo. Condensed H1 with
 * a single leaf-green accent word, subhead, and the two primary CTAs.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-forest-950 text-white"
    >
      {/* Background photo + forest overlay so white text always pops.
          Swap the file at public/images/hero.webp to change this. */}
      <Image
        src="/images/hero.webp"
        alt="Healthy green lawn maintained by Spear Outdoor Services"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/85 via-forest-950/65 to-forest-950/90" />

      <div className="mx-auto w-full max-w-site px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          <p className="eyebrow text-leaf [&::before]:bg-leaf">
            Lawn Care &amp; Landscaping · {COMPANY.location}
          </p>

          <h1 className="mt-5 font-display text-[clamp(48px,7.5vw,76px)] leading-[1.02] tracking-[0.01em] text-white">
            Reliable Lawn Care, <span className="text-leaf">Done Right</span>
          </h1>

          <p className="mt-6 max-w-xl text-[clamp(16px,2vw,19px)] leading-relaxed text-white/85">
            Lawn care &amp; landscaping for homeowners in {COMPANY.location}
            {" "}&amp; surrounding areas. Weekly mowing, fresh mulch, and seasonal
            cleanups — honest work, fair pricing.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={COMPANY.bookingUrl} variant="accent" size="lg">
              {PRIMARY_CTA}
            </Button>
            <Button href={COMPANY.introCallUrl} variant="ghost-light" size="lg">
              {SECONDARY_CTA}
            </Button>
          </div>

          <p className="mt-6 text-[14px] font-medium uppercase tracking-[0.12em] text-white/60">
            Free Estimates · Locally Owned &amp; Operated
          </p>
        </div>
      </div>

    </section>
  );
}
