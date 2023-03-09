require("express-async-error");
const cookieParser = require("cookie-parser");
const express = require("express");

// start express app
const app = express();

// Import modules
const userRoute = require("./src/routes/userRoute");
const productRoute = require("./src/routes/productRoute");
const pageRoute = require("./src/routes/pageRoute");
const authRoute = require("./src/routes/authRoute");
// const cartRoute = require("./src/routes/cartRoute");
// const orderRoute = require("./src/routes/orderRoute");
const error_middleware = require("./src/middlewares/error-middleware");
const not_found = require("./src/middlewares/not-found");

// mount middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// mount route on URL
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/home", pageRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/products", productRoute);

// app.use("/api/v1/cart", cartRoute);
// app.use("/api/v1/orders", orderRoute);

// mount error middleware
app.use(error_middleware);
app.use(not_found);


module.exports = app;