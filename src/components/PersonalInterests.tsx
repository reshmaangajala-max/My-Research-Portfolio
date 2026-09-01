import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import danceImage from '../assets/images/dancing_expressive_1788284827707.jpg';
import writingImage from '../assets/images/creative_writing_desk_1788284851893.jpg';
import toolsImage from '../assets/images/exploring_tools_lab_1788284872643.jpg';
import readingImage from '../assets/images/reading_stories_mood_1788284904281.jpg';

interface Hobby {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  tag: string;
}

const HOBBIES: Hobby[] = [
  {
    id: 'dancing',
    number: '01 / 04',
    title: 'Dancing',
    description:
      'I’ve loved dancing for as long as I can remember. It’s how I switch off, express myself without overthinking, and come back with a completely different kind of energy.',
    image: danceImage,
    alt: 'Cinematic visual of expressive dance and movement',
    tag: 'Movement & Rhythm',
  },
  {
    id: 'writing',
    number: '02 / 04',
    title: 'Creative Writing',
    description:
      'I spend a lot of time creating stories in my head — characters, relationships, entire worlds and all the little details in between. Writing is how I give those imaginary worlds somewhere to live.',
    image: writingImage,
    alt: 'Atmospheric creative writing desk with notebooks and story drafts',
    tag: 'Worldbuilding & Stories',
  },
  {
    id: 'exploring',
    number: '03 / 04',
    title: 'Exploring New Tools',
    description:
      'I’m always curious about a new tool or technology. I like taking it apart, figuring out how it works, finding what’s missing, and then wondering what I could build around it.',
    image: toolsImage,
    alt: 'Experimental product workspace with interface prototypes and digital tools',
    tag: 'Curiosity & Play',
  },
  {
    id: 'reading',
    number: '04 / 04',
    title: 'Getting Lost in Stories',
    description:
      'I’ve always loved fictional worlds. Reading is my favourite escape — the kind where a few pages can make me forget where I am and completely disappear into someone else’s story.',
    image: readingImage,
    alt: 'Moody cinematic nook with an open book and warm light',
    tag: 'Fictional Worlds',
  },
];

export function PersonalInterests() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto transition every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HOBBIES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const currentHobby = HOBBIES[currentIndex];

  return (
    <section
      id="outside-work"
      className="relative w-full bg-[var(--bg)] py-28 md:py-36 transition-colors duration-500 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.06)_0%,rgba(96,165,250,0.02)_50%,transparent_75%)] blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[720px] mb-12 sm:mb-16"
        >
          {/* Eyebrow */}
          <div className="text-[var(--accent)] font-medium text-[13px] uppercase tracking-[5px] mb-3">
            OUTSIDE WORK
          </div>

          {/* Headline */}
          <h2
            id="outside-work-heading"
            className="font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.18] tracking-tight text-[var(--text-primary)] mb-3"
          >
            My personal interests
          </h2>

          {/* Subline */}
          <p className="text-[15.5px] sm:text-[17px] text-[var(--text-secondary)] font-light leading-[1.7]">
            When I’m not designing, I’m usually creating, exploring, moving, or getting lost in another world.
          </p>
        </motion.div>

        {/* Cinematic Visual Stage & Editorial Narrative */}
        <div className="relative rounded-[24px] bg-[var(--surface)] border border-[var(--border)] p-4 sm:p-7 md:p-8 overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Top Progress & Subtle Indicator Bar */}
          <div className="flex items-center justify-between border-b border-[var(--border)]/70 pb-4 sm:pb-5 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-accent text-[11px] uppercase tracking-[2px] text-[var(--text-secondary)]">
                A Visual Diary
              </span>
            </div>

            {/* Automated Progress Stepper */}
            <div className="flex items-center gap-2">
              {HOBBIES.map((hobby, idx) => (
                <button
                  key={hobby.id}
                  onClick={() => setCurrentIndex(idx)}
                  className="group relative py-1 focus:outline-none"
                  aria-label={`Go to slide ${idx + 1}: ${hobby.title}`}
                >
                  <div
                    className={`h-1 rounded-full transition-all duration-500 ${
                      idx === currentIndex
                        ? 'w-8 sm:w-10 bg-[var(--accent)]'
                        : 'w-2.5 sm:w-3 bg-[var(--border)] hover:bg-[var(--text-secondary)]/40'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Main Gallery Composition: Large Visual with Harmonious Story Reveal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[380px] sm:min-h-[440px]">
            {/* Left: Cinematic Frame */}
            <div className="lg:col-span-7 relative h-[280px] sm:h-[380px] md:h-[420px] rounded-[18px] overflow-hidden bg-[#0d1017] border border-[var(--border)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHobby.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={currentHobby.image}
                    alt={currentHobby.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle Gradient Overlays for Cinematic Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/90 via-transparent to-black/20" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(13,16,23,0.6)_100%)]" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="font-accent text-[11px] uppercase tracking-[1.5px] font-medium px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[var(--accent)] border border-white/10">
                      {currentHobby.tag}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Editorial Typography & Fluid Reveal */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2 sm:py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHobby.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-center"
                >
                  {/* Step Display */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-[13px] font-semibold tracking-[3px] text-[var(--accent)]">
                      {currentHobby.number}
                    </span>
                    <div className="h-px w-6 bg-[var(--border)]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[26px] sm:text-[32px] md:text-[36px] tracking-tight text-[var(--text-primary)] leading-[1.2] mb-4">
                    {currentHobby.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[16px] sm:text-[17px] text-[var(--text-secondary)] font-light leading-[1.75]">
                    {currentHobby.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Seamless Rhythm Indicator at Bottom */}
              <div className="pt-8 sm:pt-10 mt-6 border-t border-[var(--border)]/70 flex items-center justify-end text-[12px] text-[var(--text-secondary)] font-accent">
                <span className="text-[var(--accent)] font-mono">
                  {`0${currentIndex + 1}`} · 04
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
