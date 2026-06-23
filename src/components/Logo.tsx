"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface LogoProps {
  /**
   * Background context. On dark/forest backgrounds the full-color emblem is
   * placed on a white rounded chip so it stays legible; on the white header it
   * sits bare and blends in.
   */
  tone?: "light" | "dark";
  /** Rendered height utility (Tailwind), width scales automatically. */
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Fired on click — e.g. to close the mobile menu when navigating home. */
  onClick?: () => void;
}

const sizes: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-12",
  md: "h-16 md:h-20",
  lg: "h-28",
};

/**
 * Spear Outdoor Services emblem (public/images/logo.webp). The logo art already
 * contains the wordmark, so no separate text is rendered.
 */
export default function Logo({
  tone = "dark",
  size = "md",
  className = "",
  onClick,
}: LogoProps) {
  const onDark = tone === "light";
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    // Already on the home page: navigating to "/" is a no-op, so scroll to top.
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="Spear Outdoor Services — home"
      className={`inline-flex items-center transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
      <span
        className={`inline-flex items-center justify-center ${
          onDark ? "rounded-xl bg-white p-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.25)]" : ""
        }`}
      >
        <Image
          src="/images/logo.webp"
          alt="Spear Outdoor Services logo"
          width={300}
          height={201}
          priority
          className={`${sizes[size]} w-auto`}
        />
      </span>
    </Link>
  );
}
