# Portfolio Website

Personal portfolio for Huzaifa Zia — [huzaifazia.com](https://huzaifazia.com)

Built with React 18, Vite, Tailwind CSS v4, and Motion.

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Editing content

All site content — experience, projects, skills, education, contact details —
lives in a single file: **`src/data/resume.js`**. Components read from it and
map over the arrays, so adding a job or project means editing that file only.

Keep it in sync with `public/Huzaifa-Zia-Resume.pdf`, which the Resume button
links to. To swap the resume, replace that PDF and keep the filename.

## Theming

Every colour resolves to a CSS custom property defined in `src/index.css`
(`:root` for light, `.dark` for dark). No component contains a hex literal,
so a re-theme means editing that one block.

Light is the default; dark is opt-in via the toggle and remembered in
`localStorage`. The inline script in `index.html` applies the stored theme
before first paint to avoid a flash — leave it in place.

## Deployment

Deployed on Vercel (framework preset: Vite, output: `dist/`). Pushes to `main`
deploy to production; other branches get preview URLs.

`public/CNAME` is a leftover from the previous GitHub Pages setup and can be
deleted once DNS for `huzaifazia.com` points at Vercel.
