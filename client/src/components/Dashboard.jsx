import React from "react";
import ExtractedText from "./ExtractedText";
import SuggestionsPanel from "./SuggestionsPanel";

function Dashboard({ result }) {
  if (!result || !result.analysis) {
    return null;
  }

  const { score, wordCount, hashtagCount } = result.analysis;

  return (
    <section className="relative py-16 px-6 lg:px-12 bg-gradient-to-b from-white to-purple-50/40">

      <div className="absolute inset-0 flex justify-center -z-10 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-pink-500 opacity-5 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">

   
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Your{" "}
            <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Content Analysis
            </span>
          </h2>
          <p className="text-gray-500 text-sm">
            AI-powered engagement insights & performance breakdown
          </p>
        </div>

    
        <div className="grid md:grid-cols-3 gap-6 mb-10">


          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
              Engagement Score
            </p>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {score} / 100
            </h3>
            <p className="text-gray-400 mt-1 text-xs">
              Overall engagement performance
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
              Word Count
            </p>
            <h3 className="text-3xl font-bold text-green-600">
              {wordCount}
            </h3>
            <p className="text-gray-400 mt-1 text-xs">
              Ideal range: 50–150 words
            </p>
          </div>

  
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
              Hashtag Count
            </p>
            <h3 className="text-3xl font-bold text-purple-600">
              {hashtagCount}
            </h3>
            <p className="text-gray-400 mt-1 text-xs">
              Recommended: 3–5 hashtags
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <ExtractedText text={result.extractedText} />
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <SuggestionsPanel analysis={result.analysis} />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Dashboard;



