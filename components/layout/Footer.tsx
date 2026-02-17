import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {siteConfig.firm.name}
            </h3>
            <p className="text-gray-300 mb-2">{siteConfig.firm.title}</p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>{siteConfig.firm.address.street}</p>
              <p>
                {siteConfig.firm.address.district},{" "}
                {siteConfig.firm.address.city}
              </p>
              <p>{siteConfig.firm.address.postalCode}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a
                  href={`tel:${siteConfig.firm.phone}`}
                  className="hover:text-white"
                >
                  {siteConfig.firm.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.firm.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.firm.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Çalışma Saatleri</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p>{siteConfig.firm.workingHours.weekdays}</p>
              <p>{siteConfig.firm.workingHours.saturday}</p>
              <p>{siteConfig.firm.workingHours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {siteConfig.firm.name}. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
