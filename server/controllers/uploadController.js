
const fs = require("fs");
const parsePDF = require("../utils/pdfParser");
const analyzeText = require("../utils/analyzer");
const Tesseract = require("tesseract.js");

async function uploadController(req, res) {
  let filePath;

  try {
    // 1️⃣ Check file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded.",
      });
    }

    filePath = req.file.path;
    const mimeType = req.file.mimetype;

    console.log("Uploaded file path:", filePath);
    console.log("MIME type:", mimeType);

    let extractedText = "";

    // 2️⃣ PDF Handling
    if (mimeType === "application/pdf") {
      extractedText = await parsePDF(filePath);
    }

    // 3️⃣ Image Handling (OCR)
    else if (mimeType.startsWith("image/")) {
      const result = await Tesseract.recognize(filePath, "eng");
      extractedText = result.data.text;
    }

    // 4️⃣ Unsupported File
    else {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      return res.status(400).json({
        success: false,
        message: "Only PDF and image files are supported.",
      });
    }

    // 5️⃣ Analyze extracted text
    const analysisResult = analyzeText(extractedText);

    // 6️⃣ Delete uploaded file
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // 7️⃣ Send response
    return res.status(200).json({
      success: true,
      extractedText,
      analysis: analysisResult,
    });

  } catch (error) {
    console.error("Upload Controller Error:", error);

    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return res.status(500).json({
      success: false,
      message: "Server error while processing file.",
    });
  }
}

module.exports = uploadController;
