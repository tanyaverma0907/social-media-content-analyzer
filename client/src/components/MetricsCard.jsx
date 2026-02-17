import React from "react";

function MetricsCard({ title, value, subtitle, color = "blue" }) {

  const colorVariants = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-green-600 bg-green-50",
    yellow: "text-yellow-600 bg-yellow-50",
    red: "text-red-600 bg-red-50",
    purple: "text-purple-600 bg-purple-50",
  };

  const selectedColor = colorVariants[color] || colorVariants.blue;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">

  
      <p className="text-gray-500 text-sm font-medium mb-2">
        {title}
      </p>

   
      <div className={`inline-block px-4 py-2 rounded-xl text-2xl font-bold ${selectedColor}`}>
        {value}
      </div>

      {subtitle && (
        <p className="text-gray-400 text-xs mt-3">
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default MetricsCard;

