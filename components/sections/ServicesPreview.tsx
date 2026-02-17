import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Çalışma Alanlarımız
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Geniş deneyimimiz ile farklı hukuk alanlarında müvekkillerimize
            profesyonel hizmet sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/calisma-alanlarimiz"
            className="bg-blue-800 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-900 transition-colors"
          >
            Tüm Çalışma Alanları
          </Link>
        </div>
      </div>
    </section>
  );
}
