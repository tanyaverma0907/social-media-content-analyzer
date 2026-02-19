import React from "react";

function LeftHero() {
  return (
    <div className="flex flex-col justify-center space-y-6">


      <h1 className="text-4xl font-bold leading-tight text-gray-900">
        Optimize Your Content With{" "}
        <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Engagement Intelligence
        </span>
      </h1>

 
      <p className="text-1xl text-gray-600 max-w-xl">
        Upload your social media content and receive instant AI-powered
        engagement insights, performance metrics, and improvement suggestions.
      </p>

      <div className="flex space-x-4">
        <button 
        onClick={() => {
            const section = document.getElementById("upload-section");
            section?.scrollIntoView({ behavior: "smooth"});
        }}
        className="px-6 py-3 rounded-xl text-white font-medium 
                           bg-linear-to-r from-purple-600 to-pink-500 
                           shadow-lg hover:shadow-xl transition duration-300">
          Get Started
        </button>

        <button className="px-6 py-3 rounded-xl border border-gray-300 
                           text-gray-700 font-medium hover:bg-gray-100 
                           transition duration-300">
          Learn More
        </button>
      </div>

    </div>
  );
}

export default LeftHero;

