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

              {/* Key Highlights */}
              <AnimatedSection animation="fadeInRight" delay={400}>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Temel Bilgiler
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon
                          name="check"
                          size="md"
                          className="text-blue-600"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Deneyim</h4>
                        <p className="text-gray-600">
                          {siteConfig.lawyer.experience} yıllık profesyonel
                          tecrübe
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon
                          name="check"
                          size="md"
                          className="text-green-600"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Çalışma Alanları
                        </h4>
                        <p className="text-gray-600">
                          {siteConfig.services.length} farklı hukuk dalında
                          uzmanlaşma
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Icon
                          name="check"
                          size="md"
                          className="text-purple-600"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Konum</h4>
                        <p className="text-gray-600">
                          İstanbul merkezli hizmet
                        </p>
                      </div>
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
