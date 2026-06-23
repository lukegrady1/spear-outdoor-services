import Hero from "@/components/sections/Hero";
import ServicesTeaser from "@/components/sections/ServicesTeaser";
import BadgeMarquee from "@/components/BadgeMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CtaBand from "@/components/sections/CtaBand";
import Results from "@/components/sections/Results";
import WhySpear from "@/components/sections/WhySpear";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <BadgeMarquee tone="mist" />
      <ServicesGrid />

      <CtaBand
        eyebrow="— Ready for a greener lawn?"
        title={
          <>
            Let&apos;s Get Your Yard <span className="text-leaf">Looking Sharp</span>
          </>
        }
        text="Free estimates, honest pricing, and reliable service all season long."
      />

      <Results />
      <WhySpear />

      <CtaBand
        eyebrow="— Ready to get started?"
        title={
          <>
            Let&apos;s Make Your Lawn <span className="text-leaf">Look Great</span>
          </>
        }
        text="Reliable lawn care &amp; landscaping in Upton, MA. Book your free estimate today."
        showPhone
      />
    </>
  );
}
