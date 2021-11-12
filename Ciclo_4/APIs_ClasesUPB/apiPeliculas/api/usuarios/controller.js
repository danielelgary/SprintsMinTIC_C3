const express = require("express");
const usuariosController = express.Router();


/*
    POST -> Login
    GET -> Obtener usuario por ID
*/

usuariosController.get("/obtenerUsuario/:id", function(request, response){
    let id = request.params.id;
    response.send("El id del usuario es " + id);
});

module.exports = usuariosController;