"use client";
import Image from "next/image";
import "../app/globals.css";




const customers = [


  { id: 1, name: "Customer 1" },
  { id: 2, name: "Customer 2" },
  { id: 3, name: "Customer 3" },
  { id: 4, name: "Customer 4" },
  { id: 5, name: "Customer 5" },
  { id: 6, name: "Customer 6" },
  { id: 7, name: "Customer 7" },
  { id: 8, name: "Customer 8" },



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
      <div className="grid grid-cols-2 md:grid-cols-4 w-[400px]  mx-auto">
        {customers.map((customer, index) => (
          <div key={customer.id} className="relative   flex items-center justify-center ">
            {/* Pentagon Shape Wrapper */}
            <div className="clip-pentagon bg-gray-200 flex items-center justify-center shadow-md  w-[400px] ">
              

              <Image

                src={`/image2/${index + 1}.jpeg`}
                alt={customer.name}
                width={200}
                height={100}
                className="object-cover overflow-hidden  "

              />
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}


