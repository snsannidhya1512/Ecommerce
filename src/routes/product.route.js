// const express = require("express");
// const router = express.Router();
// const productService = require("../services/product.service.js");

// router.get('/', async (req, res) => {
//   try {
//     const products = await productService.getAllProducts(req.query);
//     return res.status(200).send(products);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller.js");

router.get('/', productController.getAllProducts);
router.get('/id/:id', productController.findProductById);
router.post('/', productController.createProduct);
router.delete('/:id', productController.deleteProduct);
router.put('/:id', productController.updateProduct);
router.get('/category/:category', productController.findProductByCategory);
router.get('/search/:query', productController.searchProduct);
router.post('/bulk', productController.createMultipleProduct);

module.exports = router;

