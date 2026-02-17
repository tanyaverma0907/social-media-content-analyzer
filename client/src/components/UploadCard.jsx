import React, { useState, useRef } from "react";
import axios from "axios";

function UploadCard({ setResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const inputRef = useRef(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      alert(error.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // Drag Events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    handleDrag(e);
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    handleDrag(e);
    setDragActive(false);
  };

  const handleDrop = (e) => {
    handleDrag(e);
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];

      if (droppedFile.type !== "application/pdf") {
        alert("Only PDF files allowed");
        return;
      }

      setFile(droppedFile);
    }
  };

  return (
    <section
      id="upload-section"
      className="relative min-h-[80vh] flex items-center justify-center px-6 py-20"
    >
    
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-175 h-175 bg-linear-to-br from-purple-500 to-pink-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-3xl bg-white rounded-3xl
                      shadow-[0_25px_80px_rgba(0,0,0,0.1)]
                      p-16 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Upload Your{" "}
          <span className="bg-linear-to-br from-purple-600 to-pink-500 
                           bg-clip-text text-transparent">
            Content
          </span>
        </h2>

        <p className="text-gray-600 mb-12 text-lg">
          Drop your PDF and receive AI-powered engagement insights instantly.
        </p>

        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current.click()}
          className={`border-2 border-dashed rounded-2xl p-14 transition-all duration-300 cursor-pointer
            ${
              dragActive
                ? "border-purple-600 bg-purple-50 scale-105"
                : "border-purple-300 hover:border-purple-500"
            }`}
        >
          <p className="text-gray-500 mb-4 text-lg">
            Drag & drop your PDF here
          </p>

          <p className="text-sm text-gray-400 mb-6">
            or click to browse files
          </p>

          {file && (
            <p className="text-purple-600 font-medium mb-6">
              Selected: {file.name}
            </p>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleUpload();
            }}
            disabled={loading}
            className="px-10 py-4 rounded-xl text-white font-medium text-lg
                       bg-linear-to-br from-purple-600 to-pink-500
                       shadow-lg hover:shadow-xl hover:scale-105
                       transition duration-300 disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Content"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default UploadCard;

