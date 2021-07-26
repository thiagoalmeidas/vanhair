const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("pages/index");
})

app.get("/home", function(req,res){
    res.render("pages/home");
})

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8106)
console.log("Rodando")