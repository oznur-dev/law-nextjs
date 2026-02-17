import { siteConfig } from "@/config/site";
import Image from "next/image";
import {
  generateOpenGraph,
  generateTwitterCard,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çalışma Alanlarımız",
  description:
    "Ceza, aile, iş, ticaret, gayrimenkul ve miras hukuku alanlarında profesyonel hukuki danışmanlık hizmetleri.",
  alternates: {
    canonical: "/services",
  },
  openGraph: generateOpenGraph({
    title: `Çalışma Alanlarımız - ${siteConfig.firm.name}`,
    description:
      "Ceza, aile, iş, ticaret, gayrimenkul ve miras hukuku alanlarında profesyonel hukuki danışmanlık hizmetleri.",
    path: "/services",
  }),
  twitter: generateTwitterCard({
    title: `Çalışma Alanlarımız - ${siteConfig.firm.name}`,
    description:
      "Ceza, aile, iş, ticaret, gayrimenkul ve miras hukuku alanlarında profesyonel hukuki danışmanlık hizmetleri.",
  }),
};

export default function CalismaAlanlarimizPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema("/services")),
        }}
      />

      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {siteConfig.pages.services.title}
            </h1>
            <p className="text-xl text-gray-600">
              {siteConfig.pages.services.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteConfig.services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative h-64">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium mb-2 ${service.color}`}
                    >
                      Çalışma Alanı
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-600">
                      Bu konuda hukuki desteğe ihtiyacınız varsa, deneyimli
                      ekibimizle iletişime geçebilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {siteConfig.pages.services.contactSection.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {siteConfig.pages.services.contactSection.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-800 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-900 transition-colors"
            >
              İletişim Formu
            </a>
            <a
              href={`tel:${siteConfig.firm.phone}`}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-white transition-colors"
            >
              {siteConfig.firm.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
