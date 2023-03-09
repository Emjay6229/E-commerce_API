const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectID = Schema.Types.ObjectId;

const productSchema = new Schema({
    owner: {
            // the owner field references particular user via their user _id
            type: ObjectID,
            required: true,
            ref: 'User' // ref references the particular User model with unique objectID
        },
    product: {
            type: String,
            trim: true,
            required: true,
        },
    description: {
            type: String,
            required: true,
        },
    category: {
            type: String,
            required: true
        },
    price: {
            type: Number,
            required: true
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("product", productSchema);