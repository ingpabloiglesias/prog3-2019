const express = require('express');
const app = express();

app.get('/chicos', function(pet, res) {
  res.send('Hola Mundo!');
});

app.listen(8001, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 8001!');
});