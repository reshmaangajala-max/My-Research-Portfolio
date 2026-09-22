import { useState, useRef } from 'react';
import { Play, Pause, ExternalLink, Sparkles } from 'lucide-react';

interface TimestampItem {
  id: string;
  time: string;
  seconds: number;
  title: string;
  description?: string;
  isProjectRelevant?: boolean;
}

const timestamps: TimestampItem[] = [
  {
    id: 'ts-0',
    time: '0:00',
    seconds: 0,
    title: 'Introduction and project brief',
  },
  {
    id: 'ts-1',
    time: '1:45',
    seconds: 105,
    title: 'Competitor analysis of existing KYC flows',
  },
  {
    id: 'ts-2',
    time: '3:20',
    seconds: 200,
    title: 'User pain points in verification processes',
  },
  {
    id: 'ts-3',
    time: '5:38',
    seconds: 338,
    title: 'Document upload screen design decisions',
    description:
      "Breaks down the exact layout choices for the ID upload card — camera trigger vs gallery upload, progress indicator placement, and error state handling. Directly maps to the ID Upload Screen V3 frame you're designing.",
    isProjectRelevant: true,
  },
  {
    id: 'ts-4',
    time: '8:12',
    seconds: 492,
    title: 'Selfie verification and liveness check UX',
  },
  {
    id: 'ts-5',
    time: '11:30',
    seconds: 690,
    title: 'Error handling and retry flows',
  },
  {
    id: 'ts-6',
    time: '14:05',
    seconds: 845,
    title: 'Trust signals and microcopy for data safety',
  },
];

