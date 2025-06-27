# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AkondAstro is a branch of AkondLab company (www.akond.com) focused on creating software for astronomy. This is the main website for AkondAstro, showcasing their astronomical software projects and services.

### Related Projects
- OCM (Optical Gravitational Lensing Experiment): https://ocm.camk.edu.pl
- Araucaria Group (manages OCM observatory): https://araucaria.camk.edu.pl  
- Araucaria Project: https://github.com/araucaria-project
- BHTom (Black Hole Transient Optical Monitor): https://github.com/BHTOM-Team/bhtom2
- BH-Tom2 Platform: https://bh-tom2.astrolabs.pl

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Assets**: SVG logos (bright/dark variants)

## Development Commands

### Initial Setup
```bash
# Initialize Astro project with Tailwind CSS
npm create astro@latest . -- --template minimal --typescript strict --tailwind
npm install
```

### Development Workflow
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run astro check

# Linting (if configured)
npm run lint
```

### GitHub Pages Deployment
```bash
# Build and deploy to GitHub Pages
npm run build
# Ensure astro.config.mjs has correct base URL for GitHub Pages
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
├── public/             # Static assets
├── assets/
│   └── images/         # Brand assets
│       ├── akondastro_logo_bright.svg
│       └── akondastro_logo_dark.svg
└── astro.config.mjs    # Astro configuration
```

## Brand Assets

Brand assets are located in `assets/images/`:
- `akondastro_logo_bright.svg` - Logo for light backgrounds  
- `akondastro_logo_dark.svg` - Logo for dark backgrounds
- Brand color: #60a5fa (blue-400)
- Text color: #f8fafc (slate-50)

## Configuration Notes

- Configure `astro.config.mjs` with proper base URL for GitHub Pages deployment
- Ensure Tailwind CSS is properly integrated
- Consider using Astro's built-in image optimization for performance
- Set up proper meta tags for SEO (astronomy/software focus)