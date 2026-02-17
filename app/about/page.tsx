import { siteConfig } from "@/config/site";
import Image from "next/image";
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {siteConfig.lawyer.name}
              </h2>
              <p className="text-xl text-blue-800 font-medium mb-6">
                {siteConfig.lawyer.title}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Biography */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Profesyonel Geçmiş
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {siteConfig.lawyer.bio}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hukuk büromuz, müvekkillerimizin haklarını korumak ve en iyi
                  hukuki sonuçları elde etmek amacıyla titizlikle çalışmaktadır.
                  Her davaya özel yaklaşım sergileyerek, müvekkillerimizin
                  güvenini kazanmaya odaklanıyoruz.
                </p>
              </div>

              {/* Credentials */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Eğitim ve Yetkinlikler
                </h3>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Eğitim</h4>
                    <p className="text-gray-700">
                      {siteConfig.lawyer.education}
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Deneyim
                    </h4>
                    <p className="text-gray-700">
                      {siteConfig.lawyer.experience} Yıl
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Baro Sicil No
                    </h4>
                    <p className="text-gray-700">
                      {siteConfig.lawyer.barNumber}
                    </p>
                  </div>
                </div>
              </div>
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hukuki Desteğe İhtiyacınız mı Var?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Deneyimli ekibimizle görüşmek için iletişime geçebilirsiniz. Size en
            uygun çözümü birlikte bulalım.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-800 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-900 transition-colors"
            >
              İletişime Geçin
            </a>
            <a
              href={`tel:${siteConfig.firm.phone}`}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              {siteConfig.firm.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
