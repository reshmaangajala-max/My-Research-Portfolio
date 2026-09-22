import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface StatCounterProps {
  numericTarget?: number;
  suffix?: string;
  staticValue?: string;
  className?: string;
  isAccent?: boolean;
}

export function StatCounter({
  numericTarget,
  suffix = '',
  staticValue,
  className = '',
  isAccent = false,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  // Set the final value as the rendered default; never display 0 on load, fast scroll, or SSR
  const [displayCount, setDisplayCount] = useState<number>(numericTarget ?? 0);
  const [isFinished, setIsFinished] = useState(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (numericTarget === undefined) {
      setIsFinished(true);
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayCount(numericTarget);
      setIsFinished(true);
      return;
    }

    if (!isInView || hasAnimatedRef.current) {
      return;
    }

    hasAnimatedRef.current = true;
    let startTimestamp: number | null = null;
    const duration = 1800; // 1.8s duration

    // Animate from 0 once visible
    setDisplayCount(0);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutCubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * numericTarget);
      setDisplayCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayCount(numericTarget);
        setIsFinished(true);
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, [isInView, numericTarget]);

  return (
    <span
      ref={ref}
      className={`tabular-nums font-accent transition-all duration-500 ${
        isAccent ? 'text-[var(--accent)] font-light' : 'text-[var(--text-primary)] font-light'
      } ${
        isAccent && isFinished
          ? 'drop-shadow-[0_0_12px_rgba(167,139,250,0.45)]'
          : ''
      } ${className}`}
    >
      {numericTarget !== undefined ? `${displayCount}${suffix}` : staticValue}
    </span>
  );
}
