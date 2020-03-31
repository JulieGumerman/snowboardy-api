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

const getCommentsByMountainId = (mountain_id) => {
    return db('comments as c')
        .where("mountain_id", mountain_id)
        .join('mountains as m', 'c.mountain_id', 'm.id')
        .join('users as u', 'c.user_id', 'u.id')
        .select('c.id', 'c.mountain_id', 'c.comment', 'u.username', 'm.mountain_name')


}

module.exports = {
    getCommentsByMountainId,
    getComments,
    addComment
}