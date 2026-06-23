import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { STEPS } from "@/lib/content";

/** "How It Works" — numbered 4-step stepper with a dashed connector. */
export default function HowItWorks() {
  return (
    <Section tone="white">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow justify-center [&::before]:hidden">— Simple process</p>
          <h2 className="mt-3 font-display text-[clamp(40px,6vw,72px)] leading-[1.0] text-forest-900">
            How It <span className="text-leaf">Works</span>
          </h2>
        </Reveal>
      </div>

      <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
        {/* dashed connector (desktop) */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-leaf/40 md:block"
        />
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.number} delay={i * 110} className="relative">
            <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-leaf font-display text-[26px] leading-none text-white ring-8 ring-white">
                {step.number}
              </span>
              <div className="md:mt-5">
                <h3 className="font-display text-[24px] leading-[1.1] text-forest-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
