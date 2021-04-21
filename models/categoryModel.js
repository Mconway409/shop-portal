const Mongoose = require('mongoose');
const { Schema } = Mongoose;
const slug = require('mongoose-slug-generator');

const options = {
  seperator: '-',
  lang: 'en',
  truncate: 120,
};

Mongoose.plugin(slug, options);

//Category Schema
const CategorySchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  product: [
    {
      type: Schema.Types.String,
      ref: 'Product',
    },
  ],
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Mongoose.model('Category', CategorySchema);
