import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { PIPELINE_SCENARIOS } from '../data/siteData';
import { SectionHeader } from './BlueprintHelpers';

export const InteractivePipeline: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(PIPELINE_SCENARIOS[0].id);
  const current = PIPELINE_SCENARIOS.find((p) => p.id === activeId) || PIPELINE_SCENARIOS[0];

  return (
    <section id="pipeline" className="relative border-b border-gridLine">
      <SectionHeader
        indexCode="02"
        tag="LIVE KI-ARKITEKTUR"
        title="Fra råmateriale til ferdig resultat."
        subtitle="Velg en arbeidsflyt for å simulere KI-motoren."
        rightMeta="NODE.GRAPH // ACTIVE"
      />

      {/* Compact 3-Tab Switcher */}
      <div className="grid grid-cols-3 border-b border-gridLine bg-obsidian">
        {PIPELINE_SCENARIOS.map((item, idx) => {
          const isActive = item.id === activeId;
          const shortLabels = ['01. Produktfilm', '02. Instruksjonsfilm', '03. Virtuell Artist'];
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`relative px-3 py-3.5 sm:px-6 sm:py-4 border-r last:border-r-0 border-gridLine text-left transition-all ${
                isActive
                  ? 'bg-copper/15 text-white'
                  : 'bg-obsidian text-zinc-400 hover:bg-surface hover:text-zinc-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="pipelineUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-copper"
                />
              )}
              <div className="flex items-center justify-between font-mono text-[10px] text-copper">
                <span>{item.code}</span>
                <span className="hidden sm:inline px-1.5 py-0.5 bg-copper/20 text-copper rounded">
                  {item.timeSaved}
                </span>
              </div>
              <div className="font-display text-xs sm:text-base font-bold mt-0.5 truncate">
                {shortLabels[idx]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Schematic Node Canvas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.25 }}
          className="bg-blueprint-dots relative p-4 sm:p-8 lg:p-10 overflow-hidden"
        >
          {/* Ambient Glowing Core Backdrop */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-copper/10 blur-3xl animate-pulse" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-11 gap-4 lg:gap-2 items-center">
            {/* LEFT: 2 Minimal Input Nodes */}
            <div className="lg:col-span-3 space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                01 // INPUT
              </div>
              {current.inputs.map((inp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08 }}
                  className="border border-gridLine hover:border-copper/60 bg-obsidian/95 p-3.5 relative group"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-copper mb-1">
                    <span>IN_0{idx + 1}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-copper animate-ping" />
                  </div>
                  <div className="font-display font-bold text-sm text-white">{inp.label}</div>
                </motion.div>
              ))}
            </div>

            {/* DESKTOP ANIMATED SVG CIRCUIT (Left -> Center) */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <svg className="w-full h-36 overflow-visible" viewBox="0 0 100 140">
                <path
                  id="inPath1"
                  d="M 0 35 C 50 35, 50 70, 100 70"
                  fill="none"
                  stroke="rgba(249,115,22,0.3)"
                  strokeWidth="1.5"
                />
                <path
                  id="inPath2"
                  d="M 0 105 C 50 105, 50 70, 100 70"
                  fill="none"
                  stroke="rgba(249,115,22,0.3)"
                  strokeWidth="1.5"
                />
                <circle r="3.5" fill="#F97316">
                  <animateMotion dur="1.6s" repeatCount="indefinite" path="M 0 35 C 50 35, 50 70, 100 70" />
                </circle>
                <circle r="3.5" fill="#FF5E1A">
                  <animateMotion
                    dur="1.6s"
                    begin="0.8s"
                    repeatCount="indefinite"
                    path="M 0 105 C 50 105, 50 70, 100 70"
                  />
                </circle>
              </svg>
            </div>

            {/* MOBILE VERTICAL STREAM */}
            <div className="flex lg:hidden justify-center py-1">
              <svg className="w-8 h-10" viewBox="0 0 32 40">
                <line x1="16" y1="0" x2="16" y2="40" stroke="rgba(249,115,22,0.35)" strokeWidth="2" />
                <circle r="3.5" fill="#F97316">
                  <animateMotion dur="1s" repeatCount="indefinite" path="M 16 0 L 16 40" />
                </circle>
              </svg>
            </div>

            {/* CENTER: AI ALI CORE REACTOR + TOOL NODES */}
            <div className="lg:col-span-3 border border-copper bg-obsidian/95 p-4 sm:p-5 relative shadow-[0_0_60px_-10px_rgba(249,115,22,0.3)]">
              {/* Pulsing Radar Corner Indicator */}
              <div className="flex items-center justify-between border-b border-copper/30 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-3 w-3 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-copper animate-radar" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-copper" />
                  </div>
                  <span className="font-mono text-xs font-bold text-copper">
                    02 // AI ALI MOTOR
                  </span>
                </div>
                <Cpu className="w-4 h-4 text-copper animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              <div className="space-y-2">
                {current.engineNodes.map((node, idx) => (
                  <motion.div
                    key={node.tool}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.09 }}
                    className="border border-copper/30 bg-surface/90 px-3 py-2.5 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-mono text-xs font-bold text-white">{node.tool}</div>
                      <div className="font-mono text-[10px] text-copper">{node.role}</div>
                    </div>
                    <Zap className="w-3.5 h-3.5 text-copper animate-pulse shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* DESKTOP ANIMATED SVG CIRCUIT (Center -> Right) */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <svg className="w-full h-36 overflow-visible" viewBox="0 0 100 140">
                <path
                  d="M 0 70 C 50 70, 50 35, 100 35"
                  fill="none"
                  stroke="rgba(249,115,22,0.3)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 0 70 C 50 70, 50 105, 100 105"
                  fill="none"
                  stroke="rgba(249,115,22,0.3)"
                  strokeWidth="1.5"
                />
                <circle r="3.5" fill="#F97316">
                  <animateMotion dur="1.4s" repeatCount="indefinite" path="M 0 70 C 50 70, 50 35, 100 35" />
                </circle>
                <circle r="3.5" fill="#FF5E1A">
                  <animateMotion
                    dur="1.4s"
                    begin="0.7s"
                    repeatCount="indefinite"
                    path="M 0 70 C 50 70, 50 105, 100 105"
                  />
                </circle>
              </svg>
            </div>

            {/* MOBILE VERTICAL STREAM */}
            <div className="flex lg:hidden justify-center py-1">
              <svg className="w-8 h-10" viewBox="0 0 32 40">
                <line x1="16" y1="0" x2="16" y2="40" stroke="rgba(249,115,22,0.35)" strokeWidth="2" />
                <circle r="3.5" fill="#F97316">
                  <animateMotion dur="1s" repeatCount="indefinite" path="M 16 0 L 16 40" />
                </circle>
              </svg>
            </div>

            {/* RIGHT: Verified Output + Animated ROI Meter */}
            <div className="lg:col-span-3 space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-copper">
                03 // EFFEKT & LEVERANSE
              </div>
              {current.outputs.map((out, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: 12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08 }}
                  className="border border-copper/40 bg-copper/10 p-3.5"
                >
                  <div className="flex items-center gap-2 font-display font-bold text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                    <span>{out.title}</span>
                  </div>
                  <div className="font-mono text-xs text-copper mt-1 pl-6">{out.metric}</div>
                </motion.div>
              ))}

              {/* Animated Efficiency Bar */}
              <div className="border border-gridLine bg-obsidian p-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400 mb-1.5">
                  <span>EFFEKTIVITETSGEVINST</span>
                  <span className="text-copper font-bold">{current.timeSaved}</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-900 overflow-hidden">
                  <motion.div
                    key={current.id}
                    initial={{ width: '15%' }}
                    animate={{ width: '88%' }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="h-full bg-copper-gradient"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
