const express = require('express');
const app = express();
const path = require('path');
//const funciones = ('./js/funciones');

app.get('/', function(pet, res) {
    res.sendFile(path.join(__dirname, './html/', 'index.html'));
});
app.get('/formulario', function(pet, res) {
    res.sendFile(path.join(__dirname, './html/', 'formulario.html'));
});

app.get('/pagina3', function(pet, res) {
    res.sendFile(path.join(__dirname, './html/', 'pagina3.html'));
});
app.get('/pagina4', function(pet, res) {
    res.sendFile(path.join(__dirname, './html/', 'pagina4.html'));
});

app.listen(8001, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 8001!');
});