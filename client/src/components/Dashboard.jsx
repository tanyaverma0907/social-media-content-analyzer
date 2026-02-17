
import React from "react";
import MetricsCard from "./MetricsCard";
import SuggestionsPanel from "./SuggestionsPanel";
import ExtractedText from "./ExtractedText";

function Dashboard({ result }) {
  if (!result || !result.analysis) {
    return null;
  }

  const { score, wordCount, hashtagCount } = result.analysis;

  return (
    <section className="relative py-24 px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center -z-10">
        <div className="w-175 h-175 bg-linear-to-br from-purple-500 to-pink-500 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Your{" "}
            <span className="bg-linear-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Content Analysis
            </span>
          </h2>
          <p className="text-gray-600">
            AI-powered engagement insights & performance breakdown
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100 hover:scale-105 transition duration-300">
            <p className="text-sm text-gray-500 mb-2">Engagement Score</p>
            <h3 className="text-4xl font-bold bg-linear-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {score} / 100
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Overall engagement performance
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100 hover:scale-105 transition duration-300">
            <p className="text-sm text-gray-500 mb-2">Word Count</p>
            <h3 className="text-4xl font-bold text-green-600">
              {wordCount}
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Ideal range: 50–150 words
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100 hover:scale-105 transition duration-300">
            <p className="text-sm text-gray-500 mb-2">Hashtag Count</p>
            <h3 className="text-4xl font-bold text-purple-600">
              {hashtagCount}
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Recommended: 3–5 hashtags
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100">
            <ExtractedText text={result.extractedText} />
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100">
            <SuggestionsPanel analysis={result.analysis} />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Dashboard;



