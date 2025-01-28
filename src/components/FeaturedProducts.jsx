import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Mini Excavator",
      description: "Compact and versatile, perfect for small construction projects.",
      image: "/image/1.png", // Replace with actual image path
      cta: "Learn More",
      link: "#", // Replace with actual link
    },
    {
      name: "Large Excavator",
      description: "Heavy-duty machinery for large-scale excavation and construction.",
      image: "/image/2.webp", // Replace with actual image path
      cta: "Request a Quote",
      link: "#", // Replace with actual link
    },
    {
      name: "Wheel Loader",
      description: "Efficient loading and material handling for various industries.",
      image: "/image/3.webp", // Replace with actual image path
      cta: "Learn More",
      link: "#", // Replace with actual link
    },
    {
      name: "Backhoe Loader",
      description: "Combines a tractor, loader, and backhoe for multifunctional use.",
      image: "/image/4.webp", // Replace with actual image path
      cta: "Request a Quote",
      link: "#", // Replace with actual link
    },
    {
      name: "Skid Steer",
      description: "Agile and powerful, ideal for tight spaces and heavy lifting.",
      image: "/image/5.webp", // Replace with actual image path
      cta: "Learn More",
      link: "#", // Replace with actual link
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <a
                href={product.link}
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                {product.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;