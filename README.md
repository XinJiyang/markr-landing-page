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
- product overview
- features and capabilities
- three-step Create, Mark and Analyse workflow
- outcomes for school leadership
- FAQ
- EDM subscription form
- footer

## Technical decisions

- **Next.js Pages Router** — `pages/index.tsx` composes the page and
  `pages/_app.tsx` provides the application entry point.
- **Raw CSS** — styling is maintained in `styles/globals.css`, without
  Tailwind or a third-party styling library.
- **Lean dependencies** — production dependencies are limited to Next.js,
  React and React DOM.
- **Reusable structure** — each major section is a focused component, with
  repeated content represented as data and rendered consistently.
- **Progressive enhancement** — anchor navigation, native FAQ disclosure and
  browser form validation work without unnecessary interaction libraries.
- **Accessibility** — the page uses semantic landmarks, a single primary
  heading, labelled inputs, descriptive alternative text and visible keyboard
  focus states.
- **Responsive behaviour** — layouts adapt from multi-column desktop sections
  to readable mobile content without changing the information hierarchy.

The EDM form is intentionally front-end only, as permitted by the brief. It
uses native required and email validation and displays a confirmation state
after submission. Product metrics and claims are demonstration copy for this
exercise.

## How AI was used

AI was used as an accelerator for exploration and implementation, not as a
substitute for design and engineering judgement.

### Figma Make

Figma Make with **Gemini 3.1 Pro** was used during the early design phase to
quickly explore a suitable landing-page framework, content hierarchy and visual
direction. This made it possible to compare structural ideas rapidly before
committing to the final desktop and mobile designs.

The generated direction was then reviewed and refined manually. Particular
attention was given to the audience, section order, readability, responsive
behaviour, consistent spacing and whether each section supported the EDM
conversion goal. The final Figma structure and design decisions were selected
deliberately rather than accepted directly from the initial AI output.

### Codex

Codex was used to audit the generated implementation and accelerate the
restructuring of the codebase into a lean Next.js Pages Router project. It
assisted with identifying unnecessary dependencies, separating the page into
maintainable components, improving semantic markup, checking requirement
coverage and drafting project documentation.

All generated changes were reviewed against the brief and the Figma design.
The final architecture, content decisions and implementation remain the
candidate's responsibility. This workflow reflects how I would use AI in a
production team: shorten repetitive work and broaden early exploration while
keeping human review, clarity, maintainability and user needs as the quality
gate.

## Tools

- **Figma** — design exploration, desktop and
  mobile layouts, and visual system
- **Webflow** — responsive no-code implementation and public staging site
- **Next.js, React and TypeScript** — coded implementation
- **Codex** — code audit, restructuring support and documentation
- **GitHub** — source control and public project delivery
