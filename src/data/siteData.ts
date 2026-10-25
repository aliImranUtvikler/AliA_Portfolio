export interface ProcessGalleryItem {
  step: string;
  label: string;
  image: string;
  caption: string;
}

export interface ProjectCase {
  id: string;
  indexCode: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  impactBadge: string;
  pitch: string;
  company: string;
  tools: string[];
  method: string;
  coverImage: string;
  heroVideoUrl?: string;
  heroVideoPosterUrl?: string;
  processImage?: string;
  processDescription?: string;
  processGallery?: ProcessGalleryItem[];
  metrics: { label: string; value: string }[];
  workflowSteps: { step: string; title: string; detail: string }[];
}

export interface ConsultingService {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  roiHighlight: string;
  deliverables: string[];
  idealFor: string;
}

export interface PipelineScenario {
  id: string;
  code: string;
  name: string;
  bottleneck: string;
  traditionalCost: string;
  aiAliResult: string;
  timeSaved: string;
  inputs: { label: string; sub: string }[];
  engineNodes: { tool: string; role: string; param: string }[];
  outputs: { title: string; metric: string }[];
}

export interface VlogEpisode {
  id: string;
  episodeCode: string;
  title: string;
  status: 'PLANLAGT' | 'UTE NÅ';
  duration: string;
  youtubeUrl?: string;
  thumbnail: string;
  hook: string;
  businessProblem: string;
  toolsCovered: string[];
  recipeSteps: string[];
  takeaway: string;
}

export const TELEMETRY_METRICS = [
  {
    code: 'METRIC // 01',
    value: '22M+',
    label: 'Organiske visninger skapt med 100% KI',
    detail: 'Dokumentert viral rekkevidde og kontinuitet på tvers av plattformer',
  },
  {
    code: 'METRIC // 02',
    value: '70–85%',
    label: 'Raskere fra idé til ferdig produksjon',
    detail: 'Kutter uker med tradisjonell opptakstid ned til timer',
  },
  {
    code: 'METRIC // 03',
    value: '108K+',
    label: 'Følgere bygget med KI-drevet merkevare',
    detail: 'Bevis på at KI-innhold skaper ekte engasjement og inntekt',
  },
  {
    code: 'METRIC // 04',
    value: '1:1',
    label: 'Skreddersydd implementering hos kunde',
    detail: 'Ingen teoretiske lysbilder – vi bygger faktiske arbeidsflyter',
  },
];

export const CONSULTING_SERVICES: ConsultingService[] = [
  {
    id: 'ki-implementering',
    code: 'SYS.MOD // 01',
    title: 'KI-Implementering & Arbeidsflyt',
    tagline: 'Sett KI i system i din bedrift for å spare tid og kutte kostnader',
    description:
      'Jeg kartlegger hvor dere mister mest tid i dag, velger ut de riktige KI-verktøyene og bygger faste, repeterbare produksjons-pipelines for teamet deres.',
    roiHighlight: 'Kutter typisk produksjons- og leveringstid med 60–80 % innen 30 dager',
    deliverables: [
      'Kartlegging av flaskehalser i markeds- og innholdsproduksjon',
      'Oppsett av skreddersydd KI-verktøykasse (Video, Bilde, Stemme, Automatisering)',
      'Ferdige prompt-biblioteker og merkevare-maler for visuell kontinuitet',
      '1-til-1 oppfølging til arbeidsflyten sitter i ryggmargen',
    ],
    idealFor: 'Markedsavdelinger, e-handelsbedrifter og SMB-er som vil produsere mer innhold uten å ansette flere.',
  },
  {
    id: 'workshops-opplaering',
    code: 'SYS.MOD // 02',
    title: 'Praktiske KI-Workshops for Team',
    tagline: 'Hands-on opplæring der teamet lærer håndverket bak profesjonell KI',
    description:
      'I denne workshopen jobber vi direkte med bedriftens egne produkter og utfordringer, slik at teamet går ut av rommet med ferdigprodusert materiale og ny spisskompetanse.',
    roiHighlight: 'Teamet lærer metodene som skiller «billig AI-støy» fra kommersiell kvalitet',
    deliverables: [
      'Halvdags eller heldags praktisk workshop (fysisk eller digitalt)',
      'Slik bevarer dere ekte produkter og logoer 100 % autentisk i KI-video',
      'Karakter- og stilkontinuitet: Få samme modell/uttrykk på tvers av kampanjer',
      'Komplett oppskriftshefte og arbeidsflyt-dokumentasjon etter samlingen',
    ],
    idealFor: 'Byråer, innholdsteam og ledergrupper som vil løfte kompetansen raskt.',
  },
  {
    id: 'nokkelferdig-produksjon',
    code: 'SYS.MOD // 03',
    title: 'Nøkkelferdig Visuell KI-Produksjon',
    tagline: 'High-end reklamefilm, produktvideo og konseptutvikling levert ferdig',
    description:
      'Når dere trenger en slående kampanjevideo, en krystallklar instruksjonsfilm eller en virtuell merkevare-ambassadør – ferdig produsert til en brøkdel av prisen og tiden til et tradisjonelt filmteam.',
    roiHighlight: 'Filmatisk kvalitet levert på dager fremfor måneder',
    deliverables: [
      'Konsept, regi og visuell stilutvikling skreddersydd målgruppen',
      'Sømløs integrasjon av bedriftens fysiske produkter i ethvert miljø',
      'Profesjonell KI-stemmesyntese (flere språk), lyddesign og musikk',
      'Ferdig klippede formater optimalisert for nettside, TikTok, Reels og annonser',
    ],
    idealFor: 'Bedrifter som lanserer nye produkter eller trenger engasjerende forklaringsvideoer.',
  },
];

