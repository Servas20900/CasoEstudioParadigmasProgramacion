function esNoVacio(valor){
 return typeof valor == 'string' && valor.trim().length > 0;
}

function esAnioValido(valor){
    const anio = Number (valor);
    return Number.isInteger(anio) && anio > 1800;
}
function codigoRepetido(codigo, libros) {
    return libros.some((libro) => libro.codigo == codigo);
}

module.exports = {esNoVacio, esAnioValido, codigoRepetido};