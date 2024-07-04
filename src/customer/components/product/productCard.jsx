// import React from "react";
// import "./productCard.css";
// import { useNavigate } from "react-router";

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       onClick={() => navigate(`/product/${parseInt(product._id)}`)}
//       className="productCard w-[15rem] m-3 transition-all cursor-pointer"
//     >
//       <div className="h-[20rem]">
//         <img
//           className="h-full w-full object-cover object-left-top "
//           src={product.imageUrl}
//           alt=""
//         />
//       </div>
//       <div className="textPart bg-white">
//         <div>
//           <p className="font-bold opacity-60">{product.brand}</p>
//           <p>{product.title}</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <p className="font-semibold">₹{product.discountedPrice}</p>
//           <p className="line-through opacity-50">{product.price}</p>
//           <p className="text-green-600 font-semibold">
//             {product.discountPersent}% off
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import React from "react";
import "./productCard.css";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top "
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className="textPart bg-white">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
