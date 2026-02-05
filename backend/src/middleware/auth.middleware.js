import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: token not provided" });
    }

    // ✅ USE SAME SECRET AS generateToken
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // ✅ REQUIRED
    next();
  } catch (error) {
    console.error("Error at authmiddleware protectRoute:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
