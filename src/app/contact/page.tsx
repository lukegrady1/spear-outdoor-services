import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/sections/Contact";
import ServiceArea from "@/components/sections/ServiceArea";

export const metadata: Metadata = {
  title: "Contact — Book a Free Estimate",
  description:
    "Get in touch with Spear Outdoor Services for a free lawn care estimate in Upton, MA. Call 508-933-7123 or send a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="— Contact us"
        crumb="Contact"
        title={
          <>
            Let&apos;s Talk About <span className="text-leaf">Your Lawn</span>
          </>
        }
        subtitle="Tell us about your property and what you're looking for — we'll be in touch to set up your free estimate."
      />
      <Contact />
      <ServiceArea />
    </>
  );
}
