# Project Plan + Technical Design
*Minimalistisk Portefølje for Visuell KI-Kreatør*

Dette dokumentet beskriver systemarkitekturen, teknologivalgene og den visuelle komposisjonen for din nye portefølje-nettside. Hovedfokuset er en ren, minimalistisk stil (svart, hvitt, grått) og en arkitektur med lav kompleksitet som legger til rette for fullautomatisert publisering via SPK CHAT.

---

## 1. Visuell Wireframe (ASCII)

### 1.1 Hovedsiden (Hero & Body of Work)
```text
+-------------------------------------------------------------+
| [LOGO / NAVN]                                    [KONTAKT] |
|                                                             |
|=============================================================|
|                                                             |
|                                                             |
|                   [ HERO SEKSJON ]                          |
|             (Fullskjerm Video Bakgrunn)                     |
|                                                             |
|           "Visuell KI-Kreatør & Director"                   |
|                                                             |
|                                                             |
|                                                             |
|=============================================================|
|                                                             |
|                    < BODY OF WORK >                         |
|                                                             |
|   +-------------------+  +-------------------+              |
|   |      Bilde        |  |      Bilde        |   ...        |
|   |  Prosjekttittel   |  |  Prosjekttittel   |              |
|   +-------------------+  +-------------------+              |
|                                                             |
|   +-------------------+  +-------------------+              |
|   |      Bilde        |  |      Bilde        |   ...        |
|   |  Prosjekttittel   |  |  Prosjekttittel   |              |
|   +-------------------+  +-------------------+              |
|                                                             |
+-------------------------------------------------------------+
```

### 1.2 Prosjektsiden (Gjenbrukbar Underside)
```text
+-------------------------------------------------------------+
| [LOGO / NAVN]                                    [KONTAKT] |
|                                                             |
|=============================================================|
|                                                             |
|   +---------------+   [ Prosjekttittel, f.eks. "Mørk Materie" ]
|   |               |   [ Undertittel / Kategori, f.eks. "Abstrakt" ]
|   |               |
|   |               |   [ Om sluttproduktet ]
|   |   [ VIDEO ]   |   Her kommer en kort, slående tekst som 
|   |   [ HER ]     |   beskriver sluttproduktet du har levert, 
|   |               |   hva målet var, og verdien det skapte.
|   |               |   ---------------------------------------------
|   |               |   SELSKAP: Tech AS
|   |               |   VERKTØY: Midjourney, Kling AI, Premiere Pro
|   |               |   METODE:  Inkrementell (Smidig)
|   +---------------+   ---------------------------------------------
|                                                             |
|=============================================================|
|                                                             |
|   [ Bak kulissene / Fra produksjonen ]                      |
|                                                             |
|   +-----------------------+   Slik ble det til:             |
|   |                       |   Her har vi plass til          |
|   |     [ BREDT BILDE     |   horisontale bilder, prosess,  |
|   |     FRA PRODUKSJON ]  |   eller innblikk i hvordan      |
|   |                       |   resultatet ble fremstilt.     |
|   +-----------------------+                                 |
|                                                             |
+-------------------------------------------------------------+
```

---

## 2. Arkitektur & Stack

For å innfri kravet om **Kotlin** over hele linja og lav kompleksitet, anbefales følgende stack bygget for Statisk Sidegenerering (SSG) eller enkel klient-side rendring.

* **Frontend Framework:** **Kobweb** (Kotlin/JS framework skreddersydd for nettsider, genererer optimalisert HTML/CSS).
* **Styling:** Innebygd Kobweb Silk (CSS-in-Kotlin) som garanterer at vi utelukkende låser oss til det minimalistiske svart, hvitt og grått-temaet.
* **Hosting / Deployment:** GitHub Pages, Vercel eller Netlify (Støtter automatisk bygging via GitHub Actions).
* **Datakilde for Prosjekter:** Flate Markdown/JSON-filer i selve repositoryet. Dette gjør at frontend-koden er utrolig ren og krever null live database, perfekt for SSG og lett å lese/redigere.

---

## 3. Komponentoversikt

Løsningen bygges med modulære og gjenbrukbare komponenter i Kotlin:

1. `Header(modifier: Modifier)`: Logo og navigasjon, fast i toppen (sticky).
2. `HeroSection(videoUrl: String)`: Full width/height container som rendrer et `<video>` tag med `autoplay`, `loop` og `muted`.
3. `BodyOfWork()`: Layout-kontainer (CSS Grid) for prosjektene. Benytter auto-fit for skalerbarhet.
4. `ProjectCard(project: ProjectModel)`: En klikkbar `<article>` eller `<div>` boks. Viser et oversiktsbilde og tittel dynamisk.
5. `ProjectPageTemplate(project: ProjectModel)`: Den faste undersiden som fylles med data når brukeren navigerer.

