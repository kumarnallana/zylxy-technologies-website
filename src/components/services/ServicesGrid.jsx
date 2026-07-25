import Link from "next/link";
import { ServiceCard } from "./ServiceCard";
import { MotionContainer } from "@/components/motion/MotionContainer";
import { MotionItem } from "@/components/motion/MotionItem";

export const ServicesGrid = ({ activeTab, categories, services }) => {
  const visibleCategories =
    activeTab === "All"
      ? categories.filter((c) => c.id !== "All")
      : categories.filter((c) => c.id === activeTab);

  if (activeTab === "All") {
    return (
      <MotionContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
        {services.map((service) => (
          <MotionItem
            direction="up"
            key={service.id}
            className={`${service.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"} block h-full`}
          >
            <Link
              href={service.customRoute || `/services/${service.id}`}
              className="block h-full no-underline"
            >
              {/* headingLevel=2: no category h2 above in All mode, so card title must be h2 */}
              <ServiceCard service={service} headingLevel={2} />
            </Link>
          </MotionItem>
        ))}
      </MotionContainer>
    );
  }

  return (
    <div className="flex flex-col gap-16">
      {visibleCategories.map((category) => {
        const categoryServices = services.filter(
          (service) => service.category === category.id
        );

        if (categoryServices.length === 0) return null;

        return (
          <div key={category.id} className="animate-fade-in-up">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
              <h2 className="font-syne font-bold text-2xl md:text-3xl text-foreground tracking-tight">
                {category.label}
              </h2>
              <span className="px-3 py-1 bg-white/5 text-muted-foreground border border-white/10 text-xs font-bold rounded-full uppercase tracking-wider">
                {categoryServices.length} Services
              </span>
            </div>

            <MotionContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
              {categoryServices.map((service) => (
                <MotionItem
                  direction="up"
                  key={service.id}
                  className={`${service.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"} block h-full`}
                >
                  <Link
                    href={service.customRoute || `/services/${service.id}`}
                    className="block h-full no-underline"
                  >
                    <ServiceCard service={service} />
                  </Link>
                </MotionItem>
              ))}
            </MotionContainer>
          </div>
        );
      })}
    </div>
  );
};
