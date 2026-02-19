import React from "react";

function ExtractedText({ text }) {
  return (
    <div>

      <h3 className="text-base font-semibold mb-3 text-gray-800">
        Extracted Text
      </h3>

      {!text ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-400">
          No content available. Upload a file to see results.
        </div>
      ) : (
        <div className="max-h-72 overflow-y-auto text-sm text-gray-700 leading-relaxed whitespace-pre-wrap pr-2 bg-gray-50 border border-gray-200 rounded-lg p-4">
          {text}
        </div>
      )}

    </div>
  );
}

export default ExtractedText;

