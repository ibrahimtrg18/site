# Personal Website + Built-in CMS (Studio)

A personal portfolio site with **projects** and a **blog**, plus a hidden, dev-only CMS called **Studio** — a Notion-style editor that writes MDX files into the repo. Publishing is just a git commit + push; Vercel picks it up and deploys. No database, no external CMS.

Feel free to fork or clone this project and make it your own.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) with a small set of local UI components (`src/components/ui`)
- [MDX](https://mdxjs.com/) for all content, [MDXEditor](https://mdxeditor.dev/) for the Studio WYSIWYG
- [next-themes](https://github.com/pacocoursey/next-themes) (dark mode), [Framer Motion](https://www.framer.com/motion/), [Swiper](https://swiperjs.com/)
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) + dynamic sitemap routes for SEO

## How it works

### Content lives in `public/`

```
public/
  projects/
    assets/           ← images for projects (per-slug folders)
    my-project.mdx    ← one file per project
  blogs/
    assets/           ← images for blog posts
    my-post.mdx       ← one file per post
  assets/             ← shared files (site icon, ...)
```

Each `.mdx` file has YAML frontmatter (title, description, tags, date for blogs) and a markdown body. The pages under `src/app/(site)/` discover and render them dynamically — drop a valid `.mdx` file into `public/projects/` and it appears at `/projects/<filename>`.

> Note: everything in `public/` is served as-is, so the raw `.mdx` source of a page is publicly downloadable. For portfolio content that's usually fine — just don't keep secrets in frontmatter.

### App structure

```
src/app/
  (site)/             ← the public site
    page.mdx          ← home page (edit this with your own intro!)
    projects/         ← list page (page.mdx) + detail page ([title])
    blog/             ← list page (page.mdx) + detail page ([slug])
  (dashboard)/studio/ ← the CMS (dev-only)
  (config)/sitemaps/  ← dynamic per-entry sitemap routes
  api/studio/         ← Studio's file/git APIs (dev-only)
```

### Studio — the built-in CMS

Studio only exists while running `npm run dev` — in production every `/studio` route returns 404, so nothing is exposed on the deployed site.

1. Run `npm run dev` and open [http://localhost:4000/studio](http://localhost:4000/studio)
2. **Content** — create or edit projects/blog posts in a Notion-style editor. Saving writes the `.mdx` file to `public/`, so you can preview it on the real site immediately.
3. **Assets** — a file manager for `public/`: browse folders, upload images, copy a file's URL to paste into any content.
4. **Settings** — edit `studio.config.json`: where each content type stores its files, where uploads go, and its public URL prefix.
5. **Publish** — shows your uncommitted content changes, commits them with your message, and pushes. If the repo is connected to Vercel, that push is the deploy.

To add a new content type, add an entry to `studio.config.json` and create matching list/detail pages under `src/app/(site)/` (copy the `blog/` folder as a template).

## Getting started

Requires [Node.js](https://nodejs.org/en) v20+.

```bash
git clone https://github.com/ibrahimtrg18/site.git   # or your fork
cd site
npm install
cp .env.template .env    # fill in the values (see below)
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) for the site, [http://localhost:4000/studio](http://localhost:4000/studio) for the CMS.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `BASE_URL` | Canonical site URL, used for sitemaps and metadata (e.g. `https://yourname.vercel.app`) |
| `GOOGLE_ANALYTICS_ID` | Optional — Google Analytics measurement ID |

## Make it your own

Almost everything personal lives in one file: [`studio.config.json`](studio.config.json) (editable in the UI at `/studio/settings`).

```jsonc
{
  "site": {
    "name": "Your Name",          // appended to every page title: "Page | Your Name"
    "url": "https://your.site",   // canonical URL for sitemaps and metadata
    "googleSiteVerification": "", // optional; remove to drop the meta tag
    "menu": [ { "pathname": "/", "label": "Home" }, ... ],
    "social": [                   // links shown on the home page
      { "label": "GitHub", "icon": "fab fa-github", "href": "https://github.com/you" }
    ]
  }
}
```

Social icons use [Font Awesome](https://fontawesome.com/search) classes (`fab fa-github`, `fas fa-envelope`, ...), already bundled.

Then:

1. **Site icon** — upload it in `/studio/settings` (used as the navbar avatar and browser favicon). It's saved to the fixed path `public/assets/icon.png`, auto-converted to PNG. Until you upload one, the navbar shows your name's initial.
2. **Home bio** — rewrite the intro paragraph in [`src/app/(site)/page.mdx`](<src/app/(site)/page.mdx>) (the social links there come from `site.social`, so you only edit the prose).
3. **Content** — delete my projects from `public/projects/` (via Studio or by hand) and create your own.
4. **Deploy env** — set `BASE_URL` in your Vercel project (falls back to `site.url` if unset).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server (site + Studio) on port 4000 |
| `npm run build` | Production build + sitemap generation |
| `npm run start` | Serve the production build |
| `npm run lint` / `lint:fix` | ESLint |
| `npm run typecheck` | TypeScript check |

## Deploying

**Vercel (recommended):** import the repo at [vercel.com/new](https://vercel.com/new), set the environment variables, done. Every push to your production branch deploys — which is exactly what Studio's Publish button triggers.

**Self-hosted:** a `Dockerfile`, `docker-compose.yml`, and `Caddyfile` are included if you prefer running it on your own server.

## SEO / sitemaps

- `next-sitemap` generates `sitemap.xml` and `robots.txt` at build time (static pages, `/studio` excluded).
- `/sitemaps/projects.xml` and `/sitemaps/blogs.xml` are dynamic routes that list every content entry, so new posts are indexed without a rebuild.

## License

[MIT](LICENSE)
