const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cart',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

const CartItem = mongoose.model('cartItems', cartItemSchema);

module.exports = CartItem;
// const mongoose = require('mongoose');

// const cartItemSchema = new mongoose.Schema({
//     product: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Product',
//         required: true,
//     },
//     cart: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Cart',
//         required: true,
//     },
//     quantity: {
//         type: Number,
//         required: true,
//         default: 1,
//     },
//     size: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     discountedPrice: {
//         type: Number,
//         required: true,
//     },
// });

// const CartItem = mongoose.model('CartItem', cartItemSchema);

// module.exports = CartItem;

