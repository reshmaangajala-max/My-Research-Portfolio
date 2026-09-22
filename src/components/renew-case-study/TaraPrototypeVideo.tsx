import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, AlertCircle, RotateCcw } from 'lucide-react';

interface TaraPrototypeVideoProps {
  videoSrc?: string;
  posterSrc?: string;
}

export function TaraPrototypeVideo({
  videoSrc = '/tara-prototype.mp4',
  posterSrc,
}: TaraPrototypeVideoProps) {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Reset error state when source changes
  useEffect(() => {
    setHasError(false);
  }, [videoSrc]);

  const handleRetry = () => {
    setHasError(false);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(console.warn);
    }
  };

  return (
    <section
      id="tara-prototype"
      className="w-full bg-[var(--surface)] py-20 md:py-28 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Category Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-[12px] font-accent font-medium uppercase tracking-[2px] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Interactive Android Prototype</span>
          </div>

          {/* Section Title */}
          <h2
            id="tara-prototype-heading"
            className="font-bold text-[28px] sm:text-[36px] md:text-[42px] text-[var(--text-primary)] mb-4 tracking-tight"
          >
            Prototype — Tara in action
          </h2>

          {/* Supporting Text */}
          <p className="font-light text-[17px] sm:text-[19px] md:text-[20px] text-[var(--text-secondary)] max-w-[720px] mb-10 leading-relaxed">
            &ldquo;See Tara turn scattered life information into the things that actually need your attention.&rdquo;
          </p>

          {/* Main Direct Video Player Container */}
          <div
            className="w-full max-w-[940px] relative rounded-2xl overflow-hidden bg-[#0c1017] border border-white/10 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Direct Video Element */}
            <div className="relative w-full flex items-center justify-center bg-black min-h-[300px]">
              <video
                id="tara-actual-prototype-video"
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                className="w-full h-auto max-h-[80vh] object-contain block mx-auto"
                controls
                playsInline
                preload="metadata"
                onError={(e) => {
                  console.warn('Video load error:', e);
                  setHasError(true);
                }}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Fallback if Video Loading Error Occurs */}
              {hasError && (
                <div
                  id="tara-video-error-state"
                  className="absolute inset-0 z-20 bg-[#0f172a] flex flex-col items-center justify-center p-8 text-center text-white"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3">
                    <AlertCircle className="w-7 h-7 text-amber-400" />
                  </div>
                  <h4 className="font-bold text-[17px] text-white mb-1.5">
                    Prototype video couldn&apos;t load
                  </h4>
                  <p className="text-[13.5px] text-white/70 max-w-[360px] mb-6 leading-relaxed">
                    The video source could not be played directly. Please check your network connection or try reloading.
                  </p>
                  <button
                    id="tara-video-retry-btn"
                    onClick={handleRetry}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[13px] font-medium transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Retry Playback</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
