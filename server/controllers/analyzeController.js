const analyzeText = require("../utils/analyzer");


function analyzeController(req, res) {
  try {
    const { content } = req.body;

    
    if (!content || content.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "No content provided for analysis."
      });
    }

    
    const analysisResult = analyzeText(content);

    
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
