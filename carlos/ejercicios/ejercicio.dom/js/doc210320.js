
document.addEventListener("DOMContentLoaded", () => {

   titulo();
   clickBoton();

});

let estadoBoton = false;
let verMas = document.querySelector('#ejercicio button')
let tituloCambios = document.querySelector('#ejercicio h1')

let titulos =["Yo", "cambio", "cada", "1/2", "segundo"];


const titulo = (e) =>{

	let i = 0;
	
	setInterval(() =>{

		tituloCambios.innerText = titulos[i];

		if (i != (titulos.lenght -1)){

			i++;

		} else{
			
			i = 0;
		}

	},500);

}


const clickBoton = () => {

	let parrafo = document.querySelector('#ejercicio p');

	verMas.addEventListener("click, () =>"{
		
		estadoBoton =! estadoBoton
	
		//aplica estilos
		if (estadoBoton == true) {

			verMas.innerText = "Cerrar";
			parrafo.style.display = "block"
		
		}	else {
			verMas.innerText = "Ver más";
			parrafo.style.display = "none"
		}

	

	})
}