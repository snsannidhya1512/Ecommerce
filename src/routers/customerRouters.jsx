import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../customer/pages/homePage/homePage";
import Cart from "../customer/components/cart/cart";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/footer/footer";
import Product from "../customer/components/product/product";
import Checkout from "../customer/components/checkout/checkout";
import Order from "../customer/components/order/order";
import OrderDetails from "../customer/components/order/orderDetails";
import ProductDetails from "../customer/components/productDetails/productDetails";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default CustomerRouter;
