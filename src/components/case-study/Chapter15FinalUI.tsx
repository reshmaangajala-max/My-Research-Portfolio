import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ScreenItem {
  id: string;
  tabLabel: string;
  screenLabel: string;
  title: string;
  subtitle: string;
  outcome: string;
  imageSrc: string;
}

const screens: ScreenItem[] = [
  {
    id: 'screen-save',
    tabLabel: '01 · 1-Click Save',
    screenLabel: 'SCREEN 01 — 1-CLICK INGESTION',
    title: 'Capturing Without Context-Switching',
    subtitle: 'A lightweight browser extension that ingests video URLs, cues, and timestamps in one click without interrupting the viewer’s watch flow.',
    outcome: 'Queues transcript extraction, chunking, and Gemini taxonomy classification in under 200ms.',
    imageSrc: '/assets/videos/yt-save-screen.mp4',
  },
  {
    id: 'screen-spotlight',
    tabLabel: '02 · Spotlight Search',
    screenLabel: 'SCREEN 02 — IN-FLOW SPOTLIGHT HUD',
    title: 'Instant Recall Inside Any Workspace',
    subtitle: 'A zero-footprint HUD triggered via Alt+Shift+R that floats over Figma or any active workspace without stealing focus.',
    outcome: 'Designers surface exact timestamp solutions in under 5 seconds with zero window switching.',
    imageSrc: '/assets/videos/spotlight-search.mp4',
  },
  {
    id: 'screen-timestamp',
    tabLabel: '03 · Timestamp Player',
    screenLabel: 'SCREEN 03 — PRECISE TIMESTAMP RETRIEVAL',
    title: 'Pre-Cued Timestamp Video Loop',
    subtitle: 'Deep-links directly to the 30-second explanation segment with structured takeaway bullets and synchronized captions.',
    outcome: 'Users absorb the exact 20-second technique and return immediately to work with Escape.',
    imageSrc: '/reyo-timestamp.png',
  },
  {
    id: 'screen-home',
    tabLabel: '04 · Reyo Home',
    screenLabel: 'SCREEN 04 — KNOWLEDGE VAULT',
    title: 'Connected Knowledge Library',
    subtitle: 'A calm, structured overview organizing saved clips into 4-tier taxonomies, active project workspaces, and recall insights.',
    outcome: 'Eliminates bookmark rot by continuously connecting saves into an organized personal design library.',
    imageSrc: '/reyo-home.png',
  },
];

export function Chapter15FinalUI() {
  const [activeTab, setActiveTab] = useState(0);

  const activeScreen = screens[activeTab];

  return (
    <section
      id="ch-00-product"
      className="w-full py-20 md:py-28 bg-[var(--bg)] transition-colors duration-500"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Chapter Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[12px] font-semibold text-[var(--accent)] px-2 py-0.5 rounded bg-[var(--accent)]/10 border border-[var(--accent)]/20">
              00
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              THE PRODUCT
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            This is Reyo.
          </h2>

          {/* Intro Paragraph */}
          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-10">
            A save-and-retrieval tool that turns a scattered video library into instant, in-flow answers. Here's the finished product first — then how it came to be.
          </p>

          {/* Screen Tabs Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar border-b border-[var(--border)]">
            {screens.map((screen, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={screen.id}
                  id={`tab-btn-${screen.id}`}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 rounded-xl text-[13px] sm:text-[14px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[var(--surface-elevated)] border-[var(--accent)] text-[var(--text-primary)] shadow-sm'
                      : 'bg-transparent border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]'
                  }`}
                >
                  {screen.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Active Screen Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 md:p-10 rounded-[20px] bg-[var(--surface)] border border-[var(--border)] shadow-[var(--card-glow-rest)]"
            >
              {/* Screen Metadata Header */}
              <div className="max-w-[860px] mb-6">
                {/* Screen Label */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="font-mono text-[11px] font-bold text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-2.5 py-0.5 rounded-full">
                    {activeScreen.screenLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[var(--text-primary)] mb-2.5 tracking-tight">
                  {activeScreen.title}
                </h3>

                {/* Subtitle line */}
                <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] font-light leading-relaxed mb-3.5">
                  {activeScreen.subtitle}
                </p>

                {/* Outcome line */}
                <div className="inline-flex items-center gap-2 text-[13px] sm:text-[13.5px] font-medium text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                  <span className="font-semibold text-emerald-300">Outcome:</span>
                  <span>{activeScreen.outcome}</span>
                </div>
              </div>

              {/* Media Container */}
              <div
                className={`relative w-full rounded-2xl overflow-hidden bg-[#070b14] border border-[#1e293b] shadow-2xl flex items-center justify-center ${
                  activeScreen.id === 'screen-spotlight'
                    ? 'aspect-[1920/898]'
                    : activeScreen.id === 'screen-save'
                    ? 'aspect-[1920/902]'
                    : 'aspect-[16/9]'
                }`}
                style={
                  activeScreen.id === 'screen-spotlight'
                    ? { aspectRatio: '1920 / 898' }
                    : activeScreen.id === 'screen-save'
                    ? { aspectRatio: '1920 / 902' }
                    : undefined
                }
              >
                {activeScreen.id === 'screen-spotlight' || activeScreen.id === 'screen-save' ? (
                  <video
                    key={activeScreen.id}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={(e) => {
                      e.currentTarget.play().catch(() => {});
                    }}
                    className="w-full h-full object-contain bg-[#070b14]"
                  >
                    <source src={activeScreen.imageSrc} type="video/mp4" />
                    {activeScreen.id === 'screen-save' && (
                      <source src="/assets/videos/yt save screen.mp4" type="video/mp4" />
                    )}
                  </video>
                ) : (
                  <img
                    src={activeScreen.imageSrc}
                    alt={activeScreen.title}
                    className="w-full h-full object-cover object-top sm:object-contain bg-[#070b14]"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
