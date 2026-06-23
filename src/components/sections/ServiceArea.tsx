import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { COMPANY, PRIMARY_CTA, SERVICE_AREA_TOWNS } from "@/lib/content";
import { PinIcon } from "@/components/icons";

/** Service area — towns served (placeholders) + estimate CTA. */
export default function ServiceArea() {
  return (
    <Section tone="mist">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">— Where we work</p>
          <h2 className="mt-3 font-display text-[clamp(40px,6vw,72px)] leading-[1.0] text-forest-900">
            Serving <span className="text-leaf">{COMPANY.location}</span>
            {" "}&amp; Surrounding Areas
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted">
            Based in {COMPANY.location}, we keep lawns and landscapes looking
            their best across the surrounding towns. Not sure if we reach you?
            Just ask — we&apos;re happy to take a look.
          </p>
          <div className="mt-8">
            <Button href={COMPANY.bookingUrl} variant="primary">
              {PRIMARY_CTA}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-card border border-forest-900/10 bg-white p-8 shadow-[0_10px_30px_rgba(37,53,44,0.08)]">
            <h3 className="font-display text-[22px] tracking-[0.03em] text-forest-900">
              Towns We Serve
            </h3>
            {/* PLACEHOLDER — confirm exact list with the client. */}
            <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-leaf">
              Nearby towns · to be confirmed
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
              {SERVICE_AREA_TOWNS.map((town) => (
                <li key={town} className="flex items-center gap-2 text-[15px] text-forest-900">
                  <PinIcon className="h-4 w-4 shrink-0 text-sage" />
                  {town}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
