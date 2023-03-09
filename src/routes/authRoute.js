const router = require("express").Router();
const { sign_in, sign_up, sign_out } = require("../controller/user-auth");
const { verifyToken } = require("../middlewares/auth-middleware")

router
    .route("/sign_up")
    .post(sign_up)
router
    .route("/sign_in")
    .post(sign_in)
router
    .route("/sign_out")
    .get(verifyToken, sign_out)

module.exports = router;