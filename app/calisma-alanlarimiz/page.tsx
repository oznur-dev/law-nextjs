import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Çalışma Alanlarımız - ${siteConfig.firm.name}`,
  description:
    "Ceza, aile, iş, ticaret, gayrimenkul ve miras hukuku alanlarında profesyonel hukuki danışmanlık hizmetleri.",
};

export default function CalismaAlanlarimizPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Çalışma Alanlarımız
            </h1>
            <p className="text-xl text-gray-600">
              Deneyimli hukuk ekibimiz, farklı hukuk alanlarında
              müvekkillerimize kapsamlı ve güvenilir hukuki hizmetler
              sunmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hangi Konuda Yardıma İhtiyacınız Var?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Yukarıdaki çalışma alanlarımız dışında da hukuki konularda size
            destek olabiliriz. Ücretsiz ön görüşme için iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
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
