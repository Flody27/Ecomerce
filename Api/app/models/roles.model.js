const mongoose = require("mongoose");

const rolesSchema = mongoose.Schema(
  {
    roleName: {
      type: String,
      required: [true, "The name of the role is required."],
    },
    resources: [
      {
        resource: { type: String, unique: true },
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
