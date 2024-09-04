const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "The name is required."] },
    lastName: { type: String, required: [true, "The lastname is required."] },
    email: {
      type: String,
      unique: true,
      required: [true, "The email is required."],
    },
    phoneNumber: Number,
    password: String,
    userPic: String,
    role: String,
    position: String,
    salary: String,
    startDate: mongoose.SchemaTypes.Date,
    address: [],
    userType: {
      type: String,
      enum: ["customer", "employee", "superAdmin"],
      default: "customer",
    },
    active: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
