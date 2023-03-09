// @desc this file contains logic that allows a customer to add item to cart.
/* item to be addded contain a Owner/customer field, product name field, 
product desc field, product category field and rating */

const Cart = require("../models/Cart");7

//add item to cart
const addItem = async (req, res) => {
    const ownerID = req.body.owner;

    const cartItem = new Cart(req.body);

    await cartItem.save()

    res.status(200).json(cartItem);
}


module.exports = {
    addItem, 
}