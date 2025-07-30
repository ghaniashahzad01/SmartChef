import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: Logo + Brand */}
        <div className="flex items-center gap-2">
          <FaUtensils className="text-blue-500 text-2xl" />
          <span className="text-xl font-bold text-white">SmartChef</span>
        </div>

        {/* Middle: Links */}
        <ul className="flex gap-6 text-gray-400 text-sm">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/how-to-use" className="hover:text-blue-500 transition">
              How To Use
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
          </li>
        </ul>
       
        {/* Right side: Social Icons */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} SmartChef. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;