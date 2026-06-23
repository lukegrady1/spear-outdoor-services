import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { BEFORE_AFTER } from "@/lib/content";

/** "See the Difference" — drag-to-compare before/after sliders. */
export default function Results() {
  return (
    <Section tone="mist">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow justify-center [&::before]:hidden">— Our results</p>
          <h2 className="mt-3 font-display text-[clamp(40px,6vw,72px)] leading-[1.0] text-forest-900">
            See the <span className="text-leaf">Difference</span>
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">
            Drag the handle to reveal the transformation — overgrown to freshly
            mowed, bare beds to crisp fresh mulch.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {BEFORE_AFTER.map((pair, i) => (
          <Reveal key={pair.caption} delay={i * 120}>
            <BeforeAfterSlider {...pair} />
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-center text-[13px] text-muted/80">
        {/* PLACEHOLDER — replace with real before/after photography. */}
        Illustrative placeholders — real project photos to be added.
      </p>
    </Section>
  );
}
