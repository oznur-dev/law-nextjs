import { siteConfig } from "@/config/site";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import {
  generateOpenGraph,
  generateTwitterCard,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${siteConfig.lawyer.name} ve ekibi hakkında bilgi. ${siteConfig.lawyer.experience} yıllık deneyim ile hukuki danışmanlık hizmetleri.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: generateOpenGraph({
    title: `Hakkımızda - ${siteConfig.firm.name}`,
    description: `${siteConfig.lawyer.name} ve ekibi hakkında bilgi. ${siteConfig.lawyer.experience} yıllık deneyim ile hukuki danışmanlık hizmetleri.`,
    path: "/about",
  }),
  twitter: generateTwitterCard({
    title: `Hakkımızda - ${siteConfig.firm.name}`,
    description: `${siteConfig.lawyer.name} ve ekibi hakkında bilgi. ${siteConfig.lawyer.experience} yıllık deneyim ile hukuki danışmanlık hizmetleri.`,
  }),
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema("/about")),
        }}
      />

      {/* Header Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=600&fit=crop&crop=center"
            alt="Hukuk bürosu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              {siteConfig.pages.about.title}
            </h1>
            <p className="text-xl text-gray-200">
              {siteConfig.pages.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Lawyer Profile Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {siteConfig.lawyer.name}
                </h2>
                <p className="text-xl text-blue-800 font-medium mb-6">
                  {siteConfig.lawyer.title}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Biography */}
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Profesyonel Geçmiş
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {siteConfig.lawyer.bio}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Hukuk büromuz, müvekkillerimizin haklarını korumak ve en iyi
                    hukuki sonuçları elde etmek amacıyla titizlikle
                    çalışmaktadır. Her davaya özel yaklaşım sergileyerek,
                    müvekkillerimizin güvenini kazanmaya odaklanıyoruz.
                  </p>
                </div>
              </AnimatedSection>

              {/* Credentials */}
              <AnimatedSection animation="fadeInRight" delay={400}>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Eğitim ve Yetkinlikler
                  </h3>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                        </svg>
                        <span>Eğitim</span>
                      </h4>
                      <p className="text-gray-700">
                        {siteConfig.lawyer.education}
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Deneyim</span>
                      </h4>
                      <p className="text-gray-700">
                        {siteConfig.lawyer.experience} Yıl
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>Baro Sicil No</span>
                      </h4>
                      <p className="text-gray-700">
                        {siteConfig.lawyer.barNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Çalışma Prensiplerimiz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Güvenilirlik
              </h3>
              <p className="text-gray-600">
                Müvekkillerimizin güvenini kazanmak ve korumak en önemli
                önceliğimizdir.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Profesyonellik
              </h3>
              <p className="text-gray-600">
                Her davada titiz çalışma ve profesyonel yaklaşım ile en iyi
                sonuçları hedefliyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Etik Değerler
              </h3>
              <p className="text-gray-600">
                Hukuki etik kurallara sıkı sıkıya bağlı kalarak adil ve dürüst
                hizmet sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <Section background="white" padding="lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hukuki Desteğe İhtiyacınız mı Var?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Deneyimli ekibimizle görüşmek için iletişime geçebilirsiniz. Size en
            uygun çözümü birlikte bulalım.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              İletişime Geçin
            </Button>
            <Button
              href={`tel:${siteConfig.firm.phone}`}
              variant="secondary"
              size="lg"
            >
              {siteConfig.firm.phone}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
