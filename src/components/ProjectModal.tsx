import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
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
            className="relative w-full max-w-5xl h-[100dvh] sm:h-auto sm:max-h-[90vh] overflow-y-auto sm:rounded-2xl border-t sm:border border-white/15 bg-obsidian shadow-2xl"
          >
            {/* Clean Sticky Header */}
            <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-obsidian/95 backdrop-blur px-5 py-3.5 sm:px-8">
              <span className="font-display font-bold text-white truncate">{project.title}</span>
              <button
                onClick={onClose}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-white/15 hover:border-copper bg-surface px-3.5 py-1.5 text-xs font-medium text-white transition-colors min-h-[38px]"
              >
                <span>Lukk</span>
                <X className="w-4 h-4 text-copper" />
              </button>
            </div>

            {/* Video + Short Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">
              <div className="lg:col-span-6 bg-black flex items-center justify-center p-4 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                {project.heroVideoUrl ? (
                  project.heroVideoUrl.includes('tiktok.com') ? (
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${project.heroVideoUrl.split('/').pop()}`}
                      className="w-full h-[520px] sm:h-[600px] border-0 rounded-lg"
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
                      className="w-full max-h-[55vh] sm:max-h-[68vh] object-contain rounded-lg"
                    />
                  )
                ) : (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full max-h-[50vh] sm:max-h-[65vh] object-cover rounded-lg"
                  />
                )}
              </div>

              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-copper/15 text-copper text-xs font-semibold mb-3">
                    {project.impactBadge}
                  </span>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">{project.company}</p>

                  <p className="mt-5 text-zinc-200 leading-relaxed text-sm sm:text-base">
                    {project.pitch}
                  </p>

                  {/* Tools Pills */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="text-xs text-zinc-500 mb-2">Verktøy brukt:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-surface border border-white/10 text-xs text-zinc-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simple 1-2-3 Steps */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <div className="text-xs text-zinc-400 font-medium">Arbeidsflyt i 3 steg:</div>
                  {project.workflowSteps.map((ws) => (
                    <div key={ws.step} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="font-mono text-copper font-bold">{ws.step}.</span>
                      <div>
                        <span className="font-semibold text-white">{ws.title}: </span>
                        <span className="text-zinc-400">{ws.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Behind the scenes ("Fra produksjonen") */}
            {(project.processGallery || project.processImage) && (
              <div className="p-6 sm:p-10 border-b border-white/10 bg-surface/30">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
                  Slik ble det til
                </h3>

                {project.processGallery ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {project.processGallery.map((item, idx) => (
                      <div
                        key={item.step}
                        className="rounded-xl border border-white/10 bg-obsidian overflow-hidden flex flex-col justify-between"
                      >
                        <div>
                          <div className="px-4 py-2.5 border-b border-white/10 bg-surface flex items-center justify-between text-xs">
                            <span className="font-mono text-copper font-bold">Steg {idx + 1}</span>
                            <span className="text-zinc-300 font-medium">{item.label}</span>
                          </div>
                          <div className="aspect-[4/5] bg-black overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.label}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                        <div className="p-4 text-xs text-zinc-300 leading-relaxed">
                          {item.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {project.processImage && (
                      <div className="lg:col-span-7">
                        <img
                          src={project.processImage}
                          alt={`Prosess for ${project.title}`}
                          className="w-full rounded-xl border border-white/10 object-cover"
                        />
                      </div>
                    )}
                    {project.processDescription && (
                      <div className="lg:col-span-5">
                        <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                          {project.processDescription}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Simple Bottom CTA */}
            <div className="p-6 sm:p-8 bg-surface flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="font-display text-base sm:text-lg font-bold text-white">
                Vil dere gjøre noe lignende for deres produkter?
              </div>
              <a
                href="#kontakt"
                onClick={onClose}
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-copper hover:bg-copper-bright text-black text-xs sm:text-sm font-semibold px-5 py-3 transition-colors"
              >
                <span>Ta kontakt</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
