import Image from "next/image";
import type { IconName } from "@/lib/content";
import { ServiceIcon, ArrowIcon } from "@/components/icons";

export interface ServiceCardProps {
  title: string;
  blurb: string;
  href: string;
  img: string;
  alt: string;
  icon: IconName;
}

/**
 * Image-topped service card. On desktop the blurb is hidden and revealed on
 * hover (with a card lift); below `md` the blurb shows by default.
 */
export default function ServiceCard({
  title,
  blurb,
  href,
  img,
  alt,
  icon,
}: ServiceCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-card bg-white shadow-[0_6px_24px_rgba(37,53,44,0.10)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(37,53,44,0.20)] focus-visible:-translate-y-1.5"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* leaf icon chip */}
        <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sage shadow-sm">
          <ServiceIcon name={icon} className="h-6 w-6" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[clamp(24px,3vw,30px)] leading-[1.1] text-forest-900">
          {title}
        </h3>

        {/* Revealed on hover at md+, always visible below md. */}
        <div className="max-h-40 opacity-100 transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-focus-visible:max-h-40 md:group-focus-visible:opacity-100">
          <p className="pt-2 text-[15px] leading-relaxed text-muted">{blurb}</p>
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-leaf">
          Learn more
          <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}
