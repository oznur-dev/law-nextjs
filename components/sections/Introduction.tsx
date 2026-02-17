import { siteConfig } from "@/config/site";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Section from "@/components/ui/Section";

export default function Introduction() {
  return (
    <Section background="gray" padding="md">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Hukuki Danışmanlık ve Temsil
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={200}>
          <p className="text-lg text-gray-700 mb-6">{siteConfig.lawyer.bio}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <AnimatedSection animation="scaleIn" delay={400}>
            <div className="text-center group">
              <div className="text-2xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                {siteConfig.lawyer.experience}+
              </div>
              <p className="text-gray-600">Yıl Deneyim</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={500}>
            <div className="text-center group">
              <div className="text-2xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                {siteConfig.services.length}
              </div>
              <p className="text-gray-600">Çalışma Alanı</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={600}>
            <div className="text-center group">
              <div className="text-2xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                İstanbul
              </div>
              <p className="text-gray-600">Merkez Konum</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}
