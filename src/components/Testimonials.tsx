import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import {
  AlertSVG,
  FamilyCareSVG,
  HealthcareIntegSVG,
  ManageHealthSVG,
  MonitorSVG,
} from "../assets/images/Images";
import AppDashboardScreen from "../assets/ClozzrHomeApp.png";
import AppSplashDemo from "../assets/AppSplashDemo.png";
import HeadDesc from "./ui/HeadDesc";

const Testimonials: React.FC = () => {
  const modules = [
    {
      icon: MonitorSVG,
      title: "24/7 Health Monitoring",
      description:
        "Continuous tracking of vital signs and health metrics using smart IoT devices",
    },
    {
      icon: FamilyCareSVG,
      title: "Family Care Network",
      description:
        "Connect with family members to share health updates and coordinate care",
    },
    {
      icon: AlertSVG,
      title: "Smart Alerts",
      description:
        "Get notified about medication times, health changes, and emergencies",
    },
    {
      icon: HealthcareIntegSVG,
      title: "Healthcare Integration",
      description:
        "Share data with doctors and healthcare providers seamlessly.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Reduced width container */}
      <div className="w-[75%] mx-auto px-4  ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-normal text-gray-900 mb-6">
            Meet CloZzr
          </h2>
          <p className="text-base text-black max-w-3xl mx-auto">
            CloZzr is a comprehensive mobile application designed to provide
            users with real-time health data tracking for themselves and
            seamless 24/7 monitoring of their family members health records via
            connected IoT devices, offering unparalleled peace of mind.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center ">
          {/* Right Column - Overlapping Images */}
          <div className="relative r gap-10">
            {/* First Image */}
            <div className="w-[40%] min-w-[200px]">
              <Image
                src={AppSplashDemo}
                alt="App Splash Screen"
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>

            {/* Second Image - Overlapped & shifted right */}
            <div className="w-[45%] min-w-[200px] absolute top-8 left-45">
              <Image
                src={AppDashboardScreen}
                alt="App Dashboard"
                className="w-full h-auto rounded-lg "
                priority
              />
            </div>
          </div>
          {/* Left Column - Modules */}
          <div className="flex flex-col gap-8">
            {modules.map((module, index) => (
              <HeadDesc
                key={index}
                title={module.title}
                description={module.description}
                icon={module.icon}
                iconBgColor="#2563eb"
                iconSize="3rem"
                iconWidth={20}
                iconHeight={20}
                rounded={false}
              />
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-22">
          <div className="flex justify-center">
            <button
              // onClick={onOpenTrialModal}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-normal text-base hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Download Mobile App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
