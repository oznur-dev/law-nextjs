import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import { generateBreadcrumbSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema("/")),
        }}
      />
      <Hero />
      <Introduction />
      <ServicesPreview />
      <ContactCTA />
    </>
  );
}
