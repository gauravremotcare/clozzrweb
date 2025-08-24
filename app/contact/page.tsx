"use client";
import { Colors } from "@/src/assets/colors";
import Contact from "@/src/components/ContactUs";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import React, { useState } from "react";

export default function About() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <div>
      <div
        className="flex flex-col min-h-screen"
        style={{ background: Colors.light }}
      >
        <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />

        <main className="container mx-auto px-4 py-12 mt-20 flex-grow space-y-14">
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
