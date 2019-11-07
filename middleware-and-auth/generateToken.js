const jwt = require("jsonwebtoken");
const secrets = require("./secret.js");

const generateToken = user => {
    const payload = {
        username: user.username,
        id: user.id
    }

    const options = {
        expiresIn: "1d"
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = generateToken