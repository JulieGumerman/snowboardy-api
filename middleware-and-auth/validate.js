const jwt = require("jsonwebtoken");
const secrets = require("./secret")

const validate = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "something went wrong"})
            } else {
                req.user = {
                    username: decodedToken.username,
                    id: decodedToken.id
                }
                next();
            }
        })
    } else {
        res.status(400).json({ message: "No token? No mountains."})
    }
}

module.exports = validate;