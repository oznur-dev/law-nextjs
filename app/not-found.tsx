import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="block bg-blue-800 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-900 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="text-blue-800 hover:text-blue-900 font-medium"
            >
              Çalışma Alanları
            </Link>
            <Link
              href="/about"
              className="text-blue-800 hover:text-blue-900 font-medium"
            >
              Hakkımızda
            </Link>
            <Link
              href="/contact"
              className="text-blue-800 hover:text-blue-900 font-medium"
            >
              İletişim
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Hala yardıma ihtiyacınız varsa, bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
