const db = require("../data/dbconfig");

const getMountains = () => {
    return db("mountains");
}

const addPlace = (resort) => {
    return db("mountains").insert(resort, "id")
}

module.exports = {
    getMountains,
    addPlace
}