const express = require("express");
const { borrowBook } = require("../controllers/borrowController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, borrowBook);

module.exports = router;
