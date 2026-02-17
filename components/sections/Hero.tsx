import Link from "next/link";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-100/50 to-transparent"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src={siteConfig.hero.backgroundImage}
          alt="Justice and law background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {siteConfig.hero.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {siteConfig.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.hero.primaryButton.href}
              className="bg-blue-800 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-900 transition-colors shadow-lg"
            >
              {siteConfig.hero.primaryButton.text}
            </Link>
            <Link
              href={siteConfig.hero.secondaryButton.href}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              {siteConfig.hero.secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
