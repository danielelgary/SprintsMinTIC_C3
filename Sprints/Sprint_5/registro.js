let registros = [];

function agregarRegistro(){
    
    //let usuario = document.getElementById('in_usuario').value;
    //let contrasena = document.getElementById('in_contrasena').value;

    //Validar la info del formulario de registro
    //let valida_usuario = validar_nombreUsuario(usuario);
    //let valida_contrasena = validar_contrasena(contrasena);

    let valida_usuario = true;
    let valida_contrasena = true;

    try
    {
        if(valida_usuario){
            if(valida_contrasena){
                registros.push({
                    "usuario": document.getElementById('in_usuario').value,
                    "contrasena": document.getElementById('in_contrasena').value});   
            }
        }
 
        let arreglito = filtrarPorContrasena(registros, 6);
    }
    catch(error)
    {
        console.log(error);
    }
}

function filtrarPorContrasena(arreglo, filtro){
    let arregloNuevo = [];
    let _arreglo = arreglo;
    let _filtro = Number(filtro);

    console.log("El tipo del arreglo recibido es: " + (typeof _arreglo));
    
    for (let item = 0; item < _arreglo.length; item++) {
        const element = _arreglo[item];

        if(element.contrasena.length <= _filtro)
        {
            console.log("Filtrado de contraseña");
            arregloNuevo.push(element);
        }
    }
    return arregloNuevo;
}

module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;
