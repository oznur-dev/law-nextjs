import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteConfig.firm.name}
          </h1>
          <p className="text-xl text-gray-600 mb-4">{siteConfig.firm.title}</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            İstanbul merkezli hukuk bürosu olarak, müvekkillerimize profesyonel
            hukuki danışmanlık ve temsil hizmetleri sunuyoruz.{" "}
            {siteConfig.lawyer.experience} yıllık deneyimimizle güvenilir
            çözümler üretiyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-800 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-900 transition-colors"
            >
              İletişime Geçin
            </Link>
            <Link
              href="/services"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              Çalışma Alanları
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
