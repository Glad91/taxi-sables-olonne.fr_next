# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 taxi service website for "Taxi Sables-d'Olonne" using:

- **Framework**: Next.js 15.4.4 with App Router
- **Styling**: Tailwind CSS v4 with custom taxi color palette
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **TypeScript**: Enabled but with build errors ignored in production

## Common Development Commands

```bash
# Development
pnpm dev              # Start development server with Turbopack
pnpm build           # Build for production
pnpm start           # Start production server
pnpm lint            # Run ESLint

# Package management
pnpm install         # Install dependencies
pnpm add <package>   # Add new dependency
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

Custom Tailwind configuration with taxi-specific colors:

- `taxi-yellow`: #fbbf24 (primary brand color)
- `taxi-orange`: #f97316 (hover states)
- `taxi-blue`: #0ea5e9 (accent)
- `primary`: Blue color scale (600: #2563eb, 800: #1e40af)

### Configuration Notes

- ESLint and TypeScript errors are ignored during builds (`ignoreDuringBuilds: true`)
- Uses Turbopack for faster development builds
- Tailwind CSS v4 with PostCSS integration

### Page Types

1. **Service Pages**: Follow pattern of hero section + detailed content + CTA
2. **Contact Forms**: Located in `/contact` and `/reservation`
3. **SEO Pages**: Optimized for local search terms and taxi services

## Development Guidelines

- All components use TypeScript
- Responsive design with mobile-first approach
- SEO optimization is critical - always include proper metadata
- Use existing color scheme from `tailwind.config.ts`
- Follow established component patterns in `app/components/`
- Maintain French language throughout (target market: Les Sables-d'Olonne, France)
