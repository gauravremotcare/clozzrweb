import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { ManageHealthSVG, MonitorSVG } from "../assets/images/Images";
import AppDashboardScreen from "../assets/AppDashboardScreen.png";
import AppSplashDemo from "../assets/AppSplashDemo.png";
import HeadDesc from "./ui/HeadDesc";

const Curriculum: React.FC = () => {
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
    {
      icon: ManageHealthSVG,
      title: "Proactive AI Health Alerts",
      description:
        "Receive early warnings and suggested actions before potential health issues arise.",
    },
  ];

  return (
    <section className="py-20 mt-10 ">
      {/* Reduced width container */}
      <div className="w-[75%] mx-auto px-4 ">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Left Column - Modules */}
          <div className="flex flex-col gap-8 ">
            <div className="text-start mb-8">
              <h2 className="text-3xl md:text-3xl  text-black mb-4">
                Put yourself in the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  users shoes
                </span>
              </h2>
              <p className="text-xl text-black max-w-3xl">
                Comprehensive, AI-Powered Health Monitoring for You & Your Loved
                Ones
              </p>
            </div>
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

          {/* Right Column - Overlapping Images */}
          <div className="relative flex justify-center items-center">
            {/* First Image */}
            <div className="w-[40%] min-w-[200px]">
              <Image
                src={AppSplashDemo}
                alt="App Splash Screen"
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            {/* Second Image - Overlapped & shifted right */}
            <div className="w-[40%] min-w-[200px] absolute top-8 -right-5">
              <Image
                src={AppDashboardScreen}
                alt="App Dashboard"
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
        {/* Footer Note
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium">
              All modules include live sessions, recordings, and practice
              materials
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Curriculum;
