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
            <title>Remotcare - Privacy Policy</title>
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
                Privacy Policy
              </h1>

              <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl space-y-8">
                {/* Intro */}
                <section>
                  <p className="mb-4">
                    <strong>Last Updated: 01/07/2023</strong>
                  </p>
                  <p>
                    We know that the privacy of your personal data is very
                    important to you. This Privacy Policy describes how we
                    collect, use, disclose and/or decimate information including
                    personally identifiable data (“Personal Data”) and other
                    information when you visit our website{" "}
                    <a
                      href="https://www.remotcare.com"
                      className="text-blue-600"
                    >
                      www.remotcare.com
                    </a>{" "}
                    (the “Site”) or use our mobile app and other affiliated
                    technological platforms to consume our health tech services.
                  </p>
                </section>

                {/* 1. Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    1. Information We Collect
                  </h2>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    1.1 Personal Information
                  </h3>
                  <p className="mb-4">
                    We may collect personal information from you when you
                    voluntarily provide it to us through forms, registrations,
                    or other interactions on the Site. This may include your
                    name, email address, gender, contact information, date of
                    birth, age and any other personal and health/medical
                    information you choose to provide. By voluntarily providing
                    us with Personal Data, you are consenting to our use of it,
                    in accordance with this Privacy Policy.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    1.2 Usage Information
                  </h3>
                  <p className="mb-4">
                    We may automatically collect certain information about your
                    device, browsing actions, and patterns when you access and
                    use our Site. This may include your IP address, browser
                    type, operating system, referring URLs, and other technical
                    information.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    1.3 Location Information
                  </h3>
                  <p>
                    Our Service may collect and use your location information
                    (for example, by requesting your location in your profile or
                    by using the GPS on your mobile device) to provide certain
                    functionality of our Service. We may use your location
                    information in conjunction with your Personal Data.
                  </p>
                </section>

                {/* 2. Use of Information */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    2. Use of Information
                  </h2>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    2.1 Provide Services
                  </h3>
                  <p className="mb-4">
                    We use the Personal Data you provide in a manner that is
                    consistent with this Privacy Policy. If you provide Personal
                    Data for a certain reason, we may use the Personal Data in
                    connection with the reason for which it was provided. For
                    instance, if you contact us by e-mail, we will use the
                    Personal Data you provide to answer your question or resolve
                    your problem. Also, if you provide Personal Data in order to
                    obtain access to Remotcare Services, we will use your
                    Personal Data to provide you with access to such services,
                    in conjunction with such services and to monitor your use of
                    such services. We may also use the personal information we
                    collect to provide you with the health tech services you
                    request and to fulfil any other purposes disclosed to you at
                    the time of collection.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    2.2 Communication
                  </h3>
                  <p className="mb-4">
                    We may use your personal information to communicate with
                    you, respond to your inquiries, provide customer support,
                    and send you important updates or promotional materials
                    related to our services. You can opt out of receiving these
                    communications at any time.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    2.3 Improve User Experience
                  </h3>
                  <p>
                    We may use the information we collect to analyze trends,
                    monitor the usage of the Site, and improve the overall user
                    experience. This may include the use of cookies and similar
                    tracking technologies. You can adjust your browser settings
                    to refuse cookies, but please note that some features of the
                    Site may not function properly as a result.
                  </p>

                  <p className="mt-4">
                    If Remotcare intends on using any Personal Data in any
                    manner that is not consistent with this Privacy Policy, you
                    will be informed of such anticipated use prior to or at the
                    time at which the Personal Data is collected.
                  </p>
                </section>

                {/* 3. Use of Cookies */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Use of Cookies</h2>
                  <p className="mb-4">
                    Cookies are small text files that, like most other Web
                    servers, we place in your device that you use to access our
                    website. This is done to recognise your device during a
                    session or in your future visits to our website, primarily
                    in order to provide better user experience.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    3.1 Types of cookies used:
                  </h3>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>
                      <strong>3.1.1 Essential Cookies:</strong> Necessary for
                      the operation of the Site and enable you to navigate and
                      use its features.
                    </li>
                    <li>
                      <strong>3.1.2 Analytics Cookies:</strong> Collect
                      information about how visitors use the Site. This helps us
                      understand and improve performance. Data collected is
                      aggregated and anonymous.
                    </li>
                    <li>
                      <strong>3.1.3 Functional Cookies:</strong> Allow the Site
                      to remember choices you make and provide personalization
                      (e.g., language preference settings).
                    </li>
                    <li>
                      <strong>3.1.4 Advertising Cookies:</strong> Used to
                      deliver personalized advertisements based on browsing
                      activities and interests.
                    </li>
                  </ul>

                  <p className="mb-4">
                    We will use cookies to identify how you arrived at our
                    website, to sample what pages you found more interesting or
                    relevant, navigational experience and patterns around our
                    website to make it more effective and to derive choices on
                    how to make it relevant for users. Depending on the type and
                    settings of your browser, cookies may be accepted by
                    default. You may change your browser settings to delete
                    existing cookies or prevent future cookies. If you disable
                    cookies, certain parts and functions of our website may not
                    be available.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    3.2 Cookie Consent
                  </h3>
                  <p className="mb-2">
                    <strong>3.2.1 Implied Consent:</strong> By using the Site,
                    you are giving your implied consent for us to place cookies
                    on your device in accordance with this Cookie Policy.
                  </p>
                  <p className="mb-2">
                    <strong>3.2.2 Cookie Banner:</strong> Upon your first visit
                    to the Site, you will be presented with a cookie banner or
                    pop-up notice seeking your consent to use non-essential
                    cookies. By continuing to use the Site and not adjusting
                    your settings, you are consenting to our use of cookies.
                  </p>
                </section>

                {/* 4. Data Sharing */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    4. Data Sharing and Disclosure
                  </h2>
                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    4.1 Service Providers
                  </h3>
                  <p className="mb-4">
                    We may engage third-party service providers to perform
                    certain functions on our behalf, such as hosting the Site,
                    processing payments, or analyzing data. These service
                    providers will have access to your personal information as
                    necessary to perform their functions but are prohibited from
                    using it for any other purpose.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    4.2 Legal Compliance
                  </h3>
                  <p className="mb-4">
                    We may disclose personal information if required to do so by
                    law or in the good faith belief that such action is
                    necessary to comply with legal obligations, protect and
                    defend our rights or property, or investigate potential
                    violations of applicable laws.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    4.3 Business Transfers
                  </h3>
                  <p>
                    In the event of a merger, acquisition, or sale of all or a
                    portion of our assets, personal information may be
                    transferred or disclosed as part of the transaction. We will
                    notify you via email and/or a prominent notice on the Site
                    of any change in ownership or uses of your personal
                    information.
                  </p>
                </section>

                {/* 5. Links */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    5. Links to other websites and services
                  </h2>
                  <p>
                    This Privacy Policy applies only to the Platform and to the
                    services provided. We do not permit third parties to collect
                    Personal Data on our website or platform, but our website
                    and platform may contain links to other web sites or
                    services not operated or controlled by Remotcare (the “Third
                    Party Sites”). The policies and procedures we described here
                    do not apply to the Third Party Sites. The links from this
                    website and platform do not imply that Remotcare endorses or
                    has reviewed the Third Party Sites. We suggest contacting
                    those sites directly for information on their privacy
                    policies.
                  </p>
                </section>

                {/* 6. Security */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
                  <p>
                    We implement reasonable security measures to protect the
                    personal information we collect. However, please be aware
                    that no method of transmission over the internet or
                    electronic storage is 100% secure, and we cannot guarantee
                    absolute security.
                  </p>
                </section>

                {/* 7. Rights */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                  <p>
                    You have the right to access, update, and correct
                    inaccuracies in your personal information. You may also have
                    the right to request the deletion or restriction of your
                    personal information, subject to applicable legal
                    requirements. Please contact us using the information
                    provided below to exercise your rights.
                  </p>
                </section>

                {/* 8. Changes */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    8. Changes to the Privacy Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or legal obligations. We
                    will notify you of any material changes by posting the
                    updated Privacy Policy on the Site and updating the
                    effective date.
                  </p>
                </section>

                {/* 9. Contact */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                  <p>
                    If you have any questions or concerns regarding this Privacy
                    Policy or our privacy practices, please contact us at{" "}
                    <a
                      href="mailto:privacy@remotcare.com"
                      className="text-blue-600"
                    >
                      privacy@remotcare.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
