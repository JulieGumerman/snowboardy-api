const db = require("../data/dbconfig")

const getComments = () => {
    return db("comments");
}

//getCommentsById
//addComment

module.exports = {
    getComments
}