import Link from "next/link";
import { siteConfig } from "@/config/site";
import Icon from "@/components/ui/Icon";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/about" },
  { name: "Çalışma Alanlarımız", href: "/services" },
  { name: "İletişim", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 hover:text-blue-800 transition-colors duration-300"
            >
              {siteConfig.firm.name}
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.firm.phone}`}
              className="text-sm text-gray-600 hover:text-blue-800 transition-colors duration-300 flex items-center space-x-2"
            >
              <Icon name="phone" size="sm" />
              <span>{siteConfig.firm.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
