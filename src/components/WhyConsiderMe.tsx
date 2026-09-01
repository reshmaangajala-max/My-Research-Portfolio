import { motion } from 'motion/react';

interface StickyNoteData {
  id: string;
  number: string;
  title: string;
  description: string;
  rotation: string;
  colorScheme: {
    bgGradient: string;
    border: string;
    borderHover: string;
    tapeBg: string;
    tapeBorder: string;
    numberColor: string;
    titleColor: string;
    descColor: string;
    shadowColor: string;
    pinColor: string;
  };
}

const STICKY_NOTES: StickyNoteData[] = [
  {
    id: 'note-01',
    number: 'NOTE 01',
    title: 'I DIG DEEPER',
    description:
      'I want to understand the user, the business, the market, and the real problem before I start designing.',
    rotation: '-rotate-[1.4deg]',
    colorScheme: {
      bgGradient: 'from-[#231d36]/95 via-[#1d182e]/95 to-[#161224]/95',
      border: 'border-[#a78bfa]/35',
      borderHover: 'hover:border-[#c4b5fd]/70',
      tapeBg: 'bg-[#a78bfa]/20 backdrop-blur-sm',
      tapeBorder: 'border-[#c4b5fd]/30',
      numberColor: 'text-[#c4b5fd]',
      titleColor: 'text-[#f5f3ff]',
      descColor: 'text-[#ddd6fe]/90',
      shadowColor: 'shadow-[0_10px_25px_-5px_rgba(167,139,250,0.12),0_8px_16px_-6px_rgba(0,0,0,0.5)]',
      pinColor: 'bg-[#a78bfa]',
    },
  },
  {
    id: 'note-02',
    number: 'NOTE 02',
    title: 'I THINK IN SYSTEMS',
    description:
      "I don't see isolated screens. I think about how the whole product works and grows together.",
    rotation: 'rotate-[1.6deg]',
    colorScheme: {
      bgGradient: 'from-[#1a233b]/95 via-[#151c30]/95 to-[#101525]/95',
      border: 'border-[#60a5fa]/35',
      borderHover: 'hover:border-[#93c5fd]/70',
      tapeBg: 'bg-[#60a5fa]/20 backdrop-blur-sm',
      tapeBorder: 'border-[#93c5fd]/30',
      numberColor: 'text-[#93c5fd]',
      titleColor: 'text-[#eff6ff]',
      descColor: 'text-[#bfdbfe]/90',
      shadowColor: 'shadow-[0_10px_25px_-5px_rgba(96,165,250,0.12),0_8px_16px_-6px_rgba(0,0,0,0.5)]',
      pinColor: 'bg-[#60a5fa]',
    },
  },
  {
    id: 'note-03',
    number: 'NOTE 03',
    title: 'I LOOK FOR THE GAP',
    description:
      "I study what's already out there, then look for what competitors and existing products still haven't solved.",
    rotation: 'rotate-[0.9deg]',
    colorScheme: {
      bgGradient: 'from-[#281b36]/95 via-[#20142c]/95 to-[#170e21]/95',
      border: 'border-[#c084fc]/35',
      borderHover: 'hover:border-[#e9d5ff]/70',
      tapeBg: 'bg-[#c084fc]/20 backdrop-blur-sm',
      tapeBorder: 'border-[#e9d5ff]/30',
      numberColor: 'text-[#d8b4fe]',
      titleColor: 'text-[#faf5ff]',
      descColor: 'text-[#e9d5ff]/90',
      shadowColor: 'shadow-[0_10px_25px_-5px_rgba(192,132,252,0.12),0_8px_16px_-6px_rgba(0,0,0,0.5)]',
      pinColor: 'bg-[#c084fc]',
    },
  },
  {
    id: 'note-04',
    number: 'NOTE 04',
    title: 'I ASK “WHY NOT?”',
    description:
      "If something hasn't been done before, I like exploring how we could make it work instead of ruling it out too early.",
    rotation: '-rotate-[1.8deg]',
    colorScheme: {
      bgGradient: 'from-[#2e201b]/95 via-[#251814]/95 to-[#1c110e]/95',
      border: 'border-[#fb923c]/35',
      borderHover: 'hover:border-[#fed7aa]/70',
      tapeBg: 'bg-[#fb923c]/20 backdrop-blur-sm',
      tapeBorder: 'border-[#fed7aa]/30',
      numberColor: 'text-[#fdba74]',
      titleColor: 'text-[#fff7ed]',
      descColor: 'text-[#ffedd5]/90',
      shadowColor: 'shadow-[0_10px_25px_-5px_rgba(251,146,60,0.12),0_8px_16px_-6px_rgba(0,0,0,0.5)]',
      pinColor: 'bg-[#fb923c]',
    },
  },
  {
    id: 'note-05',
    number: 'NOTE 05',
    title: 'I LOVE BUILDING',
    description:
      'I enjoy taking an idea from a rough thought to decisions, design, prototype, and something people can actually use.',
    rotation: 'rotate-[1.2deg]',
    colorScheme: {
      bgGradient: 'from-[#2c1a27]/95 via-[#23131e]/95 to-[#1a0d16]/95',
      border: 'border-[#f472b6]/35',
      borderHover: 'hover:border-[#fbcfe8]/70',
      tapeBg: 'bg-[#f472b6]/20 backdrop-blur-sm',
      tapeBorder: 'border-[#fbcfe8]/30',
      numberColor: 'text-[#f472b6]',
      titleColor: 'text-[#fdf2f8]',
      descColor: 'text-[#fce7f3]/90',
      shadowColor: 'shadow-[0_10px_25px_-5px_rgba(244,114,182,0.12),0_8px_16px_-6px_rgba(0,0,0,0.5)]',
      pinColor: 'bg-[#f472b6]',
    },
  },
  {
    id: 'note-06',
    number: 'NOTE 06',
    title: 'I LEARN FAST',
    description:
      "When I don't know something, I ask questions, experiment, learn what I need, and keep moving.",
    rotation: '-rotate-[1.1deg]',
    colorScheme: {
      bgGradient: 'from-[#2b2519]/95 via-[#221c13]/95 to-[#1a150d]/95',
      border: 'border-[#fbbf24]/35',
      borderHover: 'hover:border-[#fde68a]/70',
      tapeBg: 'bg-[#fbbf24]/20 backdrop-blur-sm',
      tapeBorder: 'border-[#fde68a]/30',
      numberColor: 'text-[#fcd34d]',
      titleColor: 'text-[#fefce8]',
      descColor: 'text-[#fef3c7]/90',
      shadowColor: 'shadow-[0_10px_25px_-5px_rgba(251,191,36,0.12),0_8px_16px_-6px_rgba(0,0,0,0.5)]',
      pinColor: 'bg-[#fbbf24]',
    },
  },
];

