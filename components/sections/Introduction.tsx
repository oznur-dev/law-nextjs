import { siteConfig } from "@/config/site";

export default function Introduction() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Hukuki Danışmanlık ve Temsil
          </h2>
          <p className="text-lg text-gray-700 mb-6">{siteConfig.lawyer.bio}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800 mb-2">
                {siteConfig.lawyer.experience}+
              </div>
              <p className="text-gray-600">Yıl Deneyim</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800 mb-2">
                {siteConfig.services.length}
              </div>
              <p className="text-gray-600">Çalışma Alanı</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800 mb-2">
                İstanbul
              </div>
              <p className="text-gray-600">Merkez Konum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
