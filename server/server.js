// //express use kar rahe hai taki server bana sake
// const express = require("express");

// //we use cors so that backend would be able to talk to frontend
// const cors = require("cors");

// //we use multer so that we could handle file upload on our project
// const multer = require("multer");

// const pdf = require("pdf-parse");
// const analyzeText = require("./analyzer");


// const Tesseract = require("tesseract.js");

// const fs = require("fs");
// //creating express app
// const app = express();

// //this line is used allow frontend to talk to backend without this line request will be blocked
// app.use(cors());

// //middleware to accept json data
// app.use(express.json());

// //this line tells multer where do we want to upload our file
// const upload = multer({
//   dest: "uploads/",   // correct property name is dest
//   limits: {
//     fileSize: 5 * 1024 * 1024,
//   },
// });


// //this line is used to check if the server is working properly or not
// app.get("/", (req, res) => {
//   res.send("Server is working properly");
// });

// //this route is used to receive the file uploaded
// app.post("/upload", upload.single("file"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file Found" });
//     }

//     const fileType = req.file.mimetype;
//     let extractedText = "";

//     if (fileType == "application/pdf") {
//       const dataBuffer = fs.readFileSync(req.file.path);
//       const data = await pdf(dataBuffer);
//       extractedText = data.text;
//     } else if (fileType.startsWith("image/")) {
//       return res.status(400).json({
//         error: "Image OCR temporarily disabled. Please upload PDF.",
//       });
//     } else {
//       return res
//         .status(400)
//         .json({ error: "only pdf and image files allowed" });
//     }

//     const analysis = analyzeText(extractedText);

//     res.json({
//       msg: "File Uploaded Successfully",
//       extractedText: extractedText,
//       analysis: analysis
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "something went wrong" });
//   }
// });

// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log("Server Started on port" + PORT);
// });


const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/uploadRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully."
  });
});
app.use("/upload", uploadRoutes);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found."
  });
});
app.use((err, req, res, next) => {
  console.error("Global Error:", err.message);

  res.status(500).json({
    success: false,
    message: "Internal server error."
  });
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});