export function TimestampPlayerScreen() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTimestampIndex, setActiveTimestampIndex] = useState(0);

  // When time updates, determine which timestamp row should be highlighted
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 13.63;

    // Map playback to the 845s timestamp spectrum
    const effectiveSecs = duration < 845 ? (current / duration) * 845 : current;

    let activeIdx = 0;
    for (let i = timestamps.length - 1; i >= 0; i--) {
      if (effectiveSecs >= timestamps[i].seconds) {
        activeIdx = i;
        break;
      }
    }
    setActiveTimestampIndex(activeIdx);
  };

  // Click row to seek video to that timestamp
  const handleSeek = (index: number) => {
    setActiveTimestampIndex(index);
    if (!videoRef.current) return;
    const duration = videoRef.current.duration || 13.63;
    const targetSec = timestamps[index].seconds;
    const seekTime = duration < 845 ? (targetSec / 845) * duration : targetSec;

    videoRef.current.currentTime = seekTime;
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full bg-[#090614] rounded-2xl border border-[#231844] overflow-hidden text-white shadow-2xl flex flex-col">
      {/* App Mockup Top Bar */}
      <div className="px-4 py-3 sm:px-6 bg-[#0d091e]/90 border-b border-[#231844] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-[#181230] hover:bg-[#251b47] flex items-center justify-center text-slate-300 transition-colors"
            aria-label="Back"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white shadow-sm" />
            </div>
            <span className="font-bold text-[16px] tracking-tight text-white">Reyo</span>
          </div>
        </div>

        {/* Search Input Bar Mockup */}
        <div className="hidden sm:flex items-center gap-2 bg-[#140e28] border border-[#2e1d52] px-4 py-1.5 rounded-full w-full max-w-[420px]">
          <span className="text-slate-400 text-sm">🔍</span>
          <span className="text-[13px] text-slate-300 truncate">Search for fintech onboarding...</span>
        </div>

        {/* User Pill */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-purple-950 border border-purple-500/40 flex items-center justify-center text-[12px] font-bold text-purple-200">
            R
          </div>
          <button
            type="button"
            className="text-slate-400 hover:text-white transition-colors text-sm px-1.5"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        {/* Video Player Container */}
        <div className="relative w-full rounded-xl overflow-hidden bg-black/90 border border-[#2e1e55] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center group">
          <video
            ref={videoRef}
            preload="metadata"
            playsInline
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-contain bg-black"
          >
            <source src="/assets/videos/timestamp-player.mp4" type="video/mp4" />
            <source src="/assets/videos/timestamp plahyer.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Centered Play overlay when paused */}
          {!isPlaying && (
            <button
              type="button"
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-purple-600/80 hover:bg-purple-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all backdrop-blur-sm cursor-pointer z-10"
              aria-label="Play video"
            >
              <Play className="w-7 h-7 fill-white translate-x-0.5" />
            </button>
          )}
        </div>

        {/* Video Meta Header & Watch Original Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1c1630]">
          <div>
            <h4 className="text-[18px] sm:text-[22px] font-bold text-white tracking-tight leading-snug">
              Designing a KYC Onboarding Flow — Full UX Case Study
            </h4>
            <div className="flex items-center gap-2.5 mt-2 text-[13px] text-slate-400">
              <span className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">
                MI
              </span>
              <span className="font-semibold text-slate-200">Mizko</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-red-600 text-[10px] font-bold text-white tracking-wider">
                YT
              </span>
              <span>•</span>
              <span>Saved 1 month ago</span>
            </div>
          </div>

          {/* Watch Original ↗ */}
          <a
            href="https://www.youtube.com/results?search_query=Mizko+Designing+a+KYC+Onboarding+Flow"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-center inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#18132e] border border-[#3d2a63] hover:border-purple-500 hover:bg-[#241a47] text-white text-[13px] font-semibold transition-all shadow-sm"
          >
            <span>Watch Original</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
          </a>
        </div>

        {/* Timestamps Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <h5 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight">
                Timestamps
              </h5>
              <span className="text-[12px] font-mono text-purple-300/70 bg-purple-950/50 border border-purple-800/40 px-2 py-0.5 rounded-full">
                Interactive Seek
              </span>
            </div>
            <span className="text-[12px] text-slate-400">
              Click any chapter to jump
            </span>
          </div>

          <div className="space-y-2">
            {timestamps.map((ts, idx) => {
              const isSelected = activeTimestampIndex === idx;

              if (isSelected) {
                return (
                  <div
                    key={ts.id}
                    onClick={() => handleSeek(idx)}
                    className="group cursor-pointer rounded-xl bg-[#1b1236] border-2 border-[#7c3aed] p-3.5 sm:p-4 transition-all relative shadow-lg shadow-purple-950/30"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="w-1.5 self-stretch bg-[#a855f7] rounded-full" />
                        <div>
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-[14px] sm:text-[15px] font-bold text-[#c084fc]">
                              {ts.time}
                            </span>
                            <span className="text-[14px] sm:text-[15.5px] font-bold text-white">
                              {ts.title}
                            </span>
                          </div>

                          {ts.description && (
                            <p className="mt-2 text-[13px] sm:text-[14px] text-slate-300 font-normal leading-relaxed max-w-[800px]">
                              {ts.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {ts.isProjectRelevant && (
                        <div className="shrink-0 hidden sm:flex items-center gap-1 text-[12px] font-semibold text-[#c084fc] bg-purple-950/80 border border-purple-700/50 px-2.5 py-1 rounded-full">
                          <Sparkles className="w-3 h-3 text-[#c084fc]" />
                          <span>Relevant to your project</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={ts.id}
                  onClick={() => handleSeek(idx)}
                  className="group cursor-pointer rounded-lg px-3.5 py-2.5 flex items-center justify-between border-b border-[#1c1630] hover:bg-[#140e28]/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[13px] sm:text-[14px] font-semibold text-[#c084fc]/90 group-hover:text-[#c084fc]">
                      {ts.time}
                    </span>
                    <span className="text-[13.5px] sm:text-[14.5px] text-slate-300 group-hover:text-white font-medium transition-colors">
                      {ts.title}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    Seek →
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
