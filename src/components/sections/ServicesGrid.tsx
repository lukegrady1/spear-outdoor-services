import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/content";

/** "Everything Your Lawn Needs — Handled" — positioning + service card grid. */
export default function ServicesGrid() {
  return (
    <Section id="services" tone="white">
      <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(40px,6vw,72px)] leading-[1.0] text-forest-900">
            Everything Your Lawn Needs — Handled
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-md text-[16px] leading-relaxed text-muted">
            Spear Outdoor Services is a locally owned lawn care company in Upton,
            MA — from weekly mowing to seasonal cleanups and mulching, we take
            pride in keeping your property looking its best.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={i * 110}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
