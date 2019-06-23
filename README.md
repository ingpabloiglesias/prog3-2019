# prog3-2019
Repositorio de Lautaro para practicar en Prog 3 - ISVP
## Correr en docker
### Instalar docker
Instalar docker
> Por favor siga la [guia oficial de docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

```
docker build . -t prog3
```

### Correr servidor en devmode

En el directorio raiz del proyecto

```
docker run -p 8000:8000 -v $(pwd):/srv/prog3-2019/ prog3
```

### Correr tests

En el directorio raiz del proyecto

```
docker run  prog3 npm run test src/test --recursive
```

## Correr en local

### Instalación Linux
Instalar node

```bash
sudo apt-get update
```
```bash
sudo apt-get install node
```

Instalar npm
```bash
sudo apt-get update
```
```bash
sudo apt-get install npm
```
Instalar dependencias
```bash
npm install package.json
```

### Correr servidor
```bash
node src/server.js
```

### Correr tests
```bash
npm test src/test --recursive
```