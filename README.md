# Haven — Real Estate Website

A responsive, editorial-style real estate website built with **Vite + Vanilla JavaScript + CSS**. It intentionally uses no backend: sample listings and journal content live in `src/data.js`, while saved homes and comparison selections are stored in the visitor's browser using `localStorage`.

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Website journeys

- Homepage with featured properties, search, filters, sorting, services, journal preview and contact CTA.
- Property catalogue: keyword/location search, sale/rent filter, property type filter and sorting.
- Property details: gallery lightbox, specifications, amenities, save action, related listings and viewing enquiry.
- Saved homes: browser-local favourites.
- Compare homes: compare up to three listings side-by-side.
- Journal index and individual article pages.
- About, services, contact, privacy and terms pages.
- Responsive navigation and layouts for mobile, tablet and desktop.

## Project structure

```text
src/
  data.js       # Editable property and article content
  main.js       # Rendering, routes and interaction logic
  styles.css    # Design system and responsive styling
index.html
package.json
```

## Routes

The app uses lightweight query-string routes so it works on static hosting:

- `/` — homepage
- `/?property=1` — property detail
- `/?page=favorites` — saved homes
- `/?page=compare` — compare selected homes
- `/?page=journal` — journal index
- `/?article=1` — article detail
- `/?page=about`, `/?page=services`, `/?page=contact`

## Before production

Replace the demo listings, imagery, copy, email address and WhatsApp number in `src/data.js` and `src/main.js`. The contact form opens the visitor's email application using a `mailto:` link; it does not send or persist enquiries on a server. If the business needs a CRM, admin dashboard, real-time inventory, authentication or server-side enquiry storage, add a backend/API later.
