"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { GALLERY, COMPANY } from "@/lib/content";

/** "Our Latest Work" gallery with a lightweight keyboard-navigable lightbox. */
export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    [],
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  return (
    <Section id="gallery" tone="white">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <p className="eyebrow">Our latest work</p>
          <h2 className="mt-3 font-display text-[clamp(40px,6vw,72px)] leading-[1.0] text-forest-900">
            Recently Around the Neighborhood
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Button href={COMPANY.bookingUrl} variant="ghost">
            See More of Our Work
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[240px]">
        {GALLERY.map((item, i) => (
          <Reveal
            key={item.img}
            delay={(i % 3) * 90}
            className={i % 5 === 0 ? "row-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative h-full w-full overflow-hidden rounded-card focus-visible:ring-2 focus-visible:ring-leaf"
              aria-label={`View larger: ${item.alt}`}
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-forest-900/0 transition-colors duration-300 group-hover:bg-forest-900/20" />
            </button>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-[13px] text-muted/80">
        {/* PLACEHOLDER — swap in real project photography. */}
        Illustrative placeholders — real gallery photos to be added.
      </p>

      {/* Lightbox */}
      {isOpen && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-950/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 md:left-8"
          >
            ‹
          </button>
          <div
            className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-card"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY[active].img}
              alt={GALLERY[active].alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 md:right-8"
          >
            ›
          </button>
        </div>
      )}
    </Section>
  );
}
