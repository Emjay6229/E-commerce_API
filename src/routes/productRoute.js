const router = require("express").Router();
const { createProduct, 
        getAllProduct, 
        getSingleProduct, 
        updateProduct, 
        deleteProduct 
} = require("../controller/product");

router
    .route("/")
    .post(createProduct)
    .get(getAllProduct)
router
    .route("/:id")
    .get(getSingleProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router;