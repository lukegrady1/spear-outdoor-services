import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import Results from "@/components/sections/Results";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Services — Lawn Care, Mulch & Seasonal Cleanups",
  description:
    "Weekly mowing, mulch installation, and seasonal cleanups for homeowners in Upton, MA. Reliable lawn care done right — free estimates.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="— What we offer"
        crumb="Services"
        title={
          <>
            Services Built Around <span className="text-leaf">Your Property</span>
          </>
        }
        subtitle="From weekly mowing to fresh mulch and seasonal cleanups, we keep your property looking its best all season long."
      />
      <ServicesGrid />
      <HowItWorks />
      <Results />
      <CtaBand
        eyebrow="— Ready for a greener lawn?"
        title={
          <>
            Get Your <span className="text-leaf">Free Estimate</span>
          </>
        }
        text="Tell us what your property needs — we&apos;ll put together a plan and a fair price."
        showPhone
      />
    </>
  );
}
