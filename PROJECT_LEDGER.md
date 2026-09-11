# Project Ledger

## Project Overview
* **Project Name:** English Online Courses (1-on-1)
* **Project Description:** A front-end only static website for an online 1-on-1 English teaching business, targeting Persian speakers. It serves as a modern landing page redirecting interested users to a Telegram account for direct contact.
* **Current Version:** 1.0.0
* **Current Development Phase:** Initial Release

## Architecture & Technology Stack
* **Architecture:** Static Website (Front-end only)
* **Framework:** Next.js (App Router, static export configured)
* **Language:** JavaScript
* **Styling:** Tailwind CSS V4
* **Typography:** Vazirmatn (Persian Google Font)
* **Deployment Readiness:** Configured for static environments like GitHub Pages (`output: 'export'`, `images.unoptimized: true` in `next.config.mjs`)

## Folder Structure
* `src/app/`: Contains the Next.js App Router core files (`layout.js`, `page.js`, `globals.css`).
* `public/`: Static assets.
* Root contains config files: `next.config.mjs`, `tailwind.config.mjs` (implicitly handled by Tailwind V4 in Next.js 15 template), `package.json`.

## State of Components
* **UI/UX:** Fully implemented in a single page (`src/app/page.js`). It features a modern, mobile-friendly RTL design with:
  * Hero Section (with Telegram CTA)
  * Features/Benefits Section
  * Instructor/About Section
  * Simple Footer

## Current Status
* **Completed Tasks:** Scaffolded Next.js project, setup Tailwind & RTL structure, implemented responsive landing page UI, configured for static export.
* **Next Planned Task:** N/A (Project is considered feature-complete for the current scope).
* **Known Issues / Tech Debt:** None at this time. Only frontend is implemented as explicitly requested. No backend or database is necessary for this static landing page.

## Important Implementation Notes
* Since the requirement explicitly asks for a static GitHub pages deployment, Next.js image optimization is disabled to allow `next build` to successfully export HTML files.
* The application runs purely on the client side for rendering CSS/HTML since it's statically exported. No API routes or dynamic server components are used.
* The Telegram CTA link is set to `https://t.me/yourtelegram_username` which acts as a placeholder meant to be customized by the owner.
