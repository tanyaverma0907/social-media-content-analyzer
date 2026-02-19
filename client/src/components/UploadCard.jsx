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

      if (
        droppedFile.type !== "application/pdf" &&
        !droppedFile.type.startsWith("image/")
      ) {
        alert("Only PDF or image files allowed");
        return;
      }

      setFile(droppedFile);
    }
  };
return (
  <section
    id="upload-section"
    className="w-full py-16 px-6 lg:px-12 bg-white"
  >
    <div className="max-w-6xl mx-auto">

      <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-10 text-center">

        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Upload Your{" "}
          <span className="text-purple-600">
            Content
          </span>
        </h2>

        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          Upload a PDF or image and receive engagement insights instantly.
        </p>

        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current.click()}
          className={`border-2 border-dashed rounded-xl p-8 transition-all duration-300 cursor-pointer
            ${
              dragActive
                ? "border-purple-600 bg-purple-50"
                : "border-gray-300 hover:border-purple-500"
            }`}
        >
          <p className="text-gray-500 mb-2 text-sm">
            Drag & drop your PDF or Image here
          </p>

          <p className="text-xs text-gray-400 mb-4">
            or click to browse files
          </p>

          {file && (
            <p className="text-purple-600 text-sm font-medium mb-4">
              Selected: {file.name}
            </p>
          )}

          <input
            ref={inputRef}
            type="file"
            accept=".pdf,image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleUpload();
            }}
            disabled={loading}
            className="px-6 py-2.5 rounded-lg text-white text-sm font-medium
                       bg-gradient-to-r from-purple-600 to-pink-500
                       hover:opacity-90 transition
                       disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Content"}
          </button>
        </div>
      </div>

    </div>
  </section>
);

}

export default UploadCard;
