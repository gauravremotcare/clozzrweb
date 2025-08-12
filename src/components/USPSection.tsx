import React from "react";
import { ManageHealthSVG, MonitorSVG } from "../assets/images/Images";

const USPSection: React.FC = () => {
  const usps = [
    {
      icon: ManageHealthSVG,
      title: "1-on-1 Live Sessions",
      description:
        "Personal attention with dedicated mentors for maximum learning efficiency",
    },
    {
      icon: MonitorSVG,
      title: "24/7 AI Doubt Support",
      description:
        "Instant AI-powered assistance whenever you need help or clarification",
    },
    {
      icon: ManageHealthSVG,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with in-depth analytics and reports",
    },
    {
      icon: MonitorSVG,
      title: "Custom Learning Paths",
      description:
        "Tailored course recommendations based on your goals and performance",
    },
    {
      icon: ManageHealthSVG,
      title: "Community Learning",
      description:
        "Collaborate with peers and industry experts for hands-on projects",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Join as a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower Your Practice with a Unified Digital Health Platform
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-center"
                style={{
                  border: "0.3px solid #2563eb",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "#2563eb",
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "#2563eb" }} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: "#2563eb" }}
                >
                  {usp.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="text-center my-16 ">
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
