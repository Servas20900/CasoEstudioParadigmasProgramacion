# Sistema de Administración de Biblioteca

Aplicación de consola en Node.js para gestionar el registro, búsqueda y préstamo de libros. Desarrollada como Examen Parcial del curso **Paradigmas de Programación**.

## Funcionalidades

- **Registrar libro**: código, título, autor y año. No permite códigos repetidos.
- **Mostrar libros**: lista todos los libros registrados con su información completa.
- **Buscar libro**: por código exacto o por coincidencia parcial en el título.
- **Prestar libro**: cambia el estado a `prestado`; avisa si el libro ya estaba prestado.

## Instalación

```bash
npm install
```

## Uso

```bash
npm start
```

Esto muestra el menú principal:

```
..... SISTEMA DE BIBLIOTECA .....
1. Registrar libro
2. Mostrar libros
3. Buscar libro
4. Prestar libro
5. Salir
```

Selecciona una opción escribiendo el número correspondiente y sigue las instrucciones en pantalla.

## Estructura del proyecto

```
biblioteca:
main.js          # Menú principal, lectura de opciones y despacho a las funciones
libros.js         # Datos en memoria y lógica de registrar/mostrar/buscar/prestar
validaciones.js   # Reglas de validación reutilizables
package.json
```

## Validaciones

- Código, título y autor son obligatorios.
- El año debe ser un número entero mayor a 1800 (se rechaza texto no numérico).
- No se permiten códigos de libro repetidos.

## Autor

Sebastián Méndez
