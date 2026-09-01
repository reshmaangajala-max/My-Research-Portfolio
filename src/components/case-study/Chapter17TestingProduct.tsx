import { motion } from 'motion/react';
import { StatCounter } from '../StatCounter';
import { CheckCircle2, AlertTriangle, ShieldCheck, Database, Search, Sparkles } from 'lucide-react';
import { ClassificationPipelineDoc } from './artifacts/ClassificationPipelineDoc';

interface Chapter17Props {
  onOpenArtifact: (docId: string) => void;
}

const liveBenchmarks = [
  { numeric: 170, suffix: '+', label: 'VIDEOS PROCESSED', desc: 'Real YouTube design tutorials indexed in database', isAccent: true },
  { numeric: 156, suffix: '', label: 'TRANSCRIPTS EXTRACTED', desc: 'Captions parsed cleanly with zero hallucination', isAccent: false },
  { numeric: 91, suffix: '%', label: 'COVERAGE RATE', desc: 'Direct caption availability via yt-dlp', isAccent: false },
  { numeric: 15, suffix: '', label: 'ASR FALLBACKS', desc: 'Uncaptioned videos transcribed via Deepgram Nova-3', isAccent: false },
];

export function Chapter17TestingProduct({ onOpenArtifact }: Chapter17Props) {
  return (
    <section
      id="ch-17-product-testing"
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
              17
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              TESTING THE WORKING PRODUCT
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            It looked right in Figma. Now I tested it with 170+ real videos.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            I connected my personal design video library to the live processing pipeline. Here are the hard numbers and technical lessons learned from processing hundreds of hours of design tutorials.
          </p>

          {/* Benchmark Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {liveBenchmarks.map((bench, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[14px] bg-[var(--surface)] border border-[var(--border)] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[34px] sm:text-[40px] font-bold leading-none mb-2">
                    <StatCounter
                      numericTarget={bench.numeric}
                      suffix={bench.suffix}
                      isAccent={bench.isAccent}
                    />
                  </div>
                  <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-semibold block mb-1">
                    {bench.label}
                  </span>
                  <p className="text-[11.5px] text-[var(--text-secondary)] font-light leading-snug">
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
                THE BIGGEST ENGINEERING CHALLENGE: FREE-TIER API QUOTAS
              </span>
            </div>
            <h4 className="font-bold text-[16px] text-[var(--text-primary)] mb-2">
              Gemini Free Tier Quota (20 requests/day)
            </h4>
            <p className="text-[13.5px] text-[var(--text-secondary)] font-light leading-relaxed mb-4">
              Processing 170+ videos with hundreds of ~45s chunks would have crashed standard synchronous API callers. I engineered an asynchronous persistent batch queue in Spring Boot that throttled calls within daily limits, successfully processing the entire library over several weeks without incurring cloud API costs.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--bg)] border border-[var(--border)] text-[11px] font-mono text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Zero data loss · 100% chunks classified and indexed in pgvector</span>
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
