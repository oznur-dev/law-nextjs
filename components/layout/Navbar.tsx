import Link from "next/link";
import { siteConfig } from "@/config/site";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/about" },
  { name: "Çalışma Alanlarımız", href: "/services" },
  { name: "İletişim", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 hover:text-blue-800"
            >
              {siteConfig.firm.name}
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.firm.phone}`}
              className="text-sm text-gray-600 hover:text-blue-800"
            >
              {siteConfig.firm.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
