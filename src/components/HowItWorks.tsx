import React from "react";
import { LucideComputer, Cross, Video, ScanHeart } from "lucide-react";
import TitleDescBox from "./ui/TitleDescBox";
import LaptopImg from "../assets/LaptopImg.png";
import Image from "next/image";

const HowItWorks: React.FC = () => {
  const boxes = [
    {
      icon: ScanHeart,
      title: "Health IoT Aggregator",
      description:
        "Integrate and manage data from all types of health IoT devices, wearables, Glucometer, BP monitor, and more in one place.",
    },
    {
      icon: LucideComputer,
      title: "Unified Health Data Platform",
      description:
        "Consolidate medical records, prescriptions, test results, and IoT data under a single, intelligent platform.",
    },
    {
      icon: Cross,
      title: "AI-Driven Health Intelligence",
      description:
        "Receive proactive health alerts powered by real-time data analytics.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-normal text-gray-900 mb-6">
            Why Remotcare?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powering the Future of Connected, Intelligent Healthcare
          </p>
        </div>

        {/* Image + Boxes Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Laptop Image */}

          {/* 3 Boxes stacked vertically */}
          <div className="flex-1 flex flex-col gap-8 px-10 ">
            {boxes.map((box, index) => (
              <TitleDescBox
                key={index}
                icon={box.icon}
                title={box.title}
                description={box.description}
                borderColor="#4655FF"
                bgColor="#ffffff"
                iconSize={32}
              />
            ))}
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src={LaptopImg}
              alt="Laptop preview"
              className="max-w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
