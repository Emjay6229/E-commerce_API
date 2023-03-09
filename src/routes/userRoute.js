const router = require("express").Router();
const { updateUser, removeUser, getAllUser, getSingleUser } = require("../controller/user");
// const { verifyToken } = require("../middlewares/auth-middleware")

router
    .route("/")
    .get(getAllUser)
router
    .route("/:id")
    .get(getSingleUser)
router
    .route("/update/:id")
    .put(updateUser)
router
    .route("/remove/:id")
    .delete(removeUser)


module.exports = router;