# BetterTalibon

A community-built, independent transparency portal for the **Municipality of Talibon, Bohol** — part of the [BetterGov.ph BetterLGU](https://lgu.bettergov.ph) initiative.

> Not the official LGU website. Official site: <https://talibon.gov.ph>

## Stack

React 19 + TypeScript, Vite, Tailwind CSS v4, React Router. Static SPA, deployable free on Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview
```

## Where the content lives

All content is in **`src/data/talibon.ts`** — every page reads from it. Each block is commented with the talibon.gov.ph page it came from. To update officials, hotlines or links, edit that file only.

| Page | Route | Source on talibon.gov.ph |
|---|---|---|
| Home | `/` | Home, Brief Profile, Vision-Mission |
| About | `/about` | Brief Profile, History, List of Mayors |
| Government | `/government` | Directory of Departments |
| Barangays | `/barangays` | Barangays of Talibon |
| Services | `/services` | eLGU Services, Downloadable Forms |
| Transparency | `/transparency` | Transparency menu, Legislative |
| Tourism | `/tourism` | Tourism menu |
| Contact | `/contact` | Site footer (hotlines, contacts) |

## Deploy to Vercel

**Option A — dashboard (recommended)**

1. Push this folder to a public GitHub repo named `bettertalibon`.
2. In Vercel: **Add New → Project → Import** the repo.
3. Vercel detects Vite automatically (build `npm run build`, output `dist`). Click **Deploy**.
4. Your site is live at `bettertalibon.vercel.app` (or similar). Every push to `main` redeploys.

**Option B — CLI**

```bash
npm i -g vercel
vercel          # first run links the project
vercel --prod
```

`vercel.json` already sets the SPA rewrite (so `/about`, `/government`, etc. work on refresh), long-lived caching for `/assets`, and basic security headers.

**Custom domain:** the BetterLGU guide recommends `bettertalibon.org`. After registering it, add it under *Project → Settings → Domains* and point DNS as Vercel instructs.

## Register in the BetterLGU directory

Per the [guide](https://lgu.bettergov.ph/GUIDE): fork <https://github.com/jmacj/better-lgu-directory>, add the row in `DIRECTORY_ENTRY.md` to the directory table, and open a PR. Start as 🟡 Work in Progress; switch to 🟢 Active once the site is live.

## Roadmap

- [ ] Transcribe the Sangguniang Bayan roster (published as an image)
- [ ] Punong barangay names for all 25 barangays
- [ ] Annual budget and infrastructure projects as searchable tables/charts (COA, DBM, FDP data)
- [ ] Ordinance and resolution index
- [ ] Cebuano (Binisaya) translation
- [ ] Citizen feedback form (with CAPTCHA / rate limiting before any Discord webhook)

## Contributing

Corrections are welcome: open an issue or PR, and cite the public source for any data change.

## License

Code: MIT. Content compiled from public government records.
