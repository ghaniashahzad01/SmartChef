import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaUtensils className="text-blue-600 text-2xl" />
        <h1 className="text-2xl font-bold text-gray-800">SmartChef</h1>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        </li>
        <li>
          <Link to="/how-to-use" className="hover:text-blue-600 transition">How To Use</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </li>
      </ul>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link
          to="/how-to-use"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button (Optional) */}
      <div className="md:hidden">
        {/* Hamburger menu would go here if implemented */}
      </div>
    </nav>
  );
};

export default Navbar;