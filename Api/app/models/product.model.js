const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name of the product is required."],
    },
    description: {
      type: String,
      required: [true, "The description of the product is required."],
    },
    price: {
      type: Number,
      required: [true, "The price of the product is required."],
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, "The discount can not be less than 0 percent."],
      max: [100, "The discount can not be greater than 100 percent."],
    },
    brand: {
      type: String,
      required: [true, "The brand of the product is required."],
    },
    category: {
      type: String,
      required: [true, "The category of the product is required."],
    },
    quantity: { type: Number, default: 0 },
    images: [],
    tags: [String],
    favorites: { type: Number },
    ratings: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
