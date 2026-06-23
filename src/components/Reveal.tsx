"use client";

import { useEffect, useRef, useState } from "react";

export interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms before this element animates in. */
  delay?: number;
  className?: string;
  /** Wrapper element tag. */
  as?: "div" | "li" | "article" | "span";
}

/**
 * Scroll-reveal wrapper. Uses a single IntersectionObserver to toggle the
 * `is-visible` class (CSS in globals.css handles the transition + the
 * prefers-reduced-motion fallback). Reveals once, then unobserves.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Callback ref avoids the union-element ref typing issue with a dynamic tag.
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={setRef}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
