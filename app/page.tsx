"use client";

import BottomCTA from "@/src/components/BottomCTA";
import ChatBotModal from "@/src/components/ChatBotModal";
import Curriculum from "@/src/components/Curriculum";
import HeroSection from "@/src/components/HeroSection";
import HowItWorks from "@/src/components/HowItWorks";
import ModalForm from "@/src/components/ModalForm";
import Navbar from "@/src/components/Navbar";
import PricingPlans from "@/src/components/PricingPlans";
import Testimonials from "@/src/components/Testimonials";
import USPSection from "@/src/components/USPSection";
import React, { useState } from "react";

function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isCounsellorModalOpen, setIsCounsellorModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      <section id="home">
        <HeroSection onOpenTrialModal={() => setIsTrialModalOpen(true)} />
      </section>

      <section id="curriculum">
        <Curriculum />
      </section>

      <section id="why-choose-us">
        <USPSection />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="pricing">
        <PricingPlans />
      </section>

      <BottomCTA
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        onOpenChatModal={() => setIsChatModalOpen(true)}
        onOpenCounsellorModal={() => setIsCounsellorModalOpen(true)}
      />

      <ModalForm
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        title="Book Your Free Trial Class"
        type="trial"
      />

      <ModalForm
        isOpen={isCounsellorModalOpen}
        onClose={() => setIsCounsellorModalOpen(false)}
        title="Talk to a Counsellor"
        type="counsellor"
      />

      <ChatBotModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
      />
    </div>
  );
}

export default App;
