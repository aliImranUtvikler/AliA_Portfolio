import React, { useEffect, useRef } from 'react';

export const NeuralGridCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width * 0.65, y: height * 0.35, active: false };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.active = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const count = window.innerWidth < 768 ? 26 : 52;
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: Math.random() * 1.8 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Traveling data pulses along horizontal/vertical schematic grid lines
    const gridStep = 64;
    const beams = Array.from({ length: 8 }, (_, i) => ({
      horizontal: i % 2 === 0,
      lineIndex: Math.floor(Math.random() * 16) + 1,
      pos: Math.random() * 1200,
      speed: 2.2 + Math.random() * 2.5,
      len: 90 + Math.random() * 80,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw traveling laser beams on the blueprint grid
      beams.forEach((b) => {
        b.pos += b.speed;
        if (b.horizontal) {
          const y = (b.lineIndex * gridStep) % height;
          if (b.pos - b.len > width) {
            b.pos = -b.len;
            b.lineIndex = Math.floor(Math.random() * Math.max(1, Math.floor(height / gridStep)));
          }
          const grad = ctx.createLinearGradient(b.pos - b.len, y, b.pos, y);
          grad.addColorStop(0, 'rgba(249, 115, 22, 0)');
          grad.addColorStop(1, 'rgba(249, 115, 22, 0.55)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(b.pos - b.len, y);
          ctx.lineTo(b.pos, y);
          ctx.stroke();
        } else {
          const x = (b.lineIndex * gridStep) % width;
          if (b.pos - b.len > height) {
            b.pos = -b.len;
            b.lineIndex = Math.floor(Math.random() * Math.max(1, Math.floor(width / gridStep)));
          }
          const grad = ctx.createLinearGradient(x, b.pos - b.len, x, b.pos);
          grad.addColorStop(0, 'rgba(249, 115, 22, 0)');
          grad.addColorStop(1, 'rgba(249, 115, 22, 0.55)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x, b.pos - b.len);
          ctx.lineTo(x, b.pos);
          ctx.stroke();
        }
      });

      // 2. Update & connect floating neural nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.03;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Connect to neighbor nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.22;
            ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        // Connect to mouse/touch cursor
        const mdx = n.x - mouse.x;
        const mdy = n.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 210) {
          const alpha = (1 - mDist / 210) * 0.5;
          ctx.strokeStyle = `rgba(255, 94, 26, ${alpha})`;
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Draw node dot
        const glowAlpha = 0.4 + Math.sin(n.pulse) * 0.25;
        ctx.fillStyle = `rgba(249, 115, 22, ${glowAlpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-85"
      aria-hidden="true"
    />
  );
};
