const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectID = Schema.Types.ObjectId;

const cartSchema = new Schema({
    owner: { type: ObjectID, 
        required: true, 
        ref: 'User' 
    },

    products: {
        productId: { type: ObjectID,  required: true,  ref: 'Product' }, 
        name: { type: String, required: true },
        quantity: { type: Number, required: true }
     },
     
    bill: { type: Number, 
        required: true, 
        default: 0 
    },
 },
    { timestamps: true }
)

module.exports = mongoose.model("cart", cartSchema);