import { useState, useRef, useEffect, type ChangeEvent, type DragEvent } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Upload, AlertCircle, RotateCcw } from 'lucide-react';

interface TaraPrototypeVideoProps {
  videoSrc?: string;
  posterSrc?: string;
  figmaUrl?: string;
}

export function TaraPrototypeVideo({
  videoSrc = '/tara-prototype.mp4',
  posterSrc,
  figmaUrl = 'https://www.figma.com/proto/placeholder-tara-prototype',
}: TaraPrototypeVideoProps) {
  const [hasError, setHasError] = useState(false);
  const [customVideoSrc, setCustomVideoSrc] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeSrc = customVideoSrc || videoSrc;

  // Reset error state when source changes
  useEffect(() => {
    setHasError(false);
  }, [activeSrc]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      loadFile(file);
    }
  };

  const loadFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setCustomVideoSrc(url);
    setHasError(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch((err) => {
          console.warn('Auto-play notice:', err);
        });
      }
    }, 100);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && (file.type.includes('video') || file.name.endsWith('.mp4') || file.name.endsWith('.mov') || file.name.endsWith('.webm'))) {
      loadFile(file);
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

          {/* Main Direct Video Player Container - Clean, Large, Without Phone Hardware Mockup */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full max-w-[940px] relative rounded-2xl overflow-hidden bg-[#0c1017] border transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
              isDragging ? 'border-[var(--accent)] ring-2 ring-[var(--accent)]/40 scale-[1.01]' : 'border-white/10'
            }`}
          >
            {/* Direct Video Element - natural dimensions, responsive scaling, no crop/stretch */}
            <div className="relative w-full flex items-center justify-center bg-black min-h-[300px]">
              <video
                id="tara-actual-prototype-video"
                ref={videoRef}
                src={activeSrc}
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
                <source src={activeSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Drag and Drop Hover Overlay */}
              {isDragging && (
                <div className="absolute inset-0 z-30 bg-[#120d18]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center text-white border-2 border-dashed border-[var(--accent)]">
                  <Upload className="w-12 h-12 text-[var(--accent)] mb-3 animate-bounce" />
                  <p className="font-bold text-[17px] text-white mb-1">Drop your prototype video file here</p>
                  <p className="text-[13px] text-white/70">MP4, WebM, or MOV formats supported</p>
                </div>
              )}

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
                    The video source could not be played directly. You can retry or attach your local prototype MP4 file.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      id="tara-video-retry-btn"
                      onClick={handleRetry}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-[13px] font-medium transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Retry</span>
                    </button>
                    <label
                      id="tara-video-replace-btn"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--accent)] text-white text-[13px] font-medium cursor-pointer hover:brightness-110 transition-all"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Select MP4</span>
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

          {/* Action CTAs below the video */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <label
              id="tara-upload-mp4-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#211b26] hover:bg-[#2d2434] border border-white/10 hover:border-[var(--accent)]/50 text-[13.5px] text-white font-medium cursor-pointer transition-all shadow-sm group"
            >
              <Upload className="w-4 h-4 text-[var(--accent)] group-hover:scale-110 transition-transform" />
              <span>Attach / Change MP4 Video</span>
              <input
                type="file"
                accept="video/mp4,video/webm,video/quicktime"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>

            <a
              id="tara-figma-prototype-cta"
              href={figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--surface)] hover:bg-[var(--border)] border border-[var(--border)] hover:border-[var(--accent)]/60 text-[var(--text-primary)] hover:text-[var(--accent)] font-medium text-[13.5px] shadow-sm hover:shadow-[0_0_20px_rgba(167,139,250,0.2)] transition-all duration-300 group cursor-pointer"
            >
              <span>Explore interactive Figma flow</span>
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
