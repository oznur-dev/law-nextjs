import { siteConfig } from "@/config/site";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fadeInUp">
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
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <div>
              <h3 className="text-lg font-semibold mb-4">İletişim</h3>
              <div className="space-y-2 text-gray-300">
                <p>
                  <a
                    href={`tel:${siteConfig.firm.phone}`}
                    className="hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Icon name="phone" size="sm" />
                    <span>{siteConfig.firm.phone}</span>
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${siteConfig.firm.email}`}
                    className="hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Icon name="email" size="sm" />
                    <span>{siteConfig.firm.email}</span>
                  </a>
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Çalışma Saatleri</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <p className="flex items-center space-x-2">
                  <Icon name="clock" size="sm" className="text-green-400" />
                  <span>{siteConfig.firm.workingHours.weekdays}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="clock" size="sm" className="text-yellow-400" />
                  <span>{siteConfig.firm.workingHours.saturday}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Icon name="clock" size="sm" className="text-red-400" />
                  <span>{siteConfig.firm.workingHours.sunday}</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeIn" delay={600}>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {siteConfig.firm.name}. Tüm hakları
              saklıdır.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
