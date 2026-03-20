# Shubhaam Concrete Website TODO

## Core Setup
- [x] Initialize project scaffold (web-db-user)
- [x] Copy all files from uploaded zip
- [x] Scrape and download assets from shubhaamconcret.com
- [x] Upload assets to CDN
- [x] Stub out legacy GharSeva pages to eliminate TS errors
- [x] Zero TypeScript errors

## Design System
- [x] Set up golden color scheme CSS variables (light + dark mode)
- [x] Add distinctive typography (Cormorant Garamond + DM Sans + Cinzel)
- [x] CSS animations: fade-up, shimmer, border-beam, gold-divider
- [x] Implement dark/light mode toggle

## Components & Layout
- [x] AppLayout — sidebar nav (desktop) + floating pill header + bottom tab bar (mobile)
- [x] Collapsible sidebar with tooltips
- [x] Mobile overlay menu with gold accent
- [x] Call CTA in sidebar and mobile menu

## Pages
- [x] Home page — Hero slider, Stats, Services grid, About strip, Products, Testimonials, Clients, CTA
- [x] Services page — All 6 services with expandable detail panels
- [x] About page — Timeline, values, team stats, ISO certification
- [x] Contact page — Contact info cards + enquiry form
- [x] FAQ page — Accordion with 8 questions
- [x] Privacy Policy page
- [x] Terms of Service page
- [x] 404 Not Found page

## Features
- [x] Build Hero section with banner slider, 33+ years highlight, CTA
- [x] Build About section with company intro and stats counter
- [x] Build Services section (Tremix, Polished, Laser Screed, Stamping, Society, Thermoplastic)
- [x] Build Products section (Floor Hardeners, PP Fibres, Steel Fiber)
- [x] Build Stats section (33+ years, 1500+ projects, 1500+ clients, 100+ team)
- [x] Build Testimonials carousel
- [x] Build Contact form section
- [x] Add CSS animations and staggered reveals
- [x] Wire up App.tsx with all routes
- [x] tRPC contact.submit mutation with owner notification

## Testing
- [x] Write vitest tests (auth.logout + contact.submit — 6 tests passing)

## 50x UI Upgrade (Phase 2)
- [x] AI-generated hero video (cinematic concrete flooring)
- [x] AI-generated service images (8 services)
- [x] AI-generated product images (3 products)
- [x] AI-generated blog images (3 posts)
- [x] All assets uploaded to CDN
- [x] Disappearing nav on scroll (mobile + desktop)
- [x] Scroll-to-top on route change
- [x] WhatsApp FAB (floating action button)
- [x] ServiceDetail page — individual detail pages for all 8 services
- [x] Products page — 3 products with full detail panels
- [x] Projects page — filterable gallery (9 projects, 5 categories)
- [x] Team page — team members with expertise tags
- [x] Blog page — 3 blog posts with full article content
- [x] Border-beam animation on cards
- [x] Scroll-reveal animations (useInView)
- [x] Micro-interactions on hover/focus
- [x] All nav items updated (Products, Projects, Team, Blog)
- [x] App.tsx routing updated for all new pages

## Deployment
- [x] Save checkpoint
- [ ] Publish via Manus UI
