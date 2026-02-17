const fs = require("fs");
const parsePDF = require("../utils/pdfParser");
const analyzeText = require("../utils/analyzer");

/**
 * Handles file upload, text extraction and analysis
 */
async function uploadController(req, res) {
  try {
    // 1️⃣ Validate file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded."
      });
    }

    


    const filePath = req.file.path;
    console.log("File object:", req.file);
console.log("File path:", filePath);
    

    const mimeType = req.file.mimetype;

    console.log("Uploaded file path:", filePath);
    console.log("MIME type:", mimeType);

    let extractedText = "";

    // 2️⃣ Handle PDF
    if (mimeType === "application/pdf") {
      extractedText = await parsePDF(filePath);
    } 
    else {
      // Remove uploaded file if unsupported
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      return res.status(400).json({
        success: false,
        message: "Only PDF files are supported."
      });
    }

    // 3️⃣ Analyze text
    const analysisResult = analyzeText(extractedText);

    // 4️⃣ Clean up file AFTER parsing
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // 5️⃣ Send response
    return res.status(200).json({
      success: true,
      extractedText,
      analysis: analysisResult
    });

  } catch (error) {
    console.error("Upload Controller Error:", error);

    // Attempt cleanup if file exists
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    return res.status(500).json({
      success: false,
      message: "Server error while processing file."
    });
  }
}

module.exports = uploadController;

