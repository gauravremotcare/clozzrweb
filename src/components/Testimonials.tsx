import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { ManageHealthSVG, MonitorSVG } from "../assets/images/Images";
import AppDashboardScreen from "../assets/ClozzrHomeApp.png";
import AppSplashDemo from "../assets/AppSplashDemo.png";
import HeadDesc from "./ui/HeadDesc";

const Testimonials: React.FC = () => {
  const modules = [
    {
      icon: MonitorSVG,
      title: "Remote Health Monitoring",
      description:
        "Track all vital parameters — for yourself and your family — in real time, anytime.",
    },
    {
      icon: ManageHealthSVG,
      title: "Location Awareness & Safety",
      description:
        "Know where your loved ones are with real-time location tracking.",
    },
    {
      icon: MonitorSVG,
      title: "Access Remote Healthcare Providers",
      description:
        "Discover and connect with verified healthcare professionals and services — wherever you are.",
    },
    {
      icon: ManageHealthSVG,
      title: "AI-Powered Health Intelligence",
      description:
        "Get smart analytics, personalised alerts, and health risk assessments based on your data.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Reduced width container */}
      <div className="max-w-5xl mx-auto px-4 ">
        {/* Header */}
        <div className="text-start mb-16">
          <h2 className="text-3xl md:text-3xl  text-gray-900 mb-6">
            Meet CloZzr
          </h2>
          <p className="text-xl text-gray-600 ">
            CloZzr is a comprehensive mobile application designed to provide
            users with real-time health data tracking for themselves and
            seamless 24/7 monitoring of their family members health records via
            connected IoT devices, offering unparalleled peace of mind.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* Right Column - Overlapping Images */}
          <div className="relative r gap-10">
            {/* First Image */}
            <div className="w-[60%] min-w-[200px]">
              <Image
                src={AppSplashDemo}
                alt="App Splash Screen"
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>

            {/* Second Image - Overlapped & shifted right */}
            <div className="w-[60%] min-w-[200px] absolute top-8 -right-8">
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
        <div className="text-center mt-12">
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Download Mobile App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
