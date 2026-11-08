# VLX IT Services

Pastel website with no gradients, built with React, TypeScript, and Vinext.

## Run locally (Windows, macOS, or Linux)

Install Node.js 22.13 or newer, then open a terminal in this folder:

```sh
npm ci
npm run dev
```

Open the local address printed in your terminal (normally http://localhost:5173).

## Production build

```sh
npm run build
npm start
```

The current build targets Cloudflare Workers through Vinext. This is not a standard Next.js/Vercel deployment package; adaptation is needed for a different hosting target.

## Main files

- app/page.tsx — page sections, portfolio filters, FAQs, and project brief dialog.
- app/globals.css — pastel palette, layout, and responsive styles.
- app/layout.tsx — title, description, and document wrapper.
- public/favicon.svg — browser icon.

## Before using commercially

Update the portfolio and developer profile links in app/page.tsx to your preferred destinations. The project previews are illustrative concepts, labelled in the interface. The inquiry dialog copies a brief; it does not send messages or save submissions. Fonts load from Google Fonts with local fallbacks.

The original starter documentation is in README-starter.md. Dependencies, generated build files, Git history, and local credentials are excluded. Hosting identity is omitted from this standalone copy.
