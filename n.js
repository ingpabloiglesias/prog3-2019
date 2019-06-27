const express = require("express")
const app= express();
const path = require('path');

app.get('/formulario', function (req,res) {
    res.sendFile(path.join(__dirname, './', 'html1.html'));
});
app.get('/prueba', function(req,res){
    res.sendFile(path.join(__dirname, './', 'prueba.html'));
});
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './', 'html2.html'));
});
app.get('/pag', function(req,res){
    res.sendFile(path.join(__dirname, './', 'html3.html'));
});
app.get('/*', function(req,res){
    res.end("ERROR 404, Página inexistente");
});
app.listen(8005, function() {
    console.log("localhost:8005")});