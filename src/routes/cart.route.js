// const express = require("express");
// const router = express.Router();
// const cartController = require("../controller/cart.controller");
// const authenticate = require("../middleware/authenticate");

// // GET: /api/cart
// router.get("/", authenticate, cartController.findUserCart);

// // POST: /api/cart/add
// router.put("/add", authenticate, cartController.addItemToCart);

// module.exports = router;
const express=require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const cartController = require("../controller/cart.controller.js");




// GET: /api/cart
router.get("/", authenticate, cartController.findUserCart);


// PUT: /api/cart/add
router.put("/add", authenticate, cartController.addItemToCart);


module.exports=router;
