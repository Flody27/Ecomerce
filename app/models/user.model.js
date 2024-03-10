const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "The name is required."] },
    lastname: { type: String, required: [true, "The lastname is required."] },
    email: {
      type: String,
      unique: true,
      required: [true, "The email is required."],
    },
    phone_number: Number,
    password: { type: String, required: [true, "The password is required."] },
    role: {
      type: String,
      enum: ["admin", "client", "employee"],
      default: "client  ",
    },
    country: String,
    city: String,
    address: String,
    alt_address: String,
    active: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
