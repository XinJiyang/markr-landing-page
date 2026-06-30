# Markr landing page

A responsive marketing landing page for **Markr**, an AI-powered assessment
platform for Australian K–12 schools. The page is designed for principals and
curriculum leaders and leads visitors to an EDM subscription form.

## Run locally

Prerequisites: Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To verify a production
build, run:

```bash
npm run build
npm start
```

## Approach

The implementation follows the supplied Figma design at desktop (1440 px) and
mobile (375 px) sizes. It uses a small set of reusable page sections, shared
design tokens, semantic HTML and responsive CSS rather than introducing a
general-purpose component framework.

The page includes:

- hero and product value proposition
- product overview and three-step workflow
- capabilities and leadership outcomes
- accessible FAQ using native `details` elements
- front-end-only EDM form with browser validation and a success state
- responsive header and footer

## Technical decisions

- **Next.js Pages Router** — `pages/index.tsx` composes the landing page and
  `pages/_app.tsx` loads global styles.
- **Raw CSS only** — all styling is in `styles/globals.css`. CSS custom
  properties define the colour, spacing, container and radius foundations.
  Tailwind and third-party styling libraries are not used.
- **Lean dependencies** — runtime dependencies are limited to Next.js, React
  and React DOM. Icons and interaction libraries are unnecessary for this page.
- **Progressive enhancement** — anchor navigation, FAQ content and native form
  validation work without custom interaction code. React state is used only
  for the form confirmation.
- **Accessibility** — the document has one primary heading, semantic landmarks,
  descriptive image text, visible keyboard focus, labelled inputs and a live
  form confirmation.

The subscription form intentionally has no backend. Metrics and product claims
are demonstration content for this practical exercise.

## Project structure

```text
components/       Reusable landing-page sections
pages/            Next.js routes and application entry point
styles/           Global raw CSS and responsive rules
```

## Design and tooling

The visual direction and page layout were established in Figma:
[view the source design](https://www.figma.com/design/cb5qFHh0GJwI97h6E6PG2A/ACER).
Codex was used to audit the generated prototype, migrate it from Vite/Tailwind
to the required Next.js Pages Router and raw CSS architecture, reduce
dependencies, and document the implementation. Final code and responsive
behaviour were reviewed manually and with a production build.
