# DESIGN.md — Spear Outdoor Services (Lawn Care & Landscaping)

**Purpose:** This is a build spec for Claude Code. Produce a marketing website for **Spear Outdoor Services**, a locally owned lawn care and landscaping company in Upton, MA. Use the **exact same design system, layout, and component set we've used across this thread** (Stallone / Coat Pro / Achieve / Nate Smith) — bold condensed display type, pill buttons, before/after sliders, badge marquee, value cards, 4-step process, the full section flow — but apply **Spear's own color scheme, content, and services**. Do **not** copy any other company's logo, text, or images verbatim.

**The swap, in one line:** keep the established *structure + typography + components*, change *colors → Spear forest-green/olive-green/white*, change *subject → lawn care & landscaping instead of pressure washing*, change *all copy → Spear's real info*.

**Theme:** natural, local, dependable — "reliable lawn care / a property you can enjoy all season / honest work, fair pricing." Same punchy visual system as the prior sites; landscaping flavor.

**Stack:** Build with **Next.js (App Router) + TypeScript + Tailwind CSS** (same project structure as §1).

---

## 0. Company facts (use these everywhere)

- **Business name:** Spear Outdoor Services. Domain: spearoutdoorservices.com.
- **What they do:** reliable lawn care & landscaping for homeowners — weekly mowing, mulch installation, and seasonal cleanups.
- **Owner:** Alan Spear. Locally owned and operated.
- **Location / area:** Based in **Upton, MA**, serving Upton and surrounding areas.
- **Phone:** 508-933-7123 — use as `tel:+15089337123` click-to-call everywhere.
- **Booking:** online booking page at **https://www.spearoutdoorservices.com/book-online** (also offers an "Intro Call"). The headline offer is **"Free Estimates."**
- **Primary CTA:** **"Book a Free Estimate"** (or "Get a Free Estimate") → the book-online page. Secondary: "Book an Intro Call."
- **Mission/positioning (from their site):** "To provide reliable, high-quality lawn care and landscaping services homeowners can count on. We believe in honest work, fair pricing, and building long-term relationships — showing up on time, working hard, and leaving your property looking its best. We don't just maintain lawns — we help create outdoor spaces homeowners can enjoy all season long."
- **Brand value lines (on their site):** "Reliable & Trustworthy," "Professional & Experienced."
- **Socials:** Facebook (`facebook.com/share/1AZFBnt7jx`). *(No public email shown — they use a contact form; leave an email placeholder.)*
- **Nav:** Home · Services · About · Gallery · More.

---

## 1. Tech stack & ground rules

**Stack: Next.js (App Router) + TypeScript + Tailwind CSS.** Scaffold with `npx create-next-app@latest --typescript --tailwind --app --eslint`.

- **Project structure:**
  - `app/page.tsx` — homepage, composed of section components.
  - `app/layout.tsx` — root layout: fonts, metadata, global header/footer.
  - `app/globals.css` — Tailwind directives + a few CSS variables/utilities.
  - `components/` — one file per section + reusable UI (`Button.tsx`, `ServiceCard.tsx`, `BeforeAfterSlider.tsx`, `BadgeMarquee.tsx`, `Header.tsx`, `Footer.tsx`, etc.). Each is a typed React component with a `Props` interface.
  - `lib/content.ts` — site copy/data (services, gallery, reviews, steps, values) as typed constants so content is easy to edit in one place.
  - `public/` — images and SVGs.
