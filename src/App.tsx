import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Volume2,
  VolumeX,
  Play,
  Sparkles,
  Cpu,
  Mail,
  Send,
  Menu,
  X,
  Zap,
} from 'lucide-react';
import { PROJECTS, ProjectCase } from './data/siteData';
import {
  Crosshair,
  SectionHeader,
  SpotlightCard,
  AnimatedCounter,
} from './components/BlueprintHelpers';
import { NeuralGridCanvas } from './components/NeuralGridCanvas';
import { InteractivePipeline } from './components/InteractivePipeline';
import { VlogSection } from './components/VlogSection';
import { ProjectModal } from './components/ProjectModal';

const MINIMAL_SERVICES = [
  {
    code: 'MOD // 01',
    title: 'KI-Implementering',
    oneLiner: 'Vi bygger faste KI-arbeidsflyter i din bedrift.',
    metric: '-80% produksjonstid',
    tags: ['Kartlegging', 'Pipeline-oppsett', 'Faste maler'],
  },
  {
    code: 'MOD // 02',
    title: 'Praktisk Workshop',
    oneLiner: 'Hands-on trening av teamet med egne produkter.',
    metric: 'Selvgående team på 1 dag',
    tags: ['Prompt-arkitektur', 'Produkt-låsing', 'Kontinuitet'],
  },
  {
    code: 'MOD // 03',
    title: 'Nøkkelferdig Film',
    oneLiner: 'Kommersiell KI-video og konsept levert ferdig.',
    metric: 'Levert på 48–72 timer',
    tags: ['Reklamefilm', 'Instruksjonsvideo', 'KI-Voiceover'],
  },
];

