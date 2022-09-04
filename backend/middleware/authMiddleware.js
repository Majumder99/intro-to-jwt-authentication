const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1];

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get user from the token
      //if we give name payload then we have to write decode.name. Its upto you
      req.user = await User.findById(decoded.id).selectt("-password");
      next();
    } catch (e) {
      console.log(e);
      res.status(401);
      throw new Error("Not authroized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No token");
  }
});

module.exports = { protect };
