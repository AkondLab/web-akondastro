# AkondAstro Website

The official website for AkondAstro - a branch of AkondLab focused on creating software for astronomy.

**Authors:** Mikołaj Kałuszyński & Claude (Anthropic)

## 🌟 About

AkondAstro is a specialized division of [AkondLab](https://www.akond.com) dedicated to creating innovative software solutions for astronomical research and observation. This website showcases our projects and partnerships in the astronomical software community.

## 🚀 Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS  
- **Content:** Markdown-based CMS
- **Deployment:** Cloudflare Pages
- **Package Manager:** npm

## 🌐 Live Site

**URL:** [https://akond.space](https://akond.space)  
**Repository:** [https://github.com/AkondLab/web-akondastro](https://github.com/AkondLab/web-akondastro)

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm

### Setup
```bash
# Clone repository
git clone https://github.com/AkondLab/web-akondastro.git
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
│   ├── content/              # Markdown content files
│   │   ├── projects/         # Project descriptions (homepage cards)
│   │   ├── partners/         # Partner information (homepage)
│   │   └── pages/            # Full content pages (e.g., TACOSS)
│   ├── pages/               # Route pages
│   │   ├── index.astro      # Homepage
│   │   └── [...slug].astro  # Dynamic routing for content pages
│   ├── styles/              # Global styles
│   └── content.config.ts    # Content collections schema
├── public/
│   └── assets/
│       ├── logos/           # Logo assets
│       │   ├── brand/       # AkondAstro branding
│       │   ├── projects/    # Project logos
│       │   └── partners/    # Partner logos
│       └── images/          # Content images
│           └── tacoss/      # TACOSS page images
├── .github/
│   └── workflows/           # GitHub Actions
└── astro.config.mjs        # Astro configuration
```

## ✏️ Content Management

Content is managed through Markdown files with frontmatter:

### Adding/Editing Projects (Homepage Cards)
Edit files in `src/content/projects/`:

```yaml
---
title: "Project Name"
logo: "/assets/logos/projects/logo.svg"
url: "/project-slug"  # Internal link for detail pages
# OR
url: "https://external-site.com"  # External link
order: 1
---

Short project description in Markdown (shown on homepage).
```

**Internal vs External Links:**
- URLs starting with `/` create internal links to detail pages (e.g., `/tacoss`)
- Full URLs create external links to other websites

### Creating Detail Pages
Create comprehensive pages in `src/content/pages/`:

```yaml
---
title: "Project Name"
description: "SEO description"
logo: "/assets/logos/projects/logo.svg"
externalUrl: "https://github.com/org/repo"  # optional
---

Full project description with images:

![Image Alt Text](/assets/images/project/image.png)

## Section Title
Content...
```

### Adding/Editing Partners
Edit files in `src/content/partners/`:

```yaml
---
title: "Organization Name"
subtitle: "Location/Affiliation"
logo: "/assets/logos/partners/logo.svg"
url: "https://organization-url.com"
filter: "invert"  # optional CSS filter
order: 1
---
```

### Adding Images
Place images in `public/assets/images/`:

```bash
public/assets/images/
└── tacoss/              # Project-specific folder
    ├── banner.png       # Hero images
    ├── screenshot.png   # UI screenshots
    └── diagram.svg      # Architecture diagrams
```

Reference in Markdown:
```markdown
![Alt text](/assets/images/tacoss/banner.png)
```

## 🎨 Brand Assets

- **Primary Logo:** `akondastro_logo_bright.svg` (for dark backgrounds)
- **Alternative:** `akondastro_logo_dark.svg` (for light backgrounds)
- **Brand Color:** `#60a5fa` (blue-400)
- **Text Color:** `#f8fafc` (slate-50)

## 🚀 Deployment

The site is deployed on **Cloudflare Pages** and automatically builds/deploys when pushing to the `main` branch.

- **Live URL:** [https://akond.space](https://akond.space)
- **Deployment:** Cloudflare Pages
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔗 Featured Projects

- **[TACOSS](/tacoss)** - Telescope Automation, Control, and Operation Software Suite
  - Open-source observatory control platform
  - Currently operational at OCM Observatory, Chile
  - [GitHub Organization](https://github.com/araucaria-project)
- **[BHTom Platform](https://bh-tom2.astrolabs.pl)** - Black Hole Transient Monitor
- **[OCM Observatory](https://ocm.camk.edu.pl)** - Chile-based astronomical facility
- **[AkondLab](https://www.akond.com)** - Parent company

## 🤝 Partnerships

We collaborate with leading astronomical institutions:
- **[CAMK PAN](https://camk.edu.pl)** - Nicolaus Copernicus Astronomical Center, Polish Academy of Sciences
- **[Araucaria Group](https://araucaria.camk.edu.pl)** - Active astronomical research team
- **[OCM Observatory](https://ocm.camk.edu.pl)** - Chile-based testing and deployment facility
- **Astronomical Observatory, University of Warsaw**
- **National Centre for Nuclear Research (NCBJ)**
- **ASA Astrosysteme GmbH** - Austria

## 📄 License

This project is proprietary software of AkondLab.