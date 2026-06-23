import { COMPANY } from "@/lib/content";

/** Floating "Free Estimate" pill pinned to the bottom on mobile only. */
export default function MobileCTA() {
  return (
    <a
      href={COMPANY.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center rounded-pill bg-leaf py-3.5 font-display text-[19px] tracking-[0.02em] text-white shadow-lg lg:hidden"
    >
      Book a Free Estimate
    </a>
  );
}
