# GrowMyStock Preview Page — Setup & Deployment

## What Was Built

A complete React 18 + TypeScript marketing preview page for GrowMyStock, deployed to GitHub Pages at `https://digitalkdogg.github.io/preview-growmystock`.

### React App (GitHub Pages)

**File Structure:**
```
src/
├── components/          # 8 reusable React components
│   ├── NavBar.tsx      # Sticky top nav with smooth-scroll links
│   ├── HeroSection.tsx # Dark gradient hero + badge + CTA buttons
│   ├── FeaturesGrid.tsx # 6-card feature grid (responsive 1→2→3 cols)
│   ├── StatsRow.tsx    # 3 metric cards (109+ / v2.3 / 4)
│   ├── HowItWorksSection.tsx # 3-step visual flow (Discover → Analyze → Invest)
│   ├── ContactSection.tsx # Two-column contact section w/ form
│   ├── ContactForm.tsx # Form with validation + submit states (idle/submitting/success/error)
│   └── Footer.tsx      # Dark footer with logo + copyright
├── hooks/              # Custom React hooks
│   ├── useVisitLogger.ts # Fires POST /api/visit on page mount (silent)
│   └── useContactForm.ts # Form state, validation, POST /api/lead
├── App.tsx            # Main app component, calls useVisitLogger()
├── main.tsx           # React entry point
├── index.css          # Tailwind CSS with DM Sans font import
└── vite-env.d.ts      # TypeScript declarations for Vite

public/                # Static assets (favicon, etc.)
dist/                  # Built production output (npm run build)
```

**Tech Stack:**
- Vite 8.0.10 (fast build tool)
- React 19.2.6 + React DOM
- TypeScript 6.0.3
- Tailwind CSS 4.2.4 (utility-first styling)
- DM Sans font (Google Fonts)
- gh-pages 6.3.0 (GitHub Pages deployment)

**Config Files:**
- `vite.config.ts` — base path set to `/preview-growmystock/`
- `tailwind.config.js` — brand/navy color tokens, DM Sans font
- `postcss.config.js` — PostCSS with @tailwindcss/postcss
- `tsconfig.json` — strict TypeScript settings + Vite client types
- `.env` / `.env.example` — VITE_API_URL placeholder (set in Vercel env)

### API Backend (Node/Express — separate repo/deployment)

**File Structure:**
```
api/
├── index.js      # Express server with 2 endpoints (see below)
├── db.js         # MySQL connection pool with SSL
├── package.json  # Node.js dependencies (express, mysql2, cors)
└── .env.example  # Database credentials (set in Vercel/Railway)
```

**Endpoints:**

1. **POST /api/visit** (silent tracking)
   - Called by `useVisitLogger` hook on page mount
   - Logs visitor IP + user agent to `preview_visits` table
   - Errors are silently caught — never breaks the page

2. **POST /api/lead** (form submission)
   - Called by `ContactForm` on submit
   - Validates: name (≥2 chars), email (regex), message (≥10 chars)
   - Rate-limits: 1 lead per IP per 60 seconds (in-memory Map)
   - Logs lead + IP + user agent to `preview_leads` table
   - Returns `{ ok: true }` or `{ ok: false, error: "message" }`

**Environment Variables** (set in Vercel/Railway dashboard):
```
DB_HOST=growmystock-db-growmystock-5ff9.c.aivencloud.com
DB_PORT=21439
DB_USER=avnadmin
DB_PASSWORD=<real password>
DB_DATABASE=growmystock
CORS_ORIGIN=https://digitalkdogg.github.io
PORT=3001 (optional)
```

---

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Opens at `http://localhost:5173/preview-growmystock/`

Changes auto-reload (hot module replacement).

### 3. Build for Production
```bash
npm run build
```
Outputs to `dist/` — ready to deploy.

- Runs `tsc` (TypeScript type-check)
- Runs `vite build` (optimize, minify, code-split)
- Produces ~65KB gzipped JS, ~3.6KB gzipped CSS

---

## Deployment

### GitHub Pages (React App)

**Prerequisites:**
- GitHub repository with `digitalkdogg` as owner
- `gh-pages` npm package already installed
- GitHub repo settings: Pages > Build and deployment > Deploy from a branch > gh-pages

