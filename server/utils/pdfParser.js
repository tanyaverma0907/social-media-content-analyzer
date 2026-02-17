const fs = require("fs");
const pdf = require("pdf-parse");

async function parsePDF(filePath) {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
  } catch (error) {
    console.error("PDF Parsing Error:", error);
    throw new Error("Failed to extract text from PDF.");
  }
}

module.exports = parsePDF;


