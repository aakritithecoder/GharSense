import React from 'react';
import { X, Cpu, ShieldCheck, Check, Radio, Activity, Wrench } from 'lucide-react';

interface TechSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderKit: () => void;
}

export const TechSpecsModal: React.FC<TechSpecsModalProps> = ({ isOpen, onClose, onOrderKit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#f8f9ff] rounded-3xl shadow-2xl border border-[#d3e4fe] overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#131b2e] text-white p-6 flex items-center justify-between border-b border-[#213145]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00687a] flex items-center justify-center text-white">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-sm text-[20px] font-bold">Hardware &amp; Sensor Specifications</h3>
              <p className="text-[12.5px] text-[#7c839b]">
                BIS-certified industrial telemetry engineered for Indian plumbing conditions
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto text-[13.5px]">
          
          {/* Module 1: Ultrasonic Transducer */}
          <div className="rounded-2xl bg-white p-6 border border-[#d3e4fe] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-[16px] text-[#0b1c30]">
                <Activity className="w-5 h-5 text-[#00687a]" />
                <span>GharSense Ultrasonic Clamp-on Transducer</span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-[#e8fbf0] text-[#009668] text-[11px] font-bold">
                Non-Invasive Clamp
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#45464d]">
              <div className="p-3 rounded-xl bg-[#eff4ff] space-y-1">
                <span className="font-bold text-[#0b1c30] block">Pipe Compatibility</span>
                <p>0.5" to 2.5" OD pipes (CPVC, UPVC, GI, Copper &amp; HDPE)</p>
              </div>
              <div className="p-3 rounded-xl bg-[#eff4ff] space-y-1">
                <span className="font-bold text-[#0b1c30] block">Acoustic Frequency</span>
                <p>1.0 MHz piezoelectric transit-time differential</p>
              </div>
              <div className="p-3 rounded-xl bg-[#eff4ff] space-y-1">
                <span className="font-bold text-[#0b1c30] block">Enclosure Rating</span>
                <p>IP67 UV-stabilized exterior terrace casing (-10°C to +65°C)</p>
              </div>
              <div className="p-3 rounded-xl bg-[#eff4ff] space-y-1">
                <span className="font-bold text-[#0b1c30] block">Coupling Method</span>
                <p>Reusable silicone acoustic pad (zero glue, zero pipe cuts)</p>
              </div>
            </div>
          </div>

          {/* Module 2: Wireless Gateway & Relay */}
          <div className="rounded-2xl bg-white p-6 border border-[#d3e4fe] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-[16px] text-[#0b1c30]">
                <Radio className="w-5 h-5 text-[#00687a]" />
                <span>Smart Cutoff Relay &amp; Mesh Gateway</span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-[#eff4ff] text-[#00687a] text-[11px] font-bold">
                Relay Switch 16A / 25A
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#45464d]">
              <div className="p-3 rounded-xl bg-[#eff4ff] space-y-1">
                <span className="font-bold text-[#0b1c30] block">Relay Cutoff Latency</span>
                <p>&lt; 800 milliseconds response on high-tank alert</p>
              </div>
              <div className="p-3 rounded-xl bg-[#eff4ff] space-y-1">
                <span className="font-bold text-[#0b1c30] block">Power Load Rating</span>
                <p>Up to 2.5 HP single-phase / 3-phase starter integration</p>
              </div>
              <div className="p-3 rounded-xl bg-[#eff4ff] space-y-1">
                <span className="font-bold text-[#0b1c30] block">Connectivity</span>
                <p>2.4 GHz Wi-Fi 802.11 b/g/n with BLE 5.2 rapid pairing</p>
              </div>
              <div className="p-3 rounded-xl bg-[#eff4ff] space-y-1">
                <span className="font-bold text-[#0b1c30] block">Offline Safeguard</span>
                <p>48-hour internal EEPROM flash buffer during Wi-Fi downtime</p>
              </div>
            </div>
          </div>

          {/* Standards & Certifications */}
          <div className="p-4 rounded-2xl bg-[#acedff]/30 border border-[#acedff] flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#004e5c] font-bold">
              <ShieldCheck className="w-5 h-5" />
              <span>Certified to BIS IS 13252 (Part 1) / IEC 60950-1 Standards</span>
            </div>
            <span className="text-[12px] font-semibold text-[#00687a]">Made in Pune &amp; Bengaluru</span>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="py-2.5 px-5 rounded-xl text-[#45464d] font-bold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Close Specs
            </button>
            <button
              onClick={() => {
                onClose();
                onOrderKit();
              }}
              className="py-2.5 px-6 rounded-xl bg-[#00687a] text-white font-bold hover:bg-[#004e5c] transition-colors cursor-pointer"
            >
              Order Kit – ₹1,199
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
