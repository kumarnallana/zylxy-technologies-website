# Zylxy Technologies Website

Official corporate website for Zylxy Technologies built using Next.js and modern frontend architecture.

---

## Tech Stack

* Next.js
* React
* JavaScript
* Tailwind CSS
* PostCSS
* ESLint

---

## Features

* Modern responsive UI
* Dynamic routing with App Router
* Service detail pages
* Case studies section
* Training modules
* Reusable component architecture
* Modular styling system
* SEO-friendly structure
* Scalable frontend architecture

---

# Project Structure

```bash
src/
├── app/
│   ├── layout.jsx             # Global HTML shell (injects Navbar, Footer, and fonts)
│   ├── page.jsx               # Core visual layout of the Homepage
│   ├── globals.css            # Base Tailwind imports and global style declarations
│   │
│   ├── about/
│   │   └── page.jsx           # Corporate profile & history page
│   ├── contact/
│   │   └── page.jsx           # Contact form and location details page
│   │
│   ├── services/
│   │   ├── page.jsx           # Main services directory list page
│   │   └── [slug]/
│   │       └── page.jsx       # Individual dynamic service details page
│   │
│   ├── case-studies/
│   │   ├── page.jsx           # Success stories directory list page
│   │   └── [slug]/
│   │       └── page.jsx       # Dynamic case study breakdown page
│   │
│   ├── training/
│   │   ├── page.jsx           # Educational modules directory page
│   │   └── [slug]/
│   │       └── page.jsx       # Dynamic course overview page
│   │
│   └── api/
│       ├── contact/
│       │   └── route.js       # Legacy contact message submission API endpoint
│       └── lead/
│           └── route.js       # Secure data storage endpoint for the LeadGen form submission
│
├── components/
│   ├── layout/                # Main persistent layout parts (.jsx)
│   │   ├── AnnouncementBar.jsx
│   │   ├── Navbar.jsx         # Houses visual placeholder login element
│   │   ├── Footer.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── MegaMenu.jsx
│   │   └── index.js           # Barrel export file for layout directory
│   │
│   ├── sections/              # Page-level content section blocks (.jsx)
│   │   ├── Hero.jsx
│   │   ├── ClientsSection.jsx
│   │   ├── ServicesExplorer.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── IndustriesSection.jsx
│   │   ├── LeadershipSection.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── LeadGen.jsx        # Submits captured user data to /api/lead/route.js
│   │   ├── CTASection.jsx
│   │   ├── StatsSection.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── FeatureGrid.jsx
│   │   └── index.js
│   │
│   ├── ui/                    # Atomic, low-level primitive items (.jsx)
│   │   ├── Button.jsx         # Unified wrapper for primary, secondary, and legacy button states
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── CaseCard.jsx
│   │   ├── IndustryCard.jsx
│   │   ├── LeaderCard.jsx
│   │   ├── FAQItem.jsx
│   │   ├── FormField.jsx
│   │   ├── FormSelect.jsx
│   │   ├── FormTextarea.jsx
│   │   ├── Tabs.jsx
│   │   ├── Modal.jsx
│   │   ├── Accordion.jsx
│   │   ├── Badge.jsx
│   │   ├── Input.jsx
│   │   ├── Textarea.jsx
│   │   ├── Select.jsx
│   │   ├── Pagination.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Tag.jsx
│   │   ├── Pill.jsx
│   │   ├── Skeleton.jsx
│   │   ├── Spinner.jsx
│   │   └── index.js
│   │
│   └── common/                # Shared layout decorations (.jsx)
│       ├── Container.jsx
│       ├── PageHeader.jsx
│       ├── EmptyState.jsx
│       ├── ErrorState.jsx
│       ├── SeoHead.jsx
│       ├── TechOrb.jsx
│       ├── CircularOrb.jsx
│       ├── AtomNode.jsx
│       ├── SectionPill.jsx
│       ├── GradientText.jsx
│       ├── Divider.jsx
│       └── index.js
│
├── styles/                    # Centralized Tailwind Object Repository (.js)
│   ├── index.js               # Combines and exports all style variants globally
│   │
│   ├── tokens/                # System core variables mapped to utilities
│   │   ├── colors.js
│   │   ├── spacing.js
│   │   ├── typography.js
│   │   ├── shadows.js
│   │   ├── radii.js
│   │   ├── breakpoints.js
│   │   ├── zIndex.js
│   │   ├── opacity.js
│   │   ├── gradients.js
│   │   ├── transitions.js
│   │   └── index.js
│   │
│   ├── navbar/                # Configuration variations for headers (static placeholders included)
│   │   ├── navbar.dark.js
│   │   ├── navbar.light.js
│   │   ├── navbar.transparent.js
│   │   ├── navbar.mega.js
│   │   ├── navbar.mobile.js
│   │   └── index.js
│   │
│   ├── buttons/
│   │   ├── primary.js
│   │   ├── secondary.js
│   │   ├── outline.js
│   │   ├── ghost.js
│   │   ├── icon.js
│   │   └── index.js
│   │
│   ├── cards/
│   │   ├── serviceCard.js
│   │   ├── testimonialCard.js
│   │   ├── caseCard.js
│   │   ├── industryCard.js
│   │   ├── leaderCard.js
│   │   ├── faqCard.js
│   │   ├── featureCard.js
│   │   ├── statsCard.js
│   │   ├── pricingCard.js
│   │   └── index.js
│   │
│   ├── forms/
│   │   ├── input.js
│   │   ├── textarea.js
│   │   ├── select.js
│   │   ├── checkbox.js
│   │   ├── radio.js
│   │   ├── label.js
│   │   └── index.js
│   │
│   ├── sections/
│   │   ├── hero.js
│   │   ├── industries.js
│   │   ├── leadership.js
│   │   ├── faq.js
│   │   ├── footer.js
│   │   ├── leadGen.js
│   │   ├── testimonials.js
│   │   ├── services.js
│   │   ├── caseStudies.js
│   │   ├── process.js
│   │   ├── stats.js
│   │   ├── cta.js
│   │   └── index.js
│   │
│   ├── layouts/
│   │   ├── container.js
│   │   ├── grids.js
│   │   ├── flex.js
│   │   ├── spacing.js
│   │   └── index.js
│   │
│   ├── themes/
│   │   ├── dark.js
│   │   ├── light.js
│   │   ├── enterprise.js
│   │   └── index.js
│   │
│   # 4 Style utility buckets for design modularity
│   ├── badges/
│   │   └── badge.js           # Utility strings for status flags and tags
│   ├── tooltips/
│   │   └── tooltip.js         # Context popover visual definitions
│   ├── overlays/
│   │   └── overlay.js         # Backdrop dimming and modal shading patterns
│   ├── lists/
│   │   └── list.js            # Bullet points, sorting, and structural lines
│   │
│   ├── animations.css
│   ├── utilities.css
│   ├── forms.css
│   ├── effects.css
│   ├── prose.css
│   ├── typography.css
│   ├── variables.css
│   └── globals.css            # Entry style workspace linking Tailwind engine
│
├── data/                      # Local Mock Database text matrices (.js)
│   ├── servicesData.js
│   ├── testimonialsData.js
│   ├── faqData.js
│   ├── caseStudiesData.js
│   ├── statsData.js
│   ├── navigationData.js
│   ├── footerData.js
│   ├── trainingData.js
│   ├── seoData.js
│   ├── industriesData.js
│   └── teamData.js
│
├── lib/                       # Core setup and platform configs (.js)
│   ├── constants.js
│   ├── routes.js
│   ├── seo.js
│   ├── metadata.js
│   ├── content.js
│   ├── fonts.js
│   ├── siteConfig.js
│   └── analytics.js
│
└── utils/                     # Pure logic functional tools (.js)
    ├── slugify.js
    ├── formatText.js
    ├── cn.js                  # Tailwind class variant manager and override utility
    ├── validateForm.js
    ├── scrollTo.js
    ├── formatDate.js
    ├── truncate.js
    ├── debounce.js
    ├── throttle.js
    ├── classNames.js
    └── generateMeta.js

public/
├── images/
│   ├── hero/
│   ├── services/
│   ├── case-studies/
│   ├── testimonials/
│   ├── backgrounds/
│   └── illustrations/
├── icons/
├── logos/
├── favicons/
└── fonts/
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/zylxy-technologies-website.git
```

Move into the project directory:

```bash
cd zylxy-technologies-website
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# Build for Production

```bash
npm run build
```

---

# Start Production Server

```bash
npm start
```

---

# Git Workflow

Check changes:

```bash
git status
```

Add files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "your commit message"
```

Push to GitHub:

```bash
git push origin main
```

---

# Recommended .gitignore

```gitignore
node_modules
.next
.env
dist
build
```

---

# Deployment

Recommended deployment platforms:

* Vercel
* Netlify

---

# Author

Zylxy Technologies
