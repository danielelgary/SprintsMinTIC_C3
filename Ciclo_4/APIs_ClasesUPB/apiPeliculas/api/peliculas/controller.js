/*
    En el controlador es donde definimos las rutas de endpoints
*/

const express = require("express");
const peliculasController = express.Router(); //Permite crear controladores en un archivo diferente al archivo principal

/*
    GET -> Obtener las peliculas (/obtenerPeliculas)
    GET -> Obtener 1 pelicula por ID (/)
    GET -> Buscar 1 pelicula por Titulo (/)
    POST -> Crear pelicula
    PUT -> Actualizar pelicula
    DELETE -> Eliminar pelicula
*/


peliculasController.get("/obtenerPeliculas", function(request, response){
    response.send("Listado de peliculas...");

});


//Esto es para poderlo utilizar en el archivo principal app.js
module.exports = peliculasController; 