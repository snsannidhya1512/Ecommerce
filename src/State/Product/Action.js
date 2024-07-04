// import { useDispatch } from "react-redux"
// import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType"
// import {api} from '../../config/apiConfig.js'


// export const findProducts=(reqData)=>async(dispatch)=>{
//   dispatch({type:FIND_PRODUCTS_REQUEST})
  
//   const {colors,sizes,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize}=reqData

//   try {
//     const {data}= await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}
//       &maxPrice=${maxPrice} &minDiscount=${minDiscount}&category=${category}&stock=${stock}
//       &sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)



//       dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    
//   } catch (error) {
//     dispatch({FIND_PRODUCTS_FAILURE,payload:error.message})
    
//   }
// }



// export const findProductById=(reqData)=>async(dispatch)=>{
//   dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
  
//   const {productId}=reqData

//   try {
//     const {data}=await api.get(`/api/products/id/${productId}`)
//     console.log("product data",data)
//       dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    
//   } catch (error) {
//     dispatch({FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    
//   }
// }
import { 
  FIND_PRODUCTS_FAILURE, 
  FIND_PRODUCTS_REQUEST, 
  FIND_PRODUCTS_SUCCESS, 
  FIND_PRODUCT_BY_ID_FAILURE, 
  FIND_PRODUCT_BY_ID_REQUEST, 
  FIND_PRODUCT_BY_ID_SUCCESS 
} from "./ActionType";
import { api } from '../../config/apiConfig.js';

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;

  try {
    const { data } = await api.get(`/api/products`, {
      params: {
        color: colors,
        size: sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize
      }
    });

    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    const { data } = await api.get(`/api/products/id/${reqData.productId}`);

    // Add console log to check the data
    console.log("Response data for product by ID:", data);

    dispatch({
      type: FIND_PRODUCT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};

// Action.js
// import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
// import { api } from '../../config/apiConfig.js';

// export const findProducts = (reqData) => async (dispatch) => {
//   dispatch({ type: FIND_PRODUCTS_REQUEST });

//   const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;

//   try {
//     const { data } = await api.get(`/api/products`, {
//       params: {
//         color: colors,
//         size: sizes,
//         minPrice,
//         maxPrice,
//         minDiscount,
//         category,
//         stock,
//         sort,
//         pageNumber,
//         pageSize
//       }
//     });

//     dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: { products: data } }); // Ensure 'products' key is present
    
//   } catch (error) {
//     dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
//   }
// };


// export const findProductById = (reqData) => async (dispatch) => {
//   dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

//   const { productId } = reqData;

//   try {
//     const { data } = await api.get(`/api/products/id/${productId}`);
//     console.log("product data", data);
//     dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    
//   } catch (error) {
//     dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
//   }
// };



