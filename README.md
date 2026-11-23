# Kewicare Safaris website

Source for [kewicare.com](https://kewicare.com), the website of Kewicare Safaris, a Kampala-based tour operator offering gorilla trekking, wildlife safaris and custom Uganda trips.

It is a static site: plain HTML, one shared stylesheet and one shared script. There is no build step, package manager or framework.

## Pages

| URL | File | Purpose |
|---|---|---|
| `/` | `index.html` | Home |
| `/safari-packages/` | `safari-packages/index.html` | Safari packages, plus the downloadable flyer and upcoming dates |
| `/gorilla-trekking/` | `gorilla-trekking/index.html` | Gorilla trekking guide: permits, costs, planning |
| `/destinations/` | `destinations/index.html` | National parks and destinations |
| `/how-it-works/` | `how-it-works/index.html` | How a trip is planned, step by step |
| `/about/` | `about/index.html` | About the company |
| `/reviews/` | `reviews/index.html` | Traveler reviews |
| `/faq/` | `faq/index.html` | Frequently asked questions |
| `/contact/` | `contact/index.html` | Contact details and enquiry form |
| `/terms/`, `/privacy/`, `/cancellation-policy/` | one `index.html` each | Legal and policy pages |
| not found | `404.html` | Custom 404 page |

## Project layout

```
index.html               Home page
<page>/index.html        One folder per page, so page URLs end in a slash
404.html                 Not-found page
css/styles.css           Shared styles and design tokens
js/main.js               Shared script: mobile menu, scroll reveal, active nav link,
                         and the destination carousel on the home page
logos/                   Logo and favicon files
robots.txt, sitemap.xml  Crawler rules and sitemap, both maintained by hand
*.avif, *.webp, *.jpg    Hero and page images
*.pdf                    Downloadable flyer and upcoming safari dates
```

A few original hero source images are ignored by git (see `.gitignore`). The optimized AVIF, WebP and JPEG versions in the repo root are the ones the site uses.

## Run it locally

From the repo root:

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Serve from the repo root, because pages load assets with root-relative paths such as `/css/styles.css`. Any static file server works. The Vercel Insights script only exists on Vercel, so it fails to load locally, which is harmless.

## Editing

- The nav and footer are copied into every page, and there is no include system. A change to either has to be made in all 13 HTML files.
- Brand colors and fonts are CSS variables at the top of `css/styles.css`: orange `#E8622A`, green `#1B6B3A`, near-black `#0A0A0A`, and the Geist and Geist Mono fonts from Google Fonts.
- Six pages (`404.html`, about, cancellation-policy, destinations, how-it-works, safari-packages) have a small page-specific style block in the HTML, and some elements use inline `style` attributes. Everything else lives in `css/styles.css`.
- The contact form posts to Formspree. The endpoint is set in `contact/index.html`.

## Adding or changing a page

1. Create `<slug>/index.html` by copying a similar page, so the head, nav, footer and analytics stay consistent.
2. Give it a unique title (about 40 to 55 characters, main keyword first), a meta description, and a self-referencing canonical that ends in a slash, for example `https://kewicare.com/about/`.
3. Add `BreadcrumbList` JSON-LD like the other inner pages.
4. Add the page to `sitemap.xml` and link it from the nav or from related pages.
5. Keep business details identical everywhere. The name, phone, email and address appear in the visible footer and in the `TravelAgency` JSON-LD on `/`, `/about/`, `/contact/`, `/faq/`, `/gorilla-trekking/` and `/reviews/`. If a detail changes, update all of them together.

## Hosting and analytics

The site is hosted on Vercel as a static site. Every page loads Google Analytics 4 and Vercel Insights. `robots.txt` allows all crawlers, blocks only `/_vercel/`, and points to the sitemap.
