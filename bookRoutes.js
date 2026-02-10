const express = require("express");
const { addBook, getBooks, deleteBook } = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", authMiddleware, adminMiddleware, addBook);
router.get("/", authMiddleware, getBooks);
router.delete("/:id", authMiddleware, adminMiddleware, deleteBook);

module.exports = router;
