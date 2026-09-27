import React, { useState } from 'react';
import { X, Play, Pause, Volume2, CheckCircle2, RotateCcw, Activity } from 'lucide-react';
import { VideoDemo } from '../types';
import { playAlertChime } from '../utils/audio';

interface VideoDemoModalProps {
  video: VideoDemo | null;
  onClose: () => void;
  onOrderKit: () => void;
}

export const VideoDemoModal: React.FC<VideoDemoModalProps> = ({ video, onClose, onOrderKit }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(45);

  if (!video) return null;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    playAlertChime();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#131b2e] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Top bar */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#00687a] text-white text-[11px] font-bold uppercase tracking-wider">
              {video.category}
            </span>
            <h3 className="font-bold text-[16px] text-white truncate">{video.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Canvas Presentation */}
        <div className="relative h-72 sm:h-96 w-full bg-black overflow-hidden group">
          <img
            src={video.image}
            alt={video.title}
            className="w-full h-full object-cover opacity-85"
          />

          {/* Interactive Play/Pause Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4">
            
            {/* Live Telemetry Overlay in Video */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-sm border border-white/15 text-[11.5px] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                <span>REC • 4K TELEMETRY FEED • {video.details.location}</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-sm border border-white/15 text-[11.5px] font-mono text-[#57dffe]">
                <Activity className="w-3.5 h-3.5" />
                <span>Sensor Frequency: 1.0 MHz</span>
              </div>
            </div>

            {/* Big Center Play/Pause toggle */}
            <button
              onClick={togglePlay}
              className="self-center w-16 h-16 rounded-full bg-[#00687a]/90 hover:bg-[#00687a] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1 fill-current" />}
            </button>

            {/* Video Player Controls */}
            <div className="space-y-2">
              {/* Scrubber Bar */}
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  setProgress(Math.round((clickX / rect.width) * 100));
                }}
                className="h-2 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer group/bar"
              >
                <div
                  className="h-full bg-[#00687a] transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-gray-300">
                <div className="flex items-center gap-3">
                  <span>{isPlaying ? '00:48' : '00:00'} / {video.duration.split(' ')[0]}</span>
                  <span className="text-[#57dffe]">Benchmark Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setProgress(0)} className="hover:text-white cursor-pointer">
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <Volume2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Breakdown Details */}
        <div className="p-6 space-y-6 max-h-[40vh] overflow-y-auto text-[13px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {video.details.metrics.map((m, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[11px] text-gray-400 block uppercase font-bold">{m.label}</span>
                <span className="text-[18px] font-extrabold text-[#57dffe]">{m.value}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-[14px] text-white">Installation &amp; Testing Sequence:</h5>
            <div className="space-y-1.5">
              {video.details.stepGuide.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
            <p className="text-[12px] text-gray-400">
              Hardware shown: GharSense Retrofit Clamp Unit + 16A Cutoff Module
            </p>
            <button
              onClick={() => {
                onClose();
                onOrderKit();
              }}
              className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#00687a] hover:bg-[#004e5c] text-white font-bold text-[13.5px] transition-colors cursor-pointer"
            >
              Order Same Kit – ₹1,199
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
