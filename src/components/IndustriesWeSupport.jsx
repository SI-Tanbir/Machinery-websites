import Image from "next/image";

const industries = [
  { name: "Construction", img: "/images/construction.jpg" },
  { name: "Demolition", img: "/images/demolition.jpg" },
  { name: "Energy", img: "/images/energy.jpg" },
  { name: "Forestry", img: "/images/forestry.jpg" },
  { name: "Metal forming", img: "/images/metal-forming.jpg" },
  { name: "Material handling", img: "/images/material-handling.jpg" },
  { name: "Quarry", img: "/images/quarry.jpg" },
  { name: "Special applications", img: "/images/special-applications.jpg" },
  { name: "Surface mining", img: "/images/surface-mining.jpg" },
  { name: "Underground hard rock mining", img: "/images/underground-hard-rock.jpg" },
  { name: "Underground soft rock mining", img: "/images/underground-soft-rock.jpg" },
  { name: "Waste solutions", img: "/images/waste-solutions.jpg" },
];

const IndustriesWeSupport = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Industries We Support</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            <Image
              src={`/image2/${index + 1}.jpeg`}
              alt={industry.name}
              width={200}
              height={100}
              className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold text-lg text-center">{industry.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeSupport;
