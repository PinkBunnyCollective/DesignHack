# DesignHack
Gamified learning platform for IGCSE &amp; IB DP Design Technology featuring AI tutors, coursework guidance, exam preparation and adaptive revision.

## Phase 1 foundation

This repository now includes a Next.js + TypeScript + Tailwind foundation scaffold in line with the DesignHack Platform Specification.

- `app/` contains the new Next.js app routes.
- `components/` contains reusable React UI building blocks.
- `lib/` contains shared content/indexing helpers.
- `public/assets/` contains assets served by the Next.js app.
- `package.json` defines the development scripts.

Run the Next.js app after installing dependencies:

```bash
npm install
npm run dev
```

## Legacy static prototype

This repository now includes a static landing page for the DesignHack concept.

- `index.html` defines the page content and section structure.
- `styles.css` contains the responsive visual design.
- `script.js` handles the mobile navigation and demo waitlist form.
- `assets/hero-designhack.png` is the generated hero image used on the page.
- `content/igcse/theory-pdfs/` stores source IGCSE theory PDFs.
- `content/igcse/theory-sheets/` stores generated/editable Markdown theory sheets.

Open `index.html` in a browser to view the landing page.
