import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Building, Phone, User, AlertCircle } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [society, setSociety] = useState('');
  const [issue, setIssue] = useState('Overhead Water Tank Overflow');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !society.trim()) {
      setError('Please fill in your name, WhatsApp number, and society name.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="w-full py-20 bg-[#f8f9ff]" id="lead-form">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="font-label-badge text-[12px] uppercase tracking-widest text-[#00687a] font-bold">
            Fast Free Evaluation
          </span>
          <h2 className="font-headline-xl text-[28px] sm:text-[34px] lg:text-[38px] leading-tight text-[#0b1c30] font-bold">
            Get a Free Savings Assessment &amp; Society Demonstration
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] leading-[24px] text-[#45464d] max-w-xl mx-auto">
            Fill out this quick form. Our utility engineers will analyze your building's motor sizing and pipe layout to calculate exact monthly savings.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-md border border-[#d3e4fe]/80 relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-10 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#dcfce7] text-[#009668] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline-sm text-[22px] font-bold text-[#0b1c30]">
                  Assessment Request Confirmed!
                </h3>
                <p className="text-[15px] text-[#45464d] max-w-md mx-auto">
                  Thank you, <strong className="text-[#0b1c30]">{fullName}</strong>. We have dispatched your society profile ({society}) to our engineering team.
                </p>
                <div className="p-4 rounded-2xl bg-[#eff4ff] border border-[#d3e4fe] max-w-md mx-auto text-left text-[13.5px] space-y-1.5 mt-4">
                  <div className="flex items-center justify-between font-bold text-[#00687a]">
                    <span>Target Focus:</span>
                    <span>{issue}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#45464d]">
                    <span>Dispatched To WhatsApp:</span>
                    <span className="font-mono font-semibold">+91 {phone}</span>
                  </div>
                  <div className="text-[12px] text-gray-500 pt-1">
                    An engineer will connect via WhatsApp in under 45 minutes with preliminary tariff models.
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFullName('');
                  setPhone('');
                  setSociety('');
                }}
                className="px-6 py-2.5 rounded-xl bg-[#e5eeff] text-[#00687a] font-bold text-[14px] hover:bg-[#dce9ff] transition-colors cursor-pointer"
              >
                Submit Another Assessment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3.5 rounded-xl bg-[#ffdad6] text-[#ba1a1a] text-[13.5px] font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-[13.5px] font-semibold text-[#0b1c30]">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-4 py-3.5 pl-10 rounded-xl bg-[#eff4ff]/60 border border-[#d3e4fe] text-[#0b1c30] text-[14px] placeholder:text-[#76777d] focus:bg-white focus:border-[#00687a] focus:ring-2 focus:ring-[#00687a]/15 outline-none transition-all"
                    />
                    <User className="w-4 h-4 text-[#76777d] absolute left-3.5 top-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label-md text-[13.5px] font-semibold text-[#0b1c30]">
                    10-Digit WhatsApp Number
                  </label>
                  <div className="relative flex">
                    <span className="inline-flex items-center px-3 py-3.5 rounded-l-xl bg-[#e5eeff] border border-r-0 border-[#d3e4fe] text-[#45464d] font-mono text-[13.5px] font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98200 XXXXX"
                      maxLength={10}
                      className="w-full px-4 py-3.5 rounded-r-xl bg-[#eff4ff]/60 border border-[#d3e4fe] text-[#0b1c30] text-[14px] placeholder:text-[#76777d] focus:bg-white focus:border-[#00687a] focus:ring-2 focus:ring-[#00687a]/15 outline-none transition-all font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-[13.5px] font-semibold text-[#0b1c30]">
                    Society / Apartment Name &amp; City
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={society}
                      onChange={(e) => setSociety(e.target.value)}
                      placeholder="e.g. Palm Heights CHS, Andheri West, Mumbai"
                      className="w-full px-4 py-3.5 pl-10 rounded-xl bg-[#eff4ff]/60 border border-[#d3e4fe] text-[#0b1c30] text-[14px] placeholder:text-[#76777d] focus:bg-white focus:border-[#00687a] focus:ring-2 focus:ring-[#00687a]/15 outline-none transition-all"
                    />
                    <Building className="w-4 h-4 text-[#76777d] absolute left-3.5 top-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label-md text-[13.5px] font-semibold text-[#0b1c30]">
                    Primary Issue to Solve
                  </label>
                  <select
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#eff4ff]/60 border border-[#d3e4fe] text-[#0b1c30] text-[14px] focus:bg-white focus:border-[#00687a] focus:ring-2 focus:ring-[#00687a]/15 outline-none transition-all cursor-pointer"
                  >
                    <option value="Overhead Water Tank Overflow">Overhead Water Tank Overflow</option>
                    <option value="High Electricity / Pump Tariff">High Electricity / Pump Tariff</option>
                    <option value="Dry-Run Motor Burnout Prevention">Dry-Run Motor Burnout Prevention</option>
                    <option value="Complete Society Utility Sub-Metering">Complete Society Utility Sub-Metering</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#000000] text-white font-label-md text-[15px] font-bold shadow-md hover:bg-[#213145] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request WhatsApp Demo Call &amp; Audit</span>
                  <span className="material-symbols-outlined text-base text-[#acedff]">bolt</span>
                </button>
              </div>

              <div className="space-y-1 text-center pt-2 text-[#76777d] font-body-sm text-[12px]">
                <p>Zero spam guarantee. We only contact you via official WhatsApp for scheduling.</p>
                <p>Same-day response across Mumbai, Pune, Bengaluru &amp; Delhi NCR.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
