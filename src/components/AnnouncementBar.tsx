import React from 'react';

interface AnnouncementBarProps {
  onClaimAuditKit?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onClaimAuditKit }) => {
  return (
    <section className="w-full bg-[#000000] text-white py-2 px-4 text-center select-none border-b border-[#131b2e]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 text-[13px]">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#acedff] text-[#001f26] font-bold text-[11px] uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00687a] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00687a]"></span>
          </span>
          Live Dispatch
        </span>
        <p className="font-body-sm text-[#d3e4fe] font-medium inline-flex items-center gap-1.5">
          <span>Monsoon Tank Overflow Warning System now active across 450+ societies. Free RWA audit kits available this week.</span>
          {onClaimAuditKit && (
            <button
              onClick={onClaimAuditKit}
              className="underline font-bold text-white hover:text-[#acedff] ml-1 transition-colors cursor-pointer"
            >
              Claim Kit &rarr;
            </button>
          )}
        </p>
      </div>
    </section>
  );
};
