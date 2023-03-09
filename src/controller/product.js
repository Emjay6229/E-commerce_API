// @desc this file contains logic that allows a user (vendor) upload Product for sale.
/* Product to be uploaded contain a Owner/vendor field, product name field, 
product desc field, product category field and rating */

const Product = require("../models/Product");

// Create a Product
exports.createProduct = async (req, res) => {
    req.body.user = req.user.userId;
    const newProduct = new Product(req.body); // Instantiates a new Product model from the Database model
    await newProduct.save(); //saves this new model to the database
    res.status(200).json({ id: newProduct._id })
} 

// get single Product
exports.getSingleProduct = async (req, res) => {
    const id = { _id: req.params.id }
    const singleProduct = await Product.findOne(id);
    res.status(200).json({ 
        message: "Your Product has been found",
        Product: singleProduct
    })
}

// Get all product
// will employ filtering, sorting and pagination using query strings here
exports.getAllProduct = async (req, res) => {
    const allProduct = await Product.find({});
    res.status(200).json({ 
        message: "Here is a collection of all Product",
        Product: allProduct
    })
}

// Update product
// Select Fields to update
exports.updateProduct = async (req, res) => {
    const id = { _id: req.params.id }
    const updatedProduct = await Product.findOneAndUpdate(id, req.body, {new: true, runValidators: true});
    res.status(200).json({ 
        message: "Product Updated",
        Product: updatedProduct
    })
}

// delete a product by its Id
exports.deleteProduct = async (req, res) => {
    const id = { _id: req.params.id }
    await Product.findOneAndRemove(id);
    res.status(200).json({ 
        message: "This Product has been deleted"
    })
}