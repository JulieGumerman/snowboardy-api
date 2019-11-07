const express = require("express");
const userRoute = express.Router();
const bcrypt = require("bcryptjs");

const Users = require("./user-model");
const generateToken = require("../middleware-and-auth/generateToken")

userRoute.get("/", (req, res) => {
    res.send("Your mom.")
})

userRoute.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password);
    user.password = hash;

    Users.add(user)
        .then(saved => res.status(200).json({ message: "Success!!!"}))
        .catch(err => res.status(500).json(err.message))
})

module.exports = userRoute;