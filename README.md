# AkondAstro Website

The official website for AkondAstro - a branch of AkondLab focused on creating software for astronomy.

**Authors:** Mikołaj Kałuszyński & Claude (Anthropic)

## 🌟 About

AkondAstro is a specialized division of [AkondLab](https://www.akond.com) dedicated to creating innovative software solutions for astronomical research and observation. This website showcases our projects and partnerships in the astronomical software community.

## 🚀 Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS  
- **Content:** Markdown-based CMS
- **Deployment:** GitHub Pages
- **Package Manager:** npm

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm

### Setup
```bash
# Clone repository
git clone <repository-url>
cd web-akondastro

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run type checking |

## 📁 Project Structure

```
├── src/
│   ├── content/           # Markdown content files
│   │   ├── projects/      # Project descriptions
│   │   └── partners/      # Partner information
│   ├── pages/            # Route pages
│   │   └── index.astro   # Homepage
│   ├── styles/           # Global styles
│   └── content.config.ts # Content collections schema
├── public/
│   └── assets/
│       └── logos/        # Logo assets
│           ├── brand/    # AkondAstro branding
│           ├── projects/ # Project logos
│           └── partners/ # Partner logos
├── .github/
│   └── workflows/        # GitHub Actions
└── astro.config.mjs     # Astro configuration
```

## ✏️ Content Management

Content is managed through Markdown files with frontmatter:

### Adding/Editing Projects
Edit files in `src/content/projects/`:

```yaml
---
title: "Project Name"
logo: "/web-akondastro/assets/logos/projects/logo.svg"
url: "https://project-url.com"
order: 1
---

Project description in Markdown.
```

### Adding/Editing Partners
Edit files in `src/content/partners/`:

```yaml
---
title: "Organization Name"
subtitle: "Location/Affiliation"
logo: "/web-akondastro/assets/logos/partners/logo.svg"
url: "https://organization-url.com"
filter: "invert"  # optional CSS filter
order: 1
---
```

## 🎨 Brand Assets

- **Primary Logo:** `akondastro_logo_bright.svg` (for dark backgrounds)
- **Alternative:** `akondastro_logo_dark.svg` (for light backgrounds)
- **Brand Color:** `#60a5fa` (blue-400)
- **Text Color:** `#f8fafc` (slate-50)

## 🚀 Deployment

The site deploys automatically to GitHub Pages via GitHub Actions when pushing to the `main` branch.

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔗 Related Projects

- [OCM Observatory](https://ocm.camk.edu.pl) - Optical Gravitational Lensing Experiment
- [Araucaria Project](https://araucaria.camk.edu.pl) - Observatory management systems
- [BHTom Platform](https://bh-tom2.astrolabs.pl) - Black Hole Transient Monitor
- [AkondLab](https://www.akond.com) - Parent company

## 🤝 Partnerships

We collaborate with leading astronomical institutions:
- Nicolaus Copernicus Astronomical Center (CAMK PAN)
- Astronomical Observatory, University of Warsaw
- National Centre for Nuclear Research (NCBJ)
- ASA Astrosysteme GmbH

## 📄 License

This project is proprietary software of AkondLab.