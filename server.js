require("dotenv").config();
const app = require("./app");
const connect = require("./config/database");
const { port } = process.env || 3000;
const { host } = process.env;

//  Start Server
const start = () => {
    try {
        connect();
        app.listen(port, host, () => {
            console.log(`Server is listening on port ${port}!...`)
        }); 
    } catch(err) {
        console.log("Cannot connect to server")
    }
}

start();