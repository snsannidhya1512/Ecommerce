const express=require("express");
const authenticate = require("../middleware/authenticate.js");
const router=express.Router();
const orderController=require("../controller/adminOrder.controller.js")

router.get("/",authenticate,orderController.getAllOrders);
router.put("/:orderId/confirmed",authenticate,orderController.confirmedOrder);
router.put("/:orderId/ship",authenticate,orderController.shippOrder);
router.put("/:orderId/deliver",authenticate,orderController.deliverOrder);
router.put("/:orderId/cancel",authenticate,orderController.cancelledOrder);
router.delete("/:orderId/delete",authenticate,orderController.deleteOrder);

module.exports=router;