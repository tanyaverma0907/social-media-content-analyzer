import React from "react";
import { FaUpload, FaBrain, FaChartLine } from "react-icons/fa";

function HowItWorks() {
  return (
    <section
      id="how-section"
      className="relative py-28 px-6 bg-linear-to-br from-purple-50 via-pink-50 to-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          How It{" "}
          <span className="bg-linear-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Works
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Get powerful engagement insights in just three simple steps.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full 
                            bg-linear-to-br from-purple-600 to-pink-500 text-white text-2xl mb-6">
              <FaUpload />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Upload Content
            </h3>
            <p className="text-gray-600">
              Upload your social media post or PDF content to begin analysis.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full 
                            bg-linear-to-br from-purple-600 to-pink-500 text-white text-2xl mb-6">
              <FaBrain />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              AI Analysis
            </h3>
            <p className="text-gray-600">
              Our AI analyzes engagement score, hashtags, readability, and impact.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full 
                            bg-linear-to-br from-purple-600 to-pink-500 text-white text-2xl mb-6">
              <FaChartLine />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Get Insights
            </h3>

            <p className="text-gray-600">
              Receive performance metrics and improvement suggestions instantly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
