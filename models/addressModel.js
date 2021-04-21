const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// Address Schema
const AddressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  streetAddress: {
    type: String,
    trim: true,
    required: 'Street number and name required',
  },
  streetAddress2: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
    required: 'City required',
  },
  state: {
    type: String,
    trim: true,
    required: 'State required',
  },
  country: {
    type: String,
    trim: true,
    required: 'Country required',
  },
  zipCode: {
    type: String,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Mongoose.model('Address', AddressSchema);
