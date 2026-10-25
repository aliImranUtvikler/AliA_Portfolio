import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const Crosshair: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none select-none font-mono text-xs leading-none text-copper/70 ${className}`}
  >
    +
  </span>
);

export const AnimatedCounter: React.FC<{
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}> = ({ target, suffix = '', prefix = '', duration = 1400 }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
};

export const SectionHeader: React.FC<{
  indexCode: string;
  tag: string;
  title: string;
  subtitle?: string;
  rightMeta?: string;
}> = ({ indexCode, tag, title, subtitle, rightMeta = 'SYS.ONLINE' }) => {
  return (
    <div className="relative border-b border-gridLine bg-surface/50 overflow-hidden">
      {/* Animated horizontal copper scan beam at top of section */}
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '200%' }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 2.6, ease: 'linear', repeat: Infinity, repeatDelay: 1.5 }}
        className="pointer-events-none absolute top-0 left-0 h-[1.5px] w-1/3 bg-gradient-to-r from-transparent via-copper to-transparent"
      />

      {/* Top Blueprint Bar */}
      <div className="flex items-center justify-between gap-2 border-b border-gridLine px-4 py-2 sm:px-8 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-400">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-copper animate-ping" />
          <span className="text-copper font-semibold shrink-0">{indexCode}</span>
          <span className="text-zinc-600 shrink-0">//</span>
          <span className="truncate">{tag}</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-zinc-500 shrink-0">
          <span>{rightMeta}</span>
          <span className="text-copper">+</span>
        </div>
      </div>

      {/* Minimalist Title Area */}
      <div className="px-4 py-5 sm:px-8 sm:py-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  enableTilt?: boolean;
}> = ({ children, className = '', onClick, enableTilt = true }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    if (enableTilt && window.innerWidth >= 768) {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -3.5;
      const ry = ((x - cx) / cx) * 3.5;
      setTilt({ rx, ry });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: isHovered
          ? `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
          : 'perspective(900px) rotateX(0deg) rotateY(0deg)',
        transition: isHovered ? 'transform 80ms ease-out' : 'transform 350ms ease-out',
      }}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, rgba(249, 115, 22, 0.19), transparent 50%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
