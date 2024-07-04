import React from 'react';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homePage/homePage';
import Footer from './customer/components/footer/footer'; // Capitalized component name
import Product from './customer/components/product/product';

import './App.css';
import ProductDetails from './customer/components/productDetails/productDetails';
import Cart from './customer/components/cart/cart';
import Checkout from './customer/components/checkout/checkout';
import Order from './customer/components/order/order';
import OrderDetails from './customer/components/order/orderDetails';
import { Route, Routes } from 'react-router';
import CustomerRouter from './routers/customerRouters';


function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouter/>}></Route>

      </Routes>


      <Navigation />
      <div>
         
       
      </div>
      
    </div>
  );
}

export default App;
