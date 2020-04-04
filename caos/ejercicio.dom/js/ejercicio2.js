document.addEventListener("DOMContentLoaded", () => {

    titlulo();
    clickBoton();
    // 
    cambiaEstiloTexto();


    //TODO: Apartir de un array repetir y sumar
    let arr = ["ADM", "Instituto", "Web"];
    debug(arr)

}); //ready

// Ejemplo Iteracion
const debug = (array) => {

        let i = 0;
        array.forEach((elemento) => {

            console.log("DEBUG: ", elemento + " : " + i);

            i++;

        })

    }
    // 

let estadoBoton = false;
let verMas = document.querySelector('#ejercicio button');
let tituloCambios = document.querySelector('#ejercicio h1');

let titulos = ["Yo", "Cambio", "Cada", "1/2", "Segundos", "Sin", "Bugs"];

const titlulo = (e) => {

    let i = 0;

    setInterval(() => {

        tituloCambios.innerText = titulos[i];

        if (i != (titulos.length - 1)) {

            i++;

        } else {

            i = 0;

        }

    }, 500);

}

const clickBoton = () => {

    let parrafo = document.querySelector('#ejercicio p');

    verMas.addEventListener("click", () => {

        estadoBoton = !estadoBoton

        // aplica estilos
        if (estadoBoton == true) {

            verMas.innerText = "Cerrar";
            // parrafo.style.display = "block"
            parrafo.style.height = "100px"

        } else {
            verMas.innerText = "Ver Más";
            // parrafo.style.display = "none"
            parrafo.style.height = 0

        }

    })
}


const cambiaEstiloTexto = () => {

    let botonCambia = document.querySelector("#selecciona-fuente button");
    let titulo = document.querySelector("#selecciona-fuente h1");
    let booleano = false;

    botonCambia.addEventListener("click", () => {

        if (booleano != true) {
            titulo.classList.add("font-titulos"); // agrega clase
        } else {
            titulo.classList.remove("font-titulos"); // quita clase
        }

        booleano = !booleano; // cambia su valor a contrario

    });

}