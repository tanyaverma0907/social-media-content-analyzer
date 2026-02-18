const fs = require("fs");
const parsePDF = require("../utils/pdfParser");
const analyzeText = require("../utils/analyzer");


async function uploadController(req, res) {
  try {
    
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

    
    if (mimeType === "application/pdf") {
      extractedText = await parsePDF(filePath);
    } 
    else {
      
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      return res.status(400).json({
        success: false,
        message: "Only PDF files are supported."
      });
    }

    
    const analysisResult = analyzeText(extractedText);

    
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    
    return res.status(200).json({
      success: true,
      extractedText,
      analysis: analysisResult
    });

  } catch (error) {
    console.error("Upload Controller Error:", error);

    
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

