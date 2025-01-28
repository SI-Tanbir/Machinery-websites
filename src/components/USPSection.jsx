import React from "react";
import { FaCheckCircle, FaLeaf, FaGlobe, FaHeadset, FaBoxOpen } from "react-icons/fa";

const USPSection = () => {
  const usps = [
    {
      icon: <FaCheckCircle className="text-4xl text-blue-500" />,
      heading: "High-Quality Products",
      description: "Our products are CE, EPA, SQS, TUV, ISO, and Euro 5 certified for top quality.",
    },
    {
      icon: <FaLeaf className="text-4xl text-green-500" />,
      heading: "Sustainable Solutions",
      description: "We focus on eco-friendly and energy-efficient machinery for a greener future.",
    },
    {
      icon: <FaGlobe className="text-4xl text-purple-500" />,
      heading: "Rapid Global Delivery",
      description: "Local warehouses in the US, Canada, and Europe ensure fast shipping worldwide.",
    },
    {
      icon: <FaHeadset className="text-4xl text-orange-500" />,
      heading: "Professional Support",
      description: "Lifetime free support and a 1-year warranty for comprehensive after-sales care.",
    },
    {
      icon: <FaBoxOpen className="text-4xl text-red-500" />,
      heading: "Comprehensive Parts",
      description: "Local warehouses stock all parts for quick repairs and replacements.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center">{usp.icon}</div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{usp.heading}</h3>
              <p className="text-gray-600">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;