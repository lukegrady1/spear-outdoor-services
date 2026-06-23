import Image from "next/image";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { COMPANY, PRIMARY_CTA } from "@/lib/content";
import { PinIcon } from "@/components/icons";

/** About / mission — Alan Spear, locally owned, with a photo slot. */
export default function About() {
  return (
    <Section id="about" tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Photo */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card shadow-[0_18px_50px_rgba(37,53,44,0.20)]">
              <Image
                src="/images/about-crew.svg"
                alt="A freshly finished Spear Outdoor Services property"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
            {/* Locally owned badge */}
            <div className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-pill bg-leaf px-5 py-3 font-display text-[20px] text-white shadow-[0_10px_30px_rgba(123,158,54,0.4)] sm:-right-5">
              <PinIcon className="h-5 w-5" />
              Locally Owned · {COMPANY.location}
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="eyebrow">— About us</p>
          <h2 className="mt-3 font-display text-[clamp(40px,6vw,72px)] leading-[1.0] text-forest-900">
            Locally Owned, <span className="text-leaf">Reliable</span>
          </h2>
          <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-muted">
            <p>
              Spear Outdoor Services is a locally owned and operated lawn care
              company in {COMPANY.location}. Owner {COMPANY.owner} is committed to
              honest work, fair pricing, and long-term relationships — showing up
              on time, working hard, and leaving every property looking its best.
            </p>
            <p className="text-forest-900">
              “We don&apos;t just maintain lawns — we help create outdoor spaces
              homeowners can enjoy all season long.”
            </p>
          </div>
          <div className="mt-8">
            <Button href={COMPANY.bookingUrl} variant="primary">
              {PRIMARY_CTA}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