export const PIPELINE_SCENARIOS: PipelineScenario[] = [
  {
    id: 'ecommerce-fashion',
    code: 'PIPE // 01',
    name: 'Lagerbilde til Reklamefilm',
    bottleneck: 'Statiske produktbilder fra lagerrom selger dårlig, men location-shoot for hvert produkt er altfor dyrt.',
    traditionalCost: '3–5 uker leveringstid • Dyre location-, transport- og fotografkostnader',
    aiAliResult: 'Fysiske møbler og klær plassert sømløst i eksklusive miljøer og animert til reklamefilm',
    timeSaved: '85% raskere time-to-market',
    inputs: [
      { label: 'Lager-/Mobilbilder av produkt', sub: 'Enkle bilder av møbelet eller plagget fra ulike vinkler' },
      { label: 'Miljø-referanse (Pinterest)', sub: 'Ønsket interiør, arkitektur eller stemning' },
    ],
    engineNodes: [
      { tool: 'Kling AI Asset Engine', role: '3D/Multi-vinkel Produkt-låsing', param: 'Bevarer eksakt treverk, form & detaljer' },
      { tool: 'Scene Inpainting / Swap', role: 'Miljø-integrasjon', param: 'Erstatter møbler i referanserommet med kundens produkt' },
      { tool: 'Kling Motion + CapCut', role: 'Filmatisk Bevegelse', param: 'Naturlig sollys, kameraføring & klipp' },
    ],
    outputs: [
      { title: 'Ferdig Reklamefilm', metric: '100% tro mot fysisk produkt' },
      { title: 'Skalerbar Katalog-Pipeline', metric: 'Nye miljøer uten å flytte møbelet' },
    ],
  },
  {
    id: 'b2b-explainer',
    code: 'PIPE // 02',
    name: 'Teknisk Produkt til Instruksjonsfilm',
    bottleneck: 'Kunder leser ikke tunge PDF-bruksanvisninger, noe som fører til feilbruk og unødvendig kundeservice.',
    traditionalCost: '2–4 uker med opptak, væravhengighet og voiceover-studio',
    aiAliResult: 'Pedagogisk, visuell steg-for-steg instruksjonsfilm med proff fortellerstemme',
    timeSaved: '75% lavere produksjonskostnad',
    inputs: [
      { label: 'Teknisk Instruks / PDF', sub: 'Faglig beskrivelse av hvordan produktet brukes' },
      { label: 'Produkt-referanse', sub: 'Visuelle kjennetegn (f.eks. granulat / emballasje)' },
    ],
    engineNodes: [
      { tool: 'Visuell Konsept-KI', role: 'Miljø- & Scenebygging', param: 'Konsistent lys og nordisk miljø' },
      { tool: 'Kling AI Motion', role: 'Steg-for-steg Animasjon', param: 'Tydelig visualisering av påføring' },
      { tool: 'ElevenLabs Pro', role: 'Syntetisk Fortellerstemme', param: 'Naturlig, tillitsvekkende norsk tale' },
    ],
    outputs: [
      { title: 'Komplett Demo-Video', metric: 'Økt forståelse & konvertering' },
      { title: 'Flerspråklig Skalerbarhet', metric: 'Kan dubbes til 10 språk på 15 min' },
    ],
  },
  {
    id: 'virtual-brand-ip',
    code: 'PIPE // 03',
    name: 'Skalerbar Virtuell Merkevare & SoMe-Motor',
    bottleneck: 'Å bygge organisk rekkevidde krever enormt volum av videoinnhold og ansikter utad som sjelden har tid.',
    traditionalCost: 'Avhengig av fysiske opptak hver eneste uke for å holde algoritmen varm',
    aiAliResult: '100% KI-generert karakter med fast identitet som publiserer kontinuerlig',
    timeSaved: '22M+ visninger dokumentert',
    inputs: [
      { label: 'Karakter-DNA (Fast Mal)', sub: 'Låste attributter for ansikt, alder, stil og vibe' },
      { label: 'Lyd- & Konseptspor', sub: 'Original musikk og trender tilpasset plattformen' },
    ],
    engineNodes: [
      { tool: 'Prompt-Arkitektur', role: 'Karakter-Kontinuitet', param: 'Identisk utseende i hver eneste scene' },
      { tool: 'Kling AI Tekst-til-Video', role: 'Dynamisk Performance', param: 'Naturlige DJ- og kamerabevegelser' },
      { tool: 'Suno + CapCut Pipeline', role: 'Audio-Visuell Synk', param: 'Optimalisert for høy seertid (retention)' },
    ],
    outputs: [
      { title: 'Viral SoMe-Maskin', metric: '22M+ visninger • 108k+ følgere' },
      { title: 'Monetiserbar IP', metric: 'Skaper direkte Spotify- og plattforminntekt' },
    ],
  },
];

