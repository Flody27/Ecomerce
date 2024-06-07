const mongoose = require("mongoose");

const refundSchema = mongoose.Schema(
  {
    customer: {
      customerId: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      name: { type: String, required: true },
      lastname: { type: String, required: true },
      email: { type: String, required: true },
    },
    salesId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    refundReason: { type: String, required: true },
    status: { type: String, enum: ["reviewing", "denied", "accepted"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("refunds", refundSchema);
