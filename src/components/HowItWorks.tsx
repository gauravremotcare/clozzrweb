import React from "react";
import { Calendar, UserCheck, Video } from "lucide-react";
import TitleDescBox from "./ui/TitleDescBox";
import LaptopImg from "../assets/LaptopImg.png";
import Image from "next/image";

const HowItWorks: React.FC = () => {
  const boxes = [
    {
      icon: Calendar,
      title: "Schedule Easily",
      description:
        "Book your appointments with just a few clicks and manage your calendar effortlessly.",
    },
    {
      icon: UserCheck,
      title: "Personalized Care",
      description:
        "Receive tailored healthcare solutions based on your unique needs and preferences.",
    },
    {
      icon: Video,
      title: "Virtual Consultations",
      description:
        "Connect with experts from the comfort of your home using secure video calls.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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
          <div className="flex-1 flex flex-col gap-8">
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
              className="max-w-full h-auto rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
