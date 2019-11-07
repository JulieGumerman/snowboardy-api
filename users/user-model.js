const db = require("../data/dbconfig.js");

const findById = (id) => {
    return db("users").where({id}).first();
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");
    return findById("id");
}

const findBy = filter => {
    return db("users").where(filter);
}

module.exports = {
    add,
    findBy
};