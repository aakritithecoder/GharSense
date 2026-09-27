import React from 'react';

interface ProductEcosystemProps {
  onOpenSpecs: () => void;
  onOpenCalculator: () => void;
  onOpenSocietyDashboard: () => void;
}

export const ProductEcosystem: React.FC<ProductEcosystemProps> = ({
  onOpenSpecs,
  onOpenCalculator,
  onOpenSocietyDashboard,
}) => {
  return (
    <section className="w-full py-20 bg-[#eff4ff]" id="products">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-label-badge text-[12px] uppercase tracking-widest text-[#00687a] font-bold">
              Product Ecosystem
            </span>
            <h2 className="font-headline-xl text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#0b1c30] font-bold">
              Tailored Telemetry for Independent Homes and Multi-Wing High-Rises
            </h2>
          </div>
          <p className="font-body-md text-[15px] leading-[24px] text-[#45464d] max-w-md">
            Every device shares telemetry over encrypted micro-mesh, feeding both your private WhatsApp and centralized committee consoles.
          </p>
        </div>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-3xl bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow space-y-8 border border-[#d3e4fe]/60">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#acedff] flex items-center justify-center text-[#00687a]">
                  <span className="material-symbols-outlined text-3xl">water</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#57dffe]/30 text-[#006172] font-label-badge text-[11px] font-bold">
                  Bestseller for Apartments
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-headline-sm text-[20px] text-[#0b1c30] font-bold">
                  GharSense Water Protect
                </h3>
                <p className="font-body-sm text-[13.5px] leading-[20px] text-[#45464d]">
                  Clamp-on ultrasonic telemetry for municipal supply lines, overhead tanks, and underground sumps.
                </p>
              </div>

              <ul className="space-y-3 font-body-sm text-[13.5px] text-[#0b1c30]">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Non-invasive ultrasonic flow &amp; overflow detector</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Smart Auto-Cutoff relay for 0.5HP - 2HP pumps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Dry-run motor protection when civic water is empty</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Instant WhatsApp audio dispatch in Hindi &amp; English</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenSpecs}
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#e5eeff] text-[#0b1c30] font-label-md text-[14px] font-semibold hover:bg-[#acedff] hover:text-[#001f26] transition-all cursor-pointer"
              >
                Learn Technical Specs
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow space-y-8 border border-[#d3e4fe]/60">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#fff3cd] flex items-center justify-center text-[#b45309]">
                  <span className="material-symbols-outlined text-3xl">bolt</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#e5eeff] text-[#45464d] font-label-badge text-[11px] font-bold">
                  Electricity Bill Reducer
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-headline-sm text-[20px] text-[#0b1c30] font-bold">
                  GharSense Power Monitor
                </h3>
                <p className="font-body-sm text-[13.5px] leading-[20px] text-[#45464d]">
                  Breaker-level energy monitoring that decomposes power draw by major household loads.
                </p>
              </div>

              <ul className="space-y-3 font-body-sm text-[13.5px] text-[#0b1c30]">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Clamp-on Current Transformer (CT) ring for MCBs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Appliance signature detection (ACs, Geysers, EV)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Peak tariff penalty warning during slab transitions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Voltage spike warning to protect sensitive electronics</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenCalculator}
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#e5eeff] text-[#0b1c30] font-label-md text-[14px] font-semibold hover:bg-[#acedff] hover:text-[#001f26] transition-all cursor-pointer"
              >
                Calculate Energy Savings
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow space-y-8 border border-[#d3e4fe]/60">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#131b2e] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">domain</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#131b2e] text-white font-label-badge text-[11px] font-bold">
                  For CHS &amp; RWA Committees
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-headline-sm text-[20px] text-[#0b1c30] font-bold">
                  Society Fleet Dashboard
                </h3>
                <p className="font-body-sm text-[13.5px] leading-[20px] text-[#45464d]">
                  Enterprise telemetry console built for managing committee secretaries, treasurers, and security guards.
                </p>
              </div>

              <ul className="space-y-3 font-body-sm text-[13.5px] text-[#0b1c30]">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Centralized multi-tank sump &amp; overhead visual telemetry</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Automated 3-phase pump scheduling &amp; dry-run lockout</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>Main riser pipe acoustic leak telemetry before wall damage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#00687a] text-base mt-0.5">check</span>
                  <span>One-click exportable PDF water &amp; power audit logs for AGMs</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenSocietyDashboard}
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#000000] text-white font-label-md text-[14px] font-semibold hover:bg-[#213145] transition-all cursor-pointer"
              >
                Launch Live Society Console
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
