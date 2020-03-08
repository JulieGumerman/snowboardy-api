const db = require("../data/dbconfig")

const getComments = () => {
    return db("comments");
}

//getCommentsById
const getCommentsById = (id) => {
    return db("comments").where({id}).delete()
}

//addComment
const addComment = (comment) => {
    return db("comments").insert(comment, "id")
}

module.exports = {
    getComments,
    getCommentsById,
    addComment
}