import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const generateToken = (userId, res) => {
  const token = jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: isProduction,                 // true in prod, false locally
    sameSite: isProduction ? "none" : "lax", // none for prod, lax for local
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
