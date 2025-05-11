import Address from "../models/Address.js";

// Add Adrress : /api/address/add
// export const addAddress = async (req, res) => {
//   try {
//     const { address, userId } = req.body;
//     await Address.create({ ...address, userId });
//     res.json({ success: true, message: "Address added" });
//   } catch (error) {
//     console.error(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };
export const addAddress = async (req, res) => {
  try {
    const { address } = req.body;
    const userId = req.userId; // ✅ Correct way to get authenticated user ID
    await Address.create({ ...address, userId });
    res.json({ success: true, message: "Address added" });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Get Address : /api/address/get
// export const getAddress = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     const addresses = await Address.find({ userId });
//     res.json({ success: true, addresses });
//   } catch (error) {
//     console.error(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };
export const getAddress = async (req, res) => {
  try {
    const userId = req.userId; // ✅ Use from auth middleware
    const addresses = await Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};
