
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
  console.log(`Server started on port ${PORT}`);
});