export function WhyConsiderMe() {
  return (
    <section
      id="why-consider-me"
      className="relative w-full bg-[var(--surface)] py-28 md:py-36 transition-colors duration-500 overflow-hidden"
    >
      {/* Studio Wall Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle grid pinboard texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--text-primary) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient Studio Lighting across wall */}
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(167,139,250,0.09)_0%,rgba(96,165,250,0.03)_45%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(251,146,60,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ============================================================ */}
          {/* LEFT SIDE: MAIN WALL STATEMENT                              */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            {/* Section Eyebrow */}
            <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-4">
              WHY SHOULD YOU CONSIDER ME?
            </div>

            {/* Subheading */}
            <h2
              id="why-consider-me-heading"
              className="font-bold text-[28px] sm:text-[34px] md:text-[38px] leading-[1.18] tracking-tight text-[var(--text-primary)] mb-8"
            >
              I know what you&apos;re looking for.{' '}
              <span className="aurora-text block sm:inline">Here&apos;s how I think.</span>
            </h2>

            {/* Subtle Studio Note Indicator */}
            <div className="mt-8 pt-6 border-t border-[var(--border)]/70 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-accent text-[11.5px] uppercase tracking-[2px] text-[var(--text-secondary)]">
                6 Working Principles · Pinned from Practice
              </span>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT SIDE: SIX ORGANIC TACTILE STICKY NOTES                */}
          {/* ============================================================ */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-2">
              {STICKY_NOTES.map((note, index) => {
                const { colorScheme } = note;
                return (
                  <motion.div
                    key={note.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`relative group cursor-default transition-transform duration-300 hover:scale-[1.025] hover:-translate-y-1.5 hover:rotate-0 ${note.rotation}`}
                  >
                    {/* Washi Tape / Top Pin Accent */}
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                      <div
                        className={`w-14 h-4 rounded-[2px] ${colorScheme.tapeBg} border ${colorScheme.tapeBorder} shadow-sm transform -rotate-1`}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Sticky Note Body */}
                    <div
                      className={`relative rounded-[16px] bg-gradient-to-b ${colorScheme.bgGradient} border ${colorScheme.border} ${colorScheme.borderHover} p-6 sm:p-6.5 ${colorScheme.shadowColor} transition-all duration-300 flex flex-col justify-between min-h-[190px] backdrop-blur-md`}
                    >
                      {/* Note Header: Note number & pin accent */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`font-mono text-[11px] font-semibold tracking-[2px] uppercase ${colorScheme.numberColor}`}
                        >
                          {note.number}
                        </span>
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${colorScheme.pinColor} opacity-75 shadow-sm`}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Note Title */}
                      <h3
                        className={`font-bold text-[17px] sm:text-[18px] tracking-tight ${colorScheme.titleColor} mb-2.5 leading-snug`}
                      >
                        {note.title}
                      </h3>

                      {/* Note Body Text */}
                      <p
                        className={`text-[13.5px] sm:text-[14px] font-light leading-[1.65] ${colorScheme.descColor}`}
                      >
                        {note.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
