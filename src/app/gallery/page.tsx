import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/sections/Gallery";
import Results from "@/components/sections/Results";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Gallery — Our Latest Lawn & Landscape Work",
  description:
    "See recent lawn care and landscaping work from Spear Outdoor Services around Upton, MA — mowing, mulch, and seasonal cleanups.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our latest work"
        crumb="Gallery"
        title={
          <>
            See the Work We&apos;re <span className="text-leaf">Proud Of</span>
          </>
        }
        subtitle="A look at recent lawns, beds, and cleanups around the neighborhood."
      />
      <Gallery />
      <Results />
      <CtaBand
        eyebrow="Like what you see?"
        title={
          <>
            Let&apos;s Do the Same for <span className="text-leaf">Your Yard</span>
          </>
        }
        text="Book a free estimate and we&apos;ll get your property looking its best."
        showPhone
      />
    </>
  );
}
