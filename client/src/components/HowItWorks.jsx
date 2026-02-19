import React from "react";
import { FaUpload, FaBrain, FaChartLine } from "react-icons/fa";

function HowItWorks() {
  return (
    <section
      id="how-section"
      className="relative py-16 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white"
    >
      <div className="max-w-6xl mx-auto text-center px-15">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It{" "}
          <span className="bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Works
          </span>
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Get powerful engagement insights in just three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-6">


          <div className="bg-white p-7 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full 
                            bg-gradient-to-br from-purple-600 to-pink-500 text-white text-xl mb-4">
              <FaUpload />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Upload Content
            </h3>

            <p className="text-gray-600 text-sm">
              Upload your social media post or PDF content to begin analysis.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full 
                            bg-gradient-to-br from-purple-600 to-pink-500 text-white text-xl mb-4">
              <FaBrain />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              AI Analysis
            </h3>

            <p className="text-gray-600 text-sm">
              Our AI analyzes engagement score, hashtags, readability, and impact.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full 
                            bg-gradient-to-br from-purple-600 to-pink-500 text-white text-xl mb-4">
              <FaChartLine />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Get Insights
            </h3>

            <p className="text-gray-600 text-sm">
              Receive performance metrics and improvement suggestions instantly.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
