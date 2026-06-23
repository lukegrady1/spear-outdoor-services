/**
 * lib/content.ts — Single source of truth for all Spear Outdoor Services copy.
 *
 * Every section pulls its text/data from here so the client (or you) can edit
 * content in one place. All shapes are explicitly typed; no `any`.
 *
 * Items tagged `// PLACEHOLDER` need the client to confirm real values
 * (email, nearby towns, and reviews are not published on their current site).
 */

/* ------------------------------------------------------------------ */
/* Company facts                                                       */
/* ------------------------------------------------------------------ */

export interface Company {
  readonly name: string;
  readonly owner: string;
  readonly domain: string;
  readonly location: string;
  readonly phoneDisplay: string;
  readonly phoneHref: string;
  readonly bookingUrl: string;
  readonly introCallUrl: string;
  readonly facebookUrl: string;
  readonly emailPlaceholder: string;
}

/**
 * Canonical site URL — used for metadata, sitemap, robots, and JSON-LD.
 * NOTE: set to the real business domain. If the site lives permanently at the
 * GitHub Pages URL instead, change this to
 * "https://lukegrady1.github.io/spear-outdoor-services".
 */
export const SITE_URL = "https://www.spearoutdoorservices.com";

export const COMPANY: Company = {
  name: "Spear Outdoor Services",
  owner: "Alan Spear",
  domain: "spearoutdoorservices.com",
  location: "Upton, MA",
  phoneDisplay: "508-933-7123",
  phoneHref: "tel:+15089337123",
  bookingUrl: "https://www.spearoutdoorservices.com/book-online",
  introCallUrl: "https://www.spearoutdoorservices.com/book-online",
  facebookUrl: "https://facebook.com/share/1AZFBnt7jx",
  emailPlaceholder: "hello@spearoutdoorservices.com", // PLACEHOLDER — no public email shown
};

export const PRIMARY_CTA = "Book a Free Estimate" as const;
export const SECONDARY_CTA = "Book an Intro Call" as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------ */
/* Marquee badges                                                      */
/* ------------------------------------------------------------------ */

export const BADGES: readonly string[] = [
  "Locally Owned",
  "Free Estimates",
  "Weekly Mowing",
  "Mulch Installation",
  "Seasonal Cleanups",
  "Reliable & Trustworthy",
  "Honest, Fair Pricing",
  "Upton, MA",
] as const;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type IconName = "mower" | "mulch" | "leaf";

export interface Service {
  readonly title: string;
  readonly blurb: string;
  readonly icon: IconName;
  readonly img: string;
  readonly alt: string;
  readonly href: string;
}

export const SERVICES: readonly Service[] = [
  {
    title: "Lawn Care",
    blurb:
      "Keep your lawn lush, healthy, and vibrant with professional mowing and maintenance that elevates your curb appeal.",
    icon: "mower",
    img: "/images/service-lawn-care.svg",
    alt: "Freshly mowed lawn with crisp mowing stripes",
    href: COMPANY.bookingUrl,
  },
  {
    title: "Mulch Installation",
    blurb:
      "A nutrient-rich mulch layer that conserves moisture, suppresses weeds, and enriches soil — using high-quality materials tailored to your garden.",
    icon: "mulch",
    img: "/images/service-mulch.svg",
    alt: "Freshly mulched garden bed around shrubs",
    href: COMPANY.bookingUrl,
  },
  {
    title: "Seasonal Cleanups",
    blurb:
      "We remove debris, prune plants, and refresh flowerbeds so your landscape looks its best and is ready for the season ahead.",
    icon: "leaf",
    img: "/images/service-cleanup.svg",
    alt: "Tidy property after a seasonal yard cleanup",
    href: COMPANY.bookingUrl,
  },
] as const;

/* ------------------------------------------------------------------ */
/* Before / after pairs                                                */
/* ------------------------------------------------------------------ */

export interface BeforeAfter {
  readonly beforeImg: string;
  readonly beforeAlt: string;
  readonly afterImg: string;
  readonly afterAlt: string;
  readonly caption: string;
}

export const BEFORE_AFTER: readonly BeforeAfter[] = [
  {
    beforeImg: "/images/ba-lawn-before.svg",
    beforeAlt: "Overgrown, patchy lawn before service",
    afterImg: "/images/ba-lawn-after.svg",
    afterAlt: "Freshly mowed and edged lawn after service",
    caption: "Overgrown → freshly mowed & edged",
  },
  {
    beforeImg: "/images/ba-bed-before.svg",
    beforeAlt: "Bare, weedy garden bed before mulching",
    afterImg: "/images/ba-bed-after.svg",
    afterAlt: "Clean garden bed with fresh mulch after service",
    caption: "Bare bed → fresh mulch installed",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export interface GalleryItem {
  readonly img: string;
  readonly alt: string;
}

export const GALLERY: readonly GalleryItem[] = [
  { img: "/images/gallery-1.svg", alt: "Striped freshly mowed front lawn" },
  { img: "/images/gallery-2.svg", alt: "Crisp lawn edging along a walkway" },
  { img: "/images/gallery-3.svg", alt: "Fresh mulch bed around foundation plantings" },
  { img: "/images/gallery-4.svg", alt: "Backyard cleaned up for the season" },
  { img: "/images/gallery-5.svg", alt: "Healthy green lawn at golden hour" },
  { img: "/images/gallery-6.svg", alt: "Trimmed shrubs and refreshed flowerbed" },
] as const;

/* ------------------------------------------------------------------ */
/* Why Spear — value cards                                             */
/* ------------------------------------------------------------------ */

export interface ValueCard {
  readonly initial: string;
  readonly title: string;
  readonly desc: string;
}

export const VALUES: readonly ValueCard[] = [
  {
    initial: "R",
    title: "Reliable & Trustworthy",
    desc: "We show up on time and do what we say.",
  },
  {
    initial: "P",
    title: "Professional & Experienced",
    desc: "Quality results and attention to detail on every property.",
  },
  {
    initial: "H",
    title: "Honest, Fair Pricing",
    desc: "Straightforward pricing with no surprises.",
  },
  {
    initial: "L",
    title: "Locally Owned",
    desc: "A neighbor invested in keeping your community looking great.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* How it works — steps                                                */
/* ------------------------------------------------------------------ */

export interface Step {
  readonly number: string;
  readonly title: string;
  readonly desc: string;
}

export const STEPS: readonly Step[] = [
  {
    number: "01",
    title: "Book a Free Estimate",
    desc: "Request a quote or an intro call online or by phone.",
  },
  {
    number: "02",
    title: "We Assess Your Property",
    desc: "We look at your lawn and goals and recommend a plan.",
  },
  {
    number: "03",
    title: "We Get to Work",
    desc: "Mowing, mulching, or cleanup — done with care and attention to detail.",
  },
  {
    number: "04",
    title: "Enjoy Your Yard",
    desc: "A healthy, great-looking property you can enjoy all season.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Service area                                                        */
/* ------------------------------------------------------------------ */

// PLACEHOLDER — confirm the exact list of towns served with the client.
export const SERVICE_AREA_TOWNS: readonly string[] = [
  "Upton",
  "Grafton",
  "Northbridge",
  "Hopkinton",
  "Milford",
  "Mendon",
  "Westborough",
  "Holliston",
] as const;
