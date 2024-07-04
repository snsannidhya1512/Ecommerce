// import React, { useEffect } from "react";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { getCart } from "../../../State/Cart/Action";
// import CartItem from "./cartItem";

// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const cart = useSelector((store) => store.cart.cart);

//   useEffect(() => {
//     dispatch(getCart());
//   }, [dispatch]);

//   const handleCheckout = () => {
//     navigate("/checkout?step=2");
//   };

//   return (
//     <div>
//       <div className="lg:grid grid-cols-3 lg:px-16 relative">
//         <div className="col-span-2">
//           {cart?.cartItems?.length > 0 ? (
//             cart.cartItems.map((item) => (
//               <CartItem key={item._id} item={item} />
//             ))
//           ) : (
//             <p>No items in the cart</p>
//           )}
//         </div>
//         <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
//           <div className="border">
//             <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
//             <hr />

//             <div className="space-y-3 font semi-bold mb-10">
//               <div className="flex justify-between pt-3 text-black">
//                 <span>Price</span>
//                 <span>₹{cart?.totalPrice}</span>
//               </div>

//               <div className="flex justify-between pt-3 ">
//                 <span>Discount</span>
//                 <span className="text-black">-₹{cart?.discount}</span>
//               </div>

//               <div className="flex justify-between pt-3 text-black">
//                 <span>Delivery Charge</span>
//                 <span className="text-green-600">Free</span>
//               </div>

//               <div className="flex justify-between pt-3 text-black font-bold">
//                 <span>Total Amount</span>
//                 <span className="text-green-600">
//                   ₹{cart?.totalDiscountedPrice}
//                 </span>
//               </div>
//             </div>

//             <Button
//               onClick={handleCheckout}
//               variant="contained"
//               className="w-full mt-5"
//               sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
//             >
//               Checkout
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import CartItem from "./cartItem";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart?.cartItems?.length > 0 ? (
            cart.cartItems.map((item) => (
              <CartItem key={item._id} item={item} />
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />

            <div className="space-y-3 font semi-bold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart?.totalPrice ?? 0}</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-black">-₹{cart?.discount ?? 0}</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹{cart?.totalDiscountedPrice ?? 0}
                </span>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
