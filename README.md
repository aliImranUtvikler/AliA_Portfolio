# AI Ali (aiali.no) — KI-Implementeringskonsulent & Visuell KI-Spesialist

Moderne, dynamisk portefølje- og konsulentplattform for **Ali Anjum (AI Ali)**, bygget med `arrakis.tech`-inspirert blueprint-design i **React, TypeScript, Vite, Tailwind CSS og Framer Motion**.

## Kjøre prosjektet lokalt

```bash
npm install
npm run dev
```

Åpne `http://localhost:5173` i nettleseren.

## Hvordan oppdatere innhold (Prosjekter, Tjenester & YouTube-Vlog)

Alt innhold på nettsiden styres fra én strukturert fil:
- `src/data/siteData.ts`

Der kan du på sekunder:
1. Legge til nye **Case-studier** (`PROJECTS`)
2. Legge til nye **YouTube-episoder og arbeidsflyt-oppskrifter** (`VLOG_EPISODES`)
3. Justere **Konsulenttjenester** (`CONSULTING_SERVICES`) eller **Interaktive KI-Pipelines** (`PIPELINE_SCENARIOS`)

## Bygg & Deploy

Prosjektet bygges automatisk til statiske filer (`dist/`) og deployes til GitHub Pages via `.github/workflows/deploy.yml` ved push til `main`.
