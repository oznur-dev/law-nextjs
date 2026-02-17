import { siteConfig } from "@/config/site";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import {
  generateOpenGraph,
  generateTwitterCard,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import ContactForm from "@/components/ui/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${siteConfig.firm.name} ile iletişime geçin. ${siteConfig.firm.address.district}, İstanbul merkezli hukuk büromuzdan hukuki danışmanlık alın.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: generateOpenGraph({
    title: `İletişim - ${siteConfig.firm.name}`,
    description: `${siteConfig.firm.name} ile iletişime geçin. ${siteConfig.firm.address.district}, İstanbul merkezli hukuk büromuzdan hukuki danışmanlık alın.`,
    path: "/contact",
  }),
  twitter: generateTwitterCard({
    title: `İletişim - ${siteConfig.firm.name}`,
    description: `${siteConfig.firm.name} ile iletişime geçin. ${siteConfig.firm.address.district}, İstanbul merkezli hukuk büromuzdan hukuki danışmanlık alın.`,
  }),
};

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema("/contact")),
        }}
      />

      {/* Header Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop&crop=center"
            alt="İletişim"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-blue-900/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              {siteConfig.pages.contact.title}
            </h1>
            <p className="text-xl text-gray-200">
              {siteConfig.pages.contact.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                İletişim Bilgileri
              </h2>

              <div className="space-y-8">
                {/* Office Address */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-800 text-white p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="w-full h-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Ofis Adresi
                    </h3>
                    <p className="text-gray-700">
                      {siteConfig.firm.address.street}
                      <br />
                      {siteConfig.firm.address.district},{" "}
                      {siteConfig.firm.address.city}
                      <br />
                      {siteConfig.firm.address.postalCode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 text-white p-3 rounded-full">
                    <Icon name="phone" size="md" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Telefon
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href={`tel:${siteConfig.firm.phone}`}
                        className="hover:text-blue-800 transition-colors"
                      >
                        {siteConfig.firm.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 text-white p-3 rounded-full">
                    <Icon name="email" size="md" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      E-posta
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href={`mailto:${siteConfig.firm.email}`}
                        className="hover:text-blue-800 transition-colors"
                      >
                        {siteConfig.firm.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Çalışma Saatleri
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3 text-gray-700">
                    <p>{siteConfig.firm.workingHours.weekdays}</p>
                    <p>{siteConfig.firm.workingHours.saturday}</p>
                    <p>{siteConfig.firm.workingHours.sunday}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Acil durumlar için randevu saatleri dışında da görüşme
                      sağlanabilir.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <Section background="gray" padding="lg">
        <div className="text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ücretsiz Ön Görüşme
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hukuki konunuzu değerlendirmek için ücretsiz ön görüşme
              yapabilirsiniz. Randevu almak için bize ulaşın.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={300}>
            <div className="pt-6">
              <Button
                href={`tel:${siteConfig.firm.phone}`}
                variant="phone"
                size="lg"
                icon={<Icon name="phone" size="sm" />}
              >
                Hemen Arayın: {siteConfig.firm.phone}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </div>
  );
}
