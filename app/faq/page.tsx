"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Colors, gradients } from "@/src/assets/colors";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function PrivacyPolicy() {
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
            <title>Remotcare - faq</title>
            <meta
              name="description"
              content="Remotcare Privacy Policy - How we collect, use, disclose, and protect your personal data when you use our health tech services."
            />
          </Head>
          <div
            className="flex flex-col min-h-screen"
            style={{ background: gradients.gradientbackground }}
          >
            <div className="container mx-auto px-4 py-10 md:py-20">
              <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
                FAQ
              </h1>

              <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl space-y-8">
                {/* Intro */}
                <section>
                  <p className="mb-4">
                    <strong>What is Remotcare and how does it work?</strong>
                  </p>
                  <p>
                    A collaborative health technology platform is called
                    Remotcare. where individuals may receive various forms of
                    remote healthcare support while also monitoring the health
                    of their relatives and friends. Even if he is not physically
                    present, the person who would look after his or her loved
                    ones can care for that family member virtually.
                  </p>
                </section>

                {/* 1. Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    1. How secure is the personal health data recorded and
                    stored on Remotcare?
                  </h2>
                  <p className="mb-4">
                    The most advanced security standard currently being
                    developed will be used by us.
                  </p>
                </section>

                {/* 2. Use of Information */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    2. Can multiple family members or caregivers’ access and
                    monitor the same individual’s health data?
                  </h2>

                  <p className="mb-4">
                    Yes, providing the owner of the data grants access, it can
                    be utilised.
                  </p>
                </section>

                {/* 3. Use of Cookies */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    3. Is Remotcare compatible with different types of health
                    monitoring devices and wearables?
                  </h2>
                  <p className="mb-4">
                    Yes, providing the owner of the data grants access, it can
                    be utilised.
                  </p>
                </section>

                {/* 4. Data Sharing */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    4. Is Remotcare compatible with different types of health
                    monitoring devices and wearables?
                  </h2>

                  <p className="mb-4">
                    The Platform will indeed support a variety of health
                    monitoring devices.
                  </p>
                </section>

                {/* 5. Links */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    5. Can I access historical health data and generate reports
                    for medical consultations?
                  </h2>
                  <p>
                    Yes, if you have regularly updated data, the platform will
                    give all of your past health data.
                  </p>
                </section>

                {/* 6. Security */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    6. Can I invite other family members or caregivers to join
                    the Remotcare platform?
                  </h2>
                  <p>
                    Yes, you are welcome to invite all of your loved ones,
                    friends, and carers.
                  </p>
                </section>

                {/* 7. Rights */}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
