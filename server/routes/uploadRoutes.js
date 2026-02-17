const express = require("express");
const multer = require("multer");
const uploadController = require("../controllers/uploadController");

const router = express.Router();

// Simple storage configuration
const upload = multer({
  dest: "uploads/"
});

// Upload route
router.post("/", upload.single("file"), uploadController);

module.exports = router;




