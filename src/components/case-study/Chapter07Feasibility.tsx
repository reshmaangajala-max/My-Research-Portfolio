import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle, Clock, Ban, Cpu, ArrowRight } from 'lucide-react';

interface Chapter07Props {
  onOpenArtifact: (docId: string) => void;
}

const feasibilityQuadrants = [
  {
    title: 'POSSIBLE NOW (HIGH IMPACT / PROVEN TECH)',
    color: 'border-emerald-500/40 bg-emerald-950/10 text-emerald-400',
    accentColor: 'text-emerald-400',
    icon: CheckCircle2,
    items: [
      'YouTube caption extraction via yt-dlp (91% caption availability)',
      'Timestamp chunking into coherent ~45s semantic segments',
      'LLM taxonomy classification (Topic, Objective, Concept, Skill)',
      'Vector similarity search using Supabase PostgreSQL + pgvector',
    ],
    designImpact:
      'Proven capabilities became the default path, so the core search flow assumes captions exist and optimises for speed over explanation.',
  },
  {
    title: 'POSSIBLE WITH LIMITATIONS (REQUIRES SMART QUEUES)',
    color: 'border-amber-500/40 bg-amber-950/10 text-amber-400',
    accentColor: 'text-amber-400',
    icon: AlertTriangle,
    items: [
      'Gemini Free Tier API: 20 req/day quota bottleneck requires asynchronous batch queues',
      'Videos without captions (9% of library): Fallback to Deepgram Nova-3 speech-to-text',
      'Client-side search latency: Must cache embeddings in IndexedDB for <200ms recall',
    ],
    designImpact:
      'The 20 req/day quota made processing asynchronous, so the UI needed a visible queue state, per-video progress, and a way for users to keep working while videos process in the background.',
  },
  {
    title: 'COMPLEX / NEEDS DEEP VALIDATION (HIGH FRICTION)',
    color: 'border-indigo-500/40 bg-indigo-950/10 text-indigo-400',
    accentColor: 'text-indigo-400',
    icon: Clock,
    items: [
      'Background screen reading: Watching user’s active Figma layer names triggers heavy privacy concerns',
      'Multi-modal computer vision: Extracting keyframes every 5s exceeds solo builder server budget',
    ],
    designImpact:
      'Privacy friction ruled out passive background reading. Every capture is user-initiated and visible, which shaped the extension’s interaction model.',
  },
  {
    title: 'NOT WORTH BUILDING YET (PREMATURE OPTIMIZATION)',
    color: 'border-red-500/40 bg-red-950/10 text-red-400',
    accentColor: 'text-red-400',
    icon: Ban,
    items: [
      'Native desktop apps for macOS, Windows & Linux before proving Chrome extension adoption',
      'Social shared team feeds before individual designer solo workflow is 10/10 seamless',
    ],
    designImpact:
      'Cutting these kept Reyo a single-user tool, so the entire information architecture was designed around one person’s library rather than shared team spaces.',
  },
];

export function Chapter07Feasibility({ onOpenArtifact }: Chapter07Props) {
  return (
    <section
      id="ch-06-possibility"
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
              06
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              WHAT IS ACTUALLY POSSIBLE?
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            Balancing vision with technical reality.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            Having an ambitious idea is easy; making it run reliably on real-world infrastructure is where product design happens. As a solo builder, I mapped out every technical capability against API quotas, latency budgets, and privacy trade-offs — then designed around what each constraint actually meant for the user.
          </p>

          {/* 4 Quadrants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {feasibilityQuadrants.map((quad, idx) => {
              const Icon = quad.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-[16px] border ${quad.color.split(' ')[0]} bg-[var(--surface)] flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className={`w-4 h-4 ${quad.accentColor}`} />
                      <span className={`font-accent text-[11px] uppercase tracking-[1.5px] font-bold ${quad.accentColor}`}>
                        {quad.title}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {quad.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-2 text-[13.5px] text-[var(--text-secondary)] font-light leading-relaxed"
                        >
                          <span className="text-[var(--accent)] font-mono text-[11px] mt-1 shrink-0">
                            ↳
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Design Impact Line */}
                  <div className="mt-6 pt-4 border-t border-[var(--border)] text-[12px] leading-relaxed">
                    <span className={`font-accent text-[11px] font-bold uppercase tracking-wider mr-1.5 ${quad.accentColor}`}>
                      DESIGN IMPACT:
                    </span>
                    <span className="text-[var(--text-secondary)] font-light">
                      {quad.designImpact}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Architecture Trigger */}
          <div className="p-5 rounded-[12px] bg-[var(--surface-elevated)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-[var(--accent)] shrink-0" />
              <div className="text-[13px] text-[var(--text-secondary)] font-light">
                <strong className="text-[var(--text-primary)]">Technical Spec:</strong> Complete pipeline architecture, embedding vector storage, and ASR fallback flow.
              </div>
            </div>
            <button
              onClick={() => onOpenArtifact('classification-pipeline')}
              className="text-[12px] font-mono text-[var(--accent)] hover:underline whitespace-nowrap cursor-pointer"
            >
              Inspect Pipeline Artifact →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
