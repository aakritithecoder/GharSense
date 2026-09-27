import React from 'react';
import { VideoDemo } from '../types';

interface SocialProofProps {
  onPlayVideo: (video: VideoDemo) => void;
}

export const videoList: VideoDemo[] = [
  {
    id: 'vid-1',
    duration: '01:45 • Uncut Demonstration',
    category: 'Clamp Installation',
    title: '15-Min Retrofit Without Pipe Cutting',
    description: 'See how easily a resident snaps the acoustic sensor on an existing 1-inch PVC line with zero spanners or shutoff valves.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSLpnTnfUxb8FCET01twvhnBfhf6pFT_0SFudQtrep3orLEz5RfuIiHZUhbHw56f8SBKUCl79hlfQj1m1QAVNre_SpnsMK581Ri9NpMxQ7mpxL7DMj3_LF1woMvKCmIzLL5fJWXh3bAWti_oSzs3x0eEbAWjm2mLHhj6kLFPNMeeZ_TxcHH2jWAmZ8utARKcs-q7BBIkTpI6cBAom_zY3LV3DowNfLIgUj-hsM5xY0AOe_zpUxEGVc-w',
    details: {
      location: 'Kalyani Nagar, Pune',
      stepGuide: [
        'Wipe the exterior of the 1" plumbing line.',
        'Apply the acoustic coupling pad included in the kit.',
        'Snap the GharSense dual-latch ultrasonic transducer around the pipe.',
        'Plug in the Wi-Fi bridge to standard 5V USB.',
      ],
      metrics: [
        { label: 'Time Elapsed', value: '4 mins 20 sec' },
        { label: 'Tools Needed', value: 'None (Tool-free)' },
        { label: 'Plumbing Disruption', value: 'Zero (Water stays on)' },
      ],
    },
  },
  {
    id: 'vid-2',
    duration: '00:58 • Live Benchmark',
    category: 'Real Overflow Test',
    title: 'Real Overflow WhatsApp Trigger Test',
    description: 'Instant trigger execution: Within 800ms of top water contact, relay disconnects the pump and sends an audio WhatsApp message.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm9InQ8o4sMdEHhZch4Pk649geYBZuqCXdYLGG5S1b7sQK_r0AYOxcRitAmBkr3i-qJYHGbfJHafsSVU-3eYp0lHqy_To0_UsYBGJCilSPRGb-W5Z6zyGMDbRIsQHsINpjRi72P6BA_IMBmH4YdgyyKMKC41BvzCtGwqr_IVufYtQ9AMATCpvHOsvprIVHDkxpSP9U2Sd2mOtVdKIjx5wYZ1ygumGgGgybOP7rSyDtBl3wHlurgfxJxg',
    details: {
      location: 'HSR Layout Sector 2, Bengaluru',
      stepGuide: [
        'Water level in 2,500L Sintex tank hits maximum mark.',
        'Acoustic resonance changes; GharSense sensor trips cutoff command.',
        'Heavy-duty relay disengages 2 HP submersible motor in 0.8 seconds.',
        'GharSense verified WhatsApp Bot issues bilingual voice & text alert.',
      ],
      metrics: [
        { label: 'Cutoff Latency', value: '0.82 seconds' },
        { label: 'Overflow Spillage', value: '0 Liters' },
        { label: 'WhatsApp Latency', value: '1.4 seconds' },
      ],
    },
  },
  {
    id: 'vid-3',
    duration: '02:10 • Secretary Interview',
    category: 'Society Audit',
    title: 'Saved ₹45,000 in Society Water Bills',
    description: 'Hear Mr. Kulkarni explain how Green Acres CHS recovered the entire kit investment in only 54 days by eliminating tanker calls.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYBsjHI_m-xL5UYcRYDaSPVuHG9OgkBntu4pnmY9n9hBl60YzDJxb2of_R9GxXVvQ1NNa7sgNoWHdTF6RRnJRMax_O2S8LKEceAfBQw4bgiVJYmt-3GOzVgZ1GkmphLR0PCDwQgvp08sBl2IMqCN8Q6PlqjqMYgh6YOcCeqcC_Y5yHlRq8J21-S2g101WM95glsRFwUJcZj1k4dKvH-evECzsHjaMtFdhwfNGsJZfQyWns5rPBU567nw',
    details: {
      location: 'Green Acres CHS, Powai, Mumbai',
      stepGuide: [
        '96 flats sharing 4 overhead tanks and 2 underground sumps.',
        'Tanker frequency reduced from 14 tankers/week to just 4 tankers/week.',
        'Dry-run protection prevented repeat motor winding burnout.',
        'Exported telemetry logs resolved AGM water sharing disputes.',
      ],
      metrics: [
        { label: 'Monthly Water Savings', value: '₹45,200' },
        { label: 'Electricity Reduction', value: '18%' },
        { label: 'Payback Period', value: '54 Days' },
      ],
    },
  },
];

