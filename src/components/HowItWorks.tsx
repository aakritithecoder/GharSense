import React, { useState } from 'react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'Attach in 15 Mins',
      desc: "Snap the ultrasonic acoustic sensor to your main inlet pipe and latch the magnetic CT ring around your motor's MCB switch. No water turned off.",
      icon: 'home_repair_service',
      badge: 'Universal fit: 0.5" to 2.5" pipes',
      badgeIcon: 'handyman',
      badgeColor: 'text-[#00687a]',
      iconBg: 'bg-[#e5eeff] text-[#00687a]',
      details: 'Compatible with standard CPVC, GI, and PVC piping. The clamp housing is UV-stabilized and IP67 weather-sealed for outdoor terrace plumbing.',
    },
    {
      num: '02',
      title: 'Connect via Wi-Fi',
      desc: 'Open the QR portal on your phone to link with your 2.4GHz home Wi-Fi. Add family phone numbers or society guard desks in 3 taps.',
      icon: 'wifi_tethering',
      badge: 'Internal 48hr offline flash buffer',
      badgeIcon: 'offline_bolt',
      badgeColor: 'text-[#00687a]',
      iconBg: 'bg-[#acedff] text-[#001f26]',
      details: 'Works seamlessly during intermittent broadband outages: on-board solid state memory logs up to 48 hours of flow & power data and syncs automatically.',
    },
    {
      num: '03',
      title: 'Save Automatically',
      desc: 'GharSense shuts off motors the second tanks fill up, notifies you of hidden dripping flushes, and shaves 28% off monthly electricity tariffs.',
      icon: 'savings',
      badge: 'Avg ROI: Under 75 Days',
      badgeIcon: 'energy_savings_leaf',
      badgeColor: 'text-[#009668]',
      iconBg: 'bg-[#dcfce7] text-[#009668]',
      details: 'Eliminates 350+ liters daily overflow per tank and cuts motor dry-run wear, ensuring your monoblock or submersible motor lasts 3x longer.',
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f8f9ff]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-label-badge text-[12px] uppercase tracking-widest text-[#00687a] font-bold">
            Autonomous Simplicity
          </span>
          <h2 className="font-headline-xl text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#0b1c30] font-bold">
            Three Easy Steps. 15 Minutes to Total Peace of Mind.
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] leading-[24px] text-[#45464d]">
            Engineered so any homeowner or society maintenance person can install without specialized tools or professional licenses.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
              className="rounded-3xl bg-white p-8 shadow-xs hover:shadow-md transition-all space-y-6 relative overflow-hidden group border border-[#d3e4fe]/50 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-display-hero text-[40px] font-extrabold text-[#d3e4fe] group-hover:text-[#acedff] transition-colors select-none">
                  {step.num}
                </span>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.iconBg}`}>
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-headline-sm text-[20px] text-[#0b1c30] font-bold">
                  {step.title}
                </h3>
                <p className="font-body-md text-[14.5px] leading-[22px] text-[#45464d]">
                  {step.desc}
                </p>
              </div>

              {activeStep === index && (
                <div className="p-3 rounded-xl bg-[#eff4ff] text-[12.5px] text-[#006172] border border-[#d3e4fe] animate-in fade-in duration-200">
                  {step.details}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 font-label-badge text-[12px] font-semibold ${step.badgeColor}`}>
                  <span className="material-symbols-outlined text-sm">{step.badgeIcon}</span>
                  {step.badge}
                </span>
                <span className="text-[11px] text-gray-400 group-hover:text-[#00687a]">
                  {activeStep === index ? 'Less info' : 'Click for specs'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
