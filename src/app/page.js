import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import { FormProvider } from "@/context/FormContext";
import ServicesPage from "./services/page";

const ClientsSection = dynamic(() => import("@/components/sections/ClientsSection"));
const LeadershipSection = dynamic(() => import("@/components/sections/LeadershipSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/Testimonials"));
const FaqSection = dynamic(() => import("@/components/sections/FAQ"));
const LeadForm = dynamic(() => import("@/components/forms/ZylxyLeadGenForm.jsx"));

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Hero />
      <ClientsSection />
      <FormProvider>
        <ServicesPage />
      </FormProvider>
      <LeadershipSection />
      <TestimonialsSection />
      <FaqSection />
      <LeadForm />
    </div>
  );
}
