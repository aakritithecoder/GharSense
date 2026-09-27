import React from 'react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#eff4ff]" id="problem-solution">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-label-badge text-[12px] uppercase tracking-widest text-[#00687a] font-bold">
            Diagnosing The Drain
          </span>
          <h2 className="font-headline-xl text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#0b1c30] font-bold">
            Why Indian Households &amp; RWAs Lose Thousands Every Single Month
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] leading-[24px] text-[#45464d]">
            Urban high-rises and individual homes face identical infrastructure stress: unreliable municipal supply timings, frequent pump burnout, and unmetered, invisible utility waste.
          </p>
        </div>

        {/* Comparative 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* The Pain Points Column */}
          <div className="rounded-3xl bg-[#ffdad6]/40 p-8 lg:p-10 space-y-6 flex flex-col justify-between shadow-xs border border-[#ffdad6]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ba1a1a] text-white font-label-badge text-[11px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">warning</span> The Daily Utility Drain
                </div>
                <span className="text-[#ba1a1a] font-headline-sm text-[18px] sm:text-[20px] font-bold">
                  ≈ ₹65,000/Yr Loss
                </span>
              </div>

              <div className="space-y-5">
                {/* Point 1 */}
                <div className="p-4 rounded-2xl bg-white shadow-xs space-y-1.5 border border-red-100">
                  <div className="flex items-center gap-2.5 text-[#ba1a1a] font-headline-sm text-[16px] font-bold">
                    <span className="material-symbols-outlined text-lg">water_damage</span>
                    Silent Tank Overflows
                  </div>
                  <p className="font-body-sm text-[13.5px] leading-[20px] text-[#45464d]">
                    350 to 500 litres of expensive municipality or tanker water spilled every morning, dampening terrace waterproofing, cracking walls, and inviting municipal penalty challans.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="p-4 rounded-2xl bg-white shadow-xs space-y-1.5 border border-red-100">
                  <div className="flex items-center gap-2.5 text-[#ba1a1a] font-headline-sm text-[16px] font-bold">
                    <span className="material-symbols-outlined text-lg">electric_meter</span>
                    Hidden Power Spikes &amp; Dry-Runs
                  </div>
                  <p className="font-body-sm text-[13.5px] leading-[20px] text-[#45464d]">
                    Monoblock motors running dry when civic supply halts, geysers forgotten on for 12 hours, and deteriorating compressor efficiency silently inflating monthly bills over ₹4,500.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="p-4 rounded-2xl bg-white shadow-xs space-y-1.5 border border-red-100">
                  <div className="flex items-center gap-2.5 text-[#ba1a1a] font-headline-sm text-[16px] font-bold">
                    <span className="material-symbols-outlined text-lg">group_off</span>
                    CHS Maintenance Disputes
                  </div>
                  <p className="font-body-sm text-[13.5px] leading-[20px] text-[#45464d]">
                    Bitter AGM arguments over unfair water rationing, unexpected ₹12,000 motor rewinding bills, and zero telemetry on common borewell overhead tanks.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-[#93000a] font-label-md text-[13.5px] font-medium border-t border-red-200/60">
              <span className="material-symbols-outlined text-base">cancel</span>
              <span>Manual float balls fail within 6 months due to hard water calcification.</span>
            </div>
          </div>

          {/* The GharSense Solution Column */}
          <div className="rounded-3xl bg-[#acedff]/50 p-8 lg:p-10 space-y-6 flex flex-col justify-between shadow-xs border border-[#acedff]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00687a] text-white font-label-badge text-[11px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">verified_user</span> The GharSense Retrofit
                </div>
                <span className="text-[#00687a] font-headline-sm text-[18px] sm:text-[20px] font-bold">
                  Zero Hassle • 100% Digital
                </span>
              </div>

              <div className="space-y-5">
                {/* Sol 1 */}
                <div className="p-4 rounded-2xl bg-white shadow-xs space-y-1.5 border border-[#d3e4fe]">
                  <div className="flex items-center gap-2.5 text-[#00687a] font-headline-sm text-[16px] font-bold">
                    <span className="material-symbols-outlined text-lg">speed</span>
                    Non-Invasive Ultrasonic Clamp Sensor
                  </div>
                  <p className="font-body-sm text-[13.5px] leading-[20px] text-[#45464d]">
                    External clamp snaps firmly around standard CPVC, GI, or PVC pipes in 5 minutes. No plumber visits, no pipe splicing, and completely impervious to hard-water scaling.
                  </p>
                </div>

                {/* Sol 2 */}
                <div className="p-4 rounded-2xl bg-white shadow-xs space-y-1.5 border border-[#d3e4fe]">
                  <div className="flex items-center gap-2.5 text-[#00687a] font-headline-sm text-[16px] font-bold">
                    <span className="material-symbols-outlined text-lg">cable</span>
                    Non-Contact CT Power Ring
                  </div>
                  <p className="font-body-sm text-[13.5px] leading-[20px] text-[#45464d]">
                    Snaps cleanly over the main MCB breaker line without skinning insulation or shutting society power. Monitors live motor load, power factor, and voltage surges.
                  </p>
                </div>

                {/* Sol 3 */}
                <div className="p-4 rounded-2xl bg-white shadow-xs space-y-1.5 border border-[#d3e4fe]">
                  <div className="flex items-center gap-2.5 text-[#25D366] font-headline-sm text-[16px] font-bold">
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Direct WhatsApp Audio &amp; Text Alerts
                  </div>
                  <p className="font-body-sm text-[13.5px] leading-[20px] text-[#45464d]">
                    No bulky apps for elderly parents or security guards to learn. Status updates and Hindi/English voice prompts arrive directly in your family or society committee group.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-[#004e5c] font-label-md text-[13.5px] font-medium border-t border-[#00687a]/20">
              <span className="material-symbols-outlined text-base text-[#00687a]">check_circle</span>
              <span>Autonomous auto-cutoff relay prevents pump burnout if sump runs dry.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
