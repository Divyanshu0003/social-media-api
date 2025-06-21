const User = require("../models/User");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user).select("-password");
  res.json(user);
};

exports.follow = async (req, res) => {
  const user = await User.findById(req.user);
  const target = await User.findById(req.params.id);
  if (!target.followers.includes(user._id)) {
    target.followers.push(user._id);
    user.following.push(target._id);
    await user.save();
    await target.save();
  }
  res.json({ message: "Followed successfully" });
};
