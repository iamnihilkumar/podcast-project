const mongoose = require("mongoose");

const podcasts =  new mongoose.Schema(
  {
    frontImage: {
      type: String,
      unique: true,
      required: true,
    },
    audioFile: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      unique: true,
      required: true,
    },
    user: {
      type: moongoose.Types.ObjectId,
      ref: "user",
    },
    category: {
      type: moongoose.Types.ObjectId,
      ref: "category",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("podcasts", podcasts);