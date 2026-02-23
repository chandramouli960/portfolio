# Chandramouli Bhandaru | QA Automation Engineer Portfolio

A modern, space-themed portfolio showcasing QA Automation Engineering experience, built with Next.js and deployed on GitHub Pages.

**Live Site:** [https://chandramouli960.github.io/portfolio/](https://chandramouli960.github.io/portfolio/)

---

## Features

- **Single-page layout** with smooth scroll navigation
- **Intro animation** (4.5s) with profile reveal and loading dots
- **Starfield background** with layered twinkling stars
- **Responsive design** — mobile-first, works across all devices
- **Sections:** Hero, About, Skills, Experience, Projects, Education, Contact
- **Framer Motion** animations — scroll-triggered, staggered, hover effects
- **SEO optimized** — metadata, Open Graph, Twitter cards
- **Dark theme** with glassmorphism-style cards

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Deployment | GitHub Pages (static export) |

---

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── IntroAnimation.tsx    # Initial loading animation
│   │   ├── StarfieldBackground.tsx # Animated starfield
│   │   ├── StarDecoration.tsx    # Reusable star components
│   │   ├── Navigation.tsx         # Fixed nav with scroll detection
│   │   ├── Hero.tsx              # Hero section with profile & CTA
│   │   ├── About.tsx             # Professional intro & highlights
│   │   ├── Skills.tsx            # Technical skills grid
│   │   ├── Experience.tsx        # Work experience timeline
│   │   ├── Projects.tsx         # Project portfolio
│   │   ├── Education.tsx         # Education credentials
│   │   ├── Contact.tsx           # Contact cards
│   │   └── Footer.tsx            # Footer with social links
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── profile.png              # Profile picture
│   └── *.svg                    # Icons
├── .github/workflows/
│   └── deploy.yml               # GitHub Pages deployment
├── next.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio) (basePath is `/portfolio`).

### Build

```bash
npm run build
```

Output is generated in the `out/` directory. The build also creates `out/.nojekyll` for GitHub Pages compatibility.

---

## Deployment

This project deploys to **GitHub Pages** via GitHub Actions.

- **Trigger:** Push to `main` branch
- **Workflow:** `.github/workflows/deploy.yml`
- **Publish directory:** `out/`
- **URL:** `https://<username>.github.io/portfolio/`

No manual steps required — push to `main` and the workflow builds and deploys automatically.

---

## Configuration

| Setting | Value |
|---------|-------|
| Base path | `/portfolio` |
| Output | Static export |
| Images | Unoptimized (for static hosting) |
| Trailing slash | Enabled |

---

## License

Private portfolio project.
