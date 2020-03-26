
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
commentRoute.get("/:mountain_id", (req, res) => {
    const {mountain_id} = req.params;
    Comments.getCommentsById(mountain_id)
        .then(comments => res.status(200).json(comments))
        .catch(err => res.status(500).json(err))
})













module.exports = commentRoute