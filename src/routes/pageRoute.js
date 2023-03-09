const router = require("express").Router();
const { getAllProducts } = require("../controller/page");

router
    .route("/data")
    .get(getAllProducts)


module.exports = router;

















// router.route("/sign_up").get(page.sign_up)
// router.route("/sign_in").get(page.sign_in)