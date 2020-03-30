const db = require("../data/dbconfig")

const getComments = () => {
    return db("comments")
}


//getCommentsById
// const getCommentsById = (mountain_id) => {
//     return db("comments").where("mountain_id", mountain_id).delete()
// }

//addComment
const addComment = (comment) => {
    return db("comments").insert(comment, "id")
}

module.exports = {
    getComments,
    addComment
}