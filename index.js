require("dotenv").config();

const express = require("express");
const server = express();

const cors = require("cors");

server.use(express.json());
server.use(cors());

const port = process.env.PORT;

server.listen(port, () => {
    console.log("Haiiii. It works!")
})

server.get("/", (req, res) => {
    res.send("Winter is coming! Get that snowboard ready!!!")
})