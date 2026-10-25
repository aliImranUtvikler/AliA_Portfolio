import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Play,
  Volume2,
  VolumeX,
  Send,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Mail,
  Zap,
} from 'lucide-react';
import { PROJECTS, ProjectCase } from './data/siteData';
import { NeuralGridCanvas } from './components/NeuralGridCanvas';
import {
  Crosshair,
  AnimatedCounter,
  SectionHeader,
  SpotlightCard,
} from './components/BlueprintHelpers';
import { InteractivePipeline } from './components/InteractivePipeline';
import { VlogSection } from './components/VlogSection';
import { ProjectModal } from './components/ProjectModal';

const MARQUEE_ITEMS = [
  'KLING AI ASSETS',
  '22M+ ORGANISKE VISNINGER',
  'NANO BANANA PRO',
  'KI-WORKSHOPS FOR BEDRIFTER',
  'PRODUKTFILM FRA LAGERBILDER',
  'ELEVENLABS VOICE',
  '85% RASKERE PRODUKSJON',
];

const MINIMAL_SERVICES = [
  {
    id: 'produksjon',
    title: 'AI-Reklame & Produktfilm',
    oneLiner: 'Vi gjør vanlige mobilbilder av produktene dine om til ferdig reklamefilm.',
    metric: 'Levering på 3–7 dager',
  },
  {
    id: 'implementering',
    title: 'KI-Implementering',
    oneLiner: 'Skreddersydde KI-arbeidsflyter satt opp direkte i bedriftens egne systemer.',
    metric: 'Spar 10–20t i uken',
  },
  {
    id: 'workshop',
    title: 'Bedrifts-Workshop',
    oneLiner: 'Praktisk halvdags eller heldags trening der teamet bygger med egne caser.',
    metric: '100% hands-on',
  },
];

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [selectedServiceInquiry, setSelectedServiceInquiry] = useState('Reklame- & Produktfilm');
  const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id') || params.get('project');
    if (idParam) {
      const found = PROJECTS.find(
        (p) => p.id.toLowerCase() === idParam.toLowerCase()
      );
      if (found) {
        setSelectedProject(found);
      }
    }
  }, []);

  const openProject = (project: ProjectCase) => {
    setSelectedProject(project);
    const url = new URL(window.location.href);
    url.searchParams.set('id', project.id);
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
    <div className="min-h-screen bg-obsidian text-zinc-100 bg-blueprint-grid relative overflow-x-hidden">
      {/* Interactive HTML5 Neural & Laser Grid Canvas */}
      <NeuralGridCanvas />

      {/* Top Ambient Copper Radial Light */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] bg-arrakis-radial z-0" />

      {/* Outer Blueprint Container Frame */}
      <div className="relative z-10 mx-auto max-w-[1360px] border-x border-gridLine min-h-screen flex flex-col">
        {/* ======================== STICKY NAVBAR ======================== */}
        <header className="sticky top-0 z-40 border-b border-gridLine bg-obsidian/90 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 sm:px-8 h-16 gap-2">
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center group">
                <span className="inline-flex items-center justify-center border border-copper bg-copper/15 px-3 py-1.5 font-mono text-xs sm:text-sm font-bold tracking-wider text-copper group-hover:bg-copper group-hover:text-black transition-colors">
                  AI ALI
                </span>
              </a>
            </div>

            <nav className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
              {[
                { href: '#showcase', label: 'Prosjekter' },
                { href: '#pipeline', label: 'KI-Pipeline' },
                { href: '#tjenester', label: 'Tjenester' },
                { href: '#vlog', label: 'Vlog' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-1.5 bg-copper hover:bg-copper-bright text-black font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-2 sm:px-4 sm:py-2.5 transition-all shadow-[0_0_25px_rgba(249,115,22,0.35)] min-h-[40px]"
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
                { href: '#showcase', label: 'Prosjekter' },
                { href: '#pipeline', label: 'KI-Pipeline' },
                { href: '#tjenester', label: 'Tjenester' },
                { href: '#vlog', label: 'Vlog' },
                { href: '#kontakt', label: 'Kontakt' },
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

        {/* ======================== HERO SECTION ======================== */}
        <section className="relative border-b border-gridLine overflow-hidden">
          <Crosshair className="hidden sm:block absolute top-3 left-3 z-20" />
          <Crosshair className="hidden sm:block absolute top-3 right-3 z-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Minimal High-Impact Hook */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gridLine bg-obsidian/65 backdrop-blur-[2px]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 border border-copper/40 bg-copper/10 px-3 py-1 font-mono text-[10px] sm:text-xs text-copper mb-6"
                >
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>KI-KONSULENT & VISUELL SPESIALIST</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.06]"
                >
                  Praktisk KI som{' '}
                  <span className="bg-copper-gradient bg-clip-text text-transparent">
                    skalerer bedriften.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-5 text-base sm:text-lg text-zinc-300 max-w-md leading-relaxed"
                >
                  Fra vanlige produktbilder til ferdig reklamefilm – og faste KI-arbeidsflyter for
                  teamet ditt.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <a
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-2.5 bg-copper hover:bg-copper-bright text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 transition-all shadow-[0_0_35px_rgba(249,115,22,0.4)] min-h-[48px]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Se Prosjekter</span>
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center gap-2 border border-gridLine hover:border-copper bg-surface text-white font-mono text-xs sm:text-sm uppercase tracking-wider px-5 py-4 transition-colors min-h-[48px]"
                >
                  <span>Book 20-min KI-prat</span>
                  <ArrowRight className="w-4 h-4 text-copper" />
                </a>
              </motion.div>
            </div>

            {/* Right: Showreel Video Viewport with HUD Brackets */}
            <div className="lg:col-span-6 bg-surface relative flex flex-col justify-between overflow-hidden">
              <div className="relative w-full aspect-video lg:aspect-auto lg:h-full lg:min-h-[360px] bg-black overflow-hidden group">
                <video
                  src="hero.mp4"
                  autoPlay
                  loop
                  playsInline
                  muted={isHeroMuted}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Mute Button */}
                <button
                  onClick={() => setIsHeroMuted(!isHeroMuted)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 border border-gridLine hover:border-copper bg-obsidian/85 backdrop-blur-md font-mono text-[10px] sm:text-[11px] text-zinc-200 transition-colors"
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

                {/* Corner HUD Brackets inside video - all 4 corners */}
                <div className="pointer-events-none absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-copper/80" />
                <div className="pointer-events-none absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-copper/80" />
                <div className="pointer-events-none absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-copper/80" />
                <div className="pointer-events-none absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-copper/80" />
              </div>
            </div>
          </div>
        </section>

        {/* ======================== CONTINUOUS INFINITE MARQUEE TICKER ======================== */}
        <div className="border-b border-gridLine bg-obsidian/95 py-3 overflow-hidden">
          <div className="animate-marquee flex items-center gap-10 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <span key={idx} className="flex items-center gap-3 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ======================== SPACIOUS SHOWCASE SECTION ======================== */}
        <section id="showcase" className="py-8 sm:py-10 px-4 sm:px-8 border-b border-gridLine">
          <SectionHeader
            title="Utvalgte prosjekter."
            subtitle="Trykk på et prosjekt for å se videoen og 3-stegs prosessen bak."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
                    className="cursor-pointer group border border-gridLine hover:border-copper/60 bg-obsidian/90 flex flex-col justify-between h-full transition-colors"
                  >
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
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-black/25" />

                      <div className="absolute top-3 right-3 font-mono text-[10px]">
                        <span className="px-2.5 py-1 bg-copper text-black font-bold">
                          {project.impactBadge}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex items-center justify-between gap-4">
                      <div>
                        <div className="font-mono text-[11px] text-copper uppercase tracking-wider mb-1">
                          {project.company}
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-copper transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <div className="h-11 w-11 shrink-0 border border-gridLine group-hover:border-copper group-hover:bg-copper group-hover:text-black flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================== STREAMLINED 3-NODE SVG PIPELINE ======================== */}
        <InteractivePipeline />

        {/* ======================== ANIMATED COUNT-UP TELEMETRY ======================== */}
        <section className="py-12 sm:py-16 px-4 sm:px-8 border-b border-gridLine bg-obsidian/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { target: 22, suffix: 'M+', label: 'Visninger med KI' },
              { target: 85, suffix: '%', label: 'Raskere produksjon' },
              { target: 108, suffix: 'K+', label: 'Følgere bygget' },
              { target: 4, suffix: ' Caser', label: 'Dokumenterte pipelines' },
            ].map((m, i) => (
              <SpotlightCard
                key={i}
                className="p-6 sm:p-8 border border-gridLine bg-obsidian/90"
              >
                <div className="font-display text-3xl sm:text-5xl font-bold text-white">
                  <AnimatedCounter target={m.target} suffix={m.suffix} />
                </div>
                <div className="mt-2 font-mono text-xs text-copper">{m.label}</div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ======================== SPACIOUS SERVICES SECTION ======================== */}
        <section id="tjenester" className="py-8 sm:py-10 px-4 sm:px-8 border-b border-gridLine">
          <SectionHeader
            title="Slik hjelper jeg dere."
            subtitle="Ferdig produsert innhold eller opplæring av deres eget team."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {MINIMAL_SERVICES.map((srv) => (
              <SpotlightCard
                key={srv.id}
                className="p-7 sm:p-8 border border-gridLine bg-obsidian/90 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-copper/40 bg-copper/10 font-mono text-xs text-copper mb-5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{srv.metric}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">{srv.title}</h3>
                  <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {srv.oneLiner}
                  </p>
                </div>

                <button
                  onClick={() => handleServiceSelect(srv.title)}
                  className="mt-8 w-full inline-flex items-center justify-between border border-gridLine hover:border-copper bg-surface hover:bg-copper hover:text-black text-white font-mono text-xs font-bold uppercase tracking-wider px-4 py-3.5 transition-all min-h-[46px]"
                >
                  <span>Velg {srv.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ======================== YOUTUBE AI-VLOG ======================== */}
        <VlogSection />

        {/* ======================== SPACIOUS CONTACT SECTION ======================== */}
        <section id="kontakt" className="py-8 sm:py-10 px-4 sm:px-8 bg-obsidian/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  <div className="h-[1.5px] w-12 bg-gradient-to-r from-copper to-transparent" />
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                  Klar for å sette KI i arbeid?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
                  Book en uforpliktende 20-minutters kartlegging direkte med meg.
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2.5 p-3.5 border border-gridLine bg-obsidian font-mono text-xs w-fit">
                <Mail className="w-4 h-4 text-copper" />
                <a
                  href="mailto:imran.jobb@gmail.com"
                  className="text-copper hover:underline font-semibold"
                >
                  imran.jobb@gmail.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 border border-gridLine bg-obsidian p-6 sm:p-8">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {['Reklame- & Produktfilm', 'KI-Implementering', 'Praktisk Workshop'].map(
                    (opt) => {
                      const active = selectedServiceInquiry === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedServiceInquiry(opt)}
                          className={`p-3 text-center border font-mono text-xs transition-all min-h-[44px] ${
                            active
                              ? 'border-copper bg-copper/15 text-white font-bold'
                              : 'border-gridLine bg-surface text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    }
                  )}
                </div>

                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Bedriftsnavn (valgfritt)"
                  className="w-full border border-gridLine focus:border-copper bg-surface px-4 py-3.5 text-base sm:text-sm text-white outline-none transition-colors"
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
        <footer className="border-t border-gridLine bg-obsidian px-4 py-6 sm:px-8 flex items-center justify-between font-mono text-xs text-zinc-500">
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
