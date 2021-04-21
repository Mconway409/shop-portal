const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// Cart Item Schema for cart
const CartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: Number,
  totalPrice: {
    type: Number,
  },
  priceWithTax: {
    type: Number,
    default: 0,
  },
});

module.exports = Mongoose.model('CartItem', CartItemSchema);

// Cart Schema
const CartSchema = new Schema({
  products: [CartItemSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },  
  status: {
    type: String,
    default: 'Not processed',
    enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model('Cart', CartSchema);
