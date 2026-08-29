import { FileText } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string; // e.g. 'aspect-[4/3]' or 'aspect-[16/10]'
  className?: string;
  id?: string;
}

export function ImagePlaceholder({
  label,
  aspectRatio = 'aspect-[4/3]',
  className = '',
  id,
}: ImagePlaceholderProps) {
  return (
    <div
      id={id}
      className={`w-full ${aspectRatio} bg-[var(--surface-elevated)] border border-dashed border-[var(--border)] rounded-[12px] p-6 flex flex-col items-center justify-center text-center transition-colors duration-300 select-none group hover:border-[var(--accent)]/50 ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
        <FileText className="w-4 h-4" />
      </div>
      <span className="text-[13px] text-[var(--text-secondary)] font-light max-w-[240px] leading-snug">
        {label}
      </span>
      <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)] opacity-50 mt-1">
        Research Artifact
      </span>
    </div>
  );
}
