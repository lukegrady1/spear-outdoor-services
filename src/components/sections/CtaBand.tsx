import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { ArrowIcon, PhoneIcon } from "@/components/icons";
import { COMPANY, PRIMARY_CTA } from "@/lib/content";

export interface CtaBandProps {
  eyebrow?: string;
  /** Headline; wrap the accent word in <span className="text-leaf">…</span>. */
  title: React.ReactNode;
  text?: string;
  /** Show the click-to-call line beneath the CTA (used on the final band). */
  showPhone?: boolean;
}

/** Full-width forest CTA band. Reused for the mid-page and final closers. */
export default function CtaBand({
  eyebrow,
  title,
  text,
  showPhone = false,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-[clamp(56px,8vw,96px)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_85%_15%,rgba(123,158,54,0.20),transparent_55%)]" />
      <Reveal className="relative mx-auto flex max-w-site flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="eyebrow text-leaf [&::before]:bg-leaf">{eyebrow}</p>
          )}
          <h2 className="mt-3 font-display text-[clamp(36px,5.5vw,64px)] leading-[1.02]">
            {title}
          </h2>
          {text && <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/80">{text}</p>}
        </div>

        <div className="flex shrink-0 flex-col items-start gap-3">
          <Button href={COMPANY.bookingUrl} variant="accent" size="lg">
            {PRIMARY_CTA}
            <ArrowIcon className="h-5 w-5" />
          </Button>
          {showPhone && (
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 font-body text-[16px] font-semibold text-white/85 hover:text-white"
            >
              <PhoneIcon className="h-5 w-5 text-leaf" />
              Or call {COMPANY.phoneDisplay}
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
