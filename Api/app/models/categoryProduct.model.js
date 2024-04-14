const mongoose = require("mongoose");

const CategoryProducSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "The category is required."],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CategoryProducts", CategoryProducSchema);
