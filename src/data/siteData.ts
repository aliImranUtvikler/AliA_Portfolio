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
      'Mange bedrifter tester KI på måfå uten å se effekt på bunnlinjen. Jeg kartlegger hvor dere mister mest tid i dag, velger ut de riktige KI-verktøyene og bygger faste, repeterbare produksjons-pipelines for teamet deres.',
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
      'Glem generelle introduksjonsforedrag om ChatGPT. I denne workshopen jobber vi direkte med bedriftens egne produkter og utfordringer, slik at teamet går ut av rommet med ferdigprodusert materiale og ny spisskompetanse.',
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
    name: 'Produktfoto til Kampanjevideo',
    bottleneck: 'Tradisjonell fotoshoot og videoproduksjon på location koster 80 000–200 000 kr og tar uker å planlegge.',
    traditionalCost: '3–5 uker leveringstid • Høye location- og modellkostnader',
    aiAliResult: 'Autentisk produkt på virtuelle modeller i urbane miljøer på 48 timer',
    timeSaved: '82% raskere time-to-market',
    inputs: [
      { label: 'Råprodukt / Mobilbilde', sub: 'Enkelt bilde av fysisk plagg eller produkt' },
      { label: 'Merkevare-identitet', sub: 'Motto, stemning og målgruppe-brief' },
    ],
    engineNodes: [
      { tool: 'Nano Banana Pro', role: 'Image-to-Image Referanse', param: 'Låser autentisk stofftekstur & sømmer' },
      { tool: 'Kling AI Engine', role: 'Bilde-til-Video Regi', param: 'Kamerabevegelse, lys & fysikk' },
      { tool: 'CapCut / Mastering', role: 'Rytmisk Klipp & Sound', param: '9:16 & 16:9 multi-format eksport' },
    ],
    outputs: [
      { title: 'Ferdig Promo-film', metric: '100% tro mot fysisk produkt' },
      { title: 'Gjenbrukbar Stil-mal', metric: 'Klar for neste kolleksjon på timer' },
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
    id: 'revira-promo',
    indexCode: 'CASE // 01',
    title: 'Demo-video for Revira',
    subtitle: 'Kommersiell Instruksjonsfilm • B2B / Retail',
    categoryTag: 'Kundeoppdrag • Forklaringsvideo',
    impactBadge: 'Fra kompleks manual til enkel video',
    pitch:
      'Revira AS leverer naturlig avskrekkingsmiddel for skadedyr, og hadde behov for en tydelig måte å forklare påføringsprosessen av middelet på. Jeg utviklet en instruksjonsvideo hvor alt fra det visuelle universet til fortellerstemmen er skapt med KI. Resultatet er en moderne video som bryter ned komplekse instrukser til noe som er lett å forstå.',
    company: 'Revira AS',
    tools: ['Nano Banana Pro', 'Kling AI', 'ElevenLabs', 'CapCut', 'Canva'],
    method: 'Inkrementell (Smidig) KI-Pipeline',
    coverImage: '/images/projects/revira-cover.png',
    heroVideoUrl: '/video/projects/Revira_P_small.mp4',
    heroVideoPosterUrl: '/video/projects/Revira_P_small-Cover.jpg',
    processImage: '/images/projects/revira-sand-process.png',
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
    indexCode: 'CASE // 02',
    title: 'Real Karamel',
    subtitle: 'KI-generert DJ, Artist & Virtuell Influencer',
    categoryTag: 'Merkevarebygging • 22M+ Visninger',
    impactBadge: '22M+ visninger • 108K+ følgere',
    pitch:
      'Real Karamel er en 100 % KI-generert DJ-artist som har tatt TikTok og Spotify med storm under profilen mjevo_production. Målet var å bygge en virtuell influencer fra bunnen av med en unik musikalsk og visuell identitet. Casen har vært en massiv viral suksess med over 22 millioner visninger, 108 000+ følgere og 1,2 millioner likerklikk, og konseptet genererer i dag faktiske inntekter. Dette prosjektet demonstrerer kraften i konsekvent, KI-drevet merkevarebygging.',
    company: 'Eget prosjekt (mjevo_production)',
    tools: ['Nano Banana Pro', 'Kling AI', 'Suno', 'CapCut'],
    method: 'Karakterdesign & Tekst-til-Video Kontinuitet',
    coverImage: '/images/projects/karamel-cover.png',
    heroVideoUrl: 'https://www.tiktok.com/@mjevo_production/video/7463472292215934230',
    processImage: '/images/projects/karamel-process.png',
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
    indexCode: 'CASE // 03',
    title: 'Promo-video for Reborn Rebel',
    subtitle: 'Mote, E-handel & Produkt-KI',
    categoryTag: 'Kundeoppdrag • Mote & Produkt',
    impactBadge: 'Ekte klær i 100% KI-generert film',
    pitch:
      'Denne promosjonsvideoen kombinerer virkelighet med KI, hvor Reborn Rebels motto er implementert som en rød tråd gjennom hele filmen. Resultatet er en visuell opplevelse preget av mystikk og røffhet, pakket inn i en urban stil som er skreddersydd for å treffe målgruppen midt i hjertet.',
    company: 'Reborn Rebel',
    tools: ['Nano Banana Pro', 'Kling AI', 'CapCut'],
    method: 'Referanse-KI (Image-to-Image) & Bilde-til-Video',
    coverImage: '/images/projects/reborn-cover.png',
    heroVideoUrl: '/video/projects/Reborn_P_hero.mp4',
    heroVideoPosterUrl: '/video/projects/Reborn_P_hero-Cover.jpg',
    processImage: '/images/projects/reborn-process.png',
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
    id: 'vlog-01-karamel',
    episodeCode: 'VLOG // EP.01',
    title: 'Slik bygget jeg en 100 % KI-artist som fikk 22 millioner visninger',
    status: 'PLANLAGT',
    duration: '06:45',
    thumbnail: '/images/projects/karamel-process.png',
    hook: 'De fleste som prøver å lage KI-video får et nytt ansikt hver gang de trykker generer. Her viser jeg det eksakte systemet bak Real Karamel.',
    businessProblem:
      'Hvordan skape visuell kontinuitet og bygge en gjenkjennelig merkevare med generativ KI uten at uttrykket spriker.',
    toolsCovered: ['Nano Banana Pro', 'Kling AI', 'Suno', 'Prompt-Arkitektur'],
    recipeSteps: [
      'Bygg et fast «Karakter-anker» med låste beskrivelser av ansiktstrekk, lyssetting og kameravinkel.',
      'Separer generering av grunnbilde (Image) og bevegelse (Motion) for full regi-kontroll.',
      'Kombiner med skreddersydd lydspor og klipp på beat for å holde seerne gjennom de første 3 sekundene.',
    ],
    takeaway: 'Samme metodikk kan brukes av bedrifter for å skape faste digitale talspersoner eller gjennomgående kampanje-konsepter.',
  },
  {
    id: 'vlog-02-reborn-produkter',
    episodeCode: 'VLOG // EP.02',
    title: 'Slik lager du reklamefilm med bedriftens EKTE produkter ved hjelp av KI',
    status: 'PLANLAGT',
    duration: '07:20',
    thumbnail: '/images/projects/reborn-process.png',
    hook: 'Den største feilen bedrifter gjør med KI er at produktet deres ser falskt ut. Slik låser du det fysiske produktet ditt inn i en KI-video.',
    businessProblem:
      'Nettbutikker og merkevarer trenger nytt videomateriell hver uke, men har ikke budsjett til å leie filmteam og modeller for hvert produkt.',
    toolsCovered: ['Image-to-Image Referanse', 'Kling AI', 'CapCut'],
    recipeSteps: [
      'Ta et rent referansebilde av det fysiske produktet i godt lys.',
      'Bruk Image-to-Image låsing slik at sømmer, logo og tekstur bevares mens bakgrunn og modell genereres.',
      'Animer scenen med subtile kamerabevegelser som fremhever materialkvaliteten.',
    ],
    takeaway: 'Lar klesmerker og produktbedrifter teste 5x flere kreative konsepter på en brøkdel av tiden.',
  },
  {
    id: 'vlog-03-revira-instruksjon',
    episodeCode: 'VLOG // EP.03',
    title: 'Fra tørr bruksanvisning til proff instruksjonsvideo på 48 timer',
    status: 'PLANLAGT',
    duration: '05:50',
    thumbnail: '/images/projects/revira-sand-process.png',
    hook: 'Ingen leser lange PDF-manualer lenger. Se hvordan jeg gjorde en teknisk brukerveiledning om til en engasjerende film for Revira AS.',
    businessProblem:
      'Komplekse produkter krever god opplæring. Tradisjonell produksjon av opplæringsvideoer er dyrt å oppdatere når produktet endres.',
    toolsCovered: ['Kling AI', 'ElevenLabs', 'Nano Banana Pro', 'Canva'],
    recipeSteps: [
      'Bryt bruksanvisningen ned i 4–5 tydelige visuelle nøkkelscener (storyboard).',
      'Generer konsistente nærbilder av produktet i riktig bruksmiljø.',
      'Legg på naturlig norsk fortellerstemme i ElevenLabs – som enkelt kan oppdateres eller oversettes senere.',
    ],
    takeaway: 'Perfekt arbeidsflyt for B2B- og industribedrifter som vil digitalisere opplæring og kundestøtte.',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Vi vet at vi bør bruke KI, men aner ikke hvor vi skal begynne. Hvordan starter vi?',
    a: 'Vi starter alltid med en uforpliktende 20-minutters kartleggingssamtale. Der ser vi ikke på «hype», men på hva dere faktisk bruker tid og penger på i dag (f.eks. innholdsproduksjon, produktvideoer eller manuelle rutiner). Derfra foreslår jeg én konkret arbeidsflyt som gir raskest mulig gevinst.',
  },
  {
    q: 'Kan KI virkelig bruke våre ekte fysiske produkter uten at de ser «AI-genererte» eller feil ut?',
    a: 'Ja! Som vist i casene for Reborn Rebel og Revira bruker jeg referansebaserte arbeidsflyter (Image-to-Image og kontrollerte nøkkelbilder). Det betyr at selve produktet, teksturen og logoen deres forblir tro mot originalen, mens miljøet, modellen og kamerabevegelsen skapes rundt produktet.',
  },
  {
    q: 'Lærer du bort hvordan vi gjør dette selv, eller produserer du for oss?',
    a: 'Begge deler! Noen kunder ønsker at jeg leverer nøkkelferdige videoer og kampanjer. Andre leier meg inn som konsulent for å sette opp verktøyene, bygge malene og trene opp deres eget markeds- eller innholdsteam slik at de blir selvgående.',
  },
  {
    q: 'Hva med kommersielle bruksrettigheter på det som produseres?',
    a: 'Vi setter opp og bruker profesjonelle, kommersielt lisensierte utgaver av verktøyene i arbeidsflyten, slik at bedriften din har trygge kommersielle rettigheter til å bruke materialet i annonser, på nettsider og i sosiale medier.',
  },
];
