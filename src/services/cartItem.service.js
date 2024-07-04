const CartItem = require("../models/cartItem.model")
const userService=require("../services/user.service.js")

const updateCartItem = async (req, res) => {
  try {
    const { cartItemId } = req.params;
    const { quantity } = req.body;
    console.log(`Updating cart item ${cartItemId} with quantity ${quantity}`);
    
    const cartItem = await CartItem.findById(cartItemId);
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found." });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    // Recalculate cart totals
    const cart = await Cart.findOne({ cartItems: cartItemId });
    cart.totalPrice = calculateTotalPrice(cart.cartItems);
    cart.totalDiscountedPrice = calculateTotalDiscountedPrice(cart.cartItems);
    await cart.save();

    res.status(200).json(cartItem);
  } catch (error) {
    console.error('Error in updateCartItem:', error.message);
    res.status(500).json({ message: "Failed to update cart item.", error: error.message });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const { cartItemId } = req.params;
    console.log(`Removing cart item ${cartItemId}`);

    const cartItem = await CartItem.findByIdAndDelete(cartItemId);
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found." });
    }

    const cart = await Cart.findOneAndUpdate(
      { cartItems: cartItemId },
      { $pull: { cartItems: cartItemId } },
      { new: true }
    );
    
    // Recalculate cart totals
    cart.totalPrice = calculateTotalPrice(cart.cartItems);
    cart.totalDiscountedPrice = calculateTotalDiscountedPrice(cart.cartItems);
    await cart.save();

    res.status(200).json({ message: "Cart item removed successfully." });
  } catch (error) {
    console.error('Error in removeCartItem:', error.message);
    res.status(500).json({ message: "Failed to remove cart item.", error: error.message });
  }
};



async function findCartItemById(cartItemId){
  const cartItem=await findCartItemById(cartItemId)
  if(cartItem){
    return cartItem
  }
  else{
    throw new Error("cartitem not found with id ",cartItemId)
  }
}

module.exports={
  updateCartItem,
  removeCartItem,
  findCartItemById
}