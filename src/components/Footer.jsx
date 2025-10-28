import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h3 className="text-lg font-bold mb-3">About Us</h3>
          <p>ISKCON Donation platform to help humanity with food, care, and education.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Policies</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Pricing Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Get Subscribed!</h3>
          <input type="email" placeholder="Your Email" className="px-4 py-2 rounded w-full text-gray-900" />
          <button className="bg-pink-600 mt-2 px-4 py-2 rounded text-white">Subscribe</button>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-6">© 2025 ISKCON Donation. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
