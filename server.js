const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("pages/index");
})

/*app.get("/sobre", function(req,res){
    res.render("about");
})*/
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8083)
console.log("Rodanado")