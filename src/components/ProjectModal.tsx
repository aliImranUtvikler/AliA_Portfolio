import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Layers, Wrench, Building2, Cpu, Sparkles } from 'lucide-react';
import { ProjectCase } from '../data/siteData';

export const ProjectModal: React.FC<{
  project: ProjectCase | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-md p-0 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-[100dvh] sm:h-auto sm:max-h-[92vh] overflow-y-auto border-t sm:border border-copper/40 bg-obsidian shadow-2xl"
          >
            {/* Sticky Modal Header */}
            <div className="sticky top-0 z-30 flex items-center justify-between border-b border-gridLine bg-obsidian/95 backdrop-blur px-4 py-3 sm:px-8">
              <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs min-w-0">
                <span className="h-2 w-2 shrink-0 rounded-full bg-copper" />
                <span className="text-copper font-semibold shrink-0">{project.indexCode}</span>
                <span className="text-zinc-600 shrink-0">//</span>
                <span className="text-zinc-200 truncate">{project.title}</span>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 inline-flex items-center gap-1.5 border border-copper/50 hover:border-copper bg-surface px-3.5 py-2 font-mono text-xs text-white transition-colors min-h-[40px]"
              >
                <span>LUKK</span>
                <X className="w-4 h-4 text-copper" />
              </button>
            </div>

            {/* Main Grid: Video/Media First on Mobile + Executive Pitch & Meta */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gridLine">
              {/* Left Column: Video / TikTok / Cover */}
              <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-gridLine bg-black flex items-center justify-center p-3 sm:p-8">
                {project.heroVideoUrl ? (
                  project.heroVideoUrl.includes('tiktok.com') ? (
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${project.heroVideoUrl.split('/').pop()}`}
                      className="w-full h-[540px] sm:h-[640px] border-0 rounded"
                      allowFullScreen
                      title={project.title}
                    />
                  ) : (
                    <video
                      src={project.heroVideoUrl}
                      poster={project.heroVideoPosterUrl || project.coverImage}
                      controls
                      autoPlay
                      loop
                      playsInline
                      className="w-full max-h-[58vh] sm:max-h-[72vh] object-contain border border-gridLine"
                    />
                  )
                ) : (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full max-h-[52vh] sm:max-h-[70vh] object-cover border border-gridLine"
                  />
                )}
              </div>

              {/* Right Column: Details, Telemetry & Architecture */}
              <div className="lg:col-span-6 p-5 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-copper/15 border border-copper/30 font-mono text-[11px] sm:text-xs text-copper mb-3 sm:mb-4">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.impactBadge}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight">
                    {project.title}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mt-1">
                    {project.subtitle}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-5 sm:my-6">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="border border-gridLine bg-surface p-3">
                        <div className="font-mono text-[10px] uppercase text-zinc-500">
                          {m.label}
                        </div>
                        <div className="font-display text-sm font-bold text-copper mt-0.5">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pitch */}
                  <div className="space-y-2 mb-6">
                    <div className="font-mono text-xs uppercase text-zinc-500">
                      // Oppdrag & Leveranse
                    </div>
                    <p className="text-zinc-200 leading-relaxed text-sm sm:text-base">
                      {project.pitch}
                    </p>
                  </div>

                  {/* Structured Meta Box (Selskap, Verktøy, Metode) */}
                  <div className="border-t border-b border-gridLine py-4 space-y-3 font-mono text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                      <span className="text-zinc-500 min-w-[95px] flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-copper" /> SELSKAP:
                      </span>
                      <span className="text-white font-medium">{project.company}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-3">
                      <span className="text-zinc-500 min-w-[95px] flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-copper" /> VERKTØY:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-surfaceLight border border-gridLine text-zinc-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                      <span className="text-zinc-500 min-w-[95px] flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-copper" /> METODE:
                      </span>
                      <span className="text-copper">{project.method}</span>
                    </div>
                  </div>
                </div>

                {/* Workflow Steps Mini-Pipeline */}
                <div className="mt-6">
                  <div className="font-mono text-xs uppercase text-zinc-400 mb-3 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-copper" />
                    <span>Steg-for-steg KI-Arbeidsflyt</span>
                  </div>
                  <div className="space-y-2">
                    {project.workflowSteps.map((ws) => (
                      <div
                        key={ws.step}
                        className="border border-gridLine bg-surface/70 p-3 flex items-start gap-3"
                      >
                        <span className="font-mono text-xs font-bold text-copper px-1.5 py-0.5 bg-copper/10 border border-copper/30 shrink-0">
                          {ws.step}
                        </span>
                        <div>
                          <div className="text-xs font-semibold text-white">{ws.title}</div>
                          <div className="text-xs text-zinc-400 mt-0.5">{ws.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* "Fra produksjonen — Slik ble det til" Section */}
            {(project.processGallery || project.processImage || project.processDescription) && (
              <div className="p-5 sm:p-10 border-b border-gridLine bg-surface/40">
                <div className="font-mono text-xs uppercase tracking-widest text-copper mb-1.5">
                  // BAK KULISSENE & PRODUKSJONSPROSESS
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
                  Fra produksjonen: Slik ble det til
                </h3>

                {project.processGallery ? (
                  <div className="space-y-5">
                    {project.processDescription && (
                      <p className="text-zinc-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                        {project.processDescription}
                      </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.processGallery.map((item) => (
                        <div
                          key={item.step}
                          className="border border-gridLine bg-obsidian flex flex-col justify-between overflow-hidden"
                        >
                          <div>
                            <div className="px-3.5 py-2 border-b border-gridLine bg-surface flex items-center justify-between font-mono text-[10px]">
                              <span className="text-copper font-bold">{item.step}</span>
                              <span className="text-zinc-400">{item.label}</span>
                            </div>
                            <div className="aspect-[4/5] bg-black overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.label}
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          <div className="p-3.5 border-t border-gridLine text-xs text-zinc-300 leading-relaxed">
                            {item.caption}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    {project.processImage && (
                      <div className="lg:col-span-7">
                        <img
                          src={project.processImage}
                          alt={`Prosess for ${project.title}`}
                          className="w-full rounded border border-gridLine object-cover"
                        />
                      </div>
                    )}
                    {project.processDescription && (
                      <div className="lg:col-span-5 space-y-3">
                        <div className="inline-block font-mono text-xs px-2.5 py-1 bg-zinc-900 border border-gridLine text-zinc-300">
                          TEKNISK GJENNOMGANG
                        </div>
                        <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                          {project.processDescription}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Contextual Consultant CTA Footer */}
            <div className="p-5 sm:p-8 bg-copper/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] text-copper uppercase">
                  // VIL DU HA DENNE ARBEIDSFLYTEN I DIN BEDRIFT?
                </div>
                <div className="font-display text-base sm:text-xl font-bold text-white mt-1">
                  Jeg kan produsere dette nøkkelferdig for dere – eller lære opp teamet deres.
                </div>
              </div>
              <a
                href="#kontakt"
                onClick={onClose}
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-bright text-black font-mono text-xs font-bold uppercase tracking-wider px-5 py-3.5 transition-colors min-h-[48px]"
              >
                <span>Diskuter lignende oppsett</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
