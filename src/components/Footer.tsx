import Link from "next/link";
import Logo from "@/components/Logo";
import { COMPANY, SERVICES, NAV_LINKS } from "@/lib/content";
import { PhoneIcon, PinIcon, FacebookIcon } from "@/components/icons";

/** Deep forest-green footer with Services / Company / Contact columns. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-white/80">
      <div className="mx-auto grid max-w-site gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:pr-6">
          <Logo tone="light" size="lg" />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/65">
            Reliable lawn care &amp; landscaping in {COMPANY.location} — locally
            owned and operated.
          </p>
          <a
            href={COMPANY.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex font-body text-[14px] font-semibold uppercase tracking-[0.12em] text-leaf link-wipe"
          >
            Book a Free Estimate
          </a>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="font-display text-[22px] tracking-[0.03em] text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link href="/services" className="link-wipe text-white/70 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <h3 className="font-display text-[22px] tracking-[0.03em] text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-wipe text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={COMPANY.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-wipe text-white/70 hover:text-white"
              >
                Book Online
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display text-[22px] tracking-[0.03em] text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li className="flex items-center gap-2.5">
              <PinIcon className="h-5 w-5 shrink-0 text-leaf" />
              {COMPANY.location}
            </li>
            <li>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2.5 text-white/80 hover:text-white"
              >
                <PhoneIcon className="h-5 w-5 shrink-0 text-leaf" />
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li>
              {/* PLACEHOLDER — no public email shown; uses contact form on live site. */}
              <a
                href={`mailto:${COMPANY.emailPlaceholder}`}
                className="text-white/80 hover:text-white"
              >
                {COMPANY.emailPlaceholder}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spear Outdoor Services on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-leaf"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-1 px-6 py-6 text-[13px] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <p>{COMPANY.location} · Locally owned &amp; operated.</p>
        </div>
      </div>
    </footer>
  );
}
