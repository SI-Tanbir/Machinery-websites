"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Sunward Machinery
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/products" className="hover:text-gray-300">
              Product Center
            </Link>
            <Link href="/clusters" className="hover:text-gray-300">
              Complete Product Cluster
            </Link>
            <Link href="/services" className="hover:text-gray-300">
              Sales Service
            </Link>
            <Link href="/investor-relations" className="hover:text-gray-300">
              Investor Relations
            </Link>
            <Link href="/news" className="hover:text-gray-300">
              News
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/careers" className="hover:text-gray-300">
              Talent Resources
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white py-2">
          <Link href="/products" className="block px-4 py-2 hover:bg-gray-700">
            Product Center
          </Link>
          <Link href="/clusters" className="block px-4 py-2 hover:bg-gray-700">
            Complete Product Cluster
          </Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-gray-700">
            Sales Service
          </Link>
          <Link href="/investor-relations" className="block px-4 py-2 hover:bg-gray-700">
            Investor Relations
          </Link>
          <Link href="/news" className="block px-4 py-2 hover:bg-gray-700">
            News
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-700">
            About Us
          </Link>
          <Link href="/careers" className="block px-4 py-2 hover:bg-gray-700">
            Talent Resources
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
