import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Send, CheckCheck, RefreshCw, Zap, Shield, Sparkles } from 'lucide-react';
import { playHindiVoicePrompt } from '../utils/audio';

interface HeroSectionProps {
  onOrderKit: () => void;
  onBookDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderKit, onBookDemo }) => {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [chatCommand, setChatCommand] = useState('');
  const [chatLog, setChatLog] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([]);

  const handlePlayVoice = () => {
    setIsPlayingVoice(true);
    playHindiVoicePrompt(() => {
      setIsPlayingVoice(false);
    });
  };

  const handleCommandSend = (cmdToSend?: string) => {
    const text = (cmdToSend || chatCommand).trim();
    if (!text) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'user' as const, text, time };
    
    let botReply = '⚡ Sensor Status: All 3 Overhead tanks optimal. Tank 1: 94%, Tank 2: 78%, Sump: 62%. Motor: Standby.';
    const lower = text.toLowerCase();
    if (lower.includes('status')) {
      botReply = '🟢 Telemetry Live: Line Pressure: 2.1 bar | Inflow: 0.0 LPM | Relay Cutoff: Armed & Operational.';
    } else if (lower.includes('cutoff') || lower.includes('motor')) {
      botReply = '🛑 Manual Auto-Cutoff executed. Power cut to 1.5 HP Monoblock pump. Terrace overflow risk: 0%.';
    } else if (lower.includes('bill') || lower.includes('power')) {
      botReply = '📊 Energy Log: 14.8 kWh consumed today. Dry-run lockout saved an estimated ₹340 this week.';
    } else if (lower.includes('tanks')) {
      botReply = '💧 Tank Levels: Overhead 1 (2,000L): 98% (Auto-stop) | Underground Sump (10,000L): 85%.';
    }

    setChatLog((prev) => [...prev, userMsg, { sender: 'bot', text: botReply, time }]);
    setChatCommand('');
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f9ff] pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Ambient Light Glow behind hero content */}
      <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-[#57dffe]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#d3e4fe]/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#acedff] text-[#001f26] font-label-badge text-[11px] font-bold tracking-wider uppercase shadow-sm">
              <span className="material-symbols-outlined text-base text-[#00687a]">bolt</span>
              <span>Next-Gen IoT Utility Guardian | Built for Indian Homes &amp; CHSs</span>
            </div>

            <h1 className="font-display-hero text-[34px] sm:text-[42px] lg:text-[54px] lg:leading-[62px] text-[#0b1c30] tracking-tight font-extrabold">
              Smart Utility &amp;{' '}
              <span className="text-[#00687a] underline decoration-[#00687a]/30 underline-offset-8">
                Leak Monitoring
              </span>{' '}
              for Every Household.
            </h1>

            <p className="font-body-xl text-[17px] sm:text-[18px] leading-[28px] text-[#45464d] max-w-xl">
              Stop water overflows and cut surging power bills with plug-and-play retrofit sensors. No pipe cutting, zero electrician rewiring, and instant WhatsApp audio alerts for your whole family.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOrderKit}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#00687a] text-white font-label-md text-[15px] font-bold tracking-wide shadow-[0_8px_20px_rgba(0,104,122,0.3)] hover:bg-[#004e5c] hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Order Your Starter Kit – ₹1,199</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>

              <button
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-[#00687a] font-label-md text-[15px] font-bold shadow-sm border border-[#d3e4fe] hover:bg-[#e5eeff] hover:text-[#004e5c] transition-all cursor-pointer"
              >
                <span>Book a Society Demo</span>
                <span className="material-symbols-outlined text-lg">apartment</span>
              </button>
            </div>

            {/* Micro Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#eff4ff] text-[#45464d] font-label-badge text-[12px] border border-[#d3e4fe]/40">
                <span className="material-symbols-outlined text-amber-500 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="text-[#0b1c30] font-bold">4.9/5</span> from 12,000+ Flats &amp; 450+ CHSs
              </div>

              <div className="flex items-center gap-1.5 text-[#45464d] font-body-sm text-[13px]">
                <span className="material-symbols-outlined text-[#00687a] text-base">check_circle</span>
                <span>BIS Certified Hardware</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#45464d] font-body-sm text-[13px]">
                <span className="material-symbols-outlined text-[#00687a] text-base">check_circle</span>
                <span>Works on PVC, GI &amp; Copper</span>
              </div>
            </div>
          </div>

          {/* Right Visual Mockup (Dual Device Presentation) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Hardware Image Card */}
              <div className="sm:col-span-7 relative group rounded-2xl overflow-hidden bg-white shadow-[0_12px_32px_rgba(15,23,42,0.12)] border border-[#d3e4fe]/60">
                <div className="relative h-80 sm:h-96 w-full">
                  <img
                    alt="GharSense ultrasonic non-invasive clamp-on sensor attached to plumbing riser"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSrAc_jYnJ8OXJTT8GlI6FokAPGrpBv2sF-E5G16mTAAU_C3moVLJKqhF4c-DAxU94dYL4rQ4dUALp51xgUqIkdZEOt_eGmeIkWSvPhUP_gQj4nTbXbR_6IIOYy8MMvCuc7N8lrUwmPUkWeODNQI8uf7Vr1q1QyTwO8AC7G5Fra8OZYjg25-xuLcqDC-UZyUMOeYKPK4E5qoOKByJabugVn_X3RsTkDz2F6ic-I9WXrMdEBvNg6mS2Mg"
                  />
                  
                  {/* Floating live badge on sensor */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131b2e]/90 backdrop-blur-md text-white font-label-badge text-[11px] shadow-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6ffbbe] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6ffbbe]"></span>
                      </span>
                      <span>Pipe Sensor Online (Flow: 0.0 LPM / Normal)</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm text-[#0b1c30] font-label-badge text-[11px] font-bold shadow-sm border border-[#d3e4fe]/60">
                    <span className="material-symbols-outlined text-[#00687a] text-sm">build_circle</span>
                    <span>Zero Pipe Cuts Required</span>
                  </div>
                </div>
              </div>

              {/* Simulated WhatsApp Alert Mockup Phone */}
              <div className="sm:col-span-5 sm:-ml-8 z-10 rounded-3xl bg-white p-3 shadow-[0_20px_40px_rgba(0,0,0,0.18)] border border-[#d3e4fe]/80">
                {/* Smartphone Bezel Shell */}
                <div className="rounded-2xl bg-[#dce9ff]/40 overflow-hidden shadow-inner border border-gray-100 flex flex-col">
                  
                  {/* Phone Top Bar */}
                  <div className="bg-[#000000] text-white px-3.5 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold shadow-sm">
                        <span className="material-symbols-outlined text-sm">water_drop</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-label-md text-[13px] font-bold text-white">GharSense Bot</span>
                          <span className="material-symbols-outlined text-[#25D366] text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                            verified
                          </span>
                        </div>
                        <p className="font-label-badge text-[10px] text-[#7c839b]">Verified Business • Instant</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#7c839b] text-base cursor-pointer">more_vert</span>
                  </div>

                  {/* Chat Canvas with WhatsApp Bubble Pattern */}
                  <div className="p-3 space-y-2.5 bg-[#e5ddd5]/45 max-h-[360px] overflow-y-auto">
                    <div className="text-center">
                      <span className="px-2 py-0.5 rounded-md bg-white/80 text-[#45464d] font-label-badge text-[10px] shadow-xs">
                        TODAY 06:42 AM
                      </span>
                    </div>

                    {/* Hindi Voice Prompt Simulation */}
                    <div className="rounded-xl bg-white p-2.5 shadow-sm space-y-1.5 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePlayVoice}
                          title="Click to play simulated voice alert"
                          className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#1faa4f] text-white flex items-center justify-center shadow transition-transform active:scale-95 cursor-pointer flex-shrink-0"
                        >
                          {isPlayingVoice ? (
                            <Volume2 className="w-4 h-4 animate-pulse" />
                          ) : (
                            <Play className="w-4 h-4 ml-0.5 fill-current" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className="h-2 w-full bg-[#e5eeff] rounded-full overflow-hidden">
                            <div className={`h-full bg-[#25D366] transition-all duration-300 ${isPlayingVoice ? 'w-full animate-pulse' : 'w-3/4'}`} />
                          </div>
                          <div className="flex items-center justify-between mt-1 text-[10px] text-[#45464d]">
                            <span>0:04 • Voice Alert (Hindi)</span>
                            <span className="font-bold text-[#00687a]">Click to listen</span>
                          </div>
                        </div>
                      </div>
                      <p className="font-body-sm text-[11px] text-[#0b1c30] italic bg-[#f8f9ff] p-1.5 rounded-lg border border-[#e5eeff]">
                        “Alert: Chhat ki paani ki tanki bhar gayi hai. Motor band kar di gayi hai.”
                      </p>
                    </div>

                    {/* High Priority Card WhatsApp Alert */}
                    <div className="rounded-xl bg-white p-3 shadow-sm space-y-1.5 border-l-4 border-l-[#ba1a1a]">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 font-label-badge text-[11px] font-bold text-[#ba1a1a]">
                          <span className="material-symbols-outlined text-xs text-[#ba1a1a]">emergency_home</span>
                          [AUTO-CUTOFF]
                        </span>
                        <span className="text-[10px] text-[#45464d]">06:42 AM</span>
                      </div>

                      <div className="space-y-0.5 text-[#0b1c30]">
                        <p className="font-bold text-[#ba1a1a] text-[12.5px]">🚨 Overhead Tank 100% Full!</p>
                        <p className="text-[11.5px] text-[#45464d]">⏱️ Auto cutoff relay activated in 0.8s.</p>
                        <p className="text-[11.5px] text-[#45464d]">
                          💧 <strong className="text-[#0b1c30]">420 Litres saved</strong> from overflow.
                        </p>
                        <p className="text-[11.5px] text-[#45464d]">⚡ 1.5 HP Monoblock motor safely isolated.</p>
                      </div>

                      <div className="pt-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#e8fbf0] text-[#009668] font-label-badge text-[10px] font-bold">
                          <span className="material-symbols-outlined text-xs">verified</span> Motor Safely Isolated • Zero Wastage
                        </span>
                      </div>
                    </div>

                    {/* Dynamic Chat Log Messages */}
                    {chatLog.map((msg, index) => (
                      <div
                        key={index}
                        className={`rounded-xl p-2.5 shadow-xs text-[11.5px] ${
                          msg.sender === 'user'
                            ? 'bg-[#dcf8c6] ml-6 text-[#0b1c30]'
                            : 'bg-white mr-4 text-[#0b1c30] border border-gray-100'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <div className="text-[9px] text-gray-500 text-right mt-0.5 flex items-center justify-end gap-1">
                          <span>{msg.time}</span>
                          {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-[#34B7F1]" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Command Suggestions */}
                  <div className="bg-[#f0f2f5] px-2 py-1.5 flex items-center gap-1 overflow-x-auto border-t border-gray-200">
                    {['/status', '/cutoff', '/tanks', '/bill'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => handleCommandSend(cmd)}
                        className="px-2 py-0.5 bg-white hover:bg-[#e5eeff] text-[#00687a] text-[10px] font-mono font-bold rounded-md shadow-2xs border border-gray-200 flex-shrink-0 cursor-pointer"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>

                  {/* Bottom Message Input Bar */}
                  <div className="bg-white px-3 py-2 flex items-center justify-between text-[#45464d] border-t border-gray-100 gap-2">
                    <input
                      type="text"
                      value={chatCommand}
                      onChange={(e) => setChatCommand(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleCommandSend()}
                      placeholder="Type /status or message..."
                      className="text-[11.5px] w-full outline-none text-[#0b1c30] bg-transparent"
                    />
                    <button
                      onClick={() => handleCommandSend()}
                      className="p-1.5 rounded-full hover:bg-gray-100 text-[#00687a] cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
