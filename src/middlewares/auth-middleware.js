const jwt = require("jsonwebtoken");
require("dotenv").config();
const { secret_key } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(createError("Cannot authenticate user. Authentication token is absent", 500))
  } 
  else {
      jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
          console.log(err.message);
          return next(createError("Cannot verify token", 404))
        }
        console.log(decoded);
        next();
      })
    } 
  }

module.exports = { verifyToken };