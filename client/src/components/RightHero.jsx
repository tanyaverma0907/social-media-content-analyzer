import React from "react";

function RightHero() {
  return (
    <div className="relative flex justify-center items-center">

      <div className="absolute w-96 h-96 bg-linear-to-r from-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl -z-10"></div>

      <div className="relative bg-white rounded-3xl shadow-2xl p-4">

        <img
          src="/hero.jpg"  
          alt="Social Media Analytics"
          className="w-105 rounded-2xl object-cover transition duration-500 hover:scale-105"
        />

      </div>

    </div>
  );
}

export default RightHero;

