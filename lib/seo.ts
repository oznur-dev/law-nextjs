import { siteConfig } from "@/config/site";

export const baseUrl = "https://www.yilmazkayahukuk.com";

export function generateOpenGraph({
  title,
  description,
  path = "/",
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
}) {
  return {
    title,
    description,
    url: `${baseUrl}${path}`,
    siteName: siteConfig.firm.name,
    locale: "tr_TR",
    type,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.firm.name} - İstanbul Hukuk Bürosu`,
      },
    ],
  };
}

export function generateTwitterCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return {
    card: "summary_large_image",
    title,
    description,
    creator: "@yilmazkayahukuk",
    images: [`${baseUrl}/og-image.jpg`],
  };
}

export function generateLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.firm.name,
    description: siteConfig.seo.description,
    url: baseUrl,
    image: `${baseUrl}/og-image.jpg`,
    telephone: siteConfig.firm.phone,
    email: siteConfig.firm.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.firm.address.street,
      addressLocality: siteConfig.firm.address.district,
      addressRegion: siteConfig.firm.address.city,
      postalCode: siteConfig.firm.address.postalCode,
      addressCountry: "TR",
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    serviceType: siteConfig.services.map((service) => service.title),
    founder: {
      "@type": "Person",
      name: siteConfig.lawyer.name,
      jobTitle: siteConfig.lawyer.title,
      worksFor: {
        "@type": "LegalService",
        name: siteConfig.firm.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "47",
    },
    priceRange: "$$",
  };
}

export function generateBreadcrumbSchema(path: string) {
  const paths = path.split("/").filter(Boolean);
  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: baseUrl,
    },
  ];

  paths.forEach((segment, index) => {
    let name = "";
    switch (segment) {
      case "about":
        name = "Hakkımızda";
        break;
      case "services":
        name = "Çalışma Alanlarımız";
        break;
      case "contact":
        name = "İletişim";
        break;
      default:
        name = segment;
    }

    breadcrumbs.push({
      "@type": "ListItem",
      position: index + 2,
      name,
      item: `${baseUrl}/${paths.slice(0, index + 1).join("/")}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs,
  };
}
