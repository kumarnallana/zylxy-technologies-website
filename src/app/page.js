import CaseStudiesSection from "@/components/sections/CaseStudies";
import ClientsSection from "@/components/sections/ClientsSection";
import Hero from "@/components/sections/Hero";
import IndustriesSection from "@/components/sections/IndustriesSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import TestimonialsSection from "@/components/sections/Testimonials";
import ServicesPage from "./services/page";
export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsSection />
      <ServicesPage />
      <IndustriesSection />
      <CaseStudiesSection />
      <LeadershipSection />
      <TestimonialsSection />
    </main>
  );
}
