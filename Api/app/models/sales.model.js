const mongoose = require("mongoose");

const salesSchema = mongoose.Schema(
  {
    orderId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    customer: {
      customerId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
      },
      name: { type: String, required: true },
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
    discount: { type: Number, required: true, default: 0 },
    saleDate: { type: Date, default: Date.now },
    paymentMethod: {
      type: String,
      enum: ["Credit Card", "PayPal", "Bank Transfer"],
      required: true,
    },
    transactionId: { type: String, required: true },
    status: {
      type: String,
      enum: ["Completed", "Refunded", "Partially Refunded"],
      default: "Completed",
    },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("sales", salesSchema);
