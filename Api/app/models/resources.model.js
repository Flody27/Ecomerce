const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema(
  { resource: { type: String, requiered: true } },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("resources", resourceSchema);