export const SocialProof: React.FC<SocialProofProps> = ({ onPlayVideo }) => {
  return (
    <section className="w-full py-20 bg-[#eff4ff]" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-label-badge text-[12px] uppercase tracking-widest text-[#00687a] font-bold">
            Field-Tested Performance
          </span>
          <h2 className="font-headline-xl text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#0b1c30] font-bold">
            Trusted Across 450+ Societies in Mumbai, Pune, Bengaluru &amp; Delhi NCR
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] leading-[24px] text-[#45464d]">
            Watch actual retrofits in action and hear from elected CHS secretaries who halted water leakage penalties permanently.
          </p>
        </div>

        {/* 3 Video / Visual Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoList.map((video) => (
            <div
              key={video.id}
              onClick={() => onPlayVideo(video)}
              className="rounded-3xl bg-white overflow-hidden shadow-xs hover:shadow-md transition-all group border border-[#d3e4fe]/60 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-[#d3e4fe] overflow-hidden">
                  <div
                    className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${video.image}')` }}
                  />
                  
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-[#00687a] shadow-md group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-xs text-white font-label-badge text-[10.5px]">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <span className="font-label-badge text-[11px] text-[#00687a] font-bold uppercase tracking-wider">
                    {video.category}
                  </span>
                  <h4 className="font-headline-sm text-[18px] font-bold text-[#0b1c30] group-hover:text-[#00687a] transition-colors">
                    {video.title}
                  </h4>
                  <p className="font-body-sm text-[13.5px] leading-[20px] text-[#45464d]">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 pt-1 text-[12px] font-bold text-[#00687a] flex items-center gap-1">
                <span>Watch Demo &amp; Benchmark</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Quotes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
          {/* Quote 1 */}
          <div className="rounded-3xl bg-white p-8 shadow-xs space-y-4 border border-[#d3e4fe]/60">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>

            <p className="font-body-md text-[15px] leading-[24px] text-[#0b1c30] italic">
              “In our 96-flat society at Powai, terrace overflows were ruining top floor ceilings and creating regular quarrels with the managing committee. GharSense installed on all 4 overhead tanks in one afternoon. Overflows stopped 100% and our borewell electricity expense dropped by ₹8,200 in month one.”
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#acedff] flex items-center justify-center font-headline-sm text-[14px] font-bold text-[#00687a]">
                RK
              </div>
              <div>
                <h5 className="font-label-md text-[14px] font-bold text-[#0b1c30]">Rajesh Kulkarni</h5>
                <p className="font-body-sm text-[12.5px] text-[#45464d]">Chairman, Green Acres CHS, Powai, Mumbai</p>
              </div>
            </div>
          </div>

          {/* Quote 2 */}
          <div className="rounded-3xl bg-white p-8 shadow-xs space-y-4 border border-[#d3e4fe]/60">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>

            <p className="font-body-md text-[15px] leading-[24px] text-[#0b1c30] italic">
              “The Hindi WhatsApp audio feature is genius. My elderly mother was always worried about when the municipal water would arrive and whether someone forgot to switch the motor off. Now she simply hears the WhatsApp audio message and the motor cuts off automatically. Truly zero-stress.”
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#e5eeff] flex items-center justify-center font-headline-sm text-[14px] font-bold text-[#0b1c30]">
                SN
              </div>
              <div>
                <h5 className="font-label-md text-[14px] font-bold text-[#0b1c30]">Sneha Nagaraj</h5>
                <p className="font-body-sm text-[12.5px] text-[#45464d]">Homeowner, 3BHK Apartment, Koramangala, Bengaluru</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
