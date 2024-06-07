const mongoose = require("mongoose");

const shopConfigSchema = mongoose.Schema(
  {
    socialLinks: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("shopconfig", shopConfigSchema);
