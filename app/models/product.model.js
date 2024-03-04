const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    discount: { type: Number },
    brand: { type: String },
    category: { type: String },
    quantity: { type: Number },
    images: [String],
    tags: [String],
    favorites: { type: Number },
    ratings: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
