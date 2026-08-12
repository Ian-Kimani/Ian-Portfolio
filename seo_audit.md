# Portfolio SEO Audit Report

I have completed a comprehensive, read-only audit of your portfolio's source code, assets, routing, and configuration. Here is the detailed breakdown of the current state of your SEO and what needs to be improved.

## 1. Project Structure
- **Framework & Stack**: React v19, Vite v8, Tailwind CSS v4, Framer Motion.
- **Entry Point**: `index.html` loading `src/main.jsx`.
- **Routing**: Client-side routing using `react-router-dom` (`BrowserRouter`) inside `App.jsx`.
- **Public Routes**: 
  - `/` (Home)
  - `/case-study/:slug` (Dynamic project pages)
- **Application Type**: Single Page Application (SPA). The HTML is empty on initial load (`<div id="root"></div>`) and populated entirely by JavaScript. Search engines like Google can render this, but social media crawlers (LinkedIn, Twitter) generally cannot.

## 2. Current SEO Configurations
- **Current `<title>`**: `Ian Wabacha — Software Engineer` *(Good, concise)*.
- **Current Description**: `"Ian Wabacha is a software engineer focused on backend systems, APIs, databases, and practical software."` *(Excellent, keyword-rich without stuffing)*.
- **Canonical URL**: **Missing**.
- **Open Graph (OG) Tags**: **Missing**.
- **Twitter/X Cards**: **Missing**.
- **`robots.txt`**: **Missing** from `public/`.
- **`sitemap.xml`**: **Missing** from `public/`.
- **Favicon**: Correctly set to `/images/profile.png`.
- **Structured Data (JSON-LD)**: **Missing**.
- **Noindex Directives**: None found.

## 3. Content & Semantic Structure
Your semantic HTML structure is excellent. You make appropriate use of `<main>`, `<section>`, `<article>`, `<header>`, and `<aside>`.

**Home Page:**
- **H1**: `I build systems that work.`
- **H2s**: `Selected Work`, `Engineering`, `Technical Skills`, `About`, `LET'S BUILD SOMETHING USEFUL.`
- **H3s**: `Building software by solving problems.` (In About section).

**Case Studies (`/case-study/:slug`):**
- **H1**: `{project.title}` (e.g., MILIQO)
- **H2s**: `The Problem`, `Architecture & System Design`, `The Solution`
- **H3s**: `Technology`, `Details`

*Note*: Because this is a standard React SPA without `react-helmet`, the `<title>` of the browser tab does not change when navigating to a case study. It remains "Ian Wabacha — Software Engineer" on every page.

## 4. Images & Accessibility
- **Profile Photo** (`/images/profile.png`):
  - Used in `About.jsx`.
  - Has excellent alt text: `"Portrait of Ian Wabacha"`.
  - Implements `loading="lazy"`.
- **Project Images** (`miliqo.png`, `kahawa_manager_edge.png`, `kahawa_manager_cloud.png`):
  - Used in `ProjectCard.jsx` and `CaseStudy.jsx`.
  - Alt text relies on the project title: `alt={project.title}` (e.g., "MILIQO"). 
  - *Improvement*: The alt text should be more descriptive (e.g., `"Screenshot of the Miliqo rental management dashboard"`).
  - Format: Standard PNGs.

## 5. Technical SEO
- **SPA Indexability**: Googlebot will execute JavaScript and index the `/case-study/` pages correctly. However, a missing `sitemap.xml` means search engines have to rely entirely on crawling internal links to discover them.
- **Broken Links**: None detected.
- **Mobile Responsiveness**: Excellent; Tailwind ensures layout stability across breakpoints.
- **Image Optimization**: Images are standard PNGs. Converting them to `.webp` would improve PageSpeed scores, which is a minor SEO ranking factor.
- **URL Structure**: Clean URLs (no hash routing, e.g., `/#/case-study`).

## 6. Domain
- **Production Domain**: `https://iankimani.me`
- **Old Vercel URLs**: I checked the codebase, `package.json`, and Vite config. There are no hardcoded references to old `.vercel.app` domains.

## 7. Structured Data Recommendations
Adding JSON-LD structured data helps search engines understand the exact entities on your site. I recommend adding:
1. **`Person`**: To clearly identify "Ian Wabacha" as a software engineer, linking your GitHub, LinkedIn, and portfolio URL.
2. **`WebSite`**: To establish the canonical identity of the site.

## 8. Search Strategy & Natural Keywords
Based on your actual content, these are realistic natural queries you could rank for over time:
- "Ian Wabacha" / "Ian Kimani"
- "Software Engineer Kenya" / "Backend Developer Kenya"
- "React Node PostgreSQL developer"
- "Offline-first application architecture"
- "Python hardware integration developer"

*Your current copy is already highly relevant to these terms and reads very naturally.*

## 9. Social Sharing (Open Graph)
**Current State**: If you share `https://iankimani.me` on LinkedIn, X, or WhatsApp today, it will look broken or generic. It will display the title and description, but **no image** will unfurl.
**Recommendation**: We must create a dedicated `og-image.jpg` (usually 1200x630 pixels) featuring your name, title, and a sleek dark background, and link it via `<meta property="og:image">`.

---

## 10. Final Recommendations & Implementation Plan

### P0 (Essential - Do this immediately)
- Create `public/robots.txt` to allow crawling.
- Create `public/sitemap.xml` defining the home page and the three case study URLs.
- Add Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Card meta tags to `index.html`.
- Add a `<link rel="canonical" href="https://iankimani.me" />` to `index.html`.

### P1 (Important)
- Install `react-helmet-async` to dynamically update the `<title>` and `<meta name="description">` when a user clicks into a Case Study.
- Update the `alt` text in `projects.js` to be highly descriptive (e.g., `altText: "Dashboard view of..."`) and use it in `ProjectCard` and `CaseStudy`.

### P2 (Nice to Have)
- Inject JSON-LD `<script type="application/ld+json">` for the `Person` schema into `index.html`.
- Convert the large PNG screenshots in `public/images/` to WebP formats for faster loading.

### Exact Files We Will Need to Modify/Create:
1. **Modify**: `index.html` (Inject OG tags, canonical, JSON-LD)
2. **Modify**: `src/data/projects.js` (Add `altText` field)
3. **Modify**: `src/components/ProjectCard.jsx` & `src/pages/CaseStudy.jsx` (Use new alt text)
4. **Create**: `public/robots.txt`
5. **Create**: `public/sitemap.xml`
6. **(Optional) Modify**: `App.jsx` and components to use `react-helmet-async` for dynamic titles.