export const PROJECTS: ProjectCase[] = [
  {
    id: 'teakklinikken',
    indexCode: 'CASE // 01',
    title: 'Reklamefilm for Teakklinikken',
    subtitle: 'Møbeldesign & Interiør • Fra lagerbilde til drømmelocation',
    categoryTag: 'Møbler & Interiør • Asset-Swap',
    impactBadge: 'Fra lagerrom til eksklusivt loft',
    pitch:
      'Teakklinikken selger og restaurerer eksklusive skandinaviske vintage- og designmøbler. Utfordringen er at møblene vanligvis fotograferes oppstilt på et lagerrom – veldig statisk og langt unna miljøet de faktisk hører hjemme i. Basert på vanlige mobilbilder fra lageret bygget jeg en låst Kling AI-asset av spisebordet og stolene, fant en arkitektonisk drømmesetting via Pinterest, erstattet møblene i scenen med Teakklinikkens egne møbler og ga rommet filmatisk bevegelse.',
    company: 'Teakklinikken (@teakklinikken)',
    tools: ['Kling AI (Assets)', 'Nano Banana Pro', 'Pinterest Ref', 'CapCut'],
    method: 'Multi-Vinkel Asset-Bygging & Miljø-Erstatning',
    coverImage: 'images/projects/teakklinikken-cover.jpg',
    heroVideoUrl: 'video/projects/TeakBordStol_p.mp4',
    heroVideoPosterUrl: 'images/projects/teakklinikken-cover.jpg',
    processImage: 'images/projects/teakklinikken-input-photos.png',
    processDescription:
      'Arbeidsflyten eliminerer behovet for å frakte tunge designmøbler ut på fotoshoot: Kunden sendte 14 raske mobilbilder av spisebordet og stolene fra lageret på Instagram DM. Bildene ble samlet til en gjenbrukbar 3D-konsistent Asset i Kling AI. Deretter hentet vi en interiør-referanse fra Pinterest, byttet ut bordet og stolene i bildet med Teakklinikkens faktiske sett, og animerte lys og kamerabevegelse til en ferdig reklamefilm.',
    processGallery: [
      {
        step: '01 // INPUT FRA LAGER',
        label: '14 statiske lagerbilder på DM',
        image: 'images/projects/teakklinikken-input-photos.png',
        caption: 'Slik ser møblene vanligvis ut: Tatt raskt på lageret mot en hvit vegg.',
      },
      {
        step: '02 // PINTEREST SETTING',
        label: 'Valgt drømmelocation',
        image: 'images/projects/teakklinikken-pinterest-ref.png',
        caption: 'Inspirasjonsbildet fra Pinterest der de originale møblene ble fjernet og erstattet med Teakklinikkens asset.',
      },
      {
        step: '03 // FERDIG FILM & REAKSJON',
        label: '«Den er kaos»',
        image: 'images/projects/teakklinikken-result-dm.png',
        caption: 'Møblene plassert i det nye rommet med filmatisk lys og bevegelse – levert rett på DM.',
      },
    ],
    metrics: [
      { label: 'Transport & Leie av studio', value: '0 kr (100% virtuell plassering)' },
      { label: 'Input fra kunde', value: 'Kun vanlige mobilbilder fra lager' },
      { label: 'Kundereaksjon', value: '«Den er kaos!»' },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Mobilbilder → Kling AI Asset',
        detail: 'Trente inn spisebordet og Y-stolene fra 14 lagerbilder slik at proporsjoner og treverk ble låst.',
      },
      {
        step: '02',
        title: 'Pinterest-Setting & Møbel-Swap',
        detail: 'Fant riktig interiør-stemning på Pinterest og erstattet møblene i bildet med Teakklinikkens egne møbler.',
      },
      {
        step: '03',
        title: 'Filmatisk Regi & Historiefortelling',
        detail: 'Ga scenen liv, dybde og kamerabevegelse som løfter et statisk bruktmøbel til en eksklusiv reklamefilm.',
      },
    ],
  },
  {
    id: 'revira-promo',
    indexCode: 'CASE // 02',
    title: 'Demo-video for Revira',
    subtitle: 'Kommersiell Instruksjonsfilm • B2B / Retail',
    categoryTag: 'Kundeoppdrag • Forklaringsvideo',
    impactBadge: 'Fra kompleks manual til enkel video',
    pitch:
      'Revira AS leverer naturlig avskrekkingsmiddel for skadedyr, og hadde behov for en tydelig måte å forklare påføringsprosessen av middelet på. Jeg utviklet en instruksjonsvideo hvor alt fra det visuelle universet til fortellerstemmen er skapt med KI. Resultatet er en moderne video som bryter ned komplekse instrukser til noe som er lett å forstå.',
    company: 'Revira AS',
    tools: ['Nano Banana Pro', 'Kling AI', 'ElevenLabs', 'CapCut', 'Canva'],
    method: 'Inkrementell (Smidig) KI-Pipeline',
    coverImage: 'images/projects/revira-cover.png',
    heroVideoUrl: 'video/projects/Revira_P_small.mp4',
    heroVideoPosterUrl: 'video/projects/Revira_P_small-Cover.jpg',
    processImage: 'images/projects/revira-sand-process.png',
    processDescription:
      'Arbeidsprosessen var bygget opp rundt en smidig og inkrementell metode. Det visuelle grunnlaget ble generert med nøye kontrollerte bildemodeller, før bildene ble gitt liv og flytende bevegelser ved hjelp av Kling AI. For å sikre en profesjonell og pedagogisk tone, ble fortellerstemmen syntetisert i ElevenLabs. Til slutt ble alle elementene satt sammen, klippet og optimalisert med teksting i CapCut og Canva for å sikre maksimal effekt på mobile flater.',
    metrics: [
      { label: 'Produksjonsmetode', value: '100% Syntetisk Video & Voice' },
      { label: 'Leveranse', value: 'Nøkkelferdig Instruksjonsfilm' },
      { label: 'Forretningsverdi', value: 'Forenklet kundeopplæring' },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Visuell Referanse & Miljø',
        detail: 'Etablerte realistiske nordiske hage- og utemiljøer med riktig tekstur på Revira-granulatet.',
      },
      {
        step: '02',
        title: 'Bevegelse med Kling AI',
        detail: 'Animerte hvert steg i påføringsprosessen med rolige, instruktive kamerabevegelser.',
      },
      {
        step: '03',
        title: 'Stemmesyntese & Ferdigstilling',
        detail: 'La på krystallklar norsk voiceover via ElevenLabs og tydelig grafisk teksting for mobil.',
      },
    ],
  },
  {
    id: 'real-karamel',
    indexCode: 'CASE // 03',
    title: 'Real Karamel',
    subtitle: 'KI-generert DJ, Artist & Virtuell Influencer',
    categoryTag: 'Merkevarebygging • 22M+ Visninger',
    impactBadge: '22M+ visninger • 108K+ følgere',
    pitch:
      'Real Karamel er en 100 % KI-generert DJ-artist som har tatt TikTok og Spotify med storm under profilen mjevo_production. Målet var å bygge en virtuell influencer fra bunnen av med en unik musikalsk og visuell identitet. Casen har vært en massiv viral suksess med over 22 millioner visninger, 108 000+ følgere og 1,2 millioner likerklikk, og konseptet genererer i dag faktiske inntekter. Dette prosjektet demonstrerer kraften i konsekvent, KI-drevet merkevarebygging.',
    company: 'Eget prosjekt (mjevo_production)',
    tools: ['Nano Banana Pro', 'Kling AI', 'Suno', 'CapCut'],
    method: 'Karakterdesign & Tekst-til-Video Kontinuitet',
    coverImage: 'images/projects/karamel-cover.png',
    heroVideoUrl: 'https://www.tiktok.com/@mjevo_production/video/7463472292215934230',
    processImage: 'images/projects/karamel-process.png',
    processDescription:
      'Nøkkelen til suksessen bak Real Karamel ligger i et systematisk arbeid med å opprettholde visuell kontinuitet. Jeg utviklet en dyptgående karakterprofil med faste attributter for alder, klesstil og personlighet for å sikre at hun ser lik ut hver gang. Ved å bruke detaljerte prompter og ren Tekst-til-Video-funksjonalitet oppnådde jeg maksimal kontroll over karakterens bevegelser. Musikken ble skapt med Suno, før alt ble satt sammen, klippet og optimalisert for TikTok-formatet i CapCut.',
    metrics: [
      { label: 'Organiske Visninger', value: '22 000 000+' },
      { label: 'Følgere / Likerklikk', value: '108 000+ / 1.2M+' },
      { label: 'Kommersialisering', value: 'Inntektsbringende på Spotify & SoMe' },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Låst Karakter-DNA',
        detail: 'Fast definerte prompt-parametere som garanterer at ansikt, uttrykk og stil gjenkjennes i hver video.',
      },
      {
        step: '02',
        title: 'AI Audio + Video Synkronisering',
        detail: 'Kombinerte originale elektroniske låter fra Suno med dynamiske DJ-scener i Kling AI.',
      },
      {
        step: '03',
        title: 'Skalerbar Publiserings-Pipeline',
        detail: 'Systematisert arbeidsflyt som muliggjør hyppig publisering med høy seertid (retention).',
      },
    ],
  },
  {
    id: 'reborn-rebel',
    indexCode: 'CASE // 04',
    title: 'Promo-video for Reborn Rebel',
    subtitle: 'Mote, E-handel & Produkt-KI',
    categoryTag: 'Kundeoppdrag • Mote & Produkt',
    impactBadge: 'Ekte klær i 100% KI-generert film',
    pitch:
      'Denne promosjonsvideoen kombinerer virkelighet med KI, hvor Reborn Rebels motto er implementert som en rød tråd gjennom hele filmen. Resultatet er en visuell opplevelse preget av mystikk og røffhet, pakket inn i en urban stil som er skreddersydd for å treffe målgruppen midt i hjertet.',
    company: 'Reborn Rebel',
    tools: ['Nano Banana Pro', 'Kling AI', 'CapCut'],
    method: 'Referanse-KI (Image-to-Image) & Bilde-til-Video',
    coverImage: 'images/projects/reborn-cover.png',
    heroVideoUrl: 'video/projects/Reborn_P_hero.mp4',
    heroVideoPosterUrl: 'video/projects/Reborn_P_hero-Cover.jpg',
    processImage: 'images/projects/reborn-process.png',
    processDescription:
      'For å oppnå den sømløse blandingen av virkelighet og KI, ble ekte fotografier av plaggene brukt som direkte referanser (Image-to-Image). Dette gjorde det mulig å beholde klærnes autentiske tekstur, passform og detaljer på virtuelle modeller i det urbane landskapet. Stillbildene ble deretter animert med bilde-til-video-teknologi og klippet dynamisk i CapCut.',
    metrics: [
      { label: 'Produkt-troskap', value: 'Autentisk tekstil & logo fra foto' },
      { label: 'Location-kostnad', value: '0 kr (Virtuelt urbant sett)' },
      { label: 'Uttrykk', value: 'Skreddersydd mørk/urban merkevareprofil' },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Ekte Produktfoto som Ankere',
        detail: 'Brukte fotografier av de faktiske klærne som låst referanse for å unngå at KI endrer designet.',
      },
      {
        step: '02',
        title: 'Virtuell Modell & Location',
        detail: 'Plasserte plaggene på virtuelle modeller i et røft, filmatisk bymiljø.',
      },
      {
        step: '03',
        title: 'Filmatisk Bevegelse & Klipp',
        detail: 'Animerte lys, vind og kameraføring i Kling AI og klippet til merkevarens motto.',
      },
    ],
  },
];

