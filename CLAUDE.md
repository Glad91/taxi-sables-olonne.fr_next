# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 taxi service website for "Taxi Sables-d'Olonne" using:

- **Framework**: Next.js 15.4.4 with App Router
- **Styling**: Tailwind CSS v4 with custom taxi color palette
- **Icons**: Lucide React
- **Package Manager**: pnpm (always use pnpm, never npm/yarn)
- **TypeScript**: Enabled but with build errors ignored in production
- **Font**: Inter from Google Fonts
- **Analytics**: Google Analytics integration with custom event tracking

## Common Development Commands

```bash
# Development
pnpm dev              # Start development server with Turbopack
pnpm build           # Build for production
pnpm start           # Start production server
pnpm lint            # Run ESLint
pnpm lint:fix        # Run ESLint with auto-fix
pnpm format          # Format code with Prettier
pnpm format:check    # Check Prettier formatting
```

## Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Main navigation with mobile menu
│   ├── Footer.tsx       # Site footer
│   ├── CallToAction.tsx # Phone/reservation CTA buttons
│   ├── SEOHead.tsx      # SEO metadata component
│   └── StructuredData.tsx # JSON-LD structured data
├── (service-pages)/     # Service-specific pages
│   ├── gare-sables-olonne/
│   ├── aeroport-nantes/
│   ├── transport-medical/
│   ├── longue-distance/
│   ├── tarifs/
│   ├── avis-clients/
│   ├── contact/
│   └── reservation/
├── layout.tsx          # Root layout with comprehensive SEO
├── page.tsx           # Homepage with hero and services
├── globals.css        # Global styles and Tailwind imports
├── sitemap.ts        # Dynamic sitemap generation
└── robots.txt/       # SEO robots.txt route
```

## Key Architecture Patterns

### SEO-First Approach

- Comprehensive metadata in `layout.tsx` and individual pages
- Structured data components for rich snippets
- Geo-location meta tags for local SEO
- Canonical URLs and Open Graph tags

### Component Structure

- **Header**: Responsive navigation with mobile hamburger menu, phone CTA, and reservation button
- **CallToAction**: Reusable component for phone calls and reservation links
- **StructuredData**: JSON-LD schema markup for search engines

### Styling System

Custom Tailwind configuration defined in `globals.css` with taxi-specific colors:

- `taxi-yellow`: #fbbf24 (primary brand color)
- `taxi-orange`: #f97316 (hover states)
- `taxi-blue`: #0ea5e9 (accent)
- `primary`: Blue color scale (600: #2563eb, 800: #1e40af)

Font family set to Inter from Google Fonts with system fallbacks.

### Configuration Notes

- ESLint and TypeScript errors are ignored during builds (`ignoreDuringBuilds: true`)
- Uses Turbopack for faster development builds (`--turbo` flag)
- Tailwind CSS v4 with PostCSS integration
- Comprehensive security headers configured in `next.config.ts`
- Image optimization with WebP/AVIF formats and aggressive caching
- ESLint config includes Prettier integration with error-level formatting rules

### Analytics & Tracking

- Google Analytics integrated via `GoogleTag` component
- Custom event tracking for phone calls and reservations in Header component
- Web Vitals monitoring with `WebVitals` component

### Page Types

1. **Service Pages**: Follow pattern of hero section + detailed content + CTA
2. **Contact Forms**: Located in `/contact` and `/reservation`
3. **SEO Pages**: Optimized for local search terms and taxi services

## Development Guidelines

- All components use TypeScript with strict mode enabled
- Responsive design with mobile-first approach using Tailwind breakpoints
- SEO optimization is critical - always include proper metadata and structured data
- Use existing color scheme defined in `globals.css` (taxi-yellow, taxi-orange, taxi-blue)
- Follow established component patterns in `app/components/`
- Maintain French language throughout (target market: Les Sables-d'Olonne, France)
- Use Lucide React for all icons (never other icon libraries)
- Always use pnpm for package management

## Important Architecture Details

### Schema.org Structured Data

The site uses comprehensive structured data via `JsonLD.tsx`:

- **TaxiService schema**: Full business information, location, services, ratings
- **WebSite schema**: Site-wide search functionality metadata
- **Service schemas**: Individual service pages with pricing when available
- **Breadcrumb schemas**: Navigation hierarchy for complex pages

### SEO Implementation

- Comprehensive metadata in root `layout.tsx` with template support
- Individual page metadata overrides using Next.js App Router metadata API
- Geo-location meta tags for local SEO (Les Sables-d'Olonne coordinates)
- Dynamic sitemap generation in `sitemap.ts` with proper priorities
- Robots.txt route handler for search engine guidance

### Performance Optimizations

- Next.js image optimization with WebP/AVIF support
- Aggressive caching headers (1 year for static assets, 1 day for dynamic content)
- Turbopack for development builds
- Critical CSS inlining with Critters
- Smooth scrolling behavior enabled globally

### Key Business Information

- **Phone**: 06 25 19 31 43 (tracked via analytics)
- **Location**: Place Napoléon III, Les Sables-d'Olonne (85100)
- **Service Area**: 50km radius from Les Sables-d'Olonne
- **Operating Hours**: 24/7 availability
- **Primary Services**: Local taxi, airport transfers, medical transport (VSL)

## SEO Optimization Tasks

- Implement comprehensive SEO optimization based on Google's developer recommendations from https://developers.google.com/search?hl=fr&card=developer
  - Thoroughly review and apply all recommended SEO techniques
  - Focus on implementing best practices for search engine discoverability
  - Ensure full compliance with Google's latest SEO guidelines

- Avant chaque commit tu doit formatter le code avec prettier puis le linté puis npx tsc
