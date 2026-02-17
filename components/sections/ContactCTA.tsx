import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hukuki Desteğe Mi İhtiyacınız Var?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Deneyimli ekibimiz size yardımcı olmaya hazır. Ücretsiz ön görüşme
            için hemen iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-white text-blue-800 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Randevu Alın
            </Link>
            <a
              href={`tel:${siteConfig.firm.phone}`}
              className="border border-blue-100 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              {siteConfig.firm.phone}
            </a>
          </div>

          <div className="text-blue-100 text-sm">
            <p>{siteConfig.firm.workingHours.weekdays}</p>
            <p>{siteConfig.firm.workingHours.saturday}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
