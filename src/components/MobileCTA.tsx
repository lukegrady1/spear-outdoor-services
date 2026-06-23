import { COMPANY } from "@/lib/content";
import { ArrowIcon } from "@/components/icons";

/** Floating "Free Estimate" pill pinned to the bottom on mobile only. */
export default function MobileCTA() {
  return (
    <a
      href={COMPANY.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-pill bg-leaf py-3.5 font-display text-[19px] tracking-[0.02em] text-white shadow-[0_10px_30px_rgba(37,53,44,0.35)] lg:hidden"
    >
      Book a Free Estimate
      <ArrowIcon className="h-5 w-5" />
    </a>
  );
}
