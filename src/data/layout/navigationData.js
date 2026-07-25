import {
  Activity,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  Cpu,
  Factory,
  Globe,
  GraduationCap,
  Home,
  Laptop,
  Layout,
  Palette,
  Rocket,
  ShoppingBag,
  Smartphone,
  Target,
  TrendingUp,
  Truck,
  Wallet,
  Workflow,
  Wrench,
} from "lucide-react";

export const ANNOUNCEMENT_DATA = {
  location: "Next-Gen Software Engineering & Intelligent AI Solutions",
  contacts: [
    {
      label: "WhatsApp",
      value: "+91 9108 703 123",
      url: "https://wa.me/919108703123",
      type: "whatsapp",
    },
    {
      label: "US Phone",
      value: "+1 (203) 954-7392",
      url: "tel:+12039547392",
      type: "phone",
    },
    {
      label: "Email",
      value: "zylxytechnologies@gmail.com",
      url: "mailto:zylxytechnologies@gmail.com",
      type: "email",
    },
    {
      label: "LinkedIn",
      value: "Zylxy Technologies",
      url: "https://www.linkedin.com/company/zylxy/",
      type: "linkedin",
    },
    {
      label: "Facebook",
      value: "Zylxy Technologies",
      url: "https://www.facebook.com/zylxy/",
      type: "facebook",
    },
    {
      label: "Behance",
      value: "zylxytechnologies",
      url: "https://www.behance.net/zylxytechnologies",
      type: "behance",
    },
  ],
};

export const NAVBAR_DATA = {
  logoAlt: "Zylxy Technologies logo",
  brandName: "Zylxy",
  brandSubtitle: "Technologies",
  menuItems: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      isMegaMenu: true,
      pillars: [
        {
          title: "Software Development",
          items: [
            {
              name: "Web Application Development",
              slug: "web-application-development",
              icon: Globe,
            },
            {
              name: "Mobile Application Development",
              slug: "mobile-application-development",
              icon: Smartphone,
            },
            {
              name: "Custom Software Development",
              slug: "custom-software-development",
              icon: Cpu,
            },
            {
              name: "UI/UX Design & Prototyping",
              slug: "ui-ux-design",
              icon: Layout,
            },
            {
              name: "Brand & Creative Design",
              slug: "brand-creative-design",
              icon: Palette,
            },
            {
              name: "Application Support & Maintenance",
              slug: "application-support",
              icon: Wrench,
            },
          ],
        },
        {
          title: "AI & CRM Solutions",
          items: [
            {
              name: "AI Engineering & Automation",
              slug: "ai-engineering-automation",
              icon: Bot,
            },
            {
              name: "HubSpot CRM Implementation",
              slug: "hubspot-crm-implementation",
              customRoute: "/hubspot",
              icon: Workflow,
            },
          ],
        },
        {
          title: "Recruitment Services",
          items: [
            {
              name: "Talent Acquisition",
              slug: "talent-acquisition",
              customRoute: "/careers/recruitment-services/talent-acquisition",
              icon: Target,
            },
            {
              name: "Campus Recruitment",
              slug: "campus-recruitment",
              customRoute: "/careers/recruitment-services/campus-recruitment",
              icon: TrendingUp,
            },
          ],
        },
        {
          title: "Training & Placement",
          items: [
            {
              name: "Corporate Training",
              slug: "corporate-training",
              icon: Building2,
            },
            {
              name: "Academic Partnerships",
              slug: "academic-partnerships",
              icon: GraduationCap,
            },
            {
              name: "Internship Programs",
              slug: "internship-programs",
              icon: Laptop,
            },
            {
              name: "Placement Assistance",
              slug: "placement-assistance",
              icon: Briefcase,
            },
          ],
        },
      ],
      featured: {
        title: "Enterprise HubSpot Implementation",
        desc: "Transform your operations with a properly architected CRM. Automate pipelines, cleanse data, and align sales with marketing.",
        ctaLabel: "View Case Study",
        ctaHref: "/hubspot",
        tag: "Featured Solution"
      }
    },
    {
      label: "Industries",
      href: "/#LeadGen",
      isMegaMenu: true,
      industries: [
        {
          name: "Healthcare",
          desc: "HIPAA-aware digital products, patient-facing portals, and clinic management systems.",
          icon: Activity,
        },
        {
          name: "Retail",
          desc: "E-commerce platforms, inventory systems, and loyalty-driven digital experiences.",
          icon: ShoppingBag,
        },
        {
          name: "Education",
          desc: "LMS builds, training platforms, ed-tech apps, and student management dashboards.",
          icon: BookOpen,
        },
        {
          name: "Manufacturing",
          desc: "ERP integrations, supply-chain automation, and operational analytics tools.",
          icon: Factory,
        },
        {
          name: "Logistics",
          desc: "Fleet tracking interfaces, delivery management software, and route-optimization dashboards.",
          icon: Truck,
        },
        {
          name: "Real Estate",
          desc: "Property listing portals, CRM pipelines, and lead-nurturing automations for agencies.",
          icon: Home,
        },
        {
          name: "Startups",
          desc: "MVP-to-market development, rapid iteration cycles, and investor-ready digital presence.",
          icon: Rocket,
        },
        {
          name: "FinTech",
          desc: "Secure payment flows, regulatory-compliant apps, and financial analytics dashboards.",
          icon: Wallet,
        },
      ],
    },
    { label: "Contact", href: "/#LeadGen" },
  ],
  buttons: [
    { label: "HubSpot CRM", variant: "hubspot", href: "/hubspot" },
    { label: "Free Consultation", variant: "primary", href: "/#LeadGen" },
  ],
};
