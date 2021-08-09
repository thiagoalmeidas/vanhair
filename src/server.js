const express = require('express')
const app = express();
const routes = require("./routes")
const path = require("path")

// usando template engine
app.set("view engine", "ejs");

// Mudar a localizacao da pasta viwes
app.set('views', path.join(__dirname, 'views'))

// habilitar arquivos statics
app.use(express.static('public'));

app.use(routes)


app.listen(8080)
console.log("Rodando")