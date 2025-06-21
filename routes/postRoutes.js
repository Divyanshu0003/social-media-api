const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { createPost, getAllPosts, likePost } = require("../controllers/postController");

router.post("/", protect, createPost);
router.get("/", protect, getAllPosts);
router.put("/like/:id", protect, likePost);

module.exports = router;
