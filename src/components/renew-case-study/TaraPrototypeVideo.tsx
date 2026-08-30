import { useState, useRef, useEffect, type ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Upload, AlertCircle, RotateCcw } from 'lucide-react';

interface TaraPrototypeVideoProps {
  videoSrc?: string;
  posterSrc?: string;
  figmaUrl?: string;
}

export function TaraPrototypeVideo({
  videoSrc = '/tara-prototype.mp4',
  posterSrc = '/tara-poster.png',
  figmaUrl = 'https://www.figma.com/proto/placeholder-tara-prototype',
}: TaraPrototypeVideoProps) {
  const [hasError, setHasError] = useState(false);
  const [customVideoSrc, setCustomVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeSrc = customVideoSrc || videoSrc;

  // Reset error state when source changes
  useEffect(() => {
    setHasError(false);
  }, [activeSrc]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomVideoSrc(url);
      setHasError(false);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.load();
          videoRef.current.play().catch((err) => {
            console.warn('Playback error:', err);
          });
        }
      }, 100);
    }
  };

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
      className="w-full bg-[var(--surface)] py-24 md:py-32 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
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
          <p className="font-light text-[17px] sm:text-[19px] md:text-[20px] text-[var(--text-secondary)] max-w-[720px] mb-12 leading-relaxed">
            &ldquo;See Tara turn scattered life information into the things that actually need your attention.&rdquo;
          </p>

          {/* Device Mock Container */}
          <div className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] relative">
            {/* Subtle ambient glow behind phone */}
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-[var(--accent)]/20 via-purple-500/15 to-transparent rounded-[50px] blur-2xl opacity-70 pointer-events-none"
              aria-hidden="true"
            />

            {/* Android Device Hardware Frame */}
            <div className="relative rounded-[40px] bg-[#0c1017] p-3 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm">
              {/* Camera punch hole / speaker bar */}
              <div
                className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#05080e] rounded-full z-30 border border-white/10 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#151c28] border border-white/20 mr-2" />
                <div className="w-8 h-1 rounded-full bg-white/20" />
              </div>

              {/* Screen Area with rounded corners and aspect ratio */}
              <div className="relative w-full rounded-[28px] overflow-hidden bg-black aspect-[9/20] flex items-center justify-center border border-white/10 shadow-inner">
                {/* Standard HTML5 Video Element */}
                <video
                  id="tara-actual-prototype-video"
                  ref={videoRef}
                  src={activeSrc}
                  poster={posterSrc}
                  className="w-full h-full object-contain bg-black"
                  controls
                  playsInline
                  preload="metadata"
                  onError={(e) => {
                    console.warn('Video element load notice:', e);
                    setHasError(true);
                  }}
                >
                  <source src={activeSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Graceful Fallback if Video Loading is Blocked */}
                {hasError && (
                  <div
                    id="tara-video-error-state"
                    className="absolute inset-0 z-20 bg-[#0f172a] flex flex-col items-center justify-center p-6 text-center text-white"
                  >
                    <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3">
                      <AlertCircle className="w-7 h-7 text-amber-400" />
                    </div>
                    <h4 className="font-bold text-[16px] text-white mb-1">
                      Prototype video couldn&apos;t load.
                    </h4>
                    <p className="text-[12.5px] text-white/70 max-w-[260px] mb-5 leading-relaxed">
                      The video file could not be rendered by your browser. You can retry loading or select a local MP4 recording.
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        id="tara-video-retry-btn"
                        onClick={handleRetry}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[12px] font-medium transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Retry</span>
                      </button>
                      <label
                        id="tara-video-replace-btn"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--accent)] text-white text-[12px] font-medium cursor-pointer hover:brightness-110 transition-all"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Replace video</span>
                        <input
                          type="file"
                          accept="video/mp4,video/webm,video/quicktime"
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Below Video linking to Figma */}
          <div className="mt-10">
            <a
              id="tara-figma-prototype-cta"
              href={figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--surface)] hover:bg-[var(--border)] border border-[var(--border)] hover:border-[var(--accent)]/60 text-[var(--text-primary)] hover:text-[var(--accent)] font-medium text-[14.5px] shadow-sm hover:shadow-[0_0_20px_rgba(167,139,250,0.2)] transition-all duration-300 group cursor-pointer"
            >
              <span>Explore the interactive prototype</span>
              <span className="text-[var(--accent)] font-bold transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
