# Feridun Portfolio (Angular)

Angular 17 standalone, lazy-loaded personal portfolio migrated from static HTML/CSS.

## Quickstart

```bash
cd feridun-portfolio
npm install
npm start
```

Open http://localhost:4200

## Structure
- `src/app/layout` navbar and footer
- `src/app/pages` feature pages (lazy-loaded via standalone routes)
- `src/assets/images` static images

## Notes
- Bootstrap, Font Awesome, Google Fonts and Animate.css via CDN in `src/index.html`.
- Global theme variables in `src/styles.scss`.