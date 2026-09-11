# Project Ledger

## Project Overview
- **Project Name:** EnCourse
- **Project Description:** A polished, Persian RTL landing page for an online 1-on-1 English teaching service. The site presents the teaching approach, benefits, and instructor positioning, then directs prospective students to Telegram for consultation.
- **Current Version:** 1.1.0
- **Current Development Phase:** Production Polish / Deployment

## Architecture & Technology Stack
- **Architecture:** Static marketing website
- **Framework:** Next.js 16 App Router with static export
- **Language:** JavaScript
- **Styling:** Tailwind CSS v4 plus custom CSS for the visual system
- **Typography:** Vazirmatn
- **Deployment:** GitHub Pages via GitHub Actions
- **GitHub Pages base path:** `/enc` in CI; local development keeps the root path

## Folder Structure
- `src/app/layout.js` — root layout and SEO metadata
- `src/app/page.js` — complete landing page composition
- `src/app/globals.css` — visual system, responsive styles, components, and accessibility motion rules
- `src/components/TelegramLink.js` — Telegram app deep-link CTA with web fallback
- `public/` — static assets
- `next.config.mjs` — static export, trailing slashes, GitHub Pages base path, and image configuration
- `.github/workflows/nextjs.yml` — GitHub Pages build/deployment workflow

## UI / UX
The landing page has been redesigned around a premium, modern SaaS-style visual language while retaining Persian RTL usability.

Current sections:
- Sticky-style top navigation presentation with brand and consultation CTA
- Hero with strong value proposition and primary/secondary CTAs
- Visual learning-progress card with supporting floating UI details
- Proof strip highlighting 1-on-1, online, and flexible learning
- Benefits section with three reusable feature cards
- Instructor/about section with editorial visual treatment
- Final Telegram conversion CTA
- Minimal footer with brand and Telegram contact

Responsive behavior is implemented for desktop, tablet, and mobile layouts. Reduced-motion preferences are respected.

## Telegram Contact
- **Username:** `EnCourseAdmin`
- **Primary app link:** `tg://resolve?domain=EnCourseAdmin`
- `TelegramLink` attempts to open the Telegram application directly.
- If the app does not open, it falls back to `https://t.me/EnCourseAdmin` after a short delay.
- All consultation/contact CTAs use this shared component.

## GitHub Pages Deployment
The previous deployment failed before dependency installation because `actions/configure-pages@v5` could not find an enabled Pages site.

The workflow was updated to:
- Explicitly use Node 24
- Use `npm ci`
- Run ESLint before the build
- Enable GitHub Pages through `configure-pages` using `enablement: true`
- Build the static export with `npm run build`
- Upload `./out`
- Deploy through `actions/deploy-pages@v4`

`next.config.mjs` sets `basePath: '/enc'` only in GitHub Actions so assets and navigation work correctly when served from the repository project path.

## Current Status
- **Completed:** Initial scaffold, RTL structure, premium UI redesign, responsive styling, SEO metadata, Telegram deep-link integration, GitHub Pages workflow repair, GitHub Pages base-path configuration.
- **Current Task:** Final deployment verification.
- **Next Planned Task:** Visual QA on the live GitHub Pages site after the workflow succeeds.
- **Known Issues / Tech Debt:** No known application-level blockers. GitHub repository Pages settings may still require the repository's Pages source to permit GitHub Actions; the workflow now requests enablement automatically where GitHub permits it.

## Important Implementation Notes
- The project is intentionally front-end only; no backend or database is required for the current scope.
- The page uses static export and does not depend on server runtime features.
- Images are unoptimized because GitHub Pages serves the exported static site.
- The Telegram contact component is client-side because launching a custom application URI and providing a fallback requires browser interaction.
- Avoid replacing the custom visual system with a generic component library unless a future requirement justifies it.

## Continuation Notes
For future changes, inspect the existing visual system in `globals.css` and preserve the current design language. Prefer targeted component-level improvements over rebuilding the page from scratch. Keep all contact CTAs wired through `TelegramLink.js` so the Telegram username remains centralized and consistent.
