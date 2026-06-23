"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { COMPANY } from "@/lib/content";

/**
 * Floating "Book a Free Estimate" pill pinned to the bottom on mobile only.
 * Stays hidden while the hero (#top) is in view — the hero already has its own
 * CTAs — and slides up once you scroll past it. On pages without a hero
 * (sub-pages), it shows right away.
 */
export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  // Re-evaluate on route change — this component lives in the layout and
  // persists across client-side navigations, so the effect must re-run.
  const pathname = usePathname();

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) {
      setVisible(true);
      return;
    }
    // Hide while the hero is in view; reveal once it has fully scrolled away.
    setVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <a
      href={COMPANY.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`fixed inset-x-4 bottom-4 z-40 flex items-center justify-center rounded-pill bg-leaf py-3.5 font-display text-[19px] tracking-[0.02em] text-white shadow-lg transition-[transform,opacity] duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-[150%] opacity-0"
      }`}
    >
      Book a Free Estimate
    </a>
  );
}
