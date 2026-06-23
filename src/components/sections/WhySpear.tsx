import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { VALUES } from "@/lib/content";

/** "Why Spear" — four value cards with big Bebas initials. */
export default function WhySpear() {
  return (
    <Section tone="forest">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow justify-center text-leaf [&::before]:hidden">
            — Why Spear
          </p>
          <h2 className="mt-3 font-display text-[clamp(40px,6vw,72px)] leading-[1.0] text-white">
            Honest Work You Can <span className="text-leaf">Count On</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((value, i) => (
          <Reveal key={value.title} delay={i * 100}>
            <article className="h-full rounded-card border border-white/10 bg-white/[0.04] p-7 transition-colors duration-200 hover:bg-white/[0.08]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf font-display text-[30px] leading-none text-white">
                {value.initial}
              </span>
              <h3 className="mt-5 font-display text-[24px] leading-[1.1] text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                {value.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
