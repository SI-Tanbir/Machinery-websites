// components/Hero.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Full-screen video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">

      </div>

      {/* Content: Title and CTA */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Innovative Machinery Solutions for Agriculture, Construction, and Mining
        </h1>
        <div>
          <a href="#products" className=" btn btn-primary text-white py-2 px-6 rounded-md text-lg mr-4">
            Explore Products
          </a>
          <a href="#quote" className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-md text-lg">
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
