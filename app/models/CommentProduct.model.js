const mongoose = require("mongoose");

const CommentProducSchema = mongoose.Schema(
  {
    comment: { type: String },
    date: { type: Date },
    raiting: { type: Number },
    author: { type: String },
    product_id: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CommentsProducts", CommentProducSchema);
