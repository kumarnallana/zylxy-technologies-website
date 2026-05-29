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
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   │
│   ├── about/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── services/
│   │   ├── page.js
│   │   └── [slug]/
│   │       └── page.js
│   ├── case-studies/
│   │   ├── page.js
│   │   └── [slug]/
│   │       └── page.js
│   └── training/
│       ├── page.js
│       └── [slug]/
│           └── page.js
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── common/
│
├── data/
├── hooks/
├── lib/
├── utils/
│
├── styles/
│   ├── index.js
│   │
│   ├── tokens/
│   │   ├── colors.js
│   │   ├── spacing.js
│   │   ├── typography.js
│   │   ├── shadows.js
│   │   ├── radii.js
│   │   └── breakpoints.js
│   │
│   ├── navbar/
│   │   ├── navbar.dark.js
│   │   ├── navbar.light.js
│   │   ├── navbar.transparent.js
│   │   ├── navbar.mega.js
│   │   └── index.js
│   │
│   ├── buttons/
│   ├── cards/
│   ├── sections/
│   │
│   ├── animations.css
│   └── utilities.css
│
├── public/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── jsconfig.json
├── next.config.mjs
├── package.json
└── eslint.config.mjs
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
