/*
*/

window.onload = function()
{
    //ONLOAD -> SE EJECUTA AL CARGA LA PAGINA
    inicializadorEventosJS();
}

//RECOMENDACION: SIEMPRE CREAR UN INICIALIZADOR DE EVENTOS DE JAVASCRIPT
//BUSCAR TODOS LOS ELEMENTOS EN LOS QUE SE DEBE INICIALIZAR EVENTOS Y APLICARLOS
function inicializadorEventosJS()
{
    //LLAMAMOS AL DOM Y BUSCAMOS LOS BOTONES QUE NECESITEMOS ASIGNARLE LOS EVENTOS.
    //El DOM busca los elementos y crea una lista con los que cumplan este nombre de clase
    let botonesNav = document.getElementsByClassName("btnCargar");

    //RECORRER 1 A 1 LOS ELEMENTOS Y ADICIONARLES EL EVENTO
    for (let i = 0; i < botonesNav.length; i++) {
        //Recorremos la lista de elementos para asignarles el evento 1 por 1.
        //les decimos el evento a monitorear es el click
        // y cuando ocurra este evento, debe llamar a la funcion cargarHTML
        const boton = botonesNav[i].addEventListener("click", cargarHTML);
        
    }

}

//se necesita el eventoEscuchado ya que es una funcion comun para varios botones
//que genera la informacion de quien fue el elemento que disparo el click
function cargarHTML(eventoEscuchado)
{
    //DEL EVENTO GENERADO CAPTURAMOS EL ELEMENTO QUE LO DISPARA
    let elemento = eventoEscuchado.target; // target es un objeto que trae la info del elemento que disparo el evento
    
    //OBTENEMOS EL ATRIBUTO VALUE DEL ELEMENTO
    let pagina = elemento.value;

    //CON FETCH PODEMOS CARGAR DINAMICAMENTE LA PAGINA SOLICITADA
    fetch(pagina) //devuelve una promesa
        .then(function(respuesta){
            //buscamos en el contenido de la respuesta
            //El contenido de una pagina es un texto, entonces es mas facil capturarla dentro del HTML
            let textoHTML = respuesta.text()
            return textoHTML; //DEVUELVE OTRA PROMESA, entonces debemos aplicar otro .then
        })
            .then(function(html){
                //SE BUSCA EL ELEMENTO HTML DONDE CARGAREMOS LA PAGINA
                document.getElementById("main").innerHTML = html;
            })
            .catch(function(errorGenerado){
                console.log(errorGenerado)
            });//PUEDE SER UNO SOLO PARA AMBOS .then
}