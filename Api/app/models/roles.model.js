const mongoose = require("mongoose");

const rolesSchema = mongoose.Schema(
  {
    roleName: {
      type: String,
      required: [true, "The name of the role is required."],
      unique: true,
    },
    resources: [
      {
        resource: { type: String },
        actions: [
          {
            type: String,
            enum: ["access", "details", "edit", "create", "delete"],
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("roles", rolesSchema);