**Deploy:**
```bash
npm run deploy
```

This will:
1. Build the app (`npm run build`)
2. Push `dist/` to the `gh-pages` branch on GitHub
3. Live in ~2 minutes at: `https://digitalkdogg.github.io/preview-growmystock`

### Vercel/Railway (API Backend)

**To Deploy:**

1. Create a Vercel or Railway project pointing to the `/api` folder
2. Set environment variables in the dashboard:
   ```
   DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, CORS_ORIGIN
   ```
3. Get the API URL (e.g., `https://your-api.vercel.app`)
4. Back in React app:
   - Set `VITE_API_URL=https://your-api.vercel.app` in Vercel env or `.env.local`
   - Run `npm run build` to bake it in

---

## Form Validation

**ContactForm:**
- **Name:** required, ≥2 characters
- **Email:** required, valid email regex
- **Company:** optional
- **Message:** required, ≥10 characters

**Server-side validation** also enforces the same rules; client validation is UX.

**Rate limiting:**
- 1 lead per IP per 60 seconds
- Returns 429 (Too Many Requests) if exceeded

---

## Styling Notes

- **Dark/light contrast:** Navy hero (#0a1628), slate body (#0f2f23)
- **Brand green:** #15803d (CTAs, icons, accents)
- **Responsive:** Mobile-first Tailwind; features grid is 1-col → 2-col → 3-col
- **Font:** DM Sans from Google Fonts (loaded in `index.html`)
- **No CSS files:** All styling via Tailwind utilities + `index.css` directives

---

## Files Modified / Added

**Root:**
- `.env` (gitignored, local only)
- `.env.example` (safe to commit)
- `.gitignore`
- `index.html` (Vite entry point, DM Sans font link)
- `package.json` (scripts: dev, build, deploy)
- `postcss.config.js`
- `tailwind.config.js`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`

**src/**
- `App.tsx` (main component)
- `main.tsx` (React entry point)
- `index.css` (Tailwind setup)
- `vite-env.d.ts` (TypeScript declarations)
- `components/` (8 components)
- `hooks/` (2 custom hooks)

**api/**
- `index.js` (Express server)
- `db.js` (MySQL pool)
- `package.json`
- `.env.example`

---

## Next Steps

1. **Set API URL:** Update `VITE_API_URL` in Vercel (or `.env.local` locally)
2. **Deploy API:** Set up Vercel/Railway with `/api` folder + environment variables
3. **Deploy Frontend:** Run `npm run deploy` to push to GitHub Pages
4. **Monitor:** Check `https://digitalkdogg.github.io/preview-growmystock` — live in ~2 min
5. **Database:** Ensure `preview_visits` and `preview_leads` tables exist in Aiven MySQL

---

## Troubleshooting

**Build fails with "Property env does not exist on type ImportMeta":**
- Ensure `tsconfig.json` has `"types": ["vite/client"]`
- Ensure `src/vite-env.d.ts` exists

**CSS not applied:**
- Check `src/index.css` has `@import "tailwindcss"`
- Check `tailwind.config.js` has `content: ['./index.html', './src/**/*.{ts,tsx}']`

**gh-pages deploy fails:**
- Ensure GitHub repo settings allow Pages from `gh-pages` branch
- Ensure `vite.config.ts` has `base: '/preview-growmystock/'`
- Ensure `package.json` has `"deploy": "gh-pages -d dist"`

**API calls fail (CORS):**
- Ensure `CORS_ORIGIN` in API backend matches `https://digitalkdogg.github.io`
- Ensure API is deployed and `VITE_API_URL` points to correct endpoint
- Check browser console for detailed CORS error

---

## Optional Enhancements

- Add Google Analytics or Mixpanel tracking (in `useVisitLogger`)
- Add email validation backend (async check for bounce)
- Add Slack/Discord webhook for lead notifications
- Add dark mode toggle (Tailwind supports `dark:` utilities)
- Add animation on scroll for feature cards (Intersection Observer)
- Add social proof badges or testimonials

---

**Built with [Claude Code](https://claude.com/claude-code)**
