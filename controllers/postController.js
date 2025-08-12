const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      createdBy: req.user.id,
    });
    res.json({
      status: "success",
      message: "You've created a new post hurray 🎊🎉✨💥",
      data: newPost,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("createdBy", "name email");
    res.json({ status: "success", data: posts });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ status: "success", message: "updated post successfully", data: updated });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ status: "success", message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = { createPost, getPosts, updatePost, deletePost };
