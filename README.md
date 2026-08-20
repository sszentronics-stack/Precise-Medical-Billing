# Precise Medical Billing — B2B RCM Marketing Site

A responsive, animated React + Tailwind marketing site built to a specific
design brief: a clean SaaS/agency aesthetic (navy + off-white + gold accent),
mega-menu navigation, a full homepage conversion flow, and a programmatic
template that powers dozens of Service / Specialty / Location subpages from
one shared layout.

## Design system

- **Palette:** deep navy `#10263F` as the anchor color, off-white `#F7F8FA`
  background, warm gold `#E8A63D` reserved only for CTA buttons and stat
  numbers.
- **Type:** Inter throughout — bold/extrabold display weights for headlines,
  regular/medium for body copy.
- **Components:** rounded cards, soft shadows, line icons (lucide-react),
  no photography — illustrated stat graphics and logo walls instead.

## Homepage section flow

1. Sticky header with mega-menu nav (Services / Specialties / Locations),
   phone number, and a CTA that opens a lead-capture modal
2. Hero — headline, subhead, inline lead form, review-score trust badge,
   two CTAs
3. Stat band — 6 KPI tiles on a navy background
4. Services grid — 6 cards linking to dedicated service pages
5. Social-proof strip — auto-scrolling client-logo marquee + coverage stat
6. Specialties grid — 6 cards with specialty-specific pain points
7. Testimonial wall — 10 attributed reviews with specialty tags
8. Blog/insights teaser — 4 article cards
9. Integration/compatibility logo wall — 12 platform names
10. FAQ accordion — specific, operational questions
11. Final CTA banner — bold gold background
12. Footer — multi-column sitemap, NAP info, legal links, compliance badge

A persistent floating action button (bottom-right) expands into a short
pitch + "Book a Call" popup. The three core stats (annual collections,
clean-claim rate, days in A/R) repeat in the mega-menu, the hero trust
context, and the stat band.

## Programmatic pages

`src/pages/SubpageTemplate.jsx` is the single shared template (hero +
benefit grid + FAQ + CTA) used by:

- `/services/:slug` — 6 services, data in `src/data/content.js`
- `/specialties/:slug` — 6 specialties
- `/locations/:slug` — 8 sample state locations

Add a new entry to the relevant array in `src/data/content.js` and a new
route is live with the full page automatically — that's the scalable
pattern the brief calls for.

## Stack

React 18 + React Router 6 + Tailwind CSS + lucide-react + Vite.

## Getting started

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- All client names, testimonials, and integration/platform names are
  fictional placeholders — replace with real data before launch.
- The lead form and modal only show a confirmation state in the UI; wire
  the `handleSubmit` logic in `src/components/LeadForm.jsx` up to your
  CRM or email service.
- The blog only has a teaser/index page; individual article pages aren't
  built out, since no article content was provided.
- Contact details (phone, email, address) are placeholders.
