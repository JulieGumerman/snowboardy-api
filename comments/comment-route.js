const express = require("express")
const commentRoute = express.Router()
const Comments = require("./comment-model")

commentRoute.get("/", (req, res) => {
    Comments.getComments()
        .then(comments => res.status(200).json(comments))
        .catch(err => res.status(500).json(err))
})

commentRoute.post("/", (req, res) => {
    Comments.addComment(req.body)
        .then(comment => 
            res.status(200).json(comment)
        )
        .catch(err=> {
            res.status(500).json(err)
        })
})












module.exports = commentRoute