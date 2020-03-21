document.addEventListener("DOMContentLoaded", () => {
  funcion();
  suma(1000, 50);
  // console.log("Scripts OK.");
});
//Arrow Functions o funciones anonimas "() => {}"
const funcion = () => {
  return console.log("Soy constante");
};

const suma = (arg1, arg2) => {
  let resultado;
  resultado = arg1 + arg2;

  return console.log(resultado);
};
