const http = require("http");

http.createServer(function(peticion, respuesta) {
   respuesta.writeHead(200, {'Content-Type': 'text/plain'});
   respuesta.end('Hola Chicos!\n');
}).listen(8000);

console.log('Servidor en la url http://127.0.0.1:8000/');