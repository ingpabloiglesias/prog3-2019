const express = require('express');
const path = require('path');
const helpers = require("./helpers")

const app = express();

app.use(express.static(__dirname + '/public' ));

app.get('/modelo_uno', function(pet, res) {
    res.sendFile(path.join(__dirname, './views/', 'modelo_uno.html'));
});

app.get('/checkout', function(pet, res) {
  res.sendFile(path.join(__dirname, './views/', 'checkout.html'));
});

app.get('/modelos', function(pet, res) {
  res.sendFile(path.join(__dirname, './views/', 'modelos.html'));
});

app.get('', function(pet, res) {
  res.sendFile(path.join(__dirname, './views/', 'home.html'));
});

app.listen(8000, function() {
  console.log('The aplication is running on port 8000!');
});