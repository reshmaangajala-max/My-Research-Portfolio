import { motion } from 'motion/react';
import { Layers, Database, ArrowRight, Sparkles, Network, FileCode, CheckCircle2 } from 'lucide-react';
import { LiveTaxonomyExplorer } from './LiveTaxonomyExplorer';

interface Chapter10Props {
  onOpenArtifact: (docId: string) => void;
}

const taxonomyTiers = [
  {
    tier: 'TIER 1: TOPIC',
    level: 'Broad Domain',
    example: 'Layout Systems',
    desc: 'The top-level subject area the video belongs to (e.g., Design Systems, Typography, Interaction, Auto-Layout).',
    color: 'text-indigo-400 border-indigo-500/40 bg-indigo-950/20',
  },
  {
    tier: 'TIER 2: OBJECTIVE',
    level: 'User Goal',
    example: 'Build responsive components without breaking constraints',
    desc: 'What the designer is trying to accomplish when they watch this video section.',
    color: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/20',
  },
  {
    tier: 'TIER 3: CONCEPT',
    level: 'Core Mechanism',
    example: 'Nested Auto-Layout with Hug & Fill constraints',
    desc: 'The specific theoretical or structural principle being taught in this 45-second window.',
    color: 'text-purple-400 border-purple-500/40 bg-purple-950/20',
  },
  {
    tier: 'TIER 4: SKILL / TECHNIQUE',
    level: 'Tactical Action',
    example: 'Card component resizing in Figma with minimum width wrap',
    desc: 'The exact executable action the viewer can immediately perform in their design software.',
    color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/20',
  },
];

export function Chapter10Architecture({ onOpenArtifact }: Chapter10Props) {
  return (
    <section
      id="ch-09-architecture"
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
              09
            </span>
            <span className="font-accent text-[11px] uppercase tracking-[3px] text-[var(--text-secondary)] font-medium">
              HOW SHOULD INFORMATION BE ORGANIZED?
            </span>
          </div>

          {/* Chapter Headline */}
          <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[38px] text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
            Designing the 4-Tier Taxonomy Framework.
          </h2>

          <p className="font-light text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-[1.8] max-w-[840px] mb-12">
            The biggest flaw of generic bookmarking tools is treating a 40-minute video as a single atomic item. In Reyo, a video is a collection of <strong>independent knowledge chunks</strong>. I designed a 4-tier taxonomy schema that mirrors how human memory recalls design concepts.
          </p>

          {/* 4-Tier Schema Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {taxonomyTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-[14px] border ${tier.color} bg-[var(--bg)] flex flex-col justify-between shadow-sm`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-[var(--accent)]">
                      LEVEL 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-accent uppercase text-[var(--text-secondary)]">
                      {tier.level}
                    </span>
                  </div>

                  <h3 className="font-bold text-[14.5px] text-[var(--text-primary)] mb-2">
                    {tier.tier.split(': ')[1]}
                  </h3>

                  <div className="p-2.5 rounded-[8px] bg-[var(--surface-elevated)] border border-[var(--border)] mb-3 text-[12px] font-mono text-[var(--text-primary)] leading-snug">
                    <span className="text-[var(--text-secondary)] block text-[10px] uppercase font-sans mb-0.5">Example:</span>
                    {tier.example}
                  </div>

                  <p className="text-[12px] text-[var(--text-secondary)] font-light leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Live Interactive Taxonomy Diagram Preview */}
          <div className="p-6 sm:p-8 rounded-[16px] bg-[var(--bg)] border border-[var(--border)] shadow-[var(--card-glow-rest)] mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--border)]">
              <div>
                <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--accent)] font-semibold block mb-1">
                  INTERACTIVE TAXONOMY EXPLORER
                </span>
                <h4 className="font-bold text-[18px] text-[var(--text-primary)]">
                  Live Hierarchy in Reyo&apos;s Knowledge Base
                </h4>
              </div>
              <button
                onClick={() => onOpenArtifact('taxonomy-framework')}
                className="text-[12px] font-mono text-[var(--accent)] hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto"
              >
                <Network className="w-3.5 h-3.5" />
                <span>Inspect Taxonomy Spec →</span>
              </button>
            </div>

            <LiveTaxonomyExplorer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
