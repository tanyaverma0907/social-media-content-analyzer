import React from "react";

function SuggestionsPanel({ analysis }) {

  if (!analysis) return null;

  const { score, suggestions } = analysis;

  
  const getGrade = () => {
    if (score >= 80) return { text: "Excellent", color: "text-green-600 bg-green-50" };
    if (score >= 60) return { text: "Good", color: "text-yellow-600 bg-yellow-50" };
    if (score >= 40) return { text: "Average", color: "text-orange-500 bg-orange-50" };
    return { text: "Needs Improvement", color: "text-red-600 bg-red-50" };
  };

  const grade = getGrade();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">


      <h3 className="text-lg font-semibold mb-4">
        Suggestions & Insights
      </h3>
      <div className="mb-6">
        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${grade.color}`}>
          Performance: {grade.text}
        </span>
      </div>

     
      {suggestions.length === 0 ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg text-sm">
          🎉 Great job! Your content looks well optimized.
        </div>
      ) : (
        <ul className="space-y-3">

          {suggestions.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg text-sm text-gray-700"
            >
              <span className="text-blue-600 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}

        </ul>
      )}

    </div>
  );
}

export default SuggestionsPanel;
