import {
  COMPANY,
  SERVICES,
  SERVICE_AREA_TOWNS,
  SITE_URL,
} from "@/lib/content";

/**
 * LocalBusiness (LandscapingBusiness) structured data for local SEO. Helps
 * search engines understand the business name, location, service area, phone,
 * and offerings — and can power rich results / map listings.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "@id": `${SITE_URL}/#business`,
    name: COMPANY.name,
    description:
      "Locally owned lawn care & landscaping in Upton, MA — weekly mowing, mulch installation, and seasonal cleanups. Honest work, fair pricing, free estimates.",
    url: SITE_URL,
    image: `${SITE_URL}/images/logo.webp`,
    logo: `${SITE_URL}/images/logo.webp`,
    telephone: COMPANY.phoneHref.replace("tel:", ""),
    founder: { "@type": "Person", name: COMPANY.owner },
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Upton",
      addressRegion: "MA",
      addressCountry: "US",
    },
    areaServed: SERVICE_AREA_TOWNS.map((town) => ({
      "@type": "City",
      name: `${town}, MA`,
    })),
    sameAs: [COMPANY.facebookUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lawn Care & Landscaping Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.blurb,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline as JSON-LD.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
