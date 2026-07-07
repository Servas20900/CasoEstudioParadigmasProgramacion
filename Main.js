const prompt = require('prompt-sync')({ sigint: true });
const { registrarLibro, mostrarLibros, buscarLibro, prestarLibro } = require('./libros');

function imprimirLibro(libro) {
  console.log(
    `Código: ${libro.codigo} | Título: ${libro.titulo} | Autor: ${libro.autor} | Año: ${libro.anio} | Estado: ${libro.estado}`
  );
}

function mostrarMenu() {
  console.log('\n .......SISTEMA DE BIBLIOTECA.......');
  console.log('1. Registrar libro');
  console.log('2. Mostrar libros');
  console.log('3. Buscar libro');
  console.log('4. Prestar libro');
  console.log('5. Salir');
}

function opcionRegistrar() {
  const codigo = prompt('Código: ');
  const titulo = prompt('Título: ');
  const autor = prompt('Autor: ');
  const anio = prompt('Año: ');
  const resultado = registrarLibro(codigo, titulo, autor, anio);
  console.log(resultado.mensaje);
}

function opcionMostrar() {
  const libros = mostrarLibros();
  if (libros.length === 0) {
    console.log('No hay libros registrados.');
    return;
  }
  libros.forEach(imprimirLibro);
}

function opcionBuscar() {
  const termino = prompt('Código o título a buscar: ');
  const resultados = buscarLibro(termino);
  if (resultados.length === 0) {
    console.log('No se encontró ningún libro con ese criterio.');
    return;
  }
  resultados.forEach(imprimirLibro);
}

function opcionPrestar() {
  const codigo = prompt('Código del libro a prestar: ');
  const resultado = prestarLibro(codigo);
  console.log(resultado.mensaje);
}

function iniciar() {
  let salir = false;
  while (!salir) {
    mostrarMenu();
    const opcion = prompt('Seleccione una opción: ');
    switch (opcion) {
      case '1':
        opcionRegistrar();
        break;
      case '2':
        opcionMostrar();
        break;
      case '3':
        opcionBuscar();
        break;
      case '4':
        opcionPrestar();
        break;
      case '5':
        salir = true;
        console.log('¡Hasta luego!');
        break;
      default:
        console.log('Opción inválida, intente de nuevo.');
    }
  }
}

iniciar();
