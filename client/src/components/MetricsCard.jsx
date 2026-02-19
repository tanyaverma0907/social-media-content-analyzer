import React from "react";

function MetricsCard({ title, value, subtitle, color = "blue" }) {

  const colorVariants = {
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    green: "text-green-600 bg-green-50 border-green-100",
    yellow: "text-yellow-600 bg-yellow-50 border-yellow-100",
    red: "text-red-600 bg-red-50 border-red-100",
    purple: "text-purple-600 bg-purple-50 border-purple-100",
  };

  const selectedColor = colorVariants[color] || colorVariants.blue;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

      <p className="text-xs uppercase tracking-wide text-gray-500 font-medium mb-2">
        {title}
      </p>

      <div
        className={`inline-flex items-center justify-center px-4 py-2 rounded-xl text-xl font-semibold border ${selectedColor}`}
      >
        {value}
      </div>

      {subtitle && (
        <p className="text-gray-400 text-xs mt-3 leading-relaxed">
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default MetricsCard;


