import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authoried Login Again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    // req.user = token_decode.
    next();
  } catch (error) {
    res.json({ success: false, message: "ERROR" });
  }
};

const AuthorizedAdmin = async (req, res, next) => {
  const user = await userModel.findById(req.body.userId);
  if (user.is_admin) {
    next();
  } else {
    res.status(401).json({
      Error: "Unauthorized As admin",
    });
  }
};
export { authMiddleware, AuthorizedAdmin };
