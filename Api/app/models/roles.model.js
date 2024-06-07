const mongoose = require("mongoose");

const rolesSchema = mongoose.Schema(
  {
    roleName: {
      type: String,
      required: [true, "The name of the role is required."],
    },
    resources: [
      { resourceId: mongoose.SchemaTypes.ObjectId, resource: String },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("roles", rolesSchema);