---

## 4. Faseinndelt Oppgavebeskrivelse (Task Breakdown)

### Fase 1: Prosjektoppsett og Grunnlag
* Opprette nytt Kobweb-prosjekt.
* Definere Color Theme (Strict Black, White, shades of Grey).
* Sette opp typografi og base-layout (Header, Footer).

### Fase 2: Implementasjon av Hovedsiden
* Koding av `HeroSection` med HTML `<video>` element for bakgrunnsavspilling.
* Koding av `BodyOfWork` CSS-grid (`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`) som lar prosjekter flyte på plass automatisk uten at formatet brytes.

### Fase 3: Detaljsider og Datamodell
* Definere Kotlin `data class Project(val id: String, val title: String, val subtitle: String, val pitch: String, val company: String, val tools: String, val method: String, val coverImage: String, val heroVideoUrl: String?, val processImage: String?, val processDescription: String?)`.
* Generere undersider i Kobweb basert på dynamiske routing-parametere / side-maler.
* Linke hver boks i `ProjectCard` til riktig underside.

### Fase 4: Automasjon og SPK CHAT Integrasjon
* Sette opp GitHub Actions for auto-deploy.
* Konfigurere et Webhook-mottak for SPK CHAT.

---

## 5. Funksjonelle Krav
* **Responsivt Design:** Elementene stabler seg vertikalt på mobil (Videoen justerer aspect ratio, gridet går fra flere til en kolonne).
* **Lav Kompleksitet:** Koden er sentrert rundt komponenter med beskrivende navn. Ingen dyp reaktiv states-håndtering, kun statisk data-binding.
* **Bilde/Tekst-Grid:** Body Of Work skal kun vise statiske elementer (bilder og tekst) for ikke å forstyrre videobakgrunnen oppe.
* **Klikkbare Bokser:** Hvert kort utgjør en full HTML-anchor som trigger routing.

---

## 6. Tekniske Krav & Fremtidsvisjon (Automasjon med SPK CHAT)

Ambisjonen er å sende innhold via Signal til SPK CHAT, og at siden umiddelbart oppdateres. For å beholde lav kodekompleksitet i frontend uten behov for en dyr, aktiv backend-server + database, bruker vi **Git GitOps & SSG**-tilnærmingen.

### Dataflyt fra Signal til Publisert Nettside:

1. **Input (Du på Signal):**
   Du sender en bestemt melding til SPK CHAT, f.eks: 
   `[Nytt Prosjekt] Tittel: "Mørk Materie" Beskrivelse: "En abstrakt utforskning..." [Vedlegg: Bilde1.png, Video1.mp4]`

2. **Prosessering i SPK CHAT (Backend):**
   * Din eksisterende SPK CHAT tar imot filene og laster dem opp til en skylagring (f.eks. AWS S3 r2 eller Cloudinary) som gir tilbake offentlige URL-er.
   * Chatboten formaterer en JSON-fil (eller Markdown-fil med frontmatter) basert på Kotlin-datamodellen vår.

3. **Integrasjon & Trigger (GitHub API / Webhook):**
   * SPK CHAT bygger en API-forespørsel mot GitHub's REST API.
   * Den oppretter en ny `.json` / `.md` fil direkte i nettsidens repository under mappen f.eks: `/data/projects/mork-materie.json`.
   * *Nøkler som kreves:* En **GitHub Personal Access Token (PAT)** lagret i SPK CHAT sitt miljø.

4. **Automatisk Bygg og Deploy (Action):**
   * Når SPK CHAT oppretter filen direkte i master/main-branchen, vil en **GitHub Action** automatisk trigges.
   * GitHub Action kjører Kobweb sin byggeprosess, fanger opp det nye prosjektet fra mappen, genererer en ny `<article>` i "Body of Work"-gridet, bygger undersiden, og dytter den nye versjonen ut til web.

### Konkrete ressurser du trenger for SPK CHAT:
* **Storage Provider:** Hvor boten skal laste opp bildefilene før nettsiden ber om dem.
* **GitHub Personal Access Token:** Slik at boten kan dytte `.json`-filer til nettside-repoet.
* **GitHub Repository:** Kildekoden til denne nettsiden, utstyrt med en `.github/workflows/deploy.yml` fil.

Dette sikrer at nettsiden din *alltid* er lynrask, koden er minimalistisk og krever ingen aktiv backend. SPK CHAT fungerer utelukkende som en "Headless CMS"-redaktør som styrer kildekoden til repot ditt.
