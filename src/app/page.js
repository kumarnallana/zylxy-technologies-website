import ClientsSection from "@/components/sections/ClientsSection";
import Hero from "@/components/sections/Hero";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsSection />
      <ServicesPage />
      <IndustriesSection />
    </main>
  );
}
