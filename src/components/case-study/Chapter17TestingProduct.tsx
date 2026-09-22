import { motion } from 'motion/react';
import { StatCounter } from '../StatCounter';
import { CheckCircle2, AlertTriangle, ShieldCheck, Database, Search, Sparkles } from 'lucide-react';
import { ClassificationPipelineDoc } from './artifacts/ClassificationPipelineDoc';

interface Chapter17Props {
  onOpenArtifact: (docId: string) => void;
}

const liveBenchmarks = [
  { numeric: 205, suffix: '', label: 'TOTAL SAVES', desc: 'Real YouTube design tutorials saved in database', isAccent: true },
  { numeric: 185, suffix: '', label: 'TRANSCRIPTS EXTRACTED', desc: '90% caption availability extracted via pipeline', isAccent: false },
  { numeric: 9019, suffix: '', label: 'CHUNKS CREATED', desc: 'Granular ~45-second semantic segments created', isAccent: false },
  { numeric: 104, suffix: '', label: 'CLASSIFIED BY TOPIC', desc: '51% of videos classified into 27 design topics', isAccent: false },
  { numeric: 20, suffix: '', label: 'VECTOR EMBEDDINGS', desc: 'Embedded in pgvector (free-tier quota bottleneck)', isAccent: false },
  { numeric: 27, suffix: '', label: 'DISTINCT TOPICS', desc: 'Emerged across the 104 classified videos', isAccent: false },
];

export function Chapter17TestingProduct({ onOpenArtifact }: Chapter17Props) {
  return (
    <section
      id="ch-13-product-testing"
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
              12
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              TESTING THE WORKING PRODUCT (WORK IN PROGRESS)
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            Testing with 205 real videos.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            I connected my personal design video library to the live processing pipeline. Here are the actual live figures from my database, framed honestly as a work in progress rather than a finished build.
          </p>

          {/* Benchmark Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {liveBenchmarks.map((bench, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[14px] bg-[var(--surface)] border border-[var(--border)] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[28px] sm:text-[32px] font-bold leading-none mb-2">
                    <StatCounter
                      numericTarget={bench.numeric}
                      suffix={bench.suffix}
                      isAccent={bench.isAccent}
                    />
                  </div>
                  <span className="font-accent text-[9.5px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-semibold block mb-1">
                    {bench.label}
                  </span>
                  <p className="text-[11px] text-[var(--text-secondary)] font-light leading-snug">
                    {bench.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Reality: The Free-Tier Bottleneck */}
          <div className="p-6 sm:p-7 rounded-[16px] bg-[var(--surface)] border border-amber-500/30 bg-amber-950/10 mb-10">
            <div className="flex items-center gap-2 mb-2 text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span className="font-accent text-[11px] uppercase tracking-[1.5px] font-bold">
                TECHNICAL REALITY: FREE-TIER API QUOTAS
              </span>
            </div>
            <h4 className="font-bold text-[16px] text-[var(--text-primary)] mb-3">
              Why 51% are classified and 20 have embeddings
            </h4>
            <p className="text-[14px] sm:text-[14.5px] text-[var(--text-secondary)] font-light leading-relaxed mb-4">
              The classification pipeline works, but it hit the reality of free-tier API quotas. With a 20 request/day limit on Gemini free tier, classifying 9,019 chunks one by one is a slow process. As of right now, 104 of 205 videos (51%) are classified into the 27-topic taxonomy, and 20 videos have vector embeddings. The rest are stored, chunked, and searchable by keyword. The pipeline isn&apos;t broken — it&apos;s throttled by design until I upgrade to paid API tiers.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[11.5px] font-mono text-amber-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Throttled by daily free quotas · 104/205 classified · 20 embedded · Rest keyword-searchable</span>
            </div>
          </div>

          {/* Classification Pipeline Doc Artifact Trigger */}
          <div className="mt-4">
            <ClassificationPipelineDoc onExpand={() => onOpenArtifact('classification-pipeline')} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
