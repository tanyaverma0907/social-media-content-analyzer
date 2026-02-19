import React from "react";
import { gradeCalculator } from "../utils/gradeCalculator";

function SuggestionsPanel({ analysis }) {

  if (!analysis) return null;

  const { score, suggestions, wordCount, hashtagCount } = analysis;

  const gradeData = gradeCalculator(score);

  return (
    <div className="h-full max-h-[520px] overflow-y-auto pr-3">

      <h3 className="text-base font-semibold mb-4 text-gray-800">
        Suggestions & Insights
      </h3>

      <div className="mb-3">
        <span
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${gradeData.color}`}
        >
          Grade: {gradeData.grade} – {gradeData.label}
        </span>
      </div>

      {/* Grade Message */}
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        {gradeData.message}
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 space-y-2 mb-6">
        <p><strong>Score:</strong> {score} / 100</p>
        <p><strong>Word Count:</strong> {wordCount}</p>
        <p><strong>Hashtag Count:</strong> {hashtagCount}</p>
      </div>

    
      {suggestions.length === 0 ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-sm">
          Great job! Your content looks well optimized.
        </div>
      ) : (
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            Areas to Improve:
          </p>

          <ul className="space-y-3">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-blue-50 border border-blue-100 p-3 rounded-lg text-sm text-gray-700"
              >
                <span className="text-blue-600 font-semibold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default SuggestionsPanel;
