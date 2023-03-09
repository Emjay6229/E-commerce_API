const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URI } = process.env;

async function connect(uri=MONGODB_URI) {
    try {
        mongoose.connect(uri, { 
            useNewUrlParser: true, 
            // useCreateIndex: true,
            // useFindAndModify: false,
            useUnifiedTopology: true,
        });
        mongoose.set('strictQuery', false);
        console.log("connected to MongoDB!");
    }
    catch (error) {
        console.log(error.message);
    }
}

module.exports = connect;