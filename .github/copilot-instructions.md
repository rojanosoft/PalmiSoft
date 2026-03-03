# PalmiSoft – Copilot Instructions

## Project Overview
Corporate website for **PalmiSoft**, a software company in Palmira, Colombia. Pure static site — no build system, no package manager, no framework. All content is in **Spanish**.

## Architecture

```
index.html          # Landing page (hero, about, services, technologies, CTA, footer)
contacto.html       # Contact page with validated form + EmailJS integration
privacidad.html     # Privacy policy (Colombian law: Ley 1581/2012)
css/styles.css      # All styles for all three pages (~1400+ lines)
js/script.js        # All interactivity for all three pages
img/                # Logo assets:
  Logo2.png         #   Icon only, transparent background (used in About section)
  Logo3.png         #   Icon + text, transparent background (used in nav & footer)
  LogoPalmiSoft.png #   Icon + text, white background
  PalmiSoft.svg     #   Full vector format
```

One CSS file and one JS file serve all pages — no per-page stylesheets or scripts.

## Design System (CSS Variables in `:root`)

All colors, spacing, radii, shadows, and transitions are defined as CSS custom properties in [css/styles.css](css/styles.css). Always use these variables instead of hard-coding values:

- **Primary color**: `var(--primary-color)` → `#2563eb`
- **Accent**: `var(--accent-color)` → `#0ea5e9`
- **Dark base**: `var(--dark)` → `#0f172a`
- **Spacing scale**: `--spacing-xs` / `--spacing-sm` / `--spacing-md` / `--spacing-lg` / `--spacing-xl`
- **Transitions**: `var(--transition-fast)` (0.2s) / `var(--transition-base)` (0.3s) / `var(--transition-slow)` (0.5s)

## CSS & JS Conventions

- **Class naming**: kebab-case, component-scoped (e.g., `.service-card`, `.contact-icon`, `.nav-link`)
- **Section comments**: `/* ============= SECTION NAME ============= */` in CSS; `// ============= SECTION NAME =============` in JS
- **New sections** in CSS and JS must follow this comment style for consistency
- **Responsive breakpoints**: `768px` (tablet, collapses nav) and `480px` (phone, reduces spacing vars)

## Cross-page Navigation Pattern

`index.html` uses anchor IDs (`#servicios`, `#tecnologias`). Secondary pages link back with `index.html#section`:

```html
<li><a href="index.html#servicios" class="nav-link">Servicios</a></li>
```

The active nav item on `contacto.html` and `privacidad.html` gets `class="nav-link btn-contact active"` manually in HTML (not set by JS).

## Contact Form (EmailJS)

- Lives in `contacto.html` + `js/script.js`; uses **EmailJS** for real email delivery
- **EmailJS SDK** loaded via CDN only in `contacto.html` (not in other pages)
- Initialize in `script.js` at the top: `emailjs.init('YOUR_PUBLIC_KEY')` — guarded by `typeof emailjs !== 'undefined'`
- `emailjs.send('SERVICE_ID', 'TEMPLATE_ID', payload)` — replace placeholders with real EmailJS credentials
- **Template variables**: `from_name`, `from_email`, `phone`, `company`, `subject`, `message`, `to_email`
- **Form element IDs**: `nombre`, `email`, `telefono`, `empresa` (optional), `asunto` (select), `mensaje`, `privacidad` (checkbox)
- **Error element ID pattern**: `{fieldId}-error` (e.g., `<span id="nombre-error" class="form-error">`)
- **Error state**: add class `error` to the `.form-input` element; on send failure, inject `.form-submit-error` div
- Real-time blur/input validation via `validateField()` helper in `script.js`

## WhatsApp Floating Button

Present on all three pages. Fixed bottom-right, `position: fixed; z-index: 998`. CSS class `.whatsapp-btn` with:
- Pulse ring animation via `::before` pseudo-element (`@keyframes whatsapp-pulse`)
- Tooltip on hover via `.whatsapp-tooltip` child `<span>`
- Link: `https://wa.me/573173184631?text=...` (pre-filled greeting message)

## Scroll Animations

`IntersectionObserver` in `script.js` animates `.service-card`, `.tech-category`, and `.about-content` on scroll. Any new card-style component added to `index.html` should use one of these classes or be added to the observer's query selector.

## Local Development

No install step needed. Open directly or use any static server:

```bash
python -m http.server 8000        # Python 3
npx http-server -p 8000           # Node.js
# Or use VS Code Live Server extension
```

## External Dependencies (CDN only)

- **Font Awesome 6.4.0** – loaded via CDN in every page `<head>`
- **EmailJS Browser SDK v4** – loaded via CDN only in `contacto.html`, just before `script.js`
- No Google Fonts link tag (system font stack used: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`)

## Key Constraints

- No npm, no bundler, no TypeScript — keep additions as vanilla HTML/CSS/JS
- Maintain Colombian Spanish for all user-facing text
- Privacy policy references Colombian law; do not remove or alter legal sections without instruction
- Logo images: use `Logo3.png` (nav, footer via `filter: brightness(0) invert(1)` on dark bg), `Logo2.png` (About section), `PalmiSoft.svg` for any new scalable contexts
