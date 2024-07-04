const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", userController.getAllUsers);
router.get("/profile", authenticate, userController.getUserProfile);


module.exports = router;
