import { useEffect, useRef } from 'react';

interface DustCanvasProps {
  spotlightXOffset?: number; // Cursor drift offset (-40 to 40)
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  phase: number;
  wobbleSpeed: number;
}

export function DustCanvas({ spotlightXOffset = 0 }: DustCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const isMobile = (canvas.parentElement?.clientWidth || window.innerWidth) < 768;
    const PARTICLE_COUNT = isMobile ? 15 : 35;
    const particles: Particle[] = [];

    const getConeBounds = (y: number, currentSpotlightX: number) => {
      const progress = Math.max(0, Math.min(1, y / height));
      // Cone starts ~160px wide at top and expands to ~75% of viewport width at bottom
      const halfWidth = 80 + progress * (width * 0.38);
      return {
        minX: currentSpotlightX - halfWidth,
        maxX: currentSpotlightX + halfWidth,
      };
    };

    const createParticle = (initialY?: number): Particle => {
      const spotlightX = width * 0.5 + spotlightXOffset;
      const y = initialY !== undefined ? initialY : Math.random() * height;
      const { minX, maxX } = getConeBounds(y, spotlightX);
      const x = minX + Math.random() * (maxX - minX);

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.25,
        vy: 0.15 + Math.random() * 0.3,
        radius: 0.8 + Math.random() * 1.6,
        baseAlpha: 0.15 + Math.random() * 0.3,
        alpha: 0.15,
        phase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.01 + Math.random() * 0.02,
      };
    };

    // Initialize particles across vertical range
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(Math.random() * height));
    }

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.667, 2);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const spotlightX = width * 0.5 + spotlightXOffset;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.phase += p.wobbleSpeed * dt;
        p.x += (p.vx + Math.sin(p.phase) * 0.2) * dt;
        p.y += p.vy * dt;

        // Subtle alpha breathing
        p.alpha = p.baseAlpha * (0.7 + 0.3 * Math.sin(p.phase * 1.5));

        const { minX, maxX } = getConeBounds(p.y, spotlightX);

        // Reset if out of bounds or off the bottom
        if (p.y > height + 10 || p.x < minX - 20 || p.x > maxX + 20) {
          particles[i] = createParticle(-10);
          continue;
        }

        // Draw soft glowing mote
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.2);
        grad.addColorStop(0, `rgba(245, 240, 230, ${p.alpha})`);
        grad.addColorStop(0.5, `rgba(215, 205, 235, ${p.alpha * 0.45})`);
        grad.addColorStop(1, 'rgba(215, 205, 235, 0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [spotlightXOffset]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}
