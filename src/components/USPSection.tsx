import React from "react";
import { ManageHealthSVG, MonitorSVG } from "../assets/images/Images";

const USPSection: React.FC = () => {
  const usps = [
    {
      icon: ManageHealthSVG,
      title: "Build Your Professional Brand",
      description:
        "Create a standout profile that reflects your expertise, builds credibility, and helps you attract more clients.",
    },
    {
      icon: MonitorSVG,
      title: "Bring & Engage Your Client Community",
      description:
        "Onboard your existing clients and deepen relationships by sharing personalised insights, wellness content, and progress updates.",
    },
    {
      icon: ManageHealthSVG,
      title: "Earn More, Pay Nothing",
      description:
        "Enjoy zero platform fees and unlock passive income by referring clients or fellow professionals — grow your business without hidden costs.",
    },
    {
      icon: MonitorSVG,
      title: "Collaborate with Your Team",
      description:
        "Add assistants, dieticians, or coaching partners to manage clients more efficiently under one digital umbrella.",
    },
    {
      icon: ManageHealthSVG,
      title: "Monitor Health Seamlessly",
      description:
        "Access real-time data from connected health devices and provide smarter, data-driven guidance through one unified dashboard.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container w-[75%] mx-auto px-4 ">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl text-gray-900 mb-4">
            Join as a Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower Your Practice with a Unified Digital Health Platform
          </p>
        </div>

        {/* USP Flexbox Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-center w-full sm:w-[45%] lg:w-[30%]"
                style={{
                  border: "0.3px solid #2563eb",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "#2563eb",
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "#2563eb" }} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-4 transition-colors duration-300"
                  style={{ color: "#2563eb" }}
                >
                  {usp.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="text-center my-16">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Are You a Health Coach or Dietitian? Let’s Partner.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Bring your clients, offer richer services, and earn more — all with
            zero platform fees.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Join as a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
