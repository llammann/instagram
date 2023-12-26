const mongoose = require("mongoose");

const Userschema = mongoose.Schema(
  {
    username: String,
    surname: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    isPublic: Boolean,
    posts: [{ imgSRC: String, title: String }],
    followers: Array,
    following: Array,
    blockList: Array,
    stories: Array,
    notifications: Array,
    bio: {
      info: String,
      country: String,
    },
  },
  { collection: "igusers", timestamps: true }
);

const User = mongoose.model("IGusers", Userschema);
module.exports = User;
