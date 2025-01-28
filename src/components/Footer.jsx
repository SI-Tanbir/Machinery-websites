import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo, Tagline, and Social Icons */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/icon/logo.png" // Replace with your logo path
                alt="Company Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Sunward Machinery</span>
            </div>
            <p className="text-sm mb-4">Innovative Machinery Solutions for Agriculture, Construction, and Mining
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Main Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Main Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/category1" className="hover:text-primary">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/products/category2" className="hover:text-primary">
                  Demolition
                </Link>
              </li>
              <li>
                <Link href="/products/category3" className="hover:text-primary">
                  Energy
                </Link>
              </li>
              <li>
                <Link href="/products/category4" className="hover:text-primary">
                  Forestry
                </Link>
              </li>
              <li>
                <Link href="/products/category5" className="hover:text-primary">
                  Metal Forming
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact QR Code, Phone, and Address */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex gap-4">
                <Image
                  src="/icon/wechat.png" // Replace with your WeChat QR code path
                  alt="WeChat QR Code"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <Image
                  src="/icon/whatsup.jpeg" // Replace with your WhatsApp QR code path
                  alt="WhatsApp QR Code"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </div>
              <p className="text-sm">Phone: +1 (123) 456-7890</p>
              <p className="text-sm">Address: 123 Main St, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;