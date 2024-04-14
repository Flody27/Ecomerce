const mongoose = require("mongoose");

const CommentProducSchema = mongoose.Schema(
  {
    comment: { type: String, required: [true, "The comment is required."] },
    date: { type: Date },
    raiting: {
      type: Number,
      required: [true, "The raiting is required."],
      min: [0, "The raiting can not be less than 0."],
      max: [5, "The raiting can not be greater than 5."],
    },
    author: { type: String },
    product_id: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CommentsProducts", CommentProducSchema);
