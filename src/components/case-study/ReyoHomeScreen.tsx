import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

export function ReyoHomeScreen() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className="relative w-full rounded-2xl overflow-hidden bg-[#070b14] border border-[#1e293b] shadow-2xl flex items-center justify-center aspect-[1916/894]">
      <video
        ref={videoRef}
        preload="metadata"
        playsInline
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-contain bg-[#070b14]"
      >
        <source src="/assets/videos/reyo-home.mp4" type="video/mp4" />
        <source src="/assets/videos/reyo home - Trim.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Centered Play Button when paused */}
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
  );
}
