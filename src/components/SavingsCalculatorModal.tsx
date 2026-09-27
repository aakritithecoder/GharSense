import React, { useState } from 'react';
import { X, Calculator, Sparkles, TrendingUp, IndianRupee, Droplet, Zap } from 'lucide-react';

interface SavingsCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderKit: () => void;
  onBookDemo: () => void;
}

export const SavingsCalculatorModal: React.FC<SavingsCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOrderKit,
  onBookDemo,
}) => {
  const [propertyType, setPropertyType] = useState<'flat' | 'society'>('flat');
  const [numFlats, setNumFlats] = useState<number>(48);
  const [motorHp, setMotorHp] = useState<number>(1.5);
  const [runHours, setRunHours] = useState<number>(2.0);
  const [cityTariff, setCityTariff] = useState<number>(9.5); // ₹ per kWh

  if (!isOpen) return null;

  // Calculation Math:
  // 1 HP ≈ 0.746 kW
  // Overflows happen typically 15-25 minutes per fill cycle without automated cutoff
  const multiplier = propertyType === 'society' ? Math.max(1, Math.round(numFlats / 15)) : 1;
  const kw = motorHp * 0.746;
  
  // Power units wasted per month due to over-running & dry-runs (estimated 35% of run time)
  const powerWastedPerDayKwh = kw * (runHours * 0.35) * multiplier;
  const powerSavedMonthlyKwh = Math.round(powerWastedPerDayKwh * 30);
  const powerSavedRupees = Math.round(powerSavedMonthlyKwh * cityTariff);

  // Water wasted (avg overflow 400L/day for flats, 2500L/day for society per tank)
  const waterWastedDailyLitres = propertyType === 'society' ? numFlats * 85 : 450;
  const waterSavedMonthlyLitres = waterWastedDailyLitres * 30;
  
  // Tanker water cost avoided (avg ₹0.15 to ₹0.22 per litre in metro tankers)
  const waterSavedRupees = Math.round(waterSavedMonthlyLitres * 0.18);

  const totalMonthlySavings = powerSavedRupees + waterSavedRupees;
  const kitCost = propertyType === 'society' ? numFlats * 499 : 1799;
  const paybackDays = Math.max(18, Math.round((kitCost / totalMonthlySavings) * 30));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#f8f9ff] rounded-3xl shadow-2xl border border-[#d3e4fe] overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#131b2e] text-white p-6 flex items-center justify-between border-b border-[#213145]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00687a] flex items-center justify-center text-white">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-sm text-[20px] font-bold">Utility &amp; Tariff Savings Calculator</h3>
              <p className="text-[12.5px] text-[#7c839b]">
                Real-time mathematical estimation based on municipal water &amp; DISCOM tariffs
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Toggle Type */}
          <div className="flex rounded-2xl bg-[#e5eeff] p-1.5 border border-[#d3e4fe]">
            <button
              onClick={() => setPropertyType('flat')}
              className={`flex-1 py-2.5 rounded-xl font-bold text-[14px] transition-all cursor-pointer ${
                propertyType === 'flat' ? 'bg-[#00687a] text-white shadow-sm' : 'text-[#45464d] hover:text-[#0b1c30]'
              }`}
            >
              Independent Flat / Row House
            </button>
            <button
              onClick={() => setPropertyType('society')}
              className={`flex-1 py-2.5 rounded-xl font-bold text-[14px] transition-all cursor-pointer ${
                propertyType === 'society' ? 'bg-[#00687a] text-white shadow-sm' : 'text-[#45464d] hover:text-[#0b1c30]'
              }`}
            >
              Housing Society / RWA Building
            </button>
          </div>

          {/* Form Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {propertyType === 'society' && (
              <div className="space-y-2 sm:col-span-2">
                <div className="flex justify-between text-[13.5px] font-semibold text-[#0b1c30]">
                  <span>Number of Flats in Society:</span>
                  <span className="font-bold text-[#00687a]">{numFlats} Flats</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={250}
                  step={2}
                  value={numFlats}
                  onChange={(e) => setNumFlats(Number(e.target.value))}
                  className="w-full accent-[#00687a] cursor-pointer"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[13.5px] font-semibold text-[#0b1c30]">Water Pump Rating (HP)</label>
              <select
                value={motorHp}
                onChange={(e) => setMotorHp(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#d3e4fe] text-[#0b1c30] text-[14px] outline-none cursor-pointer"
              >
                <option value={0.5}>0.5 HP (Small Terrace Pump)</option>
                <option value={1.0}>1.0 HP (Standard Monoblock)</option>
                <option value={1.5}>1.5 HP (Standard 2BHK/3BHK Riser)</option>
                <option value={2.0}>2.0 HP (High Head Submersible)</option>
                <option value={5.0}>5.0 HP (Society 3-Phase Commercial)</option>
                <option value={7.5}>7.5 HP (Heavy Duty Borewell)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[13.5px] font-semibold text-[#0b1c30]">Metro Electricity Tariff</label>
              <select
                value={cityTariff}
                onChange={(e) => setCityTariff(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#d3e4fe] text-[#0b1c30] text-[14px] outline-none cursor-pointer"
              >
                <option value={9.5}>Mumbai (MSEDCL / Adani) - ₹9.50/unit</option>
                <option value={9.0}>Pune (MSEDCL) - ₹9.00/unit</option>
                <option value={8.2}>Bengaluru (BESCOM) - ₹8.20/unit</option>
                <option value={7.0}>Delhi NCR (BSES / UPPCL) - ₹7.00/unit</option>
              </select>
            </div>

            <div className="space-y-2 sm:col-span-2">
              <div className="flex justify-between text-[13.5px] font-semibold text-[#0b1c30]">
                <span>Daily Pump Running Time:</span>
                <span className="font-bold text-[#00687a]">{runHours} Hours/day</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={6}
                step={0.5}
                value={runHours}
                onChange={(e) => setRunHours(Number(e.target.value))}
                className="w-full accent-[#00687a] cursor-pointer"
              />
            </div>
          </div>

          {/* Results Display */}
          <div className="rounded-2xl bg-[#eff4ff] p-6 border border-[#d3e4fe] space-y-6">
            <div className="flex items-center justify-between border-b border-[#d3e4fe] pb-4">
              <div>
                <span className="text-[12px] font-bold text-[#00687a] uppercase tracking-wider">
                  Estimated Total Monthly Net Savings
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-[36px] font-extrabold text-[#0b1c30]">
                    ₹{totalMonthlySavings.toLocaleString()}
                  </span>
                  <span className="text-[14px] text-gray-500">/ month</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-bold text-[#009668] bg-[#e8fbf0] px-3 py-1 rounded-full uppercase tracking-wider">
                  Payback: {paybackDays} Days
                </span>
                <p className="text-[12px] text-gray-500 mt-1">100% ROI in under 3 months</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13.5px]">
              <div className="p-4 rounded-xl bg-white border border-[#d3e4fe] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#00687a]">
                  <Droplet className="w-4 h-4 text-[#00687a]" />
                  <span>Water Wastage Prevented</span>
                </div>
                <div className="text-[20px] font-extrabold text-[#0b1c30]">
                  {waterSavedMonthlyLitres.toLocaleString()} Litres / mo
                </div>
                <p className="text-[12px] text-[#45464d]">
                  Avoids tanker calls worth ≈ ₹{waterSavedRupees.toLocaleString()}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#d3e4fe] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-700">
                  <Zap className="w-4 h-4 text-amber-600" />
                  <span>Electricity Saved</span>
                </div>
                <div className="text-[20px] font-extrabold text-[#0b1c30]">
                  {powerSavedMonthlyKwh} kWh / mo
                </div>
                <p className="text-[12px] text-[#45464d]">
                  Saves pump tariff worth ≈ ₹{powerSavedRupees.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-5 rounded-xl text-[#45464d] font-bold text-[14px] hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            {propertyType === 'society' ? (
              <button
                onClick={() => {
                  onClose();
                  onBookDemo();
                }}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#000000] text-white font-bold text-[14px] hover:bg-[#213145] transition-colors cursor-pointer"
              >
                Request Custom Society Proposal
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onOrderKit();
                }}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#00687a] text-white font-bold text-[14px] hover:bg-[#004e5c] transition-colors cursor-pointer"
              >
                Order Starter Kit (₹1,199)
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
