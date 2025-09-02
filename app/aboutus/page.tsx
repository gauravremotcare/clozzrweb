"use client";

import React, { useState } from "react";
import Head from "next/head";
import { Colors, gradients } from "@/src/assets/colors";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

import {
  FaUsers,
  FaBullseye,
  FaEye,
  FaHeartbeat,
  FaHandsHelping,
  FaShieldAlt,
  FaMobileAlt,
  FaChartBar,
  FaBrain,
  FaUsersCog,
  FaLock,
} from "react-icons/fa";

export default function AboutUs() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <>
      <div>
        <div
          className="flex flex-col min-h-screen"
          style={{ background: Colors.light }}
        >
          <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />
          <Head>
            <title>Remotcare - About Us</title>
            <meta
              name="description"
              content="Learn about Remotcare, the next-generation remote health monitoring platform empowering individuals, families, and healthcare providers."
            />
          </Head>

          <main
            className="flex flex-col min-h-screen"
            style={{ background: gradients.gradientbackground }}
          >
            <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20 text-gray-900">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
                About Us
              </h1>

              {/* Who We Are */}
              <section className="mb-16">
                <h2 className="flex items-center text-3xl font-bold mb-6">
                  <FaUsers className="mr-3 text-blue-600" size={30} />
                  Who We Are
                </h2>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                  Remotcare is a next-generation remote health monitoring and
                  connected care platform designed to make healthcare more
                  accessible, intelligent, and family-centric. We help
                  individuals and families stay on top of their health while
                  enabling healthcare professionals to deliver smarter, more
                  personalized services.
                </p>
              </section>

              {/* Our Mission */}
              <section className="mb-16">
                <h2 className="flex items-center text-3xl font-bold mb-6">
                  <FaBullseye className="mr-3 text-blue-600" size={30} />
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                  To empower every individual and family with tools to monitor,
                  understand, and manage their health from anywhere — while
                  giving health coaches, dietitians, and doctors the ability to
                  support clients through one unified platform.
                </p>
              </section>

              {/* Our Vision */}
              <section className="mb-16">
                <h2 className="flex items-center text-3xl font-bold mb-6">
                  <FaEye className="mr-3 text-blue-600" size={30} />
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                  A world where healthcare is proactive, personalized, and
                  connected — where families never feel distant from care, and
                  professionals can seamlessly engage with clients and
                  communities.
                </p>
              </section>

              {/* What We Do */}
              <section className="mb-16">
                <h2 className="flex items-center text-3xl font-bold mb-8">
                  <FaHeartbeat className="mr-3 text-blue-600" size={30} />
                  What We Do
                </h2>

                {/* Individuals & Families */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                    For Individuals & Families
                  </h3>
                  <ul className="list-disc list-inside text-lg space-y-2 max-w-3xl mx-auto text-gray-800">
                    <li>
                      Remote health monitoring of vital parameters and
                      activities
                    </li>
                    <li>Location-based safety tracking for loved ones</li>
                    <li>Consolidated health data and records in one place</li>
                    <li>AI-powered health insights and alerts</li>
                  </ul>
                </div>

                {/* Health Coaches & Dietitians */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                    For Health Coaches & Dietitians
                  </h3>
                  <ul className="list-disc list-inside text-lg space-y-2 max-w-3xl mx-auto text-gray-800">
                    <li>Build and showcase your professional brand</li>
                    <li>Engage and grow your client community</li>
                    <li>Collaborate with teams to scale services</li>
                    <li>Manage client health data in a single platform</li>
                    <li>
                      Earn passive income with referrals — with zero platform
                      fees
                    </li>
                  </ul>
                </div>
              </section>

              {/* Why Choose Remotcare */}
              <section className="mb-16">
                <h2 className="flex items-center text-3xl font-bold mb-8">
                  <FaHandsHelping className="mr-3 text-blue-600" size={30} />
                  Why Choose Remotcare?
                </h2>
                <ul className="space-y-6 max-w-3xl mx-auto text-gray-800 text-lg">
                  <li className="flex items-center gap-3">
                    <FaMobileAlt className="text-blue-600" size={22} />
                    <span>
                      Health IoT Aggregator – All your devices, one platform
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaChartBar className="text-blue-600" size={22} />
                    <span>
                      Unified Health Data – Seamlessly manage and analyze family
                      health records
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaBrain className="text-blue-600" size={22} />
                    <span>
                      AI-Powered Insights – Receive proactive alerts and
                      real-time analytics
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaUsersCog className="text-blue-600" size={22} />
                    <span>
                      Community-Driven Care – Connect individuals, families, and
                      professionals
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaLock className="text-blue-600" size={22} />
                    <span>
                      Privacy First – Built with security and compliance at its
                      core
                    </span>
                  </li>
                </ul>
              </section>

              {/* Our Promise */}
              <section className="mb-16 max-w-3xl mx-auto text-center px-4">
                <h2 className="flex items-center justify-center text-3xl font-bold mb-6">
                  <FaShieldAlt className="mr-3 text-blue-600" size={30} />
                  Our Promise
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  Your health, your family, your data — always in your control.
                  We are building Remotcare with a commitment to transparency,
                  privacy, and innovation, ensuring you get the most value from
                  your health journey.
                </p>
              </section>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