const MARQUEE_ITEMS = [
  'KLING AI ENGINE',
  '22M+ ORGANISKE VISNINGER',
  'NANO BANANA PRO',
  'KI-IMPLEMENTERING',
  'ELEVENLABS VOICE',
  '80% RASKERE PRODUKSJON',
  'IMAGE-TO-VIDEO PIPELINES',
  'SUNO AUDIO',
  'WORKSHOPS & RÅDGIVNING',
];

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const [selectedServiceInquiry, setSelectedServiceInquiry] = useState<string>('KI-Implementering');
  const [companyName, setCompanyName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pid = params.get('id') || params.get('project');
    if (pid) {
      const found = PROJECTS.find((p) => p.id === pid);
      if (found) setSelectedProject(found);
    }
  }, []);

  const openProject = (proj: ProjectCase) => {
    setSelectedProject(proj);
    const url = new URL(window.location.href);
    url.searchParams.set('id', proj.id);
    window.history.pushState({}, '', url);
  };

  const closeProject = () => {
    setSelectedProject(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('id');
    url.searchParams.delete('project');
    window.history.pushState({}, '', url);
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedServiceInquiry(serviceTitle);
    const el = document.getElementById('kontakt');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(
      `KI-Prat via aiali.no: ${selectedServiceInquiry}${companyName ? ` (${companyName})` : ''}`
    );
    const body = encodeURIComponent(
      `Hei Ali,\n\nVi ønsker en 20-minutters KI-prat om: ${selectedServiceInquiry}.\nBedrift: ${
        companyName || ''
      }\n\nMvh,\n`
    );
    return `mailto:imran.jobb@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-obsidian text-zinc-100 bg-blueprint-grid relative">
      {/* Interactive HTML5 Neural & Laser Grid Canvas */}
      <NeuralGridCanvas />

      {/* Top Ambient Copper Radial Light */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] bg-arrakis-radial z-0" />

      {/* Outer Blueprint Container Frame */}
      <div className="relative z-10 mx-auto max-w-[1400px] border-x border-gridLine min-h-screen flex flex-col">
        {/* ======================== [00 // STICKY NAVBAR] ======================== */}
        <header className="sticky top-0 z-40 border-b border-gridLine bg-obsidian/90 backdrop-blur-md">
          <div className="flex items-center justify-between px-3 sm:px-8 h-16 gap-2">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 font-display text-base sm:text-lg font-bold tracking-tight text-white group"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center border border-copper bg-copper/15 font-mono text-xs text-copper group-hover:bg-copper group-hover:text-black transition-colors">
                  AI
                </span>
                <span>AI ALI</span>
              </a>

              <div className="hidden lg:flex items-center gap-2 border border-gridLine bg-surface/80 px-2.5 py-1 font-mono text-[10px] text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>ONLINE // NORGE</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
              {[
                { href: '#tjenester', label: '01. Tjenester' },
                { href: '#pipeline', label: '02. KI-Motor' },
                { href: '#showcase', label: '03. Caser' },
                { href: '#vlog', label: '04. Vlog' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-zinc-400 hover:text-copper transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-1.5 bg-copper hover:bg-copper-bright text-black font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-2 sm:px-4 sm:py-2.5 transition-all shadow-[0_0_25px_rgba(249,115,22,0.4)] min-h-[40px]"
              >
                <span>Book KI-Prat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 border border-gridLine bg-surface text-zinc-200 hover:text-copper"
                aria-label="Meny"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gridLine bg-obsidian px-4 py-3 space-y-1.5 font-mono text-xs uppercase">
              {[
                { href: '#tjenester', label: '01 // Tjenester' },
                { href: '#pipeline', label: '02 // Live KI-Motor' },
                { href: '#showcase', label: '03 // Caser' },
                { href: '#vlog', label: '04 // AI Vlog' },
                { href: '#kontakt', label: '05 // Kontakt' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-3 border border-gridLine bg-surface text-zinc-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* ======================== [01 // MINIMALIST DYNAMIC HERO] ======================== */}
        <section className="relative border-b border-gridLine overflow-hidden">
          <Crosshair className="hidden sm:block absolute top-2 left-2 z-20" />
          <Crosshair className="hidden sm:block absolute top-2 right-2 z-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Ultra-Minimal High-Impact Hook */}
            <div className="lg:col-span-6 p-5 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gridLine bg-obsidian/65 backdrop-blur-[2px]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 border border-copper/40 bg-copper/10 px-2.5 py-1 font-mono text-[10px] sm:text-xs text-copper mb-5"
                >
                  <Sparkles className="w-3.5 h-3.5 shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>KI-KONSULENT & VISUELL SPESIALIST</span>
                </motion.div>

                {/* 5-Word H1 */}
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]"
                >
                  Praktisk KI som{' '}
                  <span className="bg-copper-gradient bg-clip-text text-transparent">
                    skalerer bedriften.
                  </span>
                </motion.h1>

                {/* 12-Word Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-sm sm:text-lg text-zinc-300 max-w-md"
                >
                  Implementering av KI-arbeidsflyter, workshops og visuell produksjon som kutter tid
                  og kostnader.
                </motion.p>
              </div>

              {/* Minimal CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="mt-8 pt-6 border-t border-gridLine flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center gap-2.5 bg-copper hover:bg-copper-bright text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 transition-all shadow-[0_0_35px_rgba(249,115,22,0.4)] min-h-[48px]"
                >
                  <span>Book 20-min KI-prat</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-2 border border-gridLine hover:border-copper bg-surface text-white font-mono text-xs sm:text-sm uppercase tracking-wider px-5 py-4 transition-colors min-h-[48px]"
                >
                  <Play className="w-3.5 h-3.5 text-copper fill-current" />
                  <span>Se Caser</span>
                </a>
              </motion.div>
            </div>

            {/* Right: Showreel Video Viewport */}
            <div className="lg:col-span-6 bg-surface relative flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-gridLine px-4 py-2 font-mono text-[10px] text-zinc-400 bg-obsidian/90">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-copper animate-ping" />
                  <span className="text-copper font-semibold">SHOWREEL // LIVE</span>
                </div>
                <button
                  onClick={() => setIsHeroMuted(!isHeroMuted)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-gridLine hover:border-copper text-zinc-200 transition-colors"
                >
                  {isHeroMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-copper" />
                      <span>LYD PÅ</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-copper" />
                      <span>LYD AKTIV</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative aspect-video lg:aspect-auto lg:h-[380px] bg-black overflow-hidden group">
                <video
                  src="/hero.mp4"
                  autoPlay
                  loop
                  playsInline
                  muted={isHeroMuted}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Corner HUD Brackets inside video */}
                <div className="pointer-events-none absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-copper/80" />
                <div className="pointer-events-none absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-copper/80" />
                <div className="pointer-events-none absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-copper/80" />
                <div className="pointer-events-none absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-copper/80" />
              </div>

              {/* Quick Case Jump Bar */}
              <div className="border-t border-gridLine bg-obsidian px-4 py-2.5 flex items-center justify-between gap-2 font-mono text-[11px] overflow-x-auto">
                <span className="text-zinc-500 shrink-0">DIREKTE CASE:</span>
                <div className="flex items-center gap-2">
                  {PROJECTS.map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => openProject(proj)}
                      className="px-2.5 py-1 border border-gridLine bg-surface hover:border-copper text-zinc-200 hover:text-copper transition-colors shrink-0"
                    >
                      {proj.company.split(' ')[0]} ↗
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================== [CONTINUOUS INFINITE MARQUEE TICKER] ======================== */}
        <div className="border-b border-gridLine bg-obsidian/95 py-2.5 overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <span key={idx} className="flex items-center gap-3 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ======================== [ANIMATED COUNT-UP TELEMETRY (2x2 on Mobile)] ======================== */}
        <section className="border-b border-gridLine bg-obsidian/90">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { code: '01', target: 22, suffix: 'M+', label: 'Visninger med KI' },
              { code: '02', target: 80, suffix: '%', label: 'Raskere produksjon' },
              { code: '03', target: 108, suffix: 'K+', label: 'Følgere bygget' },
              { code: '04', target: 48, suffix: 't', label: 'Fra idé til leveranse' },
            ].map((m) => (
              <SpotlightCard
                key={m.code}
                className="p-4 sm:p-7 border-b odd:border-r lg:border-b-0 lg:border-r last:border-r-0 border-gridLine"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 mb-1">
                  <span>STAT // {m.code}</span>
                  <span className="text-copper">+</span>
                </div>
                <div className="font-display text-3xl sm:text-5xl font-bold text-white">
                  <AnimatedCounter target={m.target} suffix={m.suffix} />
                </div>
                <div className="mt-1 font-mono text-xs text-copper">{m.label}</div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ======================== [01 // MINIMALIST SERVICES (3-CARD GRID)] ======================== */}
        <section id="tjenester" className="border-b border-gridLine">
          <SectionHeader
            indexCode="01"
            tag="TJENESTER"
            title="Slik hjelper jeg dere."
            subtitle="3 konkrete måter å samarbeide på."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {MINIMAL_SERVICES.map((srv) => (
              <SpotlightCard
                key={srv.code}
                className="p-5 sm:p-8 border-b last:border-b-0 lg:border-b-0 lg:border-r last:border-r-0 border-gridLine flex flex-col justify-between bg-obsidian/90"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-4">
                    <span className="px-2 py-0.5 bg-copper/15 border border-copper/40 text-copper font-semibold">
                      {srv.code}
                    </span>
                    <Cpu className="w-4 h-4 text-copper" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">{srv.title}</h3>
                  <p className="mt-1.5 text-sm text-zinc-300">{srv.oneLiner}</p>

                  {/* Animated Metric Pill */}
                  <div className="my-4 inline-flex items-center gap-1.5 px-2.5 py-1 border border-copper/40 bg-copper/10 font-mono text-xs text-copper">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{srv.metric}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {srv.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-1 bg-surface border border-gridLine text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleServiceSelect(srv.title)}
                  className="mt-6 w-full inline-flex items-center justify-between border border-gridLine hover:border-copper bg-surface hover:bg-copper hover:text-black text-white font-mono text-xs font-bold uppercase tracking-wider px-4 py-3 transition-all min-h-[44px]"
                >
                  <span>Velg {srv.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ======================== [02 // INTERACTIVE SVG NODE PIPELINE] ======================== */}
        <InteractivePipeline />

        {/* ======================== [03 // VISUAL SHOWCASE WITH LIVE VIDEO PREVIEW] ======================== */}
        <section id="showcase" className="border-b border-gridLine">
          <SectionHeader
            indexCode="03"
            tag="PORTEFØLJE & CASER"
            title="Utvalgte prosjekter."
            subtitle="Hold over eller trykk for video og prosess."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {PROJECTS.map((project) => {
              const isHovered = hoveredProjectId === project.id;
              const hasLocalVideo =
                project.heroVideoUrl && !project.heroVideoUrl.includes('tiktok.com');

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                >
                  <SpotlightCard
                    onClick={() => openProject(project)}
                    className="cursor-pointer group border-b last:border-b-0 lg:border-b-0 lg:border-r last:border-r-0 border-gridLine bg-obsidian flex flex-col justify-between h-full"
                  >
                    {/* Visual Media Box with Live Video Hover */}
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-gridLine bg-surface">
                      {hasLocalVideo && isHovered ? (
                        <video
                          src={project.heroVideoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-black/30" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
                        <span className="px-2 py-0.5 bg-obsidian/90 border border-gridLine text-copper font-semibold">
                          {project.indexCode}
                        </span>
                        <span className="px-2 py-0.5 bg-copper text-black font-bold">
                          {project.impactBadge}
                        </span>
                      </div>
                    </div>

                    {/* Minimal Card Footer */}
                    <div className="p-5 flex items-center justify-between gap-3">
                      <div>
                        <div className="font-mono text-[10px] text-zinc-400 uppercase">
                          {project.company}
                        </div>
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-copper transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <div className="h-10 w-10 shrink-0 border border-gridLine group-hover:border-copper group-hover:bg-copper group-hover:text-black flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================== [04 // MINIMAL YOUTUBE AI-VLOG] ======================== */}
        <VlogSection />

        {/* ======================== [05 // ULTRA-CLEAN CONTACT CONSOLE] ======================== */}
        <section id="kontakt" className="relative bg-obsidian">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-gridLine flex flex-col justify-between bg-surface/40">
              <div>
                <div className="font-mono text-xs text-copper uppercase mb-2">
                  05 // START SAMTALEN
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  Klar for å sette KI i arbeid?
                </h2>
                <p className="mt-2 text-sm text-zinc-400 max-w-md">
                  Book en uforpliktende 20-minutters kartlegging direkte med meg.
                </p>
              </div>

              <div className="mt-6 inline-flex items-center gap-2.5 p-3 border border-gridLine bg-obsidian font-mono text-xs w-fit">
                <Mail className="w-4 h-4 text-copper" />
                <a
                  href="mailto:imran.jobb@gmail.com"
                  className="text-copper hover:underline font-semibold"
                >
                  imran.jobb@gmail.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 bg-obsidian">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {['KI-Implementering', 'Praktisk Workshop', 'Nøkkelferdig Film'].map((opt) => {
                    const active = selectedServiceInquiry === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedServiceInquiry(opt)}
                        className={`p-3 text-center border font-mono text-[11px] transition-all min-h-[44px] ${
                          active
                            ? 'border-copper bg-copper/15 text-white font-bold'
                            : 'border-gridLine bg-surface text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Bedriftsnavn (valgfritt)"
                  className="w-full border border-gridLine focus:border-copper bg-surface px-4 py-3 text-base sm:text-sm text-white outline-none transition-colors"
                />

                <a
                  href={buildMailtoLink()}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-copper hover:bg-copper-bright text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-6 transition-all shadow-[0_0_30px_rgba(249,115,22,0.35)] min-h-[50px]"
                >
                  <Send className="w-4 h-4" />
                  <span>Book 20-min KI-prat →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================== FOOTER ======================== */}
        <footer className="border-t border-gridLine bg-obsidian px-4 py-5 sm:px-8 flex items-center justify-between font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-copper" />
            <span className="text-zinc-300 font-semibold">aiali.no</span>
          </div>
          <span>© {new Date().getFullYear()} Ali Anjum</span>
        </footer>
      </div>

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </div>
  );
}
export default App;
