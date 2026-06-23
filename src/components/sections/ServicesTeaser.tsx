import Reveal from "@/components/Reveal";
import { ServiceIcon } from "@/components/icons";
import { SERVICES } from "@/lib/content";

/** Three quick icon tiles directly under the hero — a fast jump menu. */
export default function ServicesTeaser() {
  return (
    <div className="bg-white">
      <div className="mx-auto -mt-12 max-w-site px-6">
        <div className="grid gap-px overflow-hidden rounded-card border border-forest-900/10 bg-forest-900/10 sm:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <a
                href="/services"
                className="group flex h-full items-center gap-4 bg-white px-6 py-7 transition-colors hover:bg-mist"
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-mist text-sage transition-colors group-hover:bg-leaf group-hover:text-white">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </span>
                <span>
                  <span className="block font-display text-[24px] leading-none text-forest-900">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted">
                    View service
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
