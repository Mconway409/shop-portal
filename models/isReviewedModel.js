//isReviewed Schema
const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// isReviewed Schema
const isReviewableSchema = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  imageUrl: {
    type: String,
  },
  imageKey: {
    type: String,
  },
  title: {
    type: String,
    trim: true,
  },
  totalStars: {
    type: Number,
  },
  description: {
    type: String,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isReviewable: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});
module.exports = Mongoose.model('Review', isReviewableSchema);
