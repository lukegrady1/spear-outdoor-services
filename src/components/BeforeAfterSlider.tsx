"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

export interface BeforeAfterSliderProps {
  beforeImg: string;
  beforeAlt: string;
  afterImg: string;
  afterAlt: string;
  caption?: string;
}

/**
 * Signature before/after wipe. The AFTER image sits as the base layer; the
 * BEFORE image is stacked on top and clipped to the left of the divider.
 * Drag the leaf-green handle (pointer + touch) or focus it and use the arrow
 * keys to wipe between the two states.
 */
export default function BeforeAfterSlider({
  beforeImg,
  beforeAlt,
  afterImg,
  afterAlt,
  caption,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef<boolean>(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    const next = Math.min(100, Math.max(0, ratio * 100));
    setPos(next);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  return (
    <figure className="m-0">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        className="relative aspect-[3/2] w-full select-none overflow-hidden rounded-card shadow-[0_14px_40px_rgba(37,53,44,0.20)] [touch-action:none] [cursor:ew-resize]"
      >
        {/* Base layer: AFTER */}
        <Image
          src={afterImg}
          alt={afterAlt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
          draggable={false}
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-forest-900/85 px-3 py-1 font-display text-[15px] tracking-[0.08em] text-white">
          AFTER
        </span>

        {/* Top layer: BEFORE, clipped to the left of the divider */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={beforeImg}
            alt={beforeAlt}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
            draggable={false}
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-forest-900/85 px-3 py-1 font-display text-[15px] tracking-[0.08em] text-white">
            BEFORE
          </span>
        </div>

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        />
        <div
          role="slider"
          tabIndex={0}
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% before`}
          onKeyDown={handleKeyDown}
          className="absolute top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-leaf text-white shadow-[0_4px_14px_rgba(0,0,0,0.35)] ring-4 ring-white/70 transition-transform hover:scale-105 focus-visible:scale-105"
          style={{ left: `${pos}%` }}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 7l-4 5 4 5" />
            <path d="M15 7l4 5-4 5" />
          </svg>
        </div>
      </div>

      {caption && (
        <figcaption className="mt-3 text-center font-body text-[14px] font-medium uppercase tracking-[0.1em] text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
