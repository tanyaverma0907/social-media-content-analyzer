import React from "react";

function Footer() {
  return (
    <footer className="bg-linear-to-br from-purple-50 via-pink-50 to-white border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-16">

 
        <div className="grid md:grid-cols-3 gap-12">

         
          <div>
            <h2 className="text-2xl font-bold 
              bg-linear-to-r from-purple-600 to-pink-500 
              bg-clip-text text-transparent mb-4">
              ContentPulse
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              AI-powered social media content analyzer helping creators
              optimize engagement, performance metrics, and growth.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-purple-600 cursor-pointer transition">
                Overview
              </li>
              <li className="hover:text-purple-600 cursor-pointer transition">
                Upload
              </li>
              <li className="hover:text-purple-600 cursor-pointer transition">
                How It Works
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">
              Contact
            </h3>

            <p className="text-gray-600 text-sm">
              support@contentpulse.ai
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Built with using React & Node.js
            </p>
          </div>

        </div>


        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ContentPulse. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
