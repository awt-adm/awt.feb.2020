// Arrow functions o funciones anonimas " () => {} "
document.addEventListener("DOMContentLoaded", () => {

    operacion();
    textoBoton();

    //Accede a objetos del dom
    let h1 = document.querySelector("#calculos h1");
    let h2 = document.querySelector("#calculos h2");

    console.log("OBJETO: ", h1);

    setTimeout(() => { // Detiene la ejecución por un tiempo

        h1.innerText = "Ya paso 1 segundos";

    }, 1000);


    let tiempo = 1;
    setInterval(() => { // Repite la ejecución por un tiempo determinado

        h2.innerText = tiempo;
        // h2.style.color = "purple"

        tiempo++; // suma 1

    }, 1000);
    // fin accesde a elementos del dom




});
// Eventos
// https://www.w3schools.com/js/js_events.asp
// https://www.w3schools.com/jsref/dom_obj_event.asp
//callback -> función que se ejecuta al finalizar una operación
// Arrow Function -> funciones anónimas  = () => {}

// Arrays o Lista
// Son un grupo de objetos, elementos, valores, numeros, strings, funciones, etc....
// se declaran dentro de corchetes -> [1,2,3,4,5,6,...]
// Su indice se cuenta desde 0
let array = [];
console.log("Arreglo vacio: ", array);
setTimeout(() => {
    array.push("Instituto"); //agrega al array
    array.push("ADM"); //agrega al array
    array.push(["Array", "de", "Arrays"]);
    // console.log("Array de arrays: ", array);

    // Como acceder a los arrays
    // Se hace por medio del índice con corchetes ej. [1] => segundo elemento
    console.log("Accede 1: ", array[2]);
    console.log("Accede 2: ", array[2][1]);

}, 3000);


// variable global va fuera de una función
let boton = document.querySelector('#calcula');
// operaciones
const suma = (arg1 = 1, arg2 = 1) => {

        let resultado;

        resultado = arg1 + arg2;

        producto(resultado);

    }
    // argumentos o parametros
const multiplicacion = (arg1 = 1, arg2 = 1) => {

    let resultado;

    resultado = arg1 * arg2;

    producto(resultado);

}
const potencia = (arg1 = 1, arg2 = 1) => {

        let resultado;

        resultado = arg1 ** arg2;

        producto(resultado);

    }
    //
const operacion = () => {

    // let boton = document.getElementById('suma');
    let suma1 = document.querySelector('#argumento1');
    let suma2 = document.querySelector('#argumento2');
    let select = document.querySelector('.operacion');
    let tipo = "suma";

    // Seleccion default
    select.selectedIndex = 0

    select.addEventListener("change", () => {

        let oper = select.value;

        tipo = oper;

        textoBoton(oper);

    })

    boton.addEventListener("click", () => {

        // TODO: seleccione una funcion con respecto al argumento
        switch (tipo) {
            case "suma":
                suma(parseInt(suma1.value), parseInt(suma2.value));
                break;
            case "multiplica":
                multiplicacion(parseInt(suma1.value), parseInt(suma2.value));
                break;
            case "potencia":
                potencia(parseInt(suma1.value), parseInt(suma2.value));
                break;
            default:
                alert("Esta operación no existe");
        }
    });
}

// Paramentros o argumentos
const producto = (res) => {

    let fin = document.querySelector('.resultado');

    fin.innerHTML = res

}

const textoBoton = (tipo = "Suma") => {
    boton.innerHTML = tipo;
}