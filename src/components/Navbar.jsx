import React from "react";
import lotusLogo from "../assets/lotus.jpg"; 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-30">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
           <img
              src={lotusLogo}
              alt="ISKCON Lotus"
              className="w-20 h-25 object-contain"
            />
          <span className="text-xl font-bold text-gray-800">ISKCON</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-orange-600 font-medium">Home</a>
          <a href="/causes" className="hover:text-orange-600 font-medium">Causes</a>
          <a href="/corporate" className="hover:text-orange-600 font-medium">Corporate</a>
          <a href="/solutions" className="hover:text-orange-600 font-medium">Solutions</a>
          <a href="/about" className="hover:text-orange-600 font-medium">About Us</a>
          <a href="/contact" className="hover:text-orange-600 font-medium">Contact</a>
        </div>

        {/* CTA */}
        <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all">
          Donate
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