- **TypeScript everywhere.** No `any`. Define `interface` types for every component's props and for the content data shapes in `lib/content.ts`.
- **Styling is Tailwind utility classes**, driven by a custom theme in `tailwind.config.ts` (see §2). Avoid hand-written CSS except for keyframes (marquee), the before/after clip logic, and anything truly dynamic. Group repeated utility patterns with `@apply` or small components.
- **Server vs client components:** sections are Server Components by default. Add `"use client"` only where interactivity is needed — `Header` (mobile menu + scroll state), `BeforeAfterSlider` (drag), the scroll-reveal wrapper, and any gallery lightbox/carousel.
- **Fonts via `next/font/google`** (Bebas Neue + Poppins) — see §3.
- **Images via `next/image`** for lazy-loading, responsive `sizes`, `webp`. Always set `alt`.
- **Mobile-first, fully responsive.** Tailwind breakpoints `md:` (768px), `lg:` (1024px). Hero, grids, gallery, and sliders reflow cleanly on phones.
- **Smooth-scroll** for in-page anchors (`scroll-smooth` on `<html>`). Sticky header.
- **Accessibility:** semantic landmarks, alt text, visible `focus-visible:` rings, AA contrast. Buttons and sliders keyboard-operable.
- **Performance:** `next/image` for all imagery, lazy-load below the fold, minimal client JS.
- Deliver clean, typed, commented code.

---

## 2. Brand color system (Spear)

Spear's palette is **deep forest green + bright olive/leaf green on white**, with sage as a secondary and gray for muted text. These are the exact values pulled from their site. Define them in `tailwind.config.ts` under `theme.extend`.

