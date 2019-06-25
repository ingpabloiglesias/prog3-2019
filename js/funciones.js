//funciona?
function getEdad(FechaNacimiento) {

    let fechaNace = new Date(FechaNacimiento);
    let fechaActual = new Date()

    let mes = fechaActual.getMonth();
    let dia = fechaActual.getDate();
    let año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);

    edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));
   
    return edad;
}
//primera letra en mayusculas
function capitalizar(string){ 
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
//no deben haber mas returns
//agregar como tabla <tr> en html
function getNombreApellido(nombre, apellido){
    creaTr = `<tr><td>${capitalize(nombre)}${capitalize(apellido)}</td> 
    <td>${capitalize(apellido)}${capitalize(nombre)}</td> 
    <td>${capitalize(apellido)}, ${capitalize(nombre)}</td> 
    <td>${nombre.toLowerCase()}-${apellido.toLowerCase()}</td> </tr>`
}

/*
document.getElementById("tabla-verificaciones").getElementsByTagName("tbody")[0].innerHTML += crearTr;*/

//averiguar como traer datos
function getDatos(){
    getEdad();
}

exports.getEdad = getEdad;
exports.getNombreApellido = getNombreApellido;