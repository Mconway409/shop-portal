//OrderModel Schema
const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const OrderSchema = new Schema({
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'Cart',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  total: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});
module.exports = Mongoose.model('Order', OrderSchema);
