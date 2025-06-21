const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const post = await Post.create({ content: req.body.content, user: req.user });
  res.json(post);
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "username").sort({ createdAt: -1 });
  res.json(posts);
};

exports.likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.user)) {
    post.likes.push(req.user);
    await post.save();
  }
  res.json({ message: "Post liked" });
};
