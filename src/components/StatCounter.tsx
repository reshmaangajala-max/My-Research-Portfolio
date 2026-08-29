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
  const [displayCount, setDisplayCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    if (numericTarget === undefined) {
      setIsFinished(true);
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 2000; // 2s duration as specified

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo / easeOutCubic curve
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
