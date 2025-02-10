// imoportar modulos
var express = require('express');
var fetch = require('node-fetch');

// app
var app = express();

//rota
app.get('/', function(req, res) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => console.log(response));
    res.end();


});

//servidor

app.listen(3000, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });