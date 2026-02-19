import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-50 via-pink-50 to-white border-t border-gray-200">

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">

        <div className="grid md:grid-cols-3 gap-8 px-4">

          <div>
            <h2 className="text-xl font-semibold 
              bg-gradient-to-r from-purple-600 to-pink-500 
              bg-clip-text text-transparent mb-3">
              ContentPulse
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              AI-powered social media content analyzer helping creators
              optimize engagement and performance growth.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-800 mb-3 uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-purple-600 cursor-pointer transition duration-200">
                Overview
              </li>
              <li className="hover:text-purple-600 cursor-pointer transition duration-200">
                Upload
              </li>
              <li className="hover:text-purple-600 cursor-pointer transition duration-200">
                How It Works
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xs font-semibold text-gray-800 mb-3 uppercase tracking-wider">
              Contact
            </h3>

            <p className="text-gray-600 text-sm">
              support@contentpulse.ai
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Built with React & Node.js
            </p>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} ContentPulse. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;

