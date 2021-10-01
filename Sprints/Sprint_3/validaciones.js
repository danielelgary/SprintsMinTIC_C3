function validar_nombreUsuario(string){

    var in_usuario = String(string);

    const patron = /^[A-z0-9]+$/;

    if(patron.test(in_usuario) && in_usuario.length > 3 && in_usuario.length <= 9 )
    {
        //console.log("IF user")
        return true;
    }
    else
    {
        //console.log("ELSE user")
        return false;
    }
}

function validar_contrasena(string){

    let in_contrasena = String(string);

    const patron = /^[A-z0-9]+$/;

    if(patron.test(in_contrasena) && in_contrasena.length >= 6 )
    {
        //console.log("IF passw")
        return true;
    }
    else
    {
        //console.log("ELSE passw")
        return false;
    }
}

function validar_usuarioContrasena(string1, string2){
    validar_nombreUsuario(string1);
    validar_contrasena(string2);

}


module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;
