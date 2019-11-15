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
        .then(saved => res.status(200).json(saved))
        .catch(err => res.status(500).json(err.message))
})

userRoute.post("/login", (req, res) => {
    let { username, password } = req.body; 
    Users.findBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user);
                    res.status(200).json({
                        message: "successful login",
                        token, 
                        user
                    })
            } else {
                res.status(401).json({message: "Oh noes!!!"})
            }
            })
        .catch(err => res.status(500).json(err.message))

})

module.exports = userRoute;