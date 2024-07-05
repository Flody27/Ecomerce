const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customer: {
      customerId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
      },
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String },
    },
    products: [
      {
        productId: {
          type: mongoose.SchemaTypes.ObjectId,
          required: true,
        },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: [
        "Pending",
        "Processing",
        "Shipped",
        "Delivered",
        "Cancelled",
        "Undefiend",
      ],
      default: "Pending",
    },
    orderDate: { type: Date, default: Date.now },
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      enum: ["Credit Card", "PayPal", "Bank Transfer"],
      required: true,
    },
    transactionId: { type: String },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orderSchema);
