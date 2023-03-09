//@desc renders pages to the user
const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "../../products.json")

exports.getAllProducts = (req, res) => {

}




// exports.getAllProducts = (req, res) => {
//     // parse JSON data to JavaScript object
//     let productData = JSON.parse(fs.readFileSync(filepath, "utf-8"));

//     console.log(productData.length)
    
//     for(let i = 0; i < productData.length; i++) {
//         productData[i].id = i; 
//         console.log(productData[i].id)
//     }

//     const {page, limit} = req.query;

//     let startIndex = (page - 1) * limit;
//     let endIndex = page * limit

//     const results = {};

//     if (startIndex > 0) {
//         results.nextPage = Number(page) + 1;
//         results.limit = Number(limit)
//     } 
//     if (endIndex < productData.length){
//         results.previousPage = Number(page) - 1;
//         results.limit = Number(limit)
//     }

//     results.resultData = productData.slice(startIndex, endIndex);
    
//     res.status(200).json( results );
// }