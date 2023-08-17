const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      required: true,
      default: 'Traveling',
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    ShippingPromise: {
      type: Date,
      required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Order = model('orders', orderSchema);
module.exports = Order;
