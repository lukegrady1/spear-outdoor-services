"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { PhoneIcon } from "@/components/icons";
import { NAV_LINKS, COMPANY } from "@/lib/content";

/** True when `href` is the current route (exact for "/", prefix otherwise). */
function useIsActive() {
  const pathname = usePathname();
  return (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * Sticky header. Transparent (light logo/links) while over the hero, then
 * switches to a solid white bar with a subtle shadow once scrolled. Mobile
 * hamburger opens a full-screen forest-green overlay menu.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = useIsActive();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Solid white bar only when scrolled and the mobile menu is closed. While the
  // overlay is open we keep the bar transparent so the forest menu shows behind
  // a white logo + white X.
  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-forest-900/10 bg-white"
          : "bg-transparent"
      }`}
    >
      {/* relative z-50 keeps the bar (logo + X) above the z-40 overlay */}
      <div className="relative z-50 mx-auto flex h-[var(--h)] max-w-site items-center justify-between px-6 [--h:88px] md:[--h:112px]">
        <Logo tone={solid ? "dark" : "light"} size="md" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`link-wipe font-body text-[15px] font-medium ${
                  active
                    ? "text-leaf"
                    : solid
                      ? "text-forest-900"
                      : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className={`inline-flex items-center gap-2 font-body text-[15px] font-semibold ${
              solid ? "text-forest-900" : "text-white"
            }`}
          >
            <PhoneIcon className="h-4 w-4 text-leaf" />
            {COMPANY.phoneDisplay}
          </a>
          <Button href={COMPANY.bookingUrl} variant="accent">
            Free Estimate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 flex h-11 w-11 items-center justify-center lg:hidden ${
            solid ? "text-forest-900" : "text-white"
          }`}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col gap-[5px]">
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-forest-900 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`font-display text-4xl tracking-[0.02em] transition-colors hover:text-leaf ${
                isActive(link.href) ? "text-leaf" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={COMPANY.phoneHref}
            className="mt-2 inline-flex items-center gap-2 font-body text-lg font-semibold text-white/90"
          >
            <PhoneIcon className="h-5 w-5 text-leaf" />
            {COMPANY.phoneDisplay}
          </a>
        </nav>
        <div className="px-6 pb-10">
          <Button href={COMPANY.bookingUrl} variant="accent" size="lg" className="w-full">
            Book a Free Estimate
          </Button>
        </div>
      </div>
    </header>
  );
}
