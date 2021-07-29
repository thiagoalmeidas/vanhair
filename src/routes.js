const express = require('express');
const routes = express.Router();


routes.get("/", (req,res) => res.render("pages/index"))
routes.get("/home", (req,res) => res.render("pages/home"))

module.exports = routes;