import React from 'react';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
  onBookDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, onBookDemo }) => {
  return (
    <section className="w-full py-20 bg-[#f8f9ff]" id="order-now">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-label-badge text-[12px] uppercase tracking-widest text-[#00687a] font-bold">
            Fair &amp; Transparent
          </span>
          <h2 className="font-headline-xl text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#0b1c30] font-bold">
            Transparent, No-Subscription Pricing for Indian Families
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] leading-[24px] text-[#45464d]">
            No monthly software lock-ins. Buy the hardware once, enjoy automated WhatsApp alerts and warranty protection permanently.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1: Starter Kit */}
          <div className="rounded-3xl bg-white p-8 lg:p-10 flex flex-col justify-between shadow-xs space-y-8 border border-[#d3e4fe]/70">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="font-label-badge text-[11px] uppercase tracking-wider text-[#45464d] font-bold">
                  Small Flats &amp; Independent Floors
                </span>
                <h3 className="font-headline-sm text-[20px] text-[#0b1c30] font-bold">
                  Starter Home Kit
                </h3>
                <p className="font-body-sm text-[13.5px] text-[#45464d]">
                  Reliable water tank overflow and basic leak prevention.
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display-hero text-[36px] font-extrabold text-[#0b1c30]">
                  ₹1,199
                </span>
                <span className="font-body-md text-[15px] text-[#76777d] line-through">
                  ₹1,999
                </span>
                <span className="font-label-badge text-[11px] text-[#009668] bg-[#e8fbf0] px-2.5 py-0.5 rounded-full font-bold">
                  Save 40%
                </span>
              </div>

              <div className="font-label-badge text-[12px] text-[#45464d]">
                One-time payment • Free Express Delivery
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[#00687a] text-base">check_circle</span>
                  <span>1x Non-invasive Water Pipe Sensor</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[#00687a] text-base">check_circle</span>
                  <span>1x Smart Plug Auto-Cutoff Relay (16A)</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[#00687a] text-base">check_circle</span>
                  <span>WhatsApp Alerts for 2 Phone Numbers</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[#00687a] text-base">check_circle</span>
                  <span>1 Year Complete Replacement Warranty</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('starter')}
              className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-[#e5eeff] text-[#0b1c30] font-label-md text-[14px] font-bold hover:bg-[#acedff] hover:text-[#001f26] transition-all cursor-pointer shadow-xs"
            >
              Order Starter Kit
            </button>
          </div>

          {/* Tier 2: Complete Home Shield (FEATURED) */}
          <div className="rounded-3xl bg-white p-8 lg:p-10 flex flex-col justify-between shadow-xl space-y-8 relative overflow-hidden transform lg:-translate-y-3 bg-gradient-to-b from-[#acedff]/25 via-white to-white border-2 border-[#00687a]">
            <div className="absolute top-0 right-0 left-0 h-2 bg-[#00687a]"></div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label-badge text-[11px] uppercase tracking-wider text-[#00687a] font-bold">
                  2BHK / 3BHK &amp; Row Houses
                </span>
                <span className="px-3 py-1 rounded-full bg-[#00687a] text-white font-label-badge text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  Most Popular
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-headline-sm text-[22px] text-[#0b1c30] font-bold">
                  Complete Home Shield
                </h3>
                <p className="font-body-sm text-[13.5px] text-[#45464d]">
                  Combined water overflow cutoff plus full household power intelligence.
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display-hero text-[38px] font-extrabold text-[#00687a]">
                  ₹1,799
                </span>
                <span className="font-body-md text-[15px] text-[#76777d] line-through">
                  ₹2,999
                </span>
                <span className="font-label-badge text-[11px] text-[#009668] bg-[#e8fbf0] px-2.5 py-0.5 rounded-full font-bold">
                  Best Value
                </span>
              </div>

              <div className="font-label-badge text-[12px] text-[#45464d]">
                One-time payment • Free Priority VIP Dispatch
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30] font-medium">
                  <span className="material-symbols-outlined text-[#00687a] text-base">verified</span>
                  <span>1x Water Overflow &amp; Leak Sensor</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30] font-medium">
                  <span className="material-symbols-outlined text-[#00687a] text-base">verified</span>
                  <span>1x Clamp-on Main Power MCB Monitor</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30] font-medium">
                  <span className="material-symbols-outlined text-[#00687a] text-base">verified</span>
                  <span>Smart Motor Cutoff Relay (16A/25A Heavy Duty)</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30] font-medium">
                  <span className="material-symbols-outlined text-[#00687a] text-base">verified</span>
                  <span>Unlimited Family WhatsApp Group Alerts</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30] font-medium">
                  <span className="material-symbols-outlined text-[#00687a] text-base">verified</span>
                  <span>Hindi, Marathi &amp; English Voice Prompts</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30] font-medium">
                  <span className="material-symbols-outlined text-[#00687a] text-base">verified</span>
                  <span>2 Years Extended No-Questions Warranty</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('complete')}
              className="w-full inline-flex items-center justify-center py-4 px-4 rounded-xl bg-[#00687a] text-white font-label-md text-[15px] font-bold tracking-wide shadow-[0_8px_20px_rgba(0,104,122,0.3)] hover:bg-[#004e5c] transition-all cursor-pointer"
            >
              Get Complete Shield
            </button>
          </div>

          {/* Tier 3: Society Fleet */}
          <div className="rounded-3xl bg-white p-8 lg:p-10 flex flex-col justify-between shadow-xs space-y-8 border border-[#d3e4fe]/70">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="font-label-badge text-[11px] uppercase tracking-wider text-[#45464d] font-bold">
                  RWAs &amp; CHS Committees
                </span>
                <h3 className="font-headline-sm text-[20px] text-[#0b1c30] font-bold">
                  Housing Society Plan
                </h3>
                <p className="font-body-sm text-[13.5px] text-[#45464d]">
                  Centralized sub-metering, shared sumps, and commercial pumps.
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display-hero text-[30px] font-extrabold text-[#0b1c30]">
                  Bulk Pricing
                </span>
                <span className="font-body-sm text-[13.5px] text-[#45464d]">
                  from ₹499/flat
                </span>
              </div>

              <div className="font-label-badge text-[12px] text-[#45464d]">
                Customized for 10 to 500+ Flats
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30]">
                  <span className="material-symbols-outlined text-black text-base">check_circle</span>
                  <span>Multi-tank Sump &amp; Overhead Ultrasonic Sensors</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30]">
                  <span className="material-symbols-outlined text-black text-base">check_circle</span>
                  <span>3-Phase Commercial Pump Motor Starters</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30]">
                  <span className="material-symbols-outlined text-black text-base">check_circle</span>
                  <span>Centralized Secretary &amp; Security Guard Portal</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30]">
                  <span className="material-symbols-outlined text-black text-base">check_circle</span>
                  <span>Free On-Site Installation by Certified Techs</span>
                </div>
                <div className="flex items-center gap-2.5 font-body-sm text-[13.5px] text-[#0b1c30]">
                  <span className="material-symbols-outlined text-black text-base">check_circle</span>
                  <span>Exportable AGM Utility Audit Reports</span>
                </div>
              </div>
            </div>

            <button
              onClick={onBookDemo}
              className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-label-md text-[14px] font-bold hover:bg-[#dce9ff] transition-all cursor-pointer shadow-xs"
            >
              Request Society Proposal
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
