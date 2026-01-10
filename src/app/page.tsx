import HeroSection from "@/components/ui/pages/home/HeroSection";
import DedicationSection from "@/components/ui/pages/home/DedicationSection";
import ProjectsSection from "@/components/ui/pages/home/ProjectsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to DEVO's Portfolio, Fullstack Web Developer, App Developer, and Game Developer. We offer top-notch development services to bring your ideas to life.",
};

export default function Home() {
  return (
    <main className="overflow-x-hidden flex flex-col gap-24">
      <HeroSection />
      <DedicationSection />
      <ProjectsSection />
    </main>
  );
}
