import React, { useState } from 'react';
import { MessageCircle, X, Send, Play, Volume2, ShieldCheck, CheckCheck } from 'lucide-react';
import { playHindiVoicePrompt, playAlertChime } from '../utils/audio';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string; isAlert?: boolean }>>([
    {
      sender: 'bot',
      text: 'Namaste! 👋 Welcome to GharSense Instant WhatsApp Support. You can ask about our hardware, check demo telemetry, or trigger a live simulation.',
      time: 'Just now',
    },
  ]);

  const handleSend = (customText?: string) => {
    const msg = (customText || inputVal).trim();
    if (!msg) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'user' as const, text: msg, time };

    let botResponse = 'Thank you for reaching out! A GharSense IoT support engineer is on standby. Our systems are monitoring 450+ societies right now.';
    let isAlert = false;

    const lower = msg.toLowerCase();
    if (lower.includes('leak') || lower.includes('overflow') || lower.includes('simulate')) {
      playAlertChime();
      botResponse = '🚨 [SIMULATION ALERT] Overhead Tank 3 (Block B) at 99.8%! Auto-cutoff relay triggered in 0.79s. Water pump safely disconnected. Zero spillage recorded.';
      isAlert = true;
    } else if (lower.includes('price') || lower.includes('cost') || lower.includes('kit')) {
      botResponse = '🏷️ Starter Kit: ₹1,199 (Save 40%). Complete Home Shield: ₹1,799 (Most Popular with power CT & voice alert). Society plans start from ₹499/flat in bulk.';
    } else if (lower.includes('pipe') || lower.includes('plumb') || lower.includes('install')) {
      botResponse = '🔧 100% Non-Invasive: Our ultrasonic acoustic transducer clamps on the outside of 0.5" to 2.5" PVC/GI/Copper pipes. Zero pipe cuts, zero water shutoff required!';
    } else if (lower.includes('hi') || lower.includes('hello')) {
      botResponse = 'Hello! Would you like to check our Starter Kit (₹1,199), calculate society water savings, or hear a live voice alert in Hindi?';
    }

    setMessages((prev) => [...prev, userMsg, { sender: 'bot', text: botResponse, time, isAlert }]);
    setInputVal('');
  };

  const handleVoicePlay = () => {
    setIsPlayingAudio(true);
    playHindiVoicePrompt(() => {
      setIsPlayingAudio(false);
    });
  };

  return (
    <aside aria-label="WhatsApp Support Assistant" className="fixed bottom-6 right-6 z-40">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            playAlertChime();
          }}
          className="group flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="text-[13.5px] font-semibold pr-1">WhatsApp Helpdesk</span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </button>
      )}

      {/* Expandable WhatsApp Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] rounded-3xl bg-white shadow-2xl border border-[#d3e4fe] overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#075e54] text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center font-bold text-white shadow-sm">
                <span className="material-symbols-outlined text-lg">water_drop</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-[14px] leading-tight">GharSense WhatsApp</h4>
                  <span className="material-symbols-outlined text-[#25D366] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                </div>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] inline-block animate-pulse"></span>
                  Online • Instant Bot &amp; Support
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-black/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Voice Demo Banner */}
          <div className="bg-[#eff4ff] px-4 py-2.5 border-b border-[#d3e4fe] flex items-center justify-between text-[12px] text-[#00687a]">
            <span className="font-semibold">Hear Hindi Audio Alert:</span>
            <button
              onClick={handleVoicePlay}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#25D366] text-white font-bold text-[11px] hover:bg-[#1faa4f] shadow-2xs transition-colors cursor-pointer"
            >
              {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3 h-3 fill-current" />}
              <span>Play Sample</span>
            </button>
          </div>

          {/* Message History */}
          <div className="p-4 bg-[#e5ddd5]/30 space-y-3 h-72 overflow-y-auto">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl text-[12.5px] leading-[18px] max-w-[85%] shadow-xs ${
                  m.sender === 'user'
                    ? 'ml-auto bg-[#dcf8c6] text-[#0b1c30] rounded-tr-none'
                    : m.isAlert
                    ? 'bg-white border-l-4 border-l-[#ba1a1a] text-[#ba1a1a] font-medium'
                    : 'mr-auto bg-white text-[#0b1c30] rounded-tl-none border border-gray-100'
                }`}
              >
                <p>{m.text}</p>
                <div className="text-[10px] text-gray-500 text-right mt-1 flex items-center justify-end gap-1">
                  <span>{m.time}</span>
                  {m.sender === 'user' && <CheckCheck className="w-3 h-3 text-[#34B7F1]" />}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Test Prompt Chips */}
          <div className="px-3 py-2 bg-[#f0f2f5] border-t border-gray-200 flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <button
              onClick={() => handleSend('Simulate Tank Overflow Alert 🚨')}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-emerald-50 text-emerald-800 font-medium border border-gray-200 flex-shrink-0 cursor-pointer shadow-2xs"
            >
              🚨 Simulate Overflow
            </button>
            <button
              onClick={() => handleSend('How does non-invasive clamp work?')}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 text-[#00687a] font-medium border border-gray-200 flex-shrink-0 cursor-pointer shadow-2xs"
            >
              🔧 Pipe Clamp Specs
            </button>
            <button
              onClick={() => handleSend('What is the price for Starter Kit?')}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-gray-50 text-gray-700 font-medium border border-gray-200 flex-shrink-0 cursor-pointer shadow-2xs"
            >
              🏷️ Kit Pricing
            </button>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask GharSense support..."
              className="flex-1 px-3 py-2 rounded-xl bg-[#eff4ff]/60 border border-[#d3e4fe] text-[13px] text-[#0b1c30] outline-none focus:bg-white focus:border-[#00687a]"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#1faa4f] transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
