// const express=require("express");
// const authenticate = require("../middleware/authenticate.js");
// const router=express.Router();

// const cartItemController=require("../controller/cartItem.controller.js");

// router.put("/:id",authenticate,cartItemController.updateCartItem);
// router.delete("/:id",authenticate,cartItemController.removeCartItem);

// module.exports=router;
const express = require('express');
const router = express.Router();
const { updateCartItem, removeCartItem } = require('../controller/cartItem.controller.js');

// Update Cart Item
router.put('/cart_items/:cartItemId', updateCartItem);

// Remove Cart Item
router.delete('/cart_items/:cartItemId', removeCartItem);

module.exports = router;
