import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown, Terminal } from 'lucide-react';
import { VLOG_EPISODES, VlogEpisode } from '../data/siteData';
import { SectionHeader, SpotlightCard } from './BlueprintHelpers';

export const VlogSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="vlog" className="relative py-8 sm:py-10 px-4 sm:px-8 border-b border-gridLine">
      <SectionHeader
        title="Fra maskinrommet."
        subtitle="Korte gjennomganger og 3-stegs oppskrifter fra mine faktiske arbeidsflyter."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {VLOG_EPISODES.map((ep: VlogEpisode) => {
          const isExpanded = expandedId === ep.id;
          return (
            <SpotlightCard
              key={ep.id}
              className="border border-gridLine bg-obsidian/90 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video overflow-hidden border-b border-gridLine bg-surface group">
                  <img
                    src={ep.thumbnail}
                    alt={ep.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />

                  <div className="absolute top-3 right-3 font-mono text-[10px]">
                    <span className="px-2 py-0.5 bg-copper text-black font-bold">
                      {ep.duration}
                    </span>
                  </div>

                  {/* Animated Play Ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute h-14 w-14 rounded-full bg-copper/40 animate-radar" />
                      <div className="relative h-12 w-12 rounded-full bg-copper text-black flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.7)] group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pb-4">
                  <h3 className="font-display text-lg font-bold text-white leading-snug">
                    {ep.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : ep.id)}
                  className="w-full flex items-center justify-between border border-gridLine hover:border-copper/60 bg-surface px-3.5 py-2.5 font-mono text-[11px] text-zinc-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-copper" />
                    <span>{isExpanded ? 'SKJUL OPPSKRIFT' : 'SE 3-STEGS OPPSKRIFT'}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-copper transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 border border-copper/30 bg-copper/5 p-3 space-y-1.5">
                        {ep.recipeSteps.map((step, idx) => (
                          <div key={idx} className="text-xs text-zinc-200 flex items-start gap-2">
                            <span className="font-mono text-copper font-bold">0{idx + 1}.</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};
