import React, { useState } from 'react';
import { Menu, X, ShieldCheck, ChevronRight, Calculator, Building2 } from 'lucide-react';

interface HeaderProps {
  onOpenOrder: (planId?: string) => void;
  onOpenDemo: () => void;
  onOpenSocietyDashboard: () => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenOrder,
  onOpenDemo,
  onOpenSocietyDashboard,
  onOpenCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9ff]/85 backdrop-blur-xl border-b border-[#d3e4fe]/40 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo & Tag */}
        <div 
          className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            alt="GharSense Brand Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VLV8J6dQ6pRPn09tz2kMpJNMGY07UOi5sW81a9QB1EBnGaF5Ye88xL3Zy1vZEqvdnuCqV7GbcJ5DUpwbudO0CatvA6Vdz_yyvrtp_stwLDMaIcIrflDU4xV2ucIxdZ6QKFNcRAIiPDc9YzOnb7XaEjRp2EMCCpOrUSbBm-z9iUPibz-KldDWyCPyUURpjvWhY8EEM897KQqnwAPYJZsJlVROlUiNaPIgXi7B6WoPjdYX8Elogi-8XmAtw"
          />
          <span className="font-headline-sm text-[20px] leading-[28px] text-[#0b1c30] tracking-tight font-bold">
            GharSense
          </span>
          <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#acedff] text-[#004e5c] font-label-badge text-[11px] font-bold tracking-wider uppercase">
            IoT Water Mesh
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          <button
            onClick={() => scrollTo('products')}
            className="font-label-md text-[14px] font-semibold text-[#45464d] hover:text-[#0b1c30] transition-colors cursor-pointer"
          >
            Products
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="font-label-md text-[14px] font-semibold text-[#45464d] hover:text-[#0b1c30] transition-colors cursor-pointer"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollTo('order-now')}
            className="font-label-md text-[14px] font-semibold text-[#45464d] hover:text-[#0b1c30] transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={onOpenSocietyDashboard}
            className="flex items-center gap-1.5 font-label-md text-[14px] font-semibold text-[#00687a] hover:text-[#004e5c] transition-colors cursor-pointer"
          >
            <Building2 className="w-4 h-4" />
            <span>For Societies</span>
            <span className="px-1.5 py-0.2 bg-[#57dffe]/30 text-[#006172] text-[10px] font-bold rounded">Live Demo</span>
          </button>
          <button
            onClick={() => scrollTo('testimonials')}
            className="font-label-md text-[14px] font-semibold text-[#45464d] hover:text-[#0b1c30] transition-colors cursor-pointer"
          >
            Testimonials
          </button>
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-1 font-label-md text-[14px] font-semibold text-[#45464d] hover:text-[#00687a] transition-colors cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5 text-[#00687a]" />
            <span>Savings Calc</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onOpenDemo}
            className="hidden md:inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-white text-[#00687a] font-label-md text-[14px] font-semibold shadow-[0_1px_3px_rgba(15,23,42,0.05)] border border-[#d3e4fe]/50 hover:bg-[#acedff] hover:text-[#001f26] transition-all cursor-pointer"
          >
            Book a Society Demo
          </button>
          <button
            onClick={() => onOpenOrder()}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#00687a] text-white font-label-md text-[14px] font-semibold shadow-[0_4px_12px_rgba(0,104,122,0.25)] hover:bg-[#004e5c] transition-all cursor-pointer"
          >
            Order Kit
          </button>

          {/* User profile / status indicator icon */}
          <button 
            onClick={onOpenSocietyDashboard}
            title="Mesh Gateway Status: Active"
            className="w-9 h-9 rounded-full bg-[#000000] flex items-center justify-center flex-shrink-0 hover:bg-[#213145] transition-colors relative cursor-pointer"
          >
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#4edea3] rounded-full border-2 border-white"></span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#0b1c30] hover:bg-[#e5eeff] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#d3e4fe] px-6 py-5 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-[15px]">
            <button
              onClick={() => scrollTo('products')}
              className="text-left py-2 text-[#45464d] hover:text-[#00687a] border-b border-gray-100 flex items-center justify-between"
            >
              <span>Products</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-left py-2 text-[#45464d] hover:text-[#00687a] border-b border-gray-100 flex items-center justify-between"
            >
              <span>How it Works</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => scrollTo('order-now')}
              className="text-left py-2 text-[#45464d] hover:text-[#00687a] border-b border-gray-100 flex items-center justify-between"
            >
              <span>Pricing &amp; Kits</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSocietyDashboard();
              }}
              className="text-left py-2 text-[#00687a] font-bold border-b border-gray-100 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#00687a]" />
                <span>Society Fleet Console (Live Telemetry)</span>
              </div>
              <span className="px-2 py-0.5 bg-[#57dffe]/30 text-[#006172] text-[11px] rounded font-bold">Open</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="text-left py-2 text-[#45464d] hover:text-[#00687a] border-b border-gray-100 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#00687a]" />
                <span>Tariff &amp; Savings Calculator</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => scrollTo('testimonials')}
              className="text-left py-2 text-[#45464d] hover:text-[#00687a] border-b border-gray-100 flex items-center justify-between"
            >
              <span>Testimonials &amp; Videos</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-xl bg-[#eff4ff] text-[#00687a] font-semibold text-center hover:bg-[#dce9ff] transition-colors"
            >
              Book a Society Demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 rounded-xl bg-[#00687a] text-white font-semibold text-center shadow-md hover:bg-[#004e5c] transition-colors"
            >
              Order Starter Kit – ₹1,199
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
