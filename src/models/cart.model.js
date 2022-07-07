const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
	code: [{ type:mongoose.Schema.Types.ObjectId, ref:"items", required: true }],
	qty: { type: Number, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
