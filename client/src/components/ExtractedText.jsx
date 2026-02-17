import React from "react";

function ExtractedText({ text }) {
  if (!text) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">
          Extracted Text
        </h3>

        <div className="text-gray-400 text-sm">
          No content available. Upload a file or analyze text to see results.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">
        Extracted Text
      </h3>
      <div className="max-h-96 overflow-y-auto text-sm text-gray-700 leading-relaxed whitespace-pre-wrap pr-2">
        {text}
      </div>
    </div>
  );
}

export default ExtractedText;
