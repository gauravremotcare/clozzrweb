"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Colors, gradients } from "@/src/assets/colors";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function TermsAndConditions() {
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
            <title>Remotcare - Terms of Use</title>
            <meta
              name="description"
              content="Remotcare Terms of Use - Terms and conditions governing the use of our health tech services and platform."
            />
          </Head>
          <div
            className="flex flex-col min-h-screen"
            style={{ background: gradients.gradientbackground }}
          >
            <div className="container mx-auto px-4 py-10 md:py-20">
              <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
                Terms of Use
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
                      https://www.remotcare.com
                    </a>{" "}
                    (&quot;<strong>Website</strong>&quot;) and/or the{" "}
                    <strong>&apos;Clozzr&apos;</strong> (&quot;
                    <strong>Application</strong>&quot;) (together, as the
                    context permits, hereinafter referred as the &quot;
                    <strong>Platform</strong>&quot;) is owned and operated by{" "}
                    <strong>REMOTCARE SOLUTIONS PRIVATE LIMITED</strong>{" "}
                    (hereinafter, as the context, referred as &quot;
                    <strong>Remotcare</strong>&quot; or &quot;
                    <strong>We</strong>&quot; or &quot;
                    <strong>Us</strong>&quot; or &quot;<strong>Our</strong>
                    &quot;) having its registered office at C/o SUSHIL KR GHOSH,
                    Vill- Barijahattay, Panchanantala, P.O Chanditala, Hooghly,
                    Hooghly, West Bengal, India, 712702, CIN
                    U72900WB2021PTC244694.
                  </p>
                  <p className="mb-4">
                    By using the goods and/or services (&quot;
                    <strong>Supplies</strong>&quot;) offered under the Platform,
                    &quot;
                    <strong>You</strong> &quot;(hereinafter, as the context
                    permits, referred to as the &quot;<strong>User</strong>
                    &quot; or &quot;
                    <strong>You</strong>&quot; or &quot;<strong>Your</strong>
                    &quot;, that refers to the individual user who, as per the
                    applicable law has the legal capacity and authority to
                    accept these Terms by clicking &quot;
                    <strong>I Agree</strong>,&quot; &quot;
                    <strong>Accept</strong>,&quot; or any similar button or
                    checkbox) are deemed to have accepted these terms and use,
                    as may be revised from time to time (&quot;
                    <strong>Terms</strong>&quot;), which is, for an indefinite
                    period and you understand and agree that you are bound by
                    such Terms till the time you use the Supplies and/or access
                    the Platform.
                  </p>
                  <p className="mb-4">
                    By accepting the Terms and/or using the Supplies, You
                    acknowledge that You are authorized to use the Supplies
                    provided by Remotcare and agree to be bound by the Terms.
                    Remotcare reserves the right to change these Terms from time
                    to time at its sole option and without any obligation to
                    inform you, and it is your responsibility to look through
                    them as often as possible. All rights including copyright,
                    in the Platform are owned by Remotcare. Any use of the
                    Platform or its contents, including copying or storing it in
                    whole or part without our permission is prohibited.
                  </p>
                  <p className="mb-4">
                    If you have any queries about these Terms or any complaints
                    or suggestions regarding the Platform, please feel free to
                    write to{" "}
                    <a
                      href="mailto:contact@remotcare.com"
                      className="text-blue-600 hover:underline"
                    >
                      contact@remotcare.com
                    </a>{" "}
                    or call us on{" "}
                    <a
                      href="tel:+917029201297"
                      className="text-blue-600 hover:underline"
                    >
                      +91 7029201297
                    </a>{" "}
                    (Timings: 10:00 Hours to 18:00 Hours, Indian Standard Time).
                  </p>

                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500 mb-4">
                    <p className="mb-2">
                      This document is an electronic record in terms of the
                      Information Technology Act, 2000, and rules framed
                      thereunder, as applicable and in accordance with such
                      other applicable provisions under applicable laws
                      pertaining to electronic records in various statutes (as
                      amended from time to time).
                    </p>
                    <p>
                      This document is published in accordance with the
                      provisions of Rule 3(1)(a) of the Information Technology
                      (Intermediary Guidelines and Digital Media Ethics Code)
                      Rules, 2021 which require the publishing of the rules and
                      regulations, Privacy Policy and Terms for access or usage
                      of the Supplies and the Platform and compliance with
                      Digital Personal Data Protection Act, 2023. This
                      electronic record is generated by a computer system and
                      does not require any physical or digital signatures.
                    </p>
                  </div>
                </section>

                {/* 1. Accessing the Platform */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    1. Accessing the Platform
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>1.1</strong> Remotcare provides the Supplies to
                        the Users through the Platform. User must note that
                        Remotcare does not provide emergency response. In case
                        of medical emergencies the Users must contact local
                        emergency services immediately.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>1.2</strong> Platform, along with its associated
                        products, Supplies, or subscribed-to items (whether or
                        not remunerated by the User), is expressly intended for
                        the exclusive utilization of the Users.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>1.3</strong> We will from time to time make
                        available the Platform updates to improve performance,
                        fix bugs or errors, enhance functionality, reflect
                        changes to the operating system or address security
                        issues. We recommend that You install these updates, and
                        in case of major updates, the Platform and/or the
                        Supplies may not function unless you install these major
                        updates.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 2. Account, Password and Security */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    2. Account, Password and Security
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>2.1</strong> Certain features or services
                        offered on or through the Platform may require You to
                        open an account (&quot;<strong>User Account</strong>
                        &quot;), including setting up an ID and password (&quot;
                        <strong>Login Credentials</strong>&quot;). You are
                        entirely responsible for maintaining the confidentiality
                        of the information You hold for Your account, including
                        Your password, and for any and all activity that occurs
                        under Your account as a result of Your failing to keep
                        this information secure and confidential. You agree to
                        notify Remotcare immediately of any unauthorized use of
                        Your account or password, or any other breach of
                        security. You may be held liable for losses incurred by
                        Remotcare or any other user of or visitor to the
                        Platform due to someone else using your Login
                        Credentials or account as a result of Your failing to
                        keep Your account information secure and confidential.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>2.2</strong> You may not use anyone else&apos;s
                        Login Credentials or account at any time without the
                        express permission and consent of the holder of that
                        Login Credentials or account. Remotcare cannot and will
                        not be liable for any loss or damage arising from Your
                        failure to comply with these obligations.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>2.3</strong> The User shall be required to
                        confirm that they have read and shall comply with these
                        Terms, as displayed on the Platform before the
                        completion of signing up for the User Account.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>2.4</strong> The User shall, unless otherwise
                        offered by the Company, pay a one-time non-refundable
                        subscription fee (&quot;
                        <strong>Subscription Fee</strong>&quot;) at the time of
                        registration. The Subscription Fee shall be valid for a
                        period of one (1) year from the date of activation, and
                        shall automatically renew for successive terms of one
                        (1) year period each, unless terminated earlier. The
                        Subscription Fee must be paid in advance to continue
                        procuring the Supplies. Non-payment of renewal fees
                        within the due date may result in suspension or
                        termination of the User&apos;s account and access to the
                        Platform as per Our applicable policies.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>2.5</strong> The User shall be responsible for
                        maintaining the confidentiality of the username and
                        password. Additionally, the User shall be responsible
                        for all activities associated with the User Account.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>2.6</strong> The User hereby acknowledges that
                        one account (one mobile no. and email id) can be used
                        for accessing the Platform and for making of payments,
                        as may be applicable.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>2.7</strong> The User hereby acknowledges that
                        the account will be activated only upon receipt of
                        required details by Remotcare and any additional details
                        as may be required from time to time, and Remotcare may
                        at its sole discretion reject the activation of the
                        account.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>2.8</strong> The User agrees that it shall
                        solely remain liable for the activities or consequences
                        of the use or misuse of any information in the User
                        Account in cases, including, where the User shared the
                        login details with any third person or has failed to
                        update the mobile phone number and/or e-mail address on
                        the Platform. Remotcare disclaims all liabilities with
                        respect to use or misuse of the information in the User
                        Account solely attributable to Your action or inaction.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. Access to Platform */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    3. Access to Platform
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>3.1</strong> After the User has registered on
                        the Platform, Remotcare will provide access to the
                        Platform. With access to the Platform, the User will be
                        able to view and procure the Supplies that Remotcare
                        offers upon payment of Charges, as displayed on the
                        Platform (unless otherwise offered by the Company).
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>3.2</strong> The Platform will be accessible
                        through the login credentials. The User having access to
                        the login credentials will be able to manage and control
                        the Supplies. The User shall ensure maintenance of the
                        confidentiality of the login credentials and shall not
                        be passed on to any third person.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 4. Payment Obligations */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    4. Payment Obligations of the User
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>4.1</strong> While availing any of the payment
                        options available on the Platform (&quot;
                        <strong>Payment Options</strong>&quot;) for procuring
                        the Supplies, We will not be responsible or assume any
                        liability, whatsoever in respect of any loss or damage
                        arising directly or indirectly to the User due to any of
                        the following:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Lack of authorisation for any Transaction/s; or</li>
                        <li>
                          Exceeding the preset limit mutually agreed by the End
                          User and Bank/s; or
                        </li>
                        <li>
                          Any payment issues arising out of the Transaction; or
                        </li>
                        <li>
                          Decline of Transaction for any other reason/s; or
                        </li>
                        <li>
                          Reserve Bank of India and/or other applicable banking
                          regulations applicable to the User including but not
                          limited to KYC compliance.
                        </li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>4.2</strong> The Platform offers an integrated
                        payment platform that offers a secure and user-friendly
                        process to facilitate transactions for availing the
                        Supplies offered by Remotcare.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>4.3</strong> All payments made towards the
                        Supplies through the Platform shall be compulsorily in
                        Indian Rupees acceptable in the Republic of India. The
                        Platform will not facilitate transactions with respect
                        to any other form of currency with respect to the
                        purchases made on the Platform.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>4.4</strong> Any payment if withheld and not
                        transferred to the Remotcare for any reason whatsoever,
                        shall be dealt with by the Remotcare in accordance with
                        the refund policy of the payment platforms and as may be
                        communicated to the User.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>4.5</strong> Please note that use of the
                        Supplies and/or the Platform shall not render Remotcare
                        liable or responsible for the non-delivery, non-receipt,
                        non-payment, damage, breach of representations and
                        warranties or non-performance of goods or services or
                        fraud with respect to goods or services provided by a
                        third party service provider, other than Remotcare (the
                        &quot;<strong>Third Party Service Provider</strong>
                        &quot;).
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>4.6</strong> You have specifically authorized
                        Remotcare or its Third Party Service Providers to
                        collect, process, facilitate and remit payments and/or
                        the transactions electronically through the Payment
                        Options. The User&apos;s relationship with Remotcare is
                        on a principal-to-principal basis and by accepting these
                        Terms, the User agrees that Remotcare is an independent
                        contractor for all purposes.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>4.7</strong> The User understands, accepts and
                        agrees that the Payment Options provided by the Platform
                        shall not mean banking or financial service but a
                        facilitation or accessibility provider to avail the
                        Supplies offered by Remotcare, the Third Party Service
                        Providers.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5. Fraudulent Transactions */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    5. Fraudulent Transactions
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>5.1</strong> The Users shall not engage in any
                        form of fraudulent transactions or criminal offences.
                        Any fraudulent schemes or activities aimed at defrauding
                        while using the Platform shall be reported under the
                        relevant law to the appropriate authorities. Upon
                        becoming aware or on suspicion of any such unlikely
                        event Remotcare reserves the right, at its absolute
                        discretion, to immediately, without notice, suspend or
                        terminate the access to Platform and/or the Supplies,
                        without any liability, whatsoever.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>5.2</strong> In the event that Remotcare is
                        notified of an unauthorized debit reported by the User,
                        Remotcare shall be entitled to suspend settlement of the
                        amount associated with the fraudulent transaction
                        pending inquiries, investigations, and resolution by the
                        payment gateway. If the fraudulent transaction results
                        in a chargeback, it shall be resolved by the Platform
                        only upon verification from the payment gateways.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>5.3</strong> Furthermore, Remotcare reserves the
                        right to close, suspend, limit, or put on hold a
                        User&apos;s access to their account and/or the funds
                        available therein in the following scenarios:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>
                          If the User&apos;s KYC credentials are found to be
                          incorrect or fake.
                        </li>
                        <li>For violation of any provisions of these Terms.</li>
                        <li>
                          For violation of any provisions of any other agreement
                          that the User has entered into or might enter into
                          with Remotcare or a Third Party Service Provider in
                          order to reap the full benefit of the Supplies.
                        </li>
                        <li>For violation of any applicable laws.</li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>5.4</strong> The right to close, suspend, limit,
                        or put on hold on the User&apos;s access to the Platform
                        shall remain with Remotcare, in accordance with the
                        extant rules, regulations, or guidelines regarding KYC,
                        as well as to the satisfaction of the Remotcare, without
                        prejudice to any other legal remedy that the Remotcare
                        is entitled to pursue under applicable law.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>5.5</strong> Remotcare reserves the right to
                        settle the amounts in excess from the Users, if under
                        any transaction the Company is paid less than as agreed.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>5.6</strong> Remotcare reserves the right to
                        deny or restrict access to any User at its discretion,
                        including cases of abusive behavior, fraudulent
                        activity, or risk to operational security.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 6. Representations and Warranties */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    6. Representations and Warranties
                  </h2>

                  <p className="mb-4">The User represents and warrants that:</p>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>6.1</strong> As on the date of creation of
                        account, the User is at least eighteen (18) years old;
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>6.2</strong> The User is capable of entering
                        into a lawful contract and to be bound by these Terms.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>6.3</strong> The User is not barred by any law
                        to use the access the Platform and use the Supplies;
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>6.4</strong> It shall comply with all applicable
                        laws and regulations.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>6.5</strong> It agrees and acknowledges that any
                        liability in relation to the goods and/or services
                        procured from a Third Party Service Provider, pursuant
                        to the use of Platform or otherwise, shall solely be
                        dealt with by the User and such Third Party Service
                        Provider, and the User shall not have any claim
                        whatsoever pertaining to these goods and/or services
                        against Remotcare.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>6.6</strong> It shall use the Platform for
                        reasonable and lawful purposes only and shall not
                        indulge in any activity that is not envisaged through
                        the Platform.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>6.7</strong> It shall use the Platform, or the
                        Supplies availed through the Platform, for personal,
                        non-commercial use only and shall not re-sell the same
                        to any other person;
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>6.8</strong> It shall not include or use any
                        false or inaccurate information with respect to its
                        personal information.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>6.9</strong> It shall not take any action that
                        interferes with, degrades or adversely affects Remotcare
                        and/or the Platform.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 7. Responsibilities of the Users */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    7. Responsibilities of the Users
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.1</strong> The User undertakes to not
                        reproduce, download, recreate, sublicense, or undertake
                        any form of distribution in breach with these Terms.
                        Remotcare retains the right to take appropriate actions
                        to safeguard against loss of revenue, damage to
                        reputation, or claims for damages. Such actions may
                        include suspending Your access to Platform and usage of
                        the Supplies, as well as reporting the matter to
                        relevant authorities. In the event You are found to be
                        copying, misusing, transmitting or crawling any data,
                        photographs, graphics or any information available on
                        the Platform for any purpose other than that being a
                        bona fide purpose, Remotcare reserves the right to take
                        such action that it deems fit including stopping access,
                        suspending the account and claiming damages.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.2</strong> By accessing and using the
                        Platform, You expressly authorise Remotcare to display
                        advertisements, offers, and other content, sponsored or
                        otherwise, across the Supplies. This authorization is
                        conferred without any requirement for compensation to
                        You. The data and information concerning You are
                        utilized to deliver relevant suggestions and
                        recommendations to You and other Users.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.3</strong> The User access and use of the
                        Platform does hereby specifically agree that it shall,
                        at all times, comply with the requirements of the
                        Information Technology Act, 2000 and Digital Personal
                        Data Protection Act, 2023 as also the rules,
                        regulations, guidelines, bye laws and notifications made
                        thereunder while assessing or feeding information or
                        data into the computers, computer systems or computer
                        network of the Platform. The said User of the Platform
                        does further unequivocally declare that in case it
                        violates any provisions of the said acts and/or rules,
                        regulations, guidelines, bye laws and notifications made
                        thereunder, it shall be solely responsible for all his
                        acts, deeds and things and that he alone shall be liable
                        for civil and criminal liability thereunder or under any
                        other law for the time being in force.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.4</strong> The User shall access the Platform
                        only using authorised and lawful means.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.5</strong> The User shall not use the
                        Platform, or any portion thereof, to transmit, publish,
                        post, upload, distribute or disseminate any
                        inappropriate, harassing, abusive, defamatory,
                        libellous, obscene, illegal or deceptive content.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.6</strong> The User shall not use the Platform
                        in a manner that:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>
                          Is prohibited by any law or regulation, or facilitates
                          the violation of any law or regulation, or
                        </li>
                        <li>
                          May disrupt a third party&apos;s similar use, or
                        </li>
                        <li>
                          Violate or temper with the security of the Platform.
                        </li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.7</strong> The User shall ensure that the
                        Platform is not used to upload, post, transmit, or
                        otherwise make available any content that contains a
                        virus or any other form of malicious code or data that
                        is likely or intended to have an adverse impact on or
                        provide unauthorized access to, the Platform or any
                        other software, hardware, services or data.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.8</strong> The User shall not attempt to gain
                        unauthorized access to any accounts, computer systems or
                        networks connected to the Platform, through hacking, or
                        any other means, or obtain or attempt to obtain any
                        materials or information through any means not
                        intentionally made available to the User.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.9</strong> The User shall not copy, modify,
                        adapt, translate, or reverse engineer any portion of the
                        Platform, its content or materials and/or the Supplies.
                        Further, the User shall not use the Platform to develop
                        or to assist anyone in developing a competitive
                        business, service or for other competitive purposes.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.10</strong> Without explicit and written
                        consent from Remotcare, You agree not to reproduce,
                        publish, distribute, or otherwise use any data collected
                        on the Platform for commercial or non-commercial
                        purposes. This includes but is not limited to, personal
                        information, User-generated content, and any other data
                        accessible on the Platform. Any unauthorized
                        reproduction or publication of such data is strictly
                        prohibited and may result in legal action.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.11</strong> Users under the age of eighteen
                        (18) may access the services only under the supervision
                        of a parent or legal guardian, who shall be the
                        registered account holder and bear full responsibility
                        for all actions.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.12</strong> All teleconsultations through the
                        Platform are governed by the Telemedicine Practice
                        Guidelines, 2020, issued by the Government of India. By
                        using telemedicine services, Users consent to comply
                        with the said guidelines.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.13</strong> Remotcare utilizes Google Health
                        Connect, Google Maps, and related APIs to enhance
                        platform functionality. By using the Platform, You agree
                        to comply with Google&apos;s Terms of Service and
                        Privacy Policy at{" "}
                        <a
                          href="https://policies.google.com/terms"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Terms of Service
                        </a>
                        . In no event shall Remotcare be responsible for data
                        processed directly by Google.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>7.14</strong> Certain safety features require
                        background location access, even when the Application is
                        closed. By enabling this, You consent to continuous
                        background location tracking strictly for health,
                        safety, and caregiver-monitoring features. Our
                        location-based features use Google Maps services. By
                        using these features, You are also subject to
                        Google&apos;s Privacy Policy and Terms of Service. You
                        agree and acknowledge that Your location data may be
                        processed by Google to power mapping, nearby hospitals,
                        route suggestions, and related functionality.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>7.15</strong> By initiating a video or audio
                        consultation, You expressly consent to the recording and
                        storage of such interactions for compliance, dispute
                        resolution, and quality control.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 8. Rights of Remotcare */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    8. Rights of Remotcare
                  </h2>

                  <p className="mb-4">
                    Remotcare may, unless otherwise provided by the applicable
                    law, at its sole discretion:
                  </p>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>8.1</strong> Exercise the authority to curtail,
                        temporarily suspend, or permanently terminate
                        User&apos;s access to the Platform;
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>8.2</strong> Exercise discretion in declining,
                        relocating, or deleting any content that a User may
                        choose to submit;
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>8.3</strong> Perform the action of relocating or
                        deleting any content accessible on the Platform;
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>8.4</strong> Institute comprehensive principles
                        and boundaries governing the utilization of the Platform
                        and the Supplies;
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>8.5</strong> Users hereby grant their consent to
                        receive various forms of communication, including
                        announcements, administrative notifications, and
                        promotional materials from the Remotcare or any entities
                        affiliated with the Remotcare, including its partners
                        and licensors.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>8.6</strong> Remotcare retains the right to take
                        appropriate actions against the Users, including but not
                        limited to safeguarding against loss of revenue or
                        reputation, seeking damages, terminating access and/or
                        usage of the Supplies, and reporting such instances to
                        relevant authorities. In the event of any unauthorized
                        copying, misuse, transmission, or crawling of data,
                        photographs, graphics, or information from the Platform
                        for purposes other than bona fide intentions, Remotcare
                        reserves the right to undertake suitable measures,
                        including cessation of access and pursuit of damages.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>8.7</strong> Remotcare may, with Users&apos;
                        consent, record or monitor Users&apos; consultations or
                        communications with the third party health care service
                        provider, for quality assurance, compliance, or dispute
                        resolution.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>8.8</strong> Any unauthorized scraping,
                        harvesting, or misuse of Platform data will result in
                        account termination and legal action.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 9. Disclaimer of Warranties and Liabilities */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    9. Disclaimer of Warranties and Liabilities
                  </h2>

                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 mb-4">
                    <p className="mb-2">
                      <strong>Important:</strong> This Platform, the Supplies,
                      all the materials and payment plans included on or
                      otherwise made available to You through the Platform are
                      provided on an &quot;<strong>AS IS</strong>&quot; and
                      &quot;
                      <strong>AS AVAILABLE</strong>&quot; basis without any
                      representation or warranties, express or implied except
                      otherwise specified in writing.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>9.1</strong> No representations, warranties or
                        guarantees whatsoever are made by the Remotcare as to
                        the following:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>
                          Accuracy, adequacy, reliability, completeness,
                          suitability or applicability of the information to a
                          particular situation;
                        </li>
                        <li>
                          The quality of any Supplies, content, information, or
                          other material on the Platform will meet the
                          User&apos;s expectations or requirements;
                        </li>
                        <li>
                          Any errors in the Platform will be corrected; or
                        </li>
                        <li>
                          Other warranties relating to performance,
                          non-performance, or other acts or omissions of
                          Remotcare, its officers, directors, employees,
                          affiliates, agents, licensors, or suppliers.
                        </li>
                        <li>
                          Unavailability or interruptions caused by third-party
                          service providers such as network operators, hosting
                          partners, or device manufacturers.
                        </li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>9.2</strong> Remotcare does not warrant that the
                        Platform; information, content, materials, transaction
                        or Supplies included on or otherwise made available to
                        You through the Platform; the servers; or electronic
                        communication sent from us are free of viruses or other
                        harmful components, despite our best efforts to prevent
                        these incidents.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>9.3</strong> The promotions, advertisements, or
                        partner listings on the Platform do not constitute
                        endorsements or guarantees by Remotcare. Users are
                        advised to verify suitability before relying on such
                        information.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-red-500 bg-red-50 p-4 rounded">
                      <p className="mb-2">
                        <strong>9.4 Medical Disclaimer:</strong> Remotcare is
                        not an emergency or critical care service provider and
                        does not guarantee the availability of medical
                        professionals on a 24/7 basis. Nothing on the Platform
                        constitutes or is meant to constitute, advice of any
                        kind. All medical consultations, opinions, and related
                        services facilitated through the Platform are provided
                        exclusively by independent, third-party healthcare
                        service providers and Remotcare acts solely as a
                        technology facilitator, enabling access to such
                        providers, and does not engage in the practice of
                        medicine or offer medical advice, diagnosis, or
                        treatment. Remotcare assumes no liability or
                        responsibility for the accuracy, completeness, or
                        outcomes of any medical consultation or advice rendered
                        by such third-party healthcare service providers.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>9.5</strong> You are solely responsible for
                        providing complete, accurate, and up-to-date medical
                        history, known allergies, current prescriptions, and any
                        other relevant health information necessary for the
                        provision of services. Remotcare shall, in no event, be
                        liable for any consequences, including but not limited
                        to misdiagnosis, delayed treatment, or adverse health
                        outcomes.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>9.6</strong> The Platform facilitates connecting
                        the third-party healthcare service providers with You
                        solely as independent service providers. Remotcare does
                        not control, supervise, endorse, or guarantee the
                        competence, qualifications, advice, conduct, or actions
                        of such service providers. Any services,
                        recommendations, or opinions rendered by a third-party
                        healthcare service provider are their sole
                        responsibility, and Remotcare shall not be liable for
                        any loss, damage, or consequence arising from reliance
                        on or interaction with such service providers. You
                        acknowledge that engagement with third-party service
                        providers is at Your own discretion and risk.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>9.7</strong> Use of the Platform does not create
                        a doctor–patient relationship between the user and
                        Remotcare. Any such relationship exists solely between
                        the user and the independent healthcare provider.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>9.8</strong> In the event that We cease to
                        operate, or a voluntary/compulsory
                        dissolution/winding-up is initiated, We shall, in
                        accordance with the Digital Personal Data Protection
                        Act, 2023, and other applicable laws, permanently delete
                        or anonymize Your Personal Data in Our possession,
                        custody, or control. This obligation shall not apply to
                        Personal Data that We are required to retain under
                        applicable law, regulatory directives, or judicial
                        orders, or to data necessary for the resolution of
                        ongoing legal proceedings, enforcement of contractual
                        rights, or compliance with statutory audit, tax, or
                        record-keeping obligations. We shall notify you, via
                        email and/or a prominent notice on the Platform, of such
                        deletion and retention, including the legal basis for
                        any retained data, and shall ensure that any retained
                        data is securely stored and not processed for any
                        purpose other than compliance. We will notify You where
                        possible, and following completion of legal obligations,
                        all Your rights and Remotcare&apos;s liabilities shall
                        cease.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>9.9</strong> In no event will any delay, failure
                        or omission (in whole or in part) in enforcing,
                        exercising or pursuing any right, power, privilege,
                        claim or remedy conferred by or arising under the
                        Privacy Policy or by law, be deemed to be or construed
                        as a waiver of that or any other right, so as to bar the
                        enforcement of that, or any other right, power
                        privilege, claim or remedy, in any other instance at any
                        time or times subsequently.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>9.10</strong> Notwithstanding anything contained
                        elsewhere in these Terms, in no event shall Remotcare be
                        liable to the User for any costs or loss incurred or
                        suffered by the User or anyone claiming under the User,
                        including but not limited to any special, exemplary,
                        consequential, incidental, punitive or indirect damages
                        on any theory of liability, whether in contract, tort
                        (including without limitation negligence), strict
                        liability or otherwise. In no event or circumstance
                        shall Remotcare be under any liability to make good any
                        loss whether by way of any monetary payment or
                        otherwise.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>9.11</strong> Remotcare shall not be responsible
                        for inaccurate readings or analytics resulting from
                        device malfunction, Bluetooth connectivity failures,
                        sensor inaccuracies, or outdated OS versions. The
                        AI-generated insights are for informational purposes
                        only and must not be interpreted as medical advice or
                        diagnosis.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 10. Links to Third-Party Applications */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    10. Links to Third-Party Applications, Services and Products
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>10.1</strong> You understand and agree that our
                        Supplies are based on technical support from other third
                        parties. You understand and consent that we may provide
                        some of your sensitive personal information to such
                        third parties in the course of receiving technical or
                        any other support from them. You agree and authorize
                        Remotcare to limit Your rights of using the Platform
                        and/or the Supplies.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>10.2</strong> Within the Platform, the User may:
                        (i) encounter links to other websites or applications;
                        or (ii) be required to accept the terms and conditions
                        for usage of goods or services, that are independently
                        owned and managed by Third Party Service Providers (the
                        &quot;<strong>Third Party Services</strong>&quot;). The
                        User&apos;s interaction with these Third Party Services
                        is subject to the additional terms and conditions, if
                        any, stipulated by those Third Party Service Providers,
                        all of which terms are made a part of these Terms by
                        this reference. You agree to abide by such other terms
                        and conditions, including where applicable representing
                        that You have the legal capacity to use or participate
                        in such Third Party Services. If there is a conflict
                        between these Terms and the terms posted for or
                        applicable to a specific portion of the Third Party
                        Service or for any service offered on or through the
                        Third Party Service, the latter terms shall control with
                        respect to your use of that portion of the Third Party
                        Service or the specific service.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>10.3</strong> Remotcare does not exercise
                        control over any websites or applications or goods or
                        services outside of its own Platform and therefore
                        disclaims responsibility for the content found on any
                        third-party websites or applications or goods or
                        services. It is pertinent to understand that
                        Remotcare&apos;s inclusion of third-party content or
                        links to third-party websites and applications should
                        not be interpreted as an endorsement or validation of
                        such third-party websites or applications by Remotcare.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>10.4</strong> Users&apos; correspondence,
                        transactions/offers or related activities with Third
                        Party Service Providers, including payment processors,
                        are solely between the User and that Third Party Service
                        Provider. User&apos;s correspondence, transactions and
                        usage of the services/offers of such Third Party Service
                        Provider shall be subject to the terms and conditions,
                        policies and other service terms adopted/implemented by
                        such Third Party Service Provider, and the User shall be
                        solely responsible for reviewing the same prior to
                        transacting or availing of the services/offers of such
                        Third Party Service Provider. User agrees that Remotcare
                        shall not be responsible or liable for any loss or
                        damage of any sort incurred as a result of any such
                        transactions/offers with Third Party Service Provider.
                        Any questions, complaints, or claims related to any
                        Third Party Service Provider product or service should
                        be directed to the appropriate Third Party Service
                        Provider.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>10.5</strong> The Platform consolidates content
                        that is both originated by Remotcare and provided by a
                        Third Party Service Provider. Remotcare does not furnish
                        any warranties concerning the precision, entirety, or
                        quality of content contributed by Third Party Service
                        Provider. Therefore, Users are explicitly advised
                        against placing unwarranted reliance on Third Party
                        Service Provider content when availing themselves of the
                        Remotcare services made available on the Platform.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 11. Confidentiality */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    11. Confidentiality
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>11.1</strong> Except as otherwise expressly
                        provided in these Terms, the User shall not, at any time
                        disclose or make available to any person use, copy adapt
                        or alter for any purpose any Confidential Information,
                        obtained by it from Remotcare or the Platform, without
                        the prior written consent of the Remotcare.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>11.2</strong> The User shall treat and keep
                        Confidential Information confidential and take all
                        necessary precautions to ensure that all Confidential
                        Information is held in confidence and minimise the risk
                        or use of such Confidential Information.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>11.3</strong> The following circumstances shall
                        not constitute a breach of this clause by the Remotcare
                        where such Confidential Information is disclosed:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>
                          To Remotcare&apos;s personnel or professional
                          advisers, affiliates to the extent necessary to enable
                          Remotcare to exercise its rights and perform its
                          obligations. Remotcare procures that such personnel or
                          professional advisers maintain the confidentiality of
                          such Confidential Information.
                        </li>
                        <li>
                          If and to the extent it is required to do so by any
                          law or regulation or by any court, or governmental
                          agency or authority.
                        </li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>11.4</strong> Remotcare shall retain all rights
                        in, title to and interest in and to the Remotcare
                        Confidential Information.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>11.5</strong> Without prejudice to any other
                        rights or remedies that the parties may have, the
                        parties agree that damages may not be an adequate remedy
                        for any breach of this clause, and that Remotcare shall
                        be entitled to seek the remedies or injunction, specific
                        performance and other equitable relief for any
                        threatened or actual breach of this clause.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                      <p>
                        For the purpose of this clause, the term &quot;
                        <strong>Confidential Information</strong>&quot; means
                        all proprietary and confidential information, whether
                        commercial, financial, technical or otherwise (whether
                        oral, in writing, machine readable or in any other form)
                        and material (whether electronically recorded, in
                        writing or otherwise) which by its very nature should
                        obviously be treated as secret and confidential or which
                        is designated as such and which Remotcare desire to
                        protect against unrestricted disclosure or competitive
                        use.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 12. Intellectual Property Rights */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    12. Intellectual Property Rights
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>12.1</strong> The User acknowledges that any and
                        all Intellectual Property Rights (including but not
                        limited to all the content of the Platform, trademark,
                        copyright, patent, service marks, etc.) and other
                        proprietary rights in relation to the Platform including
                        without limitation any derivatives, improvements or
                        modifications which ownership is directly attributable
                        to the Remotcare (expressly excluding any personal
                        information, intellectual property which belongs to a
                        third party) and any suggestions, ideas, enhancement
                        requests, feedback, recommendations or other information
                        provided by the User or any other party relating to the
                        Platform or the Supplies shall vest completely and fully
                        with Remotcare within and beyond the territory of India
                        and the User shall have no right or claim to such
                        intellectual property in any manner whatsoever.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>12.2</strong> The Platform consolidates content
                        generated by Remotcare, its partners, affiliates,
                        licensors, associates, and Users. The intellectual
                        property rights (&quot;
                        <strong>Intellectual Property Rights</strong>&quot;),
                        governing all foundational software underpinning the
                        Platform and the material presented within it, inclusive
                        of, though not limited to, software, advertisements,
                        written content, photographs, graphics, images,
                        illustrations, trademarks, logos, audio or video clips,
                        and animations, are the exclusive property of the
                        Remotcare, its partners, licensors, and associates.
                        Users are expressly prohibited from modifying,
                        publishing, transmitting, participating in the transfer
                        or sale of, reproducing, crafting derivative works from,
                        distributing, publicly performing, publicly displaying,
                        or in any manner exploiting any materials or content
                        featured on the Platform, be it in its entirety or in
                        part, without obtaining prior written authorization from
                        Remotcare.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>12.3</strong> Users grant Remotcare a
                        non-exclusive, worldwide, royalty-free license to use,
                        reproduce all feedback, reviews, uploads, or appropriate
                        information (excluding Users&apos; personal or health
                        data) to improve the service provided by Remotcare.
                        Users shall bear exclusive responsibility for all
                        content, whether publicly disseminated or privately
                        transmitted, that they upload, post, send via email,
                        transmit, or otherwise share on the Platform (&quot;
                        <strong>Users&apos; Content</strong>&quot;). Each User
                        affirms and guarantees that they possess full ownership
                        of all Intellectual Property Rights associated with
                        their Users&apos; Content and assure that no aspect of
                        their Users&apos; Content infringes upon the rights of
                        any third party. Furthermore, Users pledge not to
                        showcase or employ the names, logos, marks, labels,
                        trademarks, copyrights, or other intellectual and
                        proprietary rights belonging to third parties on the
                        Platform. Users consent to indemnify and safeguard
                        Remotcare, along with its directors, personnel,
                        affiliates, and assignees, against any and all expenses,
                        damages, losses, and liabilities, including legal costs
                        and attorney fees, arising from any third-party claims,
                        particularly those related to the violation of
                        Intellectual Property Rights due to the display or
                        utilization of names, logos, marks, labels, trademarks,
                        copyrights, or other intellectual and proprietary rights
                        on the Platform, whether by the User directly or through
                        their actions or inactions.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>12.4</strong> The names, logos, marks, labels,
                        trademarks, copyrights, and intellectual and proprietary
                        rights displayed on the Platform and owned by any
                        individual (including Users), organization, or third
                        party are unequivocally acknowledged as the exclusive
                        property of their respective owners. Any disputes,
                        controversies, or matters arising concerning these
                        names, logos, marks, labels, trademarks, copyrights, or
                        intellectual and proprietary rights should be promptly
                        and directly directed to the respective rights holders,
                        with notice to Remotcare.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>12.5</strong> We respect the intellectual
                        property of others. If You believe that Your
                        Intellectual Property Rights have been used in a way
                        that gives rise to concerns of infringement, contact the
                        Grievance Officer.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 13. Privacy Policy */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    13. Privacy Policy
                  </h2>

                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="mb-4">
                      All information collected from You, including but not
                      limited to personal information, health-related
                      information (including, but not limited to medical
                      history, symptoms, diagnoses, treatments, lab result,
                      prescription, and lifestyle factor), anonymised data and
                      payment information, if any, is subject to the
                      Remotcare&apos;s{" "}
                      <a
                        href="/privacy-policy"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                    <p className="mb-4">
                      Before You submit any information to the Platform, please
                      read the Privacy Policy for an explanation of how We will
                      treat Your personal information. By using the Platform,
                      You consent to the collection, use, disclosure and
                      transfer of your personal information for the purpose
                      outlined in the Privacy Policy, and the collection,
                      processing and maintenance of the information. Your use of
                      any part of the Platform indicates Your acceptance of the
                      Privacy Policy and of the collection, use and disclosure
                      of Your personal information in accordance with the
                      Privacy Policy.
                    </p>
                    <p>
                      You have the option not to provide us with certain
                      information or withdraw consent to collect certain
                      information, kindly note that in such an event you may not
                      be able to take full advantage of the entire scope of the
                      Supplies offered by the Company and We reserve the right
                      to not provide You with the Supplies.
                    </p>
                  </div>
                </section>

                {/* 14. Feedback */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">14. Feedback</h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>14.1</strong> As a participant, the User agrees
                        to use careful, prudent, and good judgment when leaving
                        feedback for other Users of the Platform. In the event
                        the feedback violates these Terms, is inappropriate or
                        violates the propriety or privacy of another User,
                        Remotcare may, in its sole discretion, delete the
                        User&apos;s feedback or any User postings; and/or report
                        to law enforcement authorities any actions that may be
                        illegal, and any reports it receives of such conduct. As
                        mandated by the law or at Remotcare&apos;s sole
                        discretion, Remotcare shall cooperate with law
                        enforcement agencies in any investigation of alleged
                        illegal activity on the Platform.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>14.2</strong> Remotcare does not and cannot
                        review every posting made on the Platform. These Terms
                        do not require Remotcare to monitor, police or remove
                        any postings or other information submitted by the User
                        or any other User and Remotcare shall not be responsible
                        for any ensuing liability.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 15. Suspension/Cancellation/Termination */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    15.
                    Suspension/Cancellation/Termination/Inactivation/Deletion
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>15.1</strong> You may deactivate/delete your
                        account from the options available on the Platform or
                        request for deletion of your account by reaching us at{" "}
                        <a
                          href="mailto:contact@remotcare.com"
                          className="text-blue-600 hover:underline"
                        >
                          contact@remotcare.com
                        </a>
                        . Please note that, unless otherwise required by
                        applicable law, Remotcare may retain Your data for as
                        long as necessary for the use of the Supplies or to
                        provide access to and use of Our Platform, or for other
                        essential purposes, such as: (i) complying with our
                        legal obligations, (ii) resolving disputes, (iii)
                        enforcing our agreements and (iv) as long as processing
                        and retaining your Data is necessary and is permitted by
                        applicable law.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>15.2</strong> Even if We delete your Data,
                        including on account of exercise of your right under
                        this paragraph it may persist on backup or archival
                        media for audit, legal, tax or regulatory purposes. If
                        any court or competent authority finds that any
                        provision of this Privacy Notice (or part of any
                        provision) is invalid, illegal or unenforceable, that
                        provision or part-provision will, to the extent
                        required, be deemed to be deleted, and the validity and
                        enforceability of the other provisions of this Privacy
                        Notice will not be affected.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>15.3</strong> Use of the Platform is available
                        only to persons who can form a legally binding contract
                        under the Indian Contract Act, 1872. If We learn that a
                        person under eighteen (18) years of age has used or
                        accessed the Platform or Supplies or any personally
                        identifiable information has been collected on the
                        Platform from under aged persons, then We will take the
                        appropriate steps to delete this information. If You are
                        a parent or guardian and discover that Your child under
                        eighteen (18) years of age has obtained an account on or
                        otherwise accessed the Service, then You may alert Us at{" "}
                        <a
                          href="mailto:contact@remotcare.com"
                          className="text-blue-600 hover:underline"
                        >
                          contact@remotcare.com
                        </a>{" "}
                        or call at{" "}
                        <a
                          href="tel:+917029201297"
                          className="text-blue-600 hover:underline"
                        >
                          +91 7029201297
                        </a>{" "}
                        and request that We delete that child&apos;s personally
                        identifiable information from our systems.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 16. Indemnity */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">16. Indemnity</h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>16.1</strong> You agree to defend, indemnify and
                        hold Remotcare, its directors, shareholders, officers
                        and other representatives harmless from and against any
                        and all claims, costs, damages, losses, liabilities and
                        expenses (including attorneys&apos; fees and costs)
                        arising out of or in connection with:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>User&apos;s access of the Platform;</li>
                        <li>
                          User&apos;s use of the Supplies/features of the
                          Platform;
                        </li>
                        <li>
                          User&apos;s violation or breach of these Terms or any
                          applicable law or regulation;
                        </li>
                        <li>
                          User&apos;s violation of any rights of any third party
                          including intellectual property or other right of any
                          person or entity; or
                        </li>
                        <li>
                          Any third-party claims based upon the content of any
                          communications transmitted by the User.
                        </li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>16.2</strong> If, notwithstanding the other
                        provisions of these Terms, Remotcare is found to be
                        liable to You for any damage or loss which arises out of
                        or is in any way connected with Your use of the
                        Platform, Remotcare&apos;s liability to the User arising
                        out of or in connection with the Terms and/or usage of
                        the Platform, whether arising from contract, tort,
                        negligence, or otherwise shall in no event exceed the
                        greater of the total of any Subscription Fee or similar
                        fees (calculated on a pro-rata basis) with respect to
                        any Supplies or features of or on the Platform paid or
                        payable in the twelve (12) months prior to the date of
                        initial claim made against Remotcare. Except where
                        prohibited by law, in no event will Remotcare be liable
                        for any indirect or consequential damages arising out
                        for or in connection with these Terms or usage of the
                        Platform and/or usage of the Supplies.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 17. Termination */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">17. Termination</h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>17.1 Termination by the User:</strong> If the
                        User elects to stop the Supplies, the User may terminate
                        the relationship with the Remotcare by unsubscribing to
                        the Platform subject to the terms provided for in the
                        User Agreement or the Agreement with the Third Party
                        Service Provider as the case may be.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>17.2 Termination by the Remotcare:</strong>{" "}
                        Remotcare may, without any liability to the User or any
                        third party for any such termination, at its discretion
                        and at any time with or without notice, terminate or
                        suspend the Terms, with or without cause if:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>
                          User is in breach of any of the provisions of the
                          Terms, the Privacy Policy or any other terms,
                          conditions, or policies that may be applicable to the
                          User;
                        </li>
                        <li>
                          Remotcare is mandated to do so in accordance with the
                          law; or
                        </li>
                        <li>
                          Remotcare has elected to discontinue, with or without
                          reason, access to the Platform (or any part thereof)
                          either in general or specifically to the User.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 18. Consequences of Termination */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    18. Consequences of Termination
                  </h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>18.1</strong> Once the User Account has been
                        terminated, any and all content will be irretrievably
                        deleted by Remotcare, except to the extent that
                        Remotcare is obliged to maintain or permitted to retain
                        it in accordance with the applicable laws.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>18.2</strong> The limited licences or assignment
                        granted for use to the User in accordance with these
                        Terms shall stand terminated, effective immediately.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>18.3</strong> In case of termination of the User
                        Account pursuant to Section 17.2(a), Remotcare may, in
                        its sole discretion, initiate appropriate legal
                        proceedings against the User, if necessary.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p>
                        <strong>18.4</strong> Termination shall not affect
                        User&apos;s liability or obligations arising prior to
                        such termination and for the sake of avoidance of any
                        doubt, it is hereby clarified that deletion,
                        uninstallation of the Platform and/or discontinuation of
                        usage of the Supplies, shall not discharge the User from
                        the responsibility, obligation and liability to repay
                        outstanding amount(s), if any, in accordance with these
                        Terms.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 19. Force Majeure */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">19. Force Majeure</h2>

                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                    <p>
                      Notwithstanding the limitations or disclaimers outlined in
                      these Terms, Remotcare shall not be held responsible for
                      any delay or failure in performance, whether directly or
                      indirectly caused, which is beyond their control. This
                      includes but is not limited to, incidents such as internet
                      errors, electrical power failures, damage to computer or
                      telecommunication equipment, labour strikes, disputes,
                      civil unrest, natural disasters, governmental actions,
                      epidemics or pandemics, court orders from domestic or
                      foreign jurisdictions, and negligent actions carried out
                      by third parties.
                    </p>
                  </div>
                </section>

                {/* 20. Governing Law and Jurisdiction */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    20. Governing Law and Jurisdiction
                  </h2>

                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p>
                      These Terms shall be governed and construed under the laws
                      of India and the courts of{" "}
                      <strong>Bangalore, Karnataka, India</strong>, shall have
                      exclusive jurisdiction.
                    </p>
                  </div>
                </section>

                {/* 21. Dispute Resolution */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    21. Dispute Resolution
                  </h2>

                  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                    <p>
                      The competent courts situated in{" "}
                      <strong>Bangalore, Karnataka</strong> shall possess
                      exclusive jurisdiction to adjudicate upon all disputes
                      arising from or associated with the Services offered by
                      Remotcare.
                    </p>
                  </div>
                </section>

                {/* 22. Amendment and Modification */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    22. Amendment and Modification
                  </h2>

                  <div className="pl-4 border-l-2 border-gray-200">
                    <p>
                      Remotcare reserves the right to modify these Terms at any
                      time. Remotcare will notify the Users of updates to these
                      Terms via email, in-app notifications, or on the website.
                      Continued use of the Platform after updates constitutes
                      acceptance of the revised Terms.
                    </p>
                  </div>
                </section>

                {/* 23. Offers */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">23. Offers</h2>

                  <div className="pl-4 border-l-2 border-gray-200">
                    <p>
                      <strong>
                        Special Offers and/or Coupons and/or Cashbacks:
                      </strong>{" "}
                      Remotcare keeps on updating special offers, coupons and
                      cashback points for its End Users on the Platform. The
                      Users can choose to avail the same according to the Terms
                      specified therein.
                    </p>
                  </div>
                </section>

                {/* 24. Miscellaneous */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">24. Miscellaneous</h2>

                  <div className="space-y-4">
                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>24.1 WAIVER:</strong> To the extent that
                        anything in or associated with the Platform is in
                        conflict or inconsistent with these Terms, these Terms
                        shall take precedence and prevail. Remotcare&apos;s
                        failure to enforce any provision of these Terms shall
                        not be deemed a waiver of such provision nor of the
                        right to enforce such provision. Remotcare&apos;s rights
                        under these Terms shall survive any discontinuance of
                        the access or use of the Platform.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>24.2 SEVERABILITY:</strong> If any provision of
                        these Terms is held to be invalid or unenforceable, such
                        provision shall be struck and the remaining provisions
                        shall be enforced to the fullest extent under law.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>24.3 NOTICES:</strong> Any notices to the User
                        from Remotcare regarding the Platform or these Terms
                        shall be posted on the Platform or sent by email or
                        regular mail.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-gray-200">
                      <p className="mb-2">
                        <strong>24.4 ASSIGNMENT/NOVATION:</strong> The Company
                        reserves the right to assign, transfer, novate any
                        rights and/or obligations as it deems fit to any third
                        party whatsoever.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-red-500 bg-red-50 p-4 rounded">
                      <p className="mb-2">
                        <strong>24.5 ACCOUNT DELETION:</strong> If you no longer
                        wish to use our service, you can choose to delete your
                        account.
                      </p>
                      <p className="mb-2 text-red-600 font-semibold">
                        Note: This is an irreversible action.
                      </p>
                      <p className="mb-2">
                        Once the account is deleted, you will lose access to the
                        following items associated with your account:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Personal/Profile Information</li>
                        <li>Order & Purchase History</li>
                        <li>
                          Any documents related to your previous orders (Proof
                          of Purchase, Invoice, Lab Report copies, etc.)
                        </li>
                        <li>Health Records and Trends</li>
                        <li>
                          Benefits pertaining to your active advantage plans;
                          any active plan on the respective customer Id will be
                          de-activated
                        </li>
                        <li>
                          Other information, as may be provided by you and/or
                          generated by the platform to provide you with the
                          Services.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 25. Grievance Redressal Officer */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    25. Grievance Redressal Officer
                  </h2>

                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="mb-4">
                      Remotcare is committed to addressing User grievances
                      promptly. For internal resolution, Users can contact
                      Remotcare Customer Support:
                    </p>

                    <div className="bg-white p-4 rounded-lg mb-4">
                      <p className="mb-2">
                        <strong>Email:</strong>{" "}
                        <a
                          href="mailto:contact@remotcare.com"
                          className="text-blue-600 hover:underline"
                        >
                          contact@remotcare.com
                        </a>
                      </p>
                      <p className="mb-2">
                        <strong>Phone:</strong>{" "}
                        <a
                          href="tel:+917029201297"
                          className="text-blue-600 hover:underline"
                        >
                          +91 7029201297
                        </a>
                      </p>
                      <p>
                        <strong>Grievance Officer Email:</strong>{" "}
                        <a
                          href="mailto:grievance@remotcare.com"
                          className="text-blue-600 hover:underline"
                        >
                          grievance@remotcare.com
                        </a>
                      </p>
                    </div>

                    <p className="mb-4">
                      If dissatisfied, escalate the matter to the Grievance
                      Officer. External authorities, such as the Data Protection
                      Board of India, may be approached if the resolution with
                      respect to breach of Private Data, is not satisfactory.
                    </p>

                    <p>
                      Remotcare pledges fair and timely redressal, and no
                      retaliatory action will be taken against Users for raising
                      grievances in good faith. Remotcare reserves the right to
                      modify the grievance redressal mechanism, with any changes
                      communicated on the Platform.
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
                    <p className="text-sm mt-4">
                      <strong>Contact:</strong>{" "}
                      <a
                        href="mailto:contact@remotcare.com"
                        className="text-blue-600 hover:underline"
                      >
                        contact@remotcare.com
                      </a>{" "}
                      |{" "}
                      <a
                        href="tel:+917029201297"
                        className="text-blue-600 hover:underline"
                      >
                        +91 7029201297
                      </a>
                    </p>
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
