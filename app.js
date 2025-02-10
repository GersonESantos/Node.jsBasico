// Importar os módulos
var express = require('express');
var fetch = require('node-fetch');

// App
var app = express();

// Rota
app.get('/', (req, res) => {
    res.send('Hello World');
});

listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});