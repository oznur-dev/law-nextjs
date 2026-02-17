import { siteConfig } from "@/config/site";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  generateOpenGraph,
  generateTwitterCard,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çalışma Alanlarımız",
  description:
    "Ceza, aile, iş, ticaret, gayrimenkul ve miras hukuku alanlarında profesyonel hukuki danışmanlık hizmetleri.",
  alternates: {
    canonical: "/services",
  },
  openGraph: generateOpenGraph({
    title: `Çalışma Alanlarımız - ${siteConfig.firm.name}`,
    description:
      "Ceza, aile, iş, ticaret, gayrimenkul ve miras hukuku alanlarında profesyonel hukuki danışmanlık hizmetleri.",
    path: "/services",
  }),
  twitter: generateTwitterCard({
    title: `Çalışma Alanlarımız - ${siteConfig.firm.name}`,
    description:
      "Ceza, aile, iş, ticaret, gayrimenkul ve miras hukuku alanlarında profesyonel hukuki danışmanlık hizmetleri.",
  }),
};

export default function CalismaAlanlarimizPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema("/services")),
        }}
      />

      {/* Header Section */}
      <Section background="gray" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {siteConfig.pages.services.title}
          </h1>
          <p className="text-xl text-gray-600">
            {siteConfig.pages.services.description}
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                delay={100 + index * 150}
              >
                <Card
                  image={service.icon}
                  imageAlt={service.title}
                  badge={{
                    text: "Çalışma Alanı",
                    variant: badgeVariant,
                  }}
                  title={service.title}
                  description={service.description}
                  hover
                ></Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* Contact Section */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {siteConfig.pages.services.contactSection.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {siteConfig.pages.services.contactSection.description}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button href="/contact" variant="primary" size="lg">
                İletişim Formu
              </Button>
              <Button
                href={`tel:${siteConfig.firm.phone}`}
                variant="secondary"
                size="lg"
              >
                {siteConfig.firm.phone}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </div>
  );
}
