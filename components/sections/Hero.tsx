import Link from "next/link";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section
      background="white"
      padding="lg"
      className="relative overflow-hidden page-transition"
    >
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

      <div className="relative text-center max-w-4xl mx-auto">
        <AnimatedSection animation="fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteConfig.hero.title}
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={150}>
          <p className="text-xl text-gray-600 mb-4">
            {siteConfig.hero.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={300}>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {siteConfig.hero.description}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scaleIn" delay={450}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              href={siteConfig.hero.primaryButton.href}
              variant="primary"
              size="lg"
            >
              {siteConfig.hero.primaryButton.text}
            </Button>
            <Button
              href={siteConfig.hero.secondaryButton.href}
              variant="secondary"
              size="lg"
            >
              {siteConfig.hero.secondaryButton.text}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