| Role (was, in Stallone) | Spear color | Hex |
|---|---|---|
| Primary dark / dark sections / body text (was teal-700) | **Deep forest green** | `#25352c` |
| Accent "punch" — eyebrows, highlights, slider handle, key words (was red) | **Olive / leaf green** | `#7b9e36` |
| Secondary green (icons, tints, hovers) | **Sage green** | `#496e59` |
| Light alt-section background (was sage) | **Pale gray-green / light gray** | `#edf0ec` / `#ededed` |
| Page / card background | **White** | `#ffffff` |
| Muted copy / borders | **Warm gray** | `#5b665f` |

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          900: "#25352c", // PRIMARY dark — dark sections, headlines, body text
          950: "#1a2620", // deeper forest for footer / deepest fields
        },
        leaf:  "#7b9e36",  // PRIMARY accent — eyebrows, key words, slider handle, hovers, CTAs
        leaf2: "#6a8a2d",  // darker olive — button hover / pressed
        sage:  "#496e59",  // secondary green — icons, tints
        mist:  "#edf0ec",  // light alternating-section background (pale gray-green)
        muted: "#5b665f",  // muted copy / borders
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"], // Bebas Neue
        body: ["var(--font-poppins)", "sans-serif"],  // Poppins
      },
      borderRadius: { pill: "100px", card: "16px" },
      maxWidth: { site: "1200px" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 30s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
```

**Usage rules (mirror the established logic, recolored):**
- Default page background is **white**; long-form body text is **forest `#25352c`** (or `muted` for secondary). Use **mist `#edf0ec`** for alternating sections so white blocks don't run together (replaces Stallone's sage).
- "Hero" and emphasis bands use a **deep forest-green background** (`forest-900`/`forest-950`) with white text (replaces Stallone's dark-teal bands). Natural and grounded.
- **Olive/leaf green is the accent only** — eyebrow labels, the before/after slider handle, icon fills, small underlines, hovers, the primary CTAs, and the one highlighted word in big headlines. Use sage `#496e59` for secondary icon work. Never large fields of bright leaf green.
- Forest + white + leaf green is the signature combo; gray strictly secondary.
- Body default in `globals.css`: `body { @apply text-forest-900 bg-white font-body; }`.

---

## 3. Typography (same as the prior sites)

Identical type system — core to "the same design." Load with `next/font/google`.

| Role | Font | Notes |
|---|---|---|
| **Display / headings** | **Bebas Neue** | Tall, condensed, bold. H1–H3, buttons, big stats, eyebrows. |
| **Body / UI** | **Poppins** | Paragraphs, nav, labels, captions. Weights 300–700. |

```ts
// app/layout.tsx
import { Bebas_Neue, Poppins } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas", display: "swap" });
const poppins = Poppins({ weight: ["300","400","500","600","700"], subsets: ["latin"], variable: "--font-poppins", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${poppins.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
```

**Type scale (desktop):**

| Element | Font | Size | Line-height | Color |
|---|---|---|---|---|
| H1 (hero) | Bebas Neue | `clamp(48px, 7vw, 72px)` | 1.1 | white on forest |
| H2 (section super-headline) | Bebas Neue | `clamp(44px, 9vw, 97px)` | 1.0 | white or forest-900 |
| H3 (card titles) | Bebas Neue | `clamp(24px, 3vw, 34px)` | 1.1 | forest-900 |
| Eyebrow / kicker | Poppins | 14px / 600 | 1 | UPPERCASE, letter-spacing .12em, **leaf** |
| Body | Poppins | 16–18px / 400 | 1.65 | forest-900 / muted |
| Button label | Bebas Neue | 18px / 700 | 1 | white |
| Fine print / footer | Poppins | 13px | 1.5 | muted |

Tailwind examples — hero H1: `font-display text-white text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[0.01em]`; eyebrow: `font-body font-semibold text-[14px] uppercase tracking-[0.12em] text-leaf`.

**Signature heading treatment:** color ONE key word **leaf green** while the rest stays white/forest — e.g. "A Lawn You Can Be **Proud Of**." Wrap the punch word in `<span className="text-leaf">`.

---

## 4. Core components (same as the prior sites, recolored)

### 4.1 Buttons — `components/Button.tsx`
Primary CTA is a **pill**. Typed component with `variant` + `href` props:
```tsx
type ButtonProps = { href: string; variant?: "primary" | "accent" | "ghost"; children: React.ReactNode };

const base =
  "inline-flex items-center gap-2 font-display font-bold text-[18px] tracking-[0.02em] " +
  "px-5 py-3 rounded-pill transition-transform transition-colors duration-150 " +
  "hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf";

const variants = {
  primary: "bg-forest-900 text-white hover:bg-forest-950",
  accent:  "bg-leaf text-white hover:bg-leaf2",
  ghost:   "bg-transparent text-forest-900 ring-2 ring-inset ring-forest-900",
};

export default function Button({ href, variant = "primary", children }: ButtonProps) {
  return <a href={href} className={`${base} ${variants[variant]}`}>{children}</a>;
}
```
The top CTA everywhere reads **"Book a Free Estimate"** and links to the booking page (`https://www.spearoutdoorservices.com/book-online`). Use the **leaf** `accent` variant for it so it pops, especially on forest backgrounds. Secondary CTAs: "Book an Intro Call," "See Our Work."

### 4.2 Service cards — `components/ServiceCard.tsx`
Image-topped cards, rounded corners. Hover (desktop) lifts the card and reveals a short description; on mobile the blurb shows by default. Typed props, `next/image`:
```tsx
type ServiceCardProps = { title: string; blurb: string; href: string; img: string; alt: string };
```
Wrapper: `group rounded-card overflow-hidden bg-white shadow-[0_6px_24px_rgba(37,53,44,0.10)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(37,53,44,0.20)]`. Image: `w-full aspect-[3/2] object-cover`. Reveal blurb on `md:` with `max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all`; visible by default below `md`.

### 4.3 Before / After slider ★ (signature element) — `components/BeforeAfterSlider.tsx`
**A great fit for lawn care** — overgrown/messy → freshly mowed and edged, or a bare bed → freshly mulched. Mark `"use client"`. Two stacked images, a vertical divider with a round grab-handle in **leaf green**, drag to wipe between "before" and "after."

Implementation: `useState<number>` for divider percentage; two `next/image` layers absolutely positioned; clip the top image with inline `style={{ clipPath: \`inset(0 ${100 - pos}% 0 0)\` }}`; a handle `<button>` updates `pos` on pointer move (`onPointerDown/Move/Up`) and on `ArrowLeft`/`ArrowRight` keydown. Default `pos = 50`. Label the two sides "BEFORE" / "AFTER" in small `font-display` tags. All drag math typed (`number`), no `any`. *If a true before/after pair isn't available, swap this block for a bold gallery of their work — keep the component in the codebase.*

### 4.4 Scrolling badge marquee — `components/BadgeMarquee.tsx`
Horizontal auto-scrolling strip, duplicated content for a seamless loop (`animate-marquee`), pause on hover (`hover:[animation-play-state:paused]`). On a **forest** or mist band. Spear badge phrases: **Locally Owned · Free Estimates · Weekly Mowing · Mulch Installation · Seasonal Cleanups · Reliable & Trustworthy · Honest, Fair Pricing · Upton, MA.** Separate items with a small leaf/diamond glyph.

### 4.5 Stat / icon blocks
Round icon (or single big letter) above a short bold title and one-line description. Used for the values section and the process steps. Icon fills in leaf/sage on forest, or forest on white.

---

## 5. Page structure (sections, in order)

Build the homepage (`app/page.tsx`) by composing one component per section. Each section is full-width with inner container `max-w-site mx-auto px-6` and padding `py-[clamp(64px,10vw,120px)]`. Pull all copy/data from `lib/content.ts`.

### 5.1 Sticky header / nav — `Header.tsx` (`"use client"`)
- Left: Spear logo (wordmark in Bebas Neue + a small leaf/spear mark if you generate one).
- Center/right: nav — **Home**, **Services** (anchor to services section), **About**, **Gallery**.
- Far right: phone `508-933-7123` as a `tel:` link + a leaf-green pill **"Free Estimate"** button (→ booking page).
- Mobile: hamburger → full-screen overlay menu, **forest-green** background, white Bebas Neue links, CTA pinned at bottom.
- Header transparent over the hero, then solid **white** background + subtle shadow on scroll.

### 5.2 Hero
- **Deep forest-green full-bleed background** (`forest-950`) — ideally a darkened photo of a freshly mowed, healthy green lawn / property, with a forest overlay so white text pops.
- Logo, then **H1** with the Spear energy — e.g. "Reliable Lawn Care, **Done Right**." or "A Yard You Can **Enjoy All Season**." — a one-line subhead ("Lawn care & landscaping for homeowners in Upton, MA & surrounding areas"), and the primary pill CTA ("Book a Free Estimate") + a secondary ghost CTA ("Book an Intro Call").
- One leaf-green accent word in the headline. Optional faint leaf/grass-texture motif — tasteful.

### 5.3 Services teaser (3 quick tiles)
Three icon tiles under the hero — **Lawn Care / Mulch Installation / Seasonal Cleanups** — each a simple line icon + name. Fast jump menu.

### 5.4 Badge marquee
The scrolling trust strip from §4.4, on a mist or forest band.

### 5.5 "Everything Your Lawn Needs — Handled"
- Big H2 + one-paragraph positioning drawn from their copy: "Spear Outdoor Services is a locally owned lawn care company in Upton, MA — from weekly mowing to seasonal cleanups and mulching, we take pride in keeping your property looking its best."
- **Grid of service cards** (§4.2) — their three core services, expandable:
  - **Lawn Care** — "Keep your lawn lush, healthy, and vibrant with professional mowing and maintenance that elevates your curb appeal."
  - **Mulch Installation** — "A nutrient-rich mulch layer that conserves moisture, suppresses weeds, and enriches soil — using high-quality materials tailored to your garden."
  - **Seasonal Cleanups** — "We remove debris, prune plants, and refresh flowerbeds so your landscape looks its best and is ready for the season ahead."
  - *(Optional add-ons if offered: Spring/Fall Cleanup, Edging & Trimming, Weekly Mowing Plans.)*

### 5.6 Mid-page CTA band
Full-width **forest-green band**: a "ready for a greener lawn?" line on the left, leaf-green pill **"Book a Free Estimate"** on the right. White text, high contrast.

### 5.7 Results — before/after
Header ("See the Difference"), then one or two **before/after sliders** (§4.3): overgrown → freshly mowed, bare bed → freshly mulched, messy → cleaned-up property.

### 5.8 Gallery
A bold **photo gallery** of their latest work (Spear's site has a "Our Latest Work" gallery). Responsive grid using `next/image`, optional lightbox (`"use client"`). Pull from `lib/content.ts`. "See More of Our Work" CTA.

### 5.9 About / mission (replaces Stallone's "family-owned" section)
- Eyebrow, big H2 ("Locally Owned, **Reliable**"), warm paragraph: Spear Outdoor Services is a locally owned and operated lawn care company in Upton, MA. Owner **Alan Spear** is committed to honest work, fair pricing, and long-term relationships — showing up on time, working hard, and leaving every property looking its best. "We don't just maintain lawns — we help create outdoor spaces homeowners can enjoy all season long."
- Photo slot for Alan / the crew / a finished property. Optional "Locally Owned • Upton, MA" badge accent (leaf/forest).

### 5.10 "Why Spear" — value cards (replaces Stallone's C.H.A.M.P.)
Four icon/letter blocks (§4.5) grounded in their stated values:
- **Reliable & Trustworthy** — We show up on time and do what we say.
- **Professional & Experienced** — Quality results and attention to detail on every property.
- **Honest, Fair Pricing** — Straightforward pricing with no surprises.
- **Locally Owned** — A neighbor invested in keeping your community looking great.

Big leaf/forest icons or initials (Bebas Neue) over a short title and one sentence.

### 5.11 How it works — 4 steps
Header ("How It Works"), numbered horizontal stepper (vertical on mobile), leaf-green number badges:
1. **Book a Free Estimate** — request a quote or an intro call online or by phone.
2. **We Assess Your Property** — we look at your lawn and goals and recommend a plan.
3. **We Get to Work** — mowing, mulching, or cleanup, done with care and attention to detail.
4. **Enjoy Your Yard** — a healthy, great-looking property you can enjoy all season.

Connect steps with a dashed line/arrow.

### 5.12 Service area
- Eyebrow "— Where we work", H2 ("Serving **Upton, MA** & Surrounding Areas"), a short paragraph, and a "Book a Free Estimate" CTA.
- Optional simple map graphic or a finished-lawn photo. *(Add nearby towns as clearly-marked placeholders for the client to confirm.)*

### 5.13 Contact / booking
- Eyebrow, H2 ("Book a Free Estimate Now"), and a simple **contact form** (First Name, Last Name, Email, Message, "what you're interested in") that submits to the client's preferred endpoint — mirror the fields on their current site. Include a clear "Or Call Us: 508-933-7123" line and the online-booking link.
- *(Wire the form to a real handler later; for now use a typed, accessible form with client-side validation.)*

### 5.14 Final CTA
Big **forest-green** closing band: eyebrow ("— Ready to get started?"), H2 with a leaf accent word ("Let's Make Your Lawn **Look Great**"), one persuasive line, primary pill CTA ("Book a Free Estimate") + phone `508-933-7123`.

### 5.15 Footer
**Deep forest-green** footer (`forest-950`), white/gray text, multi-column:
- Col 1: white Spear logo + one-line description ("Reliable lawn care & landscaping in Upton, MA — locally owned and operated.") + a "Book a Free Estimate" link.
- Col 2: **Services** — Lawn Care, Mulch Installation, Seasonal Cleanups.
- Col 3: **Company** — Home, About, Gallery, Book Online.
- Col 4: **Contact** — Upton, MA; phone `508-933-7123` (click-to-call); email (placeholder/contact link); Facebook icon.
- Bottom bar: © [current year] Spear Outdoor Services.
- Small floating/sticky **"Free Estimate"** button on mobile is on-brand.

---

## 6. Motion & interaction (same as the prior sites)

- **Scroll-reveal:** reusable `components/Reveal.tsx` (`"use client"`) wraps children, uses a typed `IntersectionObserver` in `useEffect`, toggles `translate-y-4 opacity-0` → `translate-y-0 opacity-100 transition-all duration-500 ease-out`. Subtle; never bouncy.
- **Hover:** cards lift, buttons darken + rise 2px, links get a **leaf-green** underline wipe.
- **Marquee** auto-scrolls (`animate-marquee`), pauses on hover.
- **Before/after sliders** drag with pointer + touch + keyboard.
- **Gallery** lightbox/carousel pauses on interaction.
- Respect `prefers-reduced-motion` via the observer gate + Tailwind `motion-reduce:` variants.
- Calm, natural, dependable — premium local-service brand. No neon glows, no excessive parallax.

---

## 7. Imagery & iconography direction

- **Photography:** real lawn & landscape work — freshly mowed striped lawns, crisp edging, fresh mulch beds, cleaned-up properties, before/after pairs, healthy green grass. Warm golden-hour daylight. Placeholder: tidy suburban lawns and gardens.
- **Icons:** simple two-tone line icons — forest with occasional leaf-green fill. Lawn icons (mower, grass blades, leaf, mulch/wheelbarrow, rake, tree/shrub, watering).
- **Brand motif:** natural growth — leaves, grass blades, a "spear" of grass. Clean and grounded.
- **Logos/graphics:** white logo variant for forest sections, forest for white. SVG preferred.
- All decorative graphics use the brand palette only (forest / leaf / sage / white).

---

## 8. Copy voice

Confident, neighborly, dependable. Short punchy lines (same energy as the prior sites, landscaping flavor). On-brand phrasing from their site: "reliable lawn care & landscaping," "honest work, fair pricing," "showing up on time and working hard," "looking its best," "enjoy all season long." Always lead CTAs with the **free estimate**. Emphasize: locally owned, Upton MA, weekly mowing, mulching, seasonal cleanups, reliable & trustworthy, professional & experienced.

---

## 9. Deliverable checklist

- [ ] Next.js (App Router) + TypeScript + Tailwind scaffolded; `npm run build` and `tsc --noEmit` pass with no errors and no `any`.
- [ ] **Spear palette** in `tailwind.config.ts` — forest-green `#25352c` primary/dark sections, leaf-green `#7b9e36` accent, sage `#496e59` secondary, white pages, mist `#edf0ec` alt sections.
- [ ] Bebas Neue + Poppins via `next/font/google`; `font-display`/`font-body` utilities wired through CSS variables.
- [ ] Sections split into typed components under `components/`; copy/data in `lib/content.ts`; `"use client"` only where needed.
- [ ] All imagery uses `next/image` with alt text.
- [ ] Sticky header, transparent-over-hero → solid-on-scroll, working mobile hamburger (forest overlay).
- [ ] Hero with forest background, big condensed headline, **leaf** accent word, leaf pill "Book a Free Estimate" + secondary "Book an Intro Call."
- [ ] At least one working **before/after slider** (overgrown → mowed; pointer + touch + keyboard).
- [ ] Auto-scrolling **badge marquee** (Spear badges) that loops seamlessly and pauses on hover.
- [ ] Service cards for Lawn Care / Mulch Installation / Seasonal Cleanups with hover-reveal descriptions.
- [ ] **Gallery** of latest work; "Why Spear" value cards; 4-step how-it-works; About/Alan Spear mission; service-area; contact form.
- [ ] Two forest CTA bands (mid + final), each with the free-estimate CTA + phone `508-933-7123`.
- [ ] Footer with Services / Company / Contact columns, Facebook, Upton MA, © current year.
- [ ] Every primary CTA links to `https://www.spearoutdoorservices.com/book-online`; phone is `tel:+15089337123`.
- [ ] Real Spear facts throughout; missing email, nearby town list, and reviews clearly marked as placeholders.
- [ ] Fully responsive at 768/1024; no horizontal scroll on phones; AA contrast; keyboard-navigable; reduced-motion fallback.

Build it section by section, test responsiveness as you go, and keep forest + leaf green + white consistent from the hero to the footer.