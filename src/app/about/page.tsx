import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/sections/About";
import WhySpear from "@/components/sections/WhySpear";
import HowItWorks from "@/components/sections/HowItWorks";
import ServiceArea from "@/components/sections/ServiceArea";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About — Locally Owned Lawn Care in Upton, MA",
  description:
    "Spear Outdoor Services is a locally owned lawn care company in Upton, MA. Owner Alan Spear believes in honest work, fair pricing, and long-term relationships.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="— Who we are"
        crumb="About"
        title={
          <>
            Meet <span className="text-leaf">Spear Outdoor</span>
          </>
        }
        subtitle="A neighbor invested in keeping your community looking great — honest work and fair pricing on every property."
      />
      <About />
      <WhySpear />
      <HowItWorks />
      <ServiceArea />
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
