const express = require("express");
const mountainRoute = express.Router(); 
const Mountains = require("./mountain-model");
const validate = require("../middleware-and-auth/validate")

mountainRoute.get("/", validate,(req, res) => {
    Mountains.getMountains()
        .then(mntns => res.status(200).json(mntns))
        .catch(err => res.status(500).json(err))
})

mountainRoute.post("/", validate, (req, res) => {
    Mountains.addPlace(req.body)
        .then(mntn => {
            res.status(200).json(mntn)
        })
        .catch(err => res.status(500).json(err))
})

mountainRoute.delete("/:id", validate, (req, res) => {
    const {id} = req.params;
    Mountains.removeMountain(id)
        .then(mntn => res.status(200).json({message: "removed"}))
        .catch(err => res.status(500).json(err))
})

module.exports = mountainRoute;