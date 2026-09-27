import React, { useState } from 'react';
import { Header } from './components/Header';
import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroSection } from './components/HeroSection';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { ProductEcosystem } from './components/ProductEcosystem';
import { PricingSection } from './components/PricingSection';
import { SocialProof } from './components/SocialProof';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SocietyDashboardModal } from './components/SocietyDashboardModal';
import { SavingsCalculatorModal } from './components/SavingsCalculatorModal';
import { TechSpecsModal } from './components/TechSpecsModal';
import { OrderKitModal } from './components/OrderKitModal';
import { VideoDemoModal } from './components/VideoDemoModal';
import { VideoDemo } from './types';

export function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<'starter' | 'complete'>('starter');
  const [societyDashboardOpen, setSocietyDashboardOpen] = useState(false);
  const [savingsCalcOpen, setSavingsCalcOpen] = useState(false);
  const [specsModalOpen, setSpecsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoDemo | null>(null);

  const handleOpenOrder = (planId?: string) => {
    if (planId === 'complete') {
      setSelectedPlanId('complete');
    } else {
      setSelectedPlanId('starter');
    }
    setOrderModalOpen(true);
  };

  const scrollToLeadForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30]">
      {/* Top sticky announcement */}
      <div className="pt-0">
        <AnnouncementBar onClaimAuditKit={scrollToLeadForm} />
      </div>

      {/* Main navigation header */}
      <Header
        onOpenOrder={() => handleOpenOrder('starter')}
        onOpenDemo={scrollToLeadForm}
        onOpenSocietyDashboard={() => setSocietyDashboardOpen(true)}
        onOpenCalculator={() => setSavingsCalcOpen(true)}
      />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOrderKit={() => handleOpenOrder('starter')}
          onBookDemo={scrollToLeadForm}
        />

        {/* Problem vs Solution */}
        <ProblemSolution />

        {/* 3 Step Installation Flow */}
        <HowItWorks />

        {/* 3 Products Ecosystem */}
        <ProductEcosystem
          onOpenSpecs={() => setSpecsModalOpen(true)}
          onOpenCalculator={() => setSavingsCalcOpen(true)}
          onOpenSocietyDashboard={() => setSocietyDashboardOpen(true)}
        />

        {/* Pricing Tiers */}
        <PricingSection
          onSelectPlan={(plan) => handleOpenOrder(plan)}
          onBookDemo={scrollToLeadForm}
        />

        {/* Social Proof & Video Demonstration */}
        <SocialProof onPlayVideo={(video) => setActiveVideo(video)} />

        {/* Lead Generation & Free Assessment Form */}
        <LeadForm />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenSpecs={() => setSpecsModalOpen(true)}
        onOpenCalculator={() => setSavingsCalcOpen(true)}
        onOpenSocietyDashboard={() => setSocietyDashboardOpen(true)}
      />

      {/* Sticky WhatsApp Floating Assistant */}
      <FloatingWhatsApp />

      {/* Modals & Full Feature Overlays */}
      <SocietyDashboardModal
        isOpen={societyDashboardOpen}
        onClose={() => setSocietyDashboardOpen(false)}
      />

      <SavingsCalculatorModal
        isOpen={savingsCalcOpen}
        onClose={() => setSavingsCalcOpen(false)}
        onOrderKit={() => handleOpenOrder('starter')}
        onBookDemo={scrollToLeadForm}
      />

      <TechSpecsModal
        isOpen={specsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
        onOrderKit={() => handleOpenOrder('starter')}
      />

      <OrderKitModal
        isOpen={orderModalOpen}
        initialPlan={selectedPlanId}
        onClose={() => setOrderModalOpen(false)}
      />

      <VideoDemoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onOrderKit={() => handleOpenOrder('starter')}
      />
    </div>
  );
}

export default App;
