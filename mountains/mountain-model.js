const db = require("../data/dbconfig");

const getMountains = () => {
    return db("mountains");
}

const addPlace = (resort) => {
    return db("mountains").insert(resort, "id")
}

const removeMountain = (id) => {
    return db("mountains").where({id}).delete();
}

const getMountainById = (id) => {
    return db("mountains").where({id}).first();
}

module.exports = {
    getMountains,
    addPlace,
    removeMountain,
    getMountainById
}