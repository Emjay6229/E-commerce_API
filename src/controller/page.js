//@desc renders pages to the user
const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "../../products.json")

exports.getAllProducts = (req, res) => {
    // parse JSON data to JavaScript object
    const productData = JSON.parse(fs.readFileSync(filepath, "utf-8"));
    res.status(200).json(productData);
}

