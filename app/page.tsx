import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesPreview />
      <ContactCTA />
    </>
  );
}
