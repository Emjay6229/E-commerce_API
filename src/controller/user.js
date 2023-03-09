const User = require("../models/User");

// @User controllers
exports.getAllUser = async (req, res) => {
    const user = await User.find({ role: 'user' })
    res.status(200).json({ user });
}

exports.getSingleUser = async (req, res) => {
    const id = { _id: req.params.id };
    const user = await User.findOne(id)
    res.status(200).json({ user });
} 

exports.updateUser = async (req, res) => {
    const id = { _id: req.params.id };
    const newUser = await User.findOneAndUpdate(id, req.body, { new: true })
    console.log(newUser);
    res.status(200).json({ 
        message: "Your details have been updated", 
        newUser 
    });
}

exports.removeUser = async (req, res) => {
    const id = { _id: req.params.id };
    await User.findOneAndRemove(id);
    res.status(200).json({ 
        message: "Your account has been deleted", 
    })
}