import React, { useState } from "react";

function Navbar() {

  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 90;
      const sectionPosition = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="w-full fixed top-0 left-0 z-50 
        bg-white/70 backdrop-blur-xl 
        border-b border-white/40 
        shadow-sm bg-linear-to-br from-purple-100 via-pink-100 to-white"
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1
            onClick={scrollToTop}
            className="text-2xl font-bold 
            bg-linear-to-r from-purple-600 to-pink-500 
            bg-clip-text text-transparent cursor-pointer"
          >
            ContentPulse
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <span
              onClick={() => scrollToSection("hero-section")}
              className="cursor-pointer hover:text-purple-600 transition"
            >
              Overview
            </span>

            <span
              onClick={() => scrollToSection("upload-section")}
              className="cursor-pointer hover:text-purple-600 transition"
            >
              Upload
            </span>

            <span
              onClick={() => scrollToSection("how-section")}
              className="cursor-pointer hover:text-purple-600 transition"
            >
              How It Works
            </span>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="
            bg-linear-to-r from-purple-600 to-pink-500
            text-white px-5 py-2 rounded-xl 
            shadow-lg hover:scale-105 hover:shadow-xl
            transition-all duration-300"
          >
            Login
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 backdrop-blur-sm">

          <div className="bg-white rounded-3xl shadow-2xl w-100 p-8 relative animate-fadeIn">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              Welcome Back
            </h2>

            <input
              type="email"
              placeholder="Email address"
              className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <button
              className="w-full py-3 rounded-xl text-white font-medium
              bg-linear-to-r from-purple-600 to-pink-500
              shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an account? <span className="text-purple-600 cursor-pointer">Sign Up</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;


