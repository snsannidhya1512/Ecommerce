// const express=require("express");
// const router=express.Router();
// const cartService=require("../services/cart.service.js");



// const findUserCart = async (req, res) => {
//     try {
//       const user = req.user;
//       const cart = await cartService.findUserCart(user._id);
//       res.status(200).json(cart);
//     } catch (error) {
//       // Handle error here and send appropriate response
//       res.status(500).json({ message: "Failed to get user cart.", error: error.message });
//     }
// }
  

//   const addItemToCart = async (req, res) => {
//     try {
//       const user = req.user;
//       await cartService.addCartItem(user._id.toString(), req.body);
     
//       res.status(202).json({message:"Item Added To Cart Successfully", status:true});
//     } catch (error) {
//       // Handle error here and send appropriate response
//       res.status(500).json({ message: "Failed to add item to cart.", error: error.message });
//     }
//   }

//   module.exports={findUserCart,addItemToCart};
const express = require("express");
const router = express.Router();
const cartService = require("../services/cart.service.js");

const findUserCart = async (req, res) => {
  try {
    const user = req.user;
    const cart = await cartService.findUserCart(user._id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Failed to get user cart.", error: error.message });
  }
};
const addItemToCart = async (req, res) => {
  try {
    const user = req.user;
    console.log('User ID:', user._id.toString());
    console.log('Request Body:', req.body);

    await cartService.addCartItem(user._id.toString(), req.body);
    res.status(202).json({ message: "Item Added To Cart Successfully", status: true });
  } catch (error) {
    console.error('Error in addItemToCart:', error.message);
    res.status(500).json({ message: "Failed to add item to cart.", error: error.message });
  }
};

module.exports = { findUserCart, addItemToCart };



