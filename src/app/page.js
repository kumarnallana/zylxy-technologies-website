import ClientsSection from "@/components/sections/ClientsSection";
import Hero from "@/components/sections/Hero";
import ServicesExplorer from "@/components/sections/ServicesExplorer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsSection />
      <ServicesExplorer />
    </main>
  );
}
