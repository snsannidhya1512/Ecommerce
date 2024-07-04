const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Welcome to Ecommerce API - node", status: true });
});

const authRouter = require("./routes/auth.route.js");
app.use("/auth", authRouter);

const userRouters = require("./routes/user.route.js");
app.use("/api/users", userRouters);


const productRouter=require("./routes/product.route.js");
app.use("/api/products",productRouter);

const adminProductRouter=require("./routes/adminProduct.route.js");
app.use("/api/admin/products",adminProductRouter);

const cartRouter=require("./routes/cart.route.js")
app.use("/api/cart", cartRouter);

const cartItemRouter=require("./routes/CartItem.route.js")
app.use("/api/cart_items",cartItemRouter);

const orderRouter=require("./routes/order.route.js");
app.use("/api/orders",orderRouter);

const adminOrderRouter=require("./routes/adminOrder.route.js");
app.use("/api/admin/orders",adminOrderRouter);

const reviewRouter=require("./routes/review.route.js");
app.use("/api/reviews",reviewRouter);

const ratingRouter=require("./routes/rating.route.js");
app.use("/api/ratings",ratingRouter);


module.exports = app;






// const express = require("express");
// const cors = require("cors");
// const app = express();
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   return res.status(200).send({ message: "Welcome to Ecommerce API - node", status: true });
// });

// const authRouter = require("./routes/auth.route.js");
// app.use("/auth", authRouter);

// const userRouters = require("./routes/user.route.js");
// app.use("/api/users", userRouters);

// const productRouter = require("./routes/product.route.js");
// app.use("/api/products", productRouter);

// const adminProductRouter = require("./routes/adminProduct.route.js");
// app.use("/api/admin/products", adminProductRouter);

// const cartRouter = require("./routes/cart.route.js");
// app.use("/api/cart", cartRouter);

// const cartItemRouter = require("./routes/CartItem.route.js");
// app.use("/api/cart_items", cartItemRouter);

// const orderRouter = require("./routes/order.route.js");
// app.use("/api/orders", orderRouter);

// const adminOrderRouter = require("./routes/adminOrder.route.js");
// app.use("/api/admin/orders", adminOrderRouter);

// const reviewRouter = require("./routes/review.route.js");
// app.use("/api/reviews", reviewRouter);

// const ratingRouter = require("./routes/rating.route.js");
// app.use("/api/ratings", ratingRouter);

// const PORT = process.env.PORT || 5454;

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }).catch((error) => {
//   console.error('Database connection error:', error);
// });

// module.exports = app;
