/*let registros = [{
                    "usuario": "Alberto",
                    "contrasena" : "123456"
                },
                {
                    "usuario": "Claudia",
                    "contrasena" : "654321"
                },
                {
                    "usuario": "Daniel",
                    "contrasena" : "123654"
                }
            ];*/

let registros = [];

function validar_captcha(rcaptcha){
    //console.log(rcaptcha == 5 ? true : false);
    return (rcaptcha == 5 ? true : false);
}

function iniciar_sesion(usuario, contrasena, rcaptcha){

    var captchaOk = validar_captcha(rcaptcha);

    if(captchaOk){
        if(registros[0].usuario == usuario && registros[0].contrasena == contrasena){
            console.log("Verifico todo");
            return true;
        }
        else{
            console.log("Verifico 1");
            return false;
        }
    }
    else{
        console.log("No Verifico");
        return false;
    }
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;