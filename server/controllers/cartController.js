import User from "../models/User.js";

// Update User CartDate : /api/cart/update
// export const updateCart = async (req, res) => {
//   try {
//     const { userId, cartItems } = req.body;
//     await User.findByIdAndUpdate(userId, { cart: cartItems });
//     res.json({ message: "Cart updated" });
//   } catch (error) {
//     console.error(error);
//     res.json({ message: "Internal server error" });
//   }
// };

export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const userId = req.userId || req.body.userId;

    if (!userId || !cartItems) {
      console.log("Missing fields", { userId, cartItems });
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.cartItems = cartItems;
    await user.save();

    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
