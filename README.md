# khaledrefaat.dev

My personal portfolio — a single-page site rebuilt from Next.js on Astro, shipping **zero client-side framework JavaScript**. Everything renders as static HTML with just two tiny vanilla scripts (mobile menu toggle, FAQ accordion).

**Live site:** <https://www.khaledrefaat.dev>

## Tech stack

- [Astro 7](https://astro.build) — fully static output, no UI-framework islands
- [Tailwind CSS 4](https://tailwindcss.com) — styling with design tokens mapped to CSS custom properties
- [TypeScript](https://www.typescriptlang.org) — type-checked with `astro check`
- [astro:assets](https://docs.astro.build/en/guides/images/) + [sharp](https://sharp.pixelplumbing.com/) — responsive, optimized images (WebP with generated `srcset`/`sizes`)
- Astro's Fonts API — self-hosted Google Fonts (Lato, Raleway, Shadows Into Light Two)
- Dark mode via `prefers-color-scheme`, no toggle needed

## Sections

The page is composed of six `.astro` sections: Hero, About, Skills, Projects, FAQs, and Experience.

**Projects are driven by a [content collection](https://docs.astro.build/en/guides/content-collections/)** — each project is a JSON entry plus its screenshot in `src/content/projects/`, validated by the Zod schema in `src/content.config.ts`. Adding a project means dropping in two files; no component edits required.

## Project structure

```text
/
├── public/               # Served as-is: favicon, resume PDF, OG image
├── src/
│   ├── assets/           # Images imported by components (optimized at build)
│   ├── components/
│   │   ├── common/       # section, button, badge, accordion, section-header
│   │   ├── icons/        # Inline SVG icons
│   │   ├── layout/       # Site header
│   │   ├── sections/     # hero, about, skills, projects, faqs, experience
│   │   └── ui/           # Card primitives
│   ├── content/
│   │   └── projects/     # Project entries (JSON + screenshot)
│   ├── layouts/          # Base layout: SEO meta, fonts, analytics
│   ├── pages/            # Single index page
│   ├── styles/           # Global CSS + Tailwind theme
│   └── content.config.ts # Content collection schema
└── astro.config.mjs      # Site URL, fonts, Tailwind integration
```

## Getting started

Requires **Node.js ≥ 22.12** and **pnpm**.

```sh
pnpm install
pnpm dev --background    # or: pnpm astro dev --background
```

The dev server runs in the background and is managed through the CLI:

```sh
pnpm astro dev status    # Check if it's running
pnpm astro dev logs      # Tail the logs
pnpm astro dev stop      # Stop it
```

## Commands

| Command                | Action                                          |
| :--------------------- | :---------------------------------------------- |
| `pnpm install`         | Install dependencies                            |
| `pnpm dev --background`| Start the dev server at `localhost:4321`        |
| `pnpm build`           | Build the production site to `./dist/`          |
| `pnpm preview`         | Preview the production build locally            |
| `pnpm astro check`     | Type-check all `.astro` and `.ts` files         |

## Adding a project

1. Drop the screenshot into `src/content/projects/` (e.g. `my-project.png`).
2. Create `my-project.json` next to it:

```json
{
  "order": 3,
  "title": "My Project - One-line Pitch",
  "description": "What it is and what makes it interesting.",
  "features": ["Feature one", "Feature two"],
  "tech": ["Astro", "TypeScript"],
  "image": "./my-project.png"
}
```

The section picks it up automatically, sorted by `order`.
