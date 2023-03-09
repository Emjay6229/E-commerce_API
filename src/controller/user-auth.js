// @Authentication controller
// @desc This file handles user authentication logic
require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { secret_key } = process.env;
const jwt_life =  30 * 60 // 30 mins

const createToken = (id, email) => {
    return jwt.sign({id, email}, secret_key, { expiresIn: jwt_life});
}

const attachResponseCookie = 

// AUTHENTICATION LOGIC
// @Signup
exports.sign_up = async (req, res) => {
    const { name, email, password, role} = req.body;
    const user = await User.create({ 
        name, 
        email, 
        password,
        role,
        active
    });
    
    const token = createToken(user._id, user.email);

    res.cookie("jwt", token, { 
        maxAge: jwt_life * 1000, 
        httpOnly: true 
    });

    console.log("SUCCESS!!!", { 
        email: user.email, 
        id: user._id 
    })

    // send response
    res.status(200).json({ message: "Your registration was successful. Account created!"})
}

// @Sign_in 
exports.sign_in = async (req, res) => {
    const { email, password } = req.body;
    const loggedInUser = await User.login(email, password);

    // console.log(loggedInUser);

    const token = createToken(loggedInUser._id, loggedInUser.email);

    res.cookie("jwt", token, { 
        maxAge: jwt_life * 1000, 
        httpOnly: true 
    });

    console.log("SUCCESS!!!", { 
        email: loggedInUser.email, 
        id: loggedInUser._id 
    })

    // send response
    res.status(200).json({ message: "Your login was successful!"})
}

// @Sign_out
exports.sign_out = (res, req) => {
    res.cookie("jwt", "", { MaxAge: 1 });
    res.status(200).json({ message: "You have been successfully logged out" })
  }