import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface ScaleHouseFeedbackDocProps {
  compact?: boolean;
  onExpand?: () => void;
}

export function ScaleHouseFeedbackDoc({ compact = false, onExpand }: ScaleHouseFeedbackDocProps) {
  return (
    <div
      onClick={onExpand}
      className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-[12px] p-5 shadow-sm hover:border-[var(--accent)]/50 transition-all cursor-pointer group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[12px] font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
            ScaleHouse Season 1 Feedback
          </span>
        </div>
        <ExternalLink className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-[28px] font-semibold text-[var(--text-primary)]">7 / 10</span>
        <span className="text-[13px] text-[var(--text-secondary)] font-light">Concept Score</span>
      </div>

      <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed line-clamp-3">
        &quot;Strong problem framing. Focus strictly on YouTube first as the primary retrieval hook — timestamp jumping is the standout value prop.&quot;
      </p>

      {!compact && (
        <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center gap-4 text-[12px] text-[var(--text-secondary)]">
          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Market Wedge Validated
          </span>
          <span>Cohort Lead Critique</span>
        </div>
      )}
    </div>
  );
}
