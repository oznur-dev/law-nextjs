import Link from "next/link";
import { siteConfig } from "@/config/site";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";

export default function ContactCTA() {
  return (
    <Section
      background="blue"
      padding="md"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900"></div>
      <div className="relative text-center">
        <AnimatedSection animation="fadeInUp">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hukuki Desteğe Mi İhtiyacınız Var?
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={200}>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Deneyimli ekibimiz size yardımcı olmaya hazır. Ücretsiz ön görüşme
            için hemen iletişime geçin.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scaleIn" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/contact" variant="secondary" size="lg">
              Randevu Alın
            </Button>
            <Button
              href={`tel:${siteConfig.firm.phone}`}
              variant="phone"
              size="lg"
              icon={<Icon name="phone" size="sm" />}
            >
              {siteConfig.firm.phone}
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={600}>
          <div className="text-blue-100 text-sm">
            <p>{siteConfig.firm.workingHours.weekdays}</p>
            <p>{siteConfig.firm.workingHours.saturday}</p>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
