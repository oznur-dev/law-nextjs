import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export default function ServicesPreview() {
  return (
    <Section background="white" padding="md">
      <AnimatedSection animation="fadeInUp">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {siteConfig.pages.home.servicesPreview.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteConfig.pages.home.servicesPreview.description}
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.services.map((service, index) => {
          const badgeVariant = service.color.includes("red")
            ? "red"
            : service.color.includes("pink")
              ? "pink"
              : service.color.includes("blue")
                ? "blue"
                : service.color.includes("green")
                  ? "green"
                  : service.color.includes("purple")
                    ? "purple"
                    : service.color.includes("amber")
                      ? "amber"
                      : "gray";

          return (
            <AnimatedSection
              key={service.id}
              animation="fadeInUp"
              delay={100 + index * 100}
            >
              <Card
                image={service.icon}
                imageAlt={service.title}
                badge={{ text: service.title, variant: badgeVariant }}
                title={service.title}
                description={service.description}
                hover
              />
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection animation="fadeInUp" delay={800}>
        <div className="text-center mt-16">
          <Button href="/services" variant="primary" size="lg">
            Tüm Çalışma Alanları
          </Button>
        </div>
      </AnimatedSection>
    </Section>
  );
}
