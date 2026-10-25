import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, CheckCircle2, Layers, ArrowRight } from 'lucide-react';
import { SectionHeader } from './BlueprintHelpers';

const VISUAL_FLOWS = [
  {
    id: 'møbler',
    tab: 'Produktfilm',
    inputTitle: 'Lagerbilde + Pinterest',
    inputSub: 'Råbilder sendt på DM',
    engineTitle: 'Visuell KI-Motor',
    engineSub: 'Kling · Nano Banana · CapCut',
    outputTitle: 'Ferdig Reklamefilm',
    saving: '85% raskere levering',
  },
  {
    id: 'instruksjon',
    tab: 'Instruksjonsfilm',
    inputTitle: 'Bruksanvisning / PDF',
    inputSub: 'Teknisk dokumentasjon',
    engineTitle: 'Syntetisk Produksjon',
    engineSub: 'Visuell KI · Kling · ElevenLabs',
    outputTitle: 'Pedagogisk Demo-Film',
    saving: '75% lavere kostnad',
  },
  {
    id: 'artist',
    tab: 'Virtuell Brand',
    inputTitle: 'Låst Karakter-Profil',
    inputSub: 'Fast visuell identitet',
    engineTitle: 'Skalerbar Innholdsmotor',
    engineSub: 'Prompt-DNA · Kling · Suno',
    outputTitle: '22M+ Organiske Visninger',
    saving: '100% skalerbart',
  },
];

export const InteractivePipeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = VISUAL_FLOWS[activeIdx];

  return (
    <section id="pipeline" className="relative py-8 sm:py-10 px-4 sm:px-8 border-b border-gridLine">
      <SectionHeader
        title="Slik fungerer KI-pipelinen."
        subtitle="Fra råmateriale til ferdig leveranse i tre faste steg."
        action={
          <div className="inline-flex p-1 border border-gridLine bg-surface/90 self-start md:self-auto">
            {VISUAL_FLOWS.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative px-4 py-2 font-mono text-xs transition-all ${
                    isActive
                      ? 'bg-copper text-black font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.tab}
                </button>
              );
            })}
          </div>
        }
      />

      {/* 100% Symmetrical 3-Column Pipeline */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22 }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-11 items-center gap-0">
            {/* ==================== STEG 1: INPUT ==================== */}
            <div className="lg:col-span-3 border border-gridLine bg-obsidian/95 p-7 sm:p-8 grid grid-rows-[24px_56px_36px] items-center justify-items-center text-center">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-copper uppercase">
                <Layers className="w-3.5 h-3.5" />
                <span>STEG 1 · INPUT</span>
              </div>

              <div className="font-display text-xl sm:text-2xl font-bold text-white flex items-center justify-center">
                {current.inputTitle}
              </div>

              <div className="px-3.5 py-1.5 border border-gridLine bg-surface font-mono text-xs text-zinc-300 inline-flex items-center">
                {current.inputSub}
              </div>
            </div>

            {/* ==================== CONNECTOR 1 -> 2 ==================== */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <svg className="w-full h-12 overflow-visible" viewBox="0 0 100 40">
                <line
                  x1="0"
                  y1="20"
                  x2="100"
                  y2="20"
                  stroke="rgba(249,115,22,0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle cx="0" cy="20" r="3" fill="#F97316" />
                <circle cx="100" cy="20" r="3" fill="#F97316" />
                <circle r="4.5" fill="#F97316">
                  <animateMotion dur="1.4s" repeatCount="indefinite" path="M 0 20 L 100 20" />
                </circle>
              </svg>
            </div>

            <div className="flex lg:hidden justify-center py-1">
              <svg className="w-8 h-10 overflow-visible" viewBox="0 0 32 40">
                <line
                  x1="16"
                  y1="0"
                  x2="16"
                  y2="40"
                  stroke="rgba(249,115,22,0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle r="4" fill="#F97316">
                  <animateMotion dur="1.1s" repeatCount="indefinite" path="M 16 0 L 16 40" />
                </circle>
              </svg>
            </div>

            {/* ==================== STEG 2: AI ALI MOTOR ==================== */}
            <div className="lg:col-span-3 border border-copper bg-obsidian/95 p-7 sm:p-8 grid grid-rows-[24px_56px_36px] items-center justify-items-center text-center relative shadow-[0_0_45px_-12px_rgba(249,115,22,0.35)]">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-copper uppercase">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-copper animate-radar" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-copper" />
                </span>
                <span>STEG 2 · AI ALI MOTOR</span>
                <Cpu className="w-3.5 h-3.5 text-copper animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              <div className="font-display text-xl sm:text-2xl font-bold text-white flex items-center justify-center">
                {current.engineTitle}
              </div>

              <div className="px-3.5 py-1.5 border border-copper/40 bg-copper/10 font-mono text-xs text-white inline-flex items-center gap-1.5 whitespace-nowrap">
                <Zap className="w-3 h-3 text-copper shrink-0" />
                <span>{current.engineSub}</span>
              </div>
            </div>

            {/* ==================== CONNECTOR 2 -> 3 ==================== */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <svg className="w-full h-12 overflow-visible" viewBox="0 0 100 40">
                <line
                  x1="0"
                  y1="20"
                  x2="100"
                  y2="20"
                  stroke="rgba(249,115,22,0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle cx="0" cy="20" r="3" fill="#F97316" />
                <circle cx="100" cy="20" r="3" fill="#F97316" />
                <circle r="4.5" fill="#F97316">
                  <animateMotion dur="1.4s" begin="0.35s" repeatCount="indefinite" path="M 0 20 L 100 20" />
                </circle>
              </svg>
            </div>

            <div className="flex lg:hidden justify-center py-1">
              <svg className="w-8 h-10 overflow-visible" viewBox="0 0 32 40">
                <line
                  x1="16"
                  y1="0"
                  x2="16"
                  y2="40"
                  stroke="rgba(249,115,22,0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle r="4" fill="#F97316">
                  <animateMotion dur="1.1s" begin="0.35s" repeatCount="indefinite" path="M 16 0 L 16 40" />
                </circle>
              </svg>
            </div>

            {/* ==================== STEG 3: RESULTAT ==================== */}
            <div className="lg:col-span-3 border border-gridLine bg-obsidian/95 p-7 sm:p-8 grid grid-rows-[24px_56px_36px] items-center justify-items-center text-center">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-copper uppercase">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>STEG 3 · RESULTAT</span>
              </div>

              <div className="font-display text-xl sm:text-2xl font-bold text-white flex items-center justify-center">
                {current.outputTitle}
              </div>

              <div className="px-3.5 py-1.5 bg-copper text-black font-mono text-xs font-bold inline-flex items-center gap-1">
                <span>{current.saving}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
