import React from "react";
function Hero() {
  return (
    <section id="hero-section">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-5xl font-bold leading-tight">
        Optimize Your Content With
        <span className="text-blue-600"> Engagement Intelligence</span>
      </h2>
      <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
        Upload your social media content, analyze engagement potential,
        and receive actionable insights instantly.
      </p>
      <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition duration-300">
        Try It Now
      </button>
    </div>
    </section>
  );
}

export default Hero;
