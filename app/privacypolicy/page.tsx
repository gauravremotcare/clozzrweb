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
                    <strong>Last Updated: 09 Nov 2025</strong>
                  </p>
                  <p className="mb-4">
                    This{" "}
                    <a
                      href="https://www.remotcare.com"
                      className="text-blue-600 hover:underline"
                    >
                      https://www.remotcare.com/
                    </a>{" "}
                    (&quot;<strong>Website</strong>&quot;) and/or the
                    &apos;Clozzr&apos; (&quot;
                    <strong>Application</strong>&quot;) (the Website and
                    Application together, as the context permits, hereinafter
                    referred as the &quot;<strong>Platform</strong>&quot;) is
                    owned and operated by{" "}
                    <strong>REMOTCARE SOLUTIONS PRIVATE LIMITED</strong>{" "}
                    (hereinafter, as the context, referred as &quot;
                    <strong>Remotcare</strong>&quot; or &quot;
                    <strong>We</strong>&quot; or &quot;
                    <strong>Us</strong>&quot; or &quot;<strong>Our</strong>
                    &quot;) its registered office at C/o SUSHIL KR GHOSH, Vill-
                    Barijahattay, Panchanantala, P.O Chanditala, Hooghly,
                    Hooghly, West Bengal, India, 712702, CIN
                    U72900WB2021PTC244694.
                  </p>
                  <p className="mb-4">
                    We take the privacy of your information seriously. This
                    privacy policy (hereinafter referred to as the &quot;
                    <strong>Privacy Policy</strong>&quot;) describes the types
                    of personal information We collect from You through the
                    Platform. It also describes the purpose and how we collect,
                    use, disclose and/or decimate information including
                    personally identifiable data like name, age, sex, address,
                    etc., (&quot;<strong>Identifiable Information</strong>
                    &quot;) and other information including, but not limited to
                    data captured by Google Health Connect and/or Apple Health
                    and/or any other relevant application via which You share
                    health, fitness and limited medical information when you
                    visit the Platform and other affiliated technological
                    platforms to consume our health tech services (&quot;
                    <strong>Health Information</strong>&quot;) (the Identifiable
                    Information and the Health Information are together, as the
                    context permits, referred to, as the &quot;
                    <strong>Personal Information</strong>&quot;). It also tells
                    you about your rights and choices with respect to your
                    personal information, and how you can contact us about our
                    privacy practices.
                  </p>
                  <p className="mb-4">
                    By accessing the Platform, You agree to the collection and
                    use of Your data, including Your Personal Information by Us
                    in the manner provided in this Privacy Policy. This Privacy
                    Policy is subject to change at any time without notice. To
                    make sure you are aware of any changes, please review this
                    Privacy Policy periodically. By visiting the Platform and/or
                    using Our services, You agree to be bound by the terms and
                    conditions of this Privacy Policy. If you do not agree
                    please do not use or access the Platform. By mere use of the
                    Website, you expressly consent to our use and disclosure of
                    your data in accordance with this Privacy Policy. This
                    Privacy Policy is incorporated into and subject to the Terms
                    of Use. This Policy applies only to our services and we are
                    not responsible for the content or privacy practices on any
                    other website to which the Platform links or that links to
                    our services. We encourage you to review the privacy
                    policies of those other websites or services so that you can
                    understand how they collect, use and share your information.
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
                    or other interactions on the Platform. This may include your
                    name, email address, geo-location, gender, contact
                    information, date of birth, age and any other personal and
                    health/medical information you choose to provide. This
                    allows us to provide services and features that most likely
                    meet your needs, and to customize our Platform to make your
                    experience safer and easier. More importantly, while doing
                    so we collect data from you that we consider necessary for
                    achieving this purpose. If you transact with us, we collect
                    some additional information, such as a billing address, a
                    credit/debit card number and a credit/debit card expiration
                    date and/or other payment instrument details and tracking
                    information from cheques or money orders.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    1.2 Usage Information
                  </h3>
                  <p className="mb-4">
                    We may automatically collect certain information about your
                    device, browsing actions, and patterns when you access and
                    use the Platform. This may include your IP address, browser
                    type, operating system, referring URLs, and other technical
                    information.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    1.3 Location Information
                  </h3>
                  <p>
                    Our Service may collect and use your location information
                    (for example, by requesting your location in your profile or
                    by using the GPS on your mobile device), even when the
                    Application is closed, to provide certain functionality of
                    our Service. We may use your location information in
                    conjunction with your Personal Information.
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
                    We use the Personal Information you provide in a manner that
                    is consistent with this Privacy Policy. If you provide
                    Personal Information for a certain reason, we may use the
                    Personal Information in connection with the reason for which
                    it was provided. For instance, if you contact us by e-mail,
                    we will use the Personal Information you provide to answer
                    your question or resolve your problem. Also, if you provide
                    Personal Information in order to obtain access to Remotcare
                    Services, we will use your Personal Information to provide
                    you with access to such services, in conjunction with such
                    services and to monitor your use of such services. We may
                    also use the personal information we collect to provide you
                    with the health tech services you request and to fulfil any
                    other purposes disclosed to you at the time of collection.
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
                    monitor the usage of the Platform, and improve the overall
                    user experience. This may include the use of cookies and
                    similar tracking technologies. You can adjust your browser
                    settings to refuse cookies, but please note that some
                    features of the Platform may not function properly as a
                    result.
                  </p>

                  <p className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                    If Remotcare intends on using any Personal Information in
                    any manner that is not consistent with this Privacy Policy,
                    you will be informed of such anticipated use prior to or at
                    the time at which the Personal Information is collected.
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
                    in order to provide better user experience. We place both
                    permanent and temporary cookies in your computer&apos;s hard
                    drive. We use data collection devices such as
                    &quot;cookies&quot; on certain pages of the Platform to help
                    analyze our web page flow, measure promotional
                    effectiveness, and promote trust and safety. We offer
                    certain features that are only available through the use of
                    a &quot;cookie&quot;. You are always free to decline our
                    cookies if your browser permits, although in that case you
                    may not be able to use certain features on the Platform and
                    you may be required to reenter your password more frequently
                    during a session. Additionally, you may encounter
                    &quot;cookies&quot; or other similar devices on certain
                    pages of the Platform that are placed by third parties. We
                    do not control the use of cookies by third parties.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    3.1 Types of cookies used:
                  </h3>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>
                      <strong>3.1.1 Essential Cookies:</strong> Necessary for
                      the operation of the Platform and enable you to navigate
                      and use its features.
                    </li>
                    <li>
                      <strong>3.1.2 Analytics Cookies:</strong> Collect
                      information about how visitors use the Platform. This
                      helps us understand and improve performance. Data
                      collected is aggregated and anonymous.
                    </li>
                    <li>
                      <strong>3.1.3 Functional Cookies:</strong> Allow the
                      Platform to remember choices you make and provide
                      personalization (e.g., language preference settings).
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
                    <strong>3.2.1 Implied Consent:</strong> By using the
                    Platform, you are giving your implied consent for us to
                    place cookies on your device in accordance with this Cookie
                    Policy.
                  </p>
                  <p className="mb-2">
                    <strong>3.2.2 Cookie Banner:</strong> Upon your first visit
                    to the Platform, you will be presented with a cookie banner
                    or pop-up notice seeking your consent to use non-essential
                    cookies. By continuing to use the Platform and not adjusting
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
                    certain functions on our behalf, such as hosting the
                    Platform, processing payments, or analyzing data. These
                    service providers will have access to your personal
                    information as necessary to perform their functions but are
                    prohibited from using it for any other purpose.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    4.2 Legal Compliance
                  </h3>
                  <p className="mb-4">
                    We may disclose personal information if required to do so by
                    law or in the good faith belief that such action is
                    necessary to comply with legal obligations, protect and
                    defend our rights or property, or investigate potential
                    violations of applicable laws. In the event of a personal
                    data breach, Remotcare will notify affected Users and the
                    Data Protection Board of India in accordance with DPDP Act
                    requirements.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    4.3 Business Transfers
                  </h3>
                  <p className="mb-4">
                    In the event of a merger, acquisition, or sale of all or a
                    portion of our assets, personal information may be
                    transferred or disclosed as part of the transaction. We will
                    notify you via email and/or a prominent notice on the
                    Platform of any change in ownership or uses of your personal
                    information.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    4.4 Health Data Protection
                  </h3>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500 mb-4">
                    <p className="mb-2">
                      <strong>
                        Health data accessed through Google Health Connect is
                        used only for user-facing features, and is never shared,
                        sold, used for advertising, or used for behavioral
                        profiling.
                      </strong>
                    </p>
                  </div>

                  <p className="mb-2">
                    The information collected by Us, including but not limited
                    to Identifiable Data, and/or the Health Information
                    collected from Google Health Connect or Apple Health, or
                    other affiliated technological platforms to consume our
                    health tech services, if any:
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                    <li>is used only for user-facing features,</li>
                    <li>
                      is never shared, sold, used for advertising, marketing or
                      used for behavioural profiling.
                    </li>
                  </ul>
                </section>

                {/* 5. Links */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    5. Links to Other Websites and Services
                  </h2>
                  <p>
                    This Privacy Policy applies only to the Platform and to the
                    services provided. We do not permit third parties to collect
                    Personal Information on our website or platform, but our
                    website and platform may contain links to other web sites or
                    services not operated or controlled by Remotcare (the
                    &quot;Third Party Sites&quot;). The policies and procedures
                    we described here do not apply to the Third Party Sites. The
                    links from this website and platform do not imply that
                    Remotcare endorses or has reviewed the Third Party Sites. We
                    suggest contacting those sites directly for information on
                    their privacy policies.
                  </p>
                </section>

                {/* 6. Security */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
                  <p className="mb-4">
                    We implement reasonable security measures to protect the
                    personal information we collect. However, please be aware
                    that no method of transmission over the internet or
                    electronic storage is 100% secure, and we cannot guarantee
                    absolute security.
                  </p>

                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 mb-4">
                    <p className="mb-2">
                      <strong>Important:</strong> We do not modify or alter
                      health data sourced from devices or services such as
                      Health Connect.
                    </p>
                  </div>

                  <p className="mb-4">
                    This Privacy Policy is aligned with the Information
                    Technology (Intermediary Guidelines and Digital Media Ethics
                    Code) Rules, 2021, replacing the 2011 Rules.
                  </p>

                  <p className="mb-4">
                    All data transmitted between Your device and Our servers is
                    protected using industry standard encryption, including TLS
                    1.3, wherever supported.
                  </p>

                  <h3 className="font-semibold text-xl mt-4 mb-2">
                    6.1 Technical Safeguards
                  </h3>
                  <p className="mb-2">
                    We use strong technical safeguards such as:
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                    <li>TLS 1.2 or higher encryption for data in transit</li>
                    <li>AES-256 encryption for data stored at rest</li>
                    <li>Role-based access control and restricted access</li>
                    <li>Secure authentication and authorization protocols</li>
                  </ul>

                  <p>
                    We regularly review and improve our security measures to
                    protect your personal and health information from
                    unauthorized access or misuse.
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

                {/* 9. Retention of Data */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    9. Retention of Data
                  </h2>
                  <p>
                    We retain the Personal Information for as long as necessary
                    for the use of our products and/or services or to provide
                    access to and use of Platform, or for other essential
                    purposes such as complying with our legal obligations,
                    resolving disputes, enforcing our agreements and as long as
                    processing and retaining your Personal Information is
                    necessary and is permitted by applicable law. Because these
                    needs can vary for different data types and purposes, actual
                    retention periods can vary significantly. Even if we delete
                    your Personal Information, it may persist on backup or
                    archival media for audit, legal, tax or regulatory purposes.
                  </p>
                </section>

                {/* 10. Your Consent */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Your Consent</h2>
                  <p>
                    By using the Platform and/or by providing your information,
                    you consent to the collection and use of the information you
                    disclose on the Platform in accordance with this Privacy
                    Policy, including but not limited to your consent for
                    sharing your information as per this Privacy Policy. If we
                    decide to change our privacy policy, we reserve the right
                    but not obligated to post those changes on this page so that
                    you are always aware of what information we collect, how we
                    use it, and under what circumstances we disclose it.
                    However, as advised above, please go through our Privacy
                    Policy at regular intervals.
                  </p>
                </section>

                {/* 11. User Declarations */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    11. User Declarations
                  </h2>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="mb-2 font-medium">
                      By using our Platform, you acknowledge and declare that:
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4">
                      <li>
                        I understand and have the knowledge that Personal
                        Information is being collected.
                      </li>
                      <li>
                        I understand and have the knowledge of the purpose for
                        which my Personal Information is being collected.
                      </li>
                      <li>
                        I understand and have the knowledge of the intended
                        recipients of the information.
                      </li>
                      <li>
                        I understand that I have the option not to provide the
                        data or information sought to be collected by You and
                        the Platform.
                      </li>
                      <li>
                        I understand that I also have an option (while availing
                        Your Services or otherwise) to withdraw my consent given
                        earlier to You and understand and accept that such
                        withdrawal of the consent shall be sent in writing and
                        in such case You shall have the option not to provide
                        the services for which the said information was sought
                        at its discretion.
                      </li>
                      <li>
                        I read and have understood this Privacy Policy and all
                        other policies governing the usage of the Platform.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 12. Grievance Officer */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    12. Grievance Officer
                  </h2>
                  <p className="mb-4">
                    In accordance with Information Technology Act 2000 and rules
                    made there under, the name and contact details of the
                    Grievance Officer are provided below:
                  </p>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:grievance@remotcare.com"
                        className="text-blue-600 hover:underline"
                      >
                        grievance@remotcare.com
                      </a>
                    </p>
                  </div>
                </section>

                {/* 13. App Permissions */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    13. App Permissions That We Capture
                  </h2>
                  <p className="mb-4">
                    We ask for the following app permissions while onboarding,
                    in order to optimize the experience for you:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left font-semibold">
                            Permission
                          </th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">
                            Purpose
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">
                            Location
                          </td>
                          <td className="border border-gray-300 p-3">
                            It is recommended that you set your location sharing
                            &apos;Always&apos; as it helps us to show you
                            location specific data like availability of products
                            or nearby healthcare service provider.
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">
                            Camera
                          </td>
                          <td className="border border-gray-300 p-3">
                            To allow you to take a photo of prescriptions &
                            directly upload it to the app.
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">
                            Photos/Media/Files
                          </td>
                          <td className="border border-gray-300 p-3">
                            Media access permission is needed to store and
                            retrieve your uploads such as prescription uploads
                            on your device.
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">
                            SMS
                          </td>
                          <td className="border border-gray-300 p-3">
                            To support automatic OTP confirmation, so that you
                            don&apos;t have to enter the authentication code
                            manually.
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">
                            Receive SMS
                          </td>
                          <td className="border border-gray-300 p-3">
                            This helps us to send you payment related SMS by our
                            payment partners.
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">
                            Access Wifi State
                          </td>
                          <td className="border border-gray-300 p-3">
                            This helps us to optimize your experience based on
                            the Wifi&apos;s strength and signals, especially for
                            optimizing video consultations.
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">
                            Record Audio
                          </td>
                          <td className="border border-gray-300 p-3">
                            To enable video consultations with doctors.
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">
                            Bluetooth
                          </td>
                          <td className="border border-gray-300 p-3">
                            Bluetooth is used to redirect to bluetooth headset
                            during video consultations.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 14. Contact */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions or concerns regarding this Privacy
                    Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-lg">
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:privacy@remotcare.com"
                        className="text-blue-600 hover:underline"
                      >
                        privacy@remotcare.com
                      </a>
                    </p>
                  </div>
                </section>

                {/* Company Info Footer */}
                <section className="border-t pt-6 mt-8">
                  <div className="text-center text-gray-600">
                    <p className="font-semibold mb-2">
                      REMOTCARE SOLUTIONS PRIVATE LIMITED
                    </p>
                    <p className="text-sm">
                      C/o SUSHIL KR GHOSH, Vill- Barijahattay, Panchanantala,
                      <br />
                      P.O Chanditala, Hooghly, Hooghly, West Bengal, India,
                      712702
                    </p>
                    <p className="text-sm mt-2">CIN: U72900WB2021PTC244694</p>
                  </div>
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
