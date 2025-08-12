const express = require("express");
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getPosts);
router.post("/", authMiddleware, roleMiddleware(["admin"]), createPost);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), updatePost);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), deletePost);

module.exports = router;