export const VLOG_EPISODES: VlogEpisode[] = [
  {
    id: 'vlog-01-teakklinikken',
    episodeCode: 'VLOG // EP.01',
    title: 'Fra kjedelig lagerbilde til eksklusiv reklamefilm (Teakklinikken Case)',
    status: 'PLANLAGT',
    duration: '05:30',
    thumbnail: 'images/projects/teakklinikken-cover.jpg',
    hook: 'Hvordan ta 14 vanlige mobilbilder fra et lagerrom og plassere møblene i en drømmelocation fra Pinterest ved hjelp av Kling Assets.',
    businessProblem:
      'Møbel- og interiørbutikker har fantastiske produkter, men tar bilder på trange lagre fordi location-shoots er for dyrt.',
    toolsCovered: ['Kling AI Assets', 'Pinterest Ref', 'CapCut'],
    recipeSteps: [
      'Be kunden sende 10–14 mobilbilder av møbelet fra ulike vinkler og bygg en Kling Asset.',
      'Finn drømmerommet på Pinterest og bytt ut møblene i bildet med kundens Kling Asset.',
      'Animer kamerabevegelse og sollys for en ferdig reklamefilm.',
    ],
    takeaway: 'En arbeidsflyt enhver møbel- eller produktbedrift kan bruke for å løfte katalogen sin 10x.',
  },
  {
    id: 'vlog-02-karamel',
    episodeCode: 'VLOG // EP.02',
    title: 'Slik bygget jeg en 100 % KI-artist som fikk 22 millioner visninger',
    status: 'PLANLAGT',
    duration: '06:45',
    thumbnail: 'images/projects/karamel-process.png',
    hook: 'De fleste som prøver å lage KI-video får et nytt ansikt hver gang de trykker generer. Her viser jeg det eksakte systemet bak Real Karamel.',
    businessProblem:
      'Hvordan skape visuell kontinuitet og bygge en gjenkjennelig merkevare med generativ KI uten at uttrykket spriker.',
    toolsCovered: ['Nano Banana Pro', 'Kling AI', 'Suno', 'Prompt-Arkitektur'],
    recipeSteps: [
      'Bygg et fast «Karakter-anker» med låste beskrivelser av ansiktstrekk og lys.',
      'Separer generering av grunnbilde (Image) og bevegelse (Motion) for full regi-kontroll.',
      'Kombiner med skreddersydd lydspor og klipp på beat.',
    ],
    takeaway: 'Samme metodikk kan brukes av bedrifter for å skape faste digitale talspersoner.',
  },
  {
    id: 'vlog-03-reborn-produkter',
    episodeCode: 'VLOG // EP.03',
    title: 'Slik lager du reklamefilm med bedriftens EKTE klær ved hjelp av KI',
    status: 'PLANLAGT',
    duration: '07:20',
    thumbnail: 'images/projects/reborn-process.png',
    hook: 'Den største feilen bedrifter gjør med KI er at produktet deres ser falskt ut. Slik låser du det fysiske produktet ditt inn i en KI-video.',
    businessProblem:
      'Nettbutikker og merkevarer trenger nytt videomateriell hver uke, men har ikke budsjett til å leie filmteam for hvert plagg.',
    toolsCovered: ['Image-to-Image Referanse', 'Kling AI', 'CapCut'],
    recipeSteps: [
      'Ta et rent referansebilde av det fysiske plagget i godt lys.',
      'Bruk Image-to-Image låsing slik at sømmer, logo og tekstur bevares.',
      'Animer scenen med subtile kamerabevegelser som fremhever materialkvaliteten.',
    ],
    takeaway: 'Lar klesmerker og produktbedrifter teste 5x flere kreative konsepter.',
  },
];

export const FAQ_ITEMS = [];
