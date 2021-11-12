let registro = [];


function validar_nombreUsuario(string){

    var in_usuario = String(string);

    const patron = /^[A-z0-9]+$/;

    if(patron.test(in_usuario) && in_usuario.length > 3 && in_usuario.length <= 9 )
    {
        console.log("IF user")
        return true;
    }
    else
    {
        console.log("ELSE user")
        return false;
    }
}

function validar_contrasena(string){

    let in_contrasena = String(string);

    const patron = /^[A-z0-9]+$/;

    if(patron.test(in_contrasena) && in_contrasena.length >= 6 )
    {
        console.log("IF passw")
        return true;
    }
    else
    {
        console.log("ELSE passw")
        return false;
    }
}

function agregarRegistro(){

    let usuario = document.getElementById('in_usuario').value;
    let contrasena = document.getElementById('in_contrasena').value;

    //Validar la info del formulario de registro
    let valida_usuario = validar_nombreUsuario(usuario);
    let valida_contrasena = validar_contrasena(contrasena);

    console.log(`Nombre usuario: ${usuario}\nNombre contrasena: ${contrasena}`);

    try
    {
        if(valida_usuario){
            if(valida_contrasena){
                registro.push({
                    "usuario": usuario,
                    "contrasena": contrasena});
    
                console.log(`Nombre usuario: ${usuario}\nNombre contrasena: ${contrasena}`);
    
    
            }
        }
        console.log(`Nombre usuario: ${usuario}\nNombre contrasena: ${contrasena}`);
    }
    catch(error)
    {
        alert(error);
    }

    //Si la info es correcta, agregar al array de registros

}


/*

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;
*/