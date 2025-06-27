# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Authors:** Mikołaj Kałuszyński & Claude (Anthropic)

## Project Overview

AkondAstro is a branch of AkondLab company (www.akond.com) focused on creating software for astronomy. This is the main website for AkondAstro, showcasing their astronomical software projects and services.

### Related Projects
- OCM (Optical Gravitational Lensing Experiment): https://ocm.camk.edu.pl
- Araucaria Group (manages OCM observatory): https://araucaria.camk.edu.pl  
- Araucaria Project: https://github.com/araucaria-project
- BHTom (Black Hole Transient Optical Monitor): https://github.com/BHTOM-Team/bhtom2
- BH-Tom2 Platform: https://bh-tom2.astrolabs.pl

## Tech Stack

- **Framework**: Astro with TypeScript
- **Styling**: Tailwind CSS
- **Content Management**: Markdown-based CMS with frontmatter
- **Deployment**: GitHub Pages with automated workflows
- **Package Manager**: npm

## Development Commands

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
```

### Content Management
Content is managed through Markdown files in `src/content/`:
- Edit project descriptions in `src/content/projects/*.md`
- Edit partner information in `src/content/partners/*.md`
- No HTML editing required - all content is in Markdown

## Project Structure

```
├── src/
│   ├── content/           # Markdown content files
│   │   ├── projects/      # Project descriptions (*.md)
│   │   └── partners/      # Partner information (*.md)
│   ├── pages/            # Route pages
│   │   └── index.astro   # Homepage (reads from content/)
│   ├── styles/           # Global styles
│   │   └── global.css    # Tailwind imports
│   └── content.config.ts # Content collections schema
├── public/
│   └── assets/
│       └── logos/        # Organized logo assets
│           ├── brand/    # AkondAstro branding
│           ├── projects/ # Project logos
│           └── partners/ # Partner logos
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Pages deployment
└── astro.config.mjs     # Astro + GitHub Pages config
```

## Content Editing

### Adding/Editing Projects
Edit files in `src/content/projects/`:

```yaml
---
title: "Project Name"
logo: "/web-akondastro/assets/logos/projects/logo.svg"
url: "https://project-url.com"
order: 1
---

Project description in **Markdown** format.
```

### Adding/Editing Partners
Edit files in `src/content/partners/`:

```yaml
---
title: "Organization Name"
subtitle: "Location/Affiliation"
logo: "/web-akondastro/assets/logos/partners/logo.svg"
url: "https://organization-url.com"
filter: "invert"  # optional CSS filter for dark theme
order: 1
---
```

## Brand Assets

Logos are organized in `public/assets/logos/`:
- `brand/akondastro_logo_bright.svg` - Primary logo for dark backgrounds
- `brand/akondastro_logo_dark.svg` - Alternative for light backgrounds
- `projects/` - Project logos (OCM, Araucaria, BHTom, AkondLab)
- `partners/` - Partner organization logos

**Brand Colors:**
- Primary: #60a5fa (blue-400)
- Text: #f8fafc (slate-50)
- Background: #0f172a (slate-900)

## GitHub Pages Configuration

- **Base URL**: `/web-akondastro` (configured in astro.config.mjs)
- **Deployment**: Automatic via GitHub Actions on push to main
- **Build Output**: Static files to `dist/`

## Key Features

- **Responsive design** with modern header bar layout
- **Dark theme** optimized for astronomy branding
- **Logo management** with fallback placeholders
- **Content collections** with TypeScript validation
- **SEO optimized** with proper meta tags
- **Performance optimized** with Astro's static generation

## Notes for Future Development

- Content is completely separate from presentation
- Adding new projects/partners only requires creating new MD files
- Logo assets support various formats (SVG, PNG) with CSS filters
- Site builds and deploys automatically when content changes
- All paths use GitHub Pages base URL for proper deployment