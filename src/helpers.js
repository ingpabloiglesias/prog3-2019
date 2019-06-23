function getEdad(fecha){
    let fecha_actual = new Date();
    let fecha_nacimiento = new Date(fecha);
    return parseInt((fecha_actual - fecha_nacimiento) / (24 * 3600 * 365.23 * 1000))
}

const formatos = {
    camel_case: 'CAMEL_CASE',
    camel_case_inverso: 'CAMEL_CASE_INVERSO',
    comma_separated: 'COMMA_SEPARATED',
    kebab_case: 'KEBAB_CASE',
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getNombreApellido(nombre, apellido, formato){
    if (formato == formatos.camel_case){
        return `${capitalize(nombre)}${capitalize(apellido)}`;
    }
    if (formato == formatos.camel_case_inverso){
        return `${capitalize(apellido)}${capitalize(nombre)}`;
    }
    if (formato == formatos.comma_separated){
        return `${capitalize(apellido)}, ${capitalize(nombre)}`;
    }
    if (formato == formatos.kebab_case){
        return `${nombre.toLowerCase()}-${apellido.toLowerCase()}`;
    }
}

exports.getEdad = getEdad;
exports.getNombreApellido = getNombreApellido;
exports.formatos = formatos;
