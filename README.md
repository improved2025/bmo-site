# BMO LLC — Website

Next.js (App Router) site for BMO LLC, General Contractors (MD / DC / VA).

## Run it locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```
npm run build
npm start
```

## Structure
- `app/globals.css` — the whole design system (warm palette, green accent, type, components)
- `app/layout.jsx` — fonts, header, footer, scroll-reveal
- `app/page.jsx` — Home
- `app/about/page.jsx` — About
- `app/services|portfolio|contact/page.jsx` — stub pages, ready to build out
- `components/` — Header, Footer, ScrollReveal
- `public/images/` — project photos (PLACEHOLDERS, swap with real BMO work)

## Before launch
- Replace placeholder photos in `public/images/` with real BMO projects
- Confirm DC + VA licensing before the "3 states" / MD-DC-VA claims go public
- Add real phone, email, address (currently placeholders)
- Add verified client testimonials (none are invented)
