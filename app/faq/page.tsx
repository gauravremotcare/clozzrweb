"use client";

import React, { useState } from "react";
import Head from "next/head";
import { Colors, gradients } from "@/src/assets/colors";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { FaUserFriends, FaBriefcaseMedical } from "react-icons/fa";

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
            <title>Remotcare - FAQ</title>
            <meta
              name="description"
              content="Remotcare FAQ - Answers to common questions about remote health monitoring, data privacy, device compatibility, and provider support."
            />
          </Head>

          <div
            className="flex flex-col min-h-screen"
            style={{ background: gradients.gradientbackground }}
          >
            <div className="container mx-auto px-4 py-10 md:py-20 max-w-5xl">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                ❓ Frequently Asked Questions (FAQ)
              </h1>

              {/* Individuals & Families Section */}
              <section className="mb-16">
                <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  <FaUserFriends className="mr-3 text-blue-600" size={28} />
                  For Individuals & Families
                </h2>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    1. What is Remotcare and how does it work?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Remotcare is a collaborative health technology platform for
                    remote health monitoring and connected care. You can track
                    your own health and that of your loved ones, access their
                    reports, and connect with healthcare providers — all in one
                    app.
                  </p>
                </article>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    2. How secure is the personal health data stored on
                    Remotcare?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We take your privacy very seriously. Remotcare is being
                    developed with end-to-end encryption and strict access
                    controls to protect your health data. We are actively
                    working to align with international healthcare data
                    standards such as HIPAA, GDPR, and India’s DPDP Act. As the
                    platform grows, we will continue strengthening our security
                    and compliance framework to ensure your data is always safe
                    and private.
                  </p>
                </article>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    3. Can multiple family members or caregivers monitor the
                    same individual’s health data?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. You can grant access to trusted family members or
                    caregivers, so they can monitor health information securely.
                  </p>
                </article>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    4. Is Remotcare compatible with health devices and
                    wearables?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. Remotcare acts as a Health IoT aggregator, integrating
                    data from popular wearables, smartwatches, and medical IoT
                    devices into one place.
                  </p>
                </article>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    5. Can I access past health data and generate reports for
                    doctors?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. All your historical data is stored and organized, and
                    you can generate detailed health reports for medical
                    consultations anytime.
                  </p>
                </article>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    6. Can I invite my family members or caregivers to join
                    Remotcare?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. You can invite family, relatives, or caregivers to stay
                    connected and collaborate in managing health.
                  </p>
                </article>
              </section>

              {/* Providers Section */}
              <section>
                <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  <FaBriefcaseMedical
                    className="mr-3 text-blue-600"
                    size={28}
                  />
                  For Providers (Health Coaches, Dietitians, Doctors)
                </h2>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    7. How can Remotcare help me as a health coach or dietitian?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Remotcare gives you a single platform to monitor your
                    clients’ health data, offer personalized guidance, and build
                    stronger client relationships. You can also create your
                    professional profile and brand presence.
                  </p>
                </article>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    8. Can I bring my existing clients to Remotcare?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. You can invite your existing clients to join Remotcare
                    and provide them with a better digital health experience,
                    including monitoring, analytics, and continuous engagement.
                  </p>
                </article>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    9. Are there any platform fees or commissions?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    No. Remotcare charges zero platform fees for listing your
                    services or working with your clients. All your earnings
                    remain yours.
                  </p>
                </article>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    10. Does Remotcare support passive income opportunities?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. Providers can earn passive income through referrals of
                    other professionals or clients, in addition to revenue from
                    their own services.
                  </p>
                </article>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    11. Can I collaborate with other professionals on the
                    platform?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. You can build and manage teams of assistants,
                    nutritionists, or coaches and work collaboratively to serve
                    your clients more effectively.
                  </p>
                </article>

                <article className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    12. How secure is client data shared with providers?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Client data is protected with the same healthcare-grade
                    security standards. Clients retain control of their data and
                    grant explicit permissions to providers they trust.
                  </p>
                </article>
              </section>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
