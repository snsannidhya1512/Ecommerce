// import { api } from "../../config/apiConfig"

// import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


// export const  getCart=()=>async (dispatch)=>{
//   dispatch({type:GET_CART_REQUEST})

//   try {
//     const {data}=await api.get(`/api/cart/`)
//     dispatch({type:GET_CART_SUCCESS,payload:data})
//   } catch (error) {
//     dispatch({type:GET_CART_FAILURE,payload:error.message})
//   }
// }


// export const  addItemToCart=(reqData)=>async(dispatch)=>{
//   dispatch({type:ADD_ITEM_TO_CART_REQUEST})

//   try {
//     const {data}=await api.put("/api/cart/add",reqData)
//     dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data})
//     console.log("add item to cart",data)
//   } catch (error) {
//     dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error.message})
//   }
// }

// export const  removeCartItem=(reqData)=> async (dispatch)=>{
//   dispatch({type:REMOVE_CART_ITEM_REQUEST})

//   try {
//     const {data}=await api.delete(`/api/cart_items/${reqData.cartItemId}`)
//     dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:data})
//   } catch (error) {
//     dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.message})
//   }
// }

// export const  updateCartItem=(reqData)=>async(dispatch)=>{
//   dispatch({type:UPDATE_CART_ITEM_REQUEST})

//   try {
//     const {data}=await api.put(`/api/cart_items/${reqData.cartItemId}`,reqData.data)
//     dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data})
//   } catch (error) {
//     dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error.message})
//   }
// }
// action.js
// import { API_BASE_URL, api } from "../../config/apiConfig";
// import {
//   ADD_ITEM_TO_CART_FAILURE,
//   ADD_ITEM_TO_CART_REQUEST,
//   ADD_ITEM_TO_CART_SUCCESS,
//   GET_CART_FAILURE,
//   GET_CART_REQUEST,
//   GET_CART_SUCCESS,
//   REMOVE_CART_ITEM_FAILURE,
//   REMOVE_CART_ITEM_REQUEST,
//   REMOVE_CART_ITEM_SUCCESS,
//   UPDATE_CART_ITEM_FAILURE,
//   UPDATE_CART_ITEM_REQUEST,
//   UPDATE_CART_ITEM_SUCCESS,
// } from "./ActionType";

// export const getCart = () => async (dispatch) => {
//   dispatch({ type: GET_CART_REQUEST });

//   try {
//     const response = await api.get("/api/cart/");
//     dispatch({ type: GET_CART_SUCCESS, payload: response.data });
//     console.log("cart--",response.data)
//   } catch (error) {
//     dispatch({ type: GET_CART_FAILURE, payload: error.message });
//   }
// };

// export const addItemToCart = (reqData) => async (dispatch) => {
//   console.log("req data ", reqData);

//   try {
//     dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

//     const config = {
//       headers: {
//         Authorization: `Bearer ${reqData.jwt}`,
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await api.put('/api/cart/add', reqData.data, config);

//     console.log("add item to cart ", data);

//     dispatch({
//       type: ADD_ITEM_TO_CART_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: ADD_ITEM_TO_CART_FAILURE,
//       payload: error.response?.data?.message || error.message,
//     });
//   }
// };

// export const removeCartItem = (cartItemId) => async (dispatch) => {
//   dispatch({ type: REMOVE_CART_ITEM_REQUEST });

//   try {
//     const response = await api.delete(`/api/cart_items/${cartItemId}`);
//     dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
//   } catch (error) {
//     dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
//   }
// };

// export const updateCartItem = (reqData) => async (dispatch) => {
//   dispatch({ type: UPDATE_CART_ITEM_REQUEST });

//   try {
//     const response = await api.put(
//       `/api/cart_items/${reqData.cartItemId}`,
//       reqData.data
//     );
//     dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
//   }
// };

import { API_BASE_URL, api } from "../../config/apiConfig";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const response = await api.get("/api/cart/");
    dispatch({ type: GET_CART_SUCCESS, payload: response.data });
    console.log("cart--", response.data);
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};

export const addItemToCart = (reqData) => async (dispatch) => {
  console.log("req data ", reqData);

  try {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.put("/api/cart/add", reqData.data, config);

    console.log("add item to cart ", data);

    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ITEM_TO_CART_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const removeCartItem = (cartItemId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  try {
    await api.delete(`/api/cart_items/${cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
  }
};

export const updateCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    const response = await api.put(`/api/cart_items/${reqData.cartItemId}`, reqData.data);
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
  }
};

