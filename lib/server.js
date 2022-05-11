// Usando obejto express
const express = require("express");
// App de Express
const app = express();
// Puerto en el que vamos a ver nuestra app: localhost_3000
const port = 3000;

// Path inicial, responderá a la url localhost:3000
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Respondiendo texto
//localhost:3000/launchx
app.get("/launchx", (req, res) => {
    res.send("Bienvenidos a launch X");
});

// Regresando un objeto 
// localhost:300/explorersInNode
app.get("/explorersInNode", (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"};
    res.send(explorer);
});

// Query Params: Recibir parámetros por la url
// http://localhost:3000/explorers/pao
// req.params = {"explorerName:"Paola"""}
app.get("/explorers/:explorerName", (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

// Con esto inicializamos esta app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});