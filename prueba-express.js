const express = require('express');
const app = express();
const path = require('path');

app.get('/archivo', function(pet, res) {
  res.sendFile(path.join(__dirname, './', 'prueba.html'));
});

app.listen(8001, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 8001!');
});