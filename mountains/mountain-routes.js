const express = require("express");
const mountainRoute = express.Router(); 
const Mountains = require("./mountain-model")

mountainRoute.get("/", (req, res) => {
    Mountains.getMountains()
        .then(mntns => res.status(200).json(mntns))
        .catch(err => res.status(500).json(err))
})

mountainRoute.post("/", (req, res) => {
    Mountains.addPlace(req.body)
        .then(mntn => {
            res.status(200).json(mntn)
        })
        .catch(err => res.status(500).json(err))
})

module.exports = mountainRoute;