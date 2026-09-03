import { motion } from 'motion/react';
import { Terminal, Code, Database, Sparkles, Server, Cpu, CheckCircle2 } from 'lucide-react';

const techStack = [
  { name: 'Spring Boot & Java', role: 'REST API backend, async queue manager, and user auth routing', icon: Server, color: 'text-emerald-400' },
  { name: 'Next.js & React 18', role: 'Lightweight client-side UI, spotlight overlay HUD, and responsive components', icon: Code, color: 'text-cyan-400' },
  { name: 'Supabase & pgvector', role: 'PostgreSQL relational database with 1536-dim vector cosine similarity indexing', icon: Database, color: 'text-blue-400' },
  { name: 'yt-dlp & Deepgram', role: 'Automated caption extraction with Deepgram Nova-3 ASR fallback for uncaptioned videos', icon: Cpu, color: 'text-amber-400' },
  { name: 'Google Gemini API', role: 'LLM taxonomy classification mapping raw chunks to Topic, Objective, Concept, Skill', icon: Sparkles, color: 'text-purple-400' },
  { name: 'Chrome Manifest V3', role: 'Browser extension overlay with global Alt+Shift+R shortcut listener', icon: Terminal, color: 'text-indigo-400' },
];

export function Chapter16BuildingProduct() {
  return (
    <section
      id="ch-12-building"
      className="w-full py-20 md:py-28 bg-[var(--surface)] transition-colors duration-500"
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
              12
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              BUILDING THE REAL PRODUCT
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            I didn’t stop at Figma. I built the working full-stack system.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-10">
            A design case study without working software leaves the hardest questions unanswered. I partnered with AI-assisted coding tools (Claude Code) to implement the entire system end-to-end — owning the data schemas, API contracts, UI interactions, and rate-limit edge cases.
          </p>

          {/* Architecture Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="p-5 rounded-[14px] bg-[var(--bg)] border border-[var(--border)] flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-[15px] text-[var(--text-primary)]">
                        {tech.name}
                      </h3>
                      <Icon className={`w-4 h-4 ${tech.color}`} />
                    </div>
                    <p className="text-[12.5px] text-[var(--text-secondary)] font-light leading-relaxed">
                      {tech.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* The AI-Assisted Builder Workflow */}
          <div className="p-6 sm:p-7 rounded-[16px] bg-[var(--bg)] border border-[var(--border)] shadow-[var(--card-glow-rest)]">
            <h4 className="font-semibold text-[16px] text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              How I Used AI to Build at 10x Speed:
            </h4>
            <p className="text-[14px] text-[var(--text-secondary)] font-light leading-relaxed mb-4">
              I used Claude Code as an interactive pair programmer for scaffolding Spring Boot controllers, writing Python pipeline scripts, and debugging pgvector index configs. This allowed me to focus 90% of my time on product architecture, UX micro-interactions, information hierarchy, and edge-case handling.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12px] font-mono">
              <div className="p-3 rounded-[8px] bg-[var(--surface-elevated)] text-[var(--text-primary)]">
                <span className="text-[var(--accent)] font-bold">1. Architecture:</span> 100% human-designed database &amp; UX flows.
              </div>
              <div className="p-3 rounded-[8px] bg-[var(--surface-elevated)] text-[var(--text-primary)]">
                <span className="text-cyan-400 font-bold">2. Velocity:</span> AI generated boilerplate code &amp; test fixtures in seconds.
              </div>
              <div className="p-3 rounded-[8px] bg-[var(--surface-elevated)] text-[var(--text-primary)]">
                <span className="text-emerald-400 font-bold">3. Result:</span> 4 months from initial spark to deployed software.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
