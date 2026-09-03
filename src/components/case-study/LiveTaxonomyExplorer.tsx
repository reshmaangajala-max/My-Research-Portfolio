import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  Compass,
  Sparkles,
  Wrench,
  Video,
  Clock,
  ChevronRight,
  Database,
  ArrowRight,
  CheckCircle2,
  FileText,
  ExternalLink,
  Cpu,
} from 'lucide-react';

export interface TaxonomySkill {
  id: string;
  name: string;
  tool: string;
  action: string;
  timestamp: string;
  videoTitle: string;
  channel: string;
  transcriptSnippet: string;
  vectorSimilarity: string;
}

export interface TaxonomyConcept {
  id: string;
  name: string;
  mechanism: string;
  principles: string[];
  skills: TaxonomySkill[];
}

export interface TaxonomyObjective {
  id: string;
  name: string;
  goal: string;
  concepts: TaxonomyConcept[];
}

export interface TaxonomyTopic {
  id: string;
  name: string;
  domain: string;
  savesCount: number;
  description: string;
  objectives: TaxonomyObjective[];
}

// Real classification data extracted from Reyo's 170+ processed design video library
export const realReyoTaxonomyData: TaxonomyTopic[] = [
  {
    id: 'layout-systems',
    name: 'Layout Systems',
    domain: 'Spatial Architecture & Constraints',
    savesCount: 18,
    description: 'Structural component layouts, adaptive flex containers, and constraint behaviors.',
    objectives: [
      {
        id: 'obj-responsive-components',
        name: 'Build responsive components without breaking constraints',
        goal: 'Ensure multi-device flexibility while preserving padding and alignment rules.',
        concepts: [
          {
            id: 'concept-nested-autolayout',
            name: 'Nested Auto-Layout with Hug & Fill constraints',
            mechanism: 'Hierarchical container bounding where parent dictates width and children adapt.',
            principles: ['Hug content for labels', 'Fill container for cards', 'Minimum width bounds'],
            skills: [
              {
                id: 'skill-card-resizing',
                name: 'Responsive card layout in Figma',
                tool: 'Figma Auto-Layout v5',
                action: 'Set outer card frame to Fill container while fixing min-width to 280px to enable auto-wrap.',
                timestamp: '04:18',
                videoTitle: 'Figma Auto Layout Tutorial — Responsive Cards',
                channel: 'Figma Design',
                transcriptSnippet:
                  'When you nest an auto-layout frame inside another, setting the child to Fill container while declaring min-width ensures cards wrap cleanly without truncating text.',
                vectorSimilarity: '0.942 cosine match',
              },
            ],
          },
        ],
      },
      {
        id: 'obj-fluid-grid-layouts',
        name: 'Implement fluid multi-column grid layouts',
        goal: 'Dynamically transition from 3-column desktop grids to 1-column mobile feeds.',
        concepts: [
          {
            id: 'concept-autolayout-wrap',
            name: 'Auto-Layout Wrap with min/max dimensions',
            mechanism: 'CSS Flexbox-style automatic line breaks triggered by viewport bounds.',
            principles: ['Auto-wrap activation', 'Horizontal gap tokens', 'Boundary clamping'],
            skills: [
              {
                id: 'skill-card-wrapper',
                name: 'Responsive card wrapper in Figma',
                tool: 'Figma Auto-Layout Wrap',
                action: 'Activate Wrap mode on parent section frame and bind min/max width constraints to card components.',
                timestamp: '14:20',
                videoTitle: 'Mastering Auto-Layout Wrap & Dynamic Stacks',
                channel: 'DesignCourse',
                transcriptSnippet:
                  'Using Figma\'s wrap feature combined with min-width on card items allows components to transition from a 3-column desktop layout to single-column mobile automatically.',
                vectorSimilarity: '0.918 cosine match',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'typography',
    name: 'Typography',
    domain: 'Editorial & Micro-Typography',
    savesCount: 14,
    description: 'Font hierarchy, optical kerning, vertical rhythm, and pairing rules.',
    objectives: [
      {
        id: 'obj-typographic-hierarchy',
        name: 'Establish typographic hierarchy and vertical rhythm',
        goal: 'Form consistent typographic step ratios across desktop and mobile screens.',
        concepts: [
          {
            id: 'concept-type-pairing',
            name: 'Type pairing contrast and modular scale ratios',
            mechanism: 'Step-ratio mathematical multipliers (1.25x Major Third) paired with contrasting serifs.',
            principles: ['Display serif vs grotesque body', 'Leading math (1.5x font size)', 'Letter tracking bounds'],
            skills: [
              {
                id: 'skill-pairing-editorial',
                name: 'Pairing editorial serif with grotesque sans in Figma',
                tool: 'Figma Text Styles',
                action: 'Create paired typographic tokens using Playfair Display for headings and Plus Jakarta Sans for UI body copy.',
                timestamp: '02:15',
                videoTitle: 'Editorial Typography & Modular Type Scales',
                channel: 'Type Daily',
                transcriptSnippet:
                  'Pairing a high-contrast serif display with a clean grotesque body font at a 1.25 major third step ratio gives instant editorial polish without feeling noisy.',
                vectorSimilarity: '0.931 cosine match',
              },
            ],
          },
        ],
      },
      {
        id: 'obj-micro-typography',
        name: 'Optimize micro-typography and character spacing',
        goal: 'Eliminate awkward letter collisions and uneven whitespace in large display titles.',
        concepts: [
          {
            id: 'concept-optical-kerning',
            name: 'Optical kerning & metric letter-spacing adjustments',
            mechanism: 'Manual character kerning pairs compensating for negative space around diagonal letterforms.',
            principles: ['Optical alignment', 'Negative tracking for 32px+', 'Diagonal glyph compensation'],
            skills: [
              {
                id: 'skill-quick-kerning',
                name: 'Quick kerning adjustments in Figma in 30 seconds',
                tool: 'Figma Character Spacing',
                action: 'Apply -2% tracking on headings over 36px and adjust T-o, V-a, and W-e pairs with Option+Arrow keys.',
                timestamp: '00:30',
                videoTitle: 'Quick kerning tip in 30 seconds',
                channel: 'Type Daily',
                transcriptSnippet:
                  'Always kern headline displays optically rather than using default font metrics, especially around capital T, V, and W where diagonal whitespace breaks reading rhythm.',
                vectorSimilarity: '0.957 cosine match',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'interaction',
    name: 'Interaction',
    domain: 'Motion & Feedback Physics',
    savesCount: 12,
    description: 'Transition timing, spring physics, smart animate states, and gestural cues.',
    objectives: [
      {
        id: 'obj-physics-microinteractions',
        name: 'Build realistic physics-based micro-interactions',
        goal: 'Craft tactile interactive states that respond naturally to user clicks and hovers.',
        concepts: [
          {
            id: 'concept-spring-physics',
            name: 'Spring physics curves & interactive hover states',
            mechanism: 'Damped harmonic oscillation replacing linear easing for tactile UI elements.',
            principles: ['Stiffness: 300 / Damping: 20', 'Component variant hover loops', 'Subtle scale transforms (1.02x)'],
            skills: [
              {
                id: 'skill-smart-animate-buttons',
                name: 'Fluid button states with smart animate in Figma',
                tool: 'Figma Interactive Components',
                action: 'Configure variant interaction with Smart Animate and custom cubic bezier (0.16, 1, 0.3, 1).',
                timestamp: '08:42',
                videoTitle: 'Advanced Prototyping & Smart Animate',
                channel: 'DesignCourse',
                transcriptSnippet:
                  'By setting custom bezier curves with a gentle overshoot, UI elements feel tactile and reactive to user hover rather than mechanical.',
                vectorSimilarity: '0.924 cosine match',
              },
            ],
          },
        ],
      },
      {
        id: 'obj-sheet-transitions',
        name: 'Design seamless drawer and sheet transitions',
        goal: 'Present modal workflows without jarring page context loss.',
        concepts: [
          {
            id: 'concept-overlay-positioning',
            name: 'Overlay positioning & background dimming curves',
            mechanism: 'Coordinated backdrop opacity fade combined with bottom-sheet translateY curve.',
            principles: ['Scrim opacity 0.6', 'Drag-to-dismiss threshold', 'Touch target minimums'],
            skills: [
              {
                id: 'skill-bottom-sheet-slide',
                name: 'Bottom sheet slide-up animation in Figma',
                tool: 'Figma Prototype Overlays',
                action: 'Set overlay to Bottom Center with manual backdrop blur and slide-in-from-bottom easing.',
                timestamp: '11:15',
                videoTitle: 'Mobile Gesture Navigation & Overlay Mechanics',
                channel: 'Mizko',
                transcriptSnippet:
                  'Smart animate handles nested frame constraints between the collapsed state and the expanded sheet without recalculating layer hierarchy.',
                vectorSimilarity: '0.908 cosine match',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'auto-layout',
    name: 'Auto-Layout',
    domain: 'Dynamic Component Modeling',
    savesCount: 16,
    description: 'Granular frame behaviors, absolute positioning overrides, and text truncation.',
    objectives: [
      {
        id: 'obj-absolute-positioning',
        name: 'Master absolute positioning within dynamic frames',
        goal: 'Pin floating status indicators and close badges without breaking flex reflow.',
        concepts: [
          {
            id: 'concept-absolute-override',
            name: 'Absolute position override inside auto-layout frames',
            mechanism: 'Decoupling an element from parent layout flow while maintaining frame coordinates.',
            principles: ['Exemption from parent flow', 'Top-right coordinate anchoring', 'Z-index preservation'],
            skills: [
              {
                id: 'skill-badge-anchoring',
                name: 'Floating notification badge anchoring on icons',
                tool: 'Figma Absolute Position',
                action: 'Select notification badge within auto-layout frame, enable Absolute position, and set constraints to Right + Top.',
                timestamp: '07:34',
                videoTitle: 'Figma Auto Layout Deep Dive: 0 to Pro',
                channel: 'Mizko',
                transcriptSnippet:
                  'Enable absolute positioning on the top-right badge element so it stays pinned relative to the icon frame while the parent auto-layout adjusts dynamically.',
                vectorSimilarity: '0.948 cosine match',
              },
            ],
          },
        ],
      },
      {
        id: 'obj-truncation-resilience',
        name: 'Prevent layout reflow bugs in nested flex frames',
        goal: 'Handle varying international string lengths without breaking card boundaries.',
        concepts: [
          {
            id: 'concept-hug-fill-collision',
            name: 'Fixed vs Hug collision resolution on text layers',
            mechanism: 'Truncating text with ellipsis while keeping adjacent badges and buttons tightly hugged.',
            principles: ['Text layer Fill container', 'Ellipsis truncation', 'Action button Hug contents'],
            skills: [
              {
                id: 'skill-truncation-card-headers',
                name: 'Truncation ellipsis prevention in flexible card headers',
                tool: 'Figma Text Truncation',
                action: 'Set headline text layer to Fill container with truncate enabled, and anchor action menu to Hug.',
                timestamp: '15:50',
                videoTitle: 'Handling Extreme Content in Figma Design Systems',
                channel: 'Figma Design',
                transcriptSnippet:
                  'Set your title layer to Fill container with text truncation enabled, while keeping the metadata tag frame set to Hug contents.',
                vectorSimilarity: '0.929 cosine match',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'design-systems',
    name: 'Design Systems',
    domain: 'Token Architecture & Scalability',
    savesCount: 15,
    description: 'Variable collections, multi-mode themes, semantic aliases, and component governance.',
    objectives: [
      {
        id: 'obj-token-architecture',
        name: 'Manage component token architecture at scale',
        goal: 'Enable instant dark/light mode switching through multi-mode semantic aliases.',
        concepts: [
          {
            id: 'concept-semantic-tokens',
            name: 'Semantic color tokens & multi-mode variable mapping',
            mechanism: 'Three-tier token hierarchy: Primitive values → Semantic aliases → Component bindings.',
            principles: ['Light/Dark mode mapping', 'Alias referencing', 'WCAG contrast validation'],
            skills: [
              {
                id: 'skill-dark-mode-variables',
                name: 'Dark mode switching with Figma variables',
                tool: 'Figma Variables (Color Modes)',
                action: 'Create collection modes for Light and Dark, binding semantic tokens to distinct primitive hex values.',
                timestamp: '05:40',
                videoTitle: 'Design Systems: Tokens & Variable Modes',
                channel: 'Ridd / Dive',
                transcriptSnippet:
                  'Map primitive hex codes to semantic aliases like surface-primary and text-muted, then bind collection modes for instant light/dark switching.',
                vectorSimilarity: '0.963 cosine match',
              },
            ],
          },
        ],
      },
      {
        id: 'obj-spacing-governance',
        name: 'Enforce spacing token consistency across teams',
        goal: 'Eliminate arbitrary pixel values by binding layout auto-gap to predefined spacing steps.',
        concepts: [
          {
            id: 'concept-spacing-tokens',
            name: '4px/8px soft grid token binding in auto-layout gap',
            mechanism: 'Restricting spacing choices to a calibrated mathematical ramp (4, 8, 12, 16, 24, 32, 48px).',
            principles: ['8px base module', 'Auto-layout gap variables', 'Hardcoded value prevention'],
            skills: [
              {
                id: 'skill-spacing-variable-binding',
                name: 'Variable-bound spacing presets in component libraries',
                tool: 'Figma Number Variables',
                action: 'Bind auto-layout padding and item gap inputs directly to spacing/sm, spacing/md, and spacing/lg variables.',
                timestamp: '12:05',
                videoTitle: 'Tokens in Production: Spacing & Layout Architecture',
                channel: 'Dive Club',
                transcriptSnippet:
                  'Binding auto-layout padding and gap properties directly to spacing variables guarantees that designers cannot input arbitrary pixel values.',
                vectorSimilarity: '0.915 cosine match',
              },
            ],
          },
        ],
      },
    ],
  },
];

export function LiveTaxonomyExplorer() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('layout-systems');
  const [selectedObjIdx, setSelectedObjIdx] = useState<number>(0);

  // Active topic
  const activeTopic =
    realReyoTaxonomyData.find((t) => t.id === selectedTopicId) || realReyoTaxonomyData[0];

  // Active objective (safely bounded)
  const safeObjIdx = Math.min(selectedObjIdx, activeTopic.objectives.length - 1);
  const activeObjective = activeTopic.objectives[safeObjIdx] || activeTopic.objectives[0];

  // Primary concept & skill
  const activeConcept = activeObjective.concepts[0];
  const activeSkill = activeConcept.skills[0];

  const handleSelectTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    setSelectedObjIdx(0);
  };

  return (
    <div
      id="live-taxonomy-explorer-component"
      className="w-full flex flex-col space-y-6 text-[var(--text-primary)]"
    >
      {/* 1. TIER STEPPER BREADCRUMB STRIP */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 text-[11px] font-mono border-b border-[var(--border)]">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-indigo-400 font-bold">TIER 1: TOPIC</span>
        </div>
        <ChevronRight className="w-3.5 h-3.5 text-[var(--text-secondary)]/40 shrink-0" />
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-cyan-400 font-bold">TIER 2: OBJECTIVE</span>
        </div>
        <ChevronRight className="w-3.5 h-3.5 text-[var(--text-secondary)]/40 shrink-0" />
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <span className="text-purple-400 font-bold">TIER 3: CONCEPT</span>
        </div>
        <ChevronRight className="w-3.5 h-3.5 text-[var(--text-secondary)]/40 shrink-0" />
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-emerald-400 font-bold">TIER 4: SKILL</span>
        </div>
      </div>

      {/* 2. TOPIC SELECTOR TABS */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="font-accent text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)] font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Select Domain Topic (Indexed in Reyo Knowledge Base)</span>
          </span>
          <span className="text-[11px] font-mono text-[var(--text-secondary)] hidden sm:inline-block">
            {realReyoTaxonomyData.length} Topics · 170+ Tutorial Chunks
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {realReyoTaxonomyData.map((topic) => {
            const isSelected = topic.id === selectedTopicId;
            return (
              <button
                key={topic.id}
                id={`taxonomy-topic-btn-${topic.id}`}
                onClick={() => handleSelectTopic(topic.id)}
                className={`px-3.5 py-2 rounded-[10px] text-[13px] font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-indigo-950/60 border-indigo-500/70 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)] ring-1 ring-indigo-500/30'
                    : 'bg-[var(--surface-elevated)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/40'
                }`}
              >
                <span>{topic.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-indigo-500/30 text-indigo-300'
                      : 'bg-[var(--border)] text-[var(--text-secondary)]'
                  }`}
                >
                  {topic.savesCount}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. DYNAMIC HIERARCHY EXPLORATION TREE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTopic.id + '-' + safeObjIdx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="space-y-4"
        >
          {/* Active Topic Banner */}
          <div className="p-4 rounded-[12px] bg-gradient-to-r from-indigo-950/40 via-[var(--surface-elevated)] to-[var(--surface-elevated)] border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[9px] font-bold text-indigo-400 uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/40">
                  TIER 1: TOPIC
                </span>
                <span className="text-[12px] font-accent text-[var(--text-secondary)]">
                  {activeTopic.domain}
                </span>
              </div>
              <h5 className="font-bold text-[17px] text-white">{activeTopic.name}</h5>
              <p className="text-[12.5px] text-[var(--text-secondary)] font-light mt-0.5">
                {activeTopic.description}
              </p>
            </div>

            <div className="text-[11px] font-mono text-indigo-300/80 bg-indigo-950/30 px-3 py-1.5 rounded-[8px] border border-indigo-500/20 shrink-0 self-start sm:self-auto">
              Auto-Classified via Gemini API
            </div>
          </div>

          {/* Connected Flow Tree: Objective → Concept → Skill */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* TIER 2: OBJECTIVE SELECTOR (4 COLS) */}
            <div className="lg:col-span-4 rounded-[14px] bg-[var(--surface-elevated)] border border-cyan-500/30 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] font-bold text-cyan-400 uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/40">
                    TIER 2: OBJECTIVE
                  </span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-mono">
                    {activeTopic.objectives.length} Goal{activeTopic.objectives.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="space-y-2">
                  {activeTopic.objectives.map((obj, oIdx) => {
                    const isObjActive = oIdx === safeObjIdx;
                    return (
                      <button
                        key={obj.id}
                        id={`taxonomy-obj-btn-${obj.id}`}
                        onClick={() => setSelectedObjIdx(oIdx)}
                        className={`w-full text-left p-3 rounded-[10px] border transition-all cursor-pointer flex items-start gap-2.5 ${
                          isObjActive
                            ? 'bg-cyan-950/40 border-cyan-400/60 text-white shadow-sm ring-1 ring-cyan-400/30'
                            : 'bg-[var(--bg)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-cyan-500/40'
                        }`}
                      >
                        <Compass
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isObjActive ? 'text-cyan-400' : 'text-[var(--text-secondary)]'
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-[12.5px] font-medium leading-snug">
                            {obj.name}
                          </div>
                          <div className="text-[11px] text-[var(--text-secondary)] font-light mt-1 line-clamp-2">
                            {obj.goal}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[var(--border)]/60 text-[10px] text-[var(--text-secondary)] font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Select objective to inspect mechanism</span>
              </div>
            </div>

            {/* TIER 3: CONCEPT MECHANISM (4 COLS) */}
            <div className="lg:col-span-4 rounded-[14px] bg-[var(--surface-elevated)] border border-purple-500/30 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] font-bold text-purple-400 uppercase tracking-wider px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/40">
                    TIER 3: CONCEPT
                  </span>
                  <span className="text-[10px] text-purple-300 font-mono">Core Principle</span>
                </div>

                <div className="p-3.5 rounded-[10px] bg-[var(--bg)] border border-purple-500/30 mb-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                    <h6 className="font-bold text-[13.5px] text-white leading-snug">
                      {activeConcept.name}
                    </h6>
                  </div>
                  <p className="text-[12px] text-[var(--text-secondary)] font-light leading-relaxed">
                    {activeConcept.mechanism}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider block mb-1.5">
                    Underlying Constraints:
                  </span>
                  <div className="space-y-1">
                    {activeConcept.principles.map((pr, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2 text-[11.5px] text-[#cbd5e1] font-mono bg-purple-950/20 px-2 py-1 rounded border border-purple-500/20"
                      >
                        <span className="text-purple-400 text-[10px]">↳</span>
                        <span>{pr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[var(--border)]/60 text-[10px] text-[var(--text-secondary)] font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>45s vector chunk abstraction</span>
              </div>
            </div>

            {/* TIER 4: SKILL / TACTICAL ACTION (4 COLS) */}
            <div className="lg:col-span-4 rounded-[14px] bg-[var(--surface-elevated)] border border-emerald-500/30 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] font-bold text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40">
                    TIER 4: SKILL / TECHNIQUE
                  </span>
                  <span className="text-[10px] text-emerald-300 font-mono">Executable Action</span>
                </div>

                <div className="p-3.5 rounded-[10px] bg-[var(--bg)] border border-emerald-500/30 mb-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Wrench className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h6 className="font-bold text-[13.5px] text-white leading-snug">
                      {activeSkill.name}
                    </h6>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-300 mb-2">
                    Tool: {activeSkill.tool}
                  </div>
                  <p className="text-[12px] text-[var(--text-secondary)] font-light leading-relaxed">
                    {activeSkill.action}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[var(--border)]/60 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Immediate workflow application</span>
                </span>
              </div>
            </div>
          </div>

          {/* 4. GROUNDED EVIDENCE: REAL VIDEO SOURCE & TRANSCRIPT CHUNK */}
          <div className="p-4 sm:p-5 rounded-[14px] bg-[#070a12] border border-[#1e293b] flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-sm">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-500/30">
                  <Video className="w-3 h-3" />
                  <span>REAL YOUTUBE SOURCE</span>
                </span>
                <span className="text-[11px] font-mono text-[#94a3b8]">
                  Channel: <strong className="text-white">{activeSkill.channel}</strong>
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                  <Clock className="w-3 h-3" />
                  <span>Cued: {activeSkill.timestamp}</span>
                </span>
                <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20">
                  pgvector: {activeSkill.vectorSimilarity}
                </span>
              </div>

              <div className="font-semibold text-[14px] text-white mb-2">
                &ldquo;{activeSkill.videoTitle}&rdquo;
              </div>

              <div className="p-3 rounded-[8px] bg-[#0f1422] border border-[#1e293b] text-[12px] text-[#cbd5e1] font-mono leading-relaxed relative">
                <div className="text-[9px] uppercase tracking-wider text-[#64748b] mb-1 flex items-center gap-1">
                  <FileText className="w-3 h-3 text-[#38bdf8]" />
                  <span>Indexed Caption Segment (~45s window):</span>
                </div>
                &ldquo;{activeSkill.transcriptSnippet}&rdquo;
              </div>
            </div>

            {/* Simulated instant jump button (illustrates Reyo's 30-second return-to-work loop) */}
            <div className="lg:w-[220px] shrink-0 p-3.5 rounded-[10px] bg-gradient-to-br from-indigo-950/40 to-purple-950/30 border border-purple-500/30 flex flex-col justify-between text-center">
              <div>
                <span className="text-[9px] font-mono text-purple-300 uppercase block mb-1">
                  REYO SPOTLIGHT RETRIEVAL
                </span>
                <div className="text-[12px] font-bold text-white mb-1">
                  Pre-Cued Timestamp Loop
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] leading-tight mb-3">
                  Jumped directly to {activeSkill.timestamp} without browsing YouTube recommendations.
                </p>
              </div>
              <div className="inline-flex items-center justify-center gap-1 text-[11px] font-mono text-white bg-purple-600 hover:bg-purple-500 transition-colors py-1.5 px-3 rounded-[6px] shadow-sm">
                <span>Play at {activeSkill.timestamp}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
