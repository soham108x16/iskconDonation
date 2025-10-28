import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-orange-50 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Us Feed & Empower Lives</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
        Together, we can serve millions of meals, protect cows, and empower youth for a better tomorrow.
      </p>
      <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-pink-700">
        Donate Now
      </button>
    </section>
  );
};

export default Hero;
