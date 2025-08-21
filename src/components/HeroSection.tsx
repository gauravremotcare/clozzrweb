import React from "react";
import Image from "next/image";
import { Monitor, Star } from "lucide-react";

import {
  HeroImgBgSVG,
  ConnectSVG,
  ManageHealthSVG,
  ShareSVG,
  MonitorSVG,
} from "../assets/images/Images";
import { Colors } from "../assets/colors";
import HeroImage from "../assets/HeroImgMain.png";
import TextIcon from "./ui/TextIcon";

interface HeroSectionProps {
  onOpenTrialModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative  bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 pt-30 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center bg-orange-100 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-orange-700 text-sm font-medium">
                  Rated #1 Platform
                </span>
              </div>
            </div> */}
            <h1 className="text-4xl md:text-5xl  font-bold text-gray-900 leading-tight mb-6">
              Your Intelligent Health Companion{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                For You
              </span>{" "}
              & Those You Care For
            </h1>
            <p className="text-xl text-black mb-8 max-w-2xl">
              Remotcare empowers individuals and healthcare providers to
              connect, monitor, and manage health seamlessly — anytime,
              anywhere.
            </p>
            <p className="text-xl text-black mb-8 max-w-2xl">
              Become a valued member of remotcare community as a{" "}
              <a
                href="/user"
                style={{ color: Colors.textLink }}
                className="underline"
              >
                User
              </a>{" "}
              or a{" "}
              <a
                href="/partner"
                style={{ color: Colors.textLink }}
                className="underline"
              >
                Partner
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenTrialModal}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-normal text-base hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Sign in - Early access
              </button>
            </div>
          </div>

          {/* Right content - SVG background + Image above */}
          <div className="relative flex items-center justify-center">
            <div
              className="
      relative 
      w-[70vw] max-w-[35rem] 
      aspect-square
    "
            >
              {/* Background SVG */}
              <HeroImgBgSVG className="w-full h-full" color="#F4F5FF" />

              {/* Main Image - shifted slightly to left */}
              <div className="absolute inset-0 flex items-center justify-center p-[5%]">
                <div className="relative w-full h-full flex items-center justify-center translate-x-[-5%] ">
                  <Image
                    src={HeroImage}
                    alt="Hero Illustration"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-contain"
                    priority
                  />
                  <div
                    className="grid grid-cols-2 gap-3 z-10"
                    style={{
                      position: "absolute",
                      top: "30%",
                      left: "70%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    {/* Column 1 - slightly higher */}
                    <div className="flex flex-col gap-3 translate-y-[10%]">
                      <TextIcon
                        text="Connect"
                        icon={ConnectSVG}
                        bgColor={Colors.mainColor}
                        size="3.7rem"
                        iconWidth={25}
                        iconHeight={25}
                        rounded={true}
                      />
                      <TextIcon
                        text="Manage Health"
                        icon={ManageHealthSVG}
                        bgColor={Colors.mainColor}
                        size="3.7rem"
                        iconWidth={25}
                        iconHeight={25}
                      />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-3">
                      <TextIcon
                        text="Monitor Health"
                        icon={MonitorSVG}
                        bgColor={Colors.mainColor}
                        size="3.7rem"
                        iconWidth={25}
                        iconHeight={25}
                      />
                      <TextIcon
                        text="Share Data"
                        icon={ShareSVG}
                        bgColor={Colors.mainColor}
                        size="3.7rem"
                        iconWidth={25}
                        iconHeight={25}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-[2vh] -left-[2vh] w-[8vw] h-[8vw] max-w-[4rem] max-h-[4rem] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-[2vh] -right-[2vh] w-[10vw] h-[10vw] max-w-[5rem] max-h-[5rem] bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
