import ServicesHeroSection from "@/components/ui/pages/services/ServicesHeroSection";
import ServicesShowcaseSection from "@/components/ui/pages/services/ServicesShowcaseSection";
import ServicesCTASection from "@/components/ui/pages/services/ServicesCTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Discover DEVO's comprehensive services in web development, Android app development, and game development. Transform your ideas into digital reality with our expert team.",
};

export default async function ServicesPage() {
  // This page is set to async to support future backend integration
  // You can add data fetching here when needed
  
  return (
    <main className="overflow-hidden flex flex-col gap-24">
      <ServicesHeroSection />
      <ServicesShowcaseSection />
      <ServicesCTASection />
    </main>
  );
}
