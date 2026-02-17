const analyzeText = require("../utils/analyzer");

/**
 * Controller to analyze raw text input
 * Used when user pastes text instead of uploading file
 */
function analyzeController(req, res) {
  try {
    const { content } = req.body;

    // 1️⃣ Validate request body
    if (!content || content.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "No content provided for analysis."
      });
    }

    // 2️⃣ Call analyzer utility
    const analysisResult = analyzeText(content);

    // 3️⃣ Send structured response
    return res.status(200).json({
      success: true,
      analysis: analysisResult
    });

  } catch (error) {
    console.error("Analyze Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error during text analysis."
    });
  }
}

module.exports = analyzeController;
