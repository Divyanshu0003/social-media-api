const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { getProfile, follow } = require("../controllers/userController");

router.get("/me", protect, getProfile);
router.put("/follow/:id", protect, follow);

module.exports = router;
