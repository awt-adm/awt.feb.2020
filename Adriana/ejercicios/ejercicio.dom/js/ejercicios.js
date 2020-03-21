// Arrow functions o funciones anonimas " () => {} "
document.addEventListener("DOMContentLoaded", () => {
  operacion();
  textoBoton();
});
// Eventos
// https://www.w3schools.com/js/js_events.asp
// https://www.w3schools.com/jsref/dom_obj_event.asp

// variable global va fuera de una funciones
let global = 10;
let boton = document.querySelector("#suma");
// operaciones
const suma = (arg1 = 1, arg2 = 1) => {
  let resultado;

  resultado = arg1 + arg2;

  producto(resultado);
};

const multiplicacion = (arg1 = 1, arg2 = 1) => {
  let resultado;

  resultado = arg1 * arg2;

  producto(resultado);
};
const potencia = (arg1 = 1, arg2 = 1) => {
  let resultado;

  resultado = arg1 ** arg2;

  producto(resultado);
};
//
const operacion = () => {
  // let boton = document.getElementById('suma');
  let suma1 = document.querySelector("#argumento1");
  let suma2 = document.querySelector("#argumento2");
  let select = document.querySelector(".operacion");
  let tipo = "suma";

  // Seleccion default
  select.selectedIndex = 0;

  select.addEventListener("change", () => {
    let oper = select.value;

    tipo = oper;

    textoBoton(oper);
  });

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
};

// Paramentros o argumentos
const producto = res => {
  let fin = document.querySelector(".resultado");

  fin.innerHTML = res;
};

const textoBoton = (tipo = "Suma") => {
  boton.innerHTML = tipo;
};
