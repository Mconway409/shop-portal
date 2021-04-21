const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Brand collection and inserts the brands below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const brandSeed = [
  {
    slug: 'b-culprit-apparel',
    name: 'Culprit Apparel',
    image:
      'https://culprit.com/wp-content/uploads/sb-instagram-feed-images/culpritfishing.jpg',
    description: 'Trendy women clothing',
    isActive: true,
    isFeatured: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    slug: 'b-juslink',
    name: 'Juslink',
    image:
      'https://rashelectrical.com.au/wp-content/uploads/2018/05/juslink-300x225.png',
    description: 'Kids clothing and accessories',
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    slug: 'b-ikeam',
    name: 'Ikeam',
    image:
      'https://toppng.com/uploads/preview/ikea-furniture-ikea-logo-black-and-white-11563510946sefhn17vcn.png',
    description: 'Scandinavian styled furniture',
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    slug: 'b-mevecco',
    name: 'Mevecco',
    image:
      'https://m.media-amazon.com/images/S/abs-image-upload-na/8/AmazonStores/ATVPDKIKX0DER/f317b2f28d2b96e368d165a017f32ed0.w3000.h600.jpg',
    description: 'Designer high-quality handmade jewelry',
    isActive: true,
    isFeatured: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    slug: 'b-nike',
    name: 'Nike',
    image: 'https://wallpaperaccess.com/full/1107552.jpg',
    description: 'Sports equipment brand',
    isActive: true,
    isFeatured: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    slug: 'b-audi',
    name: 'Audi',
    image:
      'https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg',
    description:
      'German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles',
    isActive: false,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
];

db.Brand.deleteMany({})
  .then(() => db.Brand.insertMany(brandSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
