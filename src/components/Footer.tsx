import React from 'react';

interface FooterProps {
  onOpenSpecs: () => void;
  onOpenCalculator: () => void;
  onOpenSocietyDashboard: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSpecs,
  onOpenCalculator,
  onOpenSocietyDashboard,
}) => {
  return (
    <footer className="w-full bg-[#131b2e] text-white pt-16 pb-12 border-t border-[#131b2e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="GharSense Brand Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VLV8J6dQ6pRPn09tz2kMpJNMGY07UOi5sW81a9QB1EBnGaF5Ye88xL3Zy1vZEqvdnuCqV7GbcJ5DUpwbudO0CatvA6Vdz_yyvrtp_stwLDMaIcIrflDU4xV2ucIxdZ6QKFNcRAIiPDc9YzOnb7XaEjRp2EMCCpOrUSbBm-z9iUPibz-KldDWyCPyUURpjvWhY8EEM897KQqnwAPYJZsJlVROlUiNaPIgXi7B6WoPjdYX8Elogi-8XmAtw"
              />
              <span className="font-headline-sm text-[20px] text-white font-bold">
                GharSense
              </span>
            </div>

            <p className="font-body-sm text-[13.5px] leading-[22px] text-[#7c839b] max-w-sm">
              Next-generation non-invasive utility monitoring and automated cutoff systems designed specifically for Indian housing societies and residential apartments.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-white/10 text-white font-label-badge text-[10.5px] font-semibold tracking-wide uppercase">
                Made in India • BIS Certified
              </span>
              <span className="px-2.5 py-1 rounded bg-[#acedff]/15 text-[#acedff] font-label-badge text-[10.5px] font-semibold tracking-wide uppercase">
                Retrofit • Zero Rewiring
              </span>
            </div>
          </div>

          {/* Col 2: Product & Tech */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-label-md text-[13px] uppercase tracking-wider text-white font-bold">
              Product &amp; Tech
            </h5>
            <ul className="space-y-2 font-body-sm text-[13.5px] text-[#7c839b]">
              <li>
                <button onClick={onOpenSpecs} className="hover:text-white transition-colors cursor-pointer text-left">
                  Water Protect Clamp
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-white transition-colors cursor-pointer text-left">
                  Power Monitor CT
                </button>
              </li>
              <li>
                <button onClick={onOpenSocietyDashboard} className="hover:text-white transition-colors cursor-pointer text-left">
                  Society Fleet Hub
                </button>
              </li>
              <li>
                <button onClick={onOpenSpecs} className="hover:text-white transition-colors cursor-pointer text-left">
                  Acoustic Pipe Telemetry
                </button>
              </li>
              <li>
                <button onClick={onOpenSpecs} className="hover:text-white transition-colors cursor-pointer text-left">
                  Dry-Run Motor Cutoff
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Assurance */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-label-md text-[13px] uppercase tracking-wider text-white font-bold">
              Support &amp; Assurance
            </h5>
            <ul className="space-y-2 font-body-sm text-[13.5px] text-[#7c839b]">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">1-Year Replacement Warranty</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">WhatsApp Helpdesk (+91)</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Society AGM Proposal Deck</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Installation Manual (PDF)</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Plumbing Compatibility Guide</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Hubs */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-label-md text-[13px] uppercase tracking-wider text-white font-bold">
              Regional Hubs
            </h5>
            <p className="font-body-sm text-[13px] leading-[20px] text-[#7c839b]">
              <strong className="text-white">Mumbai:</strong> BKC &amp; Powai Tech Center<br />
              <strong className="text-white">Bengaluru:</strong> HSR Layout Sector 1<br />
              <strong className="text-white">Pune:</strong> Kalyani Nagar Hub<br />
              <strong className="text-white">Delhi NCR:</strong> Sector 62 Noida
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-[12.5px] text-[#7c839b]">
          <p>© 2026 GharSense Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Hardware Warranty</span>
            <span className="hover:text-white cursor-pointer transition-colors">RWA Partner Program</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
