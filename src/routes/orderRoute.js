const router = require("express").Router();
const auth = require("../controller/orders");

router
    .get("/order", auth.sign_up)
    .post("/order", auth.sign_in)
    .put("/order", auth.sign_out)

module.exports = router;