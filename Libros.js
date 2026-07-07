const { esNoVacio, esAnioValido, codigoRepetido } = require('./validaciones');

const libros = [];

function registrarLibro(codigo, titulo, autor, anio) {
  if (!esNoVacio(codigo)) return { ok: false, mensaje: 'El código es obligatorio.' };
  if (!esNoVacio(titulo)) return { ok: false, mensaje: 'El título es obligatorio.' };
  if (!esNoVacio(autor)) return { ok: false, mensaje: 'El autor es obligatorio.' };
  if (!esAnioValido(anio)) return { ok: false, mensaje: 'El año debe ser un número entero mayor a 1800.' };

  const codigoLimpio = codigo.trim();
  if (codigoRepetido(codigoLimpio, libros)) {
    return { ok: false, mensaje: `Ya existe un libro con el código "${codigoLimpio}".` };
  }

  libros.push({
    codigo: codigoLimpio,
    titulo: titulo.trim(),
    autor: autor.trim(),
    anio: Number(anio),
    estado: 'disponible',
  });

  return { ok: true, mensaje: 'Libro registrado con éxito.' };
}

function mostrarLibros() {
  return libros;
}

function buscarLibro(termino) {
  const t = termino.trim().toLowerCase();
  return libros.filter(
    (libro) => libro.codigo.toLowerCase() === t || libro.titulo.toLowerCase().includes(t)
  );
}

function prestarLibro(codigo) {
  const codigoLimpio = codigo.trim();
  const libro = libros.find((l) => l.codigo === codigoLimpio);
  if (!libro) return { ok: false, mensaje: `No existe un libro con el código "${codigoLimpio}".` };
  if (libro.estado === 'prestado') {
    return { ok: false, mensaje: `El libro "${libro.titulo}" ya está prestado.` };
  }
  libro.estado = 'prestado';
  return { ok: true, mensaje: `Libro "${libro.titulo}" prestado con éxito.` };
}

module.exports = { registrarLibro, mostrarLibros, buscarLibro, prestarLibro };
