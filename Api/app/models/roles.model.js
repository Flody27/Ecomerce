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
    actions: [
      {
        action: {
          type: String,
          enum: ["access", "details", "edit", "create", "delete"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("roles", rolesSchema);
