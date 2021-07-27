const express = require('express');
const routes = express.Router();
const views = __dirname + "/views/pages/"


routes.get("/", (req,res) => res.render(views + "index"))
routes.get("/home", (req,res) => res.render(views + "home"))

module.exports = routes;