"use client"
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../app/globals.css'


const customers = [
  { id: 1, src: "/image2/1.jpeg", name: "Customer 1" },
  { id: 2, src: "/images/2.jpg", name: "Customer 2" },
  { id: 3, src: "/images/3.jpg", name: "Customer 3" },
  { id: 4, src: "/images/4.jpg", name: "Customer 4" },
  { id: 5, src: "/images/5.jpg", name: "Customer 5" },
  { id: 6, src: "/images/6.jpg", name: "Customer 6" },
  { id: 7, src: "/images/7.jpg", name: "Customer 7" },
  { id: 8, src: "/images/8.jpg", name: "Customer 8" },
];

export default function OurCustomers() {
  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR CUSTOMERS</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        With our high-quality products and excellent customer service, we have
        established a global sales network in many countries.
      </p>
      
      {/* Image Grid */}
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {customers.map((customer,index) => (
          <div
            key={customer.id}
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            <Image
              src={`/image2/${index + 1}.jpeg`}
              alt={customer.name}
              width={300}
              height={200}
              className="w-full h-auto transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <span className="text-white text-lg font-semibold">
                {customer.name}
              </span>
            </div>
          </div>
        ))}
      </div>

 
    </section>
  );
}
