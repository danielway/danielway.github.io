# danielway.github.io

Daniel Way's personal website. Static site built with **Eleventy (11ty)**, Nunjucks
templates, and SCSS compiled to CSS. Deployed to GitHub Pages.

## Commands

- `npm start` — local dev server with watch + live reload (http://localhost:8080)
- `npm run build` — clean `dist/` and build the static site (`dist/` is gitignored)

## Content model

- Input is `src/`, output is `dist/`. `assets/`, `images/`, `fonts/` are passthrough-copied
  to the site root by [.eleventy.js](.eleventy.js).
- Content is authored as **folders of `index.md`** with YAML front matter (see `src/projects/`,
  `src/writing/`).
- A content type joins a **collection** via the `tags:` declared in its **layout's** front
  matter — e.g. [src/_includes/project.njk](src/_includes/project.njk) has `tags: projects`, so
  every page using `layout: project.njk` lands in `collections.projects`.
- Directory data files (`*.11tydata.js`) set the sort `date` and `eleventyNavigation` for a folder.
- [src/_includes/base.njk](src/_includes/base.njk) loads page CSS by URL segment:
  `pageSegment = urlSegments[1]`, so anything under `/projects/...` loads `src/css/projects.scss`.

## Doodles

**Doodles** are one-off, single-file web apps (CDN-only, no build step) conjured from a prompt
or two. Each is embedded live on its own page alongside the prompt(s), the model, and the tool
that made it. They live nested under Projects and are surfaced in a gallery at the top of
`/projects/`.

How it's wired:
- Layout: [src/_includes/doodle.njk](src/_includes/doodle.njk) (declares `tags: doodles`, renders
  the live `<iframe>` as the hero, then an expandable `<details>` prompt block, then commentary).
- Collection config: [src/projects/doodles/doodles.11tydata.js](src/projects/doodles/doodles.11tydata.js).
- Gallery: the `collections.doodles` block in [src/projects/index.njk](src/projects/index.njk)
  (only renders when at least one Doodle exists).
- Styles: appended to [src/css/projects.scss](src/css/projects.scss) (`.doodles-gallery`,
  `.doodle`, `details.prompt`).

### Adding a Doodle

1. **App:** drop the single-file app at `assets/doodles/<name>.html`. It must be fully
   self-contained — inline CSS/JS, any dependencies from a CDN, no build step. It's served
   verbatim and embedded in a sandboxed `<iframe>`.
2. **Screenshot:** add a gallery thumbnail at `images/doodles/<name>.png` (or `.svg`). Prefer a
   real screenshot of the running app.
3. **Page:** create `src/projects/doodles/<name>/index.md` with front matter, plus optional
   markdown commentary in the body:

   ```yaml
   ---
   layout: doodle.njk          # required — this is what tags it into collections.doodles
   createdDate: 2026-05-29
   updatedDate: 2026-05-29
   title: <Title>
   description: <one-line gallery blurb>
   model: Claude Opus 4.8      # the model that generated it
   tool: Claude Code           # the tool used (e.g. Claude Code, claude.ai)
   appFile: /assets/doodles/<name>.html
   image: /images/doodles/<name>.png
   height: 480px               # iframe height; tune per app
   prompts:                    # one or more; rendered as expandable bubbles
     - >-
       <the prompt that created it>
   ---

   <optional commentary>
   ```

That's it — the page auto-joins `collections.doodles`, appears in the gallery, and gets its own
page at `/projects/doodles/<name>/`. No nav or config changes needed.

Conventions:
- Keep apps to a **single file**; reach for CDNs rather than local dependencies.
- The iframe sandbox is `allow-scripts allow-same-origin allow-forms allow-popups` — these are
  curated, self-authored apps.
- "View source" links to the file on GitHub; "Open full screen" opens the raw html.
